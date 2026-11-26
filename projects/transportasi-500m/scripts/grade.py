# Geser warna peta ke palet v1: biru baja -> cyan #5CC8FF, cokelat -> oranye #FF8A4C, navy dasar -> #06080A.
import sys, numpy as np
from PIL import Image
def rgb2hsv(a):
    r,g,b=a[...,0],a[...,1],a[...,2]; mx=a.max(-1); mn=a.min(-1); d=mx-mn
    h=np.zeros_like(mx); m=d>1e-6
    rr=(mx==r)&m; gg=(mx==g)&m&~rr; bb=m&~rr&~gg
    h[rr]=((g-b)[rr]/d[rr])%6; h[gg]=(b-r)[gg]/d[gg]+2; h[bb]=(r-g)[bb]/d[bb]+4
    return h*60, np.where(mx>0,d/np.maximum(mx,1e-6),0), mx
def hsv2rgb(h,s,v):
    c=v*s; x=c*(1-np.abs((h/60)%2-1)); m=v-c; z=np.zeros_like(h); i=(h//60).astype(int)%6
    out=np.stack([np.select([i==k for k in range(6)],[c,x,z,z,x,c]),np.select([i==k for k in range(6)],[x,c,c,x,z,z]),np.select([i==k for k in range(6)],[z,z,x,c,c,x])],-1)
    return out+m[...,None]
ss=lambda e0,e1,x: np.clip((x-e0)/(e1-e0),0,1)**2*(3-2*np.clip((x-e0)/(e1-e0),0,1))
src,dst=sys.argv[1],sys.argv[2]; dim=float(sys.argv[3]) if len(sys.argv)>3 else 1.0
a=np.asarray(Image.open(src).convert('RGB')).astype(np.float32)/255
h,s,v=rgb2hsv(a)
lum=ss(0.22,0.5,v)                       # navy dasar tidak ikut digeser
blue=((h>170)&(h<260)).astype(np.float32)*ss(0.08,0.2,s)*lum
orng=((h<45)|(h>340)).astype(np.float32)*ss(0.12,0.3,s)*ss(0.15,0.35,v)
h2=h.copy(); s2=s.copy(); v2=v.copy()
h2=np.where(blue>0, h+(200.6-h)*blue, h2); s2=np.where(blue>0, s+(np.clip(s*1.9,0,0.62)-s)*blue, s2); v2=np.where(blue>0, v+(np.clip(v*1.05,0,1)-v)*blue, v2)
hh=np.where(h>340,h-360,h)
h2=np.where(orng>0, (hh+(21-hh)*orng)%360, h2); s2=np.where(orng>0, s2+(np.clip(s*1.2,0,0.68)-s2)*orng, s2); v2=np.where(orng>0, v2+(np.clip(v*1.22,0,0.95)-v2)*orng, v2)
out=hsv2rgb(h2,s2,v2)
# dasar navy -> mendekati #06080A (turunkan bayangan, buang biru di nada gelap)
base=np.array([6,8,10],np.float32)/255; dark=1-ss(0.12,0.38,v)
out=out*(1-dark[...,None]*0.75)+base*dark[...,None]*0.75
out=out*dim
Image.fromarray((np.clip(out,0,1)*255+0.5).astype(np.uint8)).save(dst)
