/*! vue-ydui v0.2.1 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="/dist/",e(0)}({0:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBar=void 0;var i=r(71),o=n(i);e.ProgressBar=o.default},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},2:function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=f[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(l(n.parts[o],e))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(l(n.parts[o],e));f[n.id]={id:n.id,refs:1,parts:s}}}}function i(t){for(var e=[],r={},n=0;n<t.length;n++){var i=t[n],o=i[0],s=i[1],a=i[2],l=i[3],u={css:s,media:a,sourceMap:l};r[o]?r[o].parts.push(u):e.push(r[o]={id:o,parts:[u]})}return e}function o(t,e){var r=p(),n=m[m.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function l(t,e){var r,n,i;if(e.singleton){var o=g++;r=v||(v=a(e)),n=u.bind(null,r,o,!1),i=u.bind(null,r,o,!0)}else r=a(e),n=d.bind(null,r),i=function(){s(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}function u(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function d(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f={},c=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=c(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=i(t);return n(r,e),function(t){for(var o=[],s=0;s<r.length;s++){var a=r[s],l=f[a.id];l.refs--,o.push(l)}if(t){var u=i(t);n(u,e)}for(var s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete f[l.id]}}}};var y=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,document.addEventListener("touchmove",t))},unlock:function(){e=!1,document.removeEventListener("touchmove",t)}}}(),n=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||r.test(t)||n.test(t)};e.pageScroll=r,e.isColor=n},12:function(t,e,r){e=t.exports=r(1)(),e.push([t.id,".m-progressbar{position:relative;color:#333;width:100%;height:100%}.m-progressbar>svg{width:100%}.m-progressbar>svg>path{-webkit-transition:all .8s linear;transition:all .8s linear}.progressbar-content{position:absolute;top:50%;left:50%;font-size:.3rem;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},30:function(t,e,r){var n=r(12);"string"==typeof n&&(n=[[t.id,n,""]]);r(2)(n,{});n.locals&&(t.exports=n.locals)},71:function(t,e,r){var n,i;r(30),n=r(144);var o=r(85);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=n},85:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-progressbar"},["line"!=t.type?r("div",{staticClass:"progressbar-content"},[t._v(t._s(100*t.progress)+"%")]):t._e(),t._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{viewBox:t.viewBox,preserveAspectRatio:"line"==t.type?"none":""}},[r("path",{attrs:{"fill-opacity":t.fillColor?1:0,d:t.getPathString,fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.trailWidth}}),t._v(" "),r("path",{ref:"trailPath",style:{strokeDasharray:t.stroke.dasharray,strokeDashoffset:t.stroke.dashoffset},attrs:{"fill-opacity":"0",d:t.getPathString,stroke:t.trailColor,"stroke-width":t.strokeWidth?t.strokeWidth:t.trailWidth}})])])},staticRenderFns:[]}},144:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(5);e.default={name:"yd-progressbar",data:function(){return{viewBox:"0 0 100 100",show:!1,stroke:{dasharray:"",dashoffset:""}}},props:{type:{type:String,validator:function(t){return["circle","line"].indexOf(t)>-1},default:"circle"},fillColor:{type:String,validator:function(t){return(0,n.isColor)(t)}},strokeWidth:{validator:function(t){return/^\d*$/.test(t)},default:0},strokeColor:{type:String,validator:function(t){return(0,n.isColor)(t)},default:"#E5E5E5"},trailWidth:{validator:function(t){return/^\d*$/.test(t)},default:0,require:!0},trailColor:{type:String,validator:function(t){return(0,n.isColor)(t)},default:"#646464"},progress:{validator:function(t){return/^(0(.\d+)?|1(\.0+)?)$/.test(t)},default:0}},methods:{init:function(){var t=this,e=this.length=this.$refs.trailPath.getTotalLength();this.stroke.dashoffset=e,this.stroke.dasharray=e+","+e,this.scrollview=this.getScrollview(),this.show=!0,"line"==this.type&&(this.viewBox="0 0 100 "+(this.strokeWidth?this.strokeWidth:this.trailWidth)),setTimeout(function(){t.checkInview()},0),this.bindEvent()},getScrollview:function(){var t=document.defaultView.getComputedStyle(this.$el.parentNode).overflowY;return"scroll"==t||"auto"==t?this.$el.parentNode:this.$parent.$refs.scrollview?this.$parent.$refs.scrollview:window},checkInview:function(){var t=this.scrollview,e=t==window?document.body.offsetHeight:t.offsetHeight,r=t===window?0:t.getBoundingClientRect().top,n=this.$el.getBoundingClientRect().top-r,i=n+this.$el.offsetHeight;(n>=0&&n<e||i>0&&i<=e)&&(this.stroke.dashoffset=this.length-this.progress*this.length)},bindEvent:function(){this.scrollview.addEventListener("scroll",this.checkInview),this.scrollview.addEventListener("resize",this.checkInview)},unbindEvent:function(){this.scrollview.removeEventListener("scroll",this.checkInview),this.scrollview.removeEventListener("resize",this.checkInview)}},watch:{progress:function(t){this.stroke.dashoffset=this.length-t*this.length}},computed:{getPathString:function(){if("line"==this.type)return"M 0,{R} L 100,{R}".replace(/\{R\}/g,this.trailWidth/2);var t=50-(this.strokeWidth?this.strokeWidth:this.trailWidth)/2;return"M 50,50 m 0,-{R} a {R},{R} 0 1 1 0,{2R} a {R},{R} 0 1 1 0,-{2R}".replace(/\{R\}/g,t).replace(/\{2R\}/g,2*t)}},mounted:function(){this.init()},destoryed:function(){this.unbindEvent()}}}})});