parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hWCH":[function(require,module,exports) {

},{"./../images/banner.jpg":[["banner.e3959925.jpg","VjsC"],"VjsC"],"./../images/aspro.png":[["aspro.1f6de14a.png","HWfp"],"HWfp"],"./../images/icons/phone.svg":[["phone.efe568df.svg","fuQV"],"fuQV"],"./../images/icons/email.svg":[["email.01904259.svg","Z4NH"],"Z4NH"],"./../images/men.png":[["men.5068587b.png","eVnx"],"eVnx"],"./../images/women.png":[["women.1987cc36.png","UPqR"],"UPqR"],"./../images/aspro_znak.png":[["aspro_znak.ace5e499.png","zELt"],"zELt"],"./../images/icons/check.svg":[["check.d115046a.svg","jCGz"],"jCGz"]}],"jpCL":[function(require,module,exports) {
"use strict";require("../scss/index.scss");var e=document.querySelector("#btn-open-form"),t=document.querySelector("#btn-close"),s=document.querySelector("#form"),c=document.querySelector("#requisites");e.addEventListener("click",function(){s.style.display="block",c.style.display="none"}),t.addEventListener("click",function(){s.style.display="none",c.style.display="block"});
},{"../scss/index.scss":"hWCH"}]},{},["jpCL"], null)