(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(4),r=a.n(n),s=a(2),i=a(0),o="3808484db6aaff78a54ce11ce3e2908e",h="https://api.openweathermap.org/data/2.5/";var d=function(e){var t=e.setNewWeather,a=Object(c.useState)(""),n=Object(s.a)(a,2),r=n[0],d=n[1];return Object(i.jsx)("div",{className:"search-box",children:Object(i.jsx)("input",{type:"text",className:"search-bar",placeholder:"search...",onChange:function(e){return d(e.target.value)},value:r,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(h,"weather?q=").concat(r,"&units=metric&appid=").concat(o)).then((function(e){return e.json()})).then((function(e){t(e),d("")}))}})})};var j=function(){var e=new Date,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return Object(i.jsxs)("div",{className:"date",children:[t,", ",a," ",c," ",n]})};var l=function(e){var t=e.NewWeather;return console.log(t),Object(i.jsxs)("div",{className:"location-box",children:[Object(i.jsxs)("div",{className:"location",children:[t.name,", ",t.sys.country]}),Object(i.jsx)(j,{})]})};var u=function(e){var t=e.NewWeather;return Object(i.jsxs)("div",{className:"weather-box",children:[Object(i.jsxs)("div",{className:"temp",children:[Math.round(t.main.temp),"\xb0"]}),Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:"icon",src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:"weatherIcon"})}),Object(i.jsx)("div",{className:"weather",children:t.weather[0].description})]})};var b=function(){var e=Object(c.useState)({}),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(i.jsx)("div",{className:"app",children:Object(i.jsxs)("main",{children:[Object(i.jsx)("div",{className:"topic-box",children:Object(i.jsx)("div",{className:"topic",children:"Weather App"})}),Object(i.jsx)(d,{className:"search-box",setNewWeather:n}),"undefined"!=typeof a.main?Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{NewWeather:a}),Object(i.jsx)(u,{NewWeather:a})]}):Object(i.jsx)("div",{style:{textAlign:"center",fontSize:"40px",fontWeight:"bold"},children:"No location found(Search your location)"})]})})};r.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.9626e06b.chunk.js.map