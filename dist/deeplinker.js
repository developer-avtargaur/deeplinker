var deeplinker=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){e.exports=(()=>{const e=e=>{e||r("Can not open app, because appLink is undefined");let n=document.createElement("iframe");n.style.display="none",document.body.appendChild(n),null!==n&&(n.src=e)},n=(n,r)=>{let o=!1;window.addEventListener("pagehide",()=>{o=!0},!1),window.addEventListener("blur",()=>{o=!0},!1),e(n),setTimeout(()=>{o||t(r)},100)},t=e=>{e||r("Can not open page because link is undefined"),window.open(e,"_blank")},r=e=>{throw Error("[Deeplinker] "+e)};return{click:e=>{"object"!=typeof e&&r("Passed element is not an object");let t=e.dataset.link||e.href,o=e.dataset.appLink;n(o,t)},tryToOpenApp:e}})()}]);