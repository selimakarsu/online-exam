var Cufon=(function() {
varm:function(){return m.replace.apply(null,arguments);
}

;var x=m.DOM= {
ready:(function(){var C=false,E={loaded:1,complete:1;
}

if(!window.opera&&document.readyState) {
functionedocumentreadystated:setTimeout(arguments.callee,10);
}

else {
cf:B.push(F);
ifbc-1e:" ";
ifb1gcolor:B[1];
goffxoffyblurc:B[2];
h:G;
y:document.createElement(cufon);
yclassname:"cufon cufon-vml";
yalt:G;
q:document.createElement(cufoncanvas);
ifcprintablevarz:document.createElement(cufontext);
s:document.createElement(cufon);
sclassname:"cufon cufon-canvas";
n:document.createElement(canvas);
iftprintablevars:document.createElement(cufontext);
aapaddingleft:r;
aapaddingbottom:(m.convert(V.height)-1)+px;
abcode:d(m"+ab.d,);
xfillstyle:P.get(color);
}

;var n=m.CSS= {
size:function(C,B){this.value=parseFloat(C);
thisunit:String(C).match(/[a-z%]*$/)[0]||px;
thisconvert:function(D){return D/B*this.value;
}

,addClass:function(C,B) {
vard:C.className;
cclassname:D+(D&&" ")+B;
}

,color:j(function(C) {
varb:{;
}

;B.color=C.replace(/^rgba\((.*?),s*([\d.]+)\)/,function(E,D,F) {
bopacity:parseFloat(F);
}

),fontStretch:j(function(B) {
iftypeofb:=number){return B;
}

return {
ultra-condensed:.5em;
}

),getStyle:function(C) {
varb:document.defaultView;
}

,gradient:j(function(F) {
varg:{id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[];
}

,C=F.substr(F.indexOf(()).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E) {
d:C[E].split(=",).reverse();
}

),quotedList:j(function(E) {
vard:[],C=/s*((["'])([\s\S]*?[^\\])\2|[^,]+)s*/g,B;
whileb:C.exec(E)){D.push(B[3]||B[1]);
}

),recognizesMedia:j(function(G) {
vare:document.createElement(style),D,C,B;
etype:text/css;
emedia:G;
}

),removeClass:function(D,C) {
varb:RegExp((?:^|\\s+)"+C+"(?=\\s|$)","g);
dclassname:D.className.replace(B,"");
}

,supports:function(D,C) {
varb:document.createElement(span).style;
ifbd:==undefined){return false;
}

,textAlign:function(E,D,B,C) {
ifdgettextalign:=right){if(B>0){E=" "+E;
}

,textShadow:j(function(F) {
iff:=none){return null;
}

,B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)) {
ifb0:=,){E.push(G);
g:{;
}

),textTransform:(function() {
varb:{uppercase:function(C){return C.toUpperCase();
}

;return function(E,D) {
varc:B[D.get(textTransform)];
returncce:E;
}

)(),whiteSpace:(function() {
vard:{inline:1,inline-block:1,run-in:1;
}

;var C=/^s+/,B=/s+$/;return function(H,F,G,E) {
ifeifenodenametolowercase:=br){H=H.replace(C,"");
}

if(!G.previousSibling) {
h:H.replace(C,"");
}

if(!G.nextSibling) {
h:H.replace(B,"");
}

;n.ready=(function() {
varb:!n.recognizesMedia(all),E=false;
vard:[],H=function(){B=true;
k:D.shift();
}

try {
varq:M.cssRules,O;
ifqsearch:for(varL=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;
case3:if(!G(O.styleSheet,O.media.mediaText)){return false;
}

var L,K;for(K=0;L=I[K];++K) {
iflreltolowercase:=stylesheet&&!C(L)){return false;
}

x.ready(function() {
ifee:n.getStyle(document.body).isUsable();
}

)();function s(D) {
varc:this.face=D.face,B={\u0020:1,\u00a0:1,\u3000:1;
}

;this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C[units-per-em],10);this.family=C[font-family].toLowerCase();this.weight=C[font-weight];this.style=C[font-style]||normal;this.viewBox=(function() {
varf:C.bbox.split(/\s+/);
vare:{minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10);
}

)();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E) {
varo:this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;
whileh:L[++J]){M=O[H]||this.missingGlyph;
}

if(K) {
f-:G=K[H]||0;
pi-:G;
}

,B= {
oblique:italic,italic:oblique;
}

;this.add=function(D) {
cdstylecdstyle:{;
}

;this.get=function(H,I) {
varg:C[H]||C[B[H]]||C.normal||C.italic||C.oblique;
}

I= {
normal:400,bold:700;
}

var E= {
1:1,99:0;
}

[I%100],K=[],F,D;if(E===undefined) {
e:I>400;
}

if(I==500) {
i:400;
}

J=parseInt(J,10);if(!F||J<F) {
f:J;
}

if(!D||J>D) {
d:J;
}

if(I<F) {
i:F;
}

if(I>D) {
i:D;
}

K.sort(function(M,L) {
returnem:I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1;
}

function B(G) {
varf:G.relatedTarget;
}

function E(F) {
cthisftype:=mouseenter);
}

function C(F,G) {
settimeoutfunctionvarh:d.get(F).options;
mreplacefghhhhover:H,true);
}

this.attach=function(F) {
iffonmouseenter:==undefined){q(F,"mouseover",B);
}

function u() {
varc:[],D={;
}

;function B(H) {
vare:[],G;
forvarf:0;
g:H[F];
fef:C[D[G]];
}

this.add=function(F,E) {
df:C.push(E)-1;
}

;this.repeat=function() {
vare:arguments.length?B(arguments):C,F;
forvarg:0;
f:E[G++];
}

,B=0;function C(E) {
returnecufidecufid:0;
}

this.get=function(E) {
varf:C(E);
returndfdf:{;
}

;this.extend=function(E) {
forvarfineifkefdf:E[F];
}

;this.get=function(E) {
returnde:undefined?D[E]:B[E];
}

;this.getSize=function(F,E) {
returncfcf:new n.Size(this.get(F),E));
}

function v(C,B) {
vard:d.get(C);
}

;return function(D) {
ifkcdcd:B.apply(null,arguments);
}

function c(F,E) {
varb:n.quotedList(E.get("fontFamily").toLowerCase()),D;
forvarc:0;
d:B[C];
}

,B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E) {
forfinbifkbfcf:B[F];
}

function o(E,M,C,N,F,D) {
vark:document.createDocumentFragment(),H;
ifm:==){return K;
}

for(var J=0,G=I.length;J<G;++J) {
h:z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);
}

function l(D,M) {
varc:D.nodeName.toLowerCase();
}

for(G=D.firstChild;G;G=I) {
k:G.nodeType;
i:G.nextSibling;
ifek:=3){if(H){H.appendData(G.data);
}

if(H) {
h:null;
}

if(K==1) {
ifgfirstchildifgnodenametolowercase:=cufon){z[M.engine](F,null,B,M,G,D);
}

,w= {
autodetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true;
}

,ignore: {
applet:1pt;
}

)||g),separate:words,textless: {
dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1;
}

;var p= {
words:/s/.test(\u00a0)?/[^Su00a0]+/:/s+/,characters:,none:/^/;
}

var B=new s(D),C=B.family;if(!i[C]) {
ic:new f();
}

;m.replace=function(D,C,B) {
c:h(w,C);
}

if(C.hover) {
cforcehitarea:true;
}

if(typeof C.textShadow==string) {
ctextshadow:n.textShadow(C.textShadow);
}

if(typeof C.color==string&&/^-/.test(C.color)) {
ctextgradient:n.gradient(C.color);
}

if(D.nodeType||typeof D==string) {
d:[D];
}

n.ready(function() {
forvarf:0;
fvarg:D[F];
iftypeofg:=string){m.replace(C.selector(G),C,true);
}

;m.set=function(B,C) {
wb:C;
}

)();Cufon.registerEngine(vml,(function() {
vare:document.namespaces;
}

b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?middle:text-bottom)+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,!important;));function c(i,j) {
returnai:em|ex|%)$|^[a-z-]+$/i.test(j)?1em:j);
}

function a(l,m) {
ifm:==0){return 0;
}

function f(l,k,j,n) {
vari:computed+n,m=k[i];
ifisnanmm:k.get(n);
ki:m=(m=="normal")?0:~~j.convertFrom(a(l,m));
}

;function d(p) {
varq:p.id;
ifgqvarn:p.stops,o=document.createElement(cvml:fill),i=[];
otype:gradient;
oangle:180;
ofocus:0;
omethod:sigma;
ocolor:n[0][1];
forvarm:1,l=n.length-1;
}

return function(ac,G,Y,C,K,ad,W) {
varn:(G===null);
ifng:K.alt;
}

var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get(fontSize))+px,ac.baseSize));var y,q;if(n) {
y:K;
q:K.firstChild;
}

if(!W) {
yappendchilddocumentcreateelementcvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing),f(ad,Y,p,wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r+O+ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape);q.appendChild(v)}v.stroked=f;v.coordsize=O;v.coordorigin=m=(U-S)+,+T;v.path=(D.d?m+D.d+xe:)+m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow);N.on=t;N.color=B.color;N.offset=s.offX+,+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type=double;N.color2=z.color;N.offset2=r.offX+,"+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect);M.stroked=f;M.className=cufon-vml-cover;t=document.createElement(cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight);if(E==normal){E=1em}else{if(!isNaN(E)){E+=em}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+px;ai.marginBottom=Q+px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display,inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style);f.type=text/css;f.appendChild(document.createTextNode((cufon{text-indent:0;
}

function c(m,k) {
forvarj:0;
jvarg:m[j];
}

return function(V,w,P,t,C,W) {
vark:(w===null);
ifkw:C.getAttribute(alt);
}

var A=V.viewBox;var m=P.getSize(fontSize,V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z) {
forvaru:z.length;
varf:z[U];
vark:m.convertFrom(parseFloat(F.offX));
vari:m.convertFrom(parseFloat(F.offY));
lu:[K,I];
ifibb:I;
}

if(K>O) {
o:K;
}

if(I>N) {
n:I;
}

if(K<u) {
u:K;
}

var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k) {
s:C;
n:C.firstChild;
}

var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get(fontStretch));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+px;H.height=o+px;B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+px;H.left=Math.round(m.convert(u))+px;var r=Math.max(Math.ceil(m.convert(J)),0)+px;if(a) {
aawidth:r;
aaheight:m.convert(V.height)+px;
}

var X=n.getContext(2d),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T() {
varx:V.glyphs,ab,l=-1,g=-1,y;
whiley:Z[++l]){var ab=x[Z[l]]||V.missingGlyph;
}

if(z) {
forvaru:z.length;
varf:z[U];
xfillstyle:F.color;
}

var q=t.textGradient;if(q) {
varv:q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);
forvaru:0;
}

function f(),function j(B),function h() {
varc:{;
}

function A(),function a(B) {
vard:{;
}

@media screen,projection {
cufon {
display:inline-block;
position:relative;
vertical-align:middle;
e:font-size:1px;line-height:1px;)+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));
functiondphvarn:0;
varg:[],o=/([mrvxe])([^a-z]*)/g,k;
generate:for(varj=0;k=o.exec(p);
jvarl:k[2].split(,);
switchk1casev:g[j]={m:bezierCurveTo,a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]];
}

;break;caser:g[j]= {
m:lineTo,a:[n+=~~l[0],m+=~~l[1]];
}

;break;casem:g[j]= {
m:moveTo,a:[n=~~l[0],m=~~l[1]];
}

;break;casex:g[j]= {
m:closePath;
}
}