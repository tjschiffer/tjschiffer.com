(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{330:function(t,n,e){"use strict";e.r(n);var o=e(333);n.default={initialize:function(){console.log(Object(o.a)())},destroy:function(){console.log("destroy")}}},333:function(t,n,e){"use strict";n.a=function(){var t=new Date,n=t.getMinutes()+t.getSeconds()/60;return[function(t){return Math.sin(t*Math.PI/30)},function(t){return Math.sin(t*Math.PI/30+2*Math.PI/3)},function(t){return Math.sin(t*Math.PI/30+4*Math.PI/3)}].reduce(function(t,e){return t+("0"+Math.round(50*Math.max(e(n)/1.5+1/3,0)).toString(16)).slice(-2)},"#")}}}]);
//# sourceMappingURL=2.main.js.map