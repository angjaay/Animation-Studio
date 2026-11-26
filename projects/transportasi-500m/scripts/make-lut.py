# Bangun 3D LUT (.cube, 33^3) dari scripts/grade.py: grading-nya per piksel, jadi LUT identik dengan grading still.
import subprocess, sys, numpy as np
from PIL import Image
N=33; out=sys.argv[1] if len(sys.argv)>1 else 'scripts/peta-grade.cube'
r,g,b=np.meshgrid(np.arange(N),np.arange(N),np.arange(N),indexing='ij')   # r tercepat di .cube -> urutan b,g,r
cube=np.stack([r,g,b],-1).transpose(2,1,0,3).reshape(-1,3)                 # baris: b luar, g, r dalam
img=(cube/(N-1)*255+0.5).astype(np.uint8).reshape(N*N,N,3)
Image.fromarray(img).save('/tmp/lut_in.png')
subprocess.run([sys.executable,'-I','scripts/grade.py','/tmp/lut_in.png','/tmp/lut_out.png'],check=True)
o=np.asarray(Image.open('/tmp/lut_out.png').convert('RGB')).reshape(-1,3)/255
with open(out,'w') as f:
    f.write(f'TITLE "GISACT peta grade v1"\nLUT_3D_SIZE {N}\n')
    for v in o: f.write(f'{v[0]:.6f} {v[1]:.6f} {v[2]:.6f}\n')
print('wrote',out)
