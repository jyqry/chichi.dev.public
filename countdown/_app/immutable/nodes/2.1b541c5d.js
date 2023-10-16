import{s as be,n as q,f as he,e as Qe}from"../chunks/scheduler.63274e7e.js";import{S as pe,i as De,g as u,h as c,y as k,k as i,a as z,f as v,s as D,m as J,j as M,c as I,n as K,x as r,z as We,o as Q,A as Xe,d as re,t as oe,r as $e,u as Be,v as Je,w as Ke}from"../chunks/index.a19c89f6.js";import{p as Ze}from"../chunks/stores.7f0726a6.js";const xe=!0,Et=Object.freeze(Object.defineProperty({__proto__:null,prerender:xe},Symbol.toStringTag,{value:"Module"}));function et(t){let e,s="123";return{c(){e=u("div"),e.textContent=s,this.h()},l(n){e=c(n,"DIV",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-ln161j"&&(e.textContent=s),this.h()},h(){i(e,"class","controls svelte-1l7c30d")},m(n,o){z(n,e,o)},p:q,i:q,o:q,d(n){n&&v(e)}}}let tt="#000000",nt="#ffffff";function st(t){return new Date().toISOString(),(()=>{console.log("123"),document.body.style.backgroundColor=tt,document.body.style.color=nt})(),[]}class lt extends pe{constructor(e){super(),De(this,e,st,et,be,{})}}function ye(t){"@babel/helpers - typeof";return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye(t)}function j(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function W(t){j(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||ye(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Pe(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function Ye(t){j(1,arguments);var e=W(t);return e.setHours(0,0,0,0),e}var rt=864e5;function ot(t,e){j(2,arguments);var s=Ye(t),n=Ye(e),o=s.getTime()-Pe(s),g=n.getTime()-Pe(n);return Math.round((o-g)/rt)}var it=6e4,at=36e5;function Ae(t,e){var s=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return s<0?-1:s>0?1:s}function ut(t,e){j(2,arguments);var s=W(t),n=W(e),o=Ae(s,n),g=Math.abs(ot(s,n));s.setDate(s.getDate()-o*g);var d=+(Ae(s,n)===-o),l=o*(g-d);return l===0?0:l}function Ie(t,e){return j(2,arguments),W(t).getTime()-W(e).getTime()}var Ue={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},ct="trunc";function Ce(t){return t?Ue[t]:Ue[ct]}function ft(t,e,s){j(2,arguments);var n=Ie(t,e)/at;return Ce(s==null?void 0:s.roundingMethod)(n)}function dt(t,e,s){j(2,arguments);var n=Ie(t,e)/it;return Ce(s==null?void 0:s.roundingMethod)(n)}function vt(t,e,s){j(2,arguments);var n=Ie(t,e)/1e3;return Ce(s==null?void 0:s.roundingMethod)(n)}const qe=""+new URL("../assets/1.7da8d8f7.png",import.meta.url).href,ze=""+new URL("../assets/2.c36e5e01.png",import.meta.url).href,gt=""+new URL("../assets/loading.9da2e9e9.gif",import.meta.url).href;function Ge(t){let e,s;return{c(){e=u("img"),this.h()},l(n){e=c(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){he(e.src,s=t[1]==="1"?qe:ze)||i(e,"src",s),i(e,"alt","logo"),i(e,"class","globe svelte-1g350yu")},m(n,o){z(n,e,o)},p(n,o){o&2&&!he(e.src,s=n[1]==="1"?qe:ze)&&i(e,"src",s)},d(n){n&&v(e)}}}function Re(t){let e,s;return{c(){e=u("img"),this.h()},l(n){e=c(n,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){he(e.src,s=gt)||i(e,"src",s),i(e,"class","loading-image svelte-1g350yu"),i(e,"alt","loading")},m(n,o){z(n,e,o)},d(n){n&&v(e)}}}function mt(t){let e,s,n,o,g,d,l,a,_,h,S,w,X="days",G,y,Me='<div class="number svelte-1g350yu">:</div> <div class="unit svelte-1g350yu"></div>',ie,E,P,R=(t[5]>9?t[5]:`0${t[5]}`)+"",Z,ae,H,we="hours",ue,O,Se='<div class="number svelte-1g350yu">:</div> <div class="unit svelte-1g350yu"></div>',ce,T,Y,$=(t[4]>9?t[4]:`0${t[4]}`)+"",x,fe,L,Ee="mins",de,F,Te='<div class="number svelte-1g350yu">:</div> <div class="unit svelte-1g350yu"></div>',ve,V,A,B=(t[3]>9?t[3]:`0${t[3]}`)+"",ee,ge,N,Ve="secs",me,U,_e,ke,b=(t[1]==="1"||t[1]==="2")&&Ge(t),p=t[1]==="3"&&Re();return{c(){e=u("div"),b&&b.c(),s=D(),n=u("div"),o=J(t[2]),d=D(),l=u("div"),a=u("div"),_=u("div"),h=J(t[6]),S=D(),w=u("div"),w.textContent=X,G=D(),y=u("div"),y.innerHTML=Me,ie=D(),E=u("div"),P=u("div"),Z=J(R),ae=D(),H=u("div"),H.textContent=we,ue=D(),O=u("div"),O.innerHTML=Se,ce=D(),T=u("div"),Y=u("div"),x=J($),fe=D(),L=u("div"),L.textContent=Ee,de=D(),F=u("div"),F.innerHTML=Te,ve=D(),V=u("div"),A=u("div"),ee=J(B),ge=D(),N=u("div"),N.textContent=Ve,me=D(),U=u("div"),p&&p.c(),this.h()},l(f){e=c(f,"DIV",{class:!0});var m=M(e);b&&b.l(m),s=I(m),n=c(m,"DIV",{class:!0,style:!0});var je=M(n);o=K(je,t[2]),je.forEach(v),d=I(m),l=c(m,"DIV",{class:!0});var C=M(l);a=c(C,"DIV",{class:!0});var te=M(a);_=c(te,"DIV",{class:!0});var He=M(_);h=K(He,t[6]),He.forEach(v),S=I(te),w=c(te,"DIV",{class:!0,"data-svelte-h":!0}),k(w)!=="svelte-1e5r2ay"&&(w.textContent=X),te.forEach(v),G=I(C),y=c(C,"DIV",{class:!0,"data-svelte-h":!0}),k(y)!=="svelte-1tdjws7"&&(y.innerHTML=Me),ie=I(C),E=c(C,"DIV",{class:!0});var ne=M(E);P=c(ne,"DIV",{class:!0});var Oe=M(P);Z=K(Oe,R),Oe.forEach(v),ae=I(ne),H=c(ne,"DIV",{class:!0,"data-svelte-h":!0}),k(H)!=="svelte-s37bm6"&&(H.textContent=we),ne.forEach(v),ue=I(C),O=c(C,"DIV",{class:!0,"data-svelte-h":!0}),k(O)!=="svelte-1tdjws7"&&(O.innerHTML=Se),ce=I(C),T=c(C,"DIV",{class:!0});var se=M(T);Y=c(se,"DIV",{class:!0});var Le=M(Y);x=K(Le,$),Le.forEach(v),fe=I(se),L=c(se,"DIV",{class:!0,"data-svelte-h":!0}),k(L)!=="svelte-adolxc"&&(L.textContent=Ee),se.forEach(v),de=I(C),F=c(C,"DIV",{class:!0,"data-svelte-h":!0}),k(F)!=="svelte-1tdjws7"&&(F.innerHTML=Te),ve=I(C),V=c(C,"DIV",{class:!0});var le=M(V);A=c(le,"DIV",{class:!0});var Fe=M(A);ee=K(Fe,B),Fe.forEach(v),ge=I(le),N=c(le,"DIV",{class:!0,"data-svelte-h":!0}),k(N)!=="svelte-1019pmj"&&(N.textContent=Ve),le.forEach(v),C.forEach(v),me=I(m),U=c(m,"DIV",{});var Ne=M(U);p&&p.l(Ne),Ne.forEach(v),m.forEach(v),this.h()},h(){i(n,"class","title svelte-1g350yu"),i(n,"style",g=`color: ${t[0].titleColor}`),i(_,"class","number svelte-1g350yu"),i(w,"class","unit svelte-1g350yu"),i(a,"class","box svelte-1g350yu"),i(y,"class","box narrow svelte-1g350yu"),i(P,"class","number svelte-1g350yu"),i(H,"class","unit svelte-1g350yu"),i(E,"class","box svelte-1g350yu"),i(O,"class","box narrow svelte-1g350yu"),i(Y,"class","number svelte-1g350yu"),i(L,"class","unit svelte-1g350yu"),i(T,"class","box svelte-1g350yu"),i(F,"class","box narrow svelte-1g350yu"),i(A,"class","number svelte-1g350yu"),i(N,"class","unit svelte-1g350yu"),i(V,"class","box svelte-1g350yu"),i(l,"class","datetime svelte-1g350yu"),i(e,"class","countdown svelte-1g350yu")},m(f,m){z(f,e,m),b&&b.m(e,null),r(e,s),r(e,n),r(n,o),r(e,d),r(e,l),r(l,a),r(a,_),r(_,h),r(a,S),r(a,w),r(l,G),r(l,y),r(l,ie),r(l,E),r(E,P),r(P,Z),r(E,ae),r(E,H),r(l,ue),r(l,O),r(l,ce),r(l,T),r(T,Y),r(Y,x),r(T,fe),r(T,L),r(l,de),r(l,F),r(l,ve),r(l,V),r(V,A),r(A,ee),r(V,ge),r(V,N),r(e,me),r(e,U),p&&p.m(U,null),_e||(ke=We(e,"dblclick",t[7]),_e=!0)},p(f,[m]){f[1]==="1"||f[1]==="2"?b?b.p(f,m):(b=Ge(f),b.c(),b.m(e,s)):b&&(b.d(1),b=null),m&4&&Q(o,f[2]),m&1&&g!==(g=`color: ${f[0].titleColor}`)&&i(n,"style",g),m&64&&Q(h,f[6]),m&32&&R!==(R=(f[5]>9?f[5]:`0${f[5]}`)+"")&&Q(Z,R),m&16&&$!==($=(f[4]>9?f[4]:`0${f[4]}`)+"")&&Q(x,$),m&8&&B!==(B=(f[3]>9?f[3]:`0${f[3]}`)+"")&&Q(ee,B),f[1]==="3"?p||(p=Re(),p.c(),p.m(U,null)):p&&(p.d(1),p=null)},i:q,o:q,d(f){f&&v(e),b&&b.d(),p&&p.d(),_e=!1,ke()}}}let _t="#000000",ht="#ffffff";function yt(t,e,s){let n,o,g,d,{settings:l={backgroundColor:"#000000",textColor:"#ffffff",titleColor:"#ff540f"}}=e,{globe:a="0"}=e,{title:_="Countdown"}=e,{datetime:h=new Date().toISOString()}=e,S=new Date,w;const X=()=>{console.log("123"),document.body.style.backgroundColor=_t,document.body.style.color=ht},G=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()};return t.$$set=y=>{"settings"in y&&s(0,l=y.settings),"globe"in y&&s(1,a=y.globe),"title"in y&&s(2,_=y.title),"datetime"in y&&s(8,h=y.datetime)},t.$$.update=()=>{t.$$.dirty&1024&&(clearInterval(w),s(10,w=setInterval(()=>{s(9,S=new Date)},1e3))),t.$$.dirty&768&&s(6,n=ut(new Date(h),S)),t.$$.dirty&768&&s(5,o=ft(new Date(h),S)%24),t.$$.dirty&768&&s(4,g=dt(new Date(h),S)%60),t.$$.dirty&768&&s(3,d=vt(new Date(h),S)%60)},X(),[l,a,_,d,g,o,n,G,h,S,w]}class bt extends pe{constructor(e){super(),De(this,e,yt,mt,be,{settings:0,globe:1,title:2,datetime:8})}}function pt(t){let e,s;return e=new lt({}),{c(){$e(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,o){Je(e,n,o),s=!0},i(n){s||(re(e.$$.fragment,n),s=!0)},o(n){oe(e.$$.fragment,n),s=!1},d(n){Ke(e,n)}}}function Dt(t){let e,s;return e=new bt({props:{title:t[0],datetime:t[1],globe:t[2]}}),{c(){$e(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,o){Je(e,n,o),s=!0},p:q,i(n){s||(re(e.$$.fragment,n),s=!0)},o(n){oe(e.$$.fragment,n),s=!1},d(n){Ke(e,n)}}}function It(t){let e,s,n,o,g,d=!(t[0]&&t[1])&&pt(),l=t[0]&&t[1]&&Dt(t);return{c(){e=u("meta"),s=D(),n=u("section"),d&&d.c(),o=D(),l&&l.c(),this.h()},l(a){const _=Xe("svelte-t32ptj",document.head);e=c(_,"META",{name:!0,content:!0}),_.forEach(v),s=I(a),n=c(a,"SECTION",{class:!0});var h=M(n);d&&d.l(h),o=I(h),l&&l.l(h),h.forEach(v),this.h()},h(){document.title="Home",i(e,"name","description"),i(e,"content","Svelte demo app"),i(n,"class","svelte-1jlhe5t")},m(a,_){r(document.head,e),z(a,s,_),z(a,n,_),d&&d.m(n,null),r(n,o),l&&l.m(n,null),g=!0},p(a,[_]){a[0]&&a[1]&&l.p(a,_)},i(a){g||(re(d),re(l),g=!0)},o(a){oe(d),oe(l),g=!1},d(a){a&&(v(s),v(n)),v(e),d&&d.d(),l&&l.d()}}}function Ct(t,e,s){let n;Qe(t,Ze,l=>s(3,n=l));const o=n.url.searchParams.get("title")??"",g=n.url.searchParams.get("datetime"),d=n.url.searchParams.get("globe")??"0";return[o,g,d]}class Tt extends pe{constructor(e){super(),De(this,e,Ct,It,be,{})}}export{Tt as component,Et as universal};
