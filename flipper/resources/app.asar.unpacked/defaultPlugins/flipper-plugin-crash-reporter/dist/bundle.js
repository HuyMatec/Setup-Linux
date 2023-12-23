"use strict";var w=Object.create;var f=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),F=(e,t)=>{for(var o in t)f(e,o,{get:t[o],enumerable:!0})},h=(e,t,o,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of N(t))!B.call(e,n)&&n!==o&&f(e,n,{get:()=>t[n],enumerable:!(i=T(t,n))||i.enumerable});return e};var D=(e,t,o)=>(o=e!=null?w(P(e)):{},h(t||!e||!e.__esModule?f(o,"default",{value:e,enumerable:!0}):o,e)),A=e=>h(f({},"__esModule",{value:!0}),e);var x=S((U,b)=>{function O(e,t){var o=e.charCodeAt(t),i;return o>=55296&&o<=56319&&e.length>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?e.substring(t,t+2):e[t]}function k(e,t,o){for(var i="",n,s=0,l=0,g=e.length;s<g;)n=O(e,s),l>=t&&l<o&&(i+=n),s+=n.length,l+=1;return i}function v(e,t){return e===void 0?t:Number(e)}b.exports=function(e,t,o){var i=v(t,0),n=v(o,e.length);return n==i?"":n>i?k(e,i,n):k(e,n,i)}});var z={};F(z,{Component:()=>I,devicePlugin:()=>C});module.exports=A(z);var m=require("flipper-plugin");var L=D(x()),H="Unknown";function d(e,t){return e.length<=t?e:(0,L.default)(e,0,t-1)+"\u2026"}function _(e){let o=/Application Specific Information:/.exec(e);return o?e.substring(0,o.index):e}function y(e,t){let o=!t.name&&!t.reason,i=t.reason===H;if(o||i){console.warn("Ignored the notification for the crash",t);return}let n="CRASH: "+d(t.name||t.reason,50);n=`${t.name==t.reason?n:n+"Reason: "+d(t.reason,50)}`;let s=t.callstack?_(t.callstack):"No callstack available",l=`Callstack: ${d(s,200)}`;e.showNotification({id:t.notificationID,message:l,severity:"error",title:n,action:t.notificationID,category:t.reason||"Unknown reason"})}var r=D(require("react")),c=require("antd"),u=require("@ant-design/icons"),a=require("flipper-plugin");var{Text:p}=c.Typography;function I(){let e=(0,a.usePlugin)(C),t=(0,a.useValue)(e.crashes),o=(0,a.useValue)(e.selectedCrash),i=t.find(n=>n.notificationID===o);return r.default.createElement(a.Layout.Left,{resizable:!0,width:400},r.default.createElement(a.DataList,{items:t.map(n=>({id:n.notificationID,title:n.reason??n.name,description:`${new Date(n.date).toLocaleString()} - ${n.name}`})),selection:o,onSelect:n=>{e.selectedCrash.set(n)},onRenderEmpty:null}),i?r.default.createElement($,{crash:i}):r.default.createElement(a.Layout.Horizontal,{center:!0,grow:!0},r.default.createElement(a.Layout.Container,{center:!0,grow:!0,gap:!0},r.default.createElement(u.CoffeeOutlined,null),r.default.createElement(p,{type:"secondary"},t.length===0?"No crashes detected so far!":"No crash selected"))))}function $({crash:e}){let t=(0,a.usePlugin)(C);return r.default.createElement(a.Layout.Top,null,r.default.createElement(a.Toolbar,{wash:!0,right:r.default.createElement(c.Button,{onClick:()=>{t.clearCrashes()},title:"Clear all crashes",danger:!0},r.default.createElement(u.DeleteOutlined,null))},r.default.createElement(c.Button,{onClick:()=>{t.copyCrashToClipboard(e.callstack)}},r.default.createElement(u.CopyOutlined,null)),t.isFB?r.default.createElement(c.Button,{onClick:()=>{t.createPaste(e.callstack)}},"Create paste"):null,r.default.createElement(c.Button,{disabled:!e.callstack,onClick:()=>{t.openInLogs(e.callstack)}},"Open In Logs")),r.default.createElement(a.Layout.ScrollContainer,{pad:!0,vertical:!0},r.default.createElement(a.CodeBlock,null,r.default.createElement(p,{strong:!0},e.name),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(p,{strong:!0},e.reason),r.default.createElement("br",null),r.default.createElement("br",null),e.callstack)))}function C(e){let t=-1,o=(0,m.createState)([],{persist:"crashes"}),i=(0,m.createState)();e.onDeepLink(s=>{i.set(s)});function n(s){t++;let l={notificationID:t.toString(),callstack:s.callstack,name:s.name,reason:s.reason,date:s.date||Date.now()};o.update(g=>{g.push(l)}),y(e,l)}return e.device.isConnected&&e.onDeviceCrash(n),{crashes:o,selectedCrash:i,reportCrash:n,openInLogs(s){e.selectPlugin("DeviceLogs",s)},os:e.device.os,copyCrashToClipboard(s){e.writeTextToClipboard(s)},createPaste(s){e.createPaste(s)},isFB:e.isFB,clearCrashes(){o.set([]),i.set(void 0)}}}