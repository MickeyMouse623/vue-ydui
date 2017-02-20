/*! vue-ydui v0.2.1 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Badge=void 0;var o=r(49),i=n(o);t.Badge=i.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},2:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=l[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(d(n.parts[i],t))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(d(n.parts[i],t));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],a=o[1],s=o[2],d=o[3],u={css:a,media:s,sourceMap:d};r[i]?r[i].parts.push(u):t.push(r[i]={id:i,parts:[u]})}return t}function i(e,t){var r=h(),n=v[v.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function d(e,t){var r,n,o;if(t.singleton){var i=b++;r=g||(g=s(t)),n=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=s(t),n=f.bind(null,r),o=function(){a(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function u(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=c(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,b=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var s=r[a],d=l[s.id];d.refs--,i.push(d)}if(e){var u=o(e);n(u,t)}for(var a=0;a<i.length;a++){var d=i[a];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete l[d.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},21:function(e,t,r){t=e.exports=r(1)(),t.push([e.id,'.badge{color:#fff;font-size:12px;position:relative;display:inline-block;border-radius:1000px;line-height:1;padding:3px 6px;white-space:nowrap;background-color:#d0d0d0}.badge-radius{border-radius:2px}.badge-primary{background-color:#04be02;color:#fff}.badge-danger{background-color:#ef4f4f;color:#fff}.badge-warning{background-color:#ffb400;color:#fff}.badge-hollow{background-color:#fbfbfb;color:#b2b2b2}.badge-hollow:after{content:"";width:200%;height:200%;border:1px solid #b2b2b2;position:absolute;top:0;left:0;border-radius:50px;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5)}.badge-radius:after{border-radius:2px}',""])},39:function(e,t,r){var n=r(21);"string"==typeof n&&(n=[[e.id,n,""]]);r(2)(n,{});n.locals&&(e.exports=n.locals)},49:function(e,t,r){var n,o;r(39),n=r(122);var i=r(104);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=n},104:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"badge",class:e.typesClass,style:{backgroundColor:e.bgcolor,color:e.color}},[e._t("default")],2)},staticRenderFns:[]}},122:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-badge",props:{type:{type:String,validator:function(e){return["primary","danger","warning","hollow"].indexOf(e)>-1}},shape:{type:String,validator:function(e){return["circle","square"].indexOf(e)>-1}},color:{type:String,validator:function(e){return e||isColor(e)}},bgcolor:{type:String,validator:function(e){return e||isColor(e)}}},computed:{typesClass:function(){return this.bgcolor?"square"==this.shape?" badge-radius":"":(this.type?"badge-"+this.type:"")+("square"==this.shape?" badge-radius":"")}}}}})});