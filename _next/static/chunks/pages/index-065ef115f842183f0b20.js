(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5060:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return h}});var r=e(9008),a=e(7294);function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function c(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=e(5893),s=function(n){for(var t=n.flashcardsList,e=Array.from(t),r=[],a=0;a<t.length;a+=4){var i=e.splice(0,4);r.push(c(i))}for(var s=Array.from(r),l=[],u=0;u<r.length;u+=6){var f=s.splice(0,6);l.push(f)}return(0,o.jsx)("div",{className:"tables-to-print",children:l.map((function(n,t){return(0,o.jsxs)("div",{children:[(0,o.jsx)("table",{children:(0,o.jsx)("tbody",{children:n.map((function(n,e){return(0,o.jsx)("tr",{children:n.map((function(n,r){return(0,o.jsx)("td",{children:n.front},"page-".concat(t,"-el-").concat(e,"-").concat(r))}))},"page-".concat(t,"-row-").concat(e))}))})},"page-front-".concat(t)),(0,o.jsx)("table",{className:"page-table-back",children:(0,o.jsx)("tbody",{children:n.map((function(n,e){return(0,o.jsx)("tr",{children:n.map((function(n,r){return(0,o.jsxs)("td",{children:[n.back," "]},"page-back-".concat(t,"-el-").concat(e,"-").concat(r))}))},"page-back-".concat(t,"-row-").concat(e))}))})},"page-back-".concat(t))]},"page-pair-".concat(t))}))})},l=e(9820),u=e.n(l),f=function(n){var t=n.readTextCallback;return(0,o.jsxs)("div",{className:u().input,children:[(0,o.jsx)("p",{children:"Choose a text file. It should be UTF-8 CSV-like with cells splited by ';'"}),(0,o.jsx)("input",{onChange:function(n){var e=new FileReader,r=n.target;e.readAsText(r.files[0]),e.onload=function(){var n=e.result||"";"string"===typeof n&&t(n.split("\r\n").map((function(n){return{front:n.split(";")[0],back:n.split(";")[1]}})))}},type:"file"})]})},d=e(4476),p=e.n(d),h=function(){var n=(0,a.useState)([]),t=n[0],e=n[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:"Flashcard printing service"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)("main",{className:p().main,children:[(0,o.jsx)("h1",{className:p().title,children:"Flashcards printer"}),(0,o.jsx)(f,{readTextCallback:e}),(0,o.jsx)("div",{className:p().successInfo,children:t.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:"Print this website and see the magic!"}),(0,o.jsx)("button",{onClick:window.print,children:"Print!"})]})}),(0,o.jsx)(s,{flashcardsList:t})]}),(0,o.jsxs)("footer",{className:p().footer,children:["With love from\xa0",(0,o.jsx)("a",{href:"https://mgolebiowski.me",children:"Misiu"})]})]})}},5301:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5060)}])},4476:function(n){n.exports={footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",successInfo:"Home_successInfo__2NOo7"}},9820:function(n){n.exports={input:"InputForm_input__3OgiZ"}},9008:function(n,t,e){n.exports=e(639)}},function(n){n.O(0,[774,888,179],(function(){return t=5301,n(n.s=t);var t}));var t=n.O();_N_E=t}]);