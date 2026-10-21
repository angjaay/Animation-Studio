"""The film score as notes: a pure function from the sound cues to a list of Note(t, inst, pitch, vel, dur).

120 BPM (bar = 2 s, beat = 0.5 s), key of D. Every onset sits on the sixteenth-note grid (0.125 s); cue times that
fall between grid lines are snapped to the nearest one (at most 17 ms, well inside a frame). `inst` names a voice in
render.VOICES; `pitch` is a sharp-spelled note name ('F#4') or None for unpitched percussion; `vel` is 0..1; `dur` is
how long the note is held, in seconds (the release follows it).

Form (seconds; the acts come from the cues):
  0-12    act 01  orbit: bass/cello drone breathing every bar, piano pp, lights at the pings
  12-24   act 02  piano pulse on a pedal A; one layer joins at each plate that lands; build, stop-down 23.75
  24-34   act 03  impact (gong, bass drum, double bass); the core note D and its piano motif D-A-D
  34-52   act 04  core engine: pizz cello ostinato, one rising vibraphone note per module activation
  52-62   act 05  build to the second stop-down; impact 56.0; sonic logo A4 / D5 / F#5 (vibraphone, octave shimmer)
  62-76   act 06  Workspace: light piano and vibraphone, the logo's first note A4 as motif
  76-90   act 07  Data Enrichment: pizz, crotales sparkle per row, motif D5
  90-106  act 08  Enterprise: full strings, bass drum per sector, motif F#5
  106-112 act 09  the three notes climb back and become the D-F#-A chord at 108.0
  112-120 act 10  sting at 112.5, the logo echoed in its tail, the chord re-voiced at 116.0 under the tagline
                  and held under the end card to the 0.8 s fade
"""
import json
import math
import re
from pathlib import Path
from typing import NamedTuple, Optional

BAR = 2.0
BEAT = 0.5
STEP = 0.125
NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
CUES = Path(__file__).resolve().parent.parent / 'cues.json'


class Note(NamedTuple):
    t: float
    inst: str
    pitch: Optional[str]
    vel: float
    dur: float


def midi(name):
    """'D4', 'F#4', 'Fs4' and 'Gb4' all parse; middle C is C4 = 60."""
    m = re.fullmatch(r'([A-Ga-g])(#|s|b)?(-?\d)', name)
    if not m:
        raise ValueError(f'not a note name: {name!r}')
    letter, acc, octave = m.groups()
    return NAMES.index(letter.upper()) + {'#': 1, 's': 1, 'b': -1}.get(acc, 0) + 12 * (int(octave) + 1)


def note_name(m):
    return f'{NAMES[m % 12]}{m // 12 - 1}'


def transpose(name, semitones):
    return note_name(midi(name) + semitones)


def load_cues(path=CUES):
    return json.loads(Path(path).read_text())


def cue_times(cues, prefix):
    """Seconds of the cue events whose id starts with `prefix`, in order."""
    return sorted(e['f'] / cues['fps'] for e in cues['events'] if e['id'].startswith(prefix))


def paired(cues, prefix, values):
    """[(time, value)] for the cues of one group; the score writes one value per cue, so the counts must agree."""
    times = cue_times(cues, prefix)
    if len(times) != len(values):
        raise ValueError(f'cue group {prefix!r}: {len(times)} cues in the cue sheet, the score is written for '
                         f'{len(values)}')
    return list(zip(times, values))


def stopdowns(cues):
    """The silent holes: from each stop-down to the impact that follows it."""
    def at(kind):
        return sorted(e['f'] / cues['fps'] for e in cues['events'] if e['kind'] == kind)
    return [(s, min(i for i in at('impact') if i > s)) for s in at('stopdown')]


def bar(n, beat=0.0):
    """Start of bar n (1-based) plus `beat` quarter notes."""
    return (n - 1) * BAR + beat * BEAT


# ------------------------------------------------------------------ harmony
CHORDS = {'D': ('D', (0, 4, 7)), 'Bm': ('B', (0, 3, 7)), 'G': ('G', (0, 4, 7)), 'A': ('A', (0, 4, 7))}


def tone(chord, degree, octave):
    """Chord tone: degree 0 = root, 1 = third, 2 = fifth, 3 = root an octave up ...; the root sits in `octave`."""
    root, steps = CHORDS[chord]
    return note_name(midi(f'{root}{octave}') + steps[degree % 3] + 12 * (degree // 3))


def bass_root(chord):
    """The chord's root for the double bass, between E1 and D#2 (D sits at D2)."""
    m = midi(tone(chord, 0, 1))
    return note_name(m + 12 if m < midi('E1') else m)


# chord tones that sit inside the violin's and the vibraphone's ranges
VIOLIN_TOP = {'D': 'A5', 'Bm': 'F#5', 'G': 'D5', 'A': 'E5'}
VIB_TOP = {'D': 'F#5', 'Bm': 'D5', 'G': 'B4', 'A': 'C#5'}


# The sonic logo is one timbre, the sustained vibraphone, each note doubled an octave up for shimmer by what is
# sourced there: bells for A5 (no A4 bell exists in the Iowa set), crotales for D6 and F#6.
LOGO_SHIMMER = {'A4': ('bells', 'A5'), 'D5': ('crotales', 'D6'), 'F#5': ('crotales', 'F#6')}


def logo_note(s, t, pitch, vel, dur):
    s.add(t, 'vibraphone', pitch, vel, dur)
    inst, up = LOGO_SHIMMER[note_name(midi(pitch))]
    s.add(t, inst, up, vel * 0.7, dur)


def chord_at(t, changes):
    """The chord sounding at t in a list of (time, chord) changes."""
    return [c for s, c in changes if s <= t + 1e-9][-1]


class Score:
    def __init__(self):
        self.notes = []

    def add(self, t, inst, pitch, vel, dur):
        t = round(t / STEP) * STEP
        pitch = note_name(midi(pitch)) if pitch else None
        self.notes.append(Note(t, inst, pitch, round(min(1.0, vel), 3), round(dur, 3)))

    def chord(self, t, inst, pitches, vel, dur):
        for p in pitches:
            self.add(t, inst, p, vel, dur)

    def bows(self, inst, start, end, pitch_at, vel, every=BAR, overlap=0.6, offset=0.0):
        """Re-bowed sustained notes every `every` s from start+offset, each held into the next; none past `end`."""
        t = start + offset
        while t < end - 1e-9:
            for p in pitch_at(t):
                self.add(t, inst, p, vel, min(every + overlap, end - t))
            t += every

    def pulse(self, inst, start, end, step, pitch_at, vel_at):
        t = start
        while t < end - 1e-9:
            for p in pitch_at(t):
                self.add(t, inst, p, vel_at(t), step)
            t += step


def ostinato(chord):
    """Pizzicato eighths over one bar: root, octave, fifth, octave, root, octave, fifth, tenth."""
    r = tone(chord, 0, 2)
    return [r, transpose(r, 12), transpose(r, 7), transpose(r, 12), r, transpose(r, 12), transpose(r, 7),
            tone(chord, 1, 3)]


def pizz_bars(s, start, end, changes, vel):
    t = start
    while t < end - 1e-9:
        pattern = ostinato(chord_at(t, changes))
        k = int(round((t - start) / (BEAT / 2))) % 8
        s.add(t, 'cello_pizz', pattern[k], vel * (1.0 if k % 2 == 0 else 0.78), 0.4)
        t += BEAT / 2


# The rhythmic layer keeps the body moving: the reference launch films run 2-9 onsets/s, the score without it ran
# 0.9/s in the mix. Staccato piano on the two upper chord tones (high-low) alternates with damped crotales on the
# same chord: a soft tick, bright enough to read as an onset. Quarters where the picture breathes (act 01, the
# reveal's opening, the end card's first bars), eighths in acts 02-03, 05, 06 and 09, sixteenths where the film works
# (acts 04, 07, 08). Never in a stop-down, never between the second impact and 60.0 (the logo speaks alone), and
# not after 116.0 (the end card's chord holds).
TICK_LEVEL = 1.4   # the layer's level: every velocity passed to ticks() is scaled by it
TICK = {'D': ('A5', 'D5'), 'Bm': ('F#5', 'B4'), 'G': ('G5', 'D5'), 'A': ('A5', 'E5')}
SPARK = {'D': ('A6', 'D6'), 'Bm': ('F#6', 'D6'), 'G': ('D6', 'F#6'), 'A': ('A6', 'E6')}
TICK_VOICES = ('piano_stacc', 'crotales_damped')


def ticks(s, start, end, changes, vel, step=BEAT / 2, spark=True):
    """The layer from start to end every `step` s: piano on the even steps, crotales on the odd ones (left out with
    spark=False, where other sparkle already sounds)."""
    t = start
    while t < end - 1e-9:
        chord = chord_at(t, changes)
        k = int(round((t - start) / step))
        v = vel * TICK_LEVEL
        if k % 2 == 0:
            s.add(t, 'piano_stacc', TICK[chord][k // 2 % 2], v, 0.15)
        elif spark:
            s.add(t, 'crotales_damped', SPARK[chord][k // 2 % 2], v * 0.8, 0.05)
        t += step


def per_bar(start, chords):
    return [(start + i * BAR, c) for i, c in enumerate(chords)]


# ------------------------------------------------------------------ the acts
def act01(s, cues):
    """Orbit at dawn: a breathing drone and a few piano lights."""
    changes = [(0.0, 'D'), (4.0, 'Bm'), (8.0, 'G'), (10.0, 'A')]
    s.chord(0.0, 'piano', ['D3', 'A3'], 0.42, 6.0)
    s.bows('bass_arco_soft', 0.0, 12.0, lambda t: ['D2'], 0.42)
    under = {'D': 'A2', 'Bm': 'B2', 'G': 'G2', 'A': 'A2'}
    s.bows('cello_arco_soft', 0.0, 12.0, lambda t: [under[chord_at(t, changes)]], 0.34, offset=1.0)
    ticks(s, 4.0, 12.0, changes, 0.36, step=BEAT)
    for t, chord in changes[1:]:
        s.chord(t, 'piano', [tone(chord, 0, 2), tone(chord, 2, 2)], 0.34, 4.0)
    melody = [(2.0, 'F#4'), (3.0, 'A4'), (4.0, 'D5'), (5.5, 'C#5'), (8.0, 'B4'), (9.0, 'D5'), (11.0, 'E5'),
              (11.5, 'C#5')]
    for t, p in melody:
        s.add(t, 'piano', p, 0.32, 1.5)
    lights = dict(zip(['cities', 'vegetation', 'constellation'], ['F#5', 'A5', 'D6']))
    for name, p in lights.items():
        for t in cue_times(cues, f'act01:{name}'):
            s.add(t, 'piano', p, 0.4, 2.0)
    for t in cue_times(cues, 'act01:constellation'):
        s.add(t, 'crotales', 'D6', 0.3, 3.0)


def act02(s, cues, stop):
    """The pulse on a pedal A thickens as the plates land; bar 12 builds into the stop-down."""
    changes = [(12.0, 'D'), (16.0, 'Bm'), (20.0, 'G'), (22.0, 'A')]
    build = 22.0
    ticks(s, 12.0, build, changes, 0.42)
    s.pulse('piano', 12.0, build, BEAT / 2, lambda t: ['A4'],
            lambda t: 0.3 + 0.12 * (t - 12.0) / 10 + (0.05 if (t * 2) % 1 == 0 else 0))
    weight = {round(e['f'] / cues['fps'], 3): e.get('weight', 1.0)
              for e in cues['events'] if e['id'].startswith('act02:plate:')}
    layers = [
        lambda t0, w: s.pulse('piano', t0, build, BEAT, lambda t: [tone(chord_at(t, changes), 0, 3)],
                              lambda t: 0.3 + 0.12 * w),
        lambda t0, w: s.pulse('cello_pizz', t0, build, BEAT, lambda t: [tone(chord_at(t, changes), 0, 2)],
                              lambda t: 0.36 + 0.14 * w),
        lambda t0, w: s.pulse('piano', t0 + BEAT / 2, build, BEAT, lambda t: [tone(chord_at(t, changes), 1, 4)],
                              lambda t: 0.24 + 0.1 * w),
        lambda t0, w: s.bows('bass_arco_soft', t0, build, lambda t: [bass_root(chord_at(t, changes))],
                             0.34 + 0.1 * w),
        lambda t0, w: s.bows('violin_arco_soft', t0, build, lambda t: [VIOLIN_TOP[chord_at(t, changes)]],
                             0.24 + 0.1 * w),
        lambda t0, w: s.pulse('vibraphone', t0, build, BAR / 2, lambda t: [VIB_TOP[chord_at(t, changes)]],
                              lambda t: 0.3),
        lambda t0, w: s.bows('cello_arco_soft', t0, build, lambda t: [tone(chord_at(t, changes), 1, 3)],
                             0.28 + 0.08 * w),
    ]
    for t0, layer in paired(cues, 'act02:plate:', layers):
        layer(t0, weight[round(t0, 3)])
    # bar 12: sixteenths, strings swell, cymbal roll, all cut by the stop-down
    s.pulse('piano', build, stop, BEAT / 4, lambda t: ['A4'], lambda t: 0.3 + 0.12 * (t - build) / (stop - build))
    pizz_bars(s, build, stop, changes, 0.4)
    swell = stop - build
    s.add(build, 'bass_arco_swell', 'A1', 0.46, swell)
    s.chord(build, 'cello_arco_swell', ['E3', 'A3'], 0.4, swell)
    s.chord(build, 'violin_arco_swell', ['C#5', 'E5'], 0.36, swell)
    s.add(20.0, 'cymbal_roll_swell', None, 0.4, stop - 20.0)


def impact(s, t):
    """Low layers only on the frame; the designed impact and riser are the SFX layer's."""
    s.add(t, 'gong', None, 0.85, 8.0)
    s.add(t, 'bass_drum', None, 0.9, 3.0)
    s.chord(t, 'bass_arco', ['D1', 'D2'], 0.68, 3.0)


def act03(s, cues):
    """Reveal: the core note D, then its motif D-A-D answered as the name is spelled."""
    t_hex, t_arrow, t_mark = (cue_times(cues, f'act03:{k}')[0] for k in ('hexagon', 'arrow', 'mark'))
    gal, vis = cue_times(cues, 'act03:syllable')
    changes = [(24.0, 'D'), (32.0, 'G'), (33.0, 'A')]
    s.bows('bass_arco_soft', t_hex, 34.0, lambda t: [bass_root(chord_at(t, changes))], 0.42)
    s.bows('cello_arco_soft', t_hex, 34.0, lambda t: [tone(chord_at(t, changes), 0, 3)], 0.38, offset=1.0)
    s.chord(t_hex, 'piano', ['D3', 'D4'], 0.52, 2.0)
    ticks(s, t_hex, 28.0, changes, 0.38, step=BEAT)
    ticks(s, 28.0, 34.0, changes, 0.42)
    s.add(t_arrow, 'piano', 'A4', 0.46, 1.5)
    s.chord(t_mark, 'piano', ['D4', 'D5'], 0.52, 2.0)
    s.add(gal, 'piano', 'A4', 0.42, 1.0)
    s.add(vis, 'piano', 'D5', 0.44, 1.5)
    s.bows('violin_arco_soft', 28.0, 32.0, lambda t: ['A4'], 0.3)
    s.add(32.0, 'violin_arco_soft', 'B4', 0.3, 1.3)
    s.add(33.0, 'violin_arco_soft', 'C#5', 0.32, 1.3)
    s.chord(30.0, 'piano', ['D3', 'A3', 'F#4'], 0.4, 2.0)
    for k, t in enumerate([30.5, 31.0, 31.5, 32.0, 32.5, 33.0, 33.5]):
        chord = chord_at(t, changes)
        s.add(t, 'piano', tone(chord, (k + 1) % 4, 4), 0.38, 1.0)
    s.chord(32.0, 'piano', [tone('G', 0, 2), tone('G', 2, 2)], 0.34, 1.0)
    s.chord(33.0, 'piano', [tone('A', 0, 2), tone('A', 2, 2)], 0.36, 1.0)


def act04(s, cues):
    """Core engine: pizz ostinato and a heartbeat; each module lights one vibraphone note, rising."""
    changes = per_bar(34.0, ['D', 'D', 'D', 'Bm', 'G', 'A', 'Bm', 'D', 'A'])
    pizz_bars(s, 34.0, 36.0, changes, 0.32)
    pizz_bars(s, 36.0, 52.0, changes, 0.48)
    ticks(s, 34.0, 36.0, changes, 0.38, step=BEAT)
    ticks(s, 36.0, 52.0, changes, 0.44, step=BEAT / 4)
    s.bows('bass_arco_soft', 34.0, 52.0, lambda t: [bass_root(chord_at(t, changes))], 0.42)
    for t, chord in changes[1:]:
        s.chord(t, 'piano', [tone(chord, 0, 3), tone(chord, 2, 3), tone(chord, 1, 4)], 0.4, 1.8)
    for t, _ in changes[2:]:
        s.add(t, 'bass_drum', None, 0.3, 1.5)
    for t, p in paired(cues, 'act04:module:', ['A4', 'B4', 'D5', 'E5', 'F#5', 'A5']):
        s.add(t, 'vibraphone', p, 0.58, 1.5)
        s.add(t + 0.75, 'vibraphone', p, 0.3, 0.75)   # dotted-eighth echo, played
        s.add(t + 1.5, 'vibraphone', p, 0.16, 0.5)
    s.bows('violin_arco_soft', 44.0, 52.0, lambda t: [VIOLIN_TOP[chord_at(t, changes)]], 0.3)


def act05(s, cues, stop, hit):
    """One core, then three ways: build into the second stop-down, impact, the sonic logo."""
    changes = [(52.0, 'D'), (54.0, 'A')]
    s.chord(52.0, 'piano', ['D3', 'A3', 'D4', 'F#4'], 0.44, 2.0)
    s.add(52.0, 'bass_arco_soft', 'D2', 0.4, 2.4)
    s.add(52.0, 'violin_arco_soft', 'A4', 0.3, 2.4)
    pizz_bars(s, 52.0, stop, changes, 0.42)
    ticks(s, 52.0, 54.0, changes, 0.42)
    ticks(s, 60.0, 62.0, [(60.0, 'D')], 0.28)   # after the logo has spoken, well under its ring
    s.pulse('piano', 54.0, 55.0, BEAT / 2, lambda t: ['A4'], lambda t: 0.36 + 0.08 * (t - 54.0))
    s.pulse('piano', 55.0, stop, BEAT / 4, lambda t: ['A4'], lambda t: 0.42 + 0.08 * (t - 55.0) / (stop - 55.0))
    s.add(54.0, 'bass_arco_swell', 'A1', 0.46, stop - 54.0)
    s.chord(54.0, 'cello_arco_swell', ['A2', 'E3'], 0.4, stop - 54.0)
    s.chord(54.0, 'violin_arco_swell', ['C#5', 'E5'], 0.36, stop - 54.0)
    s.add(53.0, 'cymbal_roll_swell', None, 0.4, stop - 53.0)
    impact(s, hit)
    s.bows('bass_arco_soft', hit + 1.0, 62.0, lambda t: ['D2'], 0.38)
    s.bows('cello_arco_soft', hit + 1.0, 62.0, lambda t: ['A2', 'D3'], 0.36, offset=1.0)
    for e in cues['events']:
        if e['id'].startswith('act05:product:'):
            logo_note(s, e['f'] / cues['fps'], e['pitch'], 0.52, 6.0)
    s.chord(60.0, 'piano', ['A3', 'D4', 'F#4'], 0.38, 2.0)
    s.add(61.0, 'piano', 'A4', 0.36, 1.0)


def act06(s):
    """Workspace: light piano arpeggios that touch A4 on every downbeat, vibraphone, a low cello."""
    changes = per_bar(62.0, ['D', 'Bm', 'G', 'A', 'D', 'G', 'A'])
    ticks(s, 62.0, 76.0, changes, 0.42)
    for t, chord in changes:
        s.add(t, 'piano', 'A4', 0.52, 1.0)
        for beat, degree in ((1, 1), (2, 2), (3, 3)):
            s.add(t + beat * BEAT, 'piano', tone(chord, degree, 4), 0.4, 0.8)
        s.add(t, 'piano', tone(chord, 0, 2), 0.42, 1.8)
        s.add(t + BAR / 2, 'piano', tone(chord, 2, 2), 0.36, 0.9)
        s.add(t + BAR / 2, 'vibraphone', VIB_TOP[chord], 0.34, 1.0)
    s.bows('cello_arco_soft', 62.0, 76.0, lambda t: [tone(chord_at(t, changes), 0, 2)], 0.4)
    s.bows('bass_arco_soft', 62.0, 76.0, lambda t: [bass_root(chord_at(t, changes))], 0.34)


def act07(s, cues):
    """Data Enrichment: pizz drive, D5 on every downbeat, crotales for every row that fills in."""
    changes = per_bar(76.0, ['Bm', 'G', 'D', 'A', 'Bm', 'G', 'A'])
    pizz_bars(s, 76.0, 90.0, changes, 0.48)
    row_times = cue_times(cues, 'act07:row:')
    first, last = math.floor(row_times[0]), math.ceil(row_times[-1] + 0.25)
    ticks(s, 76.0, first, changes, 0.44, step=BEAT / 4)
    ticks(s, first, last, changes, 0.44, spark=False)   # the rows' own crotales and pops sparkle here
    ticks(s, last, 90.0, changes, 0.44, step=BEAT / 4)
    s.bows('bass_arco_soft', 76.0, 90.0, lambda t: [bass_root(chord_at(t, changes))], 0.38)
    s.bows('cello_arco_soft', 76.0, 90.0, lambda t: [tone(chord_at(t, changes), 2, 2)], 0.32, offset=1.0)
    for t, chord in changes:
        s.add(t, 'piano', 'D5', 0.5, 1.2)
        s.add(t, 'piano', tone(chord, 0, 2), 0.4, 1.8)
        s.add(t + BAR / 2, 'piano', tone(chord, 1, 4), 0.36, 0.9)
    rows = ['D6', 'E6', 'F#6', 'A6', 'F#6', 'E6', 'D6', 'E6', 'F#6', 'A6']
    for t, p in paired(cues, 'act07:row:', rows):
        s.add(t, 'crotales', p, 0.4, 2.5)
    for t, p in paired(cues, 'act07:flow:', ['G4', 'B4', 'D5', 'G5']):
        s.add(t, 'vibraphone', p, 0.34, 1.0)


def act08(s, cues):
    """Enterprise: full strings with F#5 on top, bass drum on every sector, crotales on the flashes."""
    changes = per_bar(90.0, ['D', 'Bm', 'G', 'A', 'D', 'Bm', 'G', 'A'])
    ticks(s, 90.0, 106.0, changes, 0.52, step=BEAT / 4)
    s.bows('bass_arco', 90.0, 106.0, lambda t: [bass_root(chord_at(t, changes))], 0.5)
    s.bows('cello_arco', 90.0, 106.0, lambda t: [tone(chord_at(t, changes), 0, 3), tone(chord_at(t, changes), 2, 2)],
           0.42)
    tops = {'D': ('F#5', 'A5'), 'Bm': ('F#5', 'D5'), 'G': ('F#5', 'D5'), 'A': ('E5', 'C#5')}
    for t, chord in changes:
        first, second = tops[chord]
        s.add(t, 'violin_arco', first, 0.46, 1.2)
        s.add(t + BAR / 2, 'violin_arco', second, 0.42, 1.2)
        s.add(t, 'piano', tone(chord, 0, 2), 0.38, 1.0)
        s.add(t + BAR / 2, 'piano', tone(chord, 0, 2), 0.32, 1.0)
        s.chord(t, 'piano', [tone(chord, d, 4) for d in (0, 1, 2)], 0.34, 1.5)
    pizz_bars(s, 90.0, 106.0, changes, 0.4)
    sectors = cue_times(cues, 'act08:sector:')
    for t in sectors:
        s.add(t, 'bass_drum', None, 0.7, 3.0)
    for t, _ in changes:
        if all(abs(t - x) > 0.5 for x in sectors):
            s.add(t, 'bass_drum', None, 0.34, 1.5)
    for t, p in paired(cues, 'act08:flash:', ['D6', 'F#6', 'A6']):
        s.add(t, 'crotales', p, 0.45, 2.5)


def act09(s, cues):
    """The three product notes climb back over an A pedal and become the D-F#-A chord at 108."""
    for t, p in paired(cues, 'act09:comet:', ['A4', 'D5', 'F#5']):
        logo_note(s, t, p, 0.5, 4.0)
        s.add(t, 'piano', p, 0.34, 1.5)
    s.add(106.0, 'bass_arco_soft', 'A1', 0.42, 2.2)
    ticks(s, 106.0, 108.0, [(106.0, 'A')], 0.38)
    ticks(s, 108.0, 112.0, [(108.0, 'D')], 0.4)
    s.add(106.0, 'cello_arco_soft', 'E3', 0.36, 2.2)
    t = cue_times(cues, 'act09:chord')[0]
    s.chord(t, 'piano', ['D2', 'A2', 'D3', 'F#4', 'A4'], 0.4, 4.0)
    s.add(t, 'gong', None, 0.3, 4.0)
    for start in (t, t + BAR):
        s.add(start, 'bass_arco', 'D2', 0.42, 2.6)
        s.chord(start, 'cello_arco', ['D3', 'F#3'], 0.37, 2.6)
        s.chord(start, 'violin_arco', ['A4', 'D5', 'F#5'], 0.34, 2.6)
    for t in cue_times(cues, 'act09:network'):
        s.add(t, 'vibraphone', 'A5', 0.36, 1.5)


def act10(s, cues):
    """The sting: the logo chord on everything at once; the piano echoes the three notes under the phrase lines
    while the strings re-bow; at 116.0 (the tagline) the chord is re-voiced and rings to the end of the film."""
    t = cue_times(cues, 'act10:logo')[0]
    s.add(t, 'gong', None, 0.45, 7.0)
    s.add(t, 'bass_drum', None, 0.46, 3.0)
    s.add(t, 'cymbal_crash', None, 0.34, 4.0)
    s.add(t, 'bass_arco', 'D2', 0.46, 3.5)
    s.add(t, 'cello_arco', 'D3', 0.42, 3.5)
    s.chord(t, 'violin_arco', ['A4', 'F#5'], 0.36, 3.5)
    for p in ('A4', 'D5', 'F#5'):
        logo_note(s, t, p, 0.4, 6.0)
    s.chord(t, 'piano', ['D2', 'D3', 'A3', 'F#4', 'A4'], 0.4, 6.0)
    for when, p in paired(cues, 'act10:phrase:', ['A4', 'D5', 'F#5']):
        s.add(when, 'piano', p, 0.34, 2.0)
    s.add(114.0, 'bass_arco_soft', 'D2', 0.4, 2.5)
    s.chord(114.0, 'cello_arco_soft', ['A2', 'D3'], 0.36, 2.5)
    ticks(s, t, t + 3.5, [(t, 'D')], 0.34, step=BEAT)
    hold = t + 3.5
    s.add(hold, 'gong', None, 0.32, 4.0)
    s.add(hold, 'bass_arco_soft', 'D2', 0.55, 4.0)
    s.chord(hold, 'cello_arco_soft', ['A2', 'D3'], 0.51, 4.0)
    s.add(hold, 'violin_arco_soft', 'A4', 0.44, 4.0)
    s.chord(hold, 'piano', ['D3', 'A3', 'F#4', 'A4', 'D5'], 0.54, 4.0)


def compose(cues):
    """All notes of the score, sorted by time."""
    s = Score()
    (stop1, hit1), (stop2, hit2) = stopdowns(cues)
    act01(s, cues)
    act02(s, cues, stop1)
    impact(s, hit1)
    act03(s, cues)
    act04(s, cues)
    act05(s, cues, stop2, hit2)
    act06(s)
    act07(s, cues)
    act08(s, cues)
    act09(s, cues)
    act10(s, cues)
    return sorted(s.notes, key=lambda n: (n.t, n.inst, n.pitch or '', n.vel, n.dur))
