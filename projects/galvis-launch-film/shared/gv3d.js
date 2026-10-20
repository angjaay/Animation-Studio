var GV3D=(()=>{var so=Object.defineProperty;var Gl=Object.getOwnPropertyDescriptor;var Hl=Object.getOwnPropertyNames;var Wl=Object.prototype.hasOwnProperty;var Xl=(i,e)=>{for(var t in e)so(i,t,{get:e[t],enumerable:!0})},ql=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Hl(e))!Wl.call(i,s)&&s!==t&&so(i,s,{get:()=>e[s],enumerable:!(n=Gl(e,s))||n.enumerable});return i};var Yl=i=>ql(so({},"__esModule",{value:!0}),i);var bf={};Xl(bf,{GLOBE_SEA:()=>Ul,faceLongitude:()=>D1,lonLatToVec3:()=>$i,mountCoreScene:()=>Dl,mountGlobe:()=>Pl});var L1=Math.PI/180;function $i(i,e,t=1){let n=(i+180)*L1,s=(90-e)*L1;return[-Math.cos(n)*Math.sin(s)*t,Math.cos(s)*t,Math.sin(n)*Math.sin(s)*t]}function D1(i){let[e,,t]=$i(i,0);return-Math.atan2(e,t)}var lc=0,Wo=1,hc=2;var Xo=1,uc=2,an=3,_n=0,St=1,on=2,cn=0,Zn=1,On=2,qo=3,Yo=4,dc=5,Ln=100,fc=101,pc=102,mc=103,xc=104,gc=200,_c=201,vc=202,yc=203,Sr=204,Tr=205,bc=206,Mc=207,Sc=208,Tc=209,Ac=210,Ec=211,wc=212,Cc=213,Rc=214,aa=0,oa=1,ca=2,Jn=3,la=4,ha=5,ua=6,da=7,Zo=0,Ic=1,Pc=2,Mn=0,Lc=1,Dc=2,Uc=3,Nc=4,Fc=5,Oc=6,Bc=7;var Jo=300,ti=301,ni=302,fa=303,pa=304,Ns=306,Ar=1e3,sn=1001,Er=1002,Dt=1003,zc=1004;var Fs=1005;var zt=1006,ma=1007;var Bn=1008;var Qt=1009,$o=1010,Ko=1011,ki=1012,xa=1013,zn=1014,ln=1015,ii=1016,ga=1017,_a=1018,Gi=1020,Qo=35902,jo=35899,e1=1021,t1=1022,Wt=1023,Ei=1026,Hi=1027,n1=1028,va=1029,ya=1030,ba=1031;var Ma=1033,Os=33776,Bs=33777,zs=33778,Vs=33779,Sa=35840,Ta=35841,Aa=35842,Ea=35843,wa=36196,Ca=37492,Ra=37496,Ia=37808,Pa=37809,La=37810,Da=37811,Ua=37812,Na=37813,Fa=37814,Oa=37815,Ba=37816,za=37817,Va=37818,ka=37819,Ga=37820,Ha=37821,Wa=36492,Xa=36494,qa=36495,Ya=36283,Za=36284,Ja=36285,$a=36286;var cs=2300,wr=2301,br=2302,Fo=2400,Oo=2401,Bo=2402;var Vc=3200,kc=3201;var i1=0,Gc=1,Sn="",Bt="srgb",$n="srgb-linear",ls="linear",Ze="srgb";var Yn=7680;var zo=519,Hc=512,Wc=513,Xc=514,s1=515,qc=516,Yc=517,Zc=518,Jc=519,Cr=35044;var r1="300 es",Jt=2e3,hs=2001;function a1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $c(){let i=us("canvas");return i.style.display="block",i}var U1={},wi=null;function ds(...i){let e="THREE."+i.shift();wi?wi("log",e,...i):console.log(e,...i)}function Ce(...i){let e="THREE."+i.shift();wi?wi("warn",e,...i):console.warn(e,...i)}function Oe(...i){let e="THREE."+i.shift();wi?wi("error",e,...i):console.error(e,...i)}function Ci(...i){let e=i.join(" ");e in U1||(U1[e]=!0,Ce(...i))}function Kc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mr=Math.PI/180,Rr=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function Zl(i,e){return(i%e+e)%e}function ro(i,e,t){return(1-t)*i+t*e}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],x=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(u!==_||l!==f||c!==p||h!==x){let m=l*f+c*p+h*x+u*_;m<0&&(f=-f,p=-p,x=-x,_=-_,m=-m);let d=1-o;if(m<.9995){let E=Math.acos(m),M=Math.sin(E);d=Math.sin(d*E)/M,o=Math.sin(o*E)/M,l=l*d+f*o,c=c*d+p*o,h=h*d+x*o,u=u*d+_*o}else{l=l*d+f*o,c=c*d+p*o,h=h*d+x*o,u=u*d+_*o;let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+h*u+l*p-c*f,e[t+1]=l*x+h*f+c*u-o*p,e[t+2]=c*x+h*p+o*f-l*u,e[t+3]=h*x-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"YZX":this._x=f*h*u+c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u-f*p*x;break;case"XZY":this._x=f*h*u-c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u+f*p*x;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(N1.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(N1.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ao=new I,N1=new yn,Ne=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],_=s[0],m=s[3],d=s[6],E=s[1],M=s[4],A=s[7],C=s[2],S=s[5],w=s[8];return r[0]=a*_+o*E+l*C,r[3]=a*m+o*M+l*S,r[6]=a*d+o*A+l*w,r[1]=c*_+h*E+u*C,r[4]=c*m+h*M+u*S,r[7]=c*d+h*A+u*w,r[2]=f*_+p*E+x*C,r[5]=f*m+p*M+x*S,r[8]=f*d+p*A+x*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,x=t*u+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oo.makeScale(e,t)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oo=new Ne,F1=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O1=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jl(){let i={enabled:!0,workingColorSpace:$n,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ze&&(s.r=gn(s.r),s.g=gn(s.g),s.b=gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sn?ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$n]:{primaries:e,whitePoint:n,transfer:ls,toXYZ:F1,fromXYZ:O1,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:F1,fromXYZ:O1,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}var Xe=Jl();function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var li,Ir=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{li===void 0&&(li=us("canvas")),li.width=e.width,li.height=e.height;let s=li.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=li}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=us("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gn(t[n]/255)*255):t[n]=gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$l=0,Ri=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(co(s[a].image)):r.push(co(s[a]))}else r=co(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ir.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var Kl=0,lo=new I,yt=class i extends vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=sn,s=sn,r=zt,a=Bn,o=Wt,l=Qt,c=i.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Pn(),this.name="",this.source=new Ri(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lo).x}get height(){return this.source.getSize(lo).y}get depth(){return this.source.getSize(lo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Jo;yt.DEFAULT_ANISOTROPY=1;var Ye=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],x=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,A=(p+1)/2,C=(d+1)/2,S=(h+f)/4,w=(u+_)/4,N=(x+m)/4;return M>A&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=w/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=S/s,r=N/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=N/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-x)*(m-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pr=class extends vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new yt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ri(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Pr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fs=class extends yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lr=class extends yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(r,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Ys.subVectors(this.max,Ki),hi.subVectors(e.a,Ki),ui.subVectors(e.b,Ki),di.subVectors(e.c,Ki),An.subVectors(ui,hi),En.subVectors(di,ui),Hn.subVectors(hi,di);let t=[0,-An.z,An.y,0,-En.z,En.y,0,-Hn.z,Hn.y,An.z,0,-An.x,En.z,0,-En.x,Hn.z,0,-Hn.x,-An.y,An.x,0,-En.y,En.x,0,-Hn.y,Hn.x,0];return!ho(t,hi,ui,di,Ys)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,hi,ui,di,Ys))?!1:(Zs.crossVectors(An,En),t=[Zs.x,Zs.y,Zs.z],ho(t,hi,ui,di,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},un=[new I,new I,new I,new I,new I,new I,new I,new I],qt=new I,qs=new Dn,hi=new I,ui=new I,di=new I,An=new I,En=new I,Hn=new I,Ki=new I,Ys=new I,Zs=new I,Wn=new I;function ho(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wn.fromArray(i,r);let o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ql=new Dn,Qi=new I,uo=new I,Un=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ql.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);let t=Qi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(uo)),this.expandByPoint(Qi.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dn=new I,fo=new I,Js=new I,wn=new I,po=new I,$s=new I,mo=new I,Ii=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fo.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(fo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=wn.dot(this.direction),l=-wn.dot(Js),c=wn.lengthSq(),h=Math.abs(1-a*a),u,f,p,x;if(h>0)if(u=a*l-o,f=a*o-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fo).addScaledVector(Js,f),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);let n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,s,r){po.subVectors(t,e),$s.subVectors(n,e),mo.crossVectors(po,$s);let a=this.direction.dot(mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);let l=o*this.direction.dot($s.crossVectors(wn,$s));if(l<0)return null;let c=o*this.direction.dot(po.cross(wn));if(c<0||l+c>a)return null;let h=-o*wn.dot(mo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,f,p,x,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,p,x,_,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,p,x,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),a=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,x=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+x*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,x=c*h,_=c*u;t[0]=f+_*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,x=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,x=o*h,_=o*u;t[0]=l*h,t[4]=x*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,x=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=x*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+x,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*l,p=a*c,x=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jl,e,e0)}lookAt(e,t,n){let s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Cn.crossVectors(n,Ft),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Cn.crossVectors(n,Ft)),Cn.normalize(),Ks.crossVectors(Ft,Cn),s[0]=Cn.x,s[4]=Ks.x,s[8]=Ft.x,s[1]=Cn.y,s[5]=Ks.y,s[9]=Ft.y,s[2]=Cn.z,s[6]=Ks.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],_=n[6],m=n[10],d=n[14],E=n[3],M=n[7],A=n[11],C=n[15],S=s[0],w=s[4],N=s[8],b=s[12],y=s[1],L=s[5],F=s[9],z=s[13],G=s[2],X=s[6],W=s[10],te=s[14],k=s[3],j=s[7],ne=s[11],ve=s[15];return r[0]=a*S+o*y+l*G+c*k,r[4]=a*w+o*L+l*X+c*j,r[8]=a*N+o*F+l*W+c*ne,r[12]=a*b+o*z+l*te+c*ve,r[1]=h*S+u*y+f*G+p*k,r[5]=h*w+u*L+f*X+p*j,r[9]=h*N+u*F+f*W+p*ne,r[13]=h*b+u*z+f*te+p*ve,r[2]=x*S+_*y+m*G+d*k,r[6]=x*w+_*L+m*X+d*j,r[10]=x*N+_*F+m*W+d*ne,r[14]=x*b+_*z+m*te+d*ve,r[3]=E*S+M*y+A*G+C*k,r[7]=E*w+M*L+A*X+C*j,r[11]=E*N+M*F+A*W+C*ne,r[15]=E*b+M*z+A*te+C*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],x=e[3],_=e[7],m=e[11],d=e[15];return x*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],x=e[12],_=e[13],m=e[14],d=e[15],E=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,M=x*f*c-h*m*c-x*l*p+a*m*p+h*l*d-a*f*d,A=h*_*c-x*u*c+x*o*p-a*_*p-h*o*d+a*u*d,C=x*u*l-h*_*l-x*o*f+a*_*f+h*o*m-a*u*m,S=t*E+n*M+s*A+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=E*w,e[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*w,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*d+n*l*d)*w,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*w,e[4]=M*w,e[5]=(h*m*r-x*f*r+x*s*p-t*m*p-h*s*d+t*f*d)*w,e[6]=(x*l*r-a*m*r-x*s*c+t*m*c+a*s*d-t*l*d)*w,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*w,e[8]=A*w,e[9]=(x*u*r-h*_*r-x*n*p+t*_*p+h*n*d-t*u*d)*w,e[10]=(a*_*r-x*o*r+x*n*c-t*_*c-a*n*d+t*o*d)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*w,e[12]=C*w,e[13]=(h*_*s-x*u*s+x*n*f-t*_*f-h*n*m+t*u*m)*w,e[14]=(x*o*s-a*_*s-x*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,x=r*u,_=a*h,m=a*u,d=o*u,E=l*c,M=l*h,A=l*u,C=n.x,S=n.y,w=n.z;return s[0]=(1-(_+d))*C,s[1]=(p+A)*C,s[2]=(x-M)*C,s[3]=0,s[4]=(p-A)*S,s[5]=(1-(f+d))*S,s[6]=(m+E)*S,s[7]=0,s[8]=(x+M)*w,s[9]=(m-E)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=fi.set(s[0],s[1],s[2]).length(),a=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yt.copy(this);let c=1/r,h=1/a,u=1/o;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=h,Yt.elements[5]*=h,Yt.elements[6]*=h,Yt.elements[8]*=u,Yt.elements[9]*=u,Yt.elements[10]*=u,t.setFromRotationMatrix(Yt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Jt,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),x,_;if(l)x=r/(a-r),_=a*r/(a-r);else if(o===Jt)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===hs)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Jt,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),x,_;if(l)x=1/(a-r),_=a/(a-r);else if(o===Jt)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===hs)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fi=new I,Yt=new it,jl=new I(0,0,0),e0=new I(1,1,1),Cn=new I,Ks=new I,Ft=new I,B1=new it,z1=new yn,$t=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return B1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B1,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return z1.setFromEuler(this),this.setFromQuaternion(z1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$t.DEFAULT_ORDER="XYZ";var ps=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},t0=0,V1=new I,pi=new yn,fn=new it,Qs=new I,ji=new I,n0=new I,i0=new yn,k1=new I(1,0,0),G1=new I(0,1,0),H1=new I(0,0,1),W1={type:"added"},s0={type:"removed"},mi={type:"childadded",child:null},xo={type:"childremoved",child:null},bt=class i extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new $t,n=new yn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Ne}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(k1,e)}rotateY(e){return this.rotateOnAxis(G1,e)}rotateZ(e){return this.rotateOnAxis(H1,e)}translateOnAxis(e,t){return V1.copy(e).applyQuaternion(this.quaternion),this.position.add(V1.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(k1,e)}translateY(e){return this.translateOnAxis(G1,e)}translateZ(e){return this.translateOnAxis(H1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ji,Qs,this.up):fn.lookAt(Qs,ji,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(fn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(W1),mi.child=e,this.dispatchEvent(mi),mi.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0),xo.child=e,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(W1),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,n0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,i0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zt=new I,pn=new I,go=new I,mn=new I,xi=new I,gi=new I,X1=new I,_o=new I,vo=new I,yo=new I,bo=new Ye,Mo=new Ye,So=new Ye,nn=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zt.subVectors(e,t),s.cross(Zt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zt.subVectors(s,t),pn.subVectors(n,t),go.subVectors(e,t);let a=Zt.dot(Zt),o=Zt.dot(pn),l=Zt.dot(go),c=pn.dot(pn),h=pn.dot(go),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return bo.setScalar(0),Mo.setScalar(0),So.setScalar(0),bo.fromBufferAttribute(e,t),Mo.fromBufferAttribute(e,n),So.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bo,r.x),a.addScaledVector(Mo,r.y),a.addScaledVector(So,r.z),a}static isFrontFacing(e,t,n,s){return Zt.subVectors(n,t),pn.subVectors(e,t),Zt.cross(pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Zt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;xi.subVectors(s,n),gi.subVectors(r,n),_o.subVectors(e,n);let l=xi.dot(_o),c=gi.dot(_o);if(l<=0&&c<=0)return t.copy(n);vo.subVectors(e,s);let h=xi.dot(vo),u=gi.dot(vo);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xi,a);yo.subVectors(e,r);let p=xi.dot(yo),x=gi.dot(yo);if(x>=0&&p<=x)return t.copy(r);let _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(gi,o);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return X1.subVectors(r,s),o=(u-h)/(u-h+(p-x)),t.copy(s).addScaledVector(X1,o);let d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(xi,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},js={h:0,s:0,l:0};function To(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Zl(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=To(a,r,e+1/3),this.g=To(a,r,e),this.b=To(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Xe.workingToColorSpace(At.copy(this),e),Math.round(ze(At.r*255,0,255))*65536+Math.round(ze(At.g*255,0,255))*256+Math.round(ze(At.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(At.copy(this),t);let n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Bt){Xe.workingToColorSpace(At.copy(this),e);let t=At.r,n=At.g,s=At.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(js);let n=ro(Rn.h,js.h,t),s=ro(Rn.s,js.s,t),r=ro(Rn.l,js.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new De;De.NAMES=Qc;var r0=0,Kt=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Zn,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=Tr,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kn=class extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ft=new I,er=new xe,a0=0,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cr,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cr&&(e.usage=this.usage),e}};var ms=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xs=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},o0=0,Gt=new it,Ao=new bt,_i=new I,Ot=new Dn,es=new Dn,_t=new I,pt=class i extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(a1(e)?xs:ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Ot.min,es.min),Ot.expandByPoint(_t),_t.addVectors(Ot.max,es.max),Ot.expandByPoint(_t)):(Ot.expandByPoint(es.min),Ot.expandByPoint(es.max))}Ot.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_t.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(e,c),_t.add(_i)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new I,l[N]=new I;let c=new I,h=new I,u=new I,f=new xe,p=new xe,x=new xe,_=new I,m=new I;function d(N,b,y){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),x.sub(f);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(L),o[N].add(_),o[b].add(_),o[y].add(_),l[N].add(m),l[b].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,b=E.length;N<b;++N){let y=E[N],L=y.start,F=y.count;for(let z=L,G=L+F;z<G;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let M=new I,A=new I,C=new I,S=new I;function w(N){C.fromBufferAttribute(s,N),S.copy(C);let b=o[N];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),A.crossVectors(S,b);let L=A.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,L)}for(let N=0,b=E.length;N<b;++N){let y=E[N],L=y.start,F=y.count;for(let z=L,G=L+F;z<G;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[x++]=c[p++]}return new Et(f,h,u)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},q1=new it,Xn=new Ii,tr=new Un,Y1=new I,nr=new I,ir=new I,sr=new I,Eo=new I,rr=new I,Z1=new I,ar=new I,Mt=class extends bt{constructor(e=new pt,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Eo.fromBufferAttribute(u,e),a?rr.addScaledVector(Eo,h):rr.addScaledVector(Eo.sub(t),h))}t.add(rr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),Xn.copy(e.ray).recast(e.near),!(tr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(tr,Y1)===null||Xn.origin.distanceToSquared(Y1)>(e.far-e.near)**2))&&(q1.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(q1),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let m=f[x],d=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,C=M;A<C;A+=3){let S=o.getX(A),w=o.getX(A+1),N=o.getX(A+2);s=or(this,d,e,n,c,h,u,S,w,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){let E=o.getX(m),M=o.getX(m+1),A=o.getX(m+2);s=or(this,a,e,n,c,h,u,E,M,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let m=f[x],d=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,C=M;A<C;A+=3){let S=A,w=A+1,N=A+2;s=or(this,d,e,n,c,h,u,S,w,N),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){let E=m,M=m+1,A=m+2;s=or(this,a,e,n,c,h,u,E,M,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function c0(i,e,t,n,s,r,a,o){let l;if(e.side===St?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===_n,o),l===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ar);return c<t.near||c>t.far?null:{distance:c,point:ar.clone(),object:i}}function or(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,nr),i.getVertexPosition(l,ir),i.getVertexPosition(c,sr);let h=c0(i,e,t,n,nr,ir,sr,Z1);if(h){let u=new I;nn.getBarycoord(Z1,nr,ir,sr,u),s&&(h.uv=nn.getInterpolatedAttribute(s,o,l,c,u,new xe)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,l,c,u,new xe)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};nn.getNormal(nr,ir,sr,f.normal),h.face=f,h.barycoord=u}return h}var Pi=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function x(_,m,d,E,M,A,C,S,w,N,b){let y=A/w,L=C/N,F=A/2,z=C/2,G=S/2,X=w+1,W=N+1,te=0,k=0,j=new I;for(let ne=0;ne<W;ne++){let ve=ne*L-z;for(let We=0;We<X;We++){let Je=We*y-F;j[_]=Je*E,j[m]=ve*M,j[d]=G,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[d]=S>0?1:-1,h.push(j.x,j.y,j.z),u.push(We/w),u.push(1-ne/N),te+=1}}for(let ne=0;ne<N;ne++)for(let ve=0;ve<w;ve++){let We=f+ve+X*ne,Je=f+ve+X*(ne+1),et=f+(ve+1)+X*(ne+1),tt=f+(ve+1)+X*ne;l.push(We,Je,tt),l.push(Je,et,tt),k+=6}o.addGroup(p,k,b),p+=k,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function si(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function wt(i){let e={};for(let t=0;t<i.length;t++){let n=si(i[t]);for(let s in n)e[s]=n[s]}return e}function l0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function o1(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var jc={clone:si,merge:wt},h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=si(e.uniforms),this.uniformsGroups=l0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},gs=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},In=new I,J1=new xe,$1=new xe,mt=class extends gs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,J1,$1),t.subVectors($1,J1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vi=-90,yi=1,Dr=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mt(vi,yi,e,t);s.layers=this.layers,this.add(s);let r=new mt(vi,yi,e,t);r.layers=this.layers,this.add(r);let a=new mt(vi,yi,e,t);a.layers=this.layers,this.add(a);let o=new mt(vi,yi,e,t);o.layers=this.layers,this.add(o);let l=new mt(vi,yi,e,t);l.layers=this.layers,this.add(l);let c=new mt(vi,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Jt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},_s=class extends yt{constructor(e=[],t=ti,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ur=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _s(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pi(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:cn});r.uniforms.tEquirect.value=t;let a=new Mt(s,r),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=zt),new Dr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},xn=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},d0={type:"move"},Li=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var vs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qn=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cr,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rt=new I,ys=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ds("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ds("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Di=class extends Kt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bi,ts=new I,Mi=new I,Si=new I,Ti=new xe,ns=new xe,el=new it,cr=new I,is=new I,lr=new I,K1=new xe,wo=new xe,Q1=new xe,bs=class extends bt{constructor(e=new Di){if(super(),this.isSprite=!0,this.type="Sprite",bi===void 0){bi=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nr(t,5);bi.setIndex([0,1,2,0,2,3]),bi.setAttribute("position",new ys(n,3,0,!1)),bi.setAttribute("uv",new ys(n,2,3,!1))}this.geometry=bi,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mi.setFromMatrixScale(this.matrixWorld),el.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mi.multiplyScalar(-Si.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;hr(cr.set(-.5,-.5,0),Si,a,Mi,s,r),hr(is.set(.5,-.5,0),Si,a,Mi,s,r),hr(lr.set(.5,.5,0),Si,a,Mi,s,r),K1.set(0,0),wo.set(1,0),Q1.set(1,1);let o=e.ray.intersectTriangle(cr,is,lr,!1,ts);if(o===null&&(hr(is.set(-.5,.5,0),Si,a,Mi,s,r),wo.set(0,1),o=e.ray.intersectTriangle(cr,lr,is,!1,ts),o===null))return;let l=e.ray.origin.distanceTo(ts);l<e.near||l>e.far||t.push({distance:l,point:ts.clone(),uv:nn.getInterpolation(ts,cr,is,lr,K1,wo,Q1,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function hr(i,e,t,n,s,r){Ti.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ns.x=r*Ti.x-s*Ti.y,ns.y=s*Ti.x+r*Ti.y):ns.copy(Ti),i.copy(e),i.x+=ns.x,i.y+=ns.y,i.applyMatrix4(el)}var Fr=class extends yt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Dt,h=Dt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Co=new I,f0=new I,p0=new Ne,en=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Co.subVectors(n,t).cross(f0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||p0.getNormalMatrix(e),s=this.coplanarPoint(Co).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qn=new Un,m0=new xe(.5,.5),ur=new I,Ui=class{constructor(e=new en,t=new en,n=new en,s=new en,r=new en,a=new en){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jt,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],x=r[8],_=r[9],m=r[10],d=r[11],E=r[12],M=r[13],A=r[14],C=r[15];if(s[0].setComponents(c-a,p-h,d-x,C-E).normalize(),s[1].setComponents(c+a,p+h,d+x,C+E).normalize(),s[2].setComponents(c+o,p+u,d+_,C+M).normalize(),s[3].setComponents(c-o,p-u,d-_,C-M).normalize(),n)s[4].setComponents(l,f,m,A).normalize(),s[5].setComponents(c-l,p-f,d-m,C-A).normalize();else if(s[4].setComponents(c-l,p-f,d-m,C-A).normalize(),t===Jt)s[5].setComponents(c+l,p+f,d+m,C+A).normalize();else if(t===hs)s[5].setComponents(l,f,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);let t=m0.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ur.x=s.normal.x>0?e.max.x:e.min.x,ur.y=s.normal.y>0?e.max.y:e.min.y,ur.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ur)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bn=class extends Kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Or=new I,Br=new I,j1=new it,ss=new Ii,dr=new Un,Ro=new I,ec=new I,Ms=class extends bt{constructor(e=new pt,t=new bn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Or.fromBufferAttribute(t,s-1),Br.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Or.distanceTo(Br);e.setAttribute("lineDistance",new dt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(s),dr.radius+=r,e.ray.intersectsSphere(dr)===!1)return;j1.copy(s).invert(),ss.copy(e.ray).applyMatrix4(j1);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let _=p,m=x-1;_<m;_+=c){let d=h.getX(_),E=h.getX(_+1),M=fr(this,e,ss,l,d,E,_);M&&t.push(M)}if(this.isLineLoop){let _=h.getX(x-1),m=h.getX(p),d=fr(this,e,ss,l,_,m,x-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let _=p,m=x-1;_<m;_+=c){let d=fr(this,e,ss,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){let _=fr(this,e,ss,l,x-1,p,x-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Or.fromBufferAttribute(o,s),Br.fromBufferAttribute(o,r),t.distanceSqToSegment(Or,Br,Ro,ec)>n)return;Ro.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ro);if(!(c<e.near||c>e.far))return{distance:c,point:ec.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var tc=new I,nc=new I,Ni=class extends Ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)tc.fromBufferAttribute(t,s),nc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tc.distanceTo(nc);e.setAttribute("lineDistance",new dt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fi=class extends Ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Oi=class extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ic=new it,Vo=new Ii,pr=new Un,mr=new I,Ss=class extends bt{constructor(e=new pt,t=new Oi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,e.ray.intersectsSphere(pr)===!1)return;ic.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(ic);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=f,_=p;x<_;x++){let m=c.getX(x);mr.fromBufferAttribute(u,m),sc(mr,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,_=p;x<_;x++)mr.fromBufferAttribute(u,x),sc(mr,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sc(i,e,t,n,s,r,a){let o=Vo.distanceSqToPoint(i);if(o<t){let l=new I;Vo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ts=class extends yt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},As=class extends yt{constructor(e,t,n=zn,s,r,a,o=Dt,l=Dt,c,h=Ei,u=1){if(h!==Ei&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ri(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Es=class extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Bi=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],x=0,_=[],m=n/2,d=0;E(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(p,2));function E(){let A=new I,C=new I,S=0,w=(t-e)/n;for(let N=0;N<=r;N++){let b=[],y=N/r,L=y*(t-e)+e;for(let F=0;F<=s;F++){let z=F/s,G=z*l+o,X=Math.sin(G),W=Math.cos(G);C.x=L*X,C.y=-y*n+m,C.z=L*W,u.push(C.x,C.y,C.z),A.set(X,w,W).normalize(),f.push(A.x,A.y,A.z),p.push(z,1-y),b.push(x++)}_.push(b)}for(let N=0;N<s;N++)for(let b=0;b<r;b++){let y=_[b][N],L=_[b+1][N],F=_[b+1][N+1],z=_[b][N+1];(e>0||b!==0)&&(h.push(y,L,z),S+=3),(t>0||b!==r-1)&&(h.push(L,F,z),S+=3)}c.addGroup(d,S,0),d+=S}function M(A){let C=x,S=new xe,w=new I,N=0,b=A===!0?e:t,y=A===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),x++;let L=x;for(let F=0;F<=s;F++){let G=F/s*l+o,X=Math.cos(G),W=Math.sin(G);w.x=b*W,w.y=m*y,w.z=b*X,u.push(w.x,w.y,w.z),f.push(0,y,0),S.x=X*.5+.5,S.y=W*.5*y+.5,p.push(S.x,S.y),x++}for(let F=0;F<s;F++){let z=C+F,G=L+F;A===!0?h.push(G,G+1,z):h.push(G+1,G,z),N+=3}c.addGroup(d,N,A===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var xr=new I,gr=new I,Io=new I,_r=new nn,zi=class extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Mr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let x=0;x<l;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);let{a:_,b:m,c:d}=_r;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),_r.getNormal(Io),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){let M=(E+1)%3,A=u[E],C=u[M],S=_r[h[E]],w=_r[h[M]],N=`${A}_${C}`,b=`${C}_${A}`;b in f&&f[b]?(Io.dot(f[b].normal)<=r&&(p.push(S.x,S.y,S.z),p.push(w.x,w.y,w.z)),f[b]=null):N in f||(f[N]={index0:c[E],index1:c[M],normal:Io.clone()})}}for(let x in f)if(f[x]){let{index0:_,index1:m}=f[x];xr.fromBufferAttribute(o,_),gr.fromBufferAttribute(o,m),p.push(xr.x,xr.y,xr.z),p.push(gr.x,gr.y,gr.z)}this.setAttribute("position",new dt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ht=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new xe:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new it;for(let p=0;p<=e;p++){let x=p/e;s[p]=this.getTangentAt(x,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ze(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,x))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ze(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ws=class extends Ht{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new xe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zr=class extends ws{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function c1(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var vr=new I,Po=new c1,Lo=new c1,Do=new c1,Vr=class extends Ht{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(vr.subVectors(s[0],s[1]).add(s[0]),c=vr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),x<1e-4&&(x=_),m<1e-4&&(m=_),Po.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,_,m),Lo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,_,m),Do.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,_,m)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Lo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Do.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Po.calc(l),Lo.calc(l),Do.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function rc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function x0(i,e){let t=1-i;return t*t*e}function g0(i,e){return 2*(1-i)*i*e}function _0(i,e){return i*i*e}function as(i,e,t,n){return x0(i,e)+g0(i,t)+_0(i,n)}function v0(i,e){let t=1-i;return t*t*t*e}function y0(i,e){let t=1-i;return 3*t*t*i*e}function b0(i,e){return 3*(1-i)*i*i*e}function M0(i,e){return i*i*i*e}function os(i,e,t,n,s){return v0(i,e)+y0(i,t)+b0(i,n)+M0(i,s)}var kr=class extends Ht{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(os(e,s.x,r.x,a.x,o.x),os(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends Ht{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(os(e,s.x,r.x,a.x,o.x),os(e,s.y,r.y,a.y,o.y),os(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hr=class extends Ht{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends Ht{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends Ht{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(as(e,s.x,r.x,a.x),as(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jn=class extends Ht{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(as(e,s.x,r.x,a.x),as(e,s.y,r.y,a.y),as(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends Ht{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(rc(o,l.x,c.x,h.x,u.x),rc(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new xe().fromArray(s))}return this}},S0=Object.freeze({__proto__:null,ArcCurve:zr,CatmullRomCurve3:Vr,CubicBezierCurve:kr,CubicBezierCurve3:Gr,EllipseCurve:ws,LineCurve:Hr,LineCurve3:Wr,QuadraticBezierCurve:Xr,QuadraticBezierCurve3:jn,SplineCurve:qr});var Cs=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],x=[],_=[],m=[];for(let d=0;d<h;d++){let E=d*f-a;for(let M=0;M<c;M++){let A=M*u-r;x.push(A,-E,0),_.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){let M=E+c*d,A=E+c*(d+1),C=E+1+c*(d+1),S=E+1+c*d;p.push(M,A,S),p.push(A,C,S)}this.setIndex(p),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Vi=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,f=new I,p=[],x=[],_=[],m=[];for(let d=0;d<=n;d++){let E=[],M=d/n,A=0;d===0&&a===0?A=.5/t:d===n&&l===Math.PI&&(A=-.5/t);for(let C=0;C<=t;C++){let S=C/t;u.x=-e*Math.cos(s+S*r)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(s+S*r)*Math.sin(a+M*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(S+A,1-M),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){let M=h[d][E+1],A=h[d][E],C=h[d+1][E],S=h[d+1][E+1];(d!==0||a>0)&&p.push(M,A,S),(d!==n-1||l<Math.PI)&&p.push(A,C,S)}this.setIndex(p),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rs=class i extends pt{constructor(e=new jn(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new xe,h=new I,u=[],f=[],p=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(p,2));function _(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),E(),d()}function m(M){h=e.getPointAt(M/t,h);let A=a.normals[M],C=a.binormals[M];for(let S=0;S<=s;S++){let w=S/s*Math.PI*2,N=Math.sin(w),b=-Math.cos(w);l.x=b*A.x+N*C.x,l.y=b*A.y+N*C.y,l.z=b*A.z+N*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function d(){for(let M=1;M<=t;M++)for(let A=1;A<=s;A++){let C=(s+1)*(M-1)+(A-1),S=(s+1)*M+(A-1),w=(s+1)*M+A,N=(s+1)*(M-1)+A;x.push(C,S,N),x.push(S,w,N)}}function E(){for(let M=0;M<=t;M++)for(let A=0;A<=s;A++)c.x=M/t,c.y=A/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new S0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Is=class extends Kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i1,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Yr=class extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zr=class extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function T0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ei=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jr=class extends ei{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fo,endingEnd:Fo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oo:r=e,o=2*t-n;break;case Bo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oo:a=e,l=2*n-t;break;case Bo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),_=x*x,m=_*x,d=-f*m+2*f*_-f*x,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*x+1,M=(-1-p)*m+(1.5+p)*_+.5*x,A=p*m-p*_;for(let C=0;C!==o;++C)r[C]=d*a[h+C]+E*a[c+C]+M*a[l+C]+A*a[u+C];return r}},$r=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Kr=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yr(t,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yr(e.times,Array),values:yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $r(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cs:t=this.InterpolantFactoryMethodDiscrete;break;case wr:t=this.InterpolantFactoryMethodLinear;break;case br:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return br}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&T0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===br,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let x=0;x!==n;++x){let _=t[u+x];if(_!==t[f+x]||_!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vt.prototype.ValueTypeName="";Vt.prototype.TimeBufferType=Float32Array;Vt.prototype.ValueBufferType=Float32Array;Vt.prototype.DefaultInterpolation=wr;var Nn=class extends Vt{constructor(e,t,n){super(e,t,n)}};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=cs;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}};Qr.prototype.ValueTypeName="color";var jr=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}};jr.prototype.ValueTypeName="number";var ea=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ps=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ea(this.times,this.values,this.getValueSize(),e)}};Ps.prototype.ValueTypeName="quaternion";Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Fn=class extends Vt{constructor(e,t,n){super(e,t,n)}};Fn.prototype.ValueTypeName="string";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=cs;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}};ta.prototype.ValueTypeName="vector";var na=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tl=new na,ia=class{constructor(e){this.manager=e!==void 0?e:tl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ds=class extends Ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Uo=new it,ac=new I,oc=new I,ko=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(ac),oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oc),t.updateMatrixWorld(),Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var cc=new it,rs=new I,No=new I,Go=class extends ko{constructor(){super(new mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(rs),No.copy(n.position),No.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(No),n.updateMatrixWorld(),s.makeTranslation(-rs.x,-rs.y,-rs.z),cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc,n.coordinateSystem,n.reversedDepth)}},Us=class extends Ls{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Go}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},sa=class extends gs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ra=class extends mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var l1="\\[\\]\\.:\\/",A0=new RegExp("["+l1+"]","g"),h1="[^"+l1+"]",E0="[^"+l1.replace("\\.","")+"]",w0=/((?:WC+[\/:])*)/.source.replace("WC",h1),C0=/(WCOD+)?/.source.replace("WCOD",E0),R0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",h1),I0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",h1),P0=new RegExp("^"+w0+C0+R0+I0+"$"),L0=["material","materials","bones","map"],Ho=class{constructor(e,t,n){let s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A0,"")}static parseTrackName(e){let t=P0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);L0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=Ho;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tf=new Float32Array(1);function u1(i,e,t,n){let s=D0(n);switch(t){case e1:return i*e;case n1:return i*e/s.components*s.byteLength;case va:return i*e/s.components*s.byteLength;case ya:return i*e*2/s.components*s.byteLength;case ba:return i*e*2/s.components*s.byteLength;case t1:return i*e*3/s.components*s.byteLength;case Wt:return i*e*4/s.components*s.byteLength;case Ma:return i*e*4/s.components*s.byteLength;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:case Ea:return Math.max(i,16)*Math.max(e,8)/4;case Sa:case Aa:return Math.max(i,8)*Math.max(e,8)/2;case wa:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wa:case Xa:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ya:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ja:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function D0(i){switch(i){case Qt:case $o:return{byteLength:1,components:1};case ki:case Ko:case ii:return{byteLength:2,components:1};case ga:case _a:return{byteLength:2,components:4};case zn:case xa:case ln:return{byteLength:4,components:1};case Qo:case jo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Tl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function N0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<u.length;p++){let x=u[f],_=u[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,x=u.length;p<x;p++){let _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var F0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,B0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,J0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",fh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ph=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ch=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ih=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ph=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$h=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,su=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ru=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ou=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_u=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Su=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ru=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ku=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ju=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ed=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,id=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ad=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ud=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:F0,alphahash_pars_fragment:O0,alphamap_fragment:B0,alphamap_pars_fragment:z0,alphatest_fragment:V0,alphatest_pars_fragment:k0,aomap_fragment:G0,aomap_pars_fragment:H0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:q0,beginnormal_vertex:Y0,bsdfs:Z0,iridescence_fragment:J0,bumpmap_pars_fragment:$0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:Q0,clipping_planes_pars_vertex:j0,clipping_planes_vertex:eh,color_fragment:th,color_pars_fragment:nh,color_pars_vertex:ih,color_vertex:sh,common:rh,cube_uv_reflection_fragment:ah,defaultnormal_vertex:oh,displacementmap_pars_vertex:ch,displacementmap_vertex:lh,emissivemap_fragment:hh,emissivemap_pars_fragment:uh,colorspace_fragment:dh,colorspace_pars_fragment:fh,envmap_fragment:ph,envmap_common_pars_fragment:mh,envmap_pars_fragment:xh,envmap_pars_vertex:gh,envmap_physical_pars_fragment:Ch,envmap_vertex:_h,fog_vertex:vh,fog_pars_vertex:yh,fog_fragment:bh,fog_pars_fragment:Mh,gradientmap_pars_fragment:Sh,lightmap_pars_fragment:Th,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:Eh,lights_pars_begin:wh,lights_toon_fragment:Rh,lights_toon_pars_fragment:Ih,lights_phong_fragment:Ph,lights_phong_pars_fragment:Lh,lights_physical_fragment:Dh,lights_physical_pars_fragment:Uh,lights_fragment_begin:Nh,lights_fragment_maps:Fh,lights_fragment_end:Oh,logdepthbuf_fragment:Bh,logdepthbuf_pars_fragment:zh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:kh,map_fragment:Gh,map_pars_fragment:Hh,map_particle_fragment:Wh,map_particle_pars_fragment:Xh,metalnessmap_fragment:qh,metalnessmap_pars_fragment:Yh,morphinstance_vertex:Zh,morphcolor_vertex:Jh,morphnormal_vertex:$h,morphtarget_pars_vertex:Kh,morphtarget_vertex:Qh,normal_fragment_begin:jh,normal_fragment_maps:eu,normal_pars_fragment:tu,normal_pars_vertex:nu,normal_vertex:iu,normalmap_pars_fragment:su,clearcoat_normal_fragment_begin:ru,clearcoat_normal_fragment_maps:au,clearcoat_pars_fragment:ou,iridescence_pars_fragment:cu,opaque_fragment:lu,packing:hu,premultiplied_alpha_fragment:uu,project_vertex:du,dithering_fragment:fu,dithering_pars_fragment:pu,roughnessmap_fragment:mu,roughnessmap_pars_fragment:xu,shadowmap_pars_fragment:gu,shadowmap_pars_vertex:_u,shadowmap_vertex:vu,shadowmask_pars_fragment:yu,skinbase_vertex:bu,skinning_pars_vertex:Mu,skinning_vertex:Su,skinnormal_vertex:Tu,specularmap_fragment:Au,specularmap_pars_fragment:Eu,tonemapping_fragment:wu,tonemapping_pars_fragment:Cu,transmission_fragment:Ru,transmission_pars_fragment:Iu,uv_pars_fragment:Pu,uv_pars_vertex:Lu,uv_vertex:Du,worldpos_vertex:Uu,background_vert:Nu,background_frag:Fu,backgroundCube_vert:Ou,backgroundCube_frag:Bu,cube_vert:zu,cube_frag:Vu,depth_vert:ku,depth_frag:Gu,distanceRGBA_vert:Hu,distanceRGBA_frag:Wu,equirect_vert:Xu,equirect_frag:qu,linedashed_vert:Yu,linedashed_frag:Zu,meshbasic_vert:Ju,meshbasic_frag:$u,meshlambert_vert:Ku,meshlambert_frag:Qu,meshmatcap_vert:ju,meshmatcap_frag:ed,meshnormal_vert:td,meshnormal_frag:nd,meshphong_vert:id,meshphong_frag:sd,meshphysical_vert:rd,meshphysical_frag:ad,meshtoon_vert:od,meshtoon_frag:cd,points_vert:ld,points_frag:hd,shadow_vert:ud,shadow_frag:dd,sprite_vert:fd,sprite_frag:pd},ae={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},hn={basic:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new De(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new De(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:wt([ae.points,ae.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:wt([ae.common,ae.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:wt([ae.sprite,ae.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:wt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:wt([ae.lights,ae.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};hn.physical={uniforms:wt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var Ka={r:0,b:0,g:0},ri=new $t,md=new it;function xd(i,e,t,n,s,r,a){let o=new De(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function x(M){let A=M.isScene===!0?M.background:null;return A&&A.isTexture&&(A=(M.backgroundBlurriness>0?t:e).get(A)),A}function _(M){let A=!1,C=x(M);C===null?d(o,l):C&&C.isColor&&(d(C,1),A=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,A){let C=x(A);C&&(C.isCubeTexture||C.mapping===Ns)?(h===void 0&&(h=new Mt(new Pi(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:si(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(A.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(md.makeRotationFromEuler(ri)),h.material.toneMapped=Xe.getTransfer(C.colorSpace)!==Ze,(u!==C||f!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Mt(new Cs(2,2),new It({name:"BackgroundMaterial",uniforms:si(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(C.colorSpace)!==Ze,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,A){M.getRGB(Ka,o1(i)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,A,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),l=A,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(o,l)},render:_,addToRenderList:m,dispose:E}}function gd(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,L,F,z,G){let X=!1,W=u(z,F,L);r!==W&&(r=W,c(r.object)),X=p(y,z,F,G),X&&x(y,z,F,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,A(y,L,F,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,F){let z=F.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let X=G[L.id];X===void 0&&(X={},G[L.id]=X);let W=X[z];return W===void 0&&(W=f(l()),X[z]=W),W}function f(y){let L=[],F=[],z=[];for(let G=0;G<t;G++)L[G]=0,F[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,L,F,z){let G=r.attributes,X=L.attributes,W=0,te=F.getAttributes();for(let k in te)if(te[k].location>=0){let ne=G[k],ve=X[k];if(ve===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ne===void 0||ne.attribute!==ve||ve&&ne.data!==ve.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function x(y,L,F,z){let G={},X=L.attributes,W=0,te=F.getAttributes();for(let k in te)if(te[k].location>=0){let ne=X[k];ne===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor));let ve={};ve.attribute=ne,ne&&ne.data&&(ve.data=ne.data),G[k]=ve,W++}r.attributes=G,r.attributesNum=W,r.index=z}function _(){let y=r.newAttributes;for(let L=0,F=y.length;L<F;L++)y[L]=0}function m(y){d(y,0)}function d(y,L){let F=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;F[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),G[y]!==L&&(i.vertexAttribDivisor(y,L),G[y]=L)}function E(){let y=r.newAttributes,L=r.enabledAttributes;for(let F=0,z=L.length;F<z;F++)L[F]!==y[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function M(y,L,F,z,G,X,W){W===!0?i.vertexAttribIPointer(y,L,F,G,X):i.vertexAttribPointer(y,L,F,z,G,X)}function A(y,L,F,z){_();let G=z.attributes,X=F.getAttributes(),W=L.defaultAttributeValues;for(let te in X){let k=X[te];if(k.location>=0){let j=G[te];if(j===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){let ne=j.normalized,ve=j.itemSize,We=e.get(j);if(We===void 0)continue;let Je=We.buffer,et=We.type,tt=We.bytesPerElement,Y=et===i.INT||et===i.UNSIGNED_INT||j.gpuType===xa;if(j.isInterleavedBufferAttribute){let $=j.data,de=$.stride,Ue=j.offset;if($.isInstancedInterleavedBuffer){for(let ye=0;ye<k.locationSize;ye++)d(k.location+ye,$.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ye=0;ye<k.locationSize;ye++)m(k.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ye=0;ye<k.locationSize;ye++)M(k.location+ye,ve/k.locationSize,et,ne,de*tt,(Ue+ve/k.locationSize*ye)*tt,Y)}else{if(j.isInstancedBufferAttribute){for(let $=0;$<k.locationSize;$++)d(k.location+$,j.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let $=0;$<k.locationSize;$++)m(k.location+$);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let $=0;$<k.locationSize;$++)M(k.location+$,ve/k.locationSize,et,ne,ve*tt,ve/k.locationSize*$*tt,Y)}}else if(W!==void 0){let ne=W[te];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(k.location,ne);break;case 3:i.vertexAttrib3fv(k.location,ne);break;case 4:i.vertexAttrib4fv(k.location,ne);break;default:i.vertexAttrib1fv(k.location,ne)}}}}E()}function C(){N();for(let y in n){let L=n[y];for(let F in L){let z=L[F];for(let G in z)h(z[G].object),delete z[G];delete L[F]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let L=n[y.id];for(let F in L){let z=L[F];for(let G in z)h(z[G].object),delete z[G];delete L[F]}delete n[y.id]}function w(y){for(let L in n){let F=n[L];if(F[y.id]===void 0)continue;let z=F[y.id];for(let G in z)h(z[G].object),delete z[G];delete F[y.id]}}function N(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function _d(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*f[_];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vd(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Wt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let N=w===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Qt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ln&&!N)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:A,vertexTextures:C,maxSamples:S}}function yd(i){let e=this,t=null,n=0,s=!1,r=!1,a=new en,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let x=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,M=E*4,A=d.clippingState||null;l.value=A,A=h(x,f,M,p);for(let C=0;C!==M;++C)A[C]=t[C];d.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,x){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,x!==!0||m===null){let d=p+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,A=p;M!==_;++M,A+=4)a.copy(u[M]).applyMatrix4(E,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bd(i){let e=new WeakMap;function t(a,o){return o===fa?a.mapping=ti:o===pa&&(a.mapping=ni),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===fa||o===pa)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ur(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vn=4,nl=[.125,.215,.35,.446,.526,.582],oi=20,Md=256,ks=new sa,il=new De,d1=null,f1=0,p1=0,m1=!1,Sd=new I,ja=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Sd}=r;d1=this._renderer.getRenderTarget(),f1=this._renderer.getActiveCubeFace(),p1=this._renderer.getActiveMipmapLevel(),m1=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(d1,f1,p1),this._renderer.xr.enabled=m1,e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ti||e.mapping===ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),d1=this._renderer.getRenderTarget(),f1=this._renderer.getActiveCubeFace(),p1=this._renderer.getActiveMipmapLevel(),m1=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:ii,format:Wt,colorSpace:$n,depthBuffer:!1},s=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Td(r)),this._blurMaterial=Ed(r,e,t),this._ggxMaterial=Ad(r,e,t)}return s}_compileMaterial(e){let t=new Mt(new pt,e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,n,s,r){let l=new mt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(il),u.toneMapping=Mn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new Pi,new Kn({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,d=!1,E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,d=!0):(m.color.copy(il),d=!0);for(let M=0;M<6;M++){let A=M%3;A===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):A===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let C=this._cubeSize;Wi(s,A*C,M>2?C:0,C,C),u.setRenderTarget(s),d&&u.render(_,l),u.render(e,l)}u.toneMapping=p,u.autoClear=f,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ti||e.mapping===ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Wi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ks)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=.05+c*.95,p=u*f,{_lodMax:x}=this,_=this._sizeLods[n],m=3*_*(n>x-Vn?n-x+Vn:0),d=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Wi(r,m,d,3*_,2*_),s.setRenderTarget(r),s.render(o,ks),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Wi(e,m,d,3*_,2*_),s.setRenderTarget(e),s.render(o,ks)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=c;let f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*oi-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):oi;m>oi&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);let d=[],E=0;for(let w=0;w<oi;++w){let N=w/_,b=Math.exp(-N*N/2);d.push(b),w===0?E+=b:w<m&&(E+=2*b)}for(let w=0;w<d.length;w++)d[w]=d[w]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-n;let A=this._sizeLods[s],C=3*A*(s>M-Vn?s-M+Vn:0),S=4*(this._cubeSize-A);Wi(t,C,S,3*A,2*A),l.setRenderTarget(t),l.render(u,ks)}};function Td(i){let e=[],t=[],n=[],s=i,r=i-Vn+1+nl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Vn?l=nl[a-i+Vn-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,_=3,m=2,d=1,E=new Float32Array(_*x*p),M=new Float32Array(m*x*p),A=new Float32Array(d*x*p);for(let S=0;S<p;S++){let w=S%3*2/3-1,N=S>2?0:-1,b=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];E.set(b,_*x*S),M.set(f,m*x*S);let y=[S,S,S,S,S,S];A.set(y,d*x*S)}let C=new pt;C.setAttribute("position",new Et(E,_)),C.setAttribute("uv",new Et(M,m)),C.setAttribute("faceIndex",new Et(A,d)),n.push(new Mt(C,null)),s>Vn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function sl(i,e,t){let n=new rn(i,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ad(i,e,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Md,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Ed(i,e,t){let n=new Float32Array(oi),s=new I(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function rl(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function al(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===fa||l===pa,h=l===ti||l===ni;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ja(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ja(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Cd(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ci("WebGLRenderer: "+n+" extension not supported."),s}}}function Rd(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,x=u.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let M=0,A=E.length;M<A;M+=3){let C=E[M+0],S=E[M+1],w=E[M+2];f.push(C,S,S,w,w,C)}}else if(x!==void 0){let E=x.array;_=x.version;for(let M=0,A=E.length/3-1;M<A;M+=3){let C=M+0,S=M+1,w=M+2;f.push(C,S,S,w,w,C)}}else return;let m=new(a1(f)?xs:ms)(f,1);m.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Id(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*a,x),t.update(p,n,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function u(f,p,x,_){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,x);let d=0;for(let E=0;E<x;E++)d+=p[E]*_[E];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pd(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ld(i,e,t){let n=new WeakMap,s=new Ye;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],M=0;p===!0&&(M=1),x===!0&&(M=2),_===!0&&(M=3);let A=o.attributes.position.count*M,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let S=new Float32Array(A*C*4*u),w=new fs(S,A,C,u);w.type=ln,w.needsUpdate=!0;let N=M*4;for(let y=0;y<u;y++){let L=m[y],F=d[y],z=E[y],G=A*C*4*y;for(let X=0;X<L.count;X++){let W=X*N;p===!0&&(s.fromBufferAttribute(L,X),S[G+W+0]=s.x,S[G+W+1]=s.y,S[G+W+2]=s.z,S[G+W+3]=0),x===!0&&(s.fromBufferAttribute(F,X),S[G+W+4]=s.x,S[G+W+5]=s.y,S[G+W+6]=s.z,S[G+W+7]=0),_===!0&&(s.fromBufferAttribute(z,X),S[G+W+8]=s.x,S[G+W+9]=s.y,S[G+W+10]=s.z,S[G+W+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new xe(A,C)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Dd(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Al=new yt,ol=new As(1,1),El=new fs,wl=new Lr,Cl=new _s,cl=[],ll=[],hl=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function Yi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=cl[s];if(r===void 0&&(r=new Float32Array(s),cl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function to(i,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ud(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Fd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Od(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function Bd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(xt(t,n))return;dl.set(n),i.uniformMatrix2fv(this.addr,!1,dl),gt(t,n)}}function zd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(xt(t,n))return;ul.set(n),i.uniformMatrix3fv(this.addr,!1,ul),gt(t,n)}}function Vd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(xt(t,n))return;hl.set(n),i.uniformMatrix4fv(this.addr,!1,hl),gt(t,n)}}function kd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function Hd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function Wd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Xd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Yd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Zd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Jd(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ol.compareFunction=s1,r=ol):r=Al,t.setTexture2D(e||r,s)}function $d(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wl,s)}function Kd(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cl,s)}function Qd(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||El,s)}function jd(i){switch(i){case 5126:return Ud;case 35664:return Nd;case 35665:return Fd;case 35666:return Od;case 35674:return Bd;case 35675:return zd;case 35676:return Vd;case 5124:case 35670:return kd;case 35667:case 35671:return Gd;case 35668:case 35672:return Hd;case 35669:case 35673:return Wd;case 5125:return Xd;case 36294:return qd;case 36295:return Yd;case 36296:return Zd;case 35678:case 36198:case 36298:case 36306:case 35682:return Jd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return Qd}}function e2(i,e){i.uniform1fv(this.addr,e)}function t2(i,e){let t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function n2(i,e){let t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function i2(i,e){let t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function s2(i,e){let t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function r2(i,e){let t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function a2(i,e){let t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function o2(i,e){i.uniform1iv(this.addr,e)}function c2(i,e){i.uniform2iv(this.addr,e)}function l2(i,e){i.uniform3iv(this.addr,e)}function h2(i,e){i.uniform4iv(this.addr,e)}function u2(i,e){i.uniform1uiv(this.addr,e)}function d2(i,e){i.uniform2uiv(this.addr,e)}function f2(i,e){i.uniform3uiv(this.addr,e)}function p2(i,e){i.uniform4uiv(this.addr,e)}function m2(i,e,t){let n=this.cache,s=e.length,r=to(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Al,r[a])}function x2(i,e,t){let n=this.cache,s=e.length,r=to(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wl,r[a])}function g2(i,e,t){let n=this.cache,s=e.length,r=to(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Cl,r[a])}function _2(i,e,t){let n=this.cache,s=e.length,r=to(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||El,r[a])}function v2(i){switch(i){case 5126:return e2;case 35664:return t2;case 35665:return n2;case 35666:return i2;case 35674:return s2;case 35675:return r2;case 35676:return a2;case 5124:case 35670:return o2;case 35667:case 35671:return c2;case 35668:case 35672:return l2;case 35669:case 35673:return h2;case 5125:return u2;case 36294:return d2;case 36295:return f2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return _2}}var g1=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jd(t.type)}},_1=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v2(t.type)}},v1=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},x1=/(\w+)(\])?(\[|\.)?/g;function fl(i,e){i.seq.push(e),i.map[e.id]=e}function y2(i,e,t){let n=i.name,s=n.length;for(x1.lastIndex=0;;){let r=x1.exec(n),a=x1.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fl(t,c===void 0?new g1(o,i,e):new _1(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new v1(o),fl(t,u)),t=u}}}var Xi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);y2(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function pl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var b2=37297,M2=0;function S2(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ml=new Ne;function T2(i){Xe._getMatrix(ml,Xe.workingColorSpace,i);let e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case ls:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+S2(i.getShaderSource(e),o)}else return r}function A2(i,e){let t=T2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function E2(i,e){let t;switch(e){case Lc:t="Linear";break;case Dc:t="Reinhard";break;case Uc:t="Cineon";break;case Nc:t="ACESFilmic";break;case Oc:t="AgX";break;case Bc:t="Neutral";break;case Fc:t="Custom";break;default:Ce("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qa=new I;function w2(){Xe.getLuminanceCoefficients(Qa);let i=Qa.x.toFixed(4),e=Qa.y.toFixed(4),t=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function R2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gs(i){return i!==""}function gl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P2=/^[ \t]*#include +<([\w\d./]+)>/gm;function y1(i){return i.replace(P2,D2)}var L2=new Map;function D2(i,e){let t=Fe[e];if(t===void 0){let n=L2.get(e);if(n!==void 0)t=Fe[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return y1(t)}var U2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(i){return i.replace(U2,N2)}function N2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function F2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function O2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ti:case ni:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ni:e="ENVMAP_MODE_REFRACTION";break}return e}function z2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ic:e="ENVMAP_BLENDING_MIX";break;case Pc:e="ENVMAP_BLENDING_ADD";break}return e}function V2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function k2(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=F2(t),c=O2(t),h=B2(t),u=z2(t),f=V2(t),p=C2(t),x=R2(r),_=s.createProgram(),m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Gs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Gs).join(`
`),d.length>0&&(d+=`
`)):(m=[yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),d=[yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Mn?E2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,A2("linearToOutputTexel",t.outputColorSpace),w2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=y1(a),a=gl(a,t),a=_l(a,t),o=y1(o),o=gl(o,t),o=_l(o,t),a=vl(a),o=vl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===r1?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===r1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=E+m+a,A=E+d+o,C=pl(s,s.VERTEX_SHADER,M),S=pl(s,s.FRAGMENT_SHADER,A);s.attachShader(_,C),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(C)||"",G=s.getShaderInfoLog(S)||"",X=F.trim(),W=z.trim(),te=G.trim(),k=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,S);else{let ne=xl(s,C,"vertex"),ve=xl(s,S,"fragment");Oe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ne+`
`+ve)}else X!==""?Ce("WebGLProgram: Program Info Log:",X):(W===""||te==="")&&(j=!1);j&&(L.diagnostics={runnable:k,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:te,prefix:d}})}s.deleteShader(C),s.deleteShader(S),N=new Xi(s,_),b=I2(s,_)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,b2)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=S,this}var G2=0,b1=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new M1(e),t.set(e,n)),n}},M1=class{constructor(e){this.id=G2++,this.code=e,this.usedTimes=0}};function H2(i,e,t,n,s,r,a){let o=new ps,l=new b1,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,L,F,z){let G=F.fog,X=z.geometry,W=b.isMeshStandardMaterial?F.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),k=te&&te.mapping===Ns?te.image.height:null,j=x[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&Ce("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let ne=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=ne!==void 0?ne.length:0,We=0;X.morphAttributes.position!==void 0&&(We=1),X.morphAttributes.normal!==void 0&&(We=2),X.morphAttributes.color!==void 0&&(We=3);let Je,et,tt,Y;if(j){let $e=hn[j];Je=$e.vertexShader,et=$e.fragmentShader}else Je=b.vertexShader,et=b.fragmentShader,l.update(b),tt=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);let $=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,ye=z.isBatchedMesh===!0,Ve=!!b.map,vt=!!b.matcap,Be=!!te,at=!!b.aoMap,R=!!b.lightMap,ke=!!b.bumpMap,Ge=!!b.normalMap,nt=!!b.displacementMap,me=!!b.emissiveMap,ot=!!b.metalnessMap,Me=!!b.roughnessMap,Le=b.anisotropy>0,T=b.clearcoat>0,g=b.dispersion>0,O=b.iridescence>0,q=b.sheen>0,J=b.transmission>0,H=Le&&!!b.anisotropyMap,_e=T&&!!b.clearcoatMap,oe=T&&!!b.clearcoatNormalMap,Se=T&&!!b.clearcoatRoughnessMap,ge=O&&!!b.iridescenceMap,K=O&&!!b.iridescenceThicknessMap,ie=q&&!!b.sheenColorMap,we=q&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,he=!!b.specularColorMap,Ie=!!b.specularIntensityMap,P=J&&!!b.transmissionMap,ce=J&&!!b.thicknessMap,se=!!b.gradientMap,re=!!b.alphaMap,Q=b.alphaTest>0,Z=!!b.alphaHash,fe=!!b.extensions,Pe=Mn;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Pe=i.toneMapping);let st={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:et,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ye,batchingColor:ye&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:$n,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:vt,envMap:Be,envMapMode:Be&&te.mapping,envMapCubeUVHeight:k,aoMap:at,lightMap:R,bumpMap:ke,normalMap:Ge,displacementMap:f&&nt,emissiveMap:me,normalMapObjectSpace:Ge&&b.normalMapType===Gc,normalMapTangentSpace:Ge&&b.normalMapType===i1,metalnessMap:ot,roughnessMap:Me,anisotropy:Le,anisotropyMap:H,clearcoat:T,clearcoatMap:_e,clearcoatNormalMap:oe,clearcoatRoughnessMap:Se,dispersion:g,iridescence:O,iridescenceMap:ge,iridescenceThicknessMap:K,sheen:q,sheenColorMap:ie,sheenRoughnessMap:we,specularMap:Ae,specularColorMap:he,specularIntensityMap:Ie,transmission:J,transmissionMap:P,thicknessMap:ce,gradientMap:se,opaque:b.transparent===!1&&b.blending===Zn&&b.alphaToCoverage===!1,alphaMap:re,alphaTest:Q,alphaHash:Z,combine:b.combine,mapUv:Ve&&_(b.map.channel),aoMapUv:at&&_(b.aoMap.channel),lightMapUv:R&&_(b.lightMap.channel),bumpMapUv:ke&&_(b.bumpMap.channel),normalMapUv:Ge&&_(b.normalMap.channel),displacementMapUv:nt&&_(b.displacementMap.channel),emissiveMapUv:me&&_(b.emissiveMap.channel),metalnessMapUv:ot&&_(b.metalnessMap.channel),roughnessMapUv:Me&&_(b.roughnessMap.channel),anisotropyMapUv:H&&_(b.anisotropyMap.channel),clearcoatMapUv:_e&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(b.sheenRoughnessMap.channel),specularMapUv:Ae&&_(b.specularMap.channel),specularColorMapUv:he&&_(b.specularColorMap.channel),specularIntensityMapUv:Ie&&_(b.specularIntensityMap.channel),transmissionMapUv:P&&_(b.transmissionMap.channel),thicknessMapUv:ce&&_(b.thicknessMap.channel),alphaMapUv:re&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ge||Le),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Ve||re),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:We,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===Ze,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(b.emissiveMap.colorSpace)===Ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===on,flipSided:b.side===St,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:fe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&b.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function d(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(E(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function E(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function A(b){let y=x[b.type],L;if(y){let F=hn[y];L=jc.clone(F.uniforms)}else L=b.uniforms;return L}function C(b,y){let L;for(let F=0,z=h.length;F<z;F++){let G=h[F];if(G.cacheKey===y){L=G,++L.usedTimes;break}}return L===void 0&&(L=new k2(i,y,b,r),h.push(L)),L}function S(b){if(--b.usedTimes===0){let y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:A,acquireProgram:C,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:N}}function W2(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function X2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ml(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,x,_,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:_,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function o(u,f,p,x,_,m){let d=a(u,f,p,x,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,x,_,m){let d=a(u,f,p,x,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||X2),n.length>1&&n.sort(f||bl),s.length>1&&s.sort(f||bl)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function q2(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ml,i.set(n,[a])):s>=r.length?(a=new Ml,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Y2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new De};break;case"SpotLight":t={position:new I,direction:new I,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Z2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var J2=0;function $2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function K2(i){let e=new Y2,t=Z2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new it,a=new it;function o(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,x=0,_=0,m=0,d=0,E=0,M=0,A=0,C=0,S=0,w=0;c.sort($2);for(let b=0,y=c.length;b<y;b++){let L=c[b],F=L.color,z=L.intensity,G=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*z,u+=F.g*z,f+=F.b*z;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],z);w++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,k=t.get(L);k.shadowIntensity=te.intensity,k.shadowBias=te.bias,k.shadowNormalBias=te.normalBias,k.shadowRadius=te.radius,k.shadowMapSize=te.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=L.shadow.matrix,E++}n.directional[p]=W,p++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(F).multiplyScalar(z),W.distance=G,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;let te=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,te.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[_]=te.matrix,L.castShadow){let k=t.get(L);k.shadowIntensity=te.intensity,k.shadowBias=te.bias,k.shadowNormalBias=te.normalBias,k.shadowRadius=te.radius,k.shadowMapSize=te.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=X,A++}_++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(F).multiplyScalar(z),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=W,m++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let te=L.shadow,k=t.get(L);k.shadowIntensity=te.intensity,k.shadowBias=te.bias,k.shadowNormalBias=te.normalBias,k.shadowRadius=te.radius,k.shadowMapSize=te.mapSize,k.shadowCameraNear=te.camera.near,k.shadowCameraFar=te.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=X,n.pointShadowMatrix[x]=L.shadow.matrix,M++}n.point[x]=W,x++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(z),W.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==p||N.pointLength!==x||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==E||N.numPointShadows!==M||N.numSpotShadows!==A||N.numSpotMaps!==C||N.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=A+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,N.directionalLength=p,N.pointLength=x,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=E,N.numPointShadows=M,N.numSpotShadows=A,N.numSpotMaps=C,N.numLightProbes=w,n.version=J2++)}function l(c,h){let u=0,f=0,p=0,x=0,_=0,m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let M=c[d];if(M.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(M.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let A=n.hemi[_];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Sl(i){let e=new K2(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Q2(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Sl(i),e.set(s,[o])):r>=a.length?(o=new Sl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var j2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ef=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tf(i,e,t){let n=new Ui,s=new xe,r=new xe,a=new Ye,o=new Yr({depthPacking:kc}),l=new Zr,c={},h=t.maxTextureSize,u={[_n]:St,[St]:_n,[on]:on},f=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:j2,fragmentShader:ef}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new pt;x.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Mt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let d=this.type;this.render=function(S,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(cn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=d!==an&&this.type===an,G=d===an&&this.type!==an;for(let X=0,W=S.length;X<W;X++){let te=S[X],k=te.shadow;if(k===void 0){Ce("WebGLShadowMap:",te,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let j=k.getFrameExtents();if(s.multiply(j),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,k.mapSize.y=r.y)),k.map===null||z===!0||G===!0){let ve=this.type!==an?{minFilter:Dt,magFilter:Dt}:{};k.map!==null&&k.map.dispose(),k.map=new rn(s.x,s.y,ve),k.map.texture.name=te.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ne=k.getViewportCount();for(let ve=0;ve<ne;ve++){let We=k.getViewport(ve);a.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),F.viewport(a),k.updateMatrices(te,ve),n=k.getFrustum(),A(w,N,k.camera,te,this.type)}k.isPointLightShadow!==!0&&this.type===an&&E(k,N),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,L)};function E(S,w){let N=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new rn(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,N,f,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,N,p,_,null)}function M(S,w,N,b){let y=null,L=N.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)y=L;else if(y=N.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=y.uuid,z=w.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let X=G[z];X===void 0&&(X=y.clone(),G[z]=X,w.addEventListener("dispose",C)),y=X}if(y.visible=w.visible,y.wireframe=w.wireframe,b===an?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let F=i.properties.get(y);F.light=N}return y}function A(S,w,N,b,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===an)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,S.matrixWorld);let z=e.update(S),G=S.material;if(Array.isArray(G)){let X=z.groups;for(let W=0,te=X.length;W<te;W++){let k=X[W],j=G[k.materialIndex];if(j&&j.visible){let ne=M(S,j,b,y);S.onBeforeShadow(i,S,w,N,z,ne,k),i.renderBufferDirect(N,null,z,ne,S,k),S.onAfterShadow(i,S,w,N,z,ne,k)}}}else if(G.visible){let X=M(S,G,b,y);S.onBeforeShadow(i,S,w,N,z,X,null),i.renderBufferDirect(N,null,z,X,S,null),S.onAfterShadow(i,S,w,N,z,X,null)}}let F=S.children;for(let z=0,G=F.length;z<G;z++)A(F[z],w,N,b,y)}function C(S){S.target.removeEventListener("dispose",C);for(let N in c){let b=c[N],y=S.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var nf={[aa]:oa,[ca]:ua,[la]:da,[Jn]:ha,[oa]:aa,[ua]:ca,[da]:la,[ha]:Jn};function sf(i,e){function t(){let P=!1,ce=new Ye,se=null,re=new Ye(0,0,0,0);return{setMask:function(Q){se!==Q&&!P&&(i.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){P=Q},setClear:function(Q,Z,fe,Pe,st){st===!0&&(Q*=Pe,Z*=Pe,fe*=Pe),ce.set(Q,Z,fe,Pe),re.equals(ce)===!1&&(i.clearColor(Q,Z,fe,Pe),re.copy(ce))},reset:function(){P=!1,se=null,re.set(-1,0,0,0)}}}function n(){let P=!1,ce=!1,se=null,re=null,Q=null;return{setReversed:function(Z){if(ce!==Z){let fe=e.get("EXT_clip_control");Z?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),ce=Z;let Pe=Q;Q=null,this.setClear(Pe)}},getReversed:function(){return ce},setTest:function(Z){Z?$(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(Z){se!==Z&&!P&&(i.depthMask(Z),se=Z)},setFunc:function(Z){if(ce&&(Z=nf[Z]),re!==Z){switch(Z){case aa:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case Jn:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Z}},setLocked:function(Z){P=Z},setClear:function(Z){Q!==Z&&(ce&&(Z=1-Z),i.clearDepth(Z),Q=Z)},reset:function(){P=!1,se=null,re=null,Q=null,ce=!1}}}function s(){let P=!1,ce=null,se=null,re=null,Q=null,Z=null,fe=null,Pe=null,st=null;return{setTest:function($e){P||($e?$(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function($e){ce!==$e&&!P&&(i.stencilMask($e),ce=$e)},setFunc:function($e,jt,Xt){(se!==$e||re!==jt||Q!==Xt)&&(i.stencilFunc($e,jt,Xt),se=$e,re=jt,Q=Xt)},setOp:function($e,jt,Xt){(Z!==$e||fe!==jt||Pe!==Xt)&&(i.stencilOp($e,jt,Xt),Z=$e,fe=jt,Pe=Xt)},setLocked:function($e){P=$e},setClear:function($e){st!==$e&&(i.clearStencil($e),st=$e)},reset:function(){P=!1,ce=null,se=null,re=null,Q=null,Z=null,fe=null,Pe=null,st=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],x=null,_=!1,m=null,d=null,E=null,M=null,A=null,C=null,S=null,w=new De(0,0,0),N=0,b=!1,y=null,L=null,F=null,z=null,G=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,te=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=te>=1):k.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=te>=2);let j=null,ne={},ve=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),Je=new Ye().fromArray(ve),et=new Ye().fromArray(We);function tt(P,ce,se,re){let Q=new Uint8Array(4),Z=i.createTexture();i.bindTexture(P,Z),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<se;fe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ce+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return Z}let Y={};Y[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Jn),ke(!1),Ge(Wo),$(i.CULL_FACE),at(cn);function $(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function de(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ue(P,ce){return u[P]!==ce?(i.bindFramebuffer(P,ce),u[P]=ce,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function ye(P,ce){let se=p,re=!1;if(P){se=f.get(ce),se===void 0&&(se=[],f.set(ce,se));let Q=P.textures;if(se.length!==Q.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,fe=Q.length;Z<fe;Z++)se[Z]=i.COLOR_ATTACHMENT0+Z;se.length=Q.length,re=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,re=!0);re&&i.drawBuffers(se)}function Ve(P){return x!==P?(i.useProgram(P),x=P,!0):!1}let vt={[Ln]:i.FUNC_ADD,[fc]:i.FUNC_SUBTRACT,[pc]:i.FUNC_REVERSE_SUBTRACT};vt[mc]=i.MIN,vt[xc]=i.MAX;let Be={[gc]:i.ZERO,[_c]:i.ONE,[vc]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[Ac]:i.SRC_ALPHA_SATURATE,[Sc]:i.DST_COLOR,[bc]:i.DST_ALPHA,[yc]:i.ONE_MINUS_SRC_COLOR,[Tr]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[Mc]:i.ONE_MINUS_DST_ALPHA,[Ec]:i.CONSTANT_COLOR,[wc]:i.ONE_MINUS_CONSTANT_COLOR,[Cc]:i.CONSTANT_ALPHA,[Rc]:i.ONE_MINUS_CONSTANT_ALPHA};function at(P,ce,se,re,Q,Z,fe,Pe,st,$e){if(P===cn){_===!0&&(de(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),P!==dc){if(P!==m||$e!==b){if((d!==Ln||A!==Ln)&&(i.blendEquation(i.FUNC_ADD),d=Ln,A=Ln),$e)switch(P){case Zn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case On:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",P);break}else switch(P){case Zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case On:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qo:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yo:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",P);break}E=null,M=null,C=null,S=null,w.set(0,0,0),N=0,m=P,b=$e}return}Q=Q||ce,Z=Z||se,fe=fe||re,(ce!==d||Q!==A)&&(i.blendEquationSeparate(vt[ce],vt[Q]),d=ce,A=Q),(se!==E||re!==M||Z!==C||fe!==S)&&(i.blendFuncSeparate(Be[se],Be[re],Be[Z],Be[fe]),E=se,M=re,C=Z,S=fe),(Pe.equals(w)===!1||st!==N)&&(i.blendColor(Pe.r,Pe.g,Pe.b,st),w.copy(Pe),N=st),m=P,b=!1}function R(P,ce){P.side===on?de(i.CULL_FACE):$(i.CULL_FACE);let se=P.side===St;ce&&(se=!se),ke(se),P.blending===Zn&&P.transparent===!1?at(cn):at(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let re=P.stencilWrite;o.setTest(re),re&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function Ge(P){P!==lc?($(i.CULL_FACE),P!==L&&(P===Wo?i.cullFace(i.BACK):P===hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),L=P}function nt(P){P!==F&&(W&&i.lineWidth(P),F=P)}function me(P,ce,se){P?($(i.POLYGON_OFFSET_FILL),(z!==ce||G!==se)&&(i.polygonOffset(ce,se),z=ce,G=se)):de(i.POLYGON_OFFSET_FILL)}function ot(P){P?$(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function Me(P){P===void 0&&(P=i.TEXTURE0+X-1),j!==P&&(i.activeTexture(P),j=P)}function Le(P,ce,se){se===void 0&&(j===null?se=i.TEXTURE0+X-1:se=j);let re=ne[se];re===void 0&&(re={type:void 0,texture:void 0},ne[se]=re),(re.type!==P||re.texture!==ce)&&(j!==se&&(i.activeTexture(se),j=se),i.bindTexture(P,ce||Y[P]),re.type=P,re.texture=ce)}function T(){let P=ne[j];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function q(){try{i.texSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function J(){try{i.texSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function _e(){try{i.compressedTexSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function oe(){try{i.texStorage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Se(){try{i.texStorage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ge(){try{i.texImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function K(){try{i.texImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ie(P){Je.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Je.copy(P))}function we(P){et.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),et.copy(P))}function Ae(P,ce){let se=c.get(ce);se===void 0&&(se=new WeakMap,c.set(ce,se));let re=se.get(P);re===void 0&&(re=i.getUniformBlockIndex(ce,P.name),se.set(P,re))}function he(P,ce){let re=c.get(ce).get(P);l.get(ce)!==re&&(i.uniformBlockBinding(ce,re,P.__bindingPointIndex),l.set(ce,re))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,ne={},u={},f=new WeakMap,p=[],x=null,_=!1,m=null,d=null,E=null,M=null,A=null,C=null,S=null,w=new De(0,0,0),N=0,b=!1,y=null,L=null,F=null,z=null,G=null,Je.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:de,bindFramebuffer:Ue,drawBuffers:ye,useProgram:Ve,setBlending:at,setMaterial:R,setFlipSided:ke,setCullFace:Ge,setLineWidth:nt,setPolygonOffset:me,setScissorTest:ot,activeTexture:Me,bindTexture:Le,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:ge,texImage3D:K,updateUBOMapping:Ae,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:Se,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:H,compressedTexSubImage3D:_e,scissor:ie,viewport:we,reset:Ie}}function rf(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,g){return p?new OffscreenCanvas(T,g):us("canvas")}function _(T,g,O){let q=1,J=Le(T);if((J.width>O||J.height>O)&&(q=O/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let H=Math.floor(q*J.width),_e=Math.floor(q*J.height);u===void 0&&(u=x(H,_e));let oe=g?x(H,_e):u;return oe.width=H,oe.height=_e,oe.getContext("2d").drawImage(T,0,0,H,_e),Ce("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+H+"x"+_e+")."),oe}else return"data"in T&&Ce("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,g,O,q,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=g;if(g===i.RED&&(O===i.FLOAT&&(H=i.R32F),O===i.HALF_FLOAT&&(H=i.R16F),O===i.UNSIGNED_BYTE&&(H=i.R8)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(H=i.R8UI),O===i.UNSIGNED_SHORT&&(H=i.R16UI),O===i.UNSIGNED_INT&&(H=i.R32UI),O===i.BYTE&&(H=i.R8I),O===i.SHORT&&(H=i.R16I),O===i.INT&&(H=i.R32I)),g===i.RG&&(O===i.FLOAT&&(H=i.RG32F),O===i.HALF_FLOAT&&(H=i.RG16F),O===i.UNSIGNED_BYTE&&(H=i.RG8)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(H=i.RG8UI),O===i.UNSIGNED_SHORT&&(H=i.RG16UI),O===i.UNSIGNED_INT&&(H=i.RG32UI),O===i.BYTE&&(H=i.RG8I),O===i.SHORT&&(H=i.RG16I),O===i.INT&&(H=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(H=i.RGB8UI),O===i.UNSIGNED_SHORT&&(H=i.RGB16UI),O===i.UNSIGNED_INT&&(H=i.RGB32UI),O===i.BYTE&&(H=i.RGB8I),O===i.SHORT&&(H=i.RGB16I),O===i.INT&&(H=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),O===i.UNSIGNED_INT&&(H=i.RGBA32UI),O===i.BYTE&&(H=i.RGBA8I),O===i.SHORT&&(H=i.RGBA16I),O===i.INT&&(H=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),g===i.RGBA){let _e=J?ls:Xe.getTransfer(q);O===i.FLOAT&&(H=i.RGBA32F),O===i.HALF_FLOAT&&(H=i.RGBA16F),O===i.UNSIGNED_BYTE&&(H=_e===Ze?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function A(T,g){let O;return T?g===null||g===zn||g===Gi?O=i.DEPTH24_STENCIL8:g===ln?O=i.DEPTH32F_STENCIL8:g===ki&&(O=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zn||g===Gi?O=i.DEPTH_COMPONENT24:g===ln?O=i.DEPTH_COMPONENT32F:g===ki&&(O=i.DEPTH_COMPONENT16),O}function C(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Dt&&T.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function S(T){let g=T.target;g.removeEventListener("dispose",S),N(g),g.isVideoTexture&&h.delete(g)}function w(T){let g=T.target;g.removeEventListener("dispose",w),y(g)}function N(T){let g=n.get(T);if(g.__webglInit===void 0)return;let O=T.source,q=f.get(O);if(q){let J=q[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys(q).length===0&&f.delete(O)}n.remove(T)}function b(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let O=T.source,q=f.get(O);delete q[g.__cacheKey],a.memory.textures--}function y(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let J=0;J<g.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[q][J]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let O=T.textures;for(let q=0,J=O.length;q<J;q++){let H=n.get(O[q]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(T)}let L=0;function F(){L=0}function z(){let T=L;return T>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function G(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function X(T,g){let O=n.get(T);if(T.isVideoTexture&&ot(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let q=T.image;if(q===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function W(T,g){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,g);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function te(T,g){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function k(T,g){let O=n.get(T);if(T.version>0&&O.__version!==T.version){$(O,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}let j={[Ar]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[Er]:i.MIRRORED_REPEAT},ne={[Dt]:i.NEAREST,[zc]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},ve={[Hc]:i.NEVER,[Jc]:i.ALWAYS,[Wc]:i.LESS,[s1]:i.LEQUAL,[Xc]:i.EQUAL,[Zc]:i.GEQUAL,[qc]:i.GREATER,[Yc]:i.NOTEQUAL};function We(T,g){if(g.type===ln&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===zt||g.magFilter===ma||g.magFilter===Fs||g.magFilter===Bn||g.minFilter===zt||g.minFilter===ma||g.minFilter===Fs||g.minFilter===Bn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,j[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,j[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,j[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ne[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ne[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ve[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==Fs&&g.minFilter!==Bn||g.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Je(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",S));let q=g.source,J=f.get(q);J===void 0&&(J={},f.set(q,J));let H=G(g);if(H!==T.__cacheKey){J[H]===void 0&&(J[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[H].usedTimes++;let _e=J[T.__cacheKey];_e!==void 0&&(J[T.__cacheKey].usedTimes--,_e.usedTimes===0&&b(g)),T.__cacheKey=H,T.__webglTexture=J[H].texture}return O}function et(T,g,O){return Math.floor(Math.floor(T/O)/g)}function tt(T,g,O,q){let H=T.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,q,g.data);else{H.sort((K,ie)=>K.start-ie.start);let _e=0;for(let K=1;K<H.length;K++){let ie=H[_e],we=H[K],Ae=ie.start+ie.count,he=et(we.start,g.width,4),Ie=et(ie.start,g.width,4);we.start<=Ae+1&&he===Ie&&et(we.start+we.count-1,g.width,4)===he?ie.count=Math.max(ie.count,we.start+we.count-ie.start):(++_e,H[_e]=we)}H.length=_e+1;let oe=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),ge=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let K=0,ie=H.length;K<ie;K++){let we=H[K],Ae=Math.floor(we.start/4),he=Math.ceil(we.count/4),Ie=Ae%g.width,P=Math.floor(Ae/g.width),ce=he,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Ie,P,ce,se,O,q,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function Y(T,g,O){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);let J=Je(T,g),H=g.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+O);let _e=n.get(H);if(H.version!==_e.__version||J===!0){t.activeTexture(i.TEXTURE0+O);let oe=Xe.getPrimaries(Xe.workingColorSpace),Se=g.colorSpace===Sn?null:Xe.getPrimaries(g.colorSpace),ge=g.colorSpace===Sn||oe===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let K=_(g.image,!1,s.maxTextureSize);K=Me(g,K);let ie=r.convert(g.format,g.colorSpace),we=r.convert(g.type),Ae=M(g.internalFormat,ie,we,g.colorSpace,g.isVideoTexture);We(q,g);let he,Ie=g.mipmaps,P=g.isVideoTexture!==!0,ce=_e.__version===void 0||J===!0,se=H.dataReady,re=C(g,K);if(g.isDepthTexture)Ae=A(g.format===Hi,g.type),ce&&(P?t.texStorage2D(i.TEXTURE_2D,1,Ae,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Ae,K.width,K.height,0,ie,we,null));else if(g.isDataTexture)if(Ie.length>0){P&&ce&&t.texStorage2D(i.TEXTURE_2D,re,Ae,Ie[0].width,Ie[0].height);for(let Q=0,Z=Ie.length;Q<Z;Q++)he=Ie[Q],P?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,ie,we,he.data):t.texImage2D(i.TEXTURE_2D,Q,Ae,he.width,he.height,0,ie,we,he.data);g.generateMipmaps=!1}else P?(ce&&t.texStorage2D(i.TEXTURE_2D,re,Ae,K.width,K.height),se&&tt(g,K,ie,we)):t.texImage2D(i.TEXTURE_2D,0,Ae,K.width,K.height,0,ie,we,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ae,Ie[0].width,Ie[0].height,K.depth);for(let Q=0,Z=Ie.length;Q<Z;Q++)if(he=Ie[Q],g.format!==Wt)if(ie!==null)if(P){if(se)if(g.layerUpdates.size>0){let fe=u1(he.width,he.height,g.format,g.type);for(let Pe of g.layerUpdates){let st=he.data.subarray(Pe*fe/he.data.BYTES_PER_ELEMENT,(Pe+1)*fe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Pe,he.width,he.height,1,ie,st)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,K.depth,ie,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ae,he.width,he.height,K.depth,0,he.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,K.depth,ie,we,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ae,he.width,he.height,K.depth,0,ie,we,he.data)}else{P&&ce&&t.texStorage2D(i.TEXTURE_2D,re,Ae,Ie[0].width,Ie[0].height);for(let Q=0,Z=Ie.length;Q<Z;Q++)he=Ie[Q],g.format!==Wt?ie!==null?P?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,ie,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ae,he.width,he.height,0,he.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,ie,we,he.data):t.texImage2D(i.TEXTURE_2D,Q,Ae,he.width,he.height,0,ie,we,he.data)}else if(g.isDataArrayTexture)if(P){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ae,K.width,K.height,K.depth),se)if(g.layerUpdates.size>0){let Q=u1(K.width,K.height,g.format,g.type);for(let Z of g.layerUpdates){let fe=K.data.subarray(Z*Q/K.data.BYTES_PER_ELEMENT,(Z+1)*Q/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,K.width,K.height,1,ie,we,fe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ie,we,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,K.width,K.height,K.depth,0,ie,we,K.data);else if(g.isData3DTexture)P?(ce&&t.texStorage3D(i.TEXTURE_3D,re,Ae,K.width,K.height,K.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ie,we,K.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,K.width,K.height,K.depth,0,ie,we,K.data);else if(g.isFramebufferTexture){if(ce)if(P)t.texStorage2D(i.TEXTURE_2D,re,Ae,K.width,K.height);else{let Q=K.width,Z=K.height;for(let fe=0;fe<re;fe++)t.texImage2D(i.TEXTURE_2D,fe,Ae,Q,Z,0,ie,we,null),Q>>=1,Z>>=1}}else if(Ie.length>0){if(P&&ce){let Q=Le(Ie[0]);t.texStorage2D(i.TEXTURE_2D,re,Ae,Q.width,Q.height)}for(let Q=0,Z=Ie.length;Q<Z;Q++)he=Ie[Q],P?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ie,we,he):t.texImage2D(i.TEXTURE_2D,Q,Ae,ie,we,he);g.generateMipmaps=!1}else if(P){if(ce){let Q=Le(K);t.texStorage2D(i.TEXTURE_2D,re,Ae,Q.width,Q.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,we,K)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ie,we,K);m(g)&&d(q),_e.__version=H.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function $(T,g,O){if(g.image.length!==6)return;let q=Je(T,g),J=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let H=n.get(J);if(J.version!==H.__version||q===!0){t.activeTexture(i.TEXTURE0+O);let _e=Xe.getPrimaries(Xe.workingColorSpace),oe=g.colorSpace===Sn?null:Xe.getPrimaries(g.colorSpace),Se=g.colorSpace===Sn||_e===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ge=g.isCompressedTexture||g.image[0].isCompressedTexture,K=g.image[0]&&g.image[0].isDataTexture,ie=[];for(let Z=0;Z<6;Z++)!ge&&!K?ie[Z]=_(g.image[Z],!0,s.maxCubemapSize):ie[Z]=K?g.image[Z].image:g.image[Z],ie[Z]=Me(g,ie[Z]);let we=ie[0],Ae=r.convert(g.format,g.colorSpace),he=r.convert(g.type),Ie=M(g.internalFormat,Ae,he,g.colorSpace),P=g.isVideoTexture!==!0,ce=H.__version===void 0||q===!0,se=J.dataReady,re=C(g,we);We(i.TEXTURE_CUBE_MAP,g);let Q;if(ge){P&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Ie,we.width,we.height);for(let Z=0;Z<6;Z++){Q=ie[Z].mipmaps;for(let fe=0;fe<Q.length;fe++){let Pe=Q[fe];g.format!==Wt?Ae!==null?P?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,Pe.width,Pe.height,Ae,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,Ie,Pe.width,Pe.height,0,Pe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,Pe.width,Pe.height,Ae,he,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,Ie,Pe.width,Pe.height,0,Ae,he,Pe.data)}}}else{if(Q=g.mipmaps,P&&ce){Q.length>0&&re++;let Z=Le(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Ie,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(K){P?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ie[Z].width,ie[Z].height,Ae,he,ie[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ie,ie[Z].width,ie[Z].height,0,Ae,he,ie[Z].data);for(let fe=0;fe<Q.length;fe++){let st=Q[fe].image[Z].image;P?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,st.width,st.height,Ae,he,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,Ie,st.width,st.height,0,Ae,he,st.data)}}else{P?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,he,ie[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ie,Ae,he,ie[Z]);for(let fe=0;fe<Q.length;fe++){let Pe=Q[fe];P?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,Ae,he,Pe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,Ie,Ae,he,Pe.image[Z])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),H.__version=J.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function de(T,g,O,q,J,H){let _e=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),Se=M(O.internalFormat,_e,oe,O.colorSpace),ge=n.get(g),K=n.get(O);if(K.__renderTarget=g,!ge.__hasExternalTextures){let ie=Math.max(1,g.width>>H),we=Math.max(1,g.height>>H);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,H,Se,ie,we,g.depth,0,_e,oe,null):t.texImage2D(J,H,Se,ie,we,0,_e,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),me(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,K.__webglTexture,0,nt(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,K.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(T,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let q=g.depthTexture,J=q&&q.isDepthTexture?q.type:null,H=A(g.stencilBuffer,J),_e=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=nt(g);me(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,H,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,H,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,H,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,T)}else{let q=g.textures;for(let J=0;J<q.length;J++){let H=q[J],_e=r.convert(H.format,H.colorSpace),oe=r.convert(H.type),Se=M(H.internalFormat,_e,oe,H.colorSpace),ge=nt(g);O&&me(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Se,g.width,g.height):me(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,Se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Se,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);let J=q.__webglTexture,H=nt(g);if(g.depthTexture.format===Ei)me(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(g.depthTexture.format===Hi)me(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ve(T){let g=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){let J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=q}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let q=T.texture.mipmaps;q&&q.length>0?ye(g.__webglFramebuffer[0],T):ye(g.__webglFramebuffer,T)}else if(O){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),Ue(g.__webglDepthbuffer[q],T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,H)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ue(g.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,H)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(T,g,O){let q=n.get(T);g!==void 0&&de(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ve(T)}function Be(T){let g=T.texture,O=n.get(T),q=n.get(g);T.addEventListener("dispose",w);let J=T.textures,H=T.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,a.memory.textures++),H){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let Se=0;Se<g.mipmaps.length;Se++)O.__webglFramebuffer[oe][Se]=i.createFramebuffer()}else O.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)O.__webglFramebuffer[oe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(_e)for(let oe=0,Se=J.length;oe<Se;oe++){let ge=n.get(J[oe]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&me(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){let Se=J[oe];O.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);let ge=r.convert(Se.format,Se.colorSpace),K=r.convert(Se.type),ie=M(Se.internalFormat,ge,K,Se.colorSpace,T.isXRRenderTarget===!0),we=nt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ie,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),We(i.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)de(O.__webglFramebuffer[oe][Se],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se);else de(O.__webglFramebuffer[oe],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,Se=J.length;oe<Se;oe++){let ge=J[oe],K=n.get(ge),ie=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,K.__webglTexture),We(ie,ge),de(O.__webglFramebuffer,T,ge,i.COLOR_ATTACHMENT0+oe,ie,0),m(ge)&&d(ie)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,q.__webglTexture),We(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)de(O.__webglFramebuffer[Se],T,g,i.COLOR_ATTACHMENT0,oe,Se);else de(O.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,oe,0);m(g)&&d(oe),t.unbindTexture()}T.depthBuffer&&Ve(T)}function at(T){let g=T.textures;for(let O=0,q=g.length;O<q;O++){let J=g[O];if(m(J)){let H=E(T),_e=n.get(J).__webglTexture;t.bindTexture(H,_e),d(H),t.unbindTexture()}}}let R=[],ke=[];function Ge(T){if(T.samples>0){if(me(T)===!1){let g=T.textures,O=T.width,q=T.height,J=i.COLOR_BUFFER_BIT,H=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(T),oe=g.length>1;if(oe)for(let ge=0;ge<g.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let Se=T.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);let K=n.get(g[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,J,i.NEAREST),l===!0&&(R.length=0,ke.length=0,R.push(i.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(R.push(H),ke.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ge=0;ge<g.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);let K=n.get(g[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function nt(T){return Math.min(s.maxSamples,T.samples)}function me(T){let g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ot(T){let g=a.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function Me(T,g){let O=T.colorSpace,q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==$n&&O!==Sn&&(Xe.getTransfer(O)===Ze?(q!==Wt||J!==Qt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",O)),g}function Le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=k,this.rebindTextures=vt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=me}function af(i,e){function t(n,s=Sn){let r,a=Xe.getTransfer(s);if(n===Qt)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$o)return i.BYTE;if(n===Ko)return i.SHORT;if(n===ki)return i.UNSIGNED_SHORT;if(n===xa)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===e1)return i.ALPHA;if(n===t1)return i.RGB;if(n===Wt)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===n1)return i.RED;if(n===va)return i.RED_INTEGER;if(n===ya)return i.RG;if(n===ba)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Os||n===Bs||n===zs||n===Vs)if(a===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ta||n===Aa||n===Ea)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ca||n===Ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Ca)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ra)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Va||n===ka||n===Ga||n===Ha)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Xa||n===qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===Za||n===Ja||n===$a)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var of=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,S1=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Es(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:of,fragmentShader:cf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},T1=class extends vn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,x=null,_=typeof XRWebGLBinding<"u",m=new S1,d={},E=t.getContextAttributes(),M=null,A=null,C=[],S=[],w=new xe,N=null,b=new mt;b.viewport=new Ye;let y=new mt;y.viewport=new Ye;let L=[b,y],F=new ra,z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=C[Y];return $===void 0&&($=new Li,C[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=C[Y];return $===void 0&&($=new Li,C[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=C[Y];return $===void 0&&($=new Li,C[Y]=$),$.getHandSpace()};function X(Y){let $=S.indexOf(Y.inputSource);if($===-1)return;let de=C[$];de!==void 0&&(de.update(Y.inputSource,Y.frame,c||a),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",te);for(let Y=0;Y<C.length;Y++){let $=S[Y];$!==null&&(S[Y]=null,C[Y].disconnect($))}z=null,G=null,m.reset();for(let Y in d)delete d[Y];e.setRenderTarget(M),p=null,f=null,u=null,s=null,A=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ue=null,ye=null;E.depth&&(ye=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=E.stencil?Hi:Ei,Ue=E.stencil?Gi:zn);let Ve={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new rn(f.textureWidth,f.textureHeight,{format:Wt,type:Qt,depthTexture:new As(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let de={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new rn(p.framebufferWidth,p.framebufferHeight,{format:Wt,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Y){for(let $=0;$<Y.removed.length;$++){let de=Y.removed[$],Ue=S.indexOf(de);Ue>=0&&(S[Ue]=null,C[Ue].disconnect(de))}for(let $=0;$<Y.added.length;$++){let de=Y.added[$],Ue=S.indexOf(de);if(Ue===-1){for(let Ve=0;Ve<C.length;Ve++)if(Ve>=S.length){S.push(de),Ue=Ve;break}else if(S[Ve]===null){S[Ve]=de,Ue=Ve;break}if(Ue===-1)break}let ye=C[Ue];ye&&ye.connect(de)}}let k=new I,j=new I;function ne(Y,$,de){k.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);let Ue=k.distanceTo(j),ye=$.projectionMatrix.elements,Ve=de.projectionMatrix.elements,vt=ye[14]/(ye[10]-1),Be=ye[14]/(ye[10]+1),at=(ye[9]+1)/ye[5],R=(ye[9]-1)/ye[5],ke=(ye[8]-1)/ye[0],Ge=(Ve[8]+1)/Ve[0],nt=vt*ke,me=vt*Ge,ot=Ue/(-ke+Ge),Me=ot*-ke;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Me),Y.translateZ(ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ye[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Le=vt+ot,T=Be+ot,g=nt-Me,O=me+(Ue-Me),q=at*Be/T*Le,J=R*Be/T*Le;Y.projectionMatrix.makePerspective(g,O,q,J,Le,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ve(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,de=Y.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(de=m.depthFar)),F.near=y.near=b.near=$,F.far=y.far=b.far=de,(z!==F.near||G!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,G=F.far),F.layers.mask=Y.layers.mask|6,b.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;let Ue=Y.parent,ye=F.cameras;ve(F,Ue);for(let Ve=0;Ve<ye.length;Ve++)ve(ye[Ve],Ue);ye.length===2?ne(F,b,y):F.projectionMatrix.copy(b.projectionMatrix),We(Y,F,Ue)};function We(Y,$,de){de===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Rr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return d[Y]};let Je=null;function et(Y,$){if(h=$.getViewerPose(c||a),x=$,h!==null){let de=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Ue=!1;de.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let Be=0;Be<de.length;Be++){let at=de[Be],R=null;if(p!==null)R=p.getViewport(at);else{let Ge=u.getViewSubImage(f,at);R=Ge.viewport,Be===0&&(e.setRenderTargetTextures(A,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(A))}let ke=L[Be];ke===void 0&&(ke=new mt,ke.layers.enable(Be),ke.viewport=new Ye,L[Be]=ke),ke.matrix.fromArray(at.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(at.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(R.x,R.y,R.width,R.height),Be===0&&(F.matrix.copy(ke.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(ke)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Be=u.getDepthInformation(de[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Be=0;Be<de.length;Be++){let at=de[Be].camera;if(at){let R=d[at];R||(R=new Es,d[at]=R);let ke=u.getCameraImage(at);R.sourceTexture=ke}}}}for(let de=0;de<C.length;de++){let Ue=S[de],ye=C[de];Ue!==null&&ye!==void 0&&ye.update(Ue,$,c||a)}Je&&Je(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),x=null}let tt=new Tl;tt.setAnimationLoop(et),this.setAnimationLoop=function(Y){Je=Y},this.dispose=function(){}}},ai=new $t,lf=new it;function hf(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,o1(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,M,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,A)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===St&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===St&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=e.get(d),M=E.envMap,A=E.envMapRotation;M&&(m.envMap.value=M,ai.copy(A),ai.x*=-1,ai.y*=-1,ai.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(lf.makeRotationFromEuler(ai)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===St&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uf(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let A=M.program;n.uniformBlockBinding(E,A)}function c(E,M){let A=s[E.id];A===void 0&&(x(E),A=h(E),s[E.id]=A,E.addEventListener("dispose",m));let C=M.program;n.updateUBOMapping(E,C);let S=e.render.frame;r[E.id]!==S&&(f(E),r[E.id]=S)}function h(E){let M=u();E.__bindingPointIndex=M;let A=i.createBuffer(),C=E.__size,S=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,C,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,A),A}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let M=s[E.id],A=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,w=A.length;S<w;S++){let N=Array.isArray(A[S])?A[S]:[A[S]];for(let b=0,y=N.length;b<y;b++){let L=N[b];if(p(L,S,b,C)===!0){let F=L.__offset,z=Array.isArray(L.value)?L.value:[L.value],G=0;for(let X=0;X<z.length;X++){let W=z[X],te=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,F+G,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,G),G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,A,C){let S=E.value,w=M+"_"+A;if(C[w]===void 0)return typeof S=="number"||typeof S=="boolean"?C[w]=S:C[w]=S.clone(),!0;{let N=C[w];if(typeof S=="number"||typeof S=="boolean"){if(N!==S)return C[w]=S,!0}else if(N.equals(S)===!1)return N.copy(S),!0}return!1}function x(E){let M=E.uniforms,A=0,C=16;for(let w=0,N=M.length;w<N;w++){let b=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,L=b.length;y<L;y++){let F=b[y],z=Array.isArray(F.value)?F.value:[F.value];for(let G=0,X=z.length;G<X;G++){let W=z[G],te=_(W),k=A%C,j=k%te.boundary,ne=k+j;A+=j,ne!==0&&C-ne<te.storage&&(A+=C-ne),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=A,A+=te.storage}}}let S=A%C;return S>0&&(A+=C-S),E.__size=A,E.__cache={},this}function _(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ce("WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){let M=E.target;M.removeEventListener("dispose",m);let A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var df=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),Tn=null;function ff(){return Tn===null&&(Tn=new Fr(df,32,32,ya,ii),Tn.minFilter=zt,Tn.magFilter=zt,Tn.wrapS=sn,Tn.wrapT=sn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}var qi=class{constructor(e={}){let{canvas:t=$c(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=new Set([Ma,ba,va]),_=new Set([Qt,zn,ki,Gi,ga,_a]),m=new Uint32Array(4),d=new Int32Array(4),E=null,M=null,A=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,w=!1;this._outputColorSpace=Bt;let N=0,b=0,y=null,L=-1,F=null,z=new Ye,G=new Ye,X=null,W=new De(0),te=0,k=t.width,j=t.height,ne=1,ve=null,We=null,Je=new Ye(0,0,k,j),et=new Ye(0,0,k,j),tt=!1,Y=new Ui,$=!1,de=!1,Ue=new it,ye=new I,Ve=new Ye,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function at(){return y===null?ne:1}let R=n;function ke(v,D){return t.getContext(v,D)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",fe,!1),R===null){let D="webgl2";if(R=ke(D,v),R===null)throw ke(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw v("WebGLRenderer: "+v.message),v}let Ge,nt,me,ot,Me,Le,T,g,O,q,J,H,_e,oe,Se,ge,K,ie,we,Ae,he,Ie,P,ce;function se(){Ge=new Cd(R),Ge.init(),Ie=new af(R,Ge),nt=new vd(R,Ge,e,Ie),me=new sf(R,Ge),nt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),ot=new Pd(R),Me=new W2,Le=new rf(R,Ge,me,Me,nt,Ie,ot),T=new bd(S),g=new wd(S),O=new N0(R),P=new gd(R,O),q=new Rd(R,O,ot,P),J=new Dd(R,q,O,ot),we=new Ld(R,nt,Le),ge=new yd(Me),H=new H2(S,T,g,Ge,nt,P,ge),_e=new hf(S,Me),oe=new q2,Se=new Q2(Ge),ie=new xd(S,T,g,me,J,p,l),K=new tf(S,J,nt),ce=new uf(R,ot,nt,me),Ae=new _d(R,Ge,ot),he=new Id(R,Ge,ot),ot.programs=H.programs,S.capabilities=nt,S.extensions=Ge,S.properties=Me,S.renderLists=oe,S.shadowMap=K,S.state=me,S.info=ot}se();let re=new T1(S,R);this.xr=re,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let v=Ge.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ge.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(v){v!==void 0&&(ne=v,this.setSize(k,j,!1))},this.getSize=function(v){return v.set(k,j)},this.setSize=function(v,D,B=!0){if(re.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}k=v,j=D,t.width=Math.floor(v*ne),t.height=Math.floor(D*ne),B===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(k*ne,j*ne).floor()},this.setDrawingBufferSize=function(v,D,B){k=v,j=D,ne=B,t.width=Math.floor(v*B),t.height=Math.floor(D*B),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(z)},this.getViewport=function(v){return v.copy(Je)},this.setViewport=function(v,D,B,V){v.isVector4?Je.set(v.x,v.y,v.z,v.w):Je.set(v,D,B,V),me.viewport(z.copy(Je).multiplyScalar(ne).round())},this.getScissor=function(v){return v.copy(et)},this.setScissor=function(v,D,B,V){v.isVector4?et.set(v.x,v.y,v.z,v.w):et.set(v,D,B,V),me.scissor(G.copy(et).multiplyScalar(ne).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(v){me.setScissorTest(tt=v)},this.setOpaqueSort=function(v){ve=v},this.setTransparentSort=function(v){We=v},this.getClearColor=function(v){return v.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,B=!0){let V=0;if(v){let U=!1;if(y!==null){let ee=y.texture.format;U=x.has(ee)}if(U){let ee=y.texture.type,le=_.has(ee),pe=ie.getClearColor(),ue=ie.getClearAlpha(),Ee=pe.r,Re=pe.g,be=pe.b;le?(m[0]=Ee,m[1]=Re,m[2]=be,m[3]=ue,R.clearBufferuiv(R.COLOR,0,m)):(d[0]=Ee,d[1]=Re,d[2]=be,d[3]=ue,R.clearBufferiv(R.COLOR,0,d))}else V|=R.COLOR_BUFFER_BIT}D&&(V|=R.DEPTH_BUFFER_BIT),B&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ie.dispose(),oe.dispose(),Se.dispose(),Me.dispose(),T.dispose(),g.dispose(),J.dispose(),P.dispose(),ce.dispose(),H.dispose(),re.dispose(),re.removeEventListener("sessionstart",A1),re.removeEventListener("sessionend",E1),kn.stop()};function Q(v){v.preventDefault(),ds("WebGLRenderer: Context Lost."),w=!0}function Z(){ds("WebGLRenderer: Context Restored."),w=!1;let v=ot.autoReset,D=K.enabled,B=K.autoUpdate,V=K.needsUpdate,U=K.type;se(),ot.autoReset=v,K.enabled=D,K.autoUpdate=B,K.needsUpdate=V,K.type=U}function fe(v){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Pe(v){let D=v.target;D.removeEventListener("dispose",Pe),st(D)}function st(v){$e(v),Me.remove(v)}function $e(v){let D=Me.get(v).programs;D!==void 0&&(D.forEach(function(B){H.releaseProgram(B)}),v.isShaderMaterial&&H.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,B,V,U,ee){D===null&&(D=vt);let le=U.isMesh&&U.matrixWorld.determinant()<0,pe=Fl(v,D,B,V,U);me.setMaterial(V,le);let ue=B.index,Ee=1;if(V.wireframe===!0){if(ue=q.getWireframeAttribute(B),ue===void 0)return;Ee=2}let Re=B.drawRange,be=B.attributes.position,He=Re.start*Ee,Ke=(Re.start+Re.count)*Ee;ee!==null&&(He=Math.max(He,ee.start*Ee),Ke=Math.min(Ke,(ee.start+ee.count)*Ee)),ue!==null?(He=Math.max(He,0),Ke=Math.min(Ke,ue.count)):be!=null&&(He=Math.max(He,0),Ke=Math.min(Ke,be.count));let ht=Ke-He;if(ht<0||ht===1/0)return;P.setup(U,V,pe,B,ue);let ut,je=Ae;if(ue!==null&&(ut=O.get(ue),je=he,je.setIndex(ut)),U.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*at()),je.setMode(R.LINES)):je.setMode(R.TRIANGLES);else if(U.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),me.setLineWidth(Te*at()),U.isLineSegments?je.setMode(R.LINES):U.isLineLoop?je.setMode(R.LINE_LOOP):je.setMode(R.LINE_STRIP)}else U.isPoints?je.setMode(R.POINTS):U.isSprite&&je.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ci("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Te=U._multiDrawStarts,ct=U._multiDrawCounts,qe=U._multiDrawCount,Ut=ue?O.get(ue).bytesPerElement:1,ci=Me.get(V).currentProgram.getUniforms();for(let Nt=0;Nt<qe;Nt++)ci.setValue(R,"_gl_DrawID",Nt),je.render(Te[Nt]/Ut,ct[Nt])}else if(U.isInstancedMesh)je.renderInstances(He,ht,U.count);else if(B.isInstancedBufferGeometry){let Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ct=Math.min(B.instanceCount,Te);je.renderInstances(He,ht,ct)}else je.render(He,ht)};function jt(v,D,B){v.transparent===!0&&v.side===on&&v.forceSinglePass===!1?(v.side=St,v.needsUpdate=!0,Xs(v,D,B),v.side=_n,v.needsUpdate=!0,Xs(v,D,B),v.side=on):Xs(v,D,B)}this.compile=function(v,D,B=null){B===null&&(B=v),M=Se.get(B),M.init(D),C.push(M),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(M.pushLight(U),U.castShadow&&M.pushShadow(U))}),v!==B&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(M.pushLight(U),U.castShadow&&M.pushShadow(U))}),M.setupLights();let V=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ee=U.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){let pe=ee[le];jt(pe,B,U),V.add(pe)}else jt(ee,B,U),V.add(ee)}),M=C.pop(),V},this.compileAsync=function(v,D,B=null){let V=this.compile(v,D,B);return new Promise(U=>{function ee(){if(V.forEach(function(le){Me.get(le).currentProgram.isReady()&&V.delete(le)}),V.size===0){U(v);return}setTimeout(ee,10)}Ge.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Xt=null;function Nl(v){Xt&&Xt(v)}function A1(){kn.stop()}function E1(){kn.start()}let kn=new Tl;kn.setAnimationLoop(Nl),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(v){Xt=v,re.setAnimationLoop(v),v===null?kn.stop():kn.start()},re.addEventListener("sessionstart",A1),re.addEventListener("sessionend",E1),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(D),D=re.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,y),M=Se.get(v,C.length),M.init(D),C.push(M),Ue.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Ue,Jt,D.reversedDepth),de=this.localClippingEnabled,$=ge.init(this.clippingPlanes,de),E=oe.get(v,A.length),E.init(),A.push(E),re.enabled===!0&&re.isPresenting===!0){let ee=S.xr.getDepthSensingMesh();ee!==null&&no(ee,D,-1/0,S.sortObjects)}no(v,D,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(ve,We),Be=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Be&&ie.addToRenderList(E,v),this.info.render.frame++,$===!0&&ge.beginShadows();let B=M.state.shadowsArray;K.render(B,v,D),$===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=E.opaque,U=E.transmissive;if(M.setupLights(),D.isArrayCamera){let ee=D.cameras;if(U.length>0)for(let le=0,pe=ee.length;le<pe;le++){let ue=ee[le];C1(V,U,v,ue)}Be&&ie.render(v);for(let le=0,pe=ee.length;le<pe;le++){let ue=ee[le];w1(E,v,ue,ue.viewport)}}else U.length>0&&C1(V,U,v,D),Be&&ie.render(v),w1(E,v,D);y!==null&&b===0&&(Le.updateMultisampleRenderTarget(y),Le.updateRenderTargetMipmap(y)),v.isScene===!0&&v.onAfterRender(S,v,D),P.resetDefaultState(),L=-1,F=null,C.pop(),C.length>0?(M=C[C.length-1],$===!0&&ge.setGlobalState(S.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function no(v,D,B,V){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)M.pushLight(v),v.castShadow&&M.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Y.intersectsSprite(v)){V&&Ve.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ue);let le=J.update(v),pe=v.material;pe.visible&&E.push(v,le,pe,B,Ve.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Y.intersectsObject(v))){let le=J.update(v),pe=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ve.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ve.copy(le.boundingSphere.center)),Ve.applyMatrix4(v.matrixWorld).applyMatrix4(Ue)),Array.isArray(pe)){let ue=le.groups;for(let Ee=0,Re=ue.length;Ee<Re;Ee++){let be=ue[Ee],He=pe[be.materialIndex];He&&He.visible&&E.push(v,le,He,B,Ve.z,be)}}else pe.visible&&E.push(v,le,pe,B,Ve.z,null)}}let ee=v.children;for(let le=0,pe=ee.length;le<pe;le++)no(ee[le],D,B,V)}function w1(v,D,B,V){let{opaque:U,transmissive:ee,transparent:le}=v;M.setupLightsView(B),$===!0&&ge.setGlobalState(S.clippingPlanes,B),V&&me.viewport(z.copy(V)),U.length>0&&Ws(U,D,B),ee.length>0&&Ws(ee,D,B),le.length>0&&Ws(le,D,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function C1(v,D,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[V.id]===void 0&&(M.state.transmissionRenderTarget[V.id]=new rn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?ii:Qt,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let ee=M.state.transmissionRenderTarget[V.id],le=V.viewport||z;ee.setSize(le.z*S.transmissionResolutionScale,le.w*S.transmissionResolutionScale);let pe=S.getRenderTarget(),ue=S.getActiveCubeFace(),Ee=S.getActiveMipmapLevel();S.setRenderTarget(ee),S.getClearColor(W),te=S.getClearAlpha(),te<1&&S.setClearColor(16777215,.5),S.clear(),Be&&ie.render(B);let Re=S.toneMapping;S.toneMapping=Mn;let be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),$===!0&&ge.setGlobalState(S.clippingPlanes,V),Ws(v,B,V),Le.updateMultisampleRenderTarget(ee),Le.updateRenderTargetMipmap(ee),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ke=0,ht=D.length;Ke<ht;Ke++){let ut=D[Ke],{object:je,geometry:Te,material:ct,group:qe}=ut;if(ct.side===on&&je.layers.test(V.layers)){let Ut=ct.side;ct.side=St,ct.needsUpdate=!0,R1(je,B,V,Te,ct,qe),ct.side=Ut,ct.needsUpdate=!0,He=!0}}He===!0&&(Le.updateMultisampleRenderTarget(ee),Le.updateRenderTargetMipmap(ee))}S.setRenderTarget(pe,ue,Ee),S.setClearColor(W,te),be!==void 0&&(V.viewport=be),S.toneMapping=Re}function Ws(v,D,B){let V=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ee=v.length;U<ee;U++){let le=v[U],{object:pe,geometry:ue,group:Ee}=le,Re=le.material;Re.allowOverride===!0&&V!==null&&(Re=V),pe.layers.test(B.layers)&&R1(pe,D,B,ue,Re,Ee)}}function R1(v,D,B,V,U,ee){v.onBeforeRender(S,D,B,V,U,ee),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(S,D,B,V,v,ee),U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=St,U.needsUpdate=!0,S.renderBufferDirect(B,D,V,U,v,ee),U.side=_n,U.needsUpdate=!0,S.renderBufferDirect(B,D,V,U,v,ee),U.side=on):S.renderBufferDirect(B,D,V,U,v,ee),v.onAfterRender(S,D,B,V,U,ee)}function Xs(v,D,B){D.isScene!==!0&&(D=vt);let V=Me.get(v),U=M.state.lights,ee=M.state.shadowsArray,le=U.state.version,pe=H.getParameters(v,U.state,ee,D,B),ue=H.getProgramCacheKey(pe),Ee=V.programs;V.environment=v.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(v.isMeshStandardMaterial?g:T).get(v.envMap||V.environment),V.envMapRotation=V.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",Pe),Ee=new Map,V.programs=Ee);let Re=Ee.get(ue);if(Re!==void 0){if(V.currentProgram===Re&&V.lightsStateVersion===le)return P1(v,pe),Re}else pe.uniforms=H.getUniforms(v),v.onBeforeCompile(pe,S),Re=H.acquireProgram(pe,ue),Ee.set(ue,Re),V.uniforms=pe.uniforms;let be=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(be.clippingPlanes=ge.uniform),P1(v,pe),V.needsLights=Bl(v),V.lightsStateVersion=le,V.needsLights&&(be.ambientLightColor.value=U.state.ambient,be.lightProbe.value=U.state.probe,be.directionalLights.value=U.state.directional,be.directionalLightShadows.value=U.state.directionalShadow,be.spotLights.value=U.state.spot,be.spotLightShadows.value=U.state.spotShadow,be.rectAreaLights.value=U.state.rectArea,be.ltc_1.value=U.state.rectAreaLTC1,be.ltc_2.value=U.state.rectAreaLTC2,be.pointLights.value=U.state.point,be.pointLightShadows.value=U.state.pointShadow,be.hemisphereLights.value=U.state.hemi,be.directionalShadowMap.value=U.state.directionalShadowMap,be.directionalShadowMatrix.value=U.state.directionalShadowMatrix,be.spotShadowMap.value=U.state.spotShadowMap,be.spotLightMatrix.value=U.state.spotLightMatrix,be.spotLightMap.value=U.state.spotLightMap,be.pointShadowMap.value=U.state.pointShadowMap,be.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Re,V.uniformsList=null,Re}function I1(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Xi.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function P1(v,D){let B=Me.get(v);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Fl(v,D,B,V,U){D.isScene!==!0&&(D=vt),Le.resetTextureUnits();let ee=D.fog,le=V.isMeshStandardMaterial?D.environment:null,pe=y===null?S.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:$n,ue=(V.isMeshStandardMaterial?g:T).get(V.envMap||le),Ee=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!B.morphAttributes.position,He=!!B.morphAttributes.normal,Ke=!!B.morphAttributes.color,ht=Mn;V.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ht=S.toneMapping);let ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=ut!==void 0?ut.length:0,Te=Me.get(V),ct=M.state.lights;if($===!0&&(de===!0||v!==F)){let Ct=v===F&&V.id===L;ge.setState(V,v,Ct)}let qe=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ct.state.version||Te.outputColorSpace!==pe||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==ue||V.fog===!0&&Te.fog!==ee||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ge.numPlanes||Te.numIntersection!==ge.numIntersection)||Te.vertexAlphas!==Ee||Te.vertexTangents!==Re||Te.morphTargets!==be||Te.morphNormals!==He||Te.morphColors!==Ke||Te.toneMapping!==ht||Te.morphTargetsCount!==je)&&(qe=!0):(qe=!0,Te.__version=V.version);let Ut=Te.currentProgram;qe===!0&&(Ut=Xs(V,D,U));let ci=!1,Nt=!1,Ji=!1,lt=Ut.getUniforms(),Pt=Te.uniforms;if(me.useProgram(Ut.program)&&(ci=!0,Nt=!0,Ji=!0),V.id!==L&&(L=V.id,Nt=!0),ci||F!==v){me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),lt.setValue(R,"projectionMatrix",v.projectionMatrix),lt.setValue(R,"viewMatrix",v.matrixWorldInverse);let Lt=lt.map.cameraPosition;Lt!==void 0&&Lt.setValue(R,ye.setFromMatrixPosition(v.matrixWorld)),nt.logarithmicDepthBuffer&&lt.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&lt.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),F!==v&&(F=v,Nt=!0,Ji=!0)}if(U.isSkinnedMesh){lt.setOptional(R,U,"bindMatrix"),lt.setOptional(R,U,"bindMatrixInverse");let Ct=U.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),lt.setValue(R,"boneTexture",Ct.boneTexture,Le))}U.isBatchedMesh&&(lt.setOptional(R,U,"batchingTexture"),lt.setValue(R,"batchingTexture",U._matricesTexture,Le),lt.setOptional(R,U,"batchingIdTexture"),lt.setValue(R,"batchingIdTexture",U._indirectTexture,Le),lt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(R,"batchingColorTexture",U._colorsTexture,Le));let kt=B.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&we.update(U,B,Ut),(Nt||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,lt.setValue(R,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Pt.envMap.value=ue,Pt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Pt.envMapIntensity.value=D.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=ff()),Nt&&(lt.setValue(R,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&Ol(Pt,Ji),ee&&V.fog===!0&&_e.refreshFogUniforms(Pt,ee),_e.refreshMaterialUniforms(Pt,V,ne,j,M.state.transmissionRenderTarget[v.id]),Xi.upload(R,I1(Te),Pt,Le)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xi.upload(R,I1(Te),Pt,Le),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&lt.setValue(R,"center",U.center),lt.setValue(R,"modelViewMatrix",U.modelViewMatrix),lt.setValue(R,"normalMatrix",U.normalMatrix),lt.setValue(R,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ct=V.uniformsGroups;for(let Lt=0,io=Ct.length;Lt<io;Lt++){let Gn=Ct[Lt];ce.update(Gn,Ut),ce.bind(Gn,Ut)}}return Ut}function Ol(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Bl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(v,D,B){let V=Me.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Me.get(v.texture).__webglTexture=D,Me.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let B=Me.get(v);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};let zl=R.createFramebuffer();this.setRenderTarget=function(v,D=0,B=0){y=v,N=D,b=B;let V=!0,U=null,ee=!1,le=!1;if(v){let ue=Me.get(v);if(ue.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(ue.__webglFramebuffer===void 0)Le.setupRenderTarget(v);else if(ue.__hasExternalTextures)Le.rebindTextures(v,Me.get(v.texture).__webglTexture,Me.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let be=v.depthTexture;if(ue.__boundDepthTexture!==be){if(be!==null&&Me.has(be)&&(v.width!==be.image.width||v.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(v)}}let Ee=v.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(le=!0);let Re=Me.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?U=Re[D][B]:U=Re[D],ee=!0):v.samples>0&&Le.useMultisampledRTT(v)===!1?U=Me.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[B]:U=Re,z.copy(v.viewport),G.copy(v.scissor),X=v.scissorTest}else z.copy(Je).multiplyScalar(ne).floor(),G.copy(et).multiplyScalar(ne).floor(),X=tt;if(B!==0&&(U=zl),me.bindFramebuffer(R.FRAMEBUFFER,U)&&V&&me.drawBuffers(v,U),me.viewport(z),me.scissor(G),me.setScissorTest(X),ee){let ue=Me.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue.__webglTexture,B)}else if(le){let ue=D;for(let Ee=0;Ee<v.textures.length;Ee++){let Re=Me.get(v.textures[Ee]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,B,ue)}}else if(v!==null&&B!==0){let ue=Me.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ue.__webglTexture,B)}L=-1},this.readRenderTargetPixels=function(v,D,B,V,U,ee,le,pe=0){if(!(v&&v.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue){me.bindFramebuffer(R.FRAMEBUFFER,ue);try{let Ee=v.textures[pe],Re=Ee.format,be=Ee.type;if(!nt.textureFormatReadable(Re)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(be)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-V&&B>=0&&B<=v.height-U&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(D,B,V,U,Ie.convert(Re),Ie.convert(be),ee))}finally{let Ee=y!==null?Me.get(y).__webglFramebuffer:null;me.bindFramebuffer(R.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,D,B,V,U,ee,le,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue)if(D>=0&&D<=v.width-V&&B>=0&&B<=v.height-U){me.bindFramebuffer(R.FRAMEBUFFER,ue);let Ee=v.textures[pe],Re=Ee.format,be=Ee.type;if(!nt.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(D,B,V,U,Ie.convert(Re),Ie.convert(be),0);let Ke=y!==null?Me.get(y).__webglFramebuffer:null;me.bindFramebuffer(R.FRAMEBUFFER,Ke);let ht=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Kc(R,ht,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(He),R.deleteSync(ht),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,B=0){let V=Math.pow(2,-B),U=Math.floor(v.image.width*V),ee=Math.floor(v.image.height*V),le=D!==null?D.x:0,pe=D!==null?D.y:0;Le.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,le,pe,U,ee),me.unbindTexture()};let Vl=R.createFramebuffer(),kl=R.createFramebuffer();this.copyTextureToTexture=function(v,D,B=null,V=null,U=0,ee=null){ee===null&&(U!==0?(Ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=U,U=0):ee=0);let le,pe,ue,Ee,Re,be,He,Ke,ht,ut=v.isCompressedTexture?v.mipmaps[ee]:v.image;if(B!==null)le=B.max.x-B.min.x,pe=B.max.y-B.min.y,ue=B.isBox3?B.max.z-B.min.z:1,Ee=B.min.x,Re=B.min.y,be=B.isBox3?B.min.z:0;else{let kt=Math.pow(2,-U);le=Math.floor(ut.width*kt),pe=Math.floor(ut.height*kt),v.isDataArrayTexture?ue=ut.depth:v.isData3DTexture?ue=Math.floor(ut.depth*kt):ue=1,Ee=0,Re=0,be=0}V!==null?(He=V.x,Ke=V.y,ht=V.z):(He=0,Ke=0,ht=0);let je=Ie.convert(D.format),Te=Ie.convert(D.type),ct;D.isData3DTexture?(Le.setTexture3D(D,0),ct=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Le.setTexture2DArray(D,0),ct=R.TEXTURE_2D_ARRAY):(Le.setTexture2D(D,0),ct=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);let qe=R.getParameter(R.UNPACK_ROW_LENGTH),Ut=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ci=R.getParameter(R.UNPACK_SKIP_PIXELS),Nt=R.getParameter(R.UNPACK_SKIP_ROWS),Ji=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ee),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,be);let lt=v.isDataArrayTexture||v.isData3DTexture,Pt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let kt=Me.get(v),Ct=Me.get(D),Lt=Me.get(kt.__renderTarget),io=Me.get(Ct.__renderTarget);me.bindFramebuffer(R.READ_FRAMEBUFFER,Lt.__webglFramebuffer),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,io.__webglFramebuffer);for(let Gn=0;Gn<ue;Gn++)lt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.get(v).__webglTexture,U,be+Gn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.get(D).__webglTexture,ee,ht+Gn)),R.blitFramebuffer(Ee,Re,le,pe,He,Ke,le,pe,R.DEPTH_BUFFER_BIT,R.NEAREST);me.bindFramebuffer(R.READ_FRAMEBUFFER,null),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||Me.has(v)){let kt=Me.get(v),Ct=Me.get(D);me.bindFramebuffer(R.READ_FRAMEBUFFER,Vl),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,kl);for(let Lt=0;Lt<ue;Lt++)lt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,kt.__webglTexture,U,be+Lt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,kt.__webglTexture,U),Pt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ct.__webglTexture,ee,ht+Lt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ct.__webglTexture,ee),U!==0?R.blitFramebuffer(Ee,Re,le,pe,He,Ke,le,pe,R.COLOR_BUFFER_BIT,R.NEAREST):Pt?R.copyTexSubImage3D(ct,ee,He,Ke,ht+Lt,Ee,Re,le,pe):R.copyTexSubImage2D(ct,ee,He,Ke,Ee,Re,le,pe);me.bindFramebuffer(R.READ_FRAMEBUFFER,null),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Pt?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(ct,ee,He,Ke,ht,le,pe,ue,je,Te,ut.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(ct,ee,He,Ke,ht,le,pe,ue,je,ut.data):R.texSubImage3D(ct,ee,He,Ke,ht,le,pe,ue,je,Te,ut):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ee,He,Ke,le,pe,je,Te,ut.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ee,He,Ke,ut.width,ut.height,je,ut.data):R.texSubImage2D(R.TEXTURE_2D,ee,He,Ke,le,pe,je,Te,ut);R.pixelStorei(R.UNPACK_ROW_LENGTH,qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ut),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ci),R.pixelStorei(R.UNPACK_SKIP_ROWS,Nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ji),ee===0&&D.generateMipmaps&&R.generateMipmap(ct),me.unbindTexture()},this.initRenderTarget=function(v){Me.get(v).__webglFramebuffer===void 0&&Le.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Le.setTextureCube(v,0):v.isData3DTexture?Le.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Le.setTexture2DArray(v,0):Le.setTexture2D(v,0),me.unbindTexture()},this.resetState=function(){N=0,b=0,y=null,me.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var pf=`
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vNormalV;
  void main() {
    vUv = uv;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vNormalV = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,mf=`
  uniform sampler2D day;
  uniform sampler2D night;
  uniform vec3 sun;
  uniform float exposure;
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vNormalV;
  void main() {
    float d = dot(normalize(vNormalW), sun);
    float lit = smoothstep(-0.10, 0.22, d);
    vec3 dayC = texture2D(day, vUv).rgb * (0.30 + 0.95 * clamp(d, 0.0, 1.0));
    vec3 nightC = texture2D(night, vUv).rgb;
    nightC = nightC * nightC * 1.5;
    vec3 c = mix(nightC, dayC, lit);
    // Dawn: a narrow warm band on the day side of the terminator.
    c += vec3(1.0, 0.55, 0.25) * exp(-(d * d) / 0.0035) * smoothstep(-0.05, 0.02, d) * 0.30;
    // Thin atmosphere on the lit limb.
    float rim = pow(1.0 - clamp(dot(normalize(vNormalV), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 2.4);
    c += vec3(0.35, 0.62, 1.0) * rim * (0.15 + 0.85 * lit) * 0.9;
    gl_FragColor = vec4(c * exposure, 1.0);
  }
`,xf=`
  varying vec3 vNormalW;
  varying vec3 vNormalV;
  void main() {
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vNormalV = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,gf=`
  uniform vec3 sun;
  uniform float exposure;
  varying vec3 vNormalW;
  varying vec3 vNormalV;
  void main() {
    float glow = pow(clamp(0.62 - dot(normalize(vNormalV), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 3.0);
    float side = smoothstep(-0.35, 0.65, dot(normalize(vNormalW), sun));
    vec3 c = mix(vec3(0.10, 0.25, 0.70), vec3(0.55, 0.78, 1.0), side) + vec3(1.0, 0.55, 0.25) * side * 0.25;
    gl_FragColor = vec4(c * glow * (0.25 + 1.35 * side) * exposure, 1.0);
  }
`,Il=i=>{let e=new yt(i);return e.anisotropy=8,e.needsUpdate=!0,e};function Pl({canvas:i,day:e,night:t}){let n=new qi({canvas:i,antialias:!0,preserveDrawingBuffer:!0});n.setPixelRatio(1),n.setSize(i.width,i.height,!1),n.setClearColor(0,1);let s=new Qn,r=new mt(30,i.width/i.height,.01,50),a={day:{value:Il(e)},night:{value:Il(t)},sun:{value:new I(1,0,0)},exposure:{value:1}},o=new Mt(new Vi(1,192,128),new It({uniforms:a,vertexShader:pf,fragmentShader:mf})),l=new Mt(new Vi(1.07,96,64),new It({uniforms:a,vertexShader:xf,fragmentShader:gf,side:St,blending:On,transparent:!0,depthWrite:!1}));s.add(l,o);let c=new I,h=new I,u=new I;return{render({rotY:f,sun:p,eye:x,target:_,exposure:m=1}){o.rotation.y=f,l.rotation.y=f,a.sun.value.set(...p).normalize(),a.exposure.value=m,r.position.set(...x),r.lookAt(..._),r.updateMatrixWorld(),o.updateMatrixWorld(),n.render(s,r)},project(f,p,x,_,m=1.002){return c.set(...$i(f,p,m)).applyMatrix4(o.matrixWorld),h.copy(c).normalize(),u.copy(r.position).sub(c),h.dot(u)<=0?null:(c.project(r),[(c.x+1)*.5*x,(1-c.y)*.5*_])}}}var Hs=new De("#1FAFA1"),_f=new De("#0A3366"),Zi=new De("#FFFFFF"),vf=i=>Array.from({length:6},(e,t)=>{let n=Math.PI/2+t*Math.PI/3;return new I(i*Math.cos(n),i*Math.sin(n),0)});function Ll(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(160,230,220,0.55)"),t.addColorStop(1,"rgba(31,175,161,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Ts(i)}function Dl({canvas:i,count:e=6,radius:t=1.3,seed:n=4}){let s=i.width,r=i.height,a=new qi({canvas:i,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});a.setPixelRatio(1),a.setSize(s,r,!1),a.setClearColor(0,0);let o=new Qn;o.fog=new vs(206672,6,22);let l=new mt(40,s/r,.05,60),c=new I(0,0,-6);o.add(new Ds(12577279,206672,1.1));let h=new Us(10483176,6,9,1.4);h.position.copy(c),o.add(h);let u=[];for(let w=0;w<18;w++){let N=new pt().setFromPoints(vf(3.4)),b=new bn({color:w%3===0?Hs:Zi,transparent:!0,opacity:.3}),y=new Fi(N,b);y.position.z=7-w*1.25,o.add(y),u.push(y)}let f=new xn;f.position.copy(c),o.add(f);let p=(w,N)=>new Fi(new pt().setFromPoints(Array.from({length:160},(b,y)=>new I(w*Math.cos(y/160*Math.PI*2),w*Math.sin(y/160*Math.PI*2),0))),new bn({color:Zi,transparent:!0,opacity:N}));f.add(p(t,.22),p(t*1.32,.08));let x=Array.from({length:e},(w,N)=>{let b=Math.PI/2-N*Math.PI*2/e,y=new I(t*Math.cos(b),t*Math.sin(b),0),L=new Mt(new Bi(.31,.31,.1,6),new Is({color:_f,emissive:Hs,emissiveIntensity:0,roughness:.45,metalness:.3}));L.rotation.x=Math.PI/2,L.position.copy(y).setZ(-.1);let F=new Ni(new zi(L.geometry),new bn({color:Zi,transparent:!0,opacity:.5}));F.rotation.copy(L.rotation),F.position.copy(L.position);let z=new jn(y.clone(),y.clone().multiplyScalar(.5).setZ(.45),new I(0,0,0)),G=new Mt(new Rs(z,48,.009,6),new Kn({color:Zi,transparent:!0,opacity:.25}));return f.add(L,F,G),{at:y,pedestal:L,edges:F,curve:z,cable:G}}),_=new Ni(new zi(new Bi(.5,.5,.7,6)),new bn({color:Hs,transparent:!0,opacity:.6}));_.position.copy(c);let m=new bs(new Di({map:Ll(),blending:On,transparent:!0,depthWrite:!1}));m.position.copy(c).setZ(c.z-.4),o.add(_,m);let d=n,E=()=>{d|=0,d=d+1831565813|0;let w=Math.imul(d^d>>>15,1|d);return w=w+Math.imul(w^w>>>7,61|w)^w,((w^w>>>14)>>>0)/4294967296},M=new Float32Array(900);for(let w=0;w<900;w+=3)M[w]=(E()-.5)*9,M[w+1]=(E()-.5)*6,M[w+2]=-1.5-E()*14;let A=new pt;A.setAttribute("position",new Et(M,3)),o.add(new Ss(A,new Oi({color:13627391,size:.03,map:Ll(),transparent:!0,opacity:.8,depthWrite:!1,blending:On})));let C=new I,S=w=>{C.copy(w).project(l);let N=l.position.distanceTo(w);return[(C.x+1)*.5*s,(1-C.y)*.5*r,N]};return{core:c,render(w){let{camZ:N,lookY:b=.25,tilt:y,spin:L,time:F=0,glow:z=[],cable:G=[],core:X=1,tunnel:W=1,orbitScale:te=1}=w;l.position.set(0,0,N),l.lookAt(0,b,c.z),l.updateMatrixWorld(),f.rotation.set(y,0,L),f.scale.setScalar(Math.max(.001,te)),f.updateMatrixWorld(!0),u.forEach(k=>{let j=Math.abs(N-k.position.z);k.material.opacity=W*(j<.6?j/.6:1)*Math.max(.06,.42-Math.max(0,k.position.z<c.z?(c.z-k.position.z)*.04:0)),k.rotation.z=F*.03*(k.position.z<c.z?-1:1)}),x.forEach((k,j)=>{let ne=z[j]??0,ve=G[j]??0;k.pedestal.material.emissiveIntensity=.12+.9*ne,k.edges.material.color.copy(Zi).lerp(Hs,ne),k.edges.material.opacity=.45+.5*ne,k.cable.material.color.copy(Zi).lerp(Hs,ve),k.cable.material.opacity=.22+.7*ve}),_.rotation.y=F*.35,_.material.opacity=.25+.5*X,m.scale.setScalar(1.8+1*X),m.material.opacity=.35+.65*X,h.intensity=3+7*X,a.render(o,l)},moduleScreen:w=>S(x[w].at.clone().applyMatrix4(f.matrixWorld)),coreScreen:()=>S(c),cableScreen:(w,N)=>S(x[w].curve.getPoint(N).applyMatrix4(f.matrixWorld))}}var Ul={coast:[[[104.06,10.39],[104.08,10.34],[104.08,10.22],[104.04,10.11],[104.05,10.06],[104.02,10.03],[103.95,10.24],[103.87,10.34],[103.85,10.37],[103.9,10.37],[103.99,10.43],[104.03,10.43],[104.06,10.39]],[[107.97,21.51],[107.93,21.5],[107.81,21.5],[107.71,21.41],[107.64,21.37],[107.53,21.34],[107.41,21.28],[107.38,21.19],[107.37,21.13],[107.35,21.06],[107.16,20.95],[107.11,20.96],[107.08,21],[107.02,20.99],[106.98,20.97],[106.94,20.97],[106.89,20.95],[106.82,20.96],[106.76,20.99],[106.73,21],[106.68,21],[106.68,20.96],[106.74,20.81],[106.75,20.74],[106.55,20.53],[106.57,20.39],[106.52,20.29],[106.4,20.21],[106.17,19.99],[106.06,19.99],[105.98,19.94],[105.81,19.59],[105.81,19.47],[105.79,19.38],[105.79,19.29],[105.72,19.13],[105.64,19.06],[105.62,18.97],[105.73,18.78],[105.74,18.75],[105.81,18.65],[105.84,18.57],[105.89,18.5],[106.07,18.32],[106.14,18.26],[106.24,18.22],[106.41,18.05],[106.5,17.95],[106.46,17.87],[106.48,17.72],[106.36,17.77],[106.37,17.75],[106.52,17.66],[106.74,17.37],[106.93,17.22],[107.12,17.06],[107.18,16.9],[107.36,16.79],[107.55,16.64],[107.54,16.61],[107.59,16.57],[107.72,16.49],[107.8,16.4],[107.83,16.32],[107.88,16.31],[107.94,16.33],[107.99,16.34],[108.03,16.33],[108.09,16.24],[108.17,16.16],[108.21,16.09],[108.24,16.1],[108.27,16.09],[108.27,16.03],[108.29,15.99],[108.4,15.87],[108.45,15.76],[108.58,15.58],[108.67,15.48],[108.74,15.43],[108.82,15.38],[108.9,15.18],[108.94,15],[109.02,14.8],[109.08,14.72],[109.09,14.55],[109.14,14.38],[109.19,14.27],[109.21,14.15],[109.22,14.1],[109.24,14.05],[109.3,13.86],[109.29,13.77],[109.25,13.85],[109.25,13.59],[109.29,13.45],[109.27,13.28],[109.31,13.22],[109.38,13.03],[109.42,12.96],[109.42,12.72],[109.44,12.6],[109.38,12.67],[109.34,12.75],[109.27,12.71],[109.22,12.65],[109.3,12.39],[109.21,12.42],[109.22,12.07],[109.26,11.99],[109.26,11.95],[109.25,11.91],[109.22,11.96],[109.21,12.01],[109.2,12],[109.2,11.97],[109.17,11.91],[109.16,11.84],[109.19,11.77],[109.2,11.72],[109.17,11.66],[109.13,11.6],[109.04,11.59],[109.02,11.47],[108.99,11.34],[108.82,11.32],[108.7,11.2],[108.55,11.16],[108.42,11.04],[108.27,10.93],[108.18,10.92],[108.09,10.9],[108,10.72],[107.85,10.7],[107.56,10.56],[107.47,10.49],[107.38,10.46],[107.26,10.4],[107.24,10.42],[107.19,10.47],[107.09,10.5],[107.04,10.56],[107.02,10.63],[107.01,10.66],[106.98,10.62],[106.97,10.44],[106.95,10.4],[106.9,10.38],[106.81,10.43],[106.73,10.54],[106.61,10.46],[106.64,10.46],[106.7,10.46],[106.74,10.44],[106.78,10.38],[106.78,10.34],[106.76,10.3],[106.64,10.29],[106.49,10.3],[106.46,10.3],[106.6,10.23],[106.73,10.19],[106.79,10.15],[106.79,10.12],[106.71,10.06],[106.66,9.99],[106.66,9.95],[106.66,9.9],[106.6,9.86],[106.56,9.87],[106.45,9.94],[106.14,10.22],[106.18,10.14],[106.51,9.82],[106.56,9.72],[106.57,9.64],[106.54,9.6],[106.48,9.56],[106.38,9.56],[106.2,9.68],[105.93,9.96],[105.83,10],[106.11,9.67],[106.16,9.59],[106.21,9.5],[106.19,9.45],[106.17,9.4],[105.5,9.09],[105.4,8.96],[105.32,8.8],[105.19,8.71],[105.11,8.63],[104.89,8.58],[104.77,8.6],[104.9,8.75],[104.82,8.8],[104.81,9.19],[104.85,9.61],[104.9,9.82],[104.99,9.87],[105.09,9.9],[105.09,9.95],[105.08,10],[105.03,10.07],[104.97,10.1],[104.87,10.11],[104.8,10.2],[104.75,10.2],[104.66,10.17],[104.61,10.21],[104.59,10.27],[104.52,10.34],[104.43,10.41],[104.47,10.42],[104.51,10.46],[104.56,10.52],[104.69,10.52],[104.82,10.52],[104.85,10.53],[104.9,10.59],[104.98,10.66],[105.05,10.7],[105.06,10.73],[105.04,10.81],[105.02,10.89],[105.05,10.91],[105.16,10.9],[105.28,10.86],[105.31,10.85],[105.39,10.94],[105.41,10.95],[105.45,10.95],[105.58,10.97],[105.7,10.99],[105.76,10.99],[105.81,10.93],[105.85,10.86],[105.88,10.86],[105.94,10.89],[105.99,10.85],[106.1,10.8],[106.16,10.79],[106.13,10.92],[106.17,11.01],[106.16,11.04],[106.1,11.08],[105.89,11.24],[105.86,11.29],[105.86,11.37],[105.85,11.49],[105.84,11.56],[105.84,11.6],[105.85,11.64],[105.89,11.65],[105.93,11.65],[105.96,11.68],[106.01,11.76],[106.1,11.75],[106.24,11.71],[106.34,11.68],[106.4,11.69],[106.41,11.7],[106.41,11.74],[106.42,11.91],[106.41,11.95],[106.5,11.97],[106.63,11.97],[106.7,11.98],[106.76,12.05],[106.93,12.08],[107.05,12.18],[107.16,12.28],[107.21,12.3],[107.28,12.32],[107.33,12.32],[107.39,12.26],[107.45,12.3],[107.51,12.36],[107.54,12.43],[107.56,12.54],[107.54,12.71],[107.51,12.84],[107.48,12.93],[107.48,13.03],[107.55,13.23],[107.61,13.44],[107.59,13.52],[107.53,13.65],[107.46,13.82],[107.39,13.99],[107.36,14.02],[107.34,14.07],[107.33,14.13],[107.36,14.31],[107.36,14.37],[107.45,14.45],[107.49,14.55],[107.54,14.65],[107.52,14.71],[107.51,14.82],[107.52,14.87],[107.5,14.92],[107.48,14.98],[107.5,15.02],[107.56,15.06],[107.59,15.12],[107.63,15.19],[107.65,15.26],[107.62,15.31],[107.56,15.39],[107.46,15.47],[107.34,15.56],[107.28,15.62],[107.23,15.68],[107.19,15.75],[107.17,15.8],[107.19,15.84],[107.36,15.92],[107.39,15.95],[107.41,16],[107.4,16.04],[107.35,16.07],[107.3,16.08],[107.22,16.14],[107.07,16.28],[107,16.31],[106.93,16.35],[106.89,16.4],[106.85,16.52],[106.83,16.53],[106.79,16.49],[106.74,16.45],[106.7,16.46],[106.66,16.49],[106.64,16.54],[106.59,16.6],[106.55,16.65],[106.53,16.82],[106.53,16.88],[106.5,16.95],[106.47,16.98],[106.43,17],[106.33,17.14],[106.27,17.22],[106.01,17.42],[105.97,17.45],[105.9,17.53],[105.78,17.64],[105.69,17.74],[105.63,17.83],[105.6,17.92],[105.59,17.98],[105.52,18.08],[105.46,18.15],[105.4,18.18],[105.33,18.19],[105.27,18.24],[105.16,18.34],[105.11,18.41],[105.09,18.45],[105.09,18.5],[105.11,18.57],[105.15,18.62],[105.15,18.65],[105.12,18.68],[104.99,18.73],[104.72,18.8],[104.61,18.86],[104.52,18.93],[104.45,18.98],[104.11,19.2],[104.01,19.23],[103.92,19.27],[103.89,19.3],[103.9,19.34],[103.93,19.37],[104.03,19.42],[104.06,19.48],[104.05,19.56],[104.01,19.65],[104.03,19.68],[104.06,19.68],[104.13,19.68],[104.26,19.69],[104.55,19.61],[104.59,19.62],[104.74,19.75],[104.8,19.84],[104.82,19.9],[104.85,19.95],[104.93,20.02],[104.93,20.08],[104.89,20.17],[104.85,20.2],[104.81,20.22],[104.7,20.21],[104.68,20.22],[104.66,20.29],[104.66,20.33],[104.62,20.37],[104.5,20.41],[104.39,20.42],[104.37,20.44],[104.41,20.49],[104.48,20.53],[104.53,20.55],[104.58,20.6],[104.58,20.65],[104.53,20.69],[104.46,20.73],[104.35,20.82],[104.2,20.91],[104.1,20.95],[104.05,20.94],[103.88,20.86],[103.79,20.81],[103.71,20.72],[103.64,20.7],[103.55,20.74],[103.46,20.78],[103.21,20.84],[103.1,20.89],[102.88,21.2],[102.85,21.27],[102.87,21.34],[102.89,21.44],[102.91,21.51],[102.95,21.57],[102.96,21.63],[102.95,21.68],[102.92,21.71],[102.88,21.72],[102.85,21.73],[102.82,21.81],[102.8,21.8],[102.77,21.71],[102.74,21.68],[102.7,21.66],[102.66,21.68],[102.64,21.71],[102.63,21.77],[102.61,21.85],[102.58,21.9],[102.49,21.96],[102.44,22.03],[102.3,22.18],[102.18,22.28],[102.13,22.38],[102.18,22.41],[102.24,22.47],[102.3,22.55],[102.38,22.65],[102.41,22.71],[102.43,22.73],[102.47,22.75],[102.52,22.74],[102.6,22.7],[102.72,22.65],[102.83,22.59],[102.87,22.53],[102.94,22.47],[102.98,22.45],[103.01,22.45],[103.08,22.5],[103.14,22.54],[103.14,22.59],[103.19,22.64],[103.27,22.71],[103.3,22.76],[103.33,22.77],[103.36,22.75],[103.47,22.6],[103.49,22.59],[103.53,22.61],[103.57,22.73],[103.62,22.78],[103.64,22.77],[103.92,22.54],[103.94,22.54],[103.97,22.55],[103.99,22.59],[104.01,22.67],[104.05,22.75],[104.14,22.8],[104.21,22.81],[104.24,22.77],[104.3,22.71],[104.37,22.7],[104.53,22.8],[104.58,22.82],[104.63,22.82],[104.69,22.82],[104.74,22.86],[104.8,22.91],[104.81,23.01],[104.83,23.1],[104.86,23.14],[104.91,23.16],[105,23.19],[105.19,23.28],[105.24,23.32],[105.28,23.35],[105.35,23.31],[105.44,23.24],[105.49,23.18],[105.53,23.12],[105.55,23.07],[105.69,23.03],[105.78,22.97],[105.84,22.92],[105.9,22.92],[105.96,22.94],[106,22.97],[106.07,22.98],[106.15,22.97],[106.18,22.96],[106.25,22.87],[106.28,22.86],[106.34,22.86],[106.45,22.89],[106.54,22.91],[106.62,22.87],[106.78,22.78],[106.74,22.71],[106.7,22.64],[106.63,22.59],[106.58,22.57],[106.55,22.5],[106.54,22.4],[106.55,22.34],[106.59,22.32],[106.64,22.29],[106.65,22.24],[106.66,22.14],[106.66,22.02],[106.66,21.98],[106.7,21.99],[106.73,22],[106.79,21.98],[106.87,21.95],[106.93,21.92],[106.97,21.92],[107.01,21.89],[107.02,21.83],[107.06,21.79],[107.18,21.72],[107.27,21.71],[107.35,21.61],[107.43,21.64],[107.47,21.6],[107.64,21.61],[107.76,21.66],[107.8,21.65],[107.91,21.56],[107.97,21.51]],[[106.62,8.68],[106.59,8.68],[106.57,8.7],[106.66,8.77],[106.65,8.72],[106.65,8.7],[106.62,8.68]],[[107.17,10.4],[107.08,10.34],[107.08,10.39],[107.15,10.42],[107.18,10.45],[107.19,10.45],[107.17,10.4]],[[106.87,20.82],[106.85,20.8],[106.8,20.84],[106.77,20.86],[106.8,20.93],[106.86,20.86],[106.87,20.82]],[[107.6,21.22],[107.46,21.09],[107.4,21.09],[107.45,21.24],[107.48,21.27],[107.56,21.22],[107.6,21.22]],[[107.52,20.93],[107.47,20.9],[107.4,20.9],[107.48,20.95],[107.52,21.01],[107.55,21.03],[107.55,20.98],[107.52,20.93]],[[107.03,20.75],[106.99,20.74],[106.91,20.82],[106.95,20.87],[107.04,20.84],[107.06,20.82],[107.06,20.8],[107.04,20.76],[107.03,20.75]],[[125.65,-8.14],[125.58,-8.31],[125.51,-8.28],[125.58,-8.18],[125.62,-8.15],[125.65,-8.14]],[[125.07,-9.51],[125.03,-9.38],[125,-9.33],[124.97,-9.29],[124.96,-9.25],[124.96,-9.21],[124.98,-9.19],[125.1,-9.19],[125.15,-9.12],[125.15,-9.04],[125.12,-9.02],[125.1,-9],[124.97,-9.06],[124.94,-9.05],[124.92,-9.03],[124.92,-8.94],[125.03,-8.86],[125.12,-8.71],[125.18,-8.65],[125.32,-8.59],[125.38,-8.58],[125.8,-8.49],[125.91,-8.49],[126.17,-8.49],[126.53,-8.47],[126.62,-8.46],[126.73,-8.42],[126.85,-8.38],[126.9,-8.34],[126.97,-8.32],[127.06,-8.35],[127.21,-8.37],[127.26,-8.39],[127.3,-8.42],[127.11,-8.58],[126.92,-8.72],[126.79,-8.76],[126.67,-8.78],[126.57,-8.83],[126.49,-8.91],[126.38,-8.96],[126.26,-8.97],[126.16,-9],[126.07,-9.04],[125.95,-9.12],[125.89,-9.13],[125.84,-9.13],[125.74,-9.16],[125.41,-9.28],[125.21,-9.4],[125.07,-9.51]],[[124.04,-9.34],[124.2,-9.26],[124.44,-9.19],[124.44,-9.24],[124.41,-9.31],[124.38,-9.35],[124.32,-9.41],[124.28,-9.43],[124.13,-9.41],[124.12,-9.42],[124.09,-9.42],[124.05,-9.38],[124.04,-9.34]],[[102.61,11.68],[102.59,11.57],[102.53,11.61],[102.55,11.67],[102.57,11.69],[102.61,11.68]],[[102.43,11.99],[102.43,11.96],[102.38,11.98],[102.36,11.97],[102.3,11.98],[102.27,12.12],[102.28,12.15],[102.32,12.14],[102.38,12.07],[102.41,12.03],[102.43,11.99]],[[98.41,7.9],[98.4,7.83],[98.36,7.83],[98.32,7.78],[98.3,7.78],[98.26,7.93],[98.3,8.14],[98.32,8.17],[98.35,8.11],[98.43,8.09],[98.4,7.96],[98.41,7.9]],[[100.12,20.32],[100.11,20.26],[100.14,20.25],[100.17,20.27],[100.22,20.34],[100.27,20.38],[100.32,20.39],[100.37,20.34],[100.43,20.24],[100.49,20.18],[100.52,20.18],[100.54,20.13],[100.54,20.09],[100.51,20],[100.47,19.89],[100.4,19.76],[100.42,19.64],[100.51,19.55],[100.63,19.5],[100.74,19.51],[100.81,19.54],[100.86,19.59],[100.91,19.61],[100.97,19.61],[101.15,19.58],[101.21,19.55],[101.22,19.49],[101.2,19.33],[101.23,19.21],[101.28,19.09],[101.29,18.98],[101.22,18.79],[101.17,18.62],[101.11,18.53],[101.06,18.48],[101.05,18.44],[101.05,18.41],[101.09,18.35],[101.14,18.29],[101.15,18.22],[101.14,18.14],[101.11,18.03],[101,17.8],[100.91,17.58],[100.96,17.54],[101.05,17.51],[101.11,17.48],[101.17,17.5],[101.3,17.63],[101.41,17.72],[101.56,17.81],[101.56,17.82],[101.69,17.89],[101.74,17.95],[101.77,18.03],[101.82,18.06],[101.88,18.05],[101.95,18.08],[102.03,18.17],[102.1,18.21],[102.15,18.2],[102.23,18.15],[102.35,18.05],[102.46,17.98],[102.55,17.97],[102.6,17.93],[102.6,17.87],[102.62,17.83],[102.66,17.82],[102.68,17.82],[102.68,17.85],[102.72,17.89],[102.81,17.95],[102.9,17.98],[102.99,17.99],[103.05,18.03],[103.09,18.14],[103.15,18.22],[103.2,18.26],[103.26,18.28],[103.28,18.3],[103.25,18.34],[103.25,18.37],[103.29,18.41],[103.37,18.42],[103.49,18.42],[103.63,18.38],[103.79,18.32],[103.9,18.3],[103.95,18.32],[104.05,18.22],[104.2,17.99],[104.32,17.82],[104.43,17.7],[104.54,17.61],[104.66,17.55],[104.74,17.46],[104.82,17.3],[104.76,17.08],[104.74,16.88],[104.75,16.65],[104.82,16.47],[104.95,16.34],[105.03,16.24],[105.05,16.16],[105.15,16.09],[105.33,16.04],[105.41,15.99],[105.38,15.94],[105.37,15.89],[105.4,15.83],[105.46,15.78],[105.56,15.74],[105.62,15.7],[105.64,15.66],[105.64,15.59],[105.62,15.49],[105.57,15.41],[105.51,15.36],[105.51,15.32],[105.49,15.26],[105.49,15.13],[105.53,15.04],[105.55,14.93],[105.52,14.84],[105.5,14.66],[105.5,14.59],[105.48,14.53],[105.42,14.47],[105.34,14.42],[105.24,14.37],[105.18,14.35],[105.17,14.34],[105.13,14.28],[105.07,14.23],[105.03,14.23],[105,14.25],[104.98,14.29],[104.97,14.37],[104.88,14.4],[104.78,14.43],[104.58,14.39],[104.41,14.37],[104.23,14.4],[104.05,14.36],[103.98,14.36],[103.9,14.36],[103.82,14.36],[103.74,14.37],[103.6,14.42],[103.55,14.42],[103.43,14.38],[103.31,14.35],[103.2,14.33],[103.03,14.25],[102.91,14.14],[102.87,14.05],[102.81,13.97],[102.73,13.84],[102.62,13.72],[102.54,13.66],[102.57,13.63],[102.55,13.59],[102.43,13.57],[102.34,13.56],[102.32,13.54],[102.33,13.29],[102.36,13.19],[102.42,13.08],[102.46,13.02],[102.49,12.83],[102.5,12.67],[102.63,12.57],[102.7,12.49],[102.76,12.43],[102.74,12.38],[102.71,12.26],[102.74,12.09],[102.92,11.73],[102.93,11.71],[102.91,11.7],[102.88,11.77],[102.79,11.89],[102.76,12.01],[102.65,12.15],[102.59,12.2],[102.57,12.16],[102.54,12.11],[102.43,12.18],[102.34,12.25],[102.26,12.39],[102.25,12.36],[102.23,12.33],[102.13,12.44],[102.03,12.53],[101.94,12.56],[101.89,12.59],[101.84,12.64],[101.72,12.69],[101.44,12.62],[101.09,12.67],[100.95,12.62],[100.9,12.65],[100.86,12.71],[100.9,12.82],[100.9,13.03],[100.95,13.19],[100.93,13.3],[100.95,13.36],[100.96,13.43],[100.91,13.46],[100.66,13.52],[100.6,13.57],[100.54,13.51],[100.24,13.48],[100.12,13.44],[100.02,13.35],[99.99,13.24],[100.05,13.17],[100.09,13.05],[99.98,12.77],[99.96,12.69],[100.01,12.35],[99.99,12.17],[99.93,12.05],[99.84,11.94],[99.8,11.75],[99.73,11.66],[99.63,11.46],[99.56,11.22],[99.51,11.1],[99.49,10.89],[99.28,10.57],[99.24,10.39],[99.17,10.32],[99.19,10.27],[99.19,10.18],[99.17,9.93],[99.16,9.73],[99.19,9.63],[99.29,9.41],[99.27,9.35],[99.25,9.27],[99.34,9.23],[99.39,9.21],[99.72,9.31],[99.84,9.29],[99.88,9.19],[99.9,9.11],[99.96,8.67],[99.99,8.59],[100.06,8.51],[100.13,8.43],[100.15,8.44],[100.16,8.47],[100.16,8.51],[100.23,8.42],[100.28,8.27],[100.45,7.44],[100.5,7.34],[100.55,7.23],[100.44,7.28],[100.41,7.46],[100.38,7.54],[100.34,7.55],[100.28,7.55],[100.28,7.58],[100.32,7.64],[100.32,7.72],[100.26,7.77],[100.16,7.73],[100.16,7.6],[100.2,7.5],[100.37,7.28],[100.42,7.19],[100.49,7.16],[100.59,7.18],[100.7,7.08],[100.79,6.99],[101.02,6.86],[101.15,6.88],[101.3,6.91],[101.4,6.9],[101.5,6.87],[101.61,6.75],[101.8,6.47],[102.1,6.24],[102.07,6.18],[102.06,6.1],[101.94,5.98],[101.92,5.91],[101.87,5.83],[101.79,5.78],[101.72,5.77],[101.68,5.78],[101.65,5.8],[101.6,5.88],[101.58,5.9],[101.56,5.91],[101.4,5.85],[101.26,5.79],[101.23,5.73],[101.19,5.67],[101.15,5.64],[101.11,5.64],[101.08,5.67],[101.03,5.72],[100.98,5.77],[100.99,5.85],[101.08,5.96],[101.09,6.03],[101.08,6.17],[101.05,6.24],[101.03,6.25],[100.99,6.26],[100.87,6.25],[100.82,6.33],[100.79,6.43],[100.75,6.46],[100.72,6.48],[100.63,6.45],[100.56,6.47],[100.35,6.55],[100.26,6.68],[100.22,6.69],[100.18,6.67],[100.16,6.64],[100.14,6.49],[100.12,6.44],[99.87,6.75],[99.7,6.88],[99.72,7.11],[99.67,7.15],[99.6,7.16],[99.55,7.22],[99.6,7.36],[99.53,7.33],[99.44,7.33],[99.36,7.37],[99.3,7.56],[99.26,7.62],[99.18,7.72],[99.08,7.72],[99.04,7.77],[99.05,7.89],[98.97,7.96],[98.87,8.02],[98.79,8.06],[98.7,8.26],[98.64,8.31],[98.58,8.34],[98.5,8.32],[98.47,8.25],[98.42,8.18],[98.36,8.19],[98.31,8.23],[98.24,8.42],[98.23,8.54],[98.24,8.77],[98.33,8.97],[98.37,9.29],[98.44,9.49],[98.49,9.56],[98.56,9.84],[98.7,10.19],[98.72,10.27],[98.75,10.35],[98.77,10.43],[98.78,10.56],[98.76,10.62],[98.76,10.66],[98.79,10.71],[98.89,10.79],[99.03,10.92],[99.19,11.11],[99.36,11.39],[99.44,11.55],[99.48,11.61],[99.52,11.63],[99.57,11.69],[99.61,11.75],[99.61,11.78],[99.52,12.09],[99.46,12.19],[99.43,12.31],[99.42,12.39],[99.39,12.47],[99.41,12.55],[99.37,12.59],[99.3,12.65],[99.22,12.74],[99.17,12.88],[99.17,12.96],[99.12,13.03],[99.11,13.1],[99.14,13.17],[99.18,13.23],[99.17,13.5],[99.16,13.58],[99.14,13.72],[99.09,13.82],[99.01,13.95],[98.93,14.05],[98.72,14.24],[98.57,14.36],[98.5,14.47],[98.4,14.6],[98.33,14.7],[98.25,14.81],[98.2,14.98],[98.18,15.15],[98.19,15.2],[98.23,15.24],[98.29,15.27],[98.33,15.28],[98.45,15.36],[98.54,15.35],[98.56,15.37],[98.57,15.4],[98.55,15.56],[98.56,15.77],[98.57,15.94],[98.59,16.05],[98.82,16.18],[98.87,16.24],[98.89,16.3],[98.89,16.35],[98.87,16.39],[98.84,16.42],[98.69,16.31],[98.66,16.33],[98.59,16.51],[98.56,16.57],[98.52,16.64],[98.48,16.73],[98.47,16.9],[98.44,16.98],[98.26,17.15],[98.17,17.24],[98.06,17.37],[97.93,17.53],[97.79,17.68],[97.73,17.78],[97.71,17.8],[97.7,17.83],[97.74,17.94],[97.72,18.04],[97.65,18.17],[97.62,18.26],[97.63,18.29],[97.6,18.3],[97.52,18.3],[97.45,18.36],[97.38,18.49],[97.37,18.52],[97.4,18.52],[97.48,18.49],[97.52,18.5],[97.58,18.53],[97.67,18.56],[97.73,18.57],[97.75,18.59],[97.75,18.62],[97.71,18.93],[97.71,19],[97.8,19.13],[97.79,19.27],[97.82,19.46],[97.92,19.59],[97.99,19.65],[98.02,19.75],[98.05,19.77],[98.11,19.76],[98.24,19.69],[98.29,19.69],[98.37,19.69],[98.45,19.69],[98.49,19.7],[98.76,19.77],[98.82,19.78],[98.88,19.77],[98.92,19.77],[98.96,19.8],[98.99,19.86],[99.02,20.04],[99.04,20.07],[99.07,20.1],[99.13,20.12],[99.2,20.12],[99.28,20.08],[99.34,20.08],[99.4,20.09],[99.45,20.12],[99.49,20.15],[99.5,20.19],[99.49,20.26],[99.45,20.35],[99.46,20.36],[99.53,20.34],[99.64,20.32],[99.72,20.33],[99.77,20.34],[99.83,20.38],[99.89,20.42],[99.95,20.42],[100,20.38],[100.12,20.32]],[[100.07,9.7],[100.06,9.68],[100.03,9.71],[100,9.75],[99.98,9.79],[100.04,9.79],[100.07,9.75],[100.07,9.7]],[[100.07,9.59],[100.08,9.53],[100.05,9.46],[99.96,9.42],[99.93,9.48],[99.94,9.56],[99.95,9.58],[100.04,9.58],[100.07,9.59]],[[99.66,6.52],[99.64,6.52],[99.61,6.6],[99.65,6.71],[99.7,6.57],[99.66,6.52]],[[98.59,7.93],[98.58,7.92],[98.53,8.11],[98.6,8.06],[98.59,7.93]],[[98.31,9.05],[98.25,9.04],[98.26,9.1],[98.27,9.13],[98.3,9.14],[98.31,9.08],[98.31,9.05]],[[99.08,7.59],[99.1,7.47],[99.07,7.5],[99.04,7.55],[99.04,7.63],[99.05,7.64],[99.08,7.59]],[[103.97,1.33],[103.82,1.27],[103.65,1.33],[103.71,1.42],[103.82,1.45],[103.91,1.42],[103.96,1.39],[104,1.37],[103.97,1.33]],[[121.1,18.62],[121.25,18.56],[121.59,18.38],[121.72,18.33],[121.85,18.3],[121.95,18.29],[122.04,18.33],[122.08,18.37],[122.15,18.49],[122.22,18.5],[122.27,18.46],[122.3,18.4],[122.32,18.32],[122.29,18.23],[122.22,18.16],[122.18,18.06],[122.15,17.76],[122.15,17.66],[122.18,17.58],[122.24,17.43],[122.27,17.4],[122.36,17.34],[122.39,17.31],[122.39,17.24],[122.41,17.18],[122.47,17.16],[122.52,17.12],[122.5,17.06],[122.47,16.99],[122.43,16.82],[122.23,16.44],[122.21,16.35],[122.14,16.18],[121.97,16.16],[121.79,16.08],[121.69,16.01],[121.6,15.93],[121.56,15.83],[121.59,15.78],[121.61,15.73],[121.61,15.67],[121.58,15.62],[121.49,15.51],[121.45,15.42],[121.41,15.38],[121.39,15.32],[121.4,15.27],[121.43,15.22],[121.54,15],[121.66,14.79],[121.69,14.77],[121.7,14.74],[121.63,14.68],[121.63,14.58],[121.65,14.48],[121.75,14.23],[121.77,14.17],[121.8,14.11],[121.85,14.06],[121.91,14.02],[122.08,13.95],[122.14,13.93],[122.21,13.93],[122.23,13.98],[122.29,14],[122.27,14.04],[122.2,14.11],[122.2,14.15],[122.24,14.18],[122.28,14.19],[122.38,14.26],[122.49,14.32],[122.63,14.32],[122.76,14.28],[122.86,14.25],[122.93,14.19],[123.01,14.08],[123.07,13.96],[123.07,13.9],[123.06,13.85],[123.06,13.79],[123.1,13.75],[123.23,13.75],[123.3,13.84],[123.31,13.94],[123.26,13.98],[123.28,14.02],[123.32,14.06],[123.38,14.03],[123.43,13.97],[123.63,13.9],[123.68,13.9],[123.73,13.88],[123.82,13.84],[123.86,13.8],[123.81,13.72],[123.61,13.7],[123.55,13.65],[123.61,13.53],[123.7,13.43],[123.76,13.35],[123.82,13.27],[123.82,13.19],[123.79,13.11],[123.87,13.12],[123.96,13.1],[124.07,13.03],[124.1,13.02],[124.14,13.04],[124.14,12.79],[124.06,12.57],[123.96,12.59],[123.88,12.69],[123.89,12.8],[123.95,12.92],[123.92,12.94],[123.86,12.93],[123.8,12.91],[123.74,12.9],[123.63,12.91],[123.4,13.03],[123.31,13.04],[123.29,13.1],[123.3,13.22],[123.21,13.35],[123.19,13.4],[123.16,13.44],[122.9,13.59],[122.86,13.62],[122.78,13.74],[122.6,13.91],[122.54,13.93],[122.49,13.93],[122.47,13.89],[122.49,13.82],[122.5,13.76],[122.5,13.7],[122.51,13.66],[122.6,13.56],[122.61,13.52],[122.67,13.4],[122.68,13.25],[122.6,13.19],[122.52,13.26],[122.51,13.31],[122.5,13.36],[122.41,13.49],[122.38,13.52],[122.21,13.65],[122.07,13.79],[121.78,13.94],[121.74,13.95],[121.69,13.93],[121.64,13.92],[121.5,13.84],[121.45,13.79],[121.45,13.71],[121.34,13.65],[121.2,13.64],[121.1,13.68],[121.01,13.76],[120.93,13.76],[120.84,13.88],[120.73,13.9],[120.64,13.8],[120.62,14],[120.62,14.19],[120.64,14.24],[120.69,14.29],[120.92,14.49],[120.95,14.56],[120.94,14.65],[120.89,14.72],[120.8,14.76],[120.71,14.78],[120.64,14.82],[120.58,14.88],[120.55,14.77],[120.58,14.59],[120.59,14.48],[120.56,14.44],[120.5,14.44],[120.44,14.45],[120.4,14.49],[120.37,14.61],[120.28,14.68],[120.25,14.79],[120.21,14.81],[120.14,14.8],[120.08,14.85],[120.04,14.98],[120.04,15.11],[120,15.23],[119.96,15.34],[119.93,15.43],[119.89,15.84],[119.88,15.88],[119.86,15.91],[119.81,15.95],[119.77,16.01],[119.76,16.05],[119.77,16.26],[119.79,16.3],[119.83,16.33],[119.89,16.29],[119.93,16.24],[119.99,16.22],[120.03,16.18],[120.12,16.07],[120.16,16.05],[120.27,16.05],[120.34,16.07],[120.37,16.11],[120.39,16.16],[120.39,16.22],[120.32,16.4],[120.31,16.53],[120.3,16.65],[120.32,16.76],[120.41,16.96],[120.42,17.09],[120.41,17.27],[120.43,17.38],[120.42,17.44],[120.37,17.54],[120.36,17.64],[120.51,18.16],[120.55,18.26],[120.58,18.37],[120.6,18.51],[120.71,18.55],[120.81,18.6],[120.87,18.6],[120.93,18.59],[121.05,18.61],[121.1,18.62]],[[117.31,8.44],[117.22,8.37],[117.23,8.46],[117.26,8.54],[117.35,8.71],[117.42,8.77],[117.53,8.9],[117.59,8.97],[117.74,9.1],[117.88,9.24],[117.93,9.25],[117.98,9.25],[118.02,9.27],[118.11,9.35],[118.34,9.6],[118.53,9.79],[118.73,10.04],[118.82,10.11],[118.85,10.13],[119.02,10.35],[119.08,10.39],[119.14,10.41],[119.19,10.44],[119.22,10.48],[119.29,10.57],[119.31,10.69],[119.3,10.75],[119.26,10.85],[119.31,10.97],[119.34,11.03],[119.47,11.29],[119.5,11.35],[119.55,11.31],[119.56,11.27],[119.53,11.16],[119.53,11.1],[119.56,11.05],[119.53,10.95],[119.62,10.71],[119.68,10.55],[119.69,10.5],[119.6,10.41],[119.54,10.38],[119.42,10.35],[119.37,10.33],[119.28,10.25],[119.23,10.15],[119.22,10.1],[119.19,10.06],[118.95,9.99],[118.83,9.95],[118.78,9.92],[118.75,9.86],[118.77,9.77],[118.57,9.42],[118.5,9.33],[118.43,9.26],[118.35,9.2],[118.23,9.17],[118.13,9.1],[118.07,8.98],[117.99,8.88],[117.89,8.8],[117.78,8.73],[117.68,8.68],[117.57,8.64],[117.54,8.6],[117.52,8.54],[117.47,8.51],[117.41,8.5],[117.31,8.44]],[[122.5,11.62],[122.61,11.56],[122.73,11.61],[122.84,11.6],[122.93,11.53],[122.9,11.49],[122.89,11.44],[123.1,11.54],[123.16,11.54],[123.16,11.44],[123.14,11.36],[123.12,11.29],[123.08,11.2],[123.02,11.12],[122.94,11.06],[122.85,11.02],[122.8,10.99],[122.79,10.94],[122.79,10.88],[122.77,10.82],[122.67,10.8],[122.52,10.69],[122.2,10.62],[122.11,10.58],[122.05,10.51],[121.99,10.46],[121.95,10.44],[121.94,10.47],[121.93,10.49],[121.98,10.64],[121.97,10.7],[121.95,10.76],[121.96,10.87],[122.02,10.98],[122.05,11.1],[122.06,11.33],[122.1,11.64],[122.1,11.68],[122.07,11.72],[121.94,11.76],[121.89,11.79],[121.92,11.85],[121.96,11.9],[122.03,11.9],[122.09,11.86],[122.29,11.77],[122.4,11.7],[122.5,11.62]],[[123.13,9.06],[123.06,9.05],[122.99,9.06],[122.95,9.11],[122.87,9.32],[122.77,9.37],[122.66,9.41],[122.61,9.44],[122.56,9.48],[122.41,9.69],[122.4,9.82],[122.43,9.9],[122.47,9.96],[122.52,9.98],[122.65,9.98],[122.71,9.99],[122.86,10.09],[122.87,10.13],[122.87,10.28],[122.85,10.4],[122.82,10.5],[122.86,10.55],[122.91,10.6],[122.96,10.7],[122.97,10.77],[122.97,10.84],[122.98,10.89],[123.02,10.91],[123.22,10.99],[123.26,10.99],[123.51,10.92],[123.56,10.82],[123.57,10.78],[123.53,10.66],[123.49,10.58],[123.41,10.46],[123.34,10.33],[123.3,10.12],[123.27,10.06],[123.19,9.93],[123.16,9.86],[123.16,9.71],[123.15,9.66],[123.15,9.61],[123.31,9.36],[123.32,9.32],[123.32,9.27],[123.29,9.22],[123.23,9.12],[123.19,9.09],[123.13,9.06]],[[124.57,11.34],[124.64,11.31],[124.72,11.32],[124.82,11.4],[124.93,11.37],[124.99,11.26],[125.03,11.21],[125.04,11.14],[125.04,10.95],[125.01,10.79],[125.03,10.75],[125.08,10.72],[125.13,10.68],[125.16,10.64],[125.19,10.58],[125.2,10.46],[125.26,10.35],[125.27,10.31],[125.25,10.26],[125.15,10.27],[125.14,10.24],[125.14,10.19],[125.11,10.22],[125.04,10.32],[124.99,10.37],[125,10.2],[125.02,10.12],[125.03,10.03],[124.93,10.1],[124.81,10.13],[124.78,10.17],[124.79,10.27],[124.79,10.33],[124.74,10.44],[124.8,10.68],[124.8,10.73],[124.79,10.78],[124.74,10.88],[124.66,10.96],[124.62,10.96],[124.5,10.9],[124.45,10.92],[124.41,11.15],[124.37,11.37],[124.33,11.43],[124.31,11.49],[124.33,11.54],[124.37,11.51],[124.44,11.46],[124.51,11.42],[124.55,11.4],[124.57,11.34]],[[125.24,12.53],[125.31,12.45],[125.33,12.39],[125.32,12.32],[125.35,12.29],[125.41,12.28],[125.48,12.25],[125.54,12.19],[125.5,12.14],[125.51,12.05],[125.46,11.95],[125.46,11.77],[125.5,11.71],[125.5,11.66],[125.49,11.59],[125.51,11.54],[125.59,11.38],[125.61,11.32],[125.58,11.28],[125.57,11.24],[125.63,11.23],[125.7,11.16],[125.75,11.07],[125.74,11.05],[125.67,11.12],[125.63,11.13],[125.43,11.11],[125.31,11.14],[125.23,11.15],[125.16,11.27],[125.09,11.29],[125.03,11.34],[124.95,11.48],[124.92,11.56],[124.98,11.64],[125,11.7],[125,11.76],[124.94,11.75],[124.88,11.78],[124.82,11.85],[124.8,11.9],[124.75,11.93],[124.68,12.02],[124.57,12.06],[124.53,12.08],[124.45,12.15],[124.38,12.24],[124.33,12.4],[124.29,12.57],[124.57,12.53],[124.84,12.53],[125.15,12.57],[125.24,12.53]],[[120.7,13.48],[120.76,13.47],[120.92,13.5],[120.98,13.49],[121.02,13.43],[121.08,13.41],[121.12,13.38],[121.2,13.43],[121.28,13.37],[121.36,13.27],[121.44,13.19],[121.52,13.13],[121.54,13.09],[121.49,13.02],[121.47,12.93],[121.48,12.84],[121.54,12.64],[121.52,12.58],[121.46,12.51],[121.41,12.42],[121.42,12.39],[121.4,12.36],[121.39,12.3],[121.36,12.31],[121.32,12.3],[121.29,12.28],[121.24,12.22],[121.16,12.24],[121.12,12.25],[121.11,12.3],[121.08,12.34],[121.05,12.36],[120.96,12.45],[120.92,12.51],[120.92,12.58],[120.9,12.65],[120.85,12.7],[120.8,12.75],[120.78,12.79],[120.77,12.84],[120.76,12.97],[120.68,13.13],[120.65,13.17],[120.57,13.21],[120.51,13.26],[120.48,13.31],[120.46,13.39],[120.44,13.41],[120.39,13.4],[120.34,13.41],[120.35,13.47],[120.4,13.52],[120.47,13.52],[120.65,13.5],[120.7,13.48]],[[126.01,9.32],[126.09,9.26],[126.19,9.28],[126.19,9.12],[126.21,9.08],[126.3,8.95],[126.32,8.84],[126.26,8.74],[126.22,8.7],[126.14,8.63],[126.14,8.6],[126.17,8.56],[126.28,8.54],[126.37,8.48],[126.38,8.33],[126.46,8.2],[126.46,8.15],[126.43,7.93],[126.44,7.83],[126.49,7.76],[126.54,7.72],[126.57,7.68],[126.59,7.55],[126.59,7.33],[126.58,7.25],[126.55,7.18],[126.44,7.01],[126.29,6.88],[126.22,6.89],[126.19,6.85],[126.24,6.73],[126.22,6.48],[126.19,6.31],[126.14,6.4],[126.11,6.49],[126.08,6.73],[126.04,6.84],[125.98,6.94],[125.96,7.03],[125.9,7.12],[125.82,7.33],[125.77,7.32],[125.69,7.26],[125.67,7.22],[125.66,7.16],[125.64,7.11],[125.54,7.02],[125.46,6.91],[125.4,6.8],[125.38,6.69],[125.43,6.61],[125.49,6.57],[125.56,6.5],[125.59,6.47],[125.67,6.22],[125.67,5.98],[125.61,5.87],[125.46,5.66],[125.35,5.6],[125.29,5.63],[125.24,5.76],[125.23,5.81],[125.26,5.93],[125.27,6.03],[125.23,6.07],[125.19,6.06],[125.17,6.05],[125.08,5.91],[125.04,5.87],[124.98,5.87],[124.93,5.88],[124.64,6],[124.4,6.12],[124.21,6.23],[124.08,6.4],[124.05,6.53],[124.05,6.67],[123.99,6.86],[123.98,6.93],[123.99,6.99],[124.05,7.11],[124.12,7.18],[124.16,7.22],[124.19,7.27],[124.21,7.33],[124.21,7.4],[124.18,7.44],[124.07,7.58],[123.97,7.66],[123.76,7.74],[123.72,7.79],[123.67,7.82],[123.61,7.83],[123.55,7.83],[123.49,7.81],[123.48,7.76],[123.48,7.71],[123.48,7.67],[123.39,7.41],[123.28,7.46],[123.18,7.53],[123.15,7.58],[123.14,7.63],[123.12,7.67],[123.1,7.7],[123.05,7.61],[122.99,7.55],[122.92,7.53],[122.84,7.53],[122.82,7.56],[122.79,7.72],[122.71,7.77],[122.62,7.76],[122.5,7.67],[122.47,7.64],[122.45,7.56],[122.32,7.34],[122.25,7.17],[122.18,7],[122.14,6.95],[122.1,6.91],[122.03,6.93],[121.96,6.97],[121.9,7.08],[121.92,7.2],[121.99,7.28],[122.05,7.36],[122.11,7.66],[122.12,7.77],[122.13,7.81],[122.24,7.95],[122.34,8.03],[122.39,8.05],[122.59,8.09],[122.67,8.13],[122.8,8.13],[122.91,8.16],[123,8.22],[123,8.29],[123,8.36],[123.02,8.4],[123.05,8.43],[123.1,8.48],[123.15,8.52],[123.29,8.54],[123.34,8.57],[123.38,8.62],[123.43,8.7],[123.5,8.68],[123.56,8.65],[123.68,8.62],[123.78,8.55],[123.85,8.43],[123.86,8.38],[123.88,8.19],[123.85,8.15],[123.75,8.06],[123.8,8.05],[123.93,8.13],[124,8.16],[124.16,8.2],[124.2,8.23],[124.23,8.27],[124.28,8.39],[124.33,8.51],[124.36,8.56],[124.4,8.6],[124.45,8.61],[124.62,8.52],[124.73,8.56],[124.76,8.69],[124.79,8.87],[124.81,8.92],[124.87,8.97],[124.94,8.96],[125.05,8.89],[125.14,8.87],[125.18,8.92],[125.21,9.03],[125.25,9.03],[125.38,8.99],[125.5,9.01],[125.53,9.14],[125.51,9.28],[125.41,9.67],[125.47,9.76],[125.52,9.76],[125.64,9.65],[125.88,9.51],[125.95,9.43],[126.01,9.32]],[[123.37,9.45],[123.33,9.42],[123.32,9.49],[123.33,9.58],[123.4,9.89],[123.39,9.97],[123.51,10.14],[123.59,10.3],[123.71,10.47],[123.73,10.56],[123.83,10.73],[123.93,10.96],[123.92,11.04],[123.95,11.08],[123.96,11.14],[123.97,11.19],[124.04,11.27],[124.06,11.22],[124.04,11.11],[124.04,11.05],[124.05,11.03],[124.05,10.93],[124.03,10.77],[124.05,10.59],[124,10.4],[123.95,10.32],[123.87,10.26],[123.79,10.22],[123.7,10.13],[123.64,10.02],[123.63,9.92],[123.49,9.59],[123.37,9.45]],[[121.92,18.89],[121.86,18.82],[121.83,18.84],[121.86,18.91],[121.86,18.94],[121.89,18.99],[121.94,19.01],[121.99,18.96],[121.92,18.89]],[[121.52,19.36],[121.53,19.27],[121.47,19.27],[121.38,19.33],[121.37,19.36],[121.38,19.38],[121.39,19.4],[121.52,19.36]],[[121.96,20.37],[121.94,20.35],[121.91,20.36],[121.94,20.45],[121.99,20.48],[122.03,20.47],[121.96,20.37]],[[121.88,20.78],[121.83,20.7],[121.79,20.7],[121.8,20.75],[121.85,20.84],[121.87,20.84],[121.88,20.78]],[[121.16,6.08],[121.21,6],[121.28,6.02],[121.39,6],[121.41,5.96],[121.41,5.94],[121.29,5.87],[121.22,5.94],[121.08,5.89],[121.02,5.92],[120.93,5.9],[120.88,5.95],[120.9,6.01],[121.04,6.1],[121.16,6.08]],[[117.08,7.88],[117.03,7.81],[116.97,7.89],[116.98,8.02],[116.99,8.05],[117.08,8.07],[117.08,7.88]],[[119.92,10.49],[119.79,10.46],[119.76,10.55],[119.85,10.64],[119.95,10.6],[120.01,10.57],[119.98,10.54],[119.92,10.49]],[[120.1,12.17],[120.15,12.15],[120.19,12.17],[120.23,12.22],[120.26,12.14],[120.34,12.08],[120.31,12.01],[120.24,12],[120.17,12.02],[120.1,11.99],[120.01,12.01],[119.96,12.07],[119.9,12.18],[119.87,12.2],[119.87,12.24],[119.89,12.27],[119.88,12.28],[119.89,12.3],[119.9,12.31],[119.92,12.32],[119.96,12.27],[120.08,12.2],[120.1,12.17]],[[120.04,11.7],[119.96,11.67],[119.94,11.69],[119.93,11.74],[119.93,11.77],[119.86,11.95],[119.92,11.98],[119.96,11.96],[120,11.93],[120.04,11.92],[120.07,11.86],[120.06,11.82],[120.07,11.78],[120.04,11.7]],[[122.65,10.47],[122.62,10.46],[122.6,10.46],[122.54,10.42],[122.52,10.49],[122.54,10.61],[122.63,10.7],[122.65,10.72],[122.67,10.74],[122.7,10.74],[122.73,10.71],[122.74,10.65],[122.68,10.5],[122.65,10.47]],[[124.59,9.79],[124.58,9.75],[124.51,9.75],[124.48,9.75],[124.4,9.65],[124.36,9.63],[124.12,9.6],[123.94,9.62],[123.87,9.68],[123.83,9.76],[123.82,9.82],[123.86,9.88],[123.91,9.92],[124.06,10],[124.09,10.06],[124.17,10.14],[124.34,10.16],[124.35,10.14],[124.37,10.13],[124.41,10.13],[124.49,10.07],[124.58,10.03],[124.56,9.88],[124.58,9.83],[124.59,9.79]],[[120.25,5.26],[120.22,5.2],[120.19,5.17],[120.15,5.18],[120.12,5.22],[120.1,5.17],[120.01,5.15],[119.96,5.08],[119.88,5.06],[119.82,5.07],[119.83,5.13],[119.98,5.23],[120.08,5.26],[120.17,5.33],[120.21,5.34],[120.23,5.28],[120.25,5.26]],[[122.09,6.43],[121.99,6.41],[121.96,6.42],[121.88,6.52],[121.87,6.56],[121.81,6.61],[121.83,6.66],[121.91,6.68],[122.06,6.74],[122.29,6.64],[122.32,6.6],[122.25,6.58],[122.2,6.48],[122.09,6.43]],[[126.06,9.77],[126.05,9.76],[125.99,9.84],[126,9.93],[126.07,10.06],[126.13,9.94],[126.13,9.89],[126.12,9.87],[126.17,9.8],[126.14,9.77],[126.06,9.77]],[[125.69,9.91],[125.67,9.89],[125.65,9.94],[125.59,10],[125.53,10.09],[125.49,10.12],[125.52,10.19],[125.52,10.31],[125.58,10.36],[125.61,10.38],[125.65,10.44],[125.67,10.44],[125.68,10.39],[125.65,10.25],[125.7,10.07],[125.68,9.96],[125.69,9.94],[125.69,9.91]],[[120.27,13.75],[120.27,13.68],[120.1,13.78],[120.1,13.82],[120.1,13.84],[120.12,13.86],[120.21,13.82],[120.27,13.75]],[[121.91,13.54],[121.98,13.54],[122,13.55],[122.11,13.46],[122.11,13.42],[122.12,13.37],[122.05,13.27],[122.04,13.24],[122,13.2],[121.88,13.28],[121.83,13.33],[121.82,13.42],[121.87,13.57],[121.91,13.54]],[[122.09,12.35],[122.01,12.11],[121.96,12.19],[121.98,12.25],[121.94,12.29],[121.92,12.33],[121.94,12.39],[121.99,12.44],[122,12.6],[122.1,12.65],[122.15,12.65],[122.13,12.61],[122.13,12.54],[122.09,12.35]],[[122.65,12.31],[122.6,12.29],[122.5,12.38],[122.44,12.43],[122.42,12.46],[122.47,12.49],[122.6,12.49],[122.67,12.42],[122.68,12.38],[122.65,12.31]],[[123.28,12.85],[123.37,12.7],[123.27,12.81],[123.17,12.88],[123.05,12.99],[122.97,13.03],[122.95,13.06],[122.96,13.11],[123.02,13.12],[123.04,13.11],[123.21,12.91],[123.28,12.85]],[[123.78,12.45],[123.78,12.37],[123.74,12.4],[123.62,12.57],[123.59,12.63],[123.62,12.67],[123.71,12.61],[123.78,12.45]],[[123.72,12.29],[123.91,12.17],[124.04,11.97],[124.06,11.81],[124.05,11.75],[123.98,11.82],[123.85,11.91],[123.75,11.93],[123.73,11.95],[123.74,12],[123.67,12.05],[123.67,12.07],[123.61,12.09],[123.53,12.2],[123.47,12.22],[123.42,12.19],[123.29,12.04],[123.16,11.93],[123.16,11.97],[123.21,12.11],[123.25,12.33],[123.27,12.4],[123.24,12.49],[123.24,12.58],[123.34,12.54],[123.46,12.5],[123.56,12.44],[123.57,12.41],[123.72,12.29]],[[124.35,13.63],[124.33,13.57],[124.29,13.59],[124.25,13.59],[124.18,13.53],[124.06,13.61],[124.04,13.66],[124.12,13.79],[124.12,13.98],[124.15,14.03],[124.19,14.06],[124.22,14.08],[124.31,13.95],[124.34,13.93],[124.42,13.87],[124.4,13.75],[124.4,13.68],[124.35,13.63]],[[122.18,14.05],[122.17,14.01],[121.96,14.16],[121.95,14.18],[121.95,14.21],[121.96,14.23],[122.18,14.05]],[[122.03,15.01],[122.05,14.97],[122.03,14.97],[122.02,14.97],[121.97,14.89],[122.02,14.76],[121.99,14.66],[121.93,14.66],[121.91,14.67],[121.92,14.71],[121.93,14.74],[121.92,14.8],[121.89,14.84],[121.86,14.92],[121.82,14.96],[121.84,15.04],[121.97,15.05],[122.03,15.01]],[[124.32,10.61],[124.29,10.6],[124.33,10.71],[124.37,10.69],[124.38,10.68],[124.38,10.63],[124.32,10.61]],[[125.28,9.98],[125.29,9.93],[125.16,10.06],[125.13,10.16],[125.18,10.15],[125.23,10.12],[125.28,9.98]],[[122.94,7.41],[122.95,7.39],[122.94,7.36],[122.84,7.31],[122.8,7.32],[122.8,7.39],[122.82,7.43],[122.87,7.4],[122.91,7.43],[122.94,7.41]],[[125.78,6.96],[125.77,6.91],[125.71,7.04],[125.68,7.07],[125.71,7.19],[125.78,7.13],[125.78,6.96]],[[124.61,11.49],[124.48,11.49],[124.43,11.53],[124.36,11.67],[124.44,11.7],[124.51,11.69],[124.56,11.64],[124.62,11.55],[124.61,11.49]],[[124.81,9.14],[124.78,9.08],[124.67,9.13],[124.64,9.18],[124.65,9.23],[124.71,9.24],[124.74,9.24],[124.79,9.19],[124.81,9.14]],[[121.25,19.08],[121.25,19.02],[121.2,19.05],[121.18,19.1],[121.19,19.14],[121.21,19.18],[121.24,19.14],[121.25,19.08]],[[119.86,11.53],[119.88,11.47],[119.85,11.39],[119.83,11.38],[119.8,11.41],[119.73,11.43],[119.73,11.47],[119.76,11.47],[119.83,11.52],[119.86,11.53]],[[123.76,11.28],[123.82,11.15],[123.74,11.15],[123.71,11.25],[123.74,11.28],[123.76,11.28]],[[122.31,12.53],[122.28,12.5],[122.26,12.5],[122.25,12.56],[122.28,12.59],[122.29,12.59],[122.31,12.53]],[[125.97,9.59],[125.95,9.57],[125.92,9.62],[125.95,9.74],[125.97,9.76],[125.99,9.68],[125.97,9.59]],[[124.85,11.59],[124.84,11.54],[124.81,11.56],[124.78,11.58],[124.74,11.66],[124.73,11.72],[124.79,11.68],[124.82,11.63],[124.85,11.59]],[[117.36,8.21],[117.29,8.19],[117.27,8.25],[117.28,8.31],[117.33,8.31],[117.35,8.29],[117.36,8.21]],[[123.7,9.24],[123.71,9.13],[123.61,9.1],[123.54,9.13],[123.49,9.19],[123.49,9.22],[123.54,9.21],[123.63,9.27],[123.65,9.28],[123.7,9.24]],[[100.12,6.44],[100.14,6.49],[100.16,6.64],[100.18,6.67],[100.22,6.69],[100.26,6.68],[100.35,6.55],[100.56,6.47],[100.63,6.45],[100.72,6.48],[100.75,6.46],[100.79,6.43],[100.82,6.33],[100.87,6.25],[100.99,6.26],[101.03,6.25],[101.05,6.24],[101.08,6.17],[101.09,6.03],[101.08,5.96],[100.99,5.85],[100.98,5.77],[101.03,5.72],[101.08,5.67],[101.11,5.64],[101.15,5.64],[101.19,5.67],[101.23,5.73],[101.26,5.79],[101.4,5.85],[101.56,5.91],[101.58,5.9],[101.6,5.88],[101.65,5.8],[101.68,5.78],[101.72,5.77],[101.79,5.78],[101.87,5.83],[101.92,5.91],[101.94,5.98],[102.06,6.1],[102.07,6.18],[102.1,6.24],[102.27,6.2],[102.34,6.17],[102.53,5.86],[102.79,5.64],[102.9,5.56],[102.98,5.52],[103.1,5.41],[103.2,5.26],[103.42,4.85],[103.45,4.67],[103.47,4.39],[103.42,3.98],[103.36,3.77],[103.37,3.67],[103.45,3.52],[103.43,3.38],[103.45,3.26],[103.44,2.93],[103.49,2.84],[103.54,2.77],[103.81,2.58],[103.83,2.51],[103.97,2.26],[104.22,1.72],[104.29,1.48],[104.28,1.42],[104.25,1.39],[104.18,1.36],[104.11,1.41],[104.09,1.45],[104.1,1.49],[104.08,1.53],[104.02,1.58],[103.98,1.62],[103.99,1.55],[103.99,1.45],[103.92,1.45],[103.82,1.48],[103.69,1.45],[103.55,1.33],[103.48,1.33],[103.43,1.43],[103.4,1.5],[103.36,1.55],[102.9,1.79],[102.73,1.86],[102.55,2.04],[102.15,2.25],[101.89,2.45],[101.78,2.57],[101.52,2.68],[101.41,2.81],[101.35,2.84],[101.3,2.89],[101.35,3.01],[101.33,3.14],[101.3,3.25],[101.12,3.47],[101.02,3.62],[100.85,3.78],[100.78,3.86],[100.72,3.97],[100.76,4],[100.8,4.02],[100.76,4.1],[100.66,4.23],[100.61,4.37],[100.61,4.65],[100.47,5.04],[100.35,5.59],[100.37,5.78],[100.34,5.98],[100.26,6.18],[100.16,6.32],[100.12,6.44]],[[117.57,4.17],[117.54,4.17],[117.45,4.19],[117.28,4.3],[117.1,4.34],[116.84,4.34],[116.7,4.35],[116.64,4.34],[116.59,4.34],[116.55,4.36],[116.51,4.37],[116.41,4.31],[116.37,4.33],[116.32,4.35],[116.24,4.36],[116.13,4.36],[116.02,4.29],[115.9,4.35],[115.86,4.35],[115.84,4.33],[115.78,4.25],[115.68,4.19],[115.63,4.08],[115.6,3.98],[115.57,3.94],[115.56,3.73],[115.54,3.63],[115.57,3.5],[115.57,3.45],[115.52,3.36],[115.51,3.34],[115.49,3.21],[115.5,3.17],[115.49,3.13],[115.45,3.03],[115.38,3.01],[115.31,2.99],[115.25,3.03],[115.19,2.97],[115.12,2.89],[115.09,2.84],[115.09,2.79],[115.09,2.76],[115.08,2.72],[115.08,2.69],[115.08,2.63],[115.13,2.61],[115.18,2.57],[115.18,2.52],[115.15,2.49],[115.09,2.45],[114.97,2.35],[114.84,2.27],[114.79,2.25],[114.77,2.21],[114.76,2.16],[114.79,2.05],[114.82,2.02],[114.83,1.98],[114.81,1.93],[114.8,1.89],[114.75,1.87],[114.7,1.85],[114.69,1.82],[114.66,1.69],[114.63,1.62],[114.57,1.51],[114.55,1.47],[114.51,1.45],[114.39,1.5],[114.27,1.47],[114.13,1.45],[114,1.46],[113.9,1.43],[113.84,1.38],[113.76,1.31],[113.68,1.26],[113.62,1.24],[113.51,1.31],[113.46,1.3],[113.36,1.33],[113.13,1.41],[113.07,1.43],[113.01,1.43],[112.99,1.46],[113,1.5],[112.99,1.55],[112.94,1.57],[112.48,1.56],[112.34,1.51],[112.25,1.48],[112.19,1.44],[112.17,1.34],[112.13,1.24],[112.08,1.14],[111.92,1.11],[111.81,1.01],[111.77,1],[111.69,1.01],[111.61,1.02],[111.55,.99],[111.48,1],[111.29,1.04],[111.1,1.05],[111,1.03],[110.94,1.02],[110.61,.88],[110.51,.86],[110.46,.88],[110.4,.94],[110.32,1],[110.11,1.19],[110.04,1.24],[109.99,1.28],[109.94,1.34],[109.88,1.4],[109.82,1.44],[109.74,1.52],[109.65,1.61],[109.64,1.78],[109.57,1.81],[109.55,1.85],[109.54,1.9],[109.63,2.03],[109.69,1.89],[109.72,1.86],[109.86,1.76],[109.98,1.72],[110.11,1.7],[110.25,1.69],[110.3,1.7],[110.35,1.72],[110.4,1.7],[110.68,1.55],[110.78,1.52],[110.89,1.53],[110.94,1.52],[111.1,1.4],[111.15,1.39],[111.22,1.4],[111.12,1.45],[111.06,1.49],[111.03,1.56],[111.05,1.63],[111.11,1.68],[111.15,1.74],[111.17,1.9],[111.2,1.99],[111.25,2.06],[111.27,2.14],[111.21,2.2],[111.2,2.3],[111.21,2.38],[111.24,2.44],[111.3,2.4],[111.35,2.36],[111.41,2.37],[111.44,2.38],[111.45,2.42],[111.44,2.5],[111.44,2.63],[111.51,2.74],[111.62,2.82],[111.73,2.85],[112.12,2.91],[112.74,3.07],[112.92,3.13],[112.99,3.16],[113.04,3.21],[113.14,3.34],[113.32,3.56],[113.45,3.74],[113.71,4],[113.92,4.24],[113.95,4.29],[113.99,4.42],[113.99,4.48],[113.98,4.55],[114.01,4.58],[114.05,4.59],[114.06,4.59],[114.1,4.57],[114.17,4.53],[114.22,4.48],[114.26,4.41],[114.29,4.35],[114.29,4.3],[114.32,4.26],[114.42,4.26],[114.45,4.2],[114.51,4.11],[114.57,4.05],[114.61,4.02],[114.65,4.04],[114.73,4.1],[114.78,4.17],[114.81,4.27],[114.78,4.28],[114.83,4.35],[114.84,4.39],[114.82,4.43],[114.79,4.46],[114.78,4.55],[114.76,4.67],[114.75,4.72],[114.78,4.75],[114.86,4.8],[114.94,4.86],[115.03,4.9],[115.03,4.82],[115.03,4.69],[115.05,4.58],[115.11,4.39],[115.17,4.36],[115.25,4.35],[115.29,4.35],[115.32,4.37],[115.33,4.38],[115.28,4.46],[115.27,4.63],[115.23,4.75],[115.17,4.87],[115.14,4.9],[115.37,4.93],[115.43,4.97],[115.52,5.05],[115.55,5.09],[115.58,5.19],[115.47,5.25],[115.42,5.33],[115.42,5.41],[115.56,5.57],[115.6,5.6],[115.62,5.55],[115.69,5.54],[115.74,5.53],[115.8,5.54],[115.88,5.61],[115.92,5.72],[116.06,5.88],[116.11,6],[116.14,6.13],[116.49,6.52],[116.54,6.58],[116.75,6.98],[116.78,6.99],[116.83,6.95],[116.85,6.83],[116.84,6.77],[116.81,6.69],[116.79,6.61],[116.81,6.61],[116.91,6.66],[117.02,6.8],[117.08,6.92],[117.13,6.97],[117.23,6.94],[117.25,6.92],[117.25,6.83],[117.25,6.78],[117.29,6.68],[117.38,6.61],[117.5,6.57],[117.61,6.51],[117.65,6.47],[117.67,6.43],[117.69,6.35],[117.7,6.27],[117.62,6.2],[117.65,6.07],[117.64,6],[117.62,5.94],[117.5,5.88],[117.82,5.94],[117.9,5.97],[118,6.05],[118.06,5.98],[118.12,5.86],[118.07,5.83],[117.93,5.79],[117.93,5.77],[117.97,5.71],[118.03,5.71],[118.14,5.75],[118.25,5.82],[118.3,5.82],[118.35,5.81],[118.46,5.76],[118.51,5.73],[118.56,5.68],[118.59,5.59],[118.71,5.56],[118.96,5.43],[119,5.42],[119.05,5.42],[119.18,5.43],[119.22,5.41],[119.26,5.37],[119.27,5.31],[119.26,5.25],[119.25,5.2],[119.22,5.16],[119.13,5.1],[118.91,5.02],[118.67,4.96],[118.55,4.97],[118.38,5.02],[118.32,5.01],[118.26,4.99],[118.19,4.83],[118.32,4.67],[118.56,4.5],[118.6,4.46],[118.59,4.41],[118.55,4.38],[118.5,4.36],[118.36,4.34],[118.23,4.32],[118.12,4.29],[118.01,4.25],[117.9,4.26],[117.74,4.34],[117.7,4.34],[117.65,4.3],[117.6,4.2],[117.57,4.17]],[[104.22,2.73],[104.17,2.72],[104.15,2.73],[104.13,2.77],[104.17,2.86],[104.18,2.87],[104.22,2.77],[104.22,2.73]],[[100.29,5.29],[100.26,5.27],[100.19,5.28],[100.2,5.45],[100.25,5.47],[100.31,5.44],[100.34,5.41],[100.29,5.29]],[[99.85,6.47],[99.92,6.36],[99.88,6.31],[99.87,6.3],[99.82,6.31],[99.78,6.27],[99.74,6.26],[99.7,6.34],[99.66,6.37],[99.65,6.42],[99.71,6.43],[99.75,6.41],[99.82,6.45],[99.85,6.47]],[[117.14,7.17],[117.08,7.12],[117.06,7.18],[117.06,7.26],[117.15,7.34],[117.26,7.35],[117.28,7.29],[117.27,7.22],[117.24,7.18],[117.14,7.17]],[[101.32,2.99],[101.27,2.97],[101.27,3],[101.27,3.03],[101.31,3.07],[101.33,3.05],[101.32,2.99]],[[111.39,2.42],[111.36,2.4],[111.31,2.44],[111.3,2.74],[111.33,2.77],[111.36,2.76],[111.38,2.71],[111.38,2.58],[111.38,2.46],[111.39,2.42]],[[117.88,4.19],[117.75,4.17],[117.65,4.17],[117.67,4.2],[117.66,4.25],[117.71,4.26],[117.76,4.25],[117.88,4.19]],[[102.13,22.38],[102.18,22.28],[102.3,22.18],[102.44,22.03],[102.49,21.96],[102.58,21.9],[102.61,21.85],[102.63,21.77],[102.64,21.71],[102.66,21.68],[102.7,21.66],[102.74,21.68],[102.77,21.71],[102.8,21.8],[102.82,21.81],[102.85,21.73],[102.88,21.72],[102.92,21.71],[102.95,21.68],[102.96,21.63],[102.95,21.57],[102.91,21.51],[102.89,21.44],[102.87,21.34],[102.85,21.27],[102.88,21.2],[103.1,20.89],[103.21,20.84],[103.46,20.78],[103.55,20.74],[103.64,20.7],[103.71,20.72],[103.79,20.81],[103.88,20.86],[104.05,20.94],[104.1,20.95],[104.2,20.91],[104.35,20.82],[104.46,20.73],[104.53,20.69],[104.58,20.65],[104.58,20.6],[104.53,20.55],[104.48,20.53],[104.41,20.49],[104.37,20.44],[104.39,20.42],[104.5,20.41],[104.62,20.37],[104.66,20.33],[104.66,20.29],[104.68,20.22],[104.7,20.21],[104.81,20.22],[104.85,20.2],[104.89,20.17],[104.93,20.08],[104.93,20.02],[104.85,19.95],[104.82,19.9],[104.8,19.84],[104.74,19.75],[104.59,19.62],[104.55,19.61],[104.26,19.69],[104.13,19.68],[104.06,19.68],[104.03,19.68],[104.01,19.65],[104.05,19.56],[104.06,19.48],[104.03,19.42],[103.93,19.37],[103.9,19.34],[103.89,19.3],[103.92,19.27],[104.01,19.23],[104.11,19.2],[104.45,18.98],[104.52,18.93],[104.61,18.86],[104.72,18.8],[104.99,18.73],[105.12,18.68],[105.15,18.65],[105.15,18.62],[105.11,18.57],[105.09,18.5],[105.09,18.45],[105.11,18.41],[105.16,18.34],[105.27,18.24],[105.33,18.19],[105.4,18.18],[105.46,18.15],[105.52,18.08],[105.59,17.98],[105.6,17.92],[105.63,17.83],[105.69,17.74],[105.78,17.64],[105.9,17.53],[105.97,17.45],[106.01,17.42],[106.27,17.22],[106.33,17.14],[106.43,17],[106.47,16.98],[106.5,16.95],[106.53,16.88],[106.53,16.82],[106.55,16.65],[106.59,16.6],[106.64,16.54],[106.66,16.49],[106.7,16.46],[106.74,16.45],[106.79,16.49],[106.83,16.53],[106.85,16.52],[106.89,16.4],[106.93,16.35],[107,16.31],[107.07,16.28],[107.22,16.14],[107.3,16.08],[107.35,16.07],[107.4,16.04],[107.41,16],[107.39,15.95],[107.36,15.92],[107.19,15.84],[107.17,15.8],[107.19,15.75],[107.23,15.68],[107.28,15.62],[107.34,15.56],[107.46,15.47],[107.56,15.39],[107.62,15.31],[107.65,15.26],[107.63,15.19],[107.59,15.12],[107.56,15.06],[107.5,15.02],[107.48,14.98],[107.5,14.92],[107.52,14.87],[107.51,14.82],[107.52,14.71],[107.47,14.66],[107.41,14.56],[107.38,14.56],[107.29,14.59],[107.26,14.57],[107.21,14.5],[107.11,14.42],[107.06,14.42],[107.03,14.43],[106.99,14.39],[106.94,14.33],[106.91,14.33],[106.82,14.31],[106.78,14.34],[106.74,14.39],[106.67,14.44],[106.6,14.48],[106.56,14.51],[106.53,14.55],[106.5,14.58],[106.45,14.52],[106.35,14.45],[106.27,14.47],[106.23,14.48],[106.19,14.39],[106.17,14.37],[106.01,14.36],[105.98,14.34],[106,14.26],[106.1,14.13],[106.12,14.05],[106.07,13.92],[105.9,13.92],[105.83,13.98],[105.76,14.05],[105.74,14.08],[105.53,14.16],[105.39,14.11],[105.35,14.11],[105.28,14.16],[105.25,14.2],[105.21,14.26],[105.19,14.32],[105.18,14.35],[105.24,14.37],[105.34,14.42],[105.42,14.47],[105.48,14.53],[105.5,14.59],[105.5,14.66],[105.52,14.84],[105.55,14.93],[105.53,15.04],[105.49,15.13],[105.49,15.26],[105.51,15.32],[105.51,15.36],[105.57,15.41],[105.62,15.49],[105.64,15.59],[105.64,15.66],[105.62,15.7],[105.56,15.74],[105.46,15.78],[105.4,15.83],[105.37,15.89],[105.38,15.94],[105.41,15.99],[105.33,16.04],[105.15,16.09],[105.05,16.16],[105.03,16.24],[104.95,16.34],[104.82,16.47],[104.75,16.65],[104.74,16.88],[104.76,17.08],[104.82,17.3],[104.74,17.46],[104.66,17.55],[104.54,17.61],[104.43,17.7],[104.32,17.82],[104.2,17.99],[104.05,18.22],[103.95,18.32],[103.9,18.3],[103.79,18.32],[103.63,18.38],[103.49,18.42],[103.37,18.42],[103.29,18.41],[103.25,18.37],[103.25,18.34],[103.28,18.3],[103.26,18.28],[103.2,18.26],[103.15,18.22],[103.09,18.14],[103.05,18.03],[102.99,17.99],[102.9,17.98],[102.81,17.95],[102.72,17.89],[102.68,17.85],[102.68,17.82],[102.66,17.82],[102.62,17.83],[102.6,17.87],[102.6,17.93],[102.55,17.97],[102.46,17.98],[102.35,18.05],[102.23,18.15],[102.15,18.2],[102.1,18.21],[102.03,18.17],[101.95,18.08],[101.88,18.05],[101.82,18.06],[101.77,18.03],[101.74,17.95],[101.69,17.89],[101.56,17.82],[101.56,17.81],[101.41,17.72],[101.3,17.63],[101.17,17.5],[101.11,17.48],[101.05,17.51],[100.96,17.54],[100.91,17.58],[101,17.8],[101.11,18.03],[101.14,18.14],[101.15,18.22],[101.14,18.29],[101.09,18.35],[101.05,18.41],[101.05,18.44],[101.06,18.48],[101.11,18.53],[101.17,18.62],[101.22,18.79],[101.29,18.98],[101.28,19.09],[101.23,19.21],[101.2,19.33],[101.22,19.49],[101.21,19.55],[101.15,19.58],[100.97,19.61],[100.91,19.61],[100.86,19.59],[100.81,19.54],[100.74,19.51],[100.63,19.5],[100.51,19.55],[100.42,19.64],[100.4,19.76],[100.47,19.89],[100.51,20],[100.54,20.09],[100.54,20.13],[100.52,20.18],[100.49,20.18],[100.43,20.24],[100.37,20.34],[100.32,20.39],[100.27,20.38],[100.22,20.34],[100.17,20.27],[100.14,20.25],[100.11,20.26],[100.12,20.32],[100.13,20.37],[100.18,20.59],[100.25,20.73],[100.33,20.8],[100.41,20.82],[100.49,20.81],[100.57,20.83],[100.62,20.86],[100.62,20.88],[100.55,20.88],[100.52,20.92],[100.54,20.99],[100.57,21.04],[100.61,21.06],[100.66,21.13],[100.7,21.25],[100.76,21.31],[100.82,21.31],[100.93,21.37],[101.08,21.47],[101.14,21.57],[101.2,21.52],[101.18,21.41],[101.21,21.38],[101.22,21.34],[101.21,21.28],[101.22,21.22],[101.25,21.2],[101.28,21.18],[101.44,21.23],[101.54,21.23],[101.58,21.2],[101.62,21.18],[101.67,21.17],[101.7,21.15],[101.73,21.16],[101.78,21.2],[101.8,21.21],[101.8,21.24],[101.76,21.28],[101.72,21.31],[101.72,21.4],[101.74,21.53],[101.75,21.61],[101.74,21.78],[101.74,21.83],[101.7,21.88],[101.6,21.99],[101.58,22.06],[101.56,22.12],[101.56,22.16],[101.54,22.21],[101.52,22.25],[101.57,22.28],[101.62,22.33],[101.65,22.41],[101.67,22.46],[101.71,22.49],[101.74,22.5],[101.76,22.49],[101.84,22.39],[101.95,22.44],[102.02,22.44],[102.09,22.41],[102.13,22.38]],[[97.48,1.47],[97.7,1.18],[97.79,1.15],[97.9,1.02],[97.93,.97],[97.9,.88],[97.88,.63],[97.82,.56],[97.68,.6],[97.68,.64],[97.6,.83],[97.46,.94],[97.41,.95],[97.37,1.06],[97.3,1.19],[97.08,1.43],[97.24,1.42],[97.32,1.48],[97.34,1.53],[97.36,1.54],[97.48,1.47]],[[99.16,-1.78],[99.07,-1.78],[98.87,-1.66],[98.83,-1.61],[98.82,-1.54],[98.63,-1.26],[98.6,-1.2],[98.68,-.97],[98.87,-.92],[98.93,-.95],[98.95,-1.06],[99.07,-1.24],[99.1,-1.34],[99.13,-1.38],[99.14,-1.42],[99.13,-1.44],[99.21,-1.56],[99.27,-1.63],[99.27,-1.74],[99.16,-1.78]],[[116.64,-8.61],[116.51,-8.82],[116.56,-8.85],[116.59,-8.89],[116.38,-8.93],[116.29,-8.91],[116.24,-8.91],[116.03,-8.87],[115.87,-8.83],[115.86,-8.79],[115.87,-8.74],[115.91,-8.76],[116.03,-8.77],[116.08,-8.74],[116.08,-8.61],[116.06,-8.44],[116.22,-8.3],[116.3,-8.24],[116.4,-8.2],[116.65,-8.28],[116.69,-8.3],[116.72,-8.34],[116.73,-8.39],[116.64,-8.61]],[[115.45,-8.16],[115.55,-8.21],[115.69,-8.36],[115.7,-8.41],[115.66,-8.45],[115.56,-8.51],[115.33,-8.62],[115.3,-8.66],[115.25,-8.76],[115.24,-8.8],[115.22,-8.82],[115.19,-8.84],[115.14,-8.85],[115.09,-8.83],[115.14,-8.77],[115.14,-8.7],[115.11,-8.63],[115.06,-8.57],[114.95,-8.5],[114.84,-8.43],[114.73,-8.39],[114.61,-8.38],[114.57,-8.35],[114.5,-8.26],[114.48,-8.21],[114.47,-8.17],[114.48,-8.12],[114.5,-8.12],[114.62,-8.13],[114.83,-8.18],[114.94,-8.19],[115,-8.17],[115.15,-8.07],[115.19,-8.07],[115.34,-8.12],[115.45,-8.16]],[[106.05,-1.67],[106.08,-1.74],[106.13,-1.8],[106.16,-1.87],[106.21,-2.19],[106.37,-2.46],[106.82,-2.57],[106.74,-2.62],[106.71,-2.66],[106.68,-2.7],[106.61,-2.9],[106.62,-2.94],[106.66,-3],[106.67,-3.07],[106.61,-3.07],[106.55,-3.06],[106.5,-3.03],[106.45,-2.99],[106.4,-2.97],[106.34,-2.95],[106.25,-2.89],[106.13,-2.86],[106,-2.82],[105.94,-2.74],[105.91,-2.64],[105.94,-2.49],[105.91,-2.45],[105.86,-2.42],[105.81,-2.31],[105.79,-2.18],[105.71,-2.13],[105.6,-2.1],[105.55,-2.08],[105.34,-2.13],[105.29,-2.11],[105.25,-2.08],[105.13,-2.04],[105.14,-1.97],[105.19,-1.92],[105.32,-1.86],[105.37,-1.81],[105.39,-1.75],[105.36,-1.71],[105.37,-1.66],[105.41,-1.61],[105.46,-1.57],[105.59,-1.53],[105.64,-1.61],[105.67,-1.68],[105.7,-1.73],[105.75,-1.66],[105.72,-1.53],[105.82,-1.51],[105.91,-1.5],[105.98,-1.54],[106.03,-1.59],[106.05,-1.67]],[[123.18,-4.55],[123.2,-4.77],[123.2,-4.82],[123.14,-4.74],[123.12,-4.72],[123.1,-4.74],[123.08,-4.75],[123.06,-4.75],[123.02,-4.83],[123.01,-4.91],[122.99,-4.96],[122.97,-5.14],[122.98,-5.19],[123.02,-5.16],[123.05,-5.16],[123.15,-5.22],[123.2,-5.27],[123.19,-5.33],[123.12,-5.39],[123.04,-5.42],[122.99,-5.39],[122.97,-5.41],[122.93,-5.44],[122.91,-5.48],[122.92,-5.52],[122.85,-5.64],[122.81,-5.67],[122.73,-5.63],[122.68,-5.67],[122.65,-5.66],[122.58,-5.54],[122.59,-5.49],[122.64,-5.43],[122.64,-5.38],[122.67,-5.33],[122.73,-5.26],[122.77,-5.21],[122.77,-5.18],[122.79,-5.05],[122.8,-5],[122.82,-4.94],[122.85,-4.83],[122.85,-4.62],[122.95,-4.44],[123.04,-4.39],[123.07,-4.39],[123.07,-4.43],[123.18,-4.55]],[[122.65,-5.27],[122.62,-5.34],[122.56,-5.39],[122.52,-5.39],[122.47,-5.38],[122.39,-5.34],[122.37,-5.38],[122.31,-5.38],[122.28,-5.32],[122.33,-5.14],[122.4,-5.07],[122.39,-5],[122.33,-4.85],[122.37,-4.77],[122.52,-4.71],[122.66,-4.63],[122.7,-4.62],[122.74,-4.68],[122.76,-4.93],[122.61,-5.14],[122.65,-5.27]],[[108.32,3.69],[108.18,3.65],[108.1,3.7],[108.19,3.77],[108.22,3.77],[108.24,3.78],[108.24,3.81],[108.09,3.85],[108.04,3.89],[108,3.98],[108,4.04],[108.2,4.2],[108.25,4.22],[108.26,4.15],[108.39,3.99],[108.4,3.88],[108.39,3.84],[108.32,3.69]],[[108.21,-3],[108.19,-3.1],[108.17,-3.14],[108.08,-3.19],[108.06,-3.23],[107.98,-3.22],[107.97,-3.17],[107.94,-3.13],[107.86,-3.09],[107.84,-3.1],[107.82,-3.16],[107.66,-3.21],[107.61,-3.21],[107.64,-3.12],[107.59,-3.06],[107.59,-2.98],[107.58,-2.94],[107.56,-2.92],[107.6,-2.86],[107.6,-2.8],[107.64,-2.73],[107.67,-2.57],[107.84,-2.53],[107.87,-2.56],[108.07,-2.6],[108.22,-2.7],[108.29,-2.83],[108.21,-3]],[[135.38,-.65],[135.6,-.69],[135.67,-.69],[135.75,-.73],[135.84,-.71],[135.89,-.73],[136.07,-.88],[136.15,-.98],[136.28,-1.06],[136.38,-1.09],[136.31,-1.17],[136.16,-1.21],[136.11,-1.22],[136,-1.17],[135.92,-1.18],[135.84,-1.12],[135.83,-1.03],[135.75,-.82],[135.65,-.88],[135.52,-.79],[135.49,-.79],[135.48,-.8],[135.43,-.77],[135.39,-.7],[135.38,-.65]],[[135.47,-1.59],[135.87,-1.64],[135.98,-1.64],[136.2,-1.65],[136.39,-1.72],[136.72,-1.73],[136.82,-1.75],[136.89,-1.8],[136.71,-1.84],[136.62,-1.87],[136.46,-1.89],[136.33,-1.87],[136.23,-1.89],[136.19,-1.86],[136.05,-1.82],[135.87,-1.75],[135.49,-1.67],[135.47,-1.62],[135.47,-1.59]],[[130.81,0],[130.99,-.05],[131.03,-.04],[131.28,-.15],[131.32,-.2],[131.3,-.24],[131.34,-.29],[131.26,-.37],[131.22,-.37],[131.18,-.35],[131.1,-.33],[131.01,-.36],[130.95,-.34],[130.9,-.27],[130.81,-.23],[130.68,-.08],[130.62,-.09],[130.64,-.14],[130.69,-.18],[130.76,-.29],[130.8,-.3],[130.84,-.3],[130.9,-.34],[130.9,-.42],[130.75,-.44],[130.7,-.39],[130.69,-.3],[130.61,-.33],[130.57,-.36],[130.55,-.37],[130.5,-.27],[130.34,-.26],[130.24,-.21],[130.29,-.15],[130.29,-.1],[130.36,-.07],[130.43,-.1],[130.5,-.06],[130.55,-.07],[130.58,-.05],[130.72,-.03],[130.81,0]],[[128.45,2.05],[128.3,2.03],[128.26,2.08],[128.22,2.3],[128.33,2.47],[128.47,2.57],[128.57,2.6],[128.6,2.6],[128.69,2.47],[128.62,2.22],[128.55,2.1],[128.45,2.05]],[[128.15,-1.66],[128.09,-1.7],[128.06,-1.71],[127.91,-1.69],[127.74,-1.69],[127.56,-1.73],[127.46,-1.7],[127.39,-1.64],[127.4,-1.59],[127.46,-1.45],[127.59,-1.35],[127.65,-1.33],[127.74,-1.36],[127.91,-1.44],[128.03,-1.53],[128.15,-1.6],[128.15,-1.66]],[[126.06,-2.45],[126.04,-2.47],[125.98,-2.42],[125.94,-2.26],[125.9,-2.22],[125.86,-2.08],[125.87,-2.04],[125.92,-1.97],[125.96,-1.98],[125.99,-2.01],[125.98,-2.17],[126.07,-2.37],[126.06,-2.45]],[[126.02,-1.79],[126.33,-1.82],[126.29,-1.86],[125.96,-1.92],[125.84,-1.91],[125.48,-1.94],[125.43,-1.94],[125.43,-1.88],[125.39,-1.84],[125.44,-1.81],[125.52,-1.8],[125.72,-1.81],[126.02,-1.79]],[[124.97,-1.71],[125.06,-1.74],[125.1,-1.74],[125.13,-1.7],[125.15,-1.69],[125.19,-1.71],[125.2,-1.78],[125.26,-1.77],[125.31,-1.79],[125.32,-1.81],[125.31,-1.88],[125.13,-1.89],[125.01,-1.94],[124.83,-1.89],[124.64,-1.98],[124.52,-2.01],[124.42,-2.01],[124.33,-1.86],[124.38,-1.69],[124.42,-1.66],[124.48,-1.64],[124.66,-1.64],[124.97,-1.71]],[[131.33,-8],[131.31,-8.01],[131.18,-8],[131.11,-8],[131.12,-7.92],[131.09,-7.87],[131.14,-7.78],[131.14,-7.68],[131.19,-7.67],[131.2,-7.62],[131.26,-7.47],[131.3,-7.44],[131.35,-7.43],[131.41,-7.34],[131.45,-7.32],[131.48,-7.25],[131.54,-7.22],[131.53,-7.17],[131.56,-7.14],[131.64,-7.11],[131.7,-7.14],[131.74,-7.2],[131.64,-7.27],[131.69,-7.44],[131.62,-7.63],[131.58,-7.68],[131.5,-7.73],[131.47,-7.78],[131.38,-7.87],[131.35,-7.95],[131.34,-7.98],[131.33,-8]],[[126.8,-7.67],[126.81,-7.72],[126.81,-7.74],[126.69,-7.75],[126.58,-7.81],[126.52,-7.87],[126.47,-7.95],[126.31,-7.92],[126.17,-7.91],[126.11,-7.88],[126.04,-7.89],[125.95,-7.91],[125.83,-7.98],[125.8,-7.98],[125.81,-7.88],[125.84,-7.82],[125.98,-7.66],[126.09,-7.7],[126.21,-7.71],[126.36,-7.68],[126.46,-7.61],[126.61,-7.57],[126.73,-7.66],[126.8,-7.67]],[[124.58,-8.14],[124.6,-8.2],[124.68,-8.17],[124.75,-8.16],[124.92,-8.17],[125.05,-8.18],[125.12,-8.2],[125.13,-8.33],[125.1,-8.35],[124.44,-8.44],[124.38,-8.42],[124.36,-8.39],[124.43,-8.3],[124.39,-8.25],[124.43,-8.18],[124.51,-8.14],[124.58,-8.14]],[[131,-1.32],[130.97,-1.34],[130.85,-1.32],[130.78,-1.26],[130.74,-1.17],[130.71,-1.1],[130.7,-1.05],[130.67,-.98],[130.67,-.96],[130.9,-.89],[130.94,-.92],[131.03,-.92],[131.07,-.97],[131.05,-1.19],[131,-1.32]],[[96.49,5.23],[96.62,5.22],[96.84,5.27],[96.97,5.27],[97.09,5.23],[97.19,5.21],[97.45,5.24],[97.5,5.23],[97.55,5.21],[97.59,5.17],[97.71,5.04],[97.91,4.88],[97.97,4.78],[98,4.66],[98.02,4.64],[98.25,4.41],[98.27,4.32],[98.24,4.19],[98.31,4.09],[98.53,4],[98.66,3.93],[98.69,3.89],[98.71,3.83],[98.78,3.76],[98.87,3.71],[99.15,3.58],[99.52,3.31],[99.73,3.18],[99.91,2.99],[99.97,2.89],[100.02,2.79],[100.13,2.65],[100.31,2.47],[100.35,2.41],[100.4,2.33],[100.46,2.26],[100.52,2.19],[100.6,2.14],[100.69,2.12],[100.82,1.99],[100.89,1.95],[100.88,2.05],[100.82,2.14],[100.82,2.19],[100.83,2.24],[100.88,2.28],[100.94,2.29],[101.05,2.26],[101.23,2.1],[101.3,2.01],[101.36,1.89],[101.41,1.76],[101.48,1.69],[101.57,1.67],[101.68,1.66],[101.78,1.62],[102.02,1.44],[102.1,1.36],[102.16,1.26],[102.2,1.14],[102.22,1.02],[102.24,.99],[102.39,.84],[102.47,.78],[102.57,.75],[102.85,.72],[102.95,.66],[103.03,.58],[103.07,.49],[103.01,.42],[102.79,.3],[102.55,.22],[102.78,.24],[102.9,.28],[103,.33],[103.11,.4],[103.28,.49],[103.34,.51],[103.41,.51],[103.48,.48],[103.58,.39],[103.67,.29],[103.74,.17],[103.79,.05],[103.71,-.02],[103.59,-.07],[103.43,-.19],[103.41,-.24],[103.44,-.27],[103.41,-.36],[103.5,-.42],[103.51,-.47],[103.43,-.53],[103.44,-.58],[103.53,-.75],[103.58,-.8],[103.72,-.89],[103.94,-.98],[104.06,-1.02],[104.2,-1.05],[104.26,-1.05],[104.36,-1.04],[104.38,-1.07],[104.43,-1.25],[104.45,-1.36],[104.48,-1.6],[104.52,-1.7],[104.52,-1.82],[104.57,-1.92],[104.68,-1.99],[104.79,-2.04],[104.85,-2.09],[104.84,-2.17],[104.83,-2.23],[104.79,-2.28],[104.67,-2.39],[104.65,-2.43],[104.63,-2.54],[104.65,-2.6],[104.7,-2.6],[104.74,-2.57],[104.88,-2.42],[104.92,-2.39],[104.97,-2.37],[105.03,-2.36],[105.29,-2.36],[105.4,-2.38],[105.5,-2.43],[105.58,-2.49],[105.9,-2.89],[106.04,-3.11],[106.06,-3.16],[106.06,-3.22],[106.03,-3.26],[105.9,-3.41],[105.89,-3.45],[105.84,-3.61],[105.85,-3.73],[105.9,-3.78],[105.93,-3.83],[105.93,-3.88],[105.84,-4.12],[105.83,-4.16],[105.89,-4.55],[105.89,-4.66],[105.88,-4.79],[105.89,-5.01],[105.82,-5.68],[105.8,-5.72],[105.75,-5.82],[105.68,-5.82],[105.62,-5.8],[105.58,-5.76],[105.56,-5.71],[105.52,-5.67],[105.35,-5.55],[105.3,-5.57],[105.13,-5.72],[105.08,-5.75],[105.02,-5.73],[104.93,-5.68],[104.64,-5.52],[104.62,-5.57],[104.62,-5.64],[104.68,-5.82],[104.68,-5.89],[104.63,-5.91],[104.6,-5.9],[104.48,-5.8],[104.37,-5.69],[104.24,-5.54],[104.15,-5.47],[104.07,-5.39],[103.83,-5.08],[103.77,-5.03],[103.41,-4.82],[103.33,-4.77],[103.24,-4.68],[103.14,-4.6],[102.92,-4.47],[102.54,-4.15],[102.37,-3.97],[102.19,-3.67],[102.13,-3.6],[101.82,-3.38],[101.65,-3.24],[101.58,-3.17],[101.41,-2.9],[101.37,-2.81],[101.31,-2.73],[101.21,-2.66],[101.12,-2.59],[100.94,-2.35],[100.89,-2.25],[100.85,-2.14],[100.86,-1.93],[100.49,-1.3],[100.39,-1.1],[100.31,-.83],[100.29,-.8],[100.09,-.55],[100.02,-.47],[99.93,-.4],[99.86,-.31],[99.72,-.03],[99.67,.05],[99.6,.1],[99.33,.21],[99.24,.27],[99.16,.35],[99.11,.46],[99.06,.69],[98.94,1.03],[98.8,1.49],[98.7,1.7],[98.6,1.86],[98.56,1.9],[98.09,2.2],[98.01,2.24],[97.92,2.26],[97.8,2.28],[97.7,2.36],[97.66,2.49],[97.64,2.68],[97.62,2.79],[97.59,2.85],[97.39,2.98],[97.31,3.08],[97.25,3.19],[97.19,3.28],[96.97,3.58],[96.89,3.65],[96.8,3.71],[96.53,3.77],[96.44,3.82],[96.31,3.99],[96.23,4.07],[95.99,4.26],[95.58,4.66],[95.49,4.76],[95.43,4.87],[95.38,4.98],[95.21,5.28],[95.22,5.35],[95.25,5.41],[95.24,5.46],[95.22,5.52],[95.23,5.56],[95.28,5.59],[95.4,5.63],[95.52,5.62],[95.63,5.61],[95.74,5.58],[95.84,5.51],[96.03,5.35],[96.13,5.29],[96.25,5.27],[96.49,5.23]],[[122.78,-8.61],[122.64,-8.65],[122.55,-8.68],[122.47,-8.73],[122.42,-8.73],[122.32,-8.74],[122.19,-8.73],[122.09,-8.74],[121.84,-8.86],[121.74,-8.87],[121.65,-8.9],[121.62,-8.85],[121.58,-8.82],[121.5,-8.81],[121.41,-8.81],[121.33,-8.92],[121.19,-8.9],[121.14,-8.9],[121.09,-8.93],[121.04,-8.94],[120.98,-8.93],[120.78,-8.85],[120.55,-8.8],[120.32,-8.82],[120.12,-8.78],[120.01,-8.81],[119.91,-8.86],[119.88,-8.81],[119.84,-8.76],[119.81,-8.7],[119.81,-8.62],[119.82,-8.57],[119.85,-8.52],[119.87,-8.47],[119.87,-8.42],[119.92,-8.45],[119.96,-8.44],[120.1,-8.38],[120.23,-8.29],[120.35,-8.26],[120.42,-8.25],[120.49,-8.27],[120.55,-8.26],[120.61,-8.24],[120.71,-8.31],[120.75,-8.32],[120.89,-8.33],[121.01,-8.37],[121.12,-8.42],[121.28,-8.48],[121.37,-8.55],[121.44,-8.58],[121.5,-8.59],[121.55,-8.58],[121.61,-8.53],[121.68,-8.51],[121.75,-8.51],[121.86,-8.49],[121.91,-8.48],[121.97,-8.46],[122.02,-8.47],[122.07,-8.5],[122.26,-8.62],[122.32,-8.63],[122.43,-8.6],[122.47,-8.57],[122.48,-8.51],[122.51,-8.47],[122.56,-8.43],[122.6,-8.4],[122.75,-8.35],[122.85,-8.3],[122.92,-8.22],[122.76,-8.19],[122.79,-8.13],[122.85,-8.09],[122.92,-8.11],[122.98,-8.15],[123.01,-8.33],[122.96,-8.35],[122.92,-8.38],[122.9,-8.42],[122.81,-8.48],[122.85,-8.56],[122.82,-8.6],[122.78,-8.61]],[[120.01,-9.37],[120.06,-9.42],[120.22,-9.51],[120.25,-9.54],[120.26,-9.6],[120.29,-9.65],[120.36,-9.65],[120.44,-9.65],[120.5,-9.67],[120.56,-9.72],[120.63,-9.81],[120.7,-9.9],[120.78,-9.96],[120.83,-10.04],[120.8,-10.11],[120.7,-10.21],[120.64,-10.23],[120.56,-10.24],[120.44,-10.29],[120.39,-10.26],[120.26,-10.24],[120.14,-10.2],[120.05,-10.12],[120,-10.04],[119.93,-9.97],[119.81,-9.92],[119.6,-9.77],[119.47,-9.76],[119.42,-9.77],[119.36,-9.77],[119.09,-9.71],[119.04,-9.67],[119.01,-9.62],[118.98,-9.57],[118.96,-9.52],[118.99,-9.47],[119.03,-9.44],[119.19,-9.38],[119.3,-9.37],[119.42,-9.37],[119.61,-9.35],[119.8,-9.38],[119.85,-9.36],[119.94,-9.3],[119.97,-9.32],[120.01,-9.37]],[[118.24,-8.32],[118.29,-8.36],[118.34,-8.35],[118.43,-8.29],[118.49,-8.27],[118.55,-8.27],[118.61,-8.28],[118.67,-8.32],[118.69,-8.39],[118.71,-8.41],[118.75,-8.33],[118.79,-8.31],[118.85,-8.29],[118.93,-8.3],[118.99,-8.34],[119.04,-8.46],[119.04,-8.56],[119.06,-8.6],[119.1,-8.63],[119.13,-8.67],[119.1,-8.71],[119.08,-8.73],[119.01,-8.75],[118.97,-8.74],[118.94,-8.71],[118.9,-8.7],[118.82,-8.71],[118.75,-8.74],[118.76,-8.77],[118.82,-8.79],[118.84,-8.81],[118.83,-8.83],[118.81,-8.84],[118.73,-8.81],[118.67,-8.81],[118.48,-8.86],[118.43,-8.86],[118.4,-8.81],[118.4,-8.7],[118.38,-8.67],[118.23,-8.81],[118.19,-8.84],[118.13,-8.86],[118.07,-8.85],[117.86,-8.93],[117.8,-8.92],[117.73,-8.92],[117.51,-9.01],[117.39,-9.03],[117.33,-9.03],[117.27,-9.03],[117.21,-9.03],[117.16,-9.07],[117.06,-9.1],[116.96,-9.08],[116.87,-9.05],[116.79,-9.01],[116.77,-8.96],[116.77,-8.89],[116.81,-8.81],[116.78,-8.66],[116.8,-8.6],[116.84,-8.53],[116.89,-8.51],[116.95,-8.5],[117.06,-8.44],[117.16,-8.37],[117.22,-8.37],[117.36,-8.43],[117.43,-8.43],[117.57,-8.43],[117.62,-8.46],[117.64,-8.54],[117.67,-8.56],[117.71,-8.58],[117.81,-8.71],[117.89,-8.7],[117.97,-8.73],[118.1,-8.65],[118.21,-8.65],[118.23,-8.59],[118.17,-8.53],[118.1,-8.48],[118.06,-8.46],[118.02,-8.47],[117.98,-8.46],[117.81,-8.34],[117.77,-8.28],[117.74,-8.2],[117.76,-8.15],[117.87,-8.1],[117.92,-8.09],[118.12,-8.12],[118.15,-8.15],[118.2,-8.27],[118.24,-8.32]],[[124.89,1],[124.7,.83],[124.64,.74],[124.59,.66],[124.51,.56],[124.43,.47],[124.38,.44],[124.28,.4],[124.22,.38],[124.1,.37],[123.75,.31],[123.64,.3],[123.53,.3],[123.31,.32],[123.27,.33],[123.18,.42],[123.08,.49],[123,.49],[122.91,.49],[122.28,.48],[122.06,.47],[121.84,.44],[121.72,.45],[121.6,.49],[121.52,.5],[121.43,.49],[121.01,.44],[120.91,.45],[120.7,.51],[120.58,.53],[120.46,.51],[120.35,.45],[120.31,.41],[120.19,.27],[120.13,.17],[120.08,.04],[120.04,-.09],[120.01,-.2],[120.01,-.31],[120.03,-.43],[120.06,-.56],[120.1,-.65],[120.24,-.87],[120.27,-.9],[120.43,-.96],[120.52,-1.04],[120.61,-1.26],[120.67,-1.37],[120.73,-1.37],[120.8,-1.36],[120.92,-1.38],[121.03,-1.41],[121.15,-1.34],[121.21,-1.21],[121.28,-1.12],[121.43,-.94],[121.52,-.86],[121.58,-.83],[121.63,-.84],[121.68,-.89],[121.74,-.93],[121.85,-.95],[121.97,-.93],[122.09,-.87],[122.14,-.84],[122.17,-.79],[122.28,-.76],[122.53,-.76],[122.66,-.77],[122.89,-.76],[122.89,-.72],[122.84,-.69],[122.83,-.66],[122.87,-.64],[123.02,-.6],[123.17,-.57],[123.28,-.59],[123.38,-.65],[123.42,-.71],[123.43,-.78],[123.4,-.96],[123.38,-1],[123.3,-1.03],[123.23,-1],[123.15,-.91],[123.05,-.87],[122.9,-.9],[122.85,-.93],[122.81,-.97],[122.72,-1.06],[122.66,-1.18],[122.51,-1.35],[122.33,-1.5],[122.25,-1.56],[122.16,-1.59],[121.86,-1.69],[121.78,-1.77],[121.72,-1.86],[121.65,-1.9],[121.57,-1.91],[121.51,-1.89],[121.39,-1.83],[121.36,-1.88],[121.35,-1.95],[121.41,-1.97],[121.5,-2.05],[121.57,-2.15],[121.62,-2.17],[121.73,-2.21],[121.77,-2.24],[121.85,-2.33],[121.97,-2.54],[122.01,-2.66],[122.08,-2.75],[122.29,-2.91],[122.3,-2.95],[122.29,-3],[122.31,-3.05],[122.38,-3.14],[122.4,-3.2],[122.32,-3.28],[122.31,-3.38],[122.26,-3.53],[122.25,-3.58],[122.25,-3.62],[122.29,-3.66],[122.33,-3.69],[122.39,-3.71],[122.43,-3.74],[122.53,-3.85],[122.58,-3.88],[122.61,-3.92],[122.61,-3.98],[122.65,-4.02],[122.69,-4.08],[122.75,-4.1],[122.78,-4.08],[122.8,-4.05],[122.85,-4.06],[122.88,-4.11],[122.89,-4.17],[122.9,-4.23],[122.9,-4.35],[122.87,-4.39],[122.82,-4.39],[122.72,-4.34],[122.72,-4.38],[122.72,-4.41],[122.67,-4.42],[122.61,-4.42],[122.47,-4.42],[122.21,-4.5],[122.11,-4.54],[122.05,-4.62],[122.05,-4.68],[122.07,-4.79],[122.04,-4.83],[121.92,-4.85],[121.75,-4.82],[121.65,-4.79],[121.59,-4.76],[121.51,-4.68],[121.49,-4.58],[121.54,-4.28],[121.56,-4.24],[121.58,-4.21],[121.61,-4.16],[121.62,-4.09],[121.54,-4.01],[121.42,-3.98],[121.31,-3.92],[120.91,-3.56],[120.89,-3.52],[120.89,-3.46],[120.91,-3.4],[121.04,-3.21],[121.05,-3.17],[121.07,-3.01],[121.07,-2.88],[121.05,-2.75],[120.99,-2.67],[120.88,-2.65],[120.77,-2.64],[120.65,-2.67],[120.54,-2.73],[120.34,-2.87],[120.26,-2.95],[120.25,-3.05],[120.3,-3.15],[120.36,-3.25],[120.39,-3.35],[120.44,-3.71],[120.44,-3.75],[120.38,-3.85],[120.36,-4.09],[120.38,-4.42],[120.42,-4.62],[120.4,-4.73],[120.31,-4.96],[120.28,-5.09],[120.28,-5.15],[120.39,-5.39],[120.42,-5.49],[120.43,-5.59],[120.31,-5.54],[120.26,-5.54],[120.2,-5.56],[120.08,-5.58],[119.95,-5.58],[119.91,-5.6],[119.82,-5.66],[119.76,-5.69],[119.72,-5.69],[119.56,-5.61],[119.46,-5.52],[119.38,-5.42],[119.36,-5.31],[119.39,-5.2],[119.43,-5.08],[119.52,-4.88],[119.52,-4.74],[119.54,-4.63],[119.59,-4.52],[119.61,-4.42],[119.62,-4.03],[119.61,-4],[119.49,-3.77],[119.48,-3.73],[119.48,-3.67],[119.49,-3.61],[119.49,-3.55],[119.47,-3.51],[119.42,-3.48],[119.36,-3.46],[119.24,-3.48],[118.99,-3.54],[118.92,-3.48],[118.87,-3.4],[118.83,-3.28],[118.81,-3.16],[118.82,-3.04],[118.86,-2.93],[118.83,-2.85],[118.78,-2.76],[118.78,-2.72],[118.81,-2.68],[118.85,-2.65],[118.91,-2.63],[118.96,-2.6],[119.09,-2.48],[119.14,-2.38],[119.14,-2.26],[119.17,-2.14],[119.24,-2.03],[119.32,-1.93],[119.35,-1.83],[119.31,-1.66],[119.32,-1.58],[119.31,-1.5],[119.31,-1.41],[119.36,-1.24],[119.51,-.91],[119.65,-.73],[119.71,-.68],[119.79,-.76],[119.84,-.86],[119.85,-.77],[119.83,-.69],[119.77,-.48],[119.72,-.09],[119.74,-.05],[119.79,-.06],[119.84,-.02],[119.87,.04],[119.81,.19],[119.81,.24],[119.91,.45],[120,.52],[120.04,.57],[120.06,.69],[120.1,.74],[120.16,.77],[120.23,.86],[120.27,.97],[120.29,.98],[120.32,.98],[120.37,.89],[120.42,.85],[120.52,.82],[120.6,.85],[120.63,.9],[120.66,.94],[120.71,.99],[120.75,1.04],[120.8,1.15],[120.87,1.25],[120.91,1.29],[120.97,1.31],[121.02,1.33],[121.08,1.33],[121.21,1.26],[121.28,1.25],[121.36,1.25],[121.4,1.24],[121.44,1.21],[121.47,1.16],[121.51,1.1],[121.55,1.08],[121.59,1.07],[121.87,1.09],[122.11,1.03],[122.44,1.02],[122.55,.98],[122.66,.94],[122.79,.86],[122.84,.85],[122.89,.85],[122.96,.92],[123.01,.94],[123.07,.94],[123.28,.93],[123.85,.84],[123.93,.85],[124.27,1.02],[124.41,1.19],[124.53,1.23],[124.58,1.3],[124.6,1.39],[124.64,1.42],[124.75,1.44],[124.79,1.47],[124.86,1.58],[124.95,1.67],[124.99,1.7],[125.11,1.69],[125.16,1.64],[125.23,1.5],[125.22,1.48],[125.14,1.41],[125.12,1.38],[125.03,1.18],[124.97,1.08],[124.89,1]],[[107.37,-6.01],[107.47,-6.12],[107.56,-6.18],[107.67,-6.22],[107.78,-6.22],[107.88,-6.23],[108.01,-6.28],[108.14,-6.3],[108.2,-6.29],[108.25,-6.27],[108.3,-6.27],[108.33,-6.29],[108.42,-6.38],[108.52,-6.47],[108.54,-6.52],[108.6,-6.73],[108.68,-6.79],[108.78,-6.81],[108.9,-6.81],[109.02,-6.82],[109.29,-6.87],[109.4,-6.86],[109.5,-6.81],[109.59,-6.84],[109.82,-6.9],[109.94,-6.92],[110.07,-6.9],[110.2,-6.9],[110.26,-6.91],[110.32,-6.94],[110.37,-6.95],[110.43,-6.95],[110.52,-6.9],[110.58,-6.81],[110.63,-6.69],[110.67,-6.57],[110.7,-6.52],[110.74,-6.47],[110.78,-6.44],[110.83,-6.42],[110.97,-6.44],[111,-6.46],[111.15,-6.67],[111.18,-6.69],[111.34,-6.7],[111.39,-6.69],[111.48,-6.65],[111.54,-6.65],[111.64,-6.7],[111.69,-6.74],[111.74,-6.77],[111.99,-6.81],[112.09,-6.89],[112.14,-6.91],[112.31,-6.89],[112.43,-6.9],[112.54,-6.93],[112.59,-7.05],[112.63,-7.18],[112.65,-7.22],[112.75,-7.27],[112.79,-7.3],[112.78,-7.43],[112.79,-7.55],[113.01,-7.66],[113.25,-7.72],[113.5,-7.72],[113.75,-7.7],[113.88,-7.68],[114.04,-7.63],[114.07,-7.63],[114.38,-7.77],[114.41,-7.79],[114.44,-7.9],[114.44,-8],[114.38,-8.26],[114.38,-8.33],[114.39,-8.41],[114.45,-8.56],[114.48,-8.6],[114.6,-8.68],[114.6,-8.73],[114.58,-8.77],[114.46,-8.74],[114.38,-8.71],[114.34,-8.65],[114.28,-8.61],[114.16,-8.63],[113.94,-8.57],[113.69,-8.48],[113.25,-8.29],[113.13,-8.29],[113.02,-8.31],[112.9,-8.36],[112.77,-8.4],[112.68,-8.41],[112.59,-8.4],[112.35,-8.35],[112.12,-8.32],[111.51,-8.31],[111.34,-8.26],[111.06,-8.24],[110.83,-8.2],[110.61,-8.15],[110.04,-7.89],[109.85,-7.83],[109.28,-7.7],[109.19,-7.69],[108.99,-7.7],[108.86,-7.67],[108.74,-7.67],[108.57,-7.71],[108.52,-7.74],[108.45,-7.8],[108.34,-7.79],[108.22,-7.78],[107.92,-7.72],[107.8,-7.69],[107.7,-7.64],[107.6,-7.57],[107.55,-7.54],[107.28,-7.47],[107.07,-7.45],[106.63,-7.42],[106.54,-7.39],[106.46,-7.37],[106.41,-7.31],[106.42,-7.24],[106.45,-7.18],[106.49,-7.11],[106.52,-7.05],[106.2,-6.93],[105.94,-6.86],[105.83,-6.85],[105.72,-6.85],[105.6,-6.86],[105.48,-6.85],[105.42,-6.83],[105.36,-6.83],[105.3,-6.84],[105.26,-6.84],[105.24,-6.78],[105.27,-6.73],[105.34,-6.67],[105.37,-6.66],[105.39,-6.75],[105.4,-6.77],[105.46,-6.79],[105.48,-6.78],[105.58,-6.67],[105.61,-6.62],[105.66,-6.47],[105.71,-6.5],[105.76,-6.48],[105.79,-6.46],[105.87,-6.12],[105.94,-6.02],[106.03,-5.93],[106.07,-5.91],[106.17,-5.96],[106.35,-5.98],[106.46,-6.02],[106.57,-6.02],[106.68,-6.04],[106.83,-6.1],[106.88,-6.09],[106.93,-6.07],[107.01,-6.01],[107.05,-5.9],[107.16,-5.96],[107.33,-5.98],[107.37,-6.01]],[[109.63,2.03],[109.54,1.9],[109.55,1.85],[109.57,1.81],[109.64,1.78],[109.65,1.61],[109.74,1.52],[109.82,1.44],[109.88,1.4],[109.94,1.34],[109.99,1.28],[110.04,1.24],[110.11,1.19],[110.32,1],[110.4,.94],[110.46,.88],[110.51,.86],[110.61,.88],[110.94,1.02],[111,1.03],[111.1,1.05],[111.29,1.04],[111.48,1],[111.55,.99],[111.61,1.02],[111.69,1.01],[111.77,1],[111.81,1.01],[111.92,1.11],[112.08,1.14],[112.13,1.24],[112.17,1.34],[112.19,1.44],[112.25,1.48],[112.34,1.51],[112.48,1.56],[112.94,1.57],[112.99,1.55],[113,1.5],[112.99,1.46],[113.01,1.43],[113.07,1.43],[113.13,1.41],[113.36,1.33],[113.46,1.3],[113.51,1.31],[113.62,1.24],[113.68,1.26],[113.76,1.31],[113.84,1.38],[113.9,1.43],[114,1.46],[114.13,1.45],[114.27,1.47],[114.39,1.5],[114.51,1.45],[114.55,1.47],[114.57,1.51],[114.63,1.62],[114.66,1.69],[114.69,1.82],[114.7,1.85],[114.75,1.87],[114.8,1.89],[114.81,1.93],[114.83,1.98],[114.82,2.02],[114.79,2.05],[114.76,2.16],[114.77,2.21],[114.79,2.25],[114.84,2.27],[114.97,2.35],[115.09,2.45],[115.15,2.49],[115.18,2.52],[115.18,2.57],[115.13,2.61],[115.08,2.63],[115.08,2.69],[115.08,2.72],[115.09,2.76],[115.09,2.79],[115.09,2.84],[115.12,2.89],[115.19,2.97],[115.25,3.03],[115.31,2.99],[115.38,3.01],[115.45,3.03],[115.49,3.13],[115.5,3.17],[115.49,3.21],[115.51,3.34],[115.52,3.36],[115.57,3.45],[115.57,3.5],[115.54,3.63],[115.56,3.73],[115.57,3.94],[115.6,3.98],[115.63,4.08],[115.68,4.19],[115.78,4.25],[115.84,4.33],[115.86,4.35],[115.9,4.35],[116.02,4.29],[116.13,4.36],[116.24,4.36],[116.32,4.35],[116.37,4.33],[116.41,4.31],[116.51,4.37],[116.55,4.36],[116.59,4.34],[116.64,4.34],[116.7,4.35],[116.84,4.34],[117.1,4.34],[117.28,4.3],[117.45,4.19],[117.54,4.17],[117.57,4.17],[117.57,4.16],[117.5,4.13],[117.47,4.08],[117.56,3.99],[117.57,3.93],[117.64,3.88],[117.73,3.8],[117.73,3.77],[117.76,3.73],[117.78,3.69],[117.71,3.64],[117.63,3.64],[117.57,3.68],[117.51,3.73],[117.49,3.67],[117.45,3.63],[117.29,3.64],[117.17,3.64],[117.06,3.62],[117.11,3.61],[117.17,3.59],[117.35,3.43],[117.38,3.37],[117.32,3.24],[117.35,3.19],[117.42,3.17],[117.51,3.1],[117.57,3.1],[117.61,3.06],[117.61,3],[117.64,2.95],[117.57,2.93],[117.64,2.91],[117.7,2.89],[117.66,2.86],[117.64,2.83],[117.67,2.81],[117.75,2.78],[117.79,2.75],[117.8,2.67],[117.89,2.54],[118.03,2.38],[118.07,2.32],[118.07,2.26],[118.04,2.22],[117.96,2.16],[117.89,2.09],[117.88,2.06],[117.79,2.03],[117.83,2],[117.86,1.97],[117.93,1.87],[118.08,1.7],[118.16,1.64],[118.47,1.42],[118.64,1.32],[118.85,1.1],[118.96,1.04],[118.98,.98],[118.89,.89],[118.76,.84],[118.53,.81],[118.31,.85],[118.2,.87],[118.1,.93],[118.02,1.04],[117.91,1.1],[117.95,1.03],[117.98,.96],[117.96,.89],[117.92,.83],[117.85,.79],[117.78,.75],[117.75,.73],[117.55,.34],[117.52,.24],[117.46,-.2],[117.46,-.32],[117.55,-.55],[117.56,-.68],[117.57,-.73],[117.56,-.77],[117.52,-.8],[117.36,-.87],[117.24,-.93],[117.15,-1.01],[117.07,-1.11],[117,-1.19],[116.91,-1.22],[116.85,-1.22],[116.8,-1.18],[116.76,-1.12],[116.74,-1.04],[116.73,-1.1],[116.73,-1.15],[116.76,-1.21],[116.77,-1.27],[116.75,-1.33],[116.72,-1.38],[116.61,-1.43],[116.55,-1.47],[116.55,-1.55],[116.52,-1.6],[116.48,-1.63],[116.33,-1.71],[116.3,-1.74],[116.28,-1.78],[116.35,-1.78],[116.42,-1.78],[116.43,-1.86],[116.45,-1.92],[116.42,-2.05],[116.31,-2.14],[116.37,-2.16],[116.42,-2.19],[116.53,-2.21],[116.57,-2.3],[116.55,-2.41],[116.53,-2.51],[116.45,-2.54],[116.4,-2.52],[116.35,-2.52],[116.32,-2.55],[116.31,-2.6],[116.38,-2.58],[116.37,-2.71],[116.35,-2.83],[116.33,-2.9],[116.29,-2.96],[116.23,-2.98],[116.17,-2.93],[116.15,-2.98],[116.17,-3.03],[116.26,-3.13],[116.21,-3.15],[116.17,-3.18],[116.15,-3.23],[116.06,-3.35],[116.02,-3.43],[116,-3.52],[115.96,-3.6],[115.26,-3.91],[114.69,-4.17],[114.65,-4.15],[114.63,-4.11],[114.61,-3.7],[114.54,-3.49],[114.53,-3.38],[114.45,-3.48],[114.4,-3.47],[114.34,-3.44],[114.3,-3.41],[114.3,-3.36],[114.34,-3.24],[114.29,-3.31],[114.24,-3.36],[114.18,-3.35],[114.13,-3.33],[114.11,-3.29],[114.08,-3.28],[113.96,-3.39],[113.8,-3.46],[113.71,-3.46],[113.63,-3.42],[113.64,-3.33],[113.63,-3.25],[113.61,-3.2],[113.57,-3.18],[113.53,-3.18],[113.41,-3.23],[113.37,-3.22],[113.34,-3.25],[113.03,-2.93],[112.97,-3.19],[112.76,-3.32],[112.6,-3.4],[112.44,-3.37],[112.28,-3.32],[112.13,-3.38],[111.95,-3.53],[111.91,-3.55],[111.86,-3.55],[111.82,-3.53],[111.83,-3.42],[111.84,-3.31],[111.82,-3.06],[111.81,-3.01],[111.76,-2.94],[111.69,-2.89],[111.66,-2.93],[111.63,-2.98],[111.49,-2.97],[111.37,-2.93],[111.26,-2.96],[111.04,-3.06],[110.93,-3.07],[110.87,-3.05],[110.83,-3],[110.85,-2.95],[110.9,-2.91],[110.81,-2.94],[110.74,-2.99],[110.7,-3.02],[110.67,-3],[110.57,-2.89],[110.38,-2.93],[110.35,-2.95],[110.3,-2.99],[110.26,-2.97],[110.23,-2.93],[110.22,-2.69],[110.12,-2.23],[110.1,-2],[110.07,-1.95],[109.96,-1.86],[109.96,-1.74],[110.02,-1.64],[110.04,-1.53],[110.02,-1.4],[109.98,-1.27],[109.94,-1.18],[109.87,-1.1],[109.79,-1.01],[109.68,-.94],[109.45,-.87],[109.33,-.88],[109.29,-.85],[109.26,-.81],[109.27,-.73],[109.31,-.68],[109.37,-.67],[109.37,-.64],[109.26,-.58],[109.16,-.49],[109.13,-.45],[109.12,-.39],[109.12,-.27],[109.15,-.19],[109.16,-.14],[109.19,-.01],[109.26,.03],[109.25,.06],[109.22,.07],[109.18,.12],[109.15,.17],[109.07,.25],[108.94,.36],[108.92,.53],[108.91,.79],[108.92,.91],[108.96,1.13],[109.03,1.2],[109.09,1.22],[109.13,1.25],[109.1,1.26],[109.07,1.25],[109.01,1.24],[109.06,1.44],[109.08,1.5],[109.17,1.61],[109.27,1.71],[109.32,1.82],[109.38,1.92],[109.63,2.03]],[[127.73,.85],[127.81,.83],[127.88,.83],[127.92,.88],[127.93,.93],[127.97,1.04],[128.06,1.12],[128.12,1.13],[128.16,1.16],[128.15,1.24],[128.16,1.32],[128.22,1.4],[128.42,1.52],[128.54,1.56],[128.69,1.57],[128.71,1.53],[128.69,1.46],[128.72,1.37],[128.7,1.11],[128.67,1.07],[128.51,.98],[128.35,.91],[128.3,.88],[128.26,.8],[128.26,.73],[128.4,.64],[128.61,.55],[128.66,.51],[128.68,.44],[128.69,.36],[128.74,.32],[128.82,.31],[128.86,.27],[128.9,.22],[128.54,.34],[128.45,.39],[128.33,.4],[128.22,.41],[128.11,.46],[127.98,.47],[127.92,.44],[127.9,.37],[127.89,.3],[127.91,.21],[127.91,.15],[127.89,.05],[127.98,-.25],[128.09,-.49],[128.25,-.73],[128.33,-.82],[128.43,-.89],[128.28,-.87],[128.23,-.79],[128.05,-.71],[128.01,-.66],[127.89,-.42],[127.85,-.38],[127.74,-.3],[127.69,-.24],[127.67,-.16],[127.69,-.08],[127.68,.03],[127.69,.15],[127.71,.29],[127.67,.34],[127.62,.38],[127.56,.49],[127.54,.61],[127.54,.68],[127.57,.74],[127.6,.8],[127.61,.85],[127.52,.92],[127.43,1.14],[127.42,1.25],[127.54,1.47],[127.53,1.57],[127.56,1.63],[127.57,1.7],[127.63,1.84],[127.73,1.97],[127.9,2.14],[127.96,2.17],[128.04,2.2],[128.04,2.16],[128.03,2.12],[127.91,1.95],[127.89,1.91],[127.89,1.83],[127.95,1.79],[128.01,1.7],[128.02,1.58],[128.03,1.46],[128.01,1.33],[127.99,1.29],[127.89,1.16],[127.65,1.01],[127.63,.98],[127.63,.94],[127.68,.89],[127.73,.85]],[[129.75,-2.87],[129.98,-2.98],[130.1,-2.99],[130.3,-2.98],[130.38,-2.99],[130.57,-3.13],[130.63,-3.23],[130.64,-3.31],[130.67,-3.39],[130.72,-3.41],[130.77,-3.42],[130.85,-3.53],[130.86,-3.57],[130.81,-3.86],[130.58,-3.75],[130.36,-3.63],[130.27,-3.58],[130.02,-3.47],[129.98,-3.44],[129.95,-3.39],[129.84,-3.33],[129.63,-3.32],[129.55,-3.32],[129.51,-3.33],[129.52,-3.36],[129.52,-3.43],[129.47,-3.45],[129.33,-3.41],[129.21,-3.39],[129.11,-3.35],[128.97,-3.33],[128.95,-3.3],[128.96,-3.27],[128.96,-3.24],[128.93,-3.23],[128.86,-3.23],[128.8,-3.27],[128.75,-3.3],[128.68,-3.4],[128.64,-3.43],[128.52,-3.45],[128.47,-3.44],[128.42,-3.42],[128.28,-3.24],[128.23,-3.2],[128.18,-3.17],[128.13,-3.16],[128.08,-3.18],[128.06,-3.24],[128.04,-3.3],[128.03,-3.34],[127.97,-3.44],[127.92,-3.51],[127.9,-3.5],[127.93,-3.4],[127.93,-3.34],[127.9,-3.28],[127.88,-3.22],[128.11,-2.93],[128.2,-2.87],[128.57,-2.84],[128.79,-2.86],[128.91,-2.85],[128.99,-2.83],[129.06,-2.84],[129.07,-2.9],[129.12,-2.94],[129.17,-2.93],[129.28,-2.89],[129.37,-2.82],[129.43,-2.79],[129.48,-2.79],[129.54,-2.79],[129.6,-2.81],[129.75,-2.87]],[[126.86,-3.09],[127.03,-3.17],[127.06,-3.22],[127.09,-3.28],[127.12,-3.31],[127.16,-3.34],[127.23,-3.39],[127.24,-3.47],[127.23,-3.63],[127.16,-3.65],[127.09,-3.67],[126.94,-3.76],[126.87,-3.78],[126.79,-3.79],[126.74,-3.81],[126.69,-3.82],[126.55,-3.77],[126.41,-3.71],[126.21,-3.61],[126.18,-3.58],[126.15,-3.52],[126.06,-3.42],[126.03,-3.36],[126.03,-3.17],[126.05,-3.13],[126.09,-3.11],[126.22,-3.15],[126.31,-3.1],[126.56,-3.07],[126.81,-3.07],[126.86,-3.09]],[[124.92,-8.94],[124.92,-9.03],[124.94,-9.05],[124.97,-9.06],[125.1,-9],[125.12,-9.02],[125.15,-9.04],[125.15,-9.12],[125.1,-9.19],[124.98,-9.19],[124.96,-9.21],[124.96,-9.25],[124.97,-9.29],[125,-9.33],[125.03,-9.38],[125.07,-9.51],[125,-9.57],[124.96,-9.67],[124.84,-9.76],[124.71,-9.91],[124.6,-9.99],[124.51,-10.09],[124.43,-10.15],[124.33,-10.17],[124.18,-10.18],[123.97,-10.29],[123.86,-10.34],[123.75,-10.35],[123.64,-10.31],[123.6,-10.27],[123.61,-10.22],[123.65,-10.17],[123.69,-10.13],[123.72,-10.08],[123.6,-10.02],[123.59,-9.97],[123.64,-9.84],[123.67,-9.71],[123.71,-9.61],[123.88,-9.45],[123.98,-9.37],[124.04,-9.34],[124.05,-9.38],[124.09,-9.42],[124.12,-9.42],[124.13,-9.41],[124.28,-9.43],[124.32,-9.41],[124.38,-9.35],[124.41,-9.31],[124.44,-9.24],[124.44,-9.19],[124.58,-9.16],[124.65,-9.12],[124.71,-9.06],[124.89,-8.97],[124.92,-8.94]],[[134.75,-5.71],[134.74,-5.75],[134.74,-5.82],[134.75,-5.88],[134.71,-5.95],[134.75,-6.05],[134.76,-6.1],[134.76,-6.17],[134.74,-6.2],[134.71,-6.3],[134.68,-6.33],[134.66,-6.34],[134.64,-6.37],[134.44,-6.33],[134.36,-6.27],[134.28,-6.2],[134.26,-6.17],[134.18,-6.09],[134.15,-6.06],[134.15,-6.02],[134.23,-6.01],[134.3,-6.01],[134.3,-5.97],[134.34,-5.83],[134.23,-5.74],[134.21,-5.71],[134.25,-5.68],[134.34,-5.71],[134.46,-5.56],[134.49,-5.53],[134.51,-5.44],[134.57,-5.43],[134.62,-5.44],[134.65,-5.49],[134.66,-5.54],[134.65,-5.58],[134.7,-5.6],[134.75,-5.71]],[[134.54,-6.44],[134.52,-6.51],[134.5,-6.59],[134.41,-6.68],[134.36,-6.81],[134.32,-6.85],[134.2,-6.91],[134.09,-6.83],[134.06,-6.77],[134.11,-6.47],[134.15,-6.48],[134.18,-6.48],[134.19,-6.46],[134.12,-6.43],[134.11,-6.26],[134.11,-6.19],[134.17,-6.18],[134.23,-6.23],[134.32,-6.32],[134.42,-6.39],[134.54,-6.44]],[[138.54,-8.27],[138.3,-8.41],[137.98,-8.38],[137.87,-8.38],[137.69,-8.41],[137.65,-8.39],[137.69,-8.26],[137.83,-7.93],[138.01,-7.64],[138.08,-7.57],[138.19,-7.5],[138.3,-7.44],[138.54,-7.38],[138.77,-7.39],[138.8,-7.41],[138.9,-7.51],[138.96,-7.59],[138.99,-7.7],[138.89,-7.88],[138.79,-8.06],[138.61,-8.2],[138.54,-8.27]],[[140.97,-2.61],[140.97,-2.61],[140.97,-2.68],[140.97,-2.8],[140.97,-3.01],[140.97,-3.21],[140.97,-3.41],[140.97,-3.62],[140.97,-3.82],[140.97,-4.02],[140.97,-4.23],[140.97,-4.43],[140.97,-4.63],[140.97,-4.84],[140.97,-5.04],[140.97,-5.24],[140.97,-5.45],[140.97,-5.65],[140.97,-5.85],[140.97,-6.06],[140.98,-6.26],[140.98,-6.35],[140.94,-6.45],[140.87,-6.61],[140.86,-6.74],[140.92,-6.84],[140.98,-6.91],[140.98,-7.07],[140.98,-7.28],[140.98,-7.48],[140.98,-7.68],[140.98,-7.89],[140.98,-8.09],[140.98,-8.29],[140.98,-8.5],[140.98,-8.7],[140.98,-8.9],[140.98,-9.11],[140.98,-9.12],[140.92,-9.09],[140.79,-8.97],[140.66,-8.85],[140.58,-8.73],[140.49,-8.62],[140.1,-8.3],[140,-8.2],[139.98,-8.17],[139.99,-8.14],[140.04,-8.08],[140.12,-7.92],[140.03,-8.02],[139.93,-8.1],[139.79,-8.11],[139.65,-8.13],[139.52,-8.17],[139.39,-8.19],[139.32,-8.17],[139.28,-8.11],[139.26,-8.05],[139.25,-7.98],[139.19,-8.09],[139.08,-8.14],[138.93,-8.26],[138.89,-8.24],[138.86,-8.19],[138.86,-8.15],[138.89,-8.09],[138.91,-8.04],[138.94,-7.91],[139,-7.84],[139.05,-7.69],[139.07,-7.64],[139.09,-7.59],[139.05,-7.53],[138.98,-7.51],[138.94,-7.47],[138.89,-7.37],[138.85,-7.34],[138.79,-7.3],[138.75,-7.25],[138.8,-7.22],[138.86,-7.2],[138.92,-7.2],[139.02,-7.23],[139.06,-7.23],[139.18,-7.19],[139.11,-7.2],[139.05,-7.2],[138.85,-7.14],[138.72,-7.07],[138.6,-6.94],[138.6,-6.91],[138.68,-6.89],[138.86,-6.86],[138.81,-6.79],[138.73,-6.73],[138.7,-6.63],[138.64,-6.56],[138.52,-6.45],[138.44,-6.34],[138.37,-6.12],[138.3,-5.95],[138.31,-5.89],[138.37,-5.84],[138.28,-5.84],[138.2,-5.81],[138.24,-5.72],[138.34,-5.68],[138.25,-5.69],[138.17,-5.71],[138.13,-5.72],[138.09,-5.71],[138.07,-5.68],[138.06,-5.63],[138.08,-5.55],[138.06,-5.47],[137.98,-5.43],[137.92,-5.37],[137.89,-5.35],[137.84,-5.35],[137.8,-5.31],[137.76,-5.26],[137.31,-5.01],[137.28,-4.95],[137.24,-4.98],[137.2,-4.99],[137.14,-4.95],[137.09,-4.92],[137.03,-4.93],[136.97,-4.91],[136.92,-4.9],[136.86,-4.89],[136.62,-4.82],[136.39,-4.7],[136.21,-4.65],[136.1,-4.58],[135.98,-4.53],[135.72,-4.48],[135.45,-4.44],[135.35,-4.44],[135.27,-4.45],[135.2,-4.45],[134.75,-4.2],[134.68,-4.08],[134.69,-4.01],[134.71,-3.95],[134.89,-3.94],[134.76,-3.92],[134.71,-3.93],[134.6,-3.98],[134.55,-3.98],[134.47,-3.95],[134.39,-3.91],[134.27,-3.95],[134.2,-3.89],[134.18,-3.83],[134.15,-3.8],[134.1,-3.8],[134.04,-3.82],[133.97,-3.82],[133.93,-3.78],[133.9,-3.72],[133.86,-3.68],[133.81,-3.65],[133.72,-3.58],[133.68,-3.48],[133.68,-3.31],[133.7,-3.25],[133.78,-3.15],[133.84,-3.05],[133.77,-3.04],[133.7,-3.09],[133.67,-3.13],[133.66,-3.19],[133.65,-3.36],[133.6,-3.42],[133.52,-3.41],[133.54,-3.52],[133.51,-3.62],[133.42,-3.73],[133.41,-3.79],[133.42,-3.84],[133.4,-3.9],[133.25,-4.06],[133.2,-4.07],[133.09,-4.07],[132.97,-4.09],[132.91,-4.06],[132.87,-4.01],[132.84,-3.95],[132.79,-3.83],[132.75,-3.7],[132.87,-3.55],[132.83,-3.41],[132.75,-3.29],[132.55,-3.13],[132.35,-2.98],[132.25,-2.94],[132.1,-2.93],[132.05,-2.91],[132.01,-2.86],[131.97,-2.79],[132.07,-2.76],[132.23,-2.68],[132.32,-2.68],[132.58,-2.73],[132.65,-2.77],[132.73,-2.79],[132.9,-2.66],[133.03,-2.49],[133.12,-2.45],[133.19,-2.44],[133.26,-2.45],[133.41,-2.51],[133.53,-2.54],[133.61,-2.55],[133.65,-2.6],[133.7,-2.62],[133.71,-2.54],[133.75,-2.45],[133.83,-2.42],[133.88,-2.42],[133.9,-2.39],[133.9,-2.3],[133.79,-2.29],[133.85,-2.22],[133.9,-2.18],[133.92,-2.15],[133.92,-2.1],[133.71,-2.19],[133.49,-2.23],[133.36,-2.22],[133.22,-2.21],[132.96,-2.27],[132.86,-2.27],[132.63,-2.25],[132.5,-2.22],[132.4,-2.24],[132.31,-2.24],[132.21,-2.18],[132.12,-2.09],[132.08,-2.03],[132.02,-1.99],[132,-1.93],[131.94,-1.71],[131.93,-1.56],[131.83,-1.56],[131.73,-1.54],[131.29,-1.39],[131.24,-1.43],[131.18,-1.45],[131.12,-1.46],[131.06,-1.45],[131,-1.42],[131,-1.38],[131.05,-1.28],[131.09,-1.25],[131.15,-1.22],[131.19,-1.17],[131.25,-1.01],[131.26,-.95],[131.25,-.9],[131.26,-.86],[131.3,-.83],[131.46,-.78],[131.8,-.7],[131.89,-.66],[131.96,-.58],[132.05,-.54],[132.08,-.49],[132.13,-.45],[132.39,-.36],[132.51,-.35],[132.63,-.36],[132.86,-.42],[133.08,-.51],[133.27,-.64],[133.47,-.73],[133.72,-.74],[133.85,-.73],[133.97,-.74],[134.02,-.77],[134.11,-.85],[134.09,-.9],[134.07,-1],[134.12,-1.1],[134.19,-1.2],[134.25,-1.31],[134.26,-1.36],[134.24,-1.47],[134.22,-1.53],[134.15,-1.62],[134.11,-1.72],[134.13,-1.84],[134.15,-1.97],[134.14,-2.08],[134.16,-2.2],[134.19,-2.31],[134.36,-2.62],[134.46,-2.83],[134.49,-2.71],[134.48,-2.58],[134.52,-2.54],[134.57,-2.51],[134.63,-2.54],[134.64,-2.59],[134.65,-2.71],[134.7,-2.93],[134.77,-2.94],[134.84,-2.91],[134.86,-2.98],[134.85,-3.11],[134.89,-3.21],[134.92,-3.25],[135.04,-3.33],[135.09,-3.35],[135.25,-3.37],[135.37,-3.37],[135.49,-3.35],[135.56,-3.27],[135.63,-3.19],[135.86,-3],[135.93,-2.9],[135.99,-2.76],[136.01,-2.73],[136.24,-2.58],[136.27,-2.53],[136.3,-2.43],[136.35,-2.33],[136.39,-2.27],[136.61,-2.22],[136.84,-2.2],[137.07,-2.11],[137.17,-2.03],[137.18,-1.97],[137.13,-1.88],[137.12,-1.84],[137.18,-1.8],[137.38,-1.69],[137.62,-1.57],[137.81,-1.48],[137.91,-1.48],[138.01,-1.56],[138.11,-1.62],[138.65,-1.79],[138.74,-1.85],[138.81,-1.92],[138.92,-1.97],[139.04,-1.99],[139.15,-2.04],[139.25,-2.1],[139.48,-2.21],[139.79,-2.35],[139.87,-2.36],[140.15,-2.35],[140.2,-2.38],[140.25,-2.41],[140.29,-2.42],[140.62,-2.45],[140.67,-2.47],[140.72,-2.51],[140.75,-2.61],[140.97,-2.61]],[[138.9,-8.39],[138.85,-8.4],[138.59,-8.37],[138.57,-8.33],[138.56,-8.31],[138.62,-8.27],[138.68,-8.2],[138.76,-8.17],[138.8,-8.17],[138.9,-8.34],[138.9,-8.39]],[[101.71,2.08],[101.76,2],[101.77,1.94],[101.73,1.88],[101.72,1.79],[101.6,1.72],[101.5,1.73],[101.47,1.76],[101.4,1.9],[101.41,2.02],[101.45,2.07],[101.54,2.06],[101.64,2.13],[101.71,2.08]],[[102.43,.99],[102.38,.96],[102.33,1.01],[102.28,1.08],[102.26,1.15],[102.23,1.26],[102.23,1.35],[102.26,1.4],[102.28,1.4],[102.36,1.35],[102.41,1.26],[102.44,1.23],[102.45,1.16],[102.43,1.07],[102.43,.99]],[[102.49,1.46],[102.5,1.33],[102.43,1.36],[102.37,1.42],[102.27,1.45],[102.16,1.47],[102.08,1.5],[102.02,1.56],[102.02,1.59],[102.02,1.61],[102.04,1.63],[102.47,1.51],[102.49,1.46]],[[103.03,.75],[103.01,.71],[102.97,.74],[102.78,.78],[102.71,.78],[102.54,.83],[102.49,.86],[102.45,.89],[102.47,.95],[102.49,.99],[102.51,1.09],[102.55,1.13],[102.63,1.05],[102.73,.99],[102.78,.96],[102.94,.89],[103,.86],[103.03,.75]],[[103.17,.87],[103.14,.84],[103.09,.85],[103.03,.88],[102.96,.94],[102.89,1],[102.79,1.03],[102.73,1.04],[102.7,1.05],[102.73,1.16],[102.79,1.17],[103,1.07],[103.07,1.01],[103.17,.87]],[[103.28,.54],[103.17,.54],[103.14,.55],[103.15,.64],[103.19,.7],[103.24,.7],[103.3,.61],[103.28,.54]],[[103.45,.66],[103.43,.65],[103.34,.78],[103.37,.85],[103.39,.87],[103.43,.82],[103.47,.78],[103.5,.72],[103.45,.66]],[[104.02,1.18],[104.09,1.14],[104.14,1.17],[104.14,1.13],[104.13,1.09],[104.07,.99],[103.96,1.01],[103.94,1.05],[103.93,1.07],[103.95,1.09],[103.96,1.14],[104,1.14],[104.02,1.18]],[[104.59,1.22],[104.59,1.14],[104.65,1.1],[104.66,1.05],[104.65,.96],[104.6,.86],[104.58,.83],[104.5,.85],[104.48,.89],[104.47,.91],[104.48,.93],[104.43,.96],[104.46,1],[104.44,1.05],[104.29,1.02],[104.25,1.01],[104.24,1.08],[104.25,1.1],[104.36,1.18],[104.43,1.2],[104.5,1.18],[104.59,1.22]],[[104.78,-.18],[104.81,-.19],[104.84,-.14],[104.91,-.21],[104.95,-.25],[105.01,-.28],[104.95,-.28],[104.93,-.32],[104.91,-.32],[104.7,-.21],[104.57,-.25],[104.47,-.21],[104.45,-.19],[104.5,-.13],[104.54,.02],[104.64,-.02],[104.66,-.06],[104.65,-.08],[104.71,-.1],[104.78,-.18]],[[104.47,-.33],[104.57,-.43],[104.59,-.47],[104.54,-.52],[104.51,-.6],[104.49,-.61],[104.41,-.58],[104.36,-.66],[104.33,-.54],[104.26,-.46],[104.3,-.39],[104.32,-.38],[104.34,-.38],[104.36,-.4],[104.47,-.33]],[[103.74,-.35],[103.61,-.38],[103.46,-.36],[103.48,-.3],[103.55,-.23],[103.61,-.23],[103.72,-.28],[103.76,-.32],[103.74,-.35]],[[109.71,-1.18],[109.51,-1.28],[109.46,-1.28],[109.43,-1.24],[109.45,-1.04],[109.48,-.99],[109.61,-.98],[109.7,-1.01],[109.74,-1.04],[109.76,-1.11],[109.75,-1.15],[109.71,-1.18]],[[113.84,-7.11],[113.83,-7.12],[113.66,-7.11],[113.55,-7.19],[113.47,-7.22],[113.2,-7.22],[113.17,-7.21],[113.14,-7.21],[113.13,-7.22],[113.04,-7.21],[112.76,-7.14],[112.73,-7.07],[112.77,-7],[112.87,-6.9],[113.07,-6.88],[113.97,-6.87],[114.07,-6.96],[114.08,-6.99],[113.89,-7.05],[113.84,-7.11]],[[134.97,-1.12],[134.92,-1.13],[134.86,-1.11],[134.81,-1.04],[134.83,-.98],[134.89,-.94],[134.94,-.98],[134.96,-1.03],[135,-1.03],[134.97,-1.12]],[[127.25,-.5],[127.19,-.52],[127.12,-.52],[127.1,-.41],[127.13,-.28],[127.19,-.26],[127.29,-.28],[127.25,-.32],[127.28,-.39],[127.25,-.5]],[[127.57,-.32],[127.68,-.47],[127.6,-.61],[127.66,-.69],[127.8,-.69],[127.84,-.72],[127.86,-.76],[127.88,-.81],[127.84,-.85],[127.76,-.88],[127.67,-.83],[127.64,-.78],[127.62,-.77],[127.5,-.8],[127.46,-.81],[127.44,-.74],[127.47,-.64],[127.38,-.6],[127.3,-.5],[127.3,-.46],[127.33,-.39],[127.33,-.34],[127.37,-.33],[127.46,-.41],[127.49,-.34],[127.53,-.31],[127.57,-.32]],[[132.93,-5.9],[132.85,-5.99],[132.92,-5.79],[132.94,-5.68],[133.01,-5.62],[133.11,-5.31],[133.14,-5.32],[133.17,-5.35],[133.12,-5.58],[132.97,-5.74],[132.93,-5.9]],[[132.81,-5.85],[132.75,-5.95],[132.7,-5.91],[132.68,-5.91],[132.67,-5.86],[132.68,-5.74],[132.63,-5.61],[132.7,-5.61],[132.72,-5.65],[132.74,-5.66],[132.8,-5.79],[132.81,-5.85]],[[128.28,-3.67],[128.25,-3.71],[128.19,-3.74],[128.14,-3.73],[128.16,-3.7],[128.15,-3.68],[128.11,-3.69],[128.05,-3.71],[127.98,-3.77],[127.93,-3.74],[127.93,-3.7],[127.93,-3.68],[128.02,-3.6],[128.12,-3.59],[128.26,-3.51],[128.33,-3.52],[128.31,-3.56],[128.29,-3.6],[128.28,-3.63],[128.28,-3.67]],[[126.82,4.03],[126.78,4.01],[126.71,4.02],[126.7,4.07],[126.77,4.16],[126.81,4.26],[126.77,4.28],[126.72,4.34],[126.72,4.42],[126.76,4.55],[126.81,4.54],[126.87,4.48],[126.89,4.37],[126.92,4.29],[126.85,4.18],[126.82,4.03]],[[125.66,3.44],[125.63,3.41],[125.51,3.46],[125.52,3.55],[125.5,3.59],[125.47,3.64],[125.46,3.68],[125.47,3.73],[125.54,3.67],[125.59,3.57],[125.64,3.48],[125.66,3.44]],[[130.86,-8.32],[130.78,-8.35],[130.83,-8.27],[131.02,-8.09],[131.09,-8.12],[131.18,-8.13],[131.04,-8.21],[130.91,-8.25],[130.86,-8.32]],[[129.84,-7.95],[129.78,-8.05],[129.71,-8.04],[129.59,-7.92],[129.6,-7.83],[129.61,-7.8],[129.66,-7.79],[129.81,-7.82],[129.84,-7.89],[129.84,-7.95]],[[127.82,-8.1],[128,-8.14],[128.1,-8.13],[128.12,-8.17],[128.02,-8.26],[127.82,-8.19],[127.79,-8.12],[127.82,-8.1]],[[130.35,-1.69],[130.37,-1.75],[130.43,-1.8],[130.4,-1.89],[130.38,-1.9],[130.39,-1.94],[130.42,-1.97],[130.37,-1.99],[130.34,-1.98],[130.28,-2.01],[130.25,-2.05],[130.13,-2.06],[130.09,-2.03],[129.89,-1.99],[129.75,-1.89],[129.74,-1.87],[129.99,-1.76],[130.11,-1.73],[130.2,-1.73],[130.32,-1.69],[130.35,-1.69]],[[102.37,-5.48],[102.29,-5.48],[102.14,-5.36],[102.11,-5.32],[102.15,-5.29],[102.2,-5.29],[102.37,-5.37],[102.41,-5.4],[102.37,-5.48]],[[100.43,-3.18],[100.47,-3.33],[100.35,-3.23],[100.35,-3.16],[100.33,-3.11],[100.26,-3.06],[100.2,-2.99],[100.18,-2.82],[100.2,-2.79],[100.25,-2.78],[100.45,-3],[100.47,-3.04],[100.46,-3.12],[100.43,-3.14],[100.43,-3.18]],[[100.2,-2.74],[100.13,-2.82],[100.01,-2.82],[99.99,-2.77],[100,-2.65],[99.97,-2.61],[99.97,-2.59],[99.99,-2.53],[100.01,-2.51],[100.2,-2.68],[100.2,-2.74]],[[99.84,-2.34],[99.85,-2.37],[99.69,-2.28],[99.61,-2.26],[99.54,-2.16],[99.56,-2.12],[99.56,-2.05],[99.57,-2.03],[99.62,-2.02],[99.69,-2.06],[99.73,-2.18],[99.82,-2.28],[99.84,-2.34]],[[98.46,-.53],[98.4,-.58],[98.31,-.53],[98.34,-.47],[98.35,-.38],[98.41,-.31],[98.43,-.23],[98.32,0],[98.37,.01],[98.42,-.02],[98.48,-.17],[98.54,-.26],[98.52,-.38],[98.46,-.53]],[[96.46,2.36],[96.4,2.35],[96.34,2.37],[96.29,2.43],[96.02,2.6],[95.94,2.6],[95.88,2.64],[95.81,2.66],[95.73,2.77],[95.72,2.83],[95.77,2.85],[95.81,2.92],[95.9,2.89],[96,2.78],[96.1,2.74],[96.13,2.72],[96.18,2.66],[96.42,2.52],[96.44,2.47],[96.46,2.42],[96.46,2.36]],[[122.04,-5.44],[121.98,-5.46],[121.86,-5.35],[121.81,-5.26],[121.82,-5.2],[121.86,-5.16],[121.87,-5.14],[121.87,-5.1],[121.91,-5.07],[121.97,-5.08],[122,-5.14],[122.04,-5.16],[122.06,-5.22],[122.04,-5.44]],[[123.21,-1.17],[123.23,-1.23],[123.2,-1.29],[123.24,-1.39],[123.34,-1.25],[123.43,-1.24],[123.49,-1.26],[123.53,-1.29],[123.55,-1.34],[123.51,-1.45],[123.45,-1.5],[123.37,-1.51],[123.33,-1.44],[123.27,-1.44],[123.24,-1.58],[123.22,-1.6],[123.17,-1.62],[123.13,-1.58],[123.12,-1.56],[123.18,-1.49],[123.15,-1.3],[123.11,-1.34],[122.98,-1.51],[122.89,-1.59],[122.86,-1.55],[122.81,-1.43],[122.83,-1.28],[122.91,-1.18],[122.97,-1.19],[123.16,-1.16],[123.21,-1.17]],[[121.86,-.41],[121.91,-.45],[121.88,-.5],[121.85,-.49],[121.76,-.49],[121.72,-.49],[121.68,-.53],[121.66,-.53],[121.67,-.48],[121.75,-.41],[121.8,-.42],[121.86,-.41]],[[120.53,-6.3],[120.49,-6.46],[120.47,-6.41],[120.46,-6.25],[120.44,-6.18],[120.45,-6.09],[120.45,-5.88],[120.48,-5.78],[120.53,-5.9],[120.55,-5.97],[120.53,-6.3]],[[115.38,-6.97],[115.3,-6.99],[115.22,-6.95],[115.22,-6.91],[115.24,-6.86],[115.35,-6.84],[115.41,-6.84],[115.48,-6.87],[115.52,-6.9],[115.55,-6.94],[115.42,-6.94],[115.38,-6.97]],[[116.3,-3.87],[116.09,-4.05],[116.06,-4.01],[116.08,-3.82],[116.02,-3.7],[116.02,-3.61],[116.06,-3.46],[116.12,-3.34],[116.24,-3.26],[116.27,-3.25],[116.26,-3.39],[116.29,-3.45],[116.3,-3.5],[116.28,-3.53],[116.31,-3.72],[116.32,-3.76],[116.29,-3.82],[116.3,-3.87]],[[122.95,-10.91],[122.86,-10.91],[122.83,-10.9],[122.82,-10.81],[122.85,-10.76],[123.06,-10.7],[123.15,-10.64],[123.27,-10.52],[123.34,-10.49],[123.36,-10.47],[123.37,-10.47],[123.38,-10.57],[123.41,-10.62],[123.42,-10.65],[123.31,-10.7],[123.21,-10.81],[123.01,-10.88],[122.95,-10.91]],[[124.29,-8.33],[124.23,-8.39],[124.18,-8.5],[124.15,-8.53],[124.07,-8.55],[124.02,-8.44],[123.93,-8.45],[123.97,-8.35],[124.01,-8.32],[124.07,-8.32],[124.1,-8.36],[124.11,-8.36],[124.24,-8.2],[124.27,-8.2],[124.29,-8.21],[124.3,-8.23],[124.29,-8.33]],[[123.92,-8.27],[123.78,-8.3],[123.7,-8.42],[123.63,-8.42],[123.59,-8.48],[123.58,-8.5],[123.59,-8.52],[123.58,-8.54],[123.55,-8.57],[123.49,-8.53],[123.43,-8.58],[123.41,-8.59],[123.33,-8.54],[123.25,-8.54],[123.23,-8.53],[123.32,-8.44],[123.45,-8.35],[123.48,-8.32],[123.43,-8.31],[123.39,-8.3],[123.39,-8.28],[123.47,-8.27],[123.53,-8.27],[123.57,-8.29],[123.6,-8.29],[123.78,-8.19],[123.85,-8.21],[123.9,-8.24],[123.92,-8.27]],[[123.32,-8.35],[123.3,-8.4],[123.03,-8.4],[123.03,-8.34],[123.11,-8.27],[123.13,-8.25],[123.22,-8.24],[123.34,-8.27],[123.32,-8.35]],[[134.72,-6.55],[134.66,-6.56],[134.63,-6.48],[134.68,-6.46],[134.73,-6.51],[134.72,-6.55]],[[103.42,1.05],[103.43,.99],[103.36,1.01],[103.32,1.07],[103.35,1.12],[103.38,1.13],[103.4,1.07],[103.42,1.05]],[[103.83,.8],[103.83,.77],[103.74,.83],[103.74,.87],[103.75,.89],[103.81,.85],[103.83,.8]],[[104.24,.83],[104.18,.8],[104.1,.9],[104.1,.92],[104.11,.93],[104.12,.94],[104.17,.9],[104.23,.88],[104.24,.83]],[[104.69,.06],[104.7,.03],[104.65,.06],[104.62,.08],[104.6,.1],[104.5,.23],[104.54,.22],[104.66,.1],[104.69,.06]],[[106.29,3.16],[106.28,3.09],[106.21,3.13],[106.2,3.2],[106.22,3.23],[106.27,3.22],[106.29,3.16]],[[105.76,2.86],[105.72,2.86],[105.71,2.89],[105.71,2.94],[105.7,2.98],[105.69,3.01],[105.69,3.06],[105.73,3.04],[105.76,3.01],[105.79,3],[105.82,2.98],[105.84,2.98],[105.81,2.9],[105.76,2.86]],[[108.89,2.91],[108.84,2.85],[108.79,2.89],[108.87,2.99],[108.89,3],[108.89,2.91]],[[108.95,-1.62],[108.84,-1.66],[108.8,-1.57],[108.88,-1.54],[108.96,-1.56],[108.95,-1.62]],[[107.47,-2.9],[107.43,-2.93],[107.41,-2.9],[107.4,-2.87],[107.42,-2.84],[107.47,-2.83],[107.5,-2.85],[107.47,-2.9]],[[106.89,-3.01],[106.87,-3.03],[106.81,-3.01],[106.77,-2.99],[106.75,-2.96],[106.74,-2.93],[106.8,-2.9],[106.91,-2.93],[106.89,-3.01]],[[114.41,-7.13],[114.4,-7.17],[114.35,-7.16],[114.3,-7.1],[114.32,-7.08],[114.35,-7.07],[114.38,-7.08],[114.41,-7.13]],[[112.72,-5.81],[112.7,-5.85],[112.6,-5.84],[112.59,-5.8],[112.65,-5.73],[112.69,-5.73],[112.73,-5.75],[112.72,-5.81]],[[105.25,-6.64],[105.19,-6.66],[105.14,-6.64],[105.12,-6.61],[105.19,-6.55],[105.23,-6.53],[105.26,-6.52],[105.28,-6.56],[105.25,-6.64]],[[97.33,2.08],[97.33,2.05],[97.23,2.16],[97.11,2.22],[97.16,2.23],[97.25,2.22],[97.29,2.2],[97.33,2.15],[97.33,2.08]],[[95.36,5.81],[95.34,5.78],[95.28,5.8],[95.22,5.89],[95.24,5.91],[95.28,5.9],[95.36,5.88],[95.37,5.84],[95.36,5.81]],[[123.6,-1.7],[123.53,-1.71],[123.48,-1.68],[123.49,-1.53],[123.53,-1.5],[123.55,-1.51],[123.56,-1.55],[123.58,-1.59],[123.62,-1.63],[123.6,-1.7]],[[123.24,-4.11],[123.14,-4.23],[123.08,-4.23],[122.99,-4.15],[122.97,-4.06],[122.97,-4.03],[123.02,-3.98],[123.21,-4],[123.25,-4.04],[123.24,-4.11]],[[123.85,-1.96],[123.87,-2],[123.8,-1.99],[123.78,-1.92],[123.78,-1.88],[123.85,-1.96]],[[123.15,-1.82],[123.08,-1.9],[123.07,-1.85],[123.09,-1.81],[123.11,-1.79],[123.14,-1.77],[123.15,-1.82]],[[119.46,-8.74],[119.42,-8.75],[119.39,-8.74],[119.4,-8.65],[119.38,-8.59],[119.42,-8.54],[119.43,-8.45],[119.45,-8.43],[119.47,-8.46],[119.48,-8.47],[119.5,-8.48],[119.55,-8.48],[119.56,-8.52],[119.56,-8.55],[119.54,-8.59],[119.48,-8.63],[119.44,-8.67],[119.46,-8.74]],[[119.07,-8.24],[119.03,-8.24],[119.02,-8.2],[119.04,-8.16],[119.08,-8.14],[119.1,-8.14],[119.13,-8.18],[119.13,-8.2],[119.11,-8.22],[119.07,-8.24]],[[115.61,-8.77],[115.58,-8.8],[115.5,-8.74],[115.48,-8.72],[115.54,-8.68],[115.56,-8.67],[115.61,-8.71],[115.61,-8.77]],[[117.65,4.17],[117.75,4.17],[117.88,4.19],[117.92,4.09],[117.92,4.05],[117.74,4],[117.63,4.12],[117.65,4.17]],[[117.66,3.28],[117.65,3.25],[117.56,3.33],[117.54,3.39],[117.55,3.43],[117.64,3.44],[117.68,3.41],[117.66,3.28]],[[124.05,-5.97],[124.04,-6.02],[124.01,-5.97],[123.97,-5.94],[123.98,-5.88],[124.02,-5.9],[124.05,-5.97]],[[123.63,-5.27],[123.62,-5.37],[123.58,-5.37],[123.55,-5.33],[123.54,-5.3],[123.54,-5.27],[123.56,-5.25],[123.63,-5.27]],[[120.77,-7.12],[120.67,-7.12],[120.64,-7.12],[120.63,-7.02],[120.75,-7.06],[120.78,-7.06],[120.77,-7.12]],[[117.56,-8.37],[117.53,-8.37],[117.49,-8.35],[117.51,-8.31],[117.48,-8.24],[117.49,-8.18],[117.55,-8.15],[117.67,-8.15],[117.67,-8.19],[117.56,-8.37]],[[116.42,-3.46],[116.39,-3.64],[116.33,-3.54],[116.4,-3.42],[116.43,-3.4],[116.42,-3.46]],[[127.37,.79],[127.34,.76],[127.31,.77],[127.29,.81],[127.29,.84],[127.32,.86],[127.35,.85],[127.37,.79]],[[134.37,-2.12],[134.35,-2.14],[134.34,-2.1],[134.35,-2.04],[134.37,-2.03],[134.39,-2.03],[134.42,-2.05],[134.37,-2.12]],[[133.57,-4.25],[133.62,-4.3],[133.5,-4.26],[133.33,-4.17],[133.32,-4.11],[133.46,-4.2],[133.57,-4.25]],[[130.91,-.78],[130.88,-.83],[130.83,-.86],[130.4,-.92],[130.44,-.89],[130.46,-.85],[130.48,-.83],[130.53,-.84],[130.55,-.83],[130.57,-.82],[130.59,-.83],[130.64,-.81],[130.72,-.82],[130.81,-.81],[130.81,-.77],[130.91,-.78]],[[130.63,-.53],[130.57,-.53],[130.47,-.49],[130.53,-.45],[130.56,-.44],[130.6,-.42],[130.62,-.42],[130.66,-.44],[130.68,-.47],[130.63,-.53]],[[129.55,-.19],[129.51,-.19],[129.47,-.13],[129.37,-.07],[129.31,.05],[129.54,-.14],[129.55,-.19]],[[127.45,-.01],[127.45,-.04],[127.42,.01],[127.4,.02],[127.42,.12],[127.43,.14],[127.45,.07],[127.45,-.01]],[[127.42,.64],[127.38,.63],[127.37,.63],[127.36,.68],[127.38,.74],[127.42,.74],[127.44,.73],[127.45,.68],[127.42,.64]],[[127.3,-.78],[127.29,-.8],[127.18,-.78],[127.16,-.76],[127.21,-.62],[127.26,-.62],[127.3,-.76],[127.3,-.78]],[[128.72,-3.55],[128.72,-3.59],[128.71,-3.6],[128.66,-3.59],[128.62,-3.59],[128.59,-3.51],[128.59,-3.49],[128.67,-3.52],[128.69,-3.52],[128.72,-3.55]],[[128.56,-3.59],[128.39,-3.64],[128.43,-3.54],[128.45,-3.51],[128.54,-3.54],[128.56,-3.59]],[[126.72,3.87],[126.72,3.83],[126.66,3.93],[126.64,4.04],[126.69,4],[126.74,3.92],[126.72,3.87]],[[126.85,3.77],[126.84,3.76],[126.8,3.78],[126.78,3.81],[126.78,3.84],[126.8,3.86],[126.86,3.81],[126.86,3.79],[126.85,3.77]],[[125.41,2.65],[125.4,2.63],[125.36,2.75],[125.39,2.81],[125.44,2.78],[125.45,2.76],[125.4,2.71],[125.41,2.65]],[[131.98,-7.2],[131.97,-7.25],[131.93,-7.23],[131.88,-7.17],[131.82,-7.16],[131.78,-7.14],[131.75,-7.12],[131.92,-7.1],[131.98,-7.2]],[[128.67,-7.18],[128.63,-7.21],[128.55,-7.16],[128.53,-7.13],[128.58,-7.08],[128.63,-7.07],[128.66,-7.09],[128.67,-7.11],[128.67,-7.14],[128.67,-7.18]],[[127.42,-7.62],[127.36,-7.65],[127.38,-7.57],[127.37,-7.51],[127.48,-7.53],[127.47,-7.58],[127.46,-7.6],[127.42,-7.62]],[[123.42,-10.3],[123.33,-10.34],[123.33,-10.26],[123.4,-10.17],[123.46,-10.14],[123.49,-10.18],[123.5,-10.19],[123.41,-10.23],[123.42,-10.3]],[[121.88,-10.59],[121.83,-10.6],[121.73,-10.57],[121.7,-10.56],[121.8,-10.51],[121.87,-10.44],[121.95,-10.43],[122,-10.45],[121.98,-10.53],[121.88,-10.59]],[[134.82,-6.43],[134.8,-6.44],[134.8,-6.39],[134.82,-6.35],[134.85,-6.32],[134.89,-6.32],[134.82,-6.43]],[[134.67,-6.75],[134.66,-6.77],[134.63,-6.73],[134.63,-6.71],[134.66,-6.66],[134.7,-6.63],[134.74,-6.62],[134.73,-6.67],[134.67,-6.75]],[[127.99,-2.94],[127.94,-3.02],[127.85,-3.02],[127.83,-3],[127.94,-2.95],[127.99,-2.94]],[[127.61,-3.32],[127.63,-3.36],[127.53,-3.33],[127.49,-3.29],[127.53,-3.26],[127.55,-3.25],[127.61,-3.32]],[[122.98,-8.55],[122.95,-8.6],[122.89,-8.59],[122.9,-8.53],[122.93,-8.5],[123.01,-8.45],[123.09,-8.44],[123.14,-8.46],[123.15,-8.48],[123.03,-8.49],[122.98,-8.55]],[[103.05,11.29],[103.03,11.28],[103.01,11.28],[102.99,11.29],[103,11.35],[103.01,11.38],[103.04,11.39],[103.05,11.29]],[[103.32,10.72],[103.28,10.68],[103.22,10.76],[103.22,10.78],[103.32,10.72]],[[107.52,14.71],[107.54,14.65],[107.49,14.55],[107.45,14.45],[107.36,14.37],[107.36,14.31],[107.33,14.13],[107.34,14.07],[107.36,14.02],[107.39,13.99],[107.46,13.82],[107.53,13.65],[107.59,13.52],[107.61,13.44],[107.55,13.23],[107.48,13.03],[107.48,12.93],[107.51,12.84],[107.54,12.71],[107.56,12.54],[107.54,12.43],[107.51,12.36],[107.45,12.3],[107.39,12.26],[107.33,12.32],[107.28,12.32],[107.21,12.3],[107.16,12.28],[107.05,12.18],[106.93,12.08],[106.76,12.05],[106.7,11.98],[106.63,11.97],[106.5,11.97],[106.41,11.95],[106.42,11.91],[106.41,11.74],[106.41,11.7],[106.4,11.69],[106.34,11.68],[106.24,11.71],[106.1,11.75],[106.01,11.76],[105.96,11.68],[105.93,11.65],[105.89,11.65],[105.85,11.64],[105.84,11.6],[105.84,11.56],[105.85,11.49],[105.86,11.37],[105.86,11.29],[105.89,11.24],[106.1,11.08],[106.16,11.04],[106.17,11.01],[106.13,10.92],[106.16,10.79],[106.1,10.8],[105.99,10.85],[105.94,10.89],[105.88,10.86],[105.85,10.86],[105.81,10.93],[105.76,10.99],[105.7,10.99],[105.58,10.97],[105.45,10.95],[105.41,10.95],[105.39,10.94],[105.31,10.85],[105.28,10.86],[105.16,10.9],[105.05,10.91],[105.02,10.89],[105.04,10.81],[105.06,10.73],[105.05,10.7],[104.98,10.66],[104.9,10.59],[104.85,10.53],[104.82,10.52],[104.69,10.52],[104.56,10.52],[104.51,10.46],[104.47,10.42],[104.43,10.41],[104.26,10.54],[103.94,10.59],[103.9,10.64],[103.87,10.66],[103.84,10.58],[103.66,10.51],[103.59,10.55],[103.53,10.6],[103.54,10.67],[103.59,10.72],[103.68,10.76],[103.72,10.89],[103.65,11.06],[103.6,11.11],[103.53,11.15],[103.47,11.08],[103.41,10.98],[103.35,10.92],[103.27,10.91],[103.15,10.91],[103.11,11.07],[103.09,11.21],[103.11,11.37],[103.13,11.46],[103.01,11.59],[103,11.71],[102.95,11.77],[102.93,11.74],[102.93,11.71],[102.92,11.73],[102.74,12.09],[102.71,12.26],[102.74,12.38],[102.76,12.43],[102.7,12.49],[102.63,12.57],[102.5,12.67],[102.49,12.83],[102.46,13.02],[102.42,13.08],[102.36,13.19],[102.33,13.29],[102.32,13.54],[102.34,13.56],[102.43,13.57],[102.55,13.59],[102.57,13.63],[102.54,13.66],[102.62,13.72],[102.73,13.84],[102.81,13.97],[102.87,14.05],[102.91,14.14],[103.03,14.25],[103.2,14.33],[103.31,14.35],[103.43,14.38],[103.55,14.42],[103.6,14.42],[103.74,14.37],[103.82,14.36],[103.9,14.36],[103.98,14.36],[104.05,14.36],[104.23,14.4],[104.41,14.37],[104.58,14.39],[104.78,14.43],[104.88,14.4],[104.97,14.37],[104.98,14.29],[105,14.25],[105.03,14.23],[105.07,14.23],[105.13,14.28],[105.17,14.34],[105.18,14.35],[105.19,14.32],[105.21,14.26],[105.25,14.2],[105.28,14.16],[105.35,14.11],[105.39,14.11],[105.53,14.16],[105.74,14.08],[105.76,14.05],[105.83,13.98],[105.9,13.92],[106.07,13.92],[106.12,14.05],[106.1,14.13],[106,14.26],[105.98,14.34],[106.01,14.36],[106.17,14.37],[106.19,14.39],[106.23,14.48],[106.27,14.47],[106.35,14.45],[106.45,14.52],[106.5,14.58],[106.53,14.55],[106.56,14.51],[106.6,14.48],[106.67,14.44],[106.74,14.39],[106.78,14.34],[106.82,14.31],[106.91,14.33],[106.94,14.33],[106.99,14.39],[107.03,14.43],[107.06,14.42],[107.11,14.42],[107.21,14.5],[107.26,14.57],[107.29,14.59],[107.38,14.56],[107.41,14.56],[107.47,14.66],[107.52,14.71]],[[100.12,20.32],[100,20.38],[99.95,20.42],[99.89,20.42],[99.83,20.38],[99.77,20.34],[99.72,20.33],[99.64,20.32],[99.53,20.34],[99.46,20.36],[99.45,20.35],[99.49,20.26],[99.5,20.19],[99.49,20.15],[99.45,20.12],[99.4,20.09],[99.34,20.08],[99.28,20.08],[99.2,20.12],[99.13,20.12],[99.07,20.1],[99.04,20.07],[99.02,20.04],[98.99,19.86],[98.96,19.8],[98.92,19.77],[98.88,19.77],[98.82,19.78],[98.76,19.77],[98.49,19.7],[98.45,19.69],[98.37,19.69],[98.29,19.69],[98.24,19.69],[98.11,19.76],[98.05,19.77],[98.02,19.75],[97.99,19.65],[97.92,19.59],[97.82,19.46],[97.79,19.27],[97.8,19.13],[97.71,19],[97.71,18.93],[97.75,18.62],[97.75,18.59],[97.73,18.57],[97.67,18.56],[97.58,18.53],[97.52,18.5],[97.48,18.49],[97.4,18.52],[97.37,18.52],[97.38,18.49],[97.45,18.36],[97.52,18.3],[97.6,18.3],[97.63,18.29],[97.62,18.26],[97.65,18.17],[97.72,18.04],[97.74,17.94],[97.7,17.83],[97.71,17.8],[97.73,17.78],[97.79,17.68],[97.93,17.53],[98.06,17.37],[98.17,17.24],[98.26,17.15],[98.44,16.98],[98.47,16.9],[98.48,16.73],[98.52,16.64],[98.56,16.57],[98.59,16.51],[98.66,16.33],[98.69,16.31],[98.84,16.42],[98.87,16.39],[98.89,16.35],[98.89,16.3],[98.87,16.24],[98.82,16.18],[98.59,16.05],[98.57,15.94],[98.56,15.77],[98.55,15.56],[98.57,15.4],[98.56,15.37],[98.54,15.35],[98.45,15.36],[98.33,15.28],[98.29,15.27],[98.23,15.24],[98.19,15.2],[98.18,15.15],[98.2,14.98],[98.25,14.81],[98.33,14.7],[98.4,14.6],[98.5,14.47],[98.57,14.36],[98.72,14.24],[98.93,14.05],[99.01,13.95],[99.09,13.82],[99.14,13.72],[99.16,13.58],[99.17,13.5],[99.18,13.23],[99.14,13.17],[99.11,13.1],[99.12,13.03],[99.17,12.96],[99.17,12.88],[99.22,12.74],[99.3,12.65],[99.37,12.59],[99.41,12.55],[99.39,12.47],[99.42,12.39],[99.43,12.31],[99.46,12.19],[99.52,12.09],[99.61,11.78],[99.61,11.75],[99.57,11.69],[99.52,11.63],[99.48,11.61],[99.44,11.55],[99.36,11.39],[99.19,11.11],[99.03,10.92],[98.89,10.79],[98.79,10.71],[98.76,10.66],[98.76,10.62],[98.78,10.56],[98.77,10.43],[98.75,10.35],[98.72,10.27],[98.7,10.19],[98.66,10.18],[98.56,10.03],[98.52,10.11],[98.5,10.18],[98.52,10.35],[98.46,10.68],[98.5,10.72],[98.54,10.74],[98.6,10.86],[98.68,10.99],[98.68,11.13],[98.74,11.24],[98.73,11.33],[98.73,11.44],[98.75,11.52],[98.74,11.59],[98.79,11.67],[98.88,11.72],[98.84,11.74],[98.8,11.78],[98.69,11.72],[98.64,11.74],[98.62,11.8],[98.64,11.87],[98.64,11.91],[98.69,11.96],[98.69,12.05],[98.66,12.13],[98.7,12.23],[98.63,12.23],[98.6,12.25],[98.62,12.3],[98.68,12.35],[98.62,12.44],[98.66,12.54],[98.66,12.66],[98.64,12.77],[98.64,12.85],[98.6,12.99],[98.58,13.16],[98.49,13.29],[98.42,13.48],[98.25,13.73],[98.25,13.84],[98.24,13.93],[98.2,13.98],[98.15,13.65],[98.11,13.71],[98.1,13.9],[98.07,13.99],[98.1,14.16],[98,14.34],[97.98,14.46],[97.91,14.65],[97.93,14.7],[98.02,14.65],[97.94,14.76],[97.87,14.74],[97.81,14.86],[97.8,15.18],[97.74,15.31],[97.77,15.43],[97.71,15.88],[97.58,16.02],[97.61,16.14],[97.64,16.25],[97.63,16.46],[97.66,16.52],[97.73,16.57],[97.67,16.55],[97.62,16.54],[97.51,16.53],[97.38,16.52],[97.33,16.67],[97.27,16.74],[97.21,16.89],[97.18,17.06],[97.2,17.1],[97.1,17.16],[97.07,17.21],[96.97,17.32],[96.85,17.4],[96.88,17.34],[96.91,17.3],[96.85,17.2],[96.91,17.03],[96.86,16.92],[96.81,16.78],[96.77,16.71],[96.62,16.56],[96.51,16.51],[96.43,16.5],[96.36,16.52],[96.28,16.6],[96.26,16.66],[96.25,16.77],[96.22,16.78],[96.19,16.77],[96.24,16.63],[96.24,16.57],[96.32,16.44],[96.29,16.41],[96.14,16.34],[96.08,16.35],[96.04,16.34],[96.03,16.28],[96.01,16.25],[95.76,16.17],[95.71,16.07],[95.68,15.98],[95.56,15.84],[95.39,15.72],[95.35,15.73],[95.3,15.76],[95.31,15.88],[95.36,15.99],[95.35,16.1],[95.33,16.03],[95.23,15.88],[95.18,15.83],[95.08,15.84],[94.94,15.82],[94.89,15.98],[94.89,16.04],[94.88,16.09],[94.9,16.14],[94.89,16.18],[94.86,16.1],[94.85,16.03],[94.8,15.97],[94.66,15.9],[94.66,15.99],[94.65,16.06],[94.68,16.13],[94.68,16.24],[94.72,16.4],[94.72,16.45],[94.7,16.51],[94.68,16.43],[94.67,16.34],[94.64,16.31],[94.59,16.29],[94.5,16.19],[94.44,16.09],[94.3,16.01],[94.22,16.02],[94.21,16.13],[94.27,16.52],[94.33,16.57],[94.35,16.64],[94.4,16.87],[94.45,16.95],[94.47,17.14],[94.49,17.17],[94.56,17.31],[94.59,17.57],[94.56,17.7],[94.49,17.82],[94.43,18.2],[94.27,18.51],[94.25,18.61],[94.17,18.73],[94.25,18.74],[94.09,18.85],[94.07,18.89],[94.04,19.15],[94.04,19.29],[94.02,19.27],[94,19.18],[93.94,19.15],[93.97,19],[93.96,18.96],[93.93,18.9],[93.8,18.96],[93.71,19.03],[93.6,19.19],[93.49,19.37],[93.53,19.4],[93.58,19.4],[93.73,19.27],[93.82,19.24],[93.89,19.27],[93.96,19.33],[94,19.44],[93.96,19.48],[93.89,19.5],[93.84,19.53],[93.77,19.61],[93.76,19.65],[93.74,19.7],[93.67,19.73],[93.61,19.78],[93.66,19.85],[93.71,19.91],[93.58,19.91],[93.44,20.01],[93.41,20.04],[93.36,20.06],[93.25,20.07],[93.16,20.04],[93.2,19.9],[93.19,19.85],[93.13,19.86],[93,20.07],[93.04,20.13],[93.1,20.18],[93.07,20.19],[93.02,20.19],[93.07,20.38],[93.04,20.41],[93.02,20.35],[92.99,20.29],[92.88,20.15],[92.83,20.18],[92.79,20.21],[92.84,20.28],[92.87,20.3],[92.89,20.34],[92.85,20.41],[92.79,20.47],[92.74,20.56],[92.71,20.56],[92.73,20.45],[92.72,20.3],[92.61,20.47],[92.38,20.72],[92.32,20.79],[92.31,20.86],[92.29,20.93],[92.27,21],[92.26,21.06],[92.21,21.11],[92.19,21.2],[92.18,21.29],[92.21,21.36],[92.28,21.43],[92.33,21.44],[92.37,21.41],[92.47,21.36],[92.54,21.32],[92.57,21.26],[92.6,21.27],[92.63,21.31],[92.63,21.35],[92.59,21.47],[92.58,21.61],[92.58,21.94],[92.57,21.98],[92.63,22.01],[92.65,22.05],[92.67,22.11],[92.69,22.13],[92.72,22.13],[92.77,22.1],[92.85,22.01],[92.91,21.99],[92.96,22],[93.02,22.15],[93.04,22.18],[93.07,22.21],[93.12,22.21],[93.15,22.23],[93.16,22.29],[93.16,22.36],[93.11,22.55],[93.09,22.63],[93.08,22.72],[93.11,22.81],[93.16,22.91],[93.15,23],[93.16,23.03],[93.2,23.04],[93.25,23.02],[93.31,23.03],[93.35,23.08],[93.37,23.13],[93.39,23.34],[93.41,23.53],[93.41,23.68],[93.37,23.77],[93.31,24.02],[93.33,24.06],[93.36,24.07],[93.45,23.99],[93.49,23.97],[93.56,23.99],[93.63,24.01],[93.68,24.01],[93.76,23.98],[93.86,23.94],[94.01,23.9],[94.07,23.87],[94.13,23.88],[94.17,23.97],[94.22,24.11],[94.29,24.32],[94.38,24.47],[94.4,24.51],[94.49,24.64],[94.58,24.77],[94.66,24.93],[94.71,25.05],[94.7,25.1],[94.68,25.14],[94.62,25.16],[94.57,25.19],[94.55,25.22],[94.55,25.24],[94.58,25.32],[94.62,25.41],[94.67,25.46],[94.79,25.52],[94.86,25.6],[94.95,25.7],[94.99,25.77],[95.02,25.91],[95.04,25.94],[95.09,25.99],[95.13,26.04],[95.13,26.07],[95.11,26.09],[95.07,26.19],[95.05,26.35],[95.06,26.47],[95.09,26.53],[95.13,26.6],[95.2,26.64],[95.31,26.67],[95.46,26.76],[95.74,26.95],[95.84,27.01],[95.91,27.05],[95.97,27.13],[96.06,27.22],[96.19,27.26],[96.27,27.28],[96.67,27.34],[96.73,27.33],[96.8,27.3],[96.88,27.18],[96.95,27.13],[97.04,27.1],[97.1,27.12],[97.1,27.16],[96.9,27.44],[96.88,27.51],[96.88,27.59],[96.9,27.64],[96.96,27.7],[97.05,27.76],[97.16,27.84],[97.23,27.89],[97.31,27.91],[97.34,27.94],[97.34,27.98],[97.34,28.03],[97.3,28.09],[97.31,28.16],[97.32,28.22],[97.36,28.25],[97.43,28.35],[97.48,28.43],[97.5,28.46],[97.54,28.51],[97.6,28.52],[97.66,28.5],[97.69,28.47],[97.73,28.41],[97.77,28.36],[97.82,28.36],[97.86,28.36],[97.89,28.36],[97.93,28.31],[98.02,28.21],[98.06,28.19],[98.1,28.14],[98.12,28.06],[98.13,27.97],[98.24,27.66],[98.27,27.6],[98.3,27.55],[98.35,27.54],[98.39,27.59],[98.41,27.64],[98.45,27.66],[98.5,27.65],[98.6,27.6],[98.65,27.57],[98.68,27.42],[98.68,27.25],[98.67,27.19],[98.72,27.04],[98.73,26.88],[98.74,26.79],[98.74,26.7],[98.73,26.58],[98.71,26.43],[98.67,26.3],[98.69,26.19],[98.66,26.14],[98.57,26.11],[98.56,26.07],[98.59,26],[98.65,25.92],[98.66,25.86],[98.63,25.83],[98.56,25.82],[98.47,25.79],[98.4,25.68],[98.33,25.59],[98.3,25.57],[98.17,25.59],[98.14,25.57],[98.1,25.42],[98.06,25.35],[98.01,25.29],[97.96,25.26],[97.92,25.24],[97.82,25.25],[97.77,25.16],[97.71,25.03],[97.71,24.97],[97.74,24.87],[97.72,24.84],[97.67,24.82],[97.58,24.77],[97.53,24.63],[97.53,24.49],[97.56,24.44],[97.62,24.42],[97.67,24.38],[97.67,24.31],[97.71,24.23],[97.69,24.13],[97.57,23.99],[97.56,23.91],[97.63,23.89],[97.69,23.9],[97.76,23.93],[97.84,23.99],[98.02,24.07],[98.21,24.11],[98.37,24.12],[98.5,24.12],[98.56,24.1],[98.58,24.07],[98.76,24.12],[98.8,24.12],[98.84,24.12],[98.83,24.09],[98.7,23.96],[98.68,23.91],[98.68,23.84],[98.74,23.78],[98.79,23.74],[98.83,23.62],[98.8,23.52],[98.82,23.48],[98.86,23.44],[98.88,23.38],[98.89,23.31],[98.86,23.19],[99.06,23.13],[99.22,23.1],[99.34,23.1],[99.42,23.07],[99.46,23.05],[99.5,23],[99.51,22.96],[99.47,22.93],[99.39,22.83],[99.34,22.69],[99.34,22.59],[99.34,22.5],[99.24,22.37],[99.21,22.28],[99.17,22.19],[99.17,22.15],[99.19,22.13],[99.23,22.11],[99.3,22.1],[99.39,22.11],[99.59,22.09],[99.83,22.05],[99.92,22.03],[99.95,21.99],[99.94,21.9],[99.93,21.82],[99.94,21.76],[99.98,21.7],[100.04,21.68],[100.1,21.66],[100.11,21.62],[100.09,21.56],[100.12,21.51],[100.15,21.48],[100.21,21.46],[100.35,21.5],[100.45,21.48],[100.53,21.46],[100.6,21.47],[100.68,21.5],[100.84,21.66],[101.02,21.74],[101.08,21.76],[101.12,21.75],[101.13,21.74],[101.13,21.71],[101.15,21.58],[101.14,21.57],[101.08,21.47],[100.93,21.37],[100.82,21.31],[100.76,21.31],[100.7,21.25],[100.66,21.13],[100.61,21.06],[100.57,21.04],[100.54,20.99],[100.52,20.92],[100.55,20.88],[100.62,20.88],[100.62,20.86],[100.57,20.83],[100.49,20.81],[100.41,20.82],[100.33,20.8],[100.25,20.73],[100.18,20.59],[100.13,20.37],[100.12,20.32]],[[98.21,10.95],[98.29,10.78],[98.28,10.75],[98.27,10.74],[98.25,10.74],[98.22,10.84],[98.16,10.9],[98.08,10.89],[98.14,10.96],[98.17,10.98],[98.21,10.95]],[[98.18,9.93],[98.13,9.88],[98.12,9.88],[98.14,9.97],[98.22,10.05],[98.29,10.05],[98.28,10.01],[98.23,9.95],[98.18,9.93]],[[98.22,11.48],[98.22,11.46],[98.21,11.46],[98.19,11.47],[98.2,11.57],[98.24,11.64],[98.28,11.76],[98.3,11.78],[98.31,11.72],[98.28,11.59],[98.26,11.52],[98.22,11.48]],[[98.52,11.91],[98.47,11.9],[98.45,12.06],[98.47,12.08],[98.53,12.01],[98.61,11.96],[98.58,11.93],[98.52,11.91]],[[98.55,11.74],[98.53,11.54],[98.46,11.57],[98.43,11.57],[98.4,11.68],[98.4,11.71],[98.38,11.79],[98.52,11.8],[98.55,11.74]],[[98.41,12.6],[98.44,12.57],[98.47,12.57],[98.46,12.47],[98.38,12.35],[98.33,12.34],[98.31,12.34],[98.33,12.51],[98.3,12.61],[98.31,12.68],[98.4,12.65],[98.41,12.6]],[[98.14,12.15],[98.13,12.14],[98.11,12.15],[98.08,12.16],[98.04,12.23],[98.06,12.28],[98.07,12.29],[98.1,12.29],[98.12,12.28],[98.13,12.26],[98.12,12.22],[98.12,12.19],[98.14,12.15]],[[94.48,15.95],[94.41,15.85],[94.39,15.99],[94.49,16.08],[94.55,16.15],[94.6,16.21],[94.62,16.14],[94.57,16.02],[94.48,15.95]],[[97.57,16.25],[97.54,16.24],[97.48,16.31],[97.47,16.46],[97.52,16.5],[97.54,16.51],[97.58,16.49],[97.59,16.46],[97.6,16.43],[97.59,16.4],[97.57,16.25]],[[93.69,18.68],[93.67,18.68],[93.57,18.76],[93.49,18.87],[93.62,18.89],[93.74,18.87],[93.75,18.81],[93.72,18.72],[93.69,18.68]],[[93.49,19.89],[93.51,19.75],[93.44,19.81],[93.42,19.88],[93.41,19.95],[93.49,19.89]],[[93.71,19.56],[93.83,19.48],[93.87,19.48],[93.95,19.43],[93.95,19.41],[93.93,19.37],[93.9,19.33],[93.82,19.3],[93.76,19.33],[93.73,19.42],[93.66,19.46],[93.64,19.5],[93.69,19.54],[93.71,19.56]],[[98.54,10.96],[98.52,10.96],[98.5,10.96],[98.48,10.98],[98.53,11.09],[98.54,10.96]],[[98.08,11.69],[98.08,11.64],[98.02,11.7],[98.01,11.86],[98.06,11.76],[98.08,11.73],[98.08,11.69]],[[98.07,12.39],[98.06,12.35],[98,12.28],[97.95,12.32],[97.94,12.35],[97.99,12.39],[98.05,12.39],[98.06,12.4],[98.07,12.39]],[[98.32,13.1],[98.31,12.93],[98.26,13.01],[98.25,13.1],[98.25,13.19],[98.27,13.2],[98.27,13.19],[98.3,13.15],[98.32,13.1]],[[94.8,15.82],[94.78,15.79],[94.74,15.81],[94.73,15.82],[94.83,15.93],[94.84,15.89],[94.8,15.82]],[[93.01,19.92],[93.02,19.83],[92.98,19.87],[92.91,20],[92.91,20.09],[92.96,20.05],[93.01,19.92]],[[115.14,4.9],[115.17,4.87],[115.23,4.75],[115.27,4.63],[115.28,4.46],[115.33,4.38],[115.32,4.37],[115.29,4.35],[115.25,4.35],[115.17,4.36],[115.11,4.39],[115.05,4.58],[115.03,4.69],[115.03,4.82],[115.03,4.9],[115.14,4.9]],[[115.03,4.9],[114.94,4.86],[114.86,4.8],[114.78,4.75],[114.75,4.72],[114.76,4.67],[114.78,4.55],[114.79,4.46],[114.82,4.43],[114.84,4.39],[114.83,4.35],[114.78,4.28],[114.81,4.27],[114.78,4.17],[114.73,4.1],[114.65,4.04],[114.61,4.02],[114.57,4.05],[114.51,4.11],[114.45,4.2],[114.42,4.26],[114.32,4.26],[114.29,4.3],[114.29,4.35],[114.26,4.41],[114.22,4.48],[114.17,4.53],[114.1,4.57],[114.06,4.59],[114.18,4.59],[114.3,4.61],[114.42,4.66],[114.54,4.72],[114.65,4.8],[114.74,4.88],[114.84,4.95],[115,5.02],[115.05,5.02],[115.05,4.96],[115.03,4.9]]],points:[[122.03,17.11],[104.13,-4.97],[106.45,-2.99],[103.73,18.52],[99.51,1.61],[112.25,-1.28],[99.45,17.32],[106.82,15.41],[100.15,15.4],[138.5,-5.86],[139.92,-4.64],[111.66,1.65],[105.37,-4.59],[107.91,-6.31],[106.74,15.35],[102.38,19.9],[139.35,-4.77],[110.97,-1.49],[99.27,21.03],[117.77,5.69],[95.44,20.76],[98.93,16.71],[105.54,14.02],[106.39,10.28],[125.37,-9.23],[134.18,-6.62],[99.62,13.97],[93.29,21.12],[128.03,-3.07],[113.36,-3],[122.89,7.71],[139.66,-4.01],[103.86,-4.78],[97.45,18.69],[124.46,7.35],[96.98,4.93],[121.77,-3.29],[123.3,13.18],[119,-9.54],[119.52,-2.15],[100.33,19.48],[99.14,2.82],[117.37,4.76],[121.66,14.37],[122.59,-3.98],[122.63,7.89],[117.05,6.68],[108.18,13.51],[96.17,23.18],[112.27,-.01],[104.97,18.26],[112.4,-2.51],[95.61,23.73],[101.74,3.97],[94.62,20.59],[101.31,15.62],[101.4,4.85],[103.3,19.74],[99.54,13.24],[105.27,13.29],[105.35,15.87],[138.79,-6.41],[95.13,21.87],[115.76,4.41],[114.31,-2.21],[100.53,18.12],[104.73,-3.19],[110.82,-7.02],[100.15,.6],[116.71,.7],[119.71,-9.38],[98.66,17.87],[120.66,17.97],[102.93,15.57],[105.31,14.87],[106.89,15.28],[125.91,-7.93],[115.2,4.04],[95.66,4.77],[124.67,.98],[106.26,20.27],[100.07,19.04],[103.66,19.06],[100.92,15.51],[102.28,16.53],[98.65,3.73],[103.11,14.42],[120.88,15.99],[113.64,-2.81],[102.66,22.28],[101.19,14.77],[96.86,17.18],[103.69,12.42],[107.57,-7.38],[99.23,23.07],[130.76,-3.55],[116.62,4.72],[92.62,21.54],[101.18,5.45],[102.13,4.1],[107.77,11.21],[103.98,18.43],[128.64,1.5],[107.95,10.82],[103.37,14.33],[116.14,4.29],[104.09,-3.07],[132.58,-.6],[107.85,13.18],[114.88,-8.26],[121.94,13.26],[106.64,11.53],[98,23.74],[113.77,-1.13],[105.7,16.73],[98.15,2.74],[116.33,3.55],[125.68,-1.89],[95.99,17.88],[110.11,.83],[97.77,18.92],[116.3,6.07],[106.96,16.61],[95.76,24.26],[107.12,-7.09],[103.99,-3.66],[140.1,-6.65],[95.91,26.02],[101.61,15.34],[124.66,7.1],[105.56,14.65],[121.95,.92],[102.09,4.9],[106.09,11.05],[112.51,.15],[99.92,13.18],[101.77,4.27],[111.28,.93],[96.33,21.58],[121.24,13.28],[120.63,15.3],[139.93,-5.96],[122.67,-4.13],[100.62,1.7],[97.51,23.29],[105.13,19.67],[115.89,1.66],[123.93,.77],[106.4,12.6],[101.4,18.49],[105.05,14.18],[108.6,15.5],[102.63,20.99],[120.83,16.39],[115.6,2.12],[96.54,21.83],[112.78,.46],[103.7,20.17],[111.85,-7.33],[103.36,-2.28],[106.69,12.07],[105.8,-4.04],[122.27,16.87],[102.01,6.01],[115.42,3.74],[138.6,-1.91],[125.75,9.42],[105.29,21.6],[128.66,-3.28],[114.57,4.01],[99.54,2.58],[133.24,-1.19],[116.47,-1.39],[106.54,17.2],[103.48,1.61],[98.25,17.47],[123.91,.78],[108.04,-6.5],[134.23,-3.91],[107.2,14.39],[139.34,-4.2],[104.68,14.16],[128.5,-3.1],[99.91,20.78],[116.28,5.16],[95.01,25.4],[125.38,8.94],[103.7,-3],[140.85,-8.5],[102.78,-3.68],[104.15,12.07],[127.77,.22],[100.25,7.9],[94.26,21.37],[107.86,15.69],[103.12,12.66],[115.28,-3.79],[124.79,-1.82],[137.22,-2.37],[101.94,4.91],[125.13,-9.36],[98.1,17.57],[105.2,14.4],[97.8,21.22],[101.38,13.25],[105.54,12.39],[115.34,-1.65],[124.95,10.85],[107.38,15.18],[138.27,-5.65],[96.66,18.54],[95.62,18.01],[105.86,-6.38],[124.13,-10.01],[106.21,14.14],[97.29,20.39],[100.27,1.9],[108.43,12.04],[103.55,-1.46],[133.47,-2.68],[100.06,16.57],[99.38,10.8],[100.68,-1.03],[99.23,19.15],[99.72,-2.27],[98.04,26.53],[115.15,3.53],[120.63,16.04],[119.19,-2.72],[115.61,4.84],[140.03,-5.86],[121.16,-3.15],[98.02,26.99],[114.75,-1.98],[116.41,1.87],[96.79,17.43],[139.97,-2.82],[97.34,27.45],[137.89,-1.93],[112.92,-1.29],[97.98,27.31],[101.19,19.22],[119.62,-1.45],[98,19.37],[112.75,-8.01],[96.93,21.65],[104.16,21.66],[94.92,23.45],[102.03,16.32],[116.46,3.65],[98.07,2.85],[105.28,11.97],[105.31,9.87],[119.5,-4.92],[116.75,-1.03],[108.34,11.73],[102.1,18.92],[97.42,20.89],[122.09,-2.84],[97.66,21.75],[119.93,-5.47],[95.31,22.64],[102.93,19.23],[128.45,-3.1],[102.76,13.45],[106.31,15.75],[115.68,1.66],[125.93,8.01],[102.91,4.1],[111.63,-7.55],[102.09,21.41],[103.25,17.74],[128.08,.49],[105.34,8.92],[105.1,-2.38],[106.69,21.71],[103.68,14.19],[102.46,.3],[101.37,18.78],[108.02,4.04],[99.41,11.09],[95.2,18.85],[105.01,21.8],[95.09,21.98],[98.91,21.23],[106.37,11.63],[100.86,19.33],[127.12,-3.32],[99.06,9.37],[113.65,-8.09],[100.7,4.39],[103.48,18.86],[102.56,16.9],[101.76,3.58],[105.68,12.27],[108.96,.92],[100.83,16.18],[93.21,21.56],[125.33,6.28],[100.97,17.74],[100.62,21.41],[100.54,20.5],[107.23,11.71],[103.16,17.72],[94.92,16.95],[102.68,13.77],[94.51,16.31],[95.04,24.54],[100.16,15.47],[118.95,5.32],[132.65,-.65],[107.93,16.07],[114.4,-.53],[132.41,-1.02],[105.17,13.99],[98.96,1.37],[100.2,2.15],[104.47,-3.82],[103.11,20.2],[106.47,-2.67],[123.79,10.65],[122.76,-5.25],[95.61,25.92],[113.79,3.48],[99.27,16.87],[122.22,-2.89],[109.94,-7.3],[114.75,3.77],[132.09,-1.1],[102.29,21.46],[102.75,20.63],[106.66,-7.26],[98.52,17.02],[102.36,21.15],[114.83,-2.12],[139.66,-3.6],[98.62,18.83],[101.98,18.95],[117.05,.85],[93.1,20.74],[96.89,4.04],[104.32,20.6],[98.79,17.33],[101.09,5.44],[96.89,23.04],[100.57,4.85],[117.55,1.63],[100.2,6.91],[110.72,-1.03],[100.73,18.08],[99.37,12.51],[116.77,5.97],[122.3,-4.12],[108.97,.55],[95.2,16.99],[106.5,21.41],[98.83,14.2],[103.03,-4.04],[106.14,-2.01],[102.36,19.89],[100.51,17.18],[98.13,3.91],[103.12,2.91],[138.98,-5.1],[99.39,14.94],[98.82,20.55],[98.87,-1.38],[102.1,16.61],[110.61,-7.77],[105.9,21.88],[116.22,-3.6],[101.58,-.81],[113.98,-.89],[102.75,-4.15],[103.42,15.65],[102.84,3.39],[113.42,1.97],[104.66,17.28],[122.04,-.93],[105.87,-6.35],[137.27,-3.12],[102,13.91],[105.35,18.4],[98.55,16.37],[102.23,3.05],[107.83,15.29],[97.26,21.21],[99.41,3.18],[110.9,-7.32],[95.04,21.23],[98.42,17.22],[99.15,10.52],[120.25,-9.98],[102.75,20.21],[114.96,-1.59],[105.55,20.97],[97.75,20.71],[109.03,13.48],[125.75,8.96],[139.87,-3.08],[98.82,10.32],[124.93,8],[106.45,21.52],[97.85,23.85],[128.05,.91],[101.04,18.84],[102.3,17.07],[124.43,-1.76],[111.67,-1.15],[116.74,4.57],[117.09,1.8],[139.34,-5.46],[115.41,-.94],[96.51,18.58],[101.44,4.56],[108.6,15.1],[107.42,10.81],[95.3,22.98],[140.47,-6.7],[102.01,1.14],[116.6,4.07],[99.1,14.63],[97.95,27.23],[114.97,1.62],[99.45,12.99],[106.69,10.37],[101.84,16.6],[139.23,-3.98],[119.95,-3.91],[136.98,-2.93],[100.13,15.11],[103.1,-4.06],[117.76,-8.18],[94.7,20.81],[92.46,20.77],[136.81,-2.22],[123.16,8.49],[106.15,-1.86],[103.22,4.73],[103.3,18.57],[125.59,9.14],[95.68,16.06],[101.72,15.52],[97.83,18.5],[93.84,22.23],[110.45,-2.84],[128.28,1.4],[106.84,11.14],[104.39,17.96],[97.6,17.93],[101.81,2.64],[106.02,14.6],[95.31,24.81],[111.24,.84],[103.29,-4.18],[121.64,-4.22],[122.02,-3.24],[140.61,-5.72],[97.82,16.43],[94.25,20.31],[105.84,14.39],[104.88,17.53],[132.57,-1.24],[101.75,18.1],[97.86,14.9],[111.07,.8],[101.13,3.68],[101.53,19.24],[93.87,23.13],[104.74,18.51],[101.44,4.99],[115.01,-1.71],[106.37,-6.56],[98.3,15.44],[120.05,15.09],[106.41,-6.92],[97.06,22.08],[116.39,.39],[97.79,3.96],[105.8,-4.74],[115.23,-8.3],[95.85,17.76],[100.46,.7],[105.75,13.67],[109.3,-7.13],[104.1,14.17],[99.99,21.22],[120.46,-1.26],[93.4,23.46],[101.98,13.23],[121.32,12.39],[101.06,15.79],[97.52,4.2],[103.55,.1],[133.85,-3.47],[105.12,23.14],[98.76,12.8],[98.08,23.47],[101.7,19.24],[138.19,-3.56],[99.49,14.1],[115.97,.07],[113.1,-.36],[121.7,16.15],[129.67,-7.85],[96.91,22.3],[101.84,15.07],[102.62,22.18],[102.39,12.98],[138.02,-4.34],[98.31,20.79],[102.29,.65],[131.58,-1.47],[120.6,-1.41],[112.27,-.84],[132.58,-1.85],[97.24,22.21],[126.84,-3.7],[99.08,10.88],[94.77,23.61],[102.1,21.5],[104.96,-5.42],[97.51,26.06],[107.11,13.98],[94.63,22.25],[96.07,25.92],[100.52,17.49],[111.65,-.81],[102.92,1.85],[103.24,19.96],[104.53,22.56],[98.67,19.5],[113.62,-8.26],[99.82,11.92],[111.92,-1.54],[97.42,26.99],[114.38,-2.24],[100.08,-.08],[97.51,19.65],[104.06,-4.58],[97.12,18.83],[104.47,1.07],[101.06,17.87],[140.39,-7.18],[99.71,8.03],[117.39,.71],[119.66,-5.18],[115.55,-3.73],[96.12,24.59],[103.36,2.83],[109.75,1.26],[121.38,-1.56],[110.06,-1.33],[104.44,13.5],[135.17,-4.01],[138.4,-4.99],[98.68,20.06],[100.18,7.2],[100.29,17.32],[97.47,18.52],[101.91,21.17],[120.31,-2.05],[112.14,-7.07],[101.25,-.83],[104.34,22.5],[138.61,-6.32],[115.8,-3.06],[116.77,3.27],[101.4,21.11],[123.43,.71],[94.22,19.86],[103.31,20.69],[102.5,16.26],[93.91,21.42],[138.64,-7.58],[98.6,22.47],[122.58,.95],[104.5,13.87],[94.54,21.3],[115.3,.06],[104.43,17.18],[106.37,20.64],[100.03,18.77],[99.24,10.63],[140.42,-6.89],[94.32,23.95],[110.54,-2.49],[98.15,26.74],[121.52,.8],[110.15,-1.79],[99.14,2.62],[94.67,19.76],[113.85,-3.32],[116.49,3.28],[104.79,11.87],[99.12,16.23],[114.46,3.91],[121.89,.66],[102.26,13.4],[130.48,-3.46],[122.76,-8.43],[111.74,.16],[97.81,1],[101.02,19.32],[97.3,19.4],[105.96,11.18],[109.1,-7.26],[123.02,10.82],[99.39,18.04],[112.31,-.21],[98.78,14.23],[100.92,-.54],[99.42,18.68],[116.44,1.48],[102.96,5.43],[134.55,-3.25],[95.6,5.07],[103.19,-4.48],[104.27,13.62],[104.59,22.56],[105.39,-2.03],[99.85,15.57],[100.88,14.48],[125.46,9.52],[96.32,17.06],[92.46,21.3],[107.49,11.77],[123.44,7.62],[102.09,19.92],[98.74,11.98],[102.74,5.32],[105.29,13.62],[125.17,11.73],[112.06,-6.94],[105.78,21.95],[110.37,-2.2],[100.95,13.77],[126.14,7.97],[123.15,9.09],[123.22,-.8],[138.77,-4.54],[101.94,12.99],[97.23,5.01],[107.26,11.78],[108.26,-7.12],[101.22,-1.14],[97.39,22.66],[105.23,9.92],[140.91,-3.73],[103.49,-1.29],[103.99,-5.26],[96.34,23.53],[104.53,22.49],[97.83,2.59],[104.64,20.67],[98.47,17.61],[103.6,12.95],[97.35,23.04],[113.5,-1.28],[111.5,-7.95],[102.56,16.37],[100.19,1.69],[104.19,19.33],[123.63,13.16],[116.09,2.16],[98.94,8.13],[98.37,17.16],[120.91,16.5],[104.61,-4.5],[137.7,-4.66],[101.82,18.05],[98.44,19.08],[94.93,24.1],[138.26,-8.28],[104.39,20.27],[114.71,.75],[122.04,-.94],[99.19,1.02],[101.75,15.24],[104.15,11.56],[94.83,25.05],[105.6,15.25],[98.62,19.6],[109.19,1.43],[115.64,-.35],[116.79,.13],[95.65,16.48],[103.3,2.4],[96.56,24.87],[100.14,21.1],[107.41,10.66],[103.4,.25],[103.5,-4.29],[132.52,-2.8],[95.77,24.8],[98.35,12.39],[123,7.98],[104.88,-3.48],[93.85,19.16],[104.19,15.3],[96.78,4.12],[98.82,12.36],[111.39,-2.14],[112.67,-7.24],[106.07,-6.47],[115.47,-3.62],[122.06,16.64],[114.56,4.33],[107.39,16.71],[102.09,20.52],[106.81,11.28],[124.79,6.63],[114.26,1.89],[97.73,2.56],[138.8,-7.7],[140.47,-2.52],[98.27,19.46],[110.42,-2.23],[99.32,8.36],[104.19,22.69],[104.15,21.76],[102.75,13.39],[104.44,12.59],[96.44,20.13],[119.62,-4.37],[95.83,26.44],[124.67,12.31],[94.88,24.63],[94.78,22.5],[99.23,8.55],[137.04,-2.79],[108.93,13.75],[97.82,19.83],[120.23,-3.48],[105.1,17.38],[102.31,19.01],[108.19,14.48],[121.96,-3.14],[112.58,-.18],[103.07,-.57],[101.54,1.97],[119.49,11.28],[99.66,8],[100.79,-.82],[96.54,3.86],[102.39,13.84],[111.65,-1.55],[110.2,-2.4],[121.08,14.42],[123.78,13.15],[99.79,17.35],[116.03,5.01],[107.15,11.12],[118.86,.98],[93.76,21.3],[99.99,7.51],[111.05,.39],[94.95,21.88],[92.62,20.62],[95.36,19.98],[94.49,20.08],[104.95,19.24],[97.71,18.05],[99.55,9.01],[106.95,13.76],[100.85,15.33],[110.69,-2.41],[117.32,4.47],[112.11,-1.18],[98.09,3.56],[123.15,7.85],[104.59,19.33],[138.31,-1.89],[113.03,2.75],[104.94,14.41],[94.86,24.42],[94.66,17.79],[111.19,-1.25],[117.56,3.76],[95.31,25.35],[106.51,-7.18],[92.88,21.21],[133.17,-3.54],[93.75,21.27],[107.97,10.9],[96.52,25.94],[103.73,11.03],[102.4,20.1],[138.7,-3.82],[100.89,16.18],[96.52,20.03],[102.11,14.84],[140.21,-7.98],[140.3,-4.28],[131.69,-1.04],[113.39,1.3],[103,1.02],[105.74,18.18],[99.04,14.73],[120.66,-9.96],[110.32,1.4],[139.61,-2.68],[98.88,13.83],[97.72,15.83],[108.68,11.93],[99.49,7.99],[116.73,6.91],[140.95,-8.71],[112.31,-7.8],[115.27,-.34],[120.92,.91],[102.51,5.06],[103.4,-3.83],[104.33,12.96],[95.85,19.23],[117.24,5.2],[140.7,-3.94],[97.35,25.99],[137.95,-2.88],[103.82,12.71],[99.06,19.31],[122.93,10.26],[95.99,19.9],[103.67,10.57],[101.69,17.63],[99.68,21.3],[103.56,20.52],[111.21,-6.84],[139.27,-5.63],[126.06,-8.55],[138.36,-3.38],[104.79,22.32],[138.95,-6.71],[105.87,-3.82],[102.11,19.09],[105.33,-3.3],[103.11,18.87],[113.78,1.51],[99.12,13.17],[111.93,-6.86],[116.26,4.23],[140.45,-3.97],[114.49,-2.22],[127.61,1.47],[97.36,20.87],[97.46,.98],[103.04,-1.91],[99.01,9.2],[107.23,11.08],[115.12,.97],[116.45,-.51],[94.76,22.19],[101.92,15.01],[114.4,4.56],[96.67,18.07],[108.31,15.16],[101.88,21.78],[98.78,14.94],[99.25,1.35],[102.04,3.41],[112.43,1.27],[108.63,11.49],[103.07,15.36],[102.98,-4.4],[132.17,-1.02],[115.66,-3.21],[113.92,-1.18],[100.11,.84],[93.57,22],[99.09,13.86],[95.28,25.59],[111.54,-.56],[99.05,18.67],[98.97,1.09],[103.15,11.8],[99.32,22.99],[113.58,-1.41],[122.72,9.41],[105.29,23.22],[122.83,-5.04],[103.74,20.3],[99.87,19.98],[132.61,-1.34],[109.92,.82],[104.51,14.88],[114.28,-3.3],[106.51,17.59],[114.37,4.09],[115.73,5.04],[97.14,21.31],[114.37,-7.17],[102.4,-1.2],[113.52,.53],[95.46,25.56],[132.93,-3.9],[102.83,22.28],[111.55,1.64],[138.82,-6.14],[124.85,8.48],[93.88,21.06],[96.05,22.36],[102.89,16.82],[139.9,-4.17],[114.16,-7.9],[102.21,19.67],[140.91,-8.13],[102.22,21.22],[120.41,15.06],[113.46,2.74],[105.81,9.53],[96.37,16.87],[105.92,22.78],[135.36,-3.85],[114.41,-8.69],[101.7,1.06],[122.85,.77],[111.44,-1.96],[107.46,10.56],[103.81,17.89],[96.24,26.2],[115.55,-2.92],[103.06,4.72],[116.46,-.93],[109.69,-.21],[101.53,5.05],[138.93,-4.41],[112.83,-2.54],[103.96,17.71],[98.25,18.5],[97.83,19.44],[94.57,18.15],[107.09,11.89],[126.44,-8.66],[100.67,16.41],[131.54,-1.22],[102.57,4.69],[95.67,17.65],[98.52,26.25],[105.36,20.17],[137.28,-3.57],[124.82,7.89],[98.24,18.45],[102.1,19.6],[106.26,22.14],[97.24,24.68],[140.47,-7.04],[96.61,5.18],[103.11,-1.59],[105.41,19.41],[100.61,.48],[94.85,20.41],[115.1,4.36],[105.33,9.97],[102.48,18.57],[99.23,2.24],[99.96,2.65],[95.48,17.75],[100.76,4.81],[93.59,23.51],[105.73,19.97],[112.7,-2.92],[125.5,5.82],[100.81,15.61],[107.11,-6.61],[98.69,18.51],[99.1,17.26],[104.36,11.73],[122.94,8.12],[97.81,21.2],[97.42,25.49],[97.21,27.62],[120.1,14.84],[107.97,15.58],[105.26,22.97],[101.34,-1.67],[96.25,27.25],[103.67,-1.16],[104.98,-4.59],[99.58,13.21],[125.68,8.05],[97.1,21.44],[104.85,11.1],[103.25,11.87],[138.78,-6.72],[103.98,21.6],[103.73,14.42],[103.25,-.28],[104.02,16.47],[100.89,1.02],[97.11,18.65],[93.12,21.47],[105.11,22.17],[97.21,22.97],[121.83,-2.66],[102.24,13.06],[108.09,11.7],[98.43,18.2],[95.33,25.37],[97.71,18.39],[95.19,21.69],[98.12,23.11],[114.58,.68],[106.92,11.53],[104.92,21.31],[97.37,26.66],[104.25,-2.89],[102.88,-1.52],[104.1,17.03],[125.35,12.02],[101.86,15.95],[140.65,-7.53],[99.06,17.85],[110.21,.99],[112.53,-2.39],[97.41,20.92],[98.47,-.47],[96.9,23.24],[137.34,-3.31],[114.66,-.28],[107.32,-5.99],[99.01,22.5],[98.36,21.58],[102.37,3.69],[128.5,1.45],[94.49,19.34],[119.49,-2.77],[119.6,-5.34],[116.76,1.16],[102.53,2.23],[100.56,13.61],[133.51,-1.1],[137.14,-4.34],[112.72,-1.25],[140.5,-4.9],[98.31,27.22],[120.45,15.79],[117.46,2.96],[131.59,-1.19],[102.71,5.52],[99.81,19.56],[101.32,17.22],[106.63,21],[122.71,-8.47],[111.02,-1.82],[97,27.7],[104.18,-2.49],[95.91,19.35],[101.91,5.49],[108.45,15.33],[105.01,14.28],[100.38,14.85],[115.03,.71],[103.16,-3.84],[100.71,1.07],[102.62,-1.74],[117.11,5.85],[112.69,.41],[105.37,17.33],[106.63,-6.65],[105.26,8.98],[99.24,11.81],[102.04,-1.07],[97.41,19.85],[104.89,20.31],[104.95,14.01],[94.43,16.82],[127.81,-1.46],[120.78,13.33],[93.38,21.27],[108.34,13.56],[103.52,16.58],[116.31,3.67],[114.24,-1.57],[94.48,22.69],[133.84,-2.29],[98.41,8.96],[110.05,-1.77],[106.29,10.39],[140.61,-3.96],[111.09,-1.69],[103.51,22.04],[124.69,12.05],[106.67,15.57],[112.26,2.9],[136.5,-3.44],[122.72,-4.88],[130.2,-3.32],[135.25,-4.24],[100.65,20.97],[106.93,15.7],[107.88,15.62],[104.84,11.65],[112.84,-2.72],[119.14,10.34],[99.04,17.59],[98.24,2.14],[138.23,-4.46],[105.69,-3.81],[100.55,15.81],[138.9,-5.45],[99.68,15.15],[109.28,.23],[97.24,25.51],[102.79,-2.54],[105.78,14.15],[114.51,3.88],[118.14,4.47],[115.34,-8.6],[101.8,15.79],[104.11,15.87],[99.95,8.33],[101.31,-2.33],[115.55,-1.57],[100.59,18.99],[109.66,1.72],[120.47,17.14],[120.43,-1.65],[125.81,8.95],[111.92,1.2],[139.02,-5.36],[106.68,15.61],[114.82,.93],[99.34,21.07],[119.88,.03],[98.33,18.3],[104.51,10.55],[103.05,2.3],[101.76,-1.36],[99.87,2.46],[117.31,2.83],[110.33,-7.15],[133.9,-3.58],[116.53,-8.48],[120.86,17.12],[102.91,19.39],[124.39,-9.97],[102.54,14.42],[99.99,19.97],[102.06,3.28],[95.26,5.53],[102.47,21.82],[119.82,-5.33],[135.14,-3.71],[126.18,8.26],[120,-4.71],[103.44,1.82],[103.36,17.1],[116.8,2.34],[135.07,-3.68],[123.44,.37],[116.07,5.15],[102.35,22.15],[102.53,19.95],[110.6,.49],[140.39,-5.04],[108.53,14.16],[116.53,1.48],[115.01,4.3],[119.97,5.12],[116.49,1],[99.97,19.85],[97.36,20.1],[120.83,13.2],[106.19,13.02],[95.84,22.5],[107.66,15.28],[107.55,-6.63],[139.82,-3.59],[135.74,-3.92],[103.43,14.09],[103.76,10.79],[96.65,26.67],[101.12,5.47],[104.98,19.98],[119.36,-2.71],[133.14,-3.06],[116.53,-1.44],[138.51,-4.89],[113.72,-1.94],[125.3,6.86],[131.62,-1.01],[139.98,-7.77],[114.52,1.24],[102.09,14.05],[95.55,17.17],[100.24,16.09],[101.77,.96],[106.59,16.02],[102.95,-2.81],[100.11,8.43],[104.29,-5.37],[111.22,.98],[121.83,-8.52],[106.34,10.73],[114.49,4.33],[104.4,16.15],[120.47,-5.86],[108.89,12.9],[112.01,.13],[111.04,-2.85],[104.93,19.5],[113.47,-.22],[110.21,-.58],[106.6,14.69],[121.11,.99],[99.95,15.91],[110.84,-1.91],[111.69,.22],[98.9,8.5],[105.59,18.61],[124.04,7.63],[115.57,1.43],[99.82,7.92],[121.56,14.81],[123.35,13.06],[102.76,5.62],[95.93,25.31],[133.86,-2.68],[130.16,-3.29],[105.83,13.68],[115.83,-2.36],[95.29,19.16],[103.2,4.03],[136.63,-1.74],[105.1,16.54],[105.86,11.61],[138.37,-3.11],[121.17,16.09],[102.07,13.53],[102.28,4.33],[96.22,18.49],[103.31,20.3],[97.68,3.12],[96.17,24.96],[103.22,21.66],[106.08,16.47],[100.68,19.89],[95.65,5.1],[108.15,15.11],[107.1,16.24],[114.1,2.75],[102.8,17.72],[93.48,20.65],[105.28,17.21],[126.47,-3.66],[110.93,-7.18],[95.33,25.24],[131.36,-7.42],[104.06,15.22],[96.04,25.82],[98.47,19.15],[117.59,2.53],[96.12,27.09],[118.74,-8.53],[102.83,12.03],[115.88,.89],[107.57,-6.59],[109.62,-7.26],[101.14,19.66],[124.56,9.94],[96.06,17.38],[100.96,15.88],[96.48,20.86],[114.46,-2.28],[101.08,14.64],[116.45,3.31],[114.94,3.73],[108.77,15.2],[115.94,2.57],[113.69,-2.58],[101.39,4.36],[102.74,16.29],[106.69,10.81],[139.56,-4.88],[133.91,-.77],[105.87,11.02],[122.85,-5.5],[122.95,9.94],[138.97,-2.67],[99.98,1.75],[117.37,.3],[108.57,15.51],[112.77,2.8],[100.58,13.98],[95.61,16.48],[97.73,19.54],[101.23,16.47],[93.5,22.4],[108.48,12.82],[108.46,13.55],[140.97,-4.05],[104.72,14.53],[95.3,23.98],[132.16,-1.78],[94.95,21.7],[103.9,-3.66],[132.78,-1.83],[111.82,-1.35],[107.43,14.68],[104.39,14.13],[113.34,.74],[111.05,-7.47],[93.7,23.68],[97,20.67],[100.33,16.16],[107.34,11.71],[100.93,1.32],[105.05,17.87],[99.06,18.78],[101.15,3.98],[96.87,21.12],[104.54,21.11],[110.14,.71],[94.59,16.94],[117.33,5.81],[112.87,1.62],[102.32,18.77],[97.81,22.74],[139.83,-2.59],[105.8,11.4],[137.1,-2.71],[102.73,-2.99],[112.29,.87],[111.16,-7.01],[97.67,22.76],[99.59,12.34],[100.36,-.28],[96.89,23.69],[103.38,15.19],[115.86,-.78],[124.91,12.41],[129.81,-7.85],[98.16,3.78],[116.92,5.16],[108.15,-2.84],[113.35,-7.99],[117.32,6.45],[124.8,6.12],[97.39,17.84],[99.52,8.54],[139.05,-7.73],[99.38,12.38],[103.76,22.42],[117.16,3.87],[105.65,-5.63],[104.75,14.15],[116.19,-.42],[113.97,-2.78],[99.21,18.36],[101.22,-1.28],[121.35,17.7],[99.63,16.27],[110.4,-1.24],[93.37,20.87],[113.19,1.72],[105.29,15.84],[120.53,14.47],[103.39,4.12],[114.62,-1.71],[111.17,.08],[122.18,16.71],[113.22,2.34],[102.53,2.64],[105.08,-5.42],[95.31,18.49],[96.85,26.97],[97.57,27.08],[107.25,12.78],[133.98,-2.49],[100.55,16],[139.72,-5.76],[94.9,23.04],[101.71,2.8],[104.82,18.52],[104.87,18.74],[129.35,-3.33],[101.02,17.1],[110.64,-7.29],[132.11,-2.86],[97.9,20.14],[115.16,2.55],[95.42,22.91],[137.4,-4.36],[96.14,25.97],[140.29,-5.12],[101.26,19.49],[106.36,15.32],[103.7,14.09],[95.74,26.94],[104.6,18.53],[128.22,-3.54],[96.11,23.48],[106.28,9.82],[114.72,4.25],[104.76,-4.16],[111.53,1.14],[123.91,11.87],[99.45,.66],[100.66,16.87],[137.36,-2.58],[100.78,16.29],[97.82,23.64],[99.65,12.01],[105.72,16.76],[109.97,.82],[104.74,-2.77],[113.71,-1.25],[138.65,-5.73],[98.59,20.43],[123.26,.54],[107.59,13.21],[102.23,13.11],[121.07,-3.03],[100.26,6.52],[106.45,20.83],[108.81,11.5],[116.32,6.16],[112.45,2.6],[98.56,3.02],[106.61,15.07],[117.55,.89],[104.51,10.76],[116.88,-.5],[109.48,1.24],[102.62,3.58],[138.73,-3.87],[103.16,20.29],[98.66,16.27],[102.73,4.99],[104.1,1.87],[115.89,2.24],[105.19,-3.06],[101.82,1.47],[97.78,18.56],[115.45,-2.51],[103.69,12.05],[102.41,16.4],[116.11,-.93],[98.63,16.38],[106.67,13.2],[123.23,8.24],[137.85,-4.21],[120.76,-8.42],[119.84,-4.94],[113.66,-3.23],[125.92,9.01],[119.55,-3.75],[94.45,16.81],[103.41,15.57],[107.08,12.44],[95.82,25.96],[111.77,-6.86],[104.78,11.56],[122.41,-4.36],[115.92,-2.09],[98.52,16.82],[104.58,10.6],[94.96,18.44],[101.8,3.77],[117.55,2.22],[101.99,5.37],[97.11,22.81],[97.39,25.63],[102.81,18.53],[99.24,14.25],[94.76,20.75],[99.75,2.12],[106.23,11.8],[140.49,-8.25],[109.52,-.25],[97.92,27.26],[95.61,18.09],[118.69,9.98],[103.68,14.87],[121.04,16.86],[100.5,15.19],[112.16,-1.04],[110.86,.7],[103.92,-2.7],[107.84,14.38],[120.82,16.16],[116.68,-.25],[119.91,-4.36],[101.58,18.96],[105.71,-4.1],[103.32,13.8],[101.23,15.14],[100.72,16.52],[103.74,17.12],[102.85,17.28],[103.16,-3.56],[97.14,18.93],[120.05,-.65],[100.42,2],[99.37,21.67],[121.04,-8.86],[107.08,16.08],[103.57,20.98],[96.44,22.06],[102.18,-1.66],[94.24,22.1],[137.5,-4.85],[101.5,20.74],[97.62,23.75],[116.3,4.02],[108.45,13.89],[121.66,14.72],[121.07,17.68],[97.43,24.76],[125.44,8.19],[136.23,-2.98],[106.53,16.03],[117.9,.83],[99.29,11.3],[101.59,-2.6],[107.16,11.51],[106.36,-6.82],[104.97,8.76],[104.64,19.35],[137.81,-2.45],[122.49,.57],[96.62,4.06],[116.76,3.57],[124.57,6.73],[120.97,13],[94.82,16.34],[106.16,10.02],[135.15,-3.94],[105.38,17.38],[98.57,16.93],[120.5,-2.39],[97.44,19.95],[120.15,-5.47],[133.43,-3.45],[108.17,15.58],[102.37,17.82],[110.96,-3.02],[131.48,-7.69],[100.83,4.5],[111.82,-8.15],[103.83,2.06],[104.25,18.36],[121.26,15.9],[114.27,.55],[97.92,17.36],[119.95,-.89],[105.72,9.41],[116.05,-1.28],[102.04,14.55],[133.89,-3.36],[103.85,-1.83],[104.16,-4.63],[102.08,.32],[102.06,22.16],[135.53,-.76],[96.41,4.6],[115.9,2.19],[138.23,-5.04],[136.31,-4.01],[96.66,22.71],[120.2,-9.67],[94.89,18.12],[101.09,1.48],[100.72,16.52],[107.66,11.54],[111.86,-7.2],[97.45,19.14],[96.66,21.57],[103.65,1.69],[102.22,21.7],[109.74,-7.53],[100.04,20.06],[110.89,1.51],[105.62,19.22],[107.79,-7.66],[101.78,18.98],[114.94,-1.96],[110.41,.59],[113.72,-.11],[100.75,19.14],[105.63,9.32],[100.3,6.99],[111.95,1.94],[103.42,3.28],[119.58,-3.03],[140.41,-6.97],[118.61,9.69],[105.25,11.06],[140.09,-6.78],[97.2,23.71],[105.92,11.65],[116.53,5.83],[98.42,3.79],[102.1,18.64],[111.35,-2.35],[96.69,4.09],[100.43,17.88],[112.29,1.05],[107.12,21.32],[107.31,10.53],[99.02,18.71],[124.09,-9.51],[105.8,21.36],[124.96,6.28],[98.72,14.93],[98.44,-.42],[110.71,-.68],[102.38,21.68],[102.23,19.41],[106.43,21.12],[123.37,10.68],[111.92,2.58],[99.72,17.12],[122.56,-1.1],[107.85,14.36],[103.43,-1.95],[103.76,21.71],[103.21,3.14],[101.4,15.3],[103.25,19.82],[102.51,22.55],[105.28,11.68],[93.82,23.04],[97.26,23.87],[102.45,4],[125.16,8.63],[93.89,20.24],[125.74,7.9],[105.9,16.22],[140.33,-8.29],[108.21,-7.49],[103.9,21.28],[106.62,16.22],[95.84,20.41],[97.38,22.34],[103.76,14.49],[93.82,23.7],[133.66,-1.31],[121.04,12.97],[102.21,17.84],[101.47,5.31],[100.89,4.1],[111.64,1.14],[103.75,21.65],[112.76,-1.47],[108.09,11.99],[138.92,-2.43],[95.3,24.7],[134.27,-3.01],[100.92,2.04],[102.67,-1.08],[107.2,-6.11],[101.56,3.55],[96,23.03],[99.04,1.72],[119.97,-.33],[99.29,20.56],[95.38,20.54],[102.68,16.06],[104.8,-5.16],[120.58,18.02],[104.05,10.89],[132.57,-1.56],[111.4,-6.72],[115.37,2.53],[95.67,17.68],[117.46,.5],[100.45,15.68],[114.91,-8.43],[106.93,-7.18],[96.66,16.97],[99.18,9.09],[104.6,-4.95],[114.12,2.75],[103.89,-1.81],[102.35,-2.49],[119.67,-2.48],[96.2,19.84],[105.56,20.71],[94.34,22.27],[121.63,-.85],[105.63,21.35],[120.18,-5.24],[114.3,3.16],[119.58,-2.78],[105.7,10.51],[100.62,19.13],[114.43,.1],[114.71,-3.04],[137.14,-3.81],[125.23,6.87],[103.13,14.79],[98.38,15.53],[105.88,20.36],[104.6,22.34],[140.49,-6.54],[116.11,5.79],[124.73,-9.68],[105.54,16.66],[113.02,1.16],[113.18,-1.25],[114.32,1.22],[116.02,2.86],[107.81,-6.63],[96.3,16.99],[109.68,-1.14],[124.46,.58],[116.19,4.38],[108.96,13.09],[118.98,-3.46],[99.08,10.86],[114.18,-2.05],[108.13,15.64],[116.65,2.67],[104.29,-1.29],[134.4,-2.99],[102.63,18.24],[116.67,-8.49],[106.57,-7.34],[96.88,4.1],[122.03,.66],[136.29,-2.77],[98.89,17.62],[113.38,-3.08],[140.77,-3.77],[100.36,18.29],[98.91,18.58],[115.75,-.92],[110.05,-7.37],[133.22,-1.65],[106.24,10.55],[104.57,15.7],[140.27,-3.04],[112.43,.99],[106.49,16.39],[104.79,12.34],[98.79,17.61],[96.39,24.34],[137.73,-1.8],[95.39,19.51],[124.15,-9.97],[114.05,.8],[114.62,-8.36],[115.99,4.95],[104.14,-5.32],[104.48,13.03],[121.21,-3.42],[127.59,.49],[121.54,17.64],[97.36,16.65],[95.95,22.31],[110.99,-2.13],[137.94,-8.12],[113.24,-1.14],[100.28,13.98],[99.43,1.12],[119.99,-8.64],[115.3,-1.36],[116.24,-.18],[121.48,-3.25],[103.69,20.38],[98.4,14.09],[134.21,-3.82],[101.88,20.77],[106.1,22.18],[119.16,5.14],[114.49,-1.04],[98.46,15.9],[140.33,-3.79],[100.25,.8],[100.22,-.2],[99.66,19.3],[110.3,-2.21],[104.37,17.33],[101.49,12.67],[102.42,22.56],[102.59,20.96],[99.2,18.7],[103.45,2.73],[106.93,15.78],[104.44,14.29],[100.4,15.74],[95.71,24.83],[110,1.37],[98.87,15.28],[116.32,-1.52],[102.06,.35],[95.48,17.5],[105.86,-1.65],[112.59,.97],[120.35,-4.74],[121.06,15.27],[121.18,15.63],[136.53,-3.1],[104.96,-4.9],[114.4,.44],[96.13,20.58],[96.85,22.68],[139.75,-6.62],[101.15,-1.21],[114.74,-1.87],[112.64,-3.31],[101.37,17.3],[104.2,11.78],[96.15,21.91],[97.76,21.3],[109.99,.72],[98.81,20.74],[139.05,-6.14],[132.25,-1.14],[106.67,-6.72],[102.05,3.96],[112.35,-.31],[139.42,-5.86],[95.75,24.47],[110.37,-2.24],[137.79,-8.37],[111.21,-7.28],[98.83,-1.35],[139.08,-7.49],[105.6,15.56],[122.89,14.04],[99.8,1.2],[99.43,.99],[116.25,2.74],[102.39,-.11],[107,-6.86],[115.75,2.32],[133.79,-1.22],[121.52,-3.67],[130.21,-3.54],[118.08,4.56],[106.03,10.34],[103.99,18.03],[107.18,15.32],[101.87,-2.57],[102.53,16.52],[135.48,-3.72],[135.87,-1.12],[106.28,22.16],[97.99,16.63],[120.05,.4],[99.91,14.48],[104.88,16.93],[107.63,16.41],[124.7,-9.67],[95.59,24.2],[135.54,-.69],[93.96,22.48],[111.71,-.36],[117.14,-.94],[97.24,25.53],[123.23,13.54],[96.07,17.23],[94.45,19.16],[107.21,-6.13],[117.12,6.9],[98.17,16.74],[101.99,14.65],[104.39,21.73],[122.88,9.98],[117.05,.81],[121.07,-8.57],[97.86,15.7],[131.97,-.88],[100.58,17.38],[123.76,8.55],[107,15.05],[107.94,14.3],[100.47,1.7],[100.05,16.39],[105.73,19.73],[105.06,17.44],[102.9,2.95],[120.16,-4.5],[100.02,21.26],[97.56,18.76],[94.58,21.37],[99.71,20.75],[110.67,-6.82],[114.43,-.56],[93.85,21.49],[113.89,.68],[97.04,4.87],[138.03,-3.13],[105.02,15.35],[127.9,1.6],[97.8,25.33],[100.29,15.54],[103.52,-.09],[123.47,13.8],[96.48,27.08],[108.42,14.91],[117.01,5.93],[98.77,20.65],[138.36,-1.83],[110.87,-7.83],[111.65,.74],[104.02,22.53],[96.46,20.61],[108.04,15.24],[129.88,-3.29],[114.1,1.91],[101.37,19.6],[105.7,-4.5],[108.01,15.18],[125.04,6.68],[115.13,-.7],[98.05,3.58],[105.4,15.86],[112.33,-7.52],[95.5,20.83],[100.07,.9],[98.33,23.94],[140.15,-2.96],[120.62,-8.27],[114.48,1.31],[100.27,16.92],[95.52,18.03],[98.67,27.22],[139.69,-6.05],[101.09,13.68],[99.24,12.66],[102.4,4.26],[101.64,4.93],[105.15,12.22],[105.98,15.23],[132.82,-1.2],[124.46,10.04],[121.36,-1.55],[119.58,-3.22],[101.02,.92],[101.11,14.98],[102.23,16.05],[136.85,-4.5],[106.46,14.73],[119.83,-9.84],[98.87,14.28],[99.46,17.89],[104.25,19.77],[132.88,-2.91],[93.24,20.72],[137.76,-8.38],[107.8,13.59],[130.27,-3.48],[120.14,14.83],[97.21,26.4],[102.04,.85],[105.89,14.19],[112.04,2.13],[103.38,17.88],[113.76,-2.75],[113.55,.17],[138.47,-3.52],[104.1,-4.8],[96.78,27.31],[114.03,2.02],[133.3,-3.43],[101.83,19.57],[110.99,-6.92],[112.32,-.43],[107.86,12.45],[105.26,21.04],[131.77,-1.04],[105.82,9.39],[123.15,-4.52],[121.45,14.77],[99.51,13.14],[100.66,6.12],[119.7,-9.73],[104.61,11.04],[122.2,7.85],[97.24,27.75],[102.38,17.31],[104.46,-3.85],[107.75,15.35],[104.78,10.96],[109.18,-6.96],[109.78,-.7],[140.42,-6.44],[126.32,8],[103.79,-4.02],[97.64,21.12],[104.39,18.15],[104.15,19.63],[107.73,14.33],[97.05,19.99],[103.21,11.5],[96.75,4.36],[115.31,1.47],[97.53,24.77],[101.24,18.81],[130.12,-1.91],[106.88,12.92],[103.25,-2.96],[104.65,20.32],[139.37,-3.73],[115.86,-2.23],[111.23,1.43],[104.38,16.63],[97.92,3.21],[105.45,17.87],[117.27,4.51],[121.28,.52],[122.6,13.35],[111.03,-1.05],[99.93,6.81],[103.16,2.21],[102.24,16.33],[111.03,-6.83],[139.2,-5.42],[119.75,-4.92],[111.11,-2.24],[95.85,4.52],[114.16,-.28],[111.34,-2.6],[103.46,17.41],[116.75,2.91],[99.59,13.71],[116.3,3.29],[121.66,17.49],[117.94,1.62],[104.17,11.59],[140.44,-3.34],[116.85,-1.1],[99,2.05],[108.26,-7.66],[116.19,3.78],[103.19,-.18],[99.98,8.21],[139.18,-2.2],[105.42,19.69],[128.54,-3.24],[100.56,14.49],[95.81,4.67],[94.53,21.67],[94.6,21.45],[140.92,-7.25],[101.86,12.74],[103.62,22.43],[134.36,-2.91],[113.06,-6.97],[115.04,4.35],[125.36,7.64],[113.34,-2.9],[105.14,18.69],[105.88,20.53],[108.42,13.99],[95.82,20.95],[115.49,1.65],[99.06,2.41],[111.02,-1.31],[111.32,-2.46],[139.18,-2.36],[98.41,3.31],[133.61,-3.3],[116.06,5.77],[101.66,13.82],[123.02,-8.48],[121.73,.66],[95.33,21.01],[101.69,18.91],[110.39,-1.23],[113.76,1.7],[104.45,12.53],[101.23,19.98],[115.18,.97],[112.44,.5],[104.65,19.39],[97.68,18.8],[112.04,-1.26],[96.2,26.99],[103.03,-1.75],[107.47,11.9],[139.44,-3.27],[110.6,.59],[117.39,-8.98],[104.37,22.31],[105.49,-3.01],[111.55,1.74],[98.49,3.56],[100.89,1.95],[105.94,20.78],[125.13,8.01],[115.68,-1.43],[114.82,-.93],[96.44,23.14],[108.63,12.55],[119.94,-4.74],[104.48,17.97],[115.42,-.47],[110.55,.09],[129.61,-2.83],[109.16,14.25],[133.75,-1.75],[102.12,16.98],[140.41,-5.5],[101.95,-2.94],[98.25,2.5],[119.71,-3.13],[119.49,-8.58],[97.01,26.13],[101.72,15.08],[122.72,.89],[101.97,.02],[105.73,18.57],[104.14,12.41],[123.01,9.49],[112.87,-3.07],[94.99,16.38],[102.3,15.77],[104.47,22.34],[122.17,17.52],[117.21,6.93],[124.53,11.67],[95.62,4.64],[104.38,-2.41],[114.19,-.25],[106.01,-6.55],[110.84,-7.91],[140.33,-8.26],[100.14,.43],[139.13,-3.69],[98.67,2.31],[97.43,19.17],[102.41,19.94],[120.3,-9.89],[112.23,-2.06],[101.73,14.5],[97.49,19.85],[138.83,-4.64],[95.45,23.14],[98.1,25.78],[139.3,-6.21],[97.21,21.04],[100.95,12.64],[103.28,3.34],[104.61,-2.29],[98.36,12.48],[107.06,13.97],[94.95,18.97],[102.41,3.47],[98.36,16.02],[103.72,20.63],[96.84,18.57],[95.12,22.07],[99.46,10.94],[104.97,12.88],[95.47,18.72],[102.46,15.73],[112.62,-1.89],[101.87,1.43],[101.53,20.33],[138.97,-2.64],[103.62,21.57],[109.51,-1.22],[105.33,16],[139.5,-7.54],[121.14,16.2],[122.04,13.3],[109.92,.65],[96.63,21.81],[116.9,4.77],[101.33,18.04],[120.36,13.43],[139.09,-7.47],[110.07,-1.31],[120.28,-10.19],[96.44,18.03],[94.87,17.85],[105.92,15.03],[104.92,-3.2],[98.83,13.28],[97.42,21.58],[94.46,23.74],[94.48,19.75],[99.23,15.03],[112.78,-.46],[113.5,2.66],[121.46,18.35],[116.5,1.36],[115.54,.24],[135.83,-.95],[101.06,13.6],[114.89,2.39],[104.7,15.62],[99.08,3.55],[113.17,1.71],[97.74,19.46],[113.81,-8.1],[113.76,2.86],[120.76,17.01],[105.15,20.03],[107.98,-6.66],[93.34,22.49],[93.92,20.89],[94.75,17.95],[92.32,20.9],[106.25,16.93],[134.09,-1.89],[128.51,1.07],[102.24,16.8],[105.16,15.61],[105.23,19.89],[121.21,13.41],[113.43,2.13],[103.75,15.99],[114.65,1.4],[100.3,2.33],[116.16,2.05],[103.53,12.84],[112.87,.3],[103.87,-1.03],[102.38,22.24],[103.24,15.13],[97.22,26.08],[106.07,22.2],[105.73,16.23],[100.6,1.22],[107.01,-6.92],[105.59,21.36],[96.97,21.44],[114.35,-.77],[94.97,23.4],[101.21,3.53],[100.47,21.1],[119.5,-2.55],[107.38,12.88],[121.06,18.34],[128.5,.49],[115.62,4.31],[100.25,.51],[106.26,20.84],[104.56,21.33],[96.11,16.85],[98.26,3.38],[98.72,14.78],[119.18,-2.34],[100.52,2.07],[115.48,-2.51],[116.94,-.27],[114.57,2],[116.98,-.65],[140.23,-3.8],[99.8,18.56],[97.7,4.03],[106.83,16.75],[119.98,.3],[115.11,1.98],[98.74,20],[117.39,5.83],[102.22,-1.1],[99.28,.29],[105.93,10.91],[104.63,21.09],[124.06,-9.36],[98.84,12.46],[104.25,20.85],[125.41,-1.86],[102.89,3.09],[115.99,-3.35],[138.25,-3.93],[111.41,1.37],[96.48,18.73],[104.13,-4.48],[115.69,4],[117.03,.66],[138.51,-3.62],[114.74,4.16],[99.57,9.22],[93.44,23.09],[97.52,5.17],[121.39,18.24],[104.48,-5.61],[97.89,16.83],[100.21,15],[103.85,21.58],[106.25,20.76],[105.08,22.27],[106.3,21.18],[102.38,15.37],[120.23,15.31],[103.58,-2.81],[134.06,-1.09],[98.16,22.75],[106.19,13.11],[121.19,.72],[98.79,19.54],[99.5,15.78],[97.15,3.47],[113.28,-.66],[97.38,17.56],[93.42,22.83],[117.92,1.02],[98.81,11.47],[99.82,18.25],[99.49,.72],[95.04,17.75],[100.59,1.13],[103.17,17.16],[117.09,2.92],[124.11,6.38],[138.93,-3.29],[100.03,15.49],[120,-1.53],[97.71,18.77],[104.3,13.14],[97.16,19.59],[99.96,18.82],[106.45,-7.19],[95.59,16.55],[100.71,15.66],[123.15,7.59],[96.91,23.92],[115.55,3.22],[103.69,-1.53],[104.89,21.65],[139.65,-7.73],[95.15,22.26],[121.52,1.05],[125.88,7.64],[98.19,22.59],[139.98,-5.08],[128.03,2.19],[138.69,-3.84],[117.59,2.79],[110.82,-7.52],[105.05,10.98],[140.73,-2.76],[136.33,-4.39],[104.84,17.47],[115.68,2.8],[96.95,17.95],[131.98,-1.05],[99.85,13.81],[117.87,1.17],[101.42,-1.41],[105.17,-4.13],[105.4,22.22],[108.83,13.22],[112.05,-2.35],[96.61,25.02],[99.8,15.23],[106.45,13.98],[108.63,12.27],[97.25,22],[104.39,-1.4],[96.82,25.69],[104.64,20.15],[99.21,18.89],[103.54,-.99],[112.59,-3.33],[98.83,-1.04],[108.09,11.51],[94.99,16.95],[140.24,-2.41],[125.81,9.25],[102.47,-3.89],[114.99,2.62],[96.49,19.59],[95.02,16.29],[101.01,-.62],[105.73,10.44],[133.64,-1.15],[136.68,-3.47],[106.28,12.85],[133.45,-1.48],[100.06,7.46],[100.84,16.13],[99.61,7.7],[120.56,16.7],[96.84,18.85],[97.9,26.6],[114.98,4.78],[100.06,19.86],[105.38,12.73],[95.03,18.37],[104.93,-2.46],[101.31,.04],[111.77,-7.88],[100.08,15.06],[122.2,10.99],[107.4,14.68],[101.68,3.57],[139.14,-2.13],[105.05,-4.83],[120.69,17.97],[114.61,-1.16],[106.33,11.54],[127.39,-.43],[112.4,-2.79],[96.6,19.71],[99.92,17.15],[127.59,.47],[95.13,19.48],[98.31,25.82],[95.26,17.07],[133.51,-3.33],[98.13,3.44],[115.11,4.25],[105.67,9.33],[122.59,13.4],[99.71,.8],[134.65,-5.49],[111.94,1.8],[95.83,20.92],[112.66,.5],[124.7,12.09],[139.08,-5.03],[112.87,-1.8],[115.36,-2.25],[110.94,-1.88],[137.57,-2.71],[117.04,6.07],[121.06,17.53],[105.86,15.86],[103.4,11.63],[97.92,17.71],[133.01,-.76],[121.46,13.86],[104.54,-4.42],[105.82,15.14],[101.09,-1.99],[136.86,-2.73],[140.29,-3.86],[97.9,23.46],[137.25,-4.39],[105.26,-2.07],[111.9,-1.39],[103.65,15.95],[99.21,14.16],[96.02,24.81],[105.88,21.76],[111.18,-6.96],[106.67,20.85],[111.9,-.54],[106.47,15.04],[98.1,25.53],[93.38,22.95],[105.36,21.33],[94.51,24.27],[103.38,-3.52],[105.32,19.54],[138.6,-2.53],[104.08,10.97],[96.61,23.24],[99.95,17.14],[138.42,-4.8],[135.93,-3.22],[103.33,-.84],[102.98,-1.6],[96.74,4.12],[117.02,8],[114.65,3.32],[114.16,1.87],[139.37,-5.95],[106.77,21.35],[94.97,24.68],[103.74,16.26],[113.6,-7.8],[116.16,-3.98],[116.91,3.8],[104.25,11.58],[105.73,22.27],[103.08,-1.55],[106.29,13.85],[100.15,8.28],[101.83,14.08],[104.49,-4.15],[98.07,20.13],[98.84,8.04],[100.86,-2.15],[103.62,-2.93],[97.25,17.39],[107.58,14.09],[134,-2.89],[117.84,8.93],[104.35,13.18],[97.83,18.54],[135.59,-.77],[96.71,4.63],[101.75,-.07],[102.49,15.07],[137.73,-3.79],[98.85,14.4],[121.91,-1.36],[106.92,12.76],[101.45,4.44],[97.23,23.94],[109.9,-.39],[120.19,-2.01],[107.18,13.15],[106.37,22.24],[115.4,-2.1],[102.73,-2.92],[134.77,-3.08],[96.07,23.03],[99.41,12.99],[122.14,-.87],[120.43,15.54]]};return Yl(bf);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
