var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=function(t){return t&&t.Math==Math&&t};e=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")();var r,o;r=!(o=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var a,i,c,u={};c=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var l=Function.prototype,s=l.call,f=c&&l.bind.bind(s,s);u=c?f:function(t){return function(){return s.apply(t,arguments)}};var p,d={},h="object"==typeof document&&document.all,y=(p={all:h,IS_HTMLDDA:void 0===h&&void 0!==h}).all;d=p.IS_HTMLDDA?function(t){return"function"==typeof t||t===y}:function(t){return"function"==typeof t};var m,v,g,b={};g=function(t){return null==t};var w=TypeError;v=function(t){if(g(t))throw w("Can't call method on "+t);return t};var S=Object;m=function(t){return S(v(t))};var L=u({}.hasOwnProperty);b=Object.hasOwn||function(t,e){return L(m(t),e)};var T,E=Function.prototype,M=r&&Object.getOwnPropertyDescriptor,_=b(E,"name"),O={EXISTS:_,PROPER:_&&"something"===function(){}.name,CONFIGURABLE:_&&(!r||r&&M(E,"name").configurable)}.CONFIGURABLE,q={},j={},H=Object.defineProperty;T=function(t,n){try{H(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n};var k="__core-js_shared__",P=e[k]||T(k,{});j=P;var x=u(Function.toString);d(j.inspectSource)||(j.inspectSource=function(t){return x(t)}),q=j.inspectSource;var A,D,I=e.WeakMap;D=d(I)&&/native code/.test(String(I));var C={},F=p.all;C=p.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:d(t)||t===F}:function(t){return"object"==typeof t?null!==t:d(t)};var $,N,G,R={},B=e.document,z=C(B)&&C(B.createElement);G=function(t){return z?B.createElement(t):{}},N=!r&&!o((function(){return 7!=Object.defineProperty(G("div"),"a",{get:function(){return 7}}).a}));var K;K=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var U,W=String,Y=TypeError;U=function(t){if(C(t))return t;throw Y(W(t)+" is not an object")};var X,J,Q={},V=Function.prototype.call;Q=c?V.bind(V):function(){return V.apply(V,arguments)};var Z,tt={},et=function(t){return d(t)?t:void 0};Z=function(t,n){return arguments.length<2?et(e[t]):e[t]&&e[t][n]};var nt={};nt=u({}.isPrototypeOf);var rt,ot,at,it={};it="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ct,ut,lt=e.process,st=e.Deno,ft=lt&&lt.versions||st&&st.version,pt=ft&&ft.v8;pt&&(ut=(ct=pt.split("."))[0]>0&&ct[0]<4?1:+(ct[0]+ct[1])),!ut&&it&&(!(ct=it.match(/Edge\/(\d+)/))||ct[1]>=74)&&(ct=it.match(/Chrome\/(\d+)/))&&(ut=+ct[1]),at=ut,rt=(ot=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&at&&at<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var dt=Object;tt=rt?function(t){return"symbol"==typeof t}:function(t){var e=Z("Symbol");return d(e)&&nt(e.prototype,dt(t))};var ht,yt,mt,vt=String;mt=function(t){try{return vt(t)}catch(t){return"Object"}};var gt=TypeError;yt=function(t){if(d(t))return t;throw gt(mt(t)+" is not a function")},ht=function(t,e){var n=t[e];return g(n)?void 0:yt(n)};var bt,wt=TypeError;bt=function(t,e){var n,r;if("string"===e&&d(n=t.toString)&&!C(r=Q(n,t)))return r;if(d(n=t.valueOf)&&!C(r=Q(n,t)))return r;if("string"!==e&&d(n=t.toString)&&!C(r=Q(n,t)))return r;throw wt("Can't convert object to primitive value")};var St;(St=function(t,e){return j[t]||(j[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Lt,Tt=0,Et=Math.random(),Mt=u(1..toString);Lt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Mt(++Tt+Et,36)};var _t=e.Symbol,Ot=St("wks"),qt=rt?_t.for||_t:_t&&_t.withoutSetter||Lt,jt=TypeError,Ht=function(t){return b(Ot,t)||(Ot[t]=ot&&b(_t,t)?_t[t]:qt("Symbol."+t)),Ot[t]}("toPrimitive");J=function(t,e){if(!C(t)||tt(t))return t;var n,r=ht(t,Ht);if(r){if(void 0===e&&(e="default"),n=Q(r,t,e),!C(n)||tt(n))return n;throw jt("Can't convert object to primitive value")}return void 0===e&&(e="number"),bt(t,e)},X=function(t){var e=J(t,"string");return tt(e)?e:e+""};var kt=TypeError,Pt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,At="enumerable",Dt="configurable",It="writable";$=r?K?function(t,e,n){if(U(t),e=X(e),U(n),"function"==typeof t&&"prototype"===e&&"value"in n&&It in n&&!n[It]){var r=xt(t,e);r&&r[It]&&(t[e]=n.value,n={configurable:Dt in n?n[Dt]:r[Dt],enumerable:At in n?n[At]:r[At],writable:!1})}return Pt(t,e,n)}:Pt:function(t,e,n){if(U(t),e=X(e),U(n),N)try{return Pt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw kt("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Ct;Ct=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},R=r?function(t,e,n){return $(t,e,Ct(1,n))}:function(t,e,n){return t[e]=n,t};var Ft,$t=St("keys");Ft=function(t){return $t[t]||($t[t]=Lt(t))};var Nt={};Nt={};var Gt,Rt,Bt,zt="Object already initialized",Kt=e.TypeError,Ut=e.WeakMap;if(D||j.state){var Wt=j.state||(j.state=new Ut);Wt.get=Wt.get,Wt.has=Wt.has,Wt.set=Wt.set,Gt=function(t,e){if(Wt.has(t))throw Kt(zt);return e.facade=t,Wt.set(t,e),e},Rt=function(t){return Wt.get(t)||{}},Bt=function(t){return Wt.has(t)}}else{var Yt=Ft("state");Nt[Yt]=!0,Gt=function(t,e){if(b(t,Yt))throw Kt(zt);return e.facade=t,R(t,Yt,e),e},Rt=function(t){return b(t,Yt)?t[Yt]:{}},Bt=function(t){return b(t,Yt)}}var Xt=(A={set:Gt,get:Rt,has:Bt,enforce:function(t){return Bt(t)?Rt(t):Gt(t,{})},getterFor:function(t){return function(e){var n;if(!C(e)||(n=Rt(e)).type!==t)throw Kt("Incompatible receiver, "+t+" required");return n}}}).enforce,Jt=A.get,Qt=String,Vt=Object.defineProperty,Zt=u("".slice),te=u("".replace),ee=u([].join),ne=r&&!o((function(){return 8!==Vt((function(){}),"length",{value:8}).length})),re=String(String).split("String"),oe=i=function(t,e,n){"Symbol("===Zt(Qt(e),0,7)&&(e="["+te(Qt(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!b(t,"name")||O&&t.name!==e)&&(r?Vt(t,"name",{value:e,configurable:!0}):t.name=e),ne&&n&&b(n,"arity")&&t.length!==n.arity&&Vt(t,"length",{value:n.arity});try{n&&b(n,"constructor")&&n.constructor?r&&Vt(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var o=Xt(t);return b(o,"source")||(o.source=ee(re,"string"==typeof e?e:"")),t};Function.prototype.toString=oe((function(){return d(this)&&Jt(this).source||q(this)}),"toString"),a=function(t,e,n){return n.get&&i(n.get,e,{getter:!0}),n.set&&i(n.set,e,{setter:!0}),$(t,e,n)};var ae;ae=function(){var t=U(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e};var ie=e.RegExp,ce=ie.prototype;r&&o((function(){var t=!0;try{ie(".","d")}catch(e){t=!1}var e={},n="",r=t?"dgimsy":"gimsy",o=function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var i in t&&(a.hasIndices="d"),a)o(i,a[i]);return Object.getOwnPropertyDescriptor(ce,"flags").get.call(e)!==r||n!==r}))&&a(ce,"flags",{configurable:!0,get:ae});var ue,le,se,fe={}.propertyIsEnumerable,pe=Object.getOwnPropertyDescriptor,de=pe&&!fe.call({1:2},1);se=de?function(t){var e=pe(this,t);return!!e&&e.enumerable}:fe;var he,ye,me={},ve=u({}.toString),ge=u("".slice);ye=function(t){return ge(ve(t),8,-1)};var be=Object,we=u("".split);me=o((function(){return!be("z").propertyIsEnumerable(0)}))?function(t){return"String"==ye(t)?we(t,""):be(t)}:be,he=function(t){return me(v(t))};var Se,Le=Object.getOwnPropertyDescriptor,Te=le=r?Le:function(t,e){if(t=he(t),e=X(e),N)try{return Le(t,e)}catch(t){}if(b(t,e))return Ct(!Q(se,t,e),t[e])};Se=function(t,e,n,r){r||(r={});var o=r.enumerable,a=void 0!==r.name?r.name:e;if(d(n)&&i(n,a,r),r.global)o?t[e]=n:T(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:$(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t};var Ee,Me,_e,Oe,qe,je={},He={},ke=Math.ceil,Pe=Math.floor;He=Math.trunc||function(t){var e=+t;return(e>0?Pe:ke)(e)},qe=function(t){var e=+t;return e!=e||0===e?0:He(e)};var xe=Math.max,Ae=Math.min;Oe=function(t,e){var n=qe(t);return n<0?xe(n+e,0):Ae(n,e)};var De,Ie,Ce=Math.min;Ie=function(t){return t>0?Ce(qe(t),9007199254740991):0},De=function(t){return Ie(t.length)};var Fe=function(t){return function(e,n,r){var o,a=he(e),i=De(a),c=Oe(r,i);if(t&&n!=n){for(;i>c;)if((o=a[c++])!=o)return!0}else for(;i>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}},$e={includes:Fe(!0),indexOf:Fe(!1)}.indexOf,Ne=u([].push);_e=function(t,e){var n,r=he(t),o=0,a=[];for(n in r)!b(Nt,n)&&b(r,n)&&Ne(a,n);for(;e.length>o;)b(r,n=e[o++])&&(~$e(a,n)||Ne(a,n));return a};var Ge,Re=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Me=Object.getOwnPropertyNames||function(t){return _e(t,Re)},Ge=Object.getOwnPropertySymbols;var Be=u([].concat);je=Z("Reflect","ownKeys")||function(t){var e=Me(U(t));return Ge?Be(e,Ge(t)):e},Ee=function(t,e,n){for(var r=je(e),o=$,a=le,i=0;i<r.length;i++){var c=r[i];b(t,c)||n&&b(n,c)||o(t,c,a(e,c))}};var ze={},Ke=/#|\.prototype\./,Ue=function(t,e){var n=Ye[We(t)];return n==Je||n!=Xe&&(d(e)?o(e):!!e)},We=Ue.normalize=function(t){return String(t).replace(Ke,".").toLowerCase()},Ye=Ue.data={},Xe=Ue.NATIVE="N",Je=Ue.POLYFILL="P";ze=Ue,ue=function(t,n){var r,o,a,i,c,u=t.target,l=t.global,s=t.stat;if(r=l?e:s?e[u]||T(u,{}):(e[u]||{}).prototype)for(o in n){if(i=n[o],a=t.dontCallGetSet?(c=Te(r,o))&&c.value:r[o],!ze(l?o:u+(s?".":"#")+o,t.forced)&&void 0!==a){if(typeof i==typeof a)continue;Ee(i,a)}(t.sham||a&&a.sham)&&R(i,"sham",!0),Se(r,o,i,t)}};var Qe,Ve={},Ze=Function.prototype,tn=Ze.apply,en=Ze.call;Ve="object"==typeof Reflect&&Reflect.apply||(c?en.bind(tn):function(){return en.apply(tn,arguments)});var nn,rn,on=(rn=function(t){if("Function"===ye(t))return u(t)})(rn.bind);nn=function(t,e){return yt(t),void 0===e?t:c?on(t,e):function(){return t.apply(e,arguments)}};var an={};an=Z("document","documentElement");var cn={};cn=u([].slice);var un={},ln=TypeError;un=function(t,e){if(t<e)throw ln("Not enough arguments");return t};var sn;sn=/(?:ipad|iphone|ipod).*applewebkit/i.test(it);var fn,pn,dn,hn,yn=pn={};function mn(){throw new Error("setTimeout has not been defined")}function vn(){throw new Error("clearTimeout has not been defined")}function gn(t){if(dn===setTimeout)return setTimeout(t,0);if((dn===mn||!dn)&&setTimeout)return dn=setTimeout,setTimeout(t,0);try{return dn(t,0)}catch(e){try{return dn.call(null,t,0)}catch(e){return dn.call(this,t,0)}}}!function(){try{dn="function"==typeof setTimeout?setTimeout:mn}catch(t){dn=mn}try{hn="function"==typeof clearTimeout?clearTimeout:vn}catch(t){hn=vn}}();var bn,wn=[],Sn=!1,Ln=-1;function Tn(){Sn&&bn&&(Sn=!1,bn.length?wn=bn.concat(wn):Ln=-1,wn.length&&En())}function En(){if(!Sn){var t=gn(Tn);Sn=!0;for(var e=wn.length;e;){for(bn=wn,wn=[];++Ln<e;)bn&&bn[Ln].run();Ln=-1,e=wn.length}bn=null,Sn=!1,function(t){if(hn===clearTimeout)return clearTimeout(t);if((hn===vn||!hn)&&clearTimeout)return hn=clearTimeout,clearTimeout(t);try{return hn(t)}catch(e){try{return hn.call(null,t)}catch(e){return hn.call(this,t)}}}(t)}}function Mn(t,e){this.fun=t,this.array=e}function _n(){}yn.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];wn.push(new Mn(t,e)),1!==wn.length||Sn||gn(En)},Mn.prototype.run=function(){this.fun.apply(null,this.array)},yn.title="browser",yn.browser=!0,yn.env={},yn.argv=[],yn.version="",yn.versions={},yn.on=_n,yn.addListener=_n,yn.once=_n,yn.off=_n,yn.removeListener=_n,yn.removeAllListeners=_n,yn.emit=_n,yn.prependListener=_n,yn.prependOnceListener=_n,yn.listeners=function(t){return[]},yn.binding=function(t){throw new Error("process.binding is not supported")},yn.cwd=function(){return"/"},yn.chdir=function(t){throw new Error("process.chdir is not supported")},yn.umask=function(){return 0},fn=void 0!==pn&&"process"==ye(pn);var On,qn,jn,Hn,kn=e.setImmediate,Pn=e.clearImmediate,xn=e.process,An=e.Dispatch,Dn=e.Function,In=e.MessageChannel,Cn=e.String,Fn=0,$n={},Nn="onreadystatechange";o((function(){On=e.location}));var Gn=function(t){if(b($n,t)){var e=$n[t];delete $n[t],e()}},Rn=function(t){return function(){Gn(t)}},Bn=function(t){Gn(t.data)},zn=function(t){e.postMessage(Cn(t),On.protocol+"//"+On.host)};kn&&Pn||(kn=function(t){un(arguments.length,1);var e=d(t)?t:Dn(t),n=cn(arguments,1);return $n[++Fn]=function(){Ve(e,void 0,n)},qn(Fn),Fn},Pn=function(t){delete $n[t]},fn?qn=function(t){xn.nextTick(Rn(t))}:An&&An.now?qn=function(t){An.now(Rn(t))}:In&&!sn?(Hn=(jn=new In).port2,jn.port1.onmessage=Bn,qn=nn(Hn.postMessage,Hn)):e.addEventListener&&d(e.postMessage)&&!e.importScripts&&On&&"file:"!==On.protocol&&!o(zn)?(qn=zn,e.addEventListener("message",Bn,!1)):qn=Nn in G("script")?function(t){an.appendChild(G("script"))[Nn]=function(){an.removeChild(this),Gn(t)}}:function(t){setTimeout(Rn(t),0)});var Kn=(Qe={set:kn,clear:Pn}).clear;ue({global:!0,bind:!0,enumerable:!0,forced:e.clearImmediate!==Kn},{clearImmediate:Kn});var Un,Wn,Yn=Qe.set;Wn="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var Xn,Jn=e.Function,Qn=/MSIE .\./.test(it)||Wn&&((Xn=e.Bun.version.split(".")).length<3||0==Xn[0]&&(Xn[1]<3||3==Xn[1]&&0==Xn[2]));Un=function(t,e){var n=e?2:1;return Qn?function(r,o){var a=un(arguments.length,1)>n,i=d(r)?r:Jn(r),c=a?cn(arguments,n):[],u=a?function(){Ve(i,this,c)}:i;return e?t(u,o):t(u)}:t};var Vn=e.setImmediate?Un(Yn,!1):Yn;ue({global:!0,bind:!0,enumerable:!0,forced:e.setImmediate!==Vn},{setImmediate:Vn});var Zn=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new H(r||[]);return o(i,"_invoke",{value:_(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",d="suspendedYield",h="executing",y="completed",m={};function v(){}function g(){}function b(){}var w={};l(w,i,(function(){return this}));var S=Object.getPrototypeOf,L=S&&S(S(k([])));L&&L!==n&&r.call(L,i)&&(w=L);var T=b.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function n(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function _(t,e,n){var r=p;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=f(t,e,n);if("normal"===u.type){if(r=n.done?y:d,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=y,n.method="throw",n.arg=u.arg)}}}function O(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=f(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function H(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=b,o(T,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(T),t},t.awrap=function(t){return{__await:t}},E(M.prototype),l(M.prototype,c,(function(){return this})),t.AsyncIterator=M,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new M(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(T),l(T,u,"Generator"),l(T,i,(function(){return this})),l(T,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,H.prototype={constructor:H,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}({});try{regeneratorRuntime=Zn}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=Zn:Function("r","regeneratorRuntime = r")(Zn)}const tr=(t,e=(()=>{}))=>{new Promise(((e,n)=>{const r=document.createElement("script");document.head.appendChild(r),r.onload=e,r.onerror=n,r.async=!0,r.src=t})).then(e)},er=.3,nr={},rr=async function(t){try{return await async function(t){try{const n=await Promise.race([fetch(t),(e=10,new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)})))]),r=await n.json();if(!n.ok)throw new Error(`${r.message} (${n.status})`);return r}catch(t){throw"helper/model/utils.ts -> getJson: "+t}var e}(`https://app.kannamaps.de/api:uxQm4-cT/product/${t}`)}catch(t){throw"model.ts -> init: "+t}};function or(){window.KannaMaps;const t={},e=document.querySelector('[c-el="product-details"]'),n=document.querySelector('[c-el="community-data"]'),r=document.querySelector('[c-el="apothecaries-popup"]');return t.productDetails=e,t.communityData=n,t.apothecariesPopup=r,t}function ar(t){const e=t.split(/[\s-]+/).map((t=>{if(t.length>0){const e=t.charAt(0),n=t.slice(1);return e.toUpperCase()+n}return t}));return t.split(/\b/).map(((t,n)=>0===e.length?"":t.match(/[A-Za-z]/)?e.shift():t)).join("")}function ir(t){const e=window.KannaMaps,n=e.elements.productDetails,r=e.elements.communityData,o=e.elements.apothecariesPopup,a=e.productData,i=parseFloat(er.toString());if(c=n,!("object"==typeof HTMLElement?c instanceof HTMLElement:c&&"object"==typeof c&&null!==c&&1===c.nodeType&&"string"==typeof c.nodeName))return console.error("KannaMaps -> render.ts: Couldn't find list and/or template!",n),!1;var c;t||(console.log("rendering"),function(t,e){const n="available"===e.data.apothecaries_data.availability_status,r=t.querySelector('[c-el="available"]'),o=t.querySelector('[c-el="not-available"]');console.log("isProductAvialable",n),console.log("availableEl",r),console.log("notAvailableEl",o),n?o?.classList.add("hide"):r?.classList.add("hide");const a=e.data.detailed["Terpendichte—mg/g"],i=t.querySelector('[c-el="terpendichte"]');i&&(i.innerHTML=a?`${a} mg/g`:"n.v.");const c=e.data.apothecaries_data.price_min,u=e.data.apothecaries_data.price_max,l=t.querySelector('[c-el="min-price"]'),s=t.querySelector('[c-el="max-price"]');l&&(l.innerHTML=c||"n.v."),s&&(s.innerHTML=u||"n.v.");const f=function(t){const e=["Sorte","Kultivar","Genetik","Gehalt—THC","Gehalt—CBD","Hersteller","Bestrahlung","Terpendichte—mg/g"],n=Object.keys(t).filter((n=>!e.includes(n)&&null!==t[n])).map((e=>({key:ar(e.replace("—"," ")),value:t[e],percentage:0})));n.sort(((t,e)=>parseFloat(e.value)-parseFloat(t.value)));const r=n.reduce(((t,e)=>t+parseFloat(e.value)),0);return n.forEach((t=>{t.percentage=Math.round(parseFloat(t.value)/r*100)})),console.log("terpenes",n),n}(e.data.detailed);t.querySelectorAll('[c-el="terpene"]').forEach(((t,e)=>{const n=f[e],r=t.querySelector('[c-el="name"]'),o=t.querySelector('[c-el="color"]'),a=t.querySelector('[c-el="percentage"]');r&&o&&a&&(o.classList.remove("alpha-humulene","linalool","d-limonene","fenchyl"),n?(r.innerHTML=n.key,o.classList.add(n.key.toLowerCase().replace(" ","-")),a.innerHTML=`${n.percentage}%`):(r.innerHTML="n.v.",a.innerHTML="-"))}));const p=fr(e.data.community_data.detailed.area_of_application)[0],d=t.querySelector('[c-el="area-of-application"]');d&&(d.innerHTML=p?p.name:"n.v.");const h=lr(e.data.community_data.detailed.positive_effects)[0],y=t.querySelector('[c-el="effect"]');y&&(y.innerHTML=h?h.name:"n.v.");const m=sr(e.data.community_data.detailed.taste)[0],v=t.querySelector('[c-el="taste"]');v&&(v.innerHTML=m?m.name:"n.v.");const g=e.data.community_data.rating,b=e.data.community_data.ratings,w=t.querySelector('[c-el="rating-stars"]');w&&cr(w,g,b)}(n,a),function(t,e){const n=lr(e.data.community_data.detailed.positive_effects);t.querySelectorAll('[c-el="effect"]').forEach(((t,e)=>{const r=n[e],o=t.querySelector('[c-el="name"]'),a=t.querySelector('[c-el="percentage"]'),i=t.querySelector('[c-el="link"]');o&&a&&i&&(r?(o.innerHTML=r.name,a.innerHTML=`(${r.percentage}%)`,i.href=`/?effekt=${ur(r.name)}`):(o.innerHTML="n.v.",a.innerHTML="(-)"))}));const r=function(t){const e=t,n=e.reduce(((t,e)=>t+e.total_confirmations),0);e.sort(((t,e)=>e.total_confirmations-t.total_confirmations));const r=e.map((t=>({...t,percentage:Math.round(t.total_confirmations/n*100)})));return r}(e.data.community_data.detailed.side_effects);t.querySelectorAll('[c-el="side-effect"]').forEach(((t,e)=>{const n=r[e],o=t.querySelector('[c-el="name"]'),a=t.querySelector('[c-el="percentage"]'),i=t.querySelector('[c-el="link"]');o&&a&&i&&(n?(o.innerHTML=n.name,a.innerHTML=`(${n.percentage}%)`,i.href=`/?nebenwirkung=${ur(n.name)}`):(o.innerHTML="n.v.",a.innerHTML="(-)"))}));const o=function(t){const e=t,n=e.reduce(((t,e)=>t+e.total_confirmations),0);e.sort(((t,e)=>e.total_confirmations-t.total_confirmations));const r=e.map((t=>({...t,percentage:Math.round(t.total_confirmations/n*100)})));return r}(e.data.community_data.detailed.activities),a=t.querySelectorAll('[c-el="activity"]');console.log("activities",o),console.log("activitiesEls",a),a.forEach(((t,e)=>{const n=o[e],r=t.querySelector('[c-el="name"]'),a=t.querySelector('[c-el="percentage"]'),i=t.querySelector('[c-el="link"]');r&&a&&i&&(n?(r.innerHTML=n.name,a.innerHTML=`(${n.percentage}%)`,i.href=`/?aktivität=${ur(n.name)}`):(r.innerHTML="n.v.",a.innerHTML="(-)"))}));const i=sr(e.data.community_data.detailed.taste);t.querySelectorAll('[c-el="taste"]').forEach(((t,e)=>{const n=i[e],r=t.querySelector('[c-el="name"]'),o=t.querySelector('[c-el="percentage"]'),a=t.querySelector('[c-el="link"]');r&&o&&a&&(n?(r.innerHTML=n.name,o.innerHTML=`(${n.percentage}%)`,a.href=`/?geschmack=${ur(n.name)}`):(r.innerHTML="n.v.",o.innerHTML="(-)"))}));const c=fr(e.data.community_data.detailed.area_of_application);t.querySelectorAll('[c-el="area-of-application"]').forEach(((t,e)=>{const n=c[e],r=t.querySelector('[c-el="name"]'),o=t.querySelector('[c-el="percentage"]'),a=t.querySelector('[c-el="link"]');r&&o&&a&&(n?(r.innerHTML=n.name,o.innerHTML=`(${n.percentage}%)`,a.href=`/?anwendungsgebiet=${ur(n.name)}`):(r.innerHTML="n.v.",o.innerHTML="(-)"))}));const u=function(t){const e=t,n=e.reduce(((t,e)=>t+e.total_confirmations),0);e.sort(((t,e)=>e.total_confirmations-t.total_confirmations));const r=e.map((t=>({...t,percentage:Math.round(t.total_confirmations/n*100)})));return r}(e.data.community_data.detailed.quality);t.querySelectorAll('[c-el="quality"]').forEach(((t,e)=>{const n=u[e],r=t.querySelector('[c-el="name"]'),o=t.querySelector('[c-el="percentage"]'),a=t.querySelector('[c-el="link"]');r&&o&&a&&(n?(r.innerHTML=n.name,o.innerHTML=`(${n.percentage}%)`,a.href=`/?qualität=${ur(n.name)}`):(r.innerHTML="n.v.",o.innerHTML="(-)"))}));const l=e.data.community_data.rating,s=e.data.community_data.ratings,f=t.querySelector('[c-el="rating-stars"]');f&&cr(f,l,s)}(r,a),function(t,e){console.log("renderApothecariesPopup",e);const n=e.data.apothecaries_data.detailed,r=t.querySelector('[c-el="apothecary-list"]'),o=r?.querySelector('[c-el="apothecary"]')?.cloneNode(!0),a=t.querySelector('[c-el="type"]'),i=t.querySelector('[c-el="strain"]');console.log("apothecaries",n),console.log("apothecaryListEl",r),console.log("templateEl",o),r&&o&&a&&i&&(a.innerHTML=e.data?.type||"n.v.",i.innerHTML=e.data?.strain||"n.v.",r.innerHTML="",n.forEach((t=>{const e=o.cloneNode(!0),n=e.querySelector('[c-el="name"]'),a=e.querySelector('[c-el="price"]'),i=e.querySelector('[c-el="unavailable-dot"]');console.log("apothecaryEl",e),console.log("nameEl",n),console.log("priceEl",a),n&&a&&i&&(n.innerHTML=t._vendor.name||"n.v.",a.innerHTML=t.price?t.price.toString():"n.v.",i.style.display=t.available?"none":"block",r.appendChild(e))})))}(o,a));const u={opacity:0,display:"none",pointerEvents:"none"},l={opacity:1,display:"block",pointerEvents:"auto"};let s=1;e.gsap&&(s=e.gsap.progress(),e.gsap.kill());const f=gsap.timeline({paused:!0});e.gsap=f;const p=[],d=document.querySelector('[c-el="skeleton"]');d&&p.push(d),f.fromTo(p,t?u:l,t?{...l,duration:i,ease:"power1.inOut"}:{...u,duration:i,ease:"power1.inOut"}),f.progress(1-s),f.play()}function cr(t,e,n){const r=t?.querySelectorAll('[c-el="star"]'),o=t?.querySelector('[c-el="count"]');r&&e&&r.forEach(((t,n)=>{const r=Math.round(100*(Math.min(n+1,e)-n));if(r<0)return;const o=`gradient-${function(){const t=String.fromCharCode(65+Math.floor(26*Math.random()));return t+Date.now()}()}-${n}`,a=t.querySelector("svg");if(!a)return;a.querySelector("linearGradient")?.setAttribute("id",o);const i=a.querySelectorAll("stop"),c=i[i.length-1],u=i[i.length-2];if(!c||!u)return;c.setAttribute("offset",`${r}%`),u.setAttribute("offset",`${r}%`);const l=a.querySelector("path");l&&l.setAttribute("fill",`url(#${o})`)})),o&&(o.innerHTML=n.toString())}function ur(t){return t.toLowerCase().replace(/\s+/g,"+").replace(/--+/g,"-").trim()}function lr(t){const e=t,n=e.reduce(((t,e)=>t+e.total_confirmations),0);e.sort(((t,e)=>e.total_confirmations-t.total_confirmations));return e.map((t=>({...t,percentage:Math.round(t.total_confirmations/n*100)})))}function sr(t){const e=t,n=e.reduce(((t,e)=>t+e.total_confirmations),0);e.sort(((t,e)=>e.total_confirmations-t.total_confirmations));return e.map((t=>({...t,percentage:Math.round(t.total_confirmations/n*100)})))}function fr(t){const e=t,n=e.reduce(((t,e)=>t+e.total_confirmations),0);e.sort(((t,e)=>e.total_confirmations-t.total_confirmations));return e.map((t=>({...t,percentage:Math.round(t.total_confirmations/n*100)})))}function pr(t){t.elements=or(),t.renderProductData=(t=!1)=>{ir(t)},t.renderProductData()}((t,...e)=>{!function n(r){r!==e.length?"undefined"===e[r].type?tr(e[r].src,(()=>n(r+1))):n(r+1):"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()}(0)})((async function(){console.log("Hello, I'm KannaMaps!"),window.KannaMaps=nr,await async function(){try{nr.getProductData=async()=>{const t=document.querySelector("body")?.getAttribute("xano-id");if(!t)throw"No Xano ID found";const e=await rr(t);return nr.productData=e,e},await nr.getProductData()}catch(t){throw"model.ts -> init: "+t}}(),console.log("model.state",nr),pr(nr)}),{type:typeof gsap,src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"});
