var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r=function(t){return t&&t.Math==Math&&t};e=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||Function("return this")();var n,o;n=!(o=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var i,a,c,u={};c=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var l=Function.prototype,s=l.call,f=c&&l.bind.bind(s,s);u=c?f:function(t){return function(){return s.apply(t,arguments)}};var d,p={},h="object"==typeof document&&document.all,y=(d={all:h,IS_HTMLDDA:void 0===h&&void 0!==h}).all;p=d.IS_HTMLDDA?function(t){return"function"==typeof t||t===y}:function(t){return"function"==typeof t};var v,g,m,b={};m=function(t){return null==t};var w=TypeError;g=function(t){if(m(t))throw w("Can't call method on "+t);return t};var L=Object;v=function(t){return L(g(t))};var S=u({}.hasOwnProperty);b=Object.hasOwn||function(t,e){return S(v(t),e)};var T,E=Function.prototype,O=n&&Object.getOwnPropertyDescriptor,j=b(E,"name"),M={EXISTS:j,PROPER:j&&"something"===function(){}.name,CONFIGURABLE:j&&(!n||n&&O(E,"name").configurable)}.CONFIGURABLE,x={},_={},q=Object.defineProperty;T=function(t,r){try{q(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r};var P="__core-js_shared__",k=e[P]||T(P,{});_=k;var N=u(Function.toString);p(_.inspectSource)||(_.inspectSource=function(t){return N(t)}),x=_.inspectSource;var C,A,H=e.WeakMap;A=p(H)&&/native code/.test(String(H));var I={},F=d.all;I=d.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:p(t)||t===F}:function(t){return"object"==typeof t?null!==t:p(t)};var D,R,$,G={},K=e.document,B=I(K)&&I(K.createElement);$=function(t){return B?K.createElement(t):{}},R=!n&&!o((function(){return 7!=Object.defineProperty($("div"),"a",{get:function(){return 7}}).a}));var z;z=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var W,V=String,U=TypeError;W=function(t){if(I(t))return t;throw U(V(t)+" is not an object")};var Y,Q,J={},X=Function.prototype.call;J=c?X.bind(X):function(){return X.apply(X,arguments)};var Z,tt={},et=function(t){return p(t)?t:void 0};Z=function(t,r){return arguments.length<2?et(e[t]):e[t]&&e[t][r]};var rt={};rt=u({}.isPrototypeOf);var nt,ot,it,at={};at="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ct,ut,lt=e.process,st=e.Deno,ft=lt&&lt.versions||st&&st.version,dt=ft&&ft.v8;dt&&(ut=(ct=dt.split("."))[0]>0&&ct[0]<4?1:+(ct[0]+ct[1])),!ut&&at&&(!(ct=at.match(/Edge\/(\d+)/))||ct[1]>=74)&&(ct=at.match(/Chrome\/(\d+)/))&&(ut=+ct[1]),it=ut,nt=(ot=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&it&&it<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var pt=Object;tt=nt?function(t){return"symbol"==typeof t}:function(t){var e=Z("Symbol");return p(e)&&rt(e.prototype,pt(t))};var ht,yt,vt,gt=String;vt=function(t){try{return gt(t)}catch(t){return"Object"}};var mt=TypeError;yt=function(t){if(p(t))return t;throw mt(vt(t)+" is not a function")},ht=function(t,e){var r=t[e];return m(r)?void 0:yt(r)};var bt,wt=TypeError;bt=function(t,e){var r,n;if("string"===e&&p(r=t.toString)&&!I(n=J(r,t)))return n;if(p(r=t.valueOf)&&!I(n=J(r,t)))return n;if("string"!==e&&p(r=t.toString)&&!I(n=J(r,t)))return n;throw wt("Can't convert object to primitive value")};var Lt;(Lt=function(t,e){return _[t]||(_[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"});var St,Tt=0,Et=Math.random(),Ot=u(1..toString);St=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Ot(++Tt+Et,36)};var jt=e.Symbol,Mt=Lt("wks"),xt=nt?jt.for||jt:jt&&jt.withoutSetter||St,_t=TypeError,qt=function(t){return b(Mt,t)||(Mt[t]=ot&&b(jt,t)?jt[t]:xt("Symbol."+t)),Mt[t]}("toPrimitive");Q=function(t,e){if(!I(t)||tt(t))return t;var r,n=ht(t,qt);if(n){if(void 0===e&&(e="default"),r=J(n,t,e),!I(r)||tt(r))return r;throw _t("Can't convert object to primitive value")}return void 0===e&&(e="number"),bt(t,e)},Y=function(t){var e=Q(t,"string");return tt(e)?e:e+""};var Pt=TypeError,kt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Ct="enumerable",At="configurable",Ht="writable";D=n?z?function(t,e,r){if(W(t),e=Y(e),W(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Ht in r&&!r[Ht]){var n=Nt(t,e);n&&n[Ht]&&(t[e]=r.value,r={configurable:At in r?r[At]:n[At],enumerable:Ct in r?r[Ct]:n[Ct],writable:!1})}return kt(t,e,r)}:kt:function(t,e,r){if(W(t),e=Y(e),W(r),R)try{return kt(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Pt("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var It;It=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},G=n?function(t,e,r){return D(t,e,It(1,r))}:function(t,e,r){return t[e]=r,t};var Ft,Dt=Lt("keys");Ft=function(t){return Dt[t]||(Dt[t]=St(t))};var Rt={};Rt={};var $t,Gt,Kt,Bt="Object already initialized",zt=e.TypeError,Wt=e.WeakMap;if(A||_.state){var Vt=_.state||(_.state=new Wt);Vt.get=Vt.get,Vt.has=Vt.has,Vt.set=Vt.set,$t=function(t,e){if(Vt.has(t))throw zt(Bt);return e.facade=t,Vt.set(t,e),e},Gt=function(t){return Vt.get(t)||{}},Kt=function(t){return Vt.has(t)}}else{var Ut=Ft("state");Rt[Ut]=!0,$t=function(t,e){if(b(t,Ut))throw zt(Bt);return e.facade=t,G(t,Ut,e),e},Gt=function(t){return b(t,Ut)?t[Ut]:{}},Kt=function(t){return b(t,Ut)}}var Yt=(C={set:$t,get:Gt,has:Kt,enforce:function(t){return Kt(t)?Gt(t):$t(t,{})},getterFor:function(t){return function(e){var r;if(!I(e)||(r=Gt(e)).type!==t)throw zt("Incompatible receiver, "+t+" required");return r}}}).enforce,Qt=C.get,Jt=String,Xt=Object.defineProperty,Zt=u("".slice),te=u("".replace),ee=u([].join),re=n&&!o((function(){return 8!==Xt((function(){}),"length",{value:8}).length})),ne=String(String).split("String"),oe=a=function(t,e,r){"Symbol("===Zt(Jt(e),0,7)&&(e="["+te(Jt(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!b(t,"name")||M&&t.name!==e)&&(n?Xt(t,"name",{value:e,configurable:!0}):t.name=e),re&&r&&b(r,"arity")&&t.length!==r.arity&&Xt(t,"length",{value:r.arity});try{r&&b(r,"constructor")&&r.constructor?n&&Xt(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var o=Yt(t);return b(o,"source")||(o.source=ee(ne,"string"==typeof e?e:"")),t};Function.prototype.toString=oe((function(){return p(this)&&Qt(this).source||x(this)}),"toString"),i=function(t,e,r){return r.get&&a(r.get,e,{getter:!0}),r.set&&a(r.set,e,{setter:!0}),D(t,e,r)};var ie;ie=function(){var t=W(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e};var ae=e.RegExp,ce=ae.prototype;n&&o((function(){var t=!0;try{ae(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",o=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(ce,"flags").get.call(e)!==n||r!==n}))&&i(ce,"flags",{configurable:!0,get:ie});var ue,le,se,fe={}.propertyIsEnumerable,de=Object.getOwnPropertyDescriptor,pe=de&&!fe.call({1:2},1);se=pe?function(t){var e=de(this,t);return!!e&&e.enumerable}:fe;var he,ye,ve={},ge=u({}.toString),me=u("".slice);ye=function(t){return me(ge(t),8,-1)};var be=Object,we=u("".split);ve=o((function(){return!be("z").propertyIsEnumerable(0)}))?function(t){return"String"==ye(t)?we(t,""):be(t)}:be,he=function(t){return ve(g(t))};var Le,Se=Object.getOwnPropertyDescriptor,Te=le=n?Se:function(t,e){if(t=he(t),e=Y(e),R)try{return Se(t,e)}catch(t){}if(b(t,e))return It(!J(se,t,e),t[e])};Le=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(p(r)&&a(r,i,n),n.global)o?t[e]=r:T(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:D(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var Ee,Oe,je,Me,xe,_e={},qe={},Pe=Math.ceil,ke=Math.floor;qe=Math.trunc||function(t){var e=+t;return(e>0?ke:Pe)(e)},xe=function(t){var e=+t;return e!=e||0===e?0:qe(e)};var Ne=Math.max,Ce=Math.min;Me=function(t,e){var r=xe(t);return r<0?Ne(r+e,0):Ce(r,e)};var Ae,He,Ie=Math.min;He=function(t){return t>0?Ie(xe(t),9007199254740991):0},Ae=function(t){return He(t.length)};var Fe=function(t){return function(e,r,n){var o,i=he(e),a=Ae(i),c=Me(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},De={includes:Fe(!0),indexOf:Fe(!1)}.indexOf,Re=u([].push);je=function(t,e){var r,n=he(t),o=0,i=[];for(r in n)!b(Rt,r)&&b(n,r)&&Re(i,r);for(;e.length>o;)b(n,r=e[o++])&&(~De(i,r)||Re(i,r));return i};var $e,Ge=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Oe=Object.getOwnPropertyNames||function(t){return je(t,Ge)},$e=Object.getOwnPropertySymbols;var Ke=u([].concat);_e=Z("Reflect","ownKeys")||function(t){var e=Oe(W(t));return $e?Ke(e,$e(t)):e},Ee=function(t,e,r){for(var n=_e(e),o=D,i=le,a=0;a<n.length;a++){var c=n[a];b(t,c)||r&&b(r,c)||o(t,c,i(e,c))}};var Be={},ze=/#|\.prototype\./,We=function(t,e){var r=Ue[Ve(t)];return r==Qe||r!=Ye&&(p(e)?o(e):!!e)},Ve=We.normalize=function(t){return String(t).replace(ze,".").toLowerCase()},Ue=We.data={},Ye=We.NATIVE="N",Qe=We.POLYFILL="P";Be=We,ue=function(t,r){var n,o,i,a,c,u=t.target,l=t.global,s=t.stat;if(n=l?e:s?e[u]||T(u,{}):(e[u]||{}).prototype)for(o in r){if(a=r[o],i=t.dontCallGetSet?(c=Te(n,o))&&c.value:n[o],!Be(l?o:u+(s?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;Ee(a,i)}(t.sham||i&&i.sham)&&G(a,"sham",!0),Le(n,o,a,t)}};var Je,Xe={},Ze=Function.prototype,tr=Ze.apply,er=Ze.call;Xe="object"==typeof Reflect&&Reflect.apply||(c?er.bind(tr):function(){return er.apply(tr,arguments)});var rr,nr,or=(nr=function(t){if("Function"===ye(t))return u(t)})(nr.bind);rr=function(t,e){return yt(t),void 0===e?t:c?or(t,e):function(){return t.apply(e,arguments)}};var ir={};ir=Z("document","documentElement");var ar={};ar=u([].slice);var cr={},ur=TypeError;cr=function(t,e){if(t<e)throw ur("Not enough arguments");return t};var lr;lr=/(?:ipad|iphone|ipod).*applewebkit/i.test(at);var sr,fr,dr,pr,hr=fr={};function yr(){throw new Error("setTimeout has not been defined")}function vr(){throw new Error("clearTimeout has not been defined")}function gr(t){if(dr===setTimeout)return setTimeout(t,0);if((dr===yr||!dr)&&setTimeout)return dr=setTimeout,setTimeout(t,0);try{return dr(t,0)}catch(e){try{return dr.call(null,t,0)}catch(e){return dr.call(this,t,0)}}}!function(){try{dr="function"==typeof setTimeout?setTimeout:yr}catch(t){dr=yr}try{pr="function"==typeof clearTimeout?clearTimeout:vr}catch(t){pr=vr}}();var mr,br=[],wr=!1,Lr=-1;function Sr(){wr&&mr&&(wr=!1,mr.length?br=mr.concat(br):Lr=-1,br.length&&Tr())}function Tr(){if(!wr){var t=gr(Sr);wr=!0;for(var e=br.length;e;){for(mr=br,br=[];++Lr<e;)mr&&mr[Lr].run();Lr=-1,e=br.length}mr=null,wr=!1,function(t){if(pr===clearTimeout)return clearTimeout(t);if((pr===vr||!pr)&&clearTimeout)return pr=clearTimeout,clearTimeout(t);try{return pr(t)}catch(e){try{return pr.call(null,t)}catch(e){return pr.call(this,t)}}}(t)}}function Er(t,e){this.fun=t,this.array=e}function Or(){}hr.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];br.push(new Er(t,e)),1!==br.length||wr||gr(Tr)},Er.prototype.run=function(){this.fun.apply(null,this.array)},hr.title="browser",hr.browser=!0,hr.env={},hr.argv=[],hr.version="",hr.versions={},hr.on=Or,hr.addListener=Or,hr.once=Or,hr.off=Or,hr.removeListener=Or,hr.removeAllListeners=Or,hr.emit=Or,hr.prependListener=Or,hr.prependOnceListener=Or,hr.listeners=function(t){return[]},hr.binding=function(t){throw new Error("process.binding is not supported")},hr.cwd=function(){return"/"},hr.chdir=function(t){throw new Error("process.chdir is not supported")},hr.umask=function(){return 0},sr=void 0!==fr&&"process"==ye(fr);var jr,Mr,xr,_r,qr=e.setImmediate,Pr=e.clearImmediate,kr=e.process,Nr=e.Dispatch,Cr=e.Function,Ar=e.MessageChannel,Hr=e.String,Ir=0,Fr={},Dr="onreadystatechange";o((function(){jr=e.location}));var Rr=function(t){if(b(Fr,t)){var e=Fr[t];delete Fr[t],e()}},$r=function(t){return function(){Rr(t)}},Gr=function(t){Rr(t.data)},Kr=function(t){e.postMessage(Hr(t),jr.protocol+"//"+jr.host)};qr&&Pr||(qr=function(t){cr(arguments.length,1);var e=p(t)?t:Cr(t),r=ar(arguments,1);return Fr[++Ir]=function(){Xe(e,void 0,r)},Mr(Ir),Ir},Pr=function(t){delete Fr[t]},sr?Mr=function(t){kr.nextTick($r(t))}:Nr&&Nr.now?Mr=function(t){Nr.now($r(t))}:Ar&&!lr?(_r=(xr=new Ar).port2,xr.port1.onmessage=Gr,Mr=rr(_r.postMessage,_r)):e.addEventListener&&p(e.postMessage)&&!e.importScripts&&jr&&"file:"!==jr.protocol&&!o(Kr)?(Mr=Kr,e.addEventListener("message",Gr,!1)):Mr=Dr in $("script")?function(t){ir.appendChild($("script"))[Dr]=function(){ir.removeChild(this),Rr(t)}}:function(t){setTimeout($r(t),0)});var Br=(Je={set:qr,clear:Pr}).clear;ue({global:!0,bind:!0,enumerable:!0,forced:e.clearImmediate!==Br},{clearImmediate:Br});var zr,Wr,Vr=Je.set;Wr="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var Ur,Yr=e.Function,Qr=/MSIE .\./.test(at)||Wr&&((Ur=e.Bun.version.split(".")).length<3||0==Ur[0]&&(Ur[1]<3||3==Ur[1]&&0==Ur[2]));zr=function(t,e){var r=e?2:1;return Qr?function(n,o){var i=cr(arguments.length,1)>r,a=p(n)?n:Yr(n),c=i?ar(arguments,r):[],u=i?function(){Xe(a,this,c)}:a;return e?t(u,o):t(u)}:t};var Jr=e.setImmediate?zr(Vr,!1):Vr;ue({global:!0,bind:!0,enumerable:!0,forced:e.setImmediate!==Jr},{setImmediate:Jr});var Xr=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new q(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",p="suspendedYield",h="executing",y="completed",v={};function g(){}function m(){}function b(){}var w={};l(w,a,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(P([])));S&&S!==r&&n.call(S,a)&&(w=S);var T=b.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(t,e,r){var n=d;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=M(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?y:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}function M(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,M(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:k}}function k(){return{value:e,done:!0}}return m.prototype=b,o(T,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=l(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(T),t},t.awrap=function(t){return{__await:t}},E(O.prototype),l(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(T),l(T,u,"Generator"),l(T,a,(function(){return this})),l(T,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}({});try{regeneratorRuntime=Xr}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=Xr:Function("r","regeneratorRuntime = r")(Xr)}const Zr=(t,e=(()=>{}))=>{new Promise(((e,r)=>{const n=document.createElement("script");document.head.appendChild(n),n.onload=e,n.onerror=r,n.async=!0,n.src=t})).then(e)},tn="https://app.kannamaps.de/api:uxQm4-cT/product/review/",en=async function(t){try{const r=await Promise.race([fetch(t),(e=10,new Promise((function(t,r){setTimeout((function(){r(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)})))]),n=await r.json();if(!r.ok)throw new Error(`${n.message} (${r.status})`);return n}catch(t){throw"helper/model/utils.ts -> getJson: "+t}var e},rn={data:[0,1,2,3],reviews:[],similar:[],initView:()=>{}};function nn(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function on(t,e=!1){const r=t.split(/[\s-]+/);let n=!1;const o=r.map((t=>{if(!(t.length>0)||n&&e)return t;{const e=t.charAt(0),r=t.slice(1);return n=!0,e.toUpperCase()+r}}));return t.split(/\b/).map(((t,e)=>t.match(/[A-Za-z]/)?o.shift():t)).join("")}function an(t,e){const r=KannaMaps,n="n.v.";if(!e)return console.error("KannaMaps -> render.ts: Couldn't find product datta!",t),!1;const o=t.querySelector('[c-el="producer"]');o&&(o.innerHTML=e.data.detailed.Hersteller);const i=t.querySelector('[c-el="price-from"]'),a=t.querySelector('[c-el="price-text"]'),c=t.querySelector('[c-el="price-parent"]');if(i&&a&&c){const t=e.data.apothecaries_data.price_min;null!==t?i.innerHTML=t.toString().replace(".",","):(a.innerHTML=n,c.classList.add("inactive"))}if(c&&e.data.apothecaries_data.detailed.length){const r=t.querySelector('[c-el="compare"]');r?.addEventListener("click",(()=>{KannaMaps.compare(e)}))}const u=t.querySelector('[c-el="terpenes-wrapper"]'),l=u?.querySelectorAll(".p-relative-2.center"),s=u?.querySelector('[c-el="data-unavailable"]');if(u&&s&&3===l?.length){const t=e.data.detailed,r=["Sorte","Kultivar","Genetik","Gehalt—THC","Gehalt—CBD","Hersteller","Bestrahlung","Terpendichte—mg/g"],o=Object.keys(t).filter((e=>!r.includes(e)&&null!==t[e])).map((e=>({key:on(e.replace("—"," ")),value:t[e]})));o.sort(((t,e)=>parseFloat(e.value)-parseFloat(t.value))),l.forEach(((t,e)=>{const r=t.querySelector('[c-el="terpene-name"]'),i=t.querySelector('[c-el="terpene-color"]'),a=t.querySelector(".terpen-gradient-wrapper"),c=t.querySelector('[c-el="terpene-percentage"]');if(!o[e])return r&&(r.innerHTML=n),c?.classList.add("hide"),void i?.classList.add("hide");a?.classList.remove("alpha","linalool","d-limone"),a?.classList.add(o[e]?.key?.toLowerCase().replace(" ","-"));const u=function(t){let e=0;for(let t=0,r=4;t<r;t++){const r=parseFloat(o[t].value||"");isNaN(r)||(e+=r)}const r=parseFloat(o[t].value||"");return isNaN(r)?null:(r/e*100).toFixed(0)+"%"}(e);c&&u?(c.classList.remove("hide"),c.innerHTML=u):c?.classList.add("hide"),r&&o[e]?r.innerHTML=o[e].key:t.classList.add("cc-inactive")}))}const f=t.querySelector('[c-el="effects-wrapper"]'),d=f?.querySelectorAll(".flex-column.center"),p=f?.querySelector('[c-el="data-unavailable"]');if(f&&p&&3===d?.length){const t=e.data.community_data.simple.positive_effects;t.length?d.forEach(((e,r)=>{const n=e.querySelector(".product-card-tag.p-small");n&&t[r]?n.innerHTML=on(t[r],!0):e.classList.add("cc-inactive")})):(f.childNodes.forEach((t=>t.classList.add("cc-inactive"))),p.classList.remove("cc-inactive"))}const h=t.querySelector('[c-el="indica"]'),y=t.querySelector('[c-el="sativa"]'),v=t.querySelector('[c-el="hybrid"]');if(h&&y&&v){[h,y,v].forEach((t=>{t.classList.add("cc-inactive"),t.getAttribute("c-el")===e.data.genetics.toLowerCase()&&t.classList.remove("cc-inactive")}))}const g=t.querySelector('[c-el="rating-wrapper"]'),m=t.querySelector('[c-el="rating-wrapper-empty-state"]');if(g&&m){const r=g.querySelector('[c-el="rating"]'),n=g.querySelector('[c-el="ratings"]'),o=g.querySelectorAll('[c-el="rating-star-background"]');if(!r||!n||5!==o.length)return console.error("KannaMaps -> render.ts: Couldn't find template rating elements!",t),!1;const i=e.data.community_data.rating;if(i&&e.data.community_data.ratings){r.innerHTML=i.toString().replace(".",","),n.innerHTML=e.data.community_data.ratings;const t="star-rating-hex-fill",a="#"+document.querySelector(`[${t}]`)?.getAttribute(t),c="star-rating-hex-empty",u="#"+document.querySelector(`[${c}]`)?.getAttribute(c);o.forEach(((t,e)=>{const r=100*(Math.min(e+1,i)-e);t.style.backgroundImage=`linear-gradient(to right, ${a}, ${a} ${r}%, ${u} ${r}%)`})),r.innerHTML=i.toString().replace(".",","),n.innerHTML=e.data.community_data.ratings,o.forEach(((t,e)=>{const r=100*(Math.min(e+1,i)-e);t.style.backgroundImage=`linear-gradient(to right, #fec84b, #fec84b ${r}%, #f9f8f8 ${r}%)`}))}else g.classList.add("cc-inactive"),m.classList.remove("cc-inactive")}const b=t.querySelector('[c-el="strain"]');b&&(b.innerHTML=e.data.strain||n);const w=t.querySelector('[custom-identifier="type"]');w&&(w.innerHTML=e.data.type||n);const L=t.querySelectorAll('[c-el="url"]'),S=""!==e.wf_slug?"/info/"+e.wf_slug:void 0;L.length&&S&&L.forEach((t=>{t.setAttribute("href",S+(t.getAttribute("data-suffix")||"")),t.addEventListener("click",(()=>{t.classList.add("cc-loading"),r.elements.transitionLoader.classList.remove("pointer-events-none")}))}));const T=t.querySelector('[custom-identifier="productcard-genetics"]');T&&(T.innerHTML=e.data.genetics||n);const E=t.querySelector('[c-el="availibitly"]');E&&("available"!==e.data.apothecaries_data.availability_status?(E.classList.add("cc-inactive"),E.childNodes[0].classList?.add("non-available")):(E.classList.remove("cc-inactive"),E.childNodes[0].classList?.remove("non-available")));const O=t.querySelector('[c-el="thc"]');O&&(O.innerHTML=e.data.thc_concentration||n);const j=t.querySelector('[c-el="cbd"]');j&&(j.innerHTML=e.data.cbd_concentration||n)}function cn(t){document.querySelectorAll("[xano-id]").forEach(((e,r)=>{0!=r&&an(e,t[r-1])}))}function un(t,e){const r="n.v.";if(!e)return console.error("KannaMaps -> render.ts: Couldn't find product datta!",t),!1;const n=t.querySelector('[c-el="title"]');n&&(n.innerHTML=e.data.fields.Headline||r);const o=t.querySelector('[c-el="paragraph"]');o&&(o.innerHTML=e.data.fields.Note||r);const i=t.querySelector('[custom-identifier="reviewcard-username"]');let a=(e._user.first_name+" "+e._user.last_name).trim();a=""!==a?a:i?.getAttribute("data-default")||r,i&&(i.innerHTML=a);const c=t.querySelector('[custom-identifier="reviewcard-date"]'),u=function(t){const e=new Date(t),r=(new Date-e)/864e5;return r<1?`Heute um ${e.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}`:r<2?`Gestern um ${e.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}`:r<3?`Vorgestern um ${e.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}`:e.toLocaleString("de-DE",{year:"numeric",month:"long",day:"numeric"})}(e.created_at);c&&(c.innerHTML=u);const l=t.querySelector('[c-el="star-parent"]'),s=l?.childNodes;if(!l||5!==s.length)return console.error("KannaMaps -> render.ts: Couldn't find template rating elements!",t),!1;s.forEach(((t,r)=>{t.setAttribute("src",e.data.fields.rating<r+1?"https://assets-global.website-files.com/64e9b786f05b1f29c5d4d919/64fc6924c0f28079cb26a475_star_2956792.svg":"https://assets-global.website-files.com/64e9b786f05b1f29c5d4d919/6523c82aa811163a0fc9b9d9_64fc6924c0f28079cb26a475_star_2956792%20(1).svg")}))}function ln(t){const e=document.querySelector('[c-el="review-grid"]'),r=e?.childNodes[0].cloneNode(!0);let n=t;const o=function(){const t={},e=document.querySelector('[c-el="empty-state"]'),r=document.querySelector('[c-el="pagination-wrapper"]'),n=r?.children[0].cloneNode(!0),o=document.querySelectorAll('[c-el="total-results"]'),i=document.querySelectorAll('[c-el="total-results-plural"]');n.classList.remove("cc-current");const a=document.querySelector('[c-el="transition-loader"]');return t.emptyState=e,t.paginationWrapper=r,t.paginationNumberTemplate=n,t.totalResults=o,t.totalResultsPlural=i,t.transitionLoader=a,t}();if(!nn(e)||!nn(r))return console.error("KannaMaps -> render.ts: Couldn't find list and/or template!",e,r),!1;if(e&&r){try{n?.items?.length}catch(t){return console.error("KannaMaps -> render.ts: The product data is not in the correct format!",t),!1}i()}function i(){e.innerHTML="",o.totalResults.forEach(((t,e)=>{t.innerHTML=n.itemsTotal;const r=o.totalResultsPlural[e];1!==n.itemsTotal?r.style.display="":r.style.display="none"})),n.itemsTotal>0?o.emptyState.style.display="none":o.emptyState.style.display="flex",n.pageTotal<2?o.paginationWrapper.style.display="none":(!function(){const t=o.paginationWrapper,r=o.paginationNumberTemplate;t.innerHTML="";const a=n.curPage,c=n.nextPage,u=n.prevPage,l=n.pageTotal,s=2,f=2;if(l>1){if(u){const e=r.cloneNode(!0);e.classList.add("cc-prev"),e.textContent="Vorherige",e.addEventListener("click",(()=>h(u))),t.appendChild(e)}if(l<=s+f+1)for(let t=1;t<=l;t++)d(t);else{if(a<=s+1){for(let t=1;t<=2*s+1;t++)d(t);p()}else if(a>=l-f){p();for(let t=l-2*f;t<=l;t++)d(t)}else{p();for(let t=a-s;t<=a+f;t++)d(t);p()}}if(c){const e=r.cloneNode(!0);e.classList.add("cc-next"),e.textContent="Nächste",e.addEventListener("click",(()=>h(c))),t.appendChild(e)}}function d(e){const n=r.cloneNode(!0);n.textContent=e.toString(),e===a&&n.classList.add("cc-current"),n.addEventListener("click",(()=>h(e))),t.appendChild(n)}function p(){const e=r.cloneNode(!0);e.classList.add("cc-ellipsis"),e.textContent="...",e.classList.add("ellipsis"),t.appendChild(e)}async function h(t){const r=e.getAttribute("data-pagination")||6,o=document.body.getAttribute("xano-id"),a="?paginate="+r+"&seite="+t;n=await en(tn+o+a),i()}}(),o.paginationWrapper.style.display="flex"),n.items.forEach(((t,n)=>{const o=r.cloneNode(!0);!1!==un(o,t)&&e.append(o)}))}}function sn(t){ln(t.reviews),cn(t.similar)}((t,...e)=>{!function r(n){n!==e.length?"undefined"===e[n].type?Zr(e[n].src,(()=>r(n+1))):r(n+1):"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()}(0)})((async function(){rn.initView=()=>sn(rn),async function(){try{document.querySelectorAll("[xano-id]").forEach((async(t,e)=>{const r=t.getAttribute("xano-id"),n=await en((0===e?tn:"https://app.kannamaps.de/api:uxQm4-cT/product/")+r);0===e?rn.reviews=n:rn.similar.push(n),rn.data[e]=null,!1===rn.data.some((t=>[0,1,2,3].includes(t)))&&rn.initView()}))}catch(t){throw"model.ts -> init: "+t}}()}),{type:typeof gsap,src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"},{type:typeof ls,src:"https://cdn.jsdelivr.net/npm/localstorage-slim"});
