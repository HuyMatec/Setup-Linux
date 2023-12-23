"use strict";var U=Object.create;var x=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var G=(e,t)=>{for(var i in t)x(e,i,{get:t[i],enumerable:!0})},B=(e,t,i,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of z(t))!j.call(e,s)&&s!==i&&x(e,s,{get:()=>t[s],enumerable:!(l=O(t,s))||l.enumerable});return e};var p=(e,t,i)=>(i=e!=null?U(A(e)):{},B(t||!e||!e.__esModule?x(i,"default",{value:e,enumerable:!0}):i,e)),R=e=>B(x({},"__esModule",{value:!0}),e);var Se={};G(Se,{default:()=>k});module.exports=R(Se);var h=p(require("react")),g=require("flipper");var m=p(require("react")),n=require("flipper"),$=(0,n.styled)(n.FlexColumn)({height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:n.colors.light02}),K=(0,n.styled)(n.FlexColumn)({width:460,background:n.colors.white,borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,0.25)",overflow:"hidden",transition:"0.6s all ease-out"}),V=(0,n.styled)(n.Text)({fontSize:24,fontWeight:300,textAlign:"center",color:n.colors.light50,marginTop:16,marginBottom:16}),q=(0,n.styled)(n.FlexRow)({padding:10,alignItems:"center",borderTop:`1px solid ${n.colors.light10}`}),J=(0,n.styled)(n.Text)({color:n.colors.light50,fontSize:14,lineHeight:"20px"}),Q=(0,n.styled)(n.Text)({fontWeight:600}),X=(0,n.styled)(n.Glyph)({marginRight:11,marginLeft:6});function C(){return m.default.createElement($,null,m.default.createElement(K,null,m.default.createElement(V,null,"Hermes Debugger"),m.default.createElement(q,null,m.default.createElement(X,{size:20,name:"question-circle",color:n.colors.info}),m.default.createElement(n.FlexColumn,null,m.default.createElement(J,null,m.default.createElement(Q,null,"Metro is connected but no Hermes apps were found.")," ","Open a React Native screen with Hermes enabled to connect. Note: you may need to reload the app in order to reconnect the device to Metro.")))))}var T=p(require("react")),c=require("flipper"),F=require("antd"),S=require("flipper-plugin"),Y=(0,c.styled)(c.FlexRow)({height:"30px",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"#2bb673"}),Z=(0,c.styled)(c.Text)({color:c.colors.white,fontSize:14,lineHeight:"20px"}),ee=(0,c.styled)(te)({color:c.colors.white,textDecoration:"underline","&:hover":{cursor:"pointer",color:"#303846"}});function te(e){return T.default.createElement(F.Typography.Link,{className:e.className,href:e.href,style:e.style},e.children||e.href)}var _=function(){return(0,S.getFlipperLib)().GK("flipper_plugin_hermes_debugger_survey")};function v(){return(0,S.getFlipperLib)().GK("flipper_plugin_hermes_debugger_survey")?T.default.createElement(Y,null,T.default.createElement(Z,null,"Help us improve your debugging experience with this"," ",T.default.createElement(ee,{href:"https://fburl.com/hermessurvey"},"single page survey"),"!")):null}var a=p(require("react")),r=require("flipper"),ne=(0,r.styled)(r.FlexColumn)({height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:r.colors.light02}),oe=(0,r.styled)(r.FlexColumn)({width:460,background:r.colors.white,borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,0.25)",overflow:"hidden",transition:"0.6s all ease-out"}),re=(0,r.styled)(r.Text)({fontSize:24,fontWeight:300,textAlign:"center",color:r.colors.light50,marginTop:16,marginBottom:16}),L=(0,r.styled)(r.FlexRow)({padding:10,alignItems:"center",borderTop:`1px solid ${r.colors.light10}`}),M=(0,r.styled)(r.Text)({color:r.colors.light50,fontSize:14,lineHeight:"20px"}),le=(0,r.styled)(r.Glyph)({marginRight:11,marginLeft:6});function I(e){return a.default.createElement(ne,null,a.default.createElement(oe,null,a.default.createElement(re,null,"Hermes Debugger Select"),a.default.createElement(L,null,a.default.createElement(r.FlexColumn,null,a.default.createElement(M,null,"Please select a target:"))),e.targets.map(t=>a.default.createElement(L,{onClick:()=>e.onSelect(t),key:t.id},a.default.createElement(le,{size:20,name:"code",color:r.colors.info}),a.default.createElement(r.FlexColumn,null,a.default.createElement(M,null,t.title))))))}var d=p(require("react")),o=require("flipper"),ie=(0,o.styled)(o.FlexColumn)({height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:o.colors.light02}),se=(0,o.styled)(o.FlexColumn)({width:460,background:o.colors.white,borderRadius:10,boxShadow:"0 1px 3px rgba(0,0,0,0.25)",overflow:"hidden",transition:"0.6s all ease-out"}),ce=(0,o.styled)(o.Text)({fontSize:24,fontWeight:300,textAlign:"center",color:o.colors.light50,marginTop:16,marginBottom:16}),ae=(0,o.styled)(o.FlexRow)({padding:10,alignItems:"center",borderTop:`1px solid ${o.colors.light10}`}),ge=(0,o.styled)(o.Text)({color:o.colors.light50,fontSize:14,lineHeight:"20px"}),me=(0,o.styled)(o.Text)({fontWeight:600}),de=(0,o.styled)(o.Glyph)({marginRight:11,marginLeft:6}),w={"Failed to fetch":{message:"Metro disconnected.",hint:"Please check that metro is running and Flipper can connect to it."},default:{message:"Cannot connect to Metro.",hint:"Please check that metro is running and Flipper can connect to it."}};function he(e){let t=w.default;return e!=null&&w[e.message]&&(t=w[e.message]),d.default.createElement(ge,null,d.default.createElement(me,null,t.message," "),t.hint)}function E(e){return d.default.createElement(ie,null,d.default.createElement(se,null,d.default.createElement(ce,null,"Hermes Debugger Error"),d.default.createElement(ae,null,d.default.createElement(de,{size:20,name:"caution-octagon",color:o.colors.red}),d.default.createElement(o.FlexColumn,null,he(e.error)))))}var D=p(require("react")),f=require("flipper"),N=e=>`hermes-chromedevtools-out-of-react-node-${e.replace(/\W+/g,"-")}`,u="flipper-out-of-contents-container";function ue(e,t){let i=P(e);if(i)return i;let l=document.createElement("div");l.id=N(e),l.style.height="100%",l.style.width="100%";let s=document.createElement("webview");return s.style.height="100%",s.style.width="100%",s.src=e.replace(/^chrome-/,""),l.appendChild(s),t&&(document.getElementById(u).style.marginTop=t),document.getElementById(u).appendChild(l),l}function P(e){return document.querySelector("#"+N(e))}function pe(e){e.style.display="block",document.getElementById(u).style.display="block",document.getElementById(u).parentElement.style.display="block",document.getElementById(u).parentElement.style.height="100%"}function fe(e){document.getElementById(u).style.display="none",document.getElementById(u).parentElement.style.display="none",e&&(e.style.display="none")}var Te=(0,f.styled)(f.FlexColumn)({height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:f.colors.light02}),y=class extends D.default.Component{createDevTools(t,i){let l=ue(t,i);pe(l)}hideDevTools(t){fe(P(this.props.url))}componentDidMount(){this.createDevTools(this.props.url,this.props.marginTop)}componentWillUnmount(){this.hideDevTools(this.props.url)}componentDidUpdate(t){let i=t.url,l=this.props.url;i!=l&&(this.hideDevTools(i),this.createDevTools(l,this.props.marginTop))}render(){return D.default.createElement(Te,null)}};var ye=5*1e3,H=process.env.METRO_SERVER_PORT||"8081",xe=isNaN(+H)?"8081":H,W=new URL("http://localhost");W.port=xe;var be=(0,g.styled)(g.FlexRow)({height:"100%",width:"100%",flexGrow:1,justifyContent:"center",alignItems:"center"}),Ce=(0,g.styled)(g.FlexColumn)({height:"100%",width:"100%",justifyContent:"flex-start",alignItems:"flex-start",backgroundColor:g.colors.light02}),k=class extends g.FlipperDevicePlugin{constructor(){super(...arguments);this.state={targets:null,selectedTarget:null,error:null};this.checkDebugTargets=()=>{fetch(`${W.toString()}json`).then(t=>t.json()).then(t=>{let i=t.filter(b=>b.title==="React Native Experimental (Improved Chrome Reloads)"),l=null;if(this.state.selectedTarget!=null)for(let b of t)this.state.selectedTarget?.webSocketDebuggerUrl===b.webSocketDebuggerUrl&&(l=this.state.selectedTarget);let s=l==null&&i.length===1?i[0]:l;this.setState({error:null,targets:i,selectedTarget:s})}).catch(t=>{this.setState({targets:null,selectedTarget:null,error:t})})};this.handleSelect=t=>this.setState({selectedTarget:t})}static supportsDevice(t){return!t.isArchived&&t.os==="Metro"}componentDidMount(){this.poll=setInterval(this.checkDebugTargets,ye),this.checkDebugTargets()}componentWillUnmount(){this.poll&&clearInterval(this.poll)}renderContent(){let{error:t,selectedTarget:i,targets:l}=this.state;if(i){let s=null;return _()&&(s="29px"),h.default.createElement(y,{url:i.devtoolsFrontendUrl,marginTop:s})}else return l!=null&&l.length===0?h.default.createElement(C,null):l!=null&&l.length>0?h.default.createElement(I,{targets:l,onSelect:this.handleSelect}):t!=null?h.default.createElement(E,{error:t}):null}render(){return h.default.createElement(Ce,null,h.default.createElement(v,null),h.default.createElement(be,null,this.renderContent()))}};
