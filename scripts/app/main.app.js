!function e(n,t,o){function r(i,u){if(!t[i]){if(!n[i]){var s="function"==typeof require&&require;if(!u&&s)return s(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=t[i]={exports:{}};n[i][0].call(c.exports,function(e){var t=n[i][1][e];return r(t?t:e)},c,c.exports,e,n,t,o)}return t[i].exports}for(var a="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(e,n,t){window.onload=function(){var e=document.getElementById("snippet-envelope"),n=document.getElementById("snippet-generator"),t=document.getElementById("snippet-generator-inputs"),o=document.getElementById("snippet-display"),r=document.getElementById("snippet-generator-email"),a=document.getElementById("snippet-generator-button"),i=document.getElementById("snippet-display-email");a.addEventListener("click",function(){if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(r.value))return a.blur(),t.className+=" shake error",void setTimeout(function(){t.className=t.className.replace(" shake error","")},1e3);var u=window.btoa(unescape(encodeURIComponent(r.value)));i.innerHTML=u,e.className+=" bounceOutDown",setTimeout(function(){n.style.display="none",o.style.display="block",e.className=e.className.replace("bounceOutDown","bounceInUp")},1e3)},!1)}},{}]},{},[1]);