import{s as A,r as E,j as y,L as qe}from"./index-76d73954.js";function Ee(e,t){return function(){return e.apply(t,arguments)}}const{toString:Je}=Object.prototype,{getPrototypeOf:re}=Object,J=(e=>t=>{const n=Je.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>J(t)===e),V=e=>t=>typeof t===e,{isArray:L}=Array,U=V("undefined");function Ve(e){return e!==null&&!U(e)&&e.constructor!==null&&!U(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ge=O("ArrayBuffer");function Ye(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ge(e.buffer),t}const Qe=V("string"),g=V("function"),Se=V("number"),Y=e=>e!==null&&typeof e=="object",Ke=e=>e===!0||e===!1,M=e=>{if(J(e)!=="object")return!1;const t=re(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},We=O("Date"),ve=O("File"),Ge=O("Blob"),$e=O("FileList"),Xe=e=>Y(e)&&g(e.pipe),Ze=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=J(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},et=O("URLSearchParams"),tt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Re(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Oe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Te=e=>!U(e)&&e!==Oe;function Z(){const{caseless:e}=Te(this)&&this||{},t={},n=(r,s)=>{const o=e&&Re(t,s)||s;M(t[o])&&M(r)?t[o]=Z(t[o],r):M(r)?t[o]=Z({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const nt=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&g(s)?e[o]=Ee(s,n):e[o]=s},{allOwnKeys:r}),e),rt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),st=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ot=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&re(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},it=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},at=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Se(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ct=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&re(Uint8Array)),lt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ft=O("HTMLFormElement"),dt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ce=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),pt=O("RegExp"),Ce=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},ht=e=>{Ce(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},mt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},xt=()=>{},wt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),v="abcdefghijklmnopqrstuvwxyz",le="0123456789",Ne={DIGIT:le,ALPHA:v,ALPHA_DIGIT:v+v.toUpperCase()+le},bt=(e=16,t=Ne.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function yt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const At=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return j(r,(i,c)=>{const d=n(i,s+1);!U(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Et=O("AsyncFunction"),gt=e=>e&&(Y(e)||g(e))&&g(e.then)&&g(e.catch),a={isArray:L,isArrayBuffer:ge,isBuffer:Ve,isFormData:Ze,isArrayBufferView:Ye,isString:Qe,isNumber:Se,isBoolean:Ke,isObject:Y,isPlainObject:M,isUndefined:U,isDate:We,isFile:ve,isBlob:Ge,isRegExp:pt,isFunction:g,isStream:Xe,isURLSearchParams:et,isTypedArray:ct,isFileList:$e,forEach:j,merge:Z,extend:nt,trim:tt,stripBOM:rt,inherits:st,toFlatObject:ot,kindOf:J,kindOfTest:O,endsWith:it,toArray:at,forEachEntry:lt,matchAll:ut,isHTMLForm:ft,hasOwnProperty:ce,hasOwnProp:ce,reduceDescriptors:Ce,freezeMethods:ht,toObjectSet:mt,toCamelCase:dt,noop:xt,toFiniteNumber:wt,findKey:Re,global:Oe,isContextDefined:Te,ALPHABET:Ne,generateString:bt,isSpecCompliantForm:yt,toJSONObject:At,isAsyncFn:Et,isThenable:gt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Pe=m.prototype,Be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Be[e]={value:e}});Object.defineProperties(m,Be);Object.defineProperty(Pe,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Pe);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const St=null;function ee(e){return a.isPlainObject(e)||a.isArray(e)}function Fe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map(function(s,o){return s=Fe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Rt(e){return a.isArray(e)&&!e.some(ee)}const Ot=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,T){return!a.isUndefined(T[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,T){let S=f;if(f&&!T&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Rt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(S=a.toArray(f)))return h=Fe(h),S.forEach(function(I,_e){!(a.isUndefined(I)||I===null)&&t.append(i===!0?ue([h],_e,o):i===null?h:h+"[]",l(I))}),!1}return ee(f)?!0:(t.append(ue(T,h,o),l(f)),!1)}const p=[],w=Object.assign(Ot,{defaultVisitor:u,convertValue:l,isVisitable:ee});function x(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(S,B){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(B)?B.trim():B,h,w))===!0&&x(S,h?h.concat(B):[B])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return x(e),t}function fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function se(e,t){this._pairs=[],e&&Q(e,this,t)}const Le=se.prototype;Le.append=function(t,n){this._pairs.push([t,n])};Le.toString=function(t){const n=t?function(r){return t.call(this,r,fe)}:fe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function De(e,t,n){if(!t)return e;const r=n&&n.encode||Tt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ct{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const de=Ct,Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nt=typeof URLSearchParams<"u"?URLSearchParams:se,Pt=typeof FormData<"u"?FormData:null,Bt=typeof Blob<"u"?Blob:null,Ft=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Lt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:Nt,FormData:Pt,Blob:Bt},isStandardBrowserEnv:Ft,isStandardBrowserWebWorkerEnv:Lt,protocols:["http","https","file","blob","url","data"]};function Dt(e,t){return Q(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function je(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=jt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Ut(r),s,n,0)}),n}return null}const kt={"Content-Type":void 0};function It(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const K={transitional:Ue,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(je(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Q(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),It(t)):t}],transformResponse:[function(t){const n=this.transitional||K.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){K.headers[t]={}});a.forEach(["post","put","patch"],function(t){K.headers[t]=a.merge(kt)});const oe=K,Mt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Mt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pe=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function z(e){return e===!1||e==null?e:a.isArray(e)?e.map(z):String(e)}function Ht(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const _t=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function qt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Jt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class W{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,l){const u=D(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||d]=z(c))}const i=(c,d)=>a.forEach(c,(l,u)=>o(l,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!_t(t)?i(zt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Ht(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=D(i),i){const c=a.findKey(r,i);c&&(!n||G(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=z(s),delete n[o];return}const c=t?qt(o):String(o).trim();c!==o&&delete n[o],n[c]=z(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[pe]=this[pe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=D(i);r[c]||(Jt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(W.prototype);a.freezeMethods(W);const C=W;function $(e,t){const n=this||oe,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ke(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,m,{__CANCEL__:!0});function Vt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Yt=R.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Qt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Kt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!Qt(t)?Kt(e,t):t}const Wt=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function vt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[o];i||(i=l),n[s]=d,r[s]=l;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const x=u&&l-u;return x?Math.round(w*1e3/x):void 0}}function he(e,t){let n=0;const r=Gt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,d=r(c),l=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&l?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const $t=typeof XMLHttpRequest<"u",Xt=$t&&function(e){return new Promise(function(n,r){let s=e.data;const o=C.from(e.headers).normalize(),i=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(x+":"+f))}const u=Ie(e.baseURL,e.url);l.open(e.method.toUpperCase(),De(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function p(){if(!l)return;const x=C.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:x,config:e,request:l};Vt(function(S){n(S),d()},function(S){r(S),d()},h),l=null}if("onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Ue;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},R.isStandardBrowserEnv){const x=(e.withCredentials||Wt(u))&&e.xsrfCookieName&&Yt.read(e.xsrfCookieName);x&&o.set(e.xsrfHeaderName,x)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(f,h){l.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",he(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",he(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=x=>{l&&(r(!x||x.type?new k(null,e,l):x),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const w=vt(u);if(w&&R.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},H={http:St,xhr:Xt};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Zt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?H[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function X(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function me(e){return X(e),e.headers=C.from(e.headers),e.data=$.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Zt.getAdapter(e.adapter||oe.adapter)(e).then(function(r){return X(e),r.data=$.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return ke(r)||(X(e),r&&r.response&&(r.response.data=$.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const xe=e=>e instanceof C?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(l,u,p){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:p},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,p){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,p)}else return r(l,u,p)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,p){if(p in t)return r(l,u);if(p in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(xe(l),xe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||s,w=p(e[u],t[u],u);a.isUndefined(w)&&p!==c||(n[u]=w)}),n}const Me="1.4.0",ie={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ie[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const we={};ie.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Me+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!we[i]&&(we[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function en(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const te={assertOptions:en,validators:ie},N=te.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new de,response:new de}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&te.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:te.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=C.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let u,p=0,w;if(!d){const f=[me.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,l),w=f.length,u=Promise.resolve(n);p<w;)u=u.then(f[p++],f[p++]);return u}w=c.length;let x=n;for(p=0;p<w;){const f=c[p++],h=c[p++];try{x=f(x)}catch(T){h.call(this,T);break}}try{u=me.call(this,x)}catch(f){return Promise.reject(f)}for(p=0,w=l.length;p<w;)u=u.then(l[p++],l[p++]);return u}getUri(t){t=F(this.defaults,t);const n=Ie(t.baseURL,t.url);return De(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(F(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const _=q;class ae{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ae(function(s){t=s}),cancel:t}}}const tn=ae;function nn(e){return function(n){return e.apply(null,n)}}function rn(e){return a.isObject(e)&&e.isAxiosError===!0}const ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ne).forEach(([e,t])=>{ne[t]=e});const sn=ne;function ze(e){const t=new _(e),n=Ee(_.prototype.request,t);return a.extend(n,_.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ze(F(e,s))},n}const b=ze(oe);b.Axios=_;b.CanceledError=k;b.CancelToken=tn;b.isCancel=ke;b.VERSION=Me;b.toFormData=Q;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=nn;b.isAxiosError=rn;b.mergeConfig=F;b.AxiosHeaders=C;b.formToJSON=e=>je(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=sn;b.default=b;const He=b;He.defaults.baseURL="https://64145ef136020cecfda6b0f0.mockapi.io";const on=async()=>{try{const{data:e}=await He.get("/users");return e}catch(e){throw new Error(e.message)}},an={fetchTweets:on},P={desktop:"@media screen and (min-width: 1200px)",tablet:"@media screen and (min-width: 768px)",mobile:"@media screen and (max-width: 767px)"},cn=A.div`
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

  ${P.mobile} {
    width: 100%;
    max-width: 380px;
  }
`,ln=A.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;

  ${P.mobile} {
    width: 60px;
    height: 18px;
    left: 10px;
    top: 10px;
  }
`,un=A.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;

  ${P.mobile} {
    width: 220px;
    height: 120px;
    left: 20px;
    top: 16px;
  }
`,fn=A.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  }

  ${P.mobile} {
    width:100%;
    max-width: 380px;
    top: 180px;
  }
`,dn=A.div`
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

  ${P.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    top: 148px;
    transform: translateX(-50%);
    width: 70px;
    height: 70px;
    border-width: 8px;
  }
`,pn=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,hn=A.p`
  position: absolute;
  margin: 0;
  top: 284px;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;

  ${P.mobile} {
    top: 240px;
    font-size: 16px;
    line-height: 20px;
  }
`,mn=A.p`
  position: absolute;
  top: 324px;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;

  ${P.mobile} {
    top: 280px;
    font-size: 16px;
    line-height: 20px;
  }
`,xn=A.button`
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

  ${P.mobile} {
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 160px;
    height: 40px;
    top: 340px;
    font-size: 14px;
    line-height: 18px;
  }
`,wn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgB1VgxTxtRDPZVzZBIZYBKzdAMdGBIh2bokqVDu/Yvw8DCwhAGGDLAEAaQyMKQDDkp+LvzQ87TO54TIDGfZOXdxWfe+87+7FAsl8v/tHvM2E6LoiibHHifA/74TjvGJ/KBDtuAPgC8EAZ0OYuOyDk8EQYcMWnfyDG8EQYMmLQ2OYVHwlpsQybtMzmEdVPoXtdsU7Y5GzIAQo2udZDwf2S7Ff+F+PfI3uVCEzinzXDHdiXrQzHgjOr9NwH7HL7wvYkw/IEzbvkzdQ9rkDERodZiPWbfcRSj8mffsWzIUnJVE0jEsqAM++UYC3V/Hp1jBexLOeRKcoUslAnbXqQxe2p9qw8o/p1wLXHwlkuyAU2gR28H7P1A7DlZwj1e7ucC5DJsqsgCSX+o1hhco0Rx8K7y12T94I++rCuiOFb1huVZ6wjRZ/8Hehv8VusTtlJe6NAaIJdhE7WGpoAskDKiWqdmsgZxjxG5ffVsPJhOyY6qCZBdb98VuU1ogQxliKxbObDomNaKTiJWuyGuBQVJZu8auQxLHbKNNE60fa1lyL5Yp1LkW4A4ue62NeQI0yPDBdWbRmn9Zfsa+bZEOCHuyLZL9d1cng9Y50f05UudbdvIleQhkzAJYs3XxyKSCyElBkoT2QDSMHJgHmrpA4u+dckGjCgTcoRchoWp+7mEcHhNluhX0Cy051+hXOGXIGtINj2633AGe1dYOg/I+IdMo3qCLuU5lB9mpPjwuAfibqjWMsr4p4ASHtHm2Jf/nwFfGnwwrpS0ZjNZp1X3xCwAyT9pM1Qi31DyVnQo3ak1rLKwAo8/vkeeRD6GN8Ig8nfkGJ4IcynyMbwQ9lqR3xqeAP79BzwxZzuPAAAAAElFTkSuQmCC",be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAsCAYAAACZmXFCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASASURBVHgB7Zw/TxtBEMXHEY4ERSyFAgpTQOFIUJACCpo0afOVU6WgoQhSQIoLU2ApuHCBCywFS2QenksOe2dv73bXRDA/aWVx7A335zH7bnbPrYeHhy9kFFy0Wq0rioCvZ5c/PpLxyBsyyhywQN6RkQwT2DJHLLJ1MpJgAltmg9sRGUkwgbnpcBbbJyMaE5jOHotsl4woTGB+YPo3yWiMCayaQzP9zTGBVfNo+llka2TUxgQWRodbj4zamMDCMdPfABNYPcz01ySXr5hxu+Y25fZbPmGU33LDVMym/Nw09i23kcSeyfYNifsuInYIMP2nPGc5pdVzSfNzL9Mmd2HY1bcuuJYHFEFqgY259fnij6s6SiaArwnNCBDSgNsVx79X+gwk9o7EziG0wvRDZDNaLbeL15aPYyO0b104NsWSUmC1ViLIyZ/ySezRXAy+Y0E2vPQIazE2+l9z7B7lMeeF6b8kw0sqD3bedJkL74es88PTBRnxPFRcC7H72J/yYKY/gBQC60vGaIQUMbUsMxKRNCazyMz0VxA7RN76BCBrq9BgRO+4jcu+RYqXJzT3NYvARF94YmNfDFX4nPn8Bo5RhJBDDM9p+n3sKOIfLHpH7of748rG0R42VmBODyI3H6s6tx2/65dEiT6aSb3mfndK/C3Zt13ahr5Dj+Cx/YTS85ym30dX2T6kf0/eBbiOWQrJMQKberKGU1xCT5YVjzx9wNC1UcR17PjVhsRe4+NaEj6OVUSoCToGM/0KMQL75doo4ikLB0OHKxNh6CwLtBjuwFjLXlRdl4H5Hinih6hzGXP8XZxr7YeRl0xUBlO2L2aln3yzh1QB3xxkva4vNvdB7JAMhDqYS2CxhccqIP7Kc31NxDxFagJLMQRp2Sv0hYz3yvZVeCTLYCX+1yUo2nGFCkTrl/vm40Hijoy/xGQwTQQTiked/qAwtJucc45yEFuze4nECEwbrhaLruuox5RayDDnrFeJcQ+pN42U7R3Kw9T15GrECWzHtVFEUJ42+kDz+lPRQmbn254K+XfyM/DMLGxReiD4UzKcxAhMFQHfYFTgMVwsZht4oxsKo6vEhoC/KbH7WiaR8kmOGtiZp6Ty6ok1+SguOv97iznAkggxnVOnTICpDizNmThiI85XiY0qNMz7pGJCPEelul/znF4dsZPdm7IkRgUZR1qTG3Hoe9lC4t7IpyouOcbU2ctMfQApVlP0qkRWhUz/uPwRTPlxzBs9mdaEmakPJNV6MIhsv64Q0J8bTD/mFttKNwyDn+q+m1iKnVxcZKY+mJSFVqxM3cZqCZrPJarlBPFOyFh4Em0HxMbw9pn3w9NhvyL2mhzLbmDsujynqV93LJGuW9tbdyyFzlYfbGX8Ajp4LgihMOm4MLj5hTGPjV3UxO4lHi5Sh/Ks+SroV/ku+wK6p+ScKupI26b0FLFXiZn6Bth7kWGYqW+ICawaM/URmMCqsUp9BCYwPxdWqY/DBKYziP1Kc8MEpjExU58GE9gyMPVnZCTBBLaMmfqEmMCeYqY+MX8Au/W380rAxe0AAAAASUVORK5CYII=",bn="/tweet_card/assets/signs-b75d874a.png",ye="/tweet_card/assets/signs@2x-43a1e8bf.png",yn=({item:e})=>{const[t,n]=E.useState(localStorage.getItem(`tweets_${e.id}`)||e.tweets),[r,s]=E.useState(localStorage.getItem(`followers_${e.id}`)||e.followers),[o,i]=E.useState(e.avatar),[c,d]=E.useState(localStorage.getItem(`isFollowing_${e.id}`)==="true"),[l,u]=E.useState(!0);E.useEffect(()=>{u(!1)},[]),E.useEffect(()=>{l||(localStorage.setItem(`tweets_${e.id}`,t),localStorage.setItem(`followers_${e.id}`,r),localStorage.setItem(`isFollowing_${e.id}`,c))},[t,r,c]);const p=()=>{s(c?x=>x-1:x=>x+1),d(!c)},w=x=>x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return y.jsxs(cn,{children:[y.jsx(ln,{srcSet:`${wn} 1x, ${be} 2x`,src:be,alt:"logo"}),y.jsx(un,{srcSet:`${bn} 1x, ${ye} 2x`,src:ye,alt:"signs"}),y.jsx(fn,{}),y.jsx(dn,{children:y.jsx(pn,{src:o,alt:"avatar"})}),y.jsxs(hn,{children:[t," tweets"]}),y.jsxs(mn,{children:[w(r)," followers"]}),y.jsx(xn,{isFollowing:c,onClick:p,children:c?"Following":"Follow"})]})},An={desktop:"@media screen and (min-width: 1200px)",tablet:"@media screen and (min-width: 768px)",mobile:"@media screen and (max-width: 767px)"},En=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`,gn=A.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 20px;
`,Sn=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`,Rn=A.div`
  align-self: flex-start;
  margin-left: 40px;

  ${An.mobile} {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
`,On=A(qe)`
  color: black;
  font-weight: 600;
  font-size: 20px;

  &:hover,
  &:focus {
    color: #3e2d85;
  }
`,Ae=A.button`
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
`,Cn=()=>{const[e,t]=E.useState([]),[n,r]=E.useState([]),[s,o]=E.useState(3);E.useEffect(()=>{(async()=>{try{const d=await an.fetchTweets();t(d)}catch(d){console.error(d)}})()},[]),E.useEffect(()=>{r(e.slice(0,s))},[e,s]);const i=()=>{o(c=>c+3)};return y.jsxs(En,{children:[y.jsx(Rn,{children:y.jsx(On,{to:"/",children:"⬅ Back"})}),y.jsx(gn,{children:n.map(c=>y.jsx(yn,{item:c},c.id))}),y.jsx(Sn,{children:s<e.length?y.jsx(Ae,{onClick:i,children:"Load more"}):y.jsx(Ae,{disabled:!0,children:"Load more"})})]})};export{Cn as default};
