import{s as y,r as S,j as b,L as qe}from"./index-f728a00f.js";function ge(e,t){return function(){return e.apply(t,arguments)}}const{toString:Je}=Object.prototype,{getPrototypeOf:ne}=Object,q=(e=>t=>{const n=Je.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>q(t)===e),J=e=>t=>typeof t===e,{isArray:F}=Array,L=J("undefined");function Ve(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ee=O("ArrayBuffer");function ve(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ee(e.buffer),t}const Ye=J("string"),g=J("function"),Se=J("number"),V=e=>e!==null&&typeof e=="object",Qe=e=>e===!0||e===!1,M=e=>{if(q(e)!=="object")return!1;const t=ne(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ke=O("Date"),We=O("File"),Ge=O("Blob"),Xe=O("FileList"),$e=e=>V(e)&&g(e.pipe),Ze=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=q(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},et=O("URLSearchParams"),tt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let c;for(r=0;r<i;r++)c=s[r],t.call(null,e[c],c,e)}}function Re(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Oe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Te=e=>!L(e)&&e!==Oe;function $(){const{caseless:e}=Te(this)&&this||{},t={},n=(r,o)=>{const s=e&&Re(t,o)||o;M(t[s])&&M(r)?t[s]=$(t[s],r):M(r)?t[s]=$({},r):F(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&j(arguments[r],n);return t}const nt=(e,t,n,{allOwnKeys:r}={})=>(j(t,(o,s)=>{n&&g(o)?e[s]=ge(o,n):e[s]=o},{allOwnKeys:r}),e),rt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ot=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},st=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ne(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},it=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},at=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!Se(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ct=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),lt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ft=O("HTMLFormElement"),dt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ce=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),pt=O("RegExp"),Ce=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},ht=e=>{Ce(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},mt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return F(e)?r(e):r(String(e).split(t)),n},wt=()=>{},xt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",le="0123456789",Ne={DIGIT:le,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+le},bt=(e=16,t=Ne.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function yt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const At=e=>{const t=new Array(10),n=(r,o)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=F(r)?[]:{};return j(r,(i,c)=>{const p=n(i,o+1);!L(p)&&(s[c]=p)}),t[o]=void 0,s}}return r};return n(e,0)},gt=O("AsyncFunction"),Et=e=>e&&(V(e)||g(e))&&g(e.then)&&g(e.catch),a={isArray:F,isArrayBuffer:Ee,isBuffer:Ve,isFormData:Ze,isArrayBufferView:ve,isString:Ye,isNumber:Se,isBoolean:Qe,isObject:V,isPlainObject:M,isUndefined:L,isDate:Ke,isFile:We,isBlob:Ge,isRegExp:pt,isFunction:g,isStream:$e,isURLSearchParams:et,isTypedArray:ct,isFileList:Xe,forEach:j,merge:$,extend:nt,trim:tt,stripBOM:rt,inherits:ot,toFlatObject:st,kindOf:q,kindOfTest:O,endsWith:it,toArray:at,forEachEntry:lt,matchAll:ut,isHTMLForm:ft,hasOwnProperty:ce,hasOwnProp:ce,reduceDescriptors:Ce,freezeMethods:ht,toObjectSet:mt,toCamelCase:dt,noop:wt,toFiniteNumber:xt,findKey:Re,global:Oe,isContextDefined:Te,ALPHABET:Ne,generateString:bt,isSpecCompliantForm:yt,toJSONObject:At,isAsyncFn:gt,isThenable:Et};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Pe=m.prototype,Be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Be[e]={value:e}});Object.defineProperties(m,Be);Object.defineProperty(Pe,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(Pe);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const St=null;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function Fe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map(function(o,s){return o=Fe(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Rt(e){return a.isArray(e)&&!e.some(Z)}const Ot=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function v(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,T){return!a.isUndefined(T[h])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,h,T){let E=d;if(d&&!T&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Rt(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(E=a.toArray(d)))return h=Fe(h),E.forEach(function(U,_e){!(a.isUndefined(U)||U===null)&&t.append(i===!0?ue([h],_e,s):i===null?h:h+"[]",l(U))}),!1}return Z(d)?!0:(t.append(ue(T,h,s),l(d)),!1)}const f=[],w=Object.assign(Ot,{defaultVisitor:u,convertValue:l,isVisitable:Z});function x(d,h){if(!a.isUndefined(d)){if(f.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));f.push(d),a.forEach(d,function(E,P){(!(a.isUndefined(E)||E===null)&&o.call(t,E,a.isString(P)?P.trim():P,h,w))===!0&&x(E,h?h.concat(P):[P])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return x(e),t}function fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&v(e,this,t)}const De=re.prototype;De.append=function(t,n){this._pairs.push([t,n])};De.toString=function(t){const n=t?function(r){return t.call(this,r,fe)}:fe;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||Tt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Ct{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const de=Ct,je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nt=typeof URLSearchParams<"u"?URLSearchParams:re,Pt=typeof FormData<"u"?FormData:null,Bt=typeof Blob<"u"?Blob:null,Ft=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Dt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:Nt,FormData:Pt,Blob:Bt},isStandardBrowserEnv:Ft,isStandardBrowserWebWorkerEnv:Dt,protocols:["http","https","file","blob","url","data"]};function Lt(e,t){return v(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function jt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function ke(e){function t(n,r,o,s){let i=n[s++];const c=Number.isFinite(+i),p=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,p?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=kt(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(jt(r),o,n,0)}),n}return null}const Ut={"Content-Type":void 0};function Mt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Y={transitional:je,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Lt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return v(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Mt(t)):t}],transformResponse:[function(t){const n=this.transitional||Y.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){Y.headers[t]={}});a.forEach(["post","put","patch"],function(t){Y.headers[t]=a.merge(Ut)});const oe=Y,It=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ht=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&It[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pe=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const _t=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function W(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function qt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Jt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(c,p,l){const u=D(p);if(!u)throw new Error("header name must be a non-empty string");const f=a.findKey(o,u);(!f||o[f]===void 0||l===!0||l===void 0&&o[f]!==!1)&&(o[f||p]=I(c))}const i=(c,p)=>a.forEach(c,(l,u)=>s(l,u,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!_t(t)?i(Ht(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return zt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||W(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=D(i),i){const c=a.findKey(r,i);c&&(!n||W(r,r[c],c,n))&&(delete r[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||W(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=I(o),delete n[s];return}const c=t?qt(s):String(s).trim();c!==s&&delete n[s],n[c]=I(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[pe]=this[pe]={accessors:{}}).accessors,o=this.prototype;function s(i){const c=D(i);r[c]||(Jt(o,i),r[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Q.prototype);a.freezeMethods(Q);const C=Q;function G(e,t){const n=this||oe,r=t||n,o=C.from(r.headers);let s=r.data;return a.forEach(e,function(c){s=c.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Ue(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,m,{__CANCEL__:!0});function Vt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const vt=R.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,c){const p=[];p.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&p.push("expires="+new Date(o).toGMTString()),a.isString(s)&&p.push("path="+s),a.isString(i)&&p.push("domain="+i),c===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Yt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Qt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Me(e,t){return e&&!Yt(t)?Qt(e,t):t}const Kt=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const c=a.isString(i)?o(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Wt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(p){const l=Date.now(),u=r[s];i||(i=l),n[o]=p,r[o]=l;let f=s,w=0;for(;f!==o;)w+=n[f++],f=f%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),l-i<t)return;const x=u&&l-u;return x?Math.round(w*1e3/x):void 0}}function he(e,t){let n=0;const r=Gt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-n,p=r(c),l=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&l?(i-s)/p:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Xt=typeof XMLHttpRequest<"u",$t=Xt&&function(e){return new Promise(function(n,r){let o=e.data;const s=C.from(e.headers).normalize(),i=e.responseType;let c;function p(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(o)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(x+":"+d))}const u=Me(e.baseURL,e.url);l.open(e.method.toUpperCase(),Le(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function f(){if(!l)return;const x=C.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:x,config:e,request:l};Vt(function(E){n(E),p()},function(E){r(E),p()},h),l=null}if("onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(f)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||je;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},R.isStandardBrowserEnv){const x=(e.withCredentials||Kt(u))&&e.xsrfCookieName&&vt.read(e.xsrfCookieName);x&&s.set(e.xsrfHeaderName,x)}o===void 0&&s.setContentType(null),"setRequestHeader"in l&&a.forEach(s.toJSON(),function(d,h){l.setRequestHeader(h,d)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",he(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",he(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=x=>{l&&(r(!x||x.type?new k(null,e,l):x),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const w=Wt(u);if(w&&R.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}l.send(o||null)})},H={http:St,xhr:$t};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Zt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?H[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function X(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function me(e){return X(e),e.headers=C.from(e.headers),e.data=G.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Zt.getAdapter(e.adapter||oe.adapter)(e).then(function(r){return X(e),r.data=G.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Ue(r)||(X(e),r&&r.response&&(r.response.data=G.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof C?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(l,u,f){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:f},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(l,u,f){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function s(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const p={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>o(we(l),we(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=p[u]||o,w=f(e[u],t[u],u);a.isUndefined(w)&&f!==c||(n[u]=w)}),n}const Ie="1.4.0",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};se.transitional=function(t,n,r){function o(s,i){return"[Axios v"+Ie+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,c)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,c):!0}};function en(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const c=e[s],p=c===void 0||i(c,s,e);if(p!==!0)throw new m("option "+s+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const ee={assertOptions:en,validators:se},N=ee.validators;class _{constructor(t){this.defaults=t,this.interceptors={request:new de,response:new de}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&ee.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:ee.assertOptions(o,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete s[d]}),n.headers=C.concat(i,s);const c=[];let p=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(p=p&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let u,f=0,w;if(!p){const d=[me.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,l),w=d.length,u=Promise.resolve(n);f<w;)u=u.then(d[f++],d[f++]);return u}w=c.length;let x=n;for(f=0;f<w;){const d=c[f++],h=c[f++];try{x=d(x)}catch(T){h.call(this,T);break}}try{u=me.call(this,x)}catch(d){return Promise.reject(d)}for(f=0,w=l.length;f<w;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=B(this.defaults,t);const n=Me(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){_.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,c){return this.request(B(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}_.prototype[t]=n(),_.prototype[t+"Form"]=n(!0)});const z=_;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(c=>{r.subscribe(c),s=c}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,c){r.reason||(r.reason=new k(s,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(o){t=o}),cancel:t}}}const tn=ie;function nn(e){return function(n){return e.apply(null,n)}}function rn(e){return a.isObject(e)&&e.isAxiosError===!0}const te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(te).forEach(([e,t])=>{te[t]=e});const on=te;function He(e){const t=new z(e),n=ge(z.prototype.request,t);return a.extend(n,z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return He(B(e,o))},n}const A=He(oe);A.Axios=z;A.CanceledError=k;A.CancelToken=tn;A.isCancel=Ue;A.VERSION=Ie;A.toFormData=v;A.AxiosError=m;A.Cancel=A.CanceledError;A.all=function(t){return Promise.all(t)};A.spread=nn;A.isAxiosError=rn;A.mergeConfig=B;A.AxiosHeaders=C;A.formToJSON=e=>ke(a.isHTMLForm(e)?new FormData(e):e);A.HttpStatusCode=on;A.default=A;const ze=A;ze.defaults.baseURL="https://64145ef136020cecfda6b0f0.mockapi.io";const sn=async()=>{try{const{data:e}=await ze.get("/users");return e}catch(e){throw new Error(e.message)}},an={fetchTweets:sn},ae={desktop:"@media screen and (min-width: 1200px)",tablet:"@media screen and (min-width: 768px)",mobile:"@media screen and (max-width: 767px)"},cn=y.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 460px;
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`,ln=y.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`,un=y.img`
  position: absolute;
  width: 100%;
  max-width: 308px;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  top: 28px;
`,fn=y.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  }

  ${ae.mobile} {
    width:100%;
    max-width: 380px;    
  }
`,dn=y.div`
  position: absolute;
  left: 150px;
  top: 178px;
  width: 80px;
  height: 80px;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  overflow: hidden;
  z-index: 10;
  box-sizing: border-box;

  ${ae.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
  }
`,pn=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,hn=y.p`
  position: absolute;
  margin: 0;
  top: 284px;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`,mn=y.p`
  position: absolute;
  top: 324px;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`,wn=y.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  border: none;

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: ${e=>e.isFollowing?"#5CD3A8":"#ebd8ff"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${ae.mobile} {
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 196px;
  }
`,xn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgB1VgxTxtRDPZVzZBIZYBKzdAMdGBIh2bokqVDu/Yvw8DCwhAGGDLAEAaQyMKQDDkp+LvzQ87TO54TIDGfZOXdxWfe+87+7FAsl8v/tHvM2E6LoiibHHifA/74TjvGJ/KBDtuAPgC8EAZ0OYuOyDk8EQYcMWnfyDG8EQYMmLQ2OYVHwlpsQybtMzmEdVPoXtdsU7Y5GzIAQo2udZDwf2S7Ff+F+PfI3uVCEzinzXDHdiXrQzHgjOr9NwH7HL7wvYkw/IEzbvkzdQ9rkDERodZiPWbfcRSj8mffsWzIUnJVE0jEsqAM++UYC3V/Hp1jBexLOeRKcoUslAnbXqQxe2p9qw8o/p1wLXHwlkuyAU2gR28H7P1A7DlZwj1e7ucC5DJsqsgCSX+o1hhco0Rx8K7y12T94I++rCuiOFb1huVZ6wjRZ/8Hehv8VusTtlJe6NAaIJdhE7WGpoAskDKiWqdmsgZxjxG5ffVsPJhOyY6qCZBdb98VuU1ogQxliKxbObDomNaKTiJWuyGuBQVJZu8auQxLHbKNNE60fa1lyL5Yp1LkW4A4ue62NeQI0yPDBdWbRmn9Zfsa+bZEOCHuyLZL9d1cng9Y50f05UudbdvIleQhkzAJYs3XxyKSCyElBkoT2QDSMHJgHmrpA4u+dckGjCgTcoRchoWp+7mEcHhNluhX0Cy051+hXOGXIGtINj2633AGe1dYOg/I+IdMo3qCLuU5lB9mpPjwuAfibqjWMsr4p4ASHtHm2Jf/nwFfGnwwrpS0ZjNZp1X3xCwAyT9pM1Qi31DyVnQo3ak1rLKwAo8/vkeeRD6GN8Ig8nfkGJ4IcynyMbwQ9lqR3xqeAP79BzwxZzuPAAAAAElFTkSuQmCC",be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAsCAYAAACZmXFCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASASURBVHgB7Zw/TxtBEMXHEY4ERSyFAgpTQOFIUJACCpo0afOVU6WgoQhSQIoLU2ApuHCBCywFS2QenksOe2dv73bXRDA/aWVx7A335zH7bnbPrYeHhy9kFFy0Wq0rioCvZ5c/PpLxyBsyyhywQN6RkQwT2DJHLLJ1MpJgAltmg9sRGUkwgbnpcBbbJyMaE5jOHotsl4woTGB+YPo3yWiMCayaQzP9zTGBVfNo+llka2TUxgQWRodbj4zamMDCMdPfABNYPcz01ySXr5hxu+Y25fZbPmGU33LDVMym/Nw09i23kcSeyfYNifsuInYIMP2nPGc5pdVzSfNzL9Mmd2HY1bcuuJYHFEFqgY259fnij6s6SiaArwnNCBDSgNsVx79X+gwk9o7EziG0wvRDZDNaLbeL15aPYyO0b104NsWSUmC1ViLIyZ/ySezRXAy+Y0E2vPQIazE2+l9z7B7lMeeF6b8kw0sqD3bedJkL74es88PTBRnxPFRcC7H72J/yYKY/gBQC60vGaIQUMbUsMxKRNCazyMz0VxA7RN76BCBrq9BgRO+4jcu+RYqXJzT3NYvARF94YmNfDFX4nPn8Bo5RhJBDDM9p+n3sKOIfLHpH7of748rG0R42VmBODyI3H6s6tx2/65dEiT6aSb3mfndK/C3Zt13ahr5Dj+Cx/YTS85ym30dX2T6kf0/eBbiOWQrJMQKberKGU1xCT5YVjzx9wNC1UcR17PjVhsRe4+NaEj6OVUSoCToGM/0KMQL75doo4ikLB0OHKxNh6CwLtBjuwFjLXlRdl4H5Hinih6hzGXP8XZxr7YeRl0xUBlO2L2aln3yzh1QB3xxkva4vNvdB7JAMhDqYS2CxhccqIP7Kc31NxDxFagJLMQRp2Sv0hYz3yvZVeCTLYCX+1yUo2nGFCkTrl/vm40Hijoy/xGQwTQQTiked/qAwtJucc45yEFuze4nECEwbrhaLruuox5RayDDnrFeJcQ+pN42U7R3Kw9T15GrECWzHtVFEUJ42+kDz+lPRQmbn254K+XfyM/DMLGxReiD4UzKcxAhMFQHfYFTgMVwsZht4oxsKo6vEhoC/KbH7WiaR8kmOGtiZp6Ty6ok1+SguOv97iznAkggxnVOnTICpDizNmThiI85XiY0qNMz7pGJCPEelul/znF4dsZPdm7IkRgUZR1qTG3Hoe9lC4t7IpyouOcbU2ctMfQApVlP0qkRWhUz/uPwRTPlxzBs9mdaEmakPJNV6MIhsv64Q0J8bTD/mFttKNwyDn+q+m1iKnVxcZKY+mJSFVqxM3cZqCZrPJarlBPFOyFh4Em0HxMbw9pn3w9NhvyL2mhzLbmDsujynqV93LJGuW9tbdyyFzlYfbGX8Ajp4LgihMOm4MLj5hTGPjV3UxO4lHi5Sh/Ks+SroV/ku+wK6p+ScKupI26b0FLFXiZn6Bth7kWGYqW+ICawaM/URmMCqsUp9BCYwPxdWqY/DBKYziP1Kc8MEpjExU58GE9gyMPVnZCTBBLaMmfqEmMCeYqY+MX8Au/W380rAxe0AAAAASUVORK5CYII=",bn="/tweet_card/assets/signs-b75d874a.png",ye="/tweet_card/assets/signs@2x-43a1e8bf.png",yn=({item:e})=>{const[t,n]=S.useState(e.tweets),[r,o]=S.useState(e.followers),[s,i]=S.useState(e.avatar),c=()=>{o(l=>e.isFollowing?l-1:l+1),e.isFollowing=!e.isFollowing},p=l=>l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return b.jsxs(cn,{children:[b.jsx(ln,{srcSet:`${xn} 1x, ${be} 2x`,src:be,alt:"logo"}),b.jsx(un,{srcSet:`${bn} 1x, ${ye} 2x`,src:ye,alt:"signs"}),b.jsx(fn,{}),b.jsx(dn,{children:b.jsx(pn,{src:s,alt:"avatar"})}),b.jsxs(hn,{children:[t," tweets"]}),b.jsxs(mn,{children:[p(r)," followers"]}),b.jsx(wn,{isFollowing:e.isFollowing,onClick:c,children:e.isFollowing?"Following":"Follow"})]})},An=y.div`
  position: relative;
  display: inline-block;
`,gn=y.button`
  width: 120px;
  background-color: #fff;
  color: black;
  border: 2px solid #00c2ad;
  padding: 8px 12px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    color: #3e2d85;
    border: 2px solid #3e2d85;
    outline: none;
  }
`,En=y.span`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333;
  margin-left: auto;
  transition: transform 0.3s ease;

  ${({isOpen:e})=>e&&"transform: rotate(180deg);"}
`,Sn=y.ul`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  z-index: 999;
  min-width: 120px;
`,Rn=y.li`
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`,On=({value:e,onChange:t})=>{const[n,r]=S.useState(!1),o=[{value:"show all",label:"Show All"},{value:"follow",label:"Follow"},{value:"following",label:"Following"}],s=()=>{r(!n)},i=c=>{t(c),r(!1)};return b.jsxs(An,{children:[b.jsxs(gn,{onClick:s,children:[e,b.jsx(En,{isOpen:n})]}),n&&b.jsx(Sn,{children:o.map(c=>b.jsx(Rn,{onClick:()=>i(c.value),children:c.label},c.value))})]})},Tn={desktop:"@media screen and (min-width: 1200px)",tablet:"@media screen and (min-width: 768px)",mobile:"@media screen and (max-width: 767px)"},Cn=y.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`,Nn=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 20px;
`,Pn=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`,Bn=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;

  ${Tn.mobile} {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    gap: 20px;
  }
`,Fn=y(qe)`
  display: flex;
  color: black;
  font-weight: 600;
  font-size: 20px;

  &:hover,
  &:focus {
    color: #3e2d85;
  }
`,Ae=y.button`
  width: 185px;
  text-align: center;
  padding: 10px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.disabled?"#9e9e9e":"#00c2ad"};
  border: 2px solid ${e=>e.disabled?"#9e9e9e":"#00c2ad"};
  background-color: white;
  margin-bottom: 20px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  &:hover,
  &:focus {
    color: ${e=>e.disabled?"#9e9e9e":"#3e2d85"};
    border: 2px solid ${e=>e.disabled?"#9e9e9e":"#3e2d85"};

    &:focus {
      outline: none;
    }
  }
`,Ln=()=>{const[e,t]=S.useState([]),[n,r]=S.useState([]),[o,s]=S.useState(3),[i,c]=S.useState("Show all");S.useEffect(()=>{(async()=>{try{const w=await an.fetchTweets();t(w)}catch(w){console.error(w)}})()},[]),S.useEffect(()=>{let f=e;i==="follow"?f=e.filter(w=>!w.isFollowing):i==="following"&&(f=e.filter(w=>w.isFollowing===!0)),r(f.slice(0,o))},[e,i,o]);const p=()=>{s(f=>f+3)},l=f=>{c(f)},u=[{value:"show all",label:"Show All"},{value:"follow",label:"Follow"},{value:"following",label:"Following"}];return b.jsxs(Cn,{children:[b.jsxs(Bn,{children:[b.jsx(Fn,{to:"/",children:"⬅ Back"}),b.jsx(On,{value:i,options:u,onChange:l})]}),b.jsx(Nn,{children:n.map(f=>b.jsx(yn,{item:f},f.id))}),b.jsx(Pn,{children:o<e.length?b.jsx(Ae,{onClick:p,children:"Load more"}):b.jsx(Ae,{disabled:!0,children:"Load more"})})]})};export{Ln as default};
