/*! vue-ydui v0.2.1 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=void 0;var o=r(79),i=n(o);t.Switch=i.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},2:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=u[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(c(n.parts[i],t))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(c(n.parts[i],t));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],s=o[1],a=o[2],c=o[3],d={css:s,media:a,sourceMap:c};r[i]?r[i].parts.push(d):t.push(r[i]={id:i,parts:[d]})}return t}function i(e,t){var r=h(),n=b[b.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e,t){var r,n,o;if(t.singleton){var i=v++;r=m||(m=a(t)),n=d.bind(null,r,i,!1),o=d.bind(null,r,i,!0)}else r=a(t),n=f.bind(null,r),o=function(){s(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function d(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u={},l=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=l(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=l(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],s=0;s<r.length;s++){var a=r[s],c=u[a.id];c.refs--,i.push(c)}if(e){var d=o(e);n(d,t)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete u[c.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},15:function(e,t,r){t=e.exports=r(1)(),t.push([e.id,'.m-switch{position:relative;display:block;width:52px;height:32px;left:0;border:1px solid #dfdfdf;border-radius:16px;background-color:#dfdfdf}.m-switch:after,.m-switch:before{content:"";position:absolute;top:0;left:0;height:30px;border-radius:15px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.m-switch:before{width:50px;background-color:#fdfdfd}.m-switch:after{width:30px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.m-switch:checked{border-color:#4cd864;background-color:#4cd864}.m-switch:checked:before{-webkit-transform:scale(0);transform:scale(0)}.m-switch:checked:after{-webkit-transform:translateX(20px);transform:translateX(20px)}',""])},33:function(e,t,r){var n=r(15);"string"==typeof n&&(n=[[e.id,n,""]]);r(2)(n,{});n.locals&&(e.exports=n.locals)},79:function(e,t,r){var n,o;r(33),n=r(152);var i=r(88);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=n},88:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"m-switch",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{click:function(t){var r=e.checked,n=t.target,o=!!n.checked;if(Array.isArray(r)){var i=null,s=e._i(r,i);o?s<0&&(e.checked=r.concat(i)):s>-1&&(e.checked=r.slice(0,s).concat(r.slice(s+1)))}else e.checked=o}}})},staticRenderFns:[]}},152:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-switch",data:function(){return{checked:!1}},props:{value:Boolean},watch:{checked:function(e){this.$emit("input",e)}},mounted:function(){this.checked=this.value}}}})});