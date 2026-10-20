// Geometry of the light thread: a straight trunk that splits into three branches.
// Branches leave the split vertically and bend towards their end point (no arrowheads).

const fmt = (n) => Math.round(n * 10) / 10;

export function branchGeometry({ top, split, ends, bend = 0.55 }) {
  const [sx, sy] = split;
  const trunk = `M${fmt(top[0])} ${fmt(top[1])} L${fmt(sx)} ${fmt(sy)}`;
  const branches = ends.map(([ex, ey]) => {
    const k = (ey - sy) * bend;
    return `M${fmt(sx)} ${fmt(sy)} C${fmt(sx)} ${fmt(sy + k)} ${fmt(ex)} ${fmt(ey - k)} ${fmt(ex)} ${fmt(ey)}`;
  });
  return { trunk, branches };
}
