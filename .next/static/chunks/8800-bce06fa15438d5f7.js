(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8800],{6555:function(e,t){"use strict";t.Z={src:"/_next/static/media/send.d6060f6c.png",height:640,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXEAAAAFBQUbGxtubm5nZ2dWVlZ8fHwAAAAEBATS0tL///9mZmaEGkfXAAAACnRSTlMABmt94tnK2US5Yu1KsQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUCJljYAABRiZOCMXOwwGiWLm4mBkYmFm4uLnZGJEYcCmEYqh2ACDzAO8PIwmSAAAAAElFTkSuQmCC"}},2088:function(e,t,n){"use strict";var r=n(4051),a=n.n(r),s=n(5893),i=n(9669),u=n.n(i),o=n(7294),c=n(2165),l=n(2488),f=n(7513),d=n(5675),h=n(6555);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n,r,a,s,i){try{var u=e[s](i),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){m(s,r,a,i,u,"next",e)}function u(e){m(s,r,a,i,u,"throw",e)}i(void 0)}))}}function x(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],r=(0,o.useState)(null),i=r[0],p=r[1],m=(0,o.useState)(null),v=m[0],A=m[1],w=(0,o.useState)(""),b=w[0],j=w[1],y=(0,o.useState)(""),C=y[0],S=y[1],k=(0,o.useState)(null),E=k[0],I=k[1],U=(0,o.useState)(!1),M=U[0],N=U[1],Z=(0,o.useState)(""),D=Z[0],B=Z[1],R=(0,o.useState)(null),_=R[0],z=R[1],F=(0,o.useState)(null),G=(F[0],F[1],(0,o.useRef)()),O=(0,o.useContext)(f.Z).find,T=(0,o.useRef)(null),$=(0,o.useState)(!1),J=$[0],L=$[1],V=["chat"];!0===t&&(V=["openChat"]);(0,o.useEffect)((function(){var e;null===(e=T.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[i]),(0,o.useEffect)((function(){G.current=(0,l.ZP)("ws://dreamweb.runflare.run:27017"),G.current.on("getMessage",(function(e){I({sender:e.senderId,text:e.text,createdAt:Date.now()})}))}),[]);(0,o.useEffect)((function(){E&&v[0].members.includes(E.sender)&&p((function(e){return x(e).concat([E])}))}),[E,v]),(0,o.useEffect)(g(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G.current.emit("addUser",v&&v.length>0&&v[0].members[0]),G.current.on("getUsers",(function(e){var t=e.find((function(e){return"Admin-hrttrhthr%00"===e.userId}));void 0!==t&&t&&z(t)}));case 2:case"end":return e.stop()}}),e)}))),[v]);var Y=function(){var e=g(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("http://dreamweb.runflare.run/conversation",{withCredentials:!0}).then((function(e){e.data.errMessage||(M||0!==e.data.length||(u().get("http://dreamweb.runflare.run/conversation/logout",{withCredentials:!0}),A(null)),e.data.length>0&&A(e.data))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=g(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=3;break}return e.next=3,u().get("http://dreamweb.runflare.run/message/",{withCredentials:!0}).then((function(e){p(e.data)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){Y()}),[]),(0,o.useEffect)((function(){E&&new Audio("/mixkit-long-pop-2358.wav").play()}),[E]),(0,o.useEffect)((function(){P()}),[v]);var W=function(){var e=g(a().mark((function e(t,n){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),r={email:t,username:n},e.next=4,u().post("http://dreamweb.runflare.run/conversation/",r,{withCredentials:!0});case 4:if((s=e.sent).data.errMessage&&(N(!1),alert(s.data.errMessage)),s.data.errMessage){e.next=11;break}return e.next=9,Y();case 9:return e.next=11,P();case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();(0,o.useEffect)(g(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O.username){e.next=3;break}return e.next=3,W(O.email,O.username);case 3:case"end":return e.stop()}}),e)}))),[O]);var K=function(){var e=g(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(v&&v.length>0)){e.next=9;break}if(n=v&&v[0].members[0],r={conversationId:n,sender:n,text:D},D.length>0&&G.current.emit("sendMessage",{senderId:v&&v[0].members[0],receiverId:"Admin-hrttrhthr%00",text:D}),B(""),!(D.length>0)){e.next=9;break}return e.next=9,u().post("http://dreamweb.runflare.run/message/",r,{withCredentials:!0}).then((function(e){p(x(i).concat([e.data]))}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){localStorage.getItem("message")||localStorage.setItem("message",!1),E&&localStorage.setItem("message",!0)}),[E]),(0,o.useEffect)((function(){var e=localStorage.getItem("message");L(e)}),[E]),(0,s.jsxs)("div",{className:V,children:[!1===t&&"true"===J&&(0,s.jsx)("span",{}),(0,s.jsxs)("div",{className:"open-label",children:[(0,s.jsx)("div",{id:"label-image",onClick:function(){return n(!1)},children:(0,s.jsx)("img",{style:{width:"25px",height:"25px",left:"-25px"},onClick:function(){return n(!1)},src:"/uploads/cancel.png",alt:""})}),(0,s.jsx)("div",{className:"agent-profile",children:(0,s.jsx)("img",{src:"/uploads/agent.png",alt:""})}),(0,s.jsxs)("div",{style:{display:"flex",flexFlow:"column",justifyContent:"center",fontSize:"13px"},children:[(0,s.jsx)("p",{style:{marginBottom:"-5%",fontSize:"15px"},children:" \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0633\u0627\u06cc\u062a"}),_&&(0,s.jsx)("p",{children:"\u067e\u0627\u0633\u062e\u06af\u0648\u06cc \u0633\u0648\u0627\u0644\u0627\u062a \u0634\u0645\u0627 \u0647\u0633\u062a\u06cc\u0645."}),!_&&(0,s.jsx)("p",{style:{fontSize:"11px",color:"red"},children:"\u0645\u062a\u0627\u0633\u0641\u0627\u0646\u0647 \u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0636\u0631 \u0642\u0627\u062f\u0631 \u0628\u0647 \u067e\u0627\u0633\u062e\u06af\u0648\u06cc\u06cc \u0646\u06cc\u0633\u062a\u06cc\u0645 !"})]})]}),(0,s.jsxs)("div",{className:"chat-room",children:[v&&v.length>0&&(0,s.jsxs)("div",{style:v?null:{display:"none"},children:[v&&i&&i.length>0&&i.map((function(e){return(0,s.jsxs)("div",{style:e.sender!==e.conversationId?{alignItems:"flex-end"}:null,children:[(0,s.jsx)("p",{style:e.sender!==e.conversationId?{backgroundColor:"#78e6f3"}:null,children:e.text}),(0,s.jsx)("label",{children:(0,c.WU)(e.createdAt)})]},e._id)})),v&&(0,s.jsx)("div",{ref:T})]}),v&&0===v.length&&(0,s.jsxs)("form",{className:"chat-signUp",children:[(0,s.jsx)("b",{children:"\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u0648 \u0627\u06cc\u0645\u06cc\u0644 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}),(0,s.jsx)("input",{placeholder:"\u0646\u0627\u0645",onChange:function(e){return S(e.target.value)}}),(0,s.jsx)("input",{placeholder:"\u0627\u06cc\u0645\u06cc\u0644",onChange:function(e){return j(e.target.value)}}),(0,s.jsxs)("button",{disabled:M,onClick:function(){return W(b,C)},children:["\u0634\u0631\u0648\u0639 \u06af\u0641\u062a\u06af\u0648",M&&(0,s.jsx)("div",{style:{width:"25px",height:"25px",position:"absolute",borderRight:"4px solid #355c7d"},className:"loading-spinner"})," "]})]}),!v&&(0,s.jsxs)("form",{style:v?{display:"none"}:null,className:"chat-signUp",children:[(0,s.jsx)("b",{children:"\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u0648 \u0627\u06cc\u0645\u06cc\u0644 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}),(0,s.jsx)("input",{placeholder:"\u0646\u0627\u0645",onChange:function(e){return S(e.target.value)}}),(0,s.jsx)("input",{placeholder:"\u0627\u06cc\u0645\u06cc\u0644",onChange:function(e){return j(e.target.value)}}),(0,s.jsxs)("button",{disabled:M,onClick:function(){return W(b,C)},children:["\u0634\u0631\u0648\u0639 \u06af\u0641\u062a\u06af\u0648",M&&(0,s.jsx)("div",{style:{width:"25px",height:"25px",position:"absolute",borderRight:"4px solid #355c7d"},className:"loading-spinner"})," "]})]})]}),!0===t&&(0,s.jsxs)("form",{className:"chat-input",children:[(0,s.jsx)("input",{value:D,onChange:function(e){return B(e.target.value)},placeholder:"\u067e\u06cc\u0627\u0645\u06cc \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f ..."}),(0,s.jsx)("button",{onClick:v&&K,children:(0,s.jsx)(d.default,{width:27,height:25,src:h.Z,alt:"send.png"})})]}),!1===t&&(0,s.jsx)("button",{onClick:function(){n(!0),localStorage.setItem("message",!1),L(localStorage.getItem("message"))},children:(0,s.jsx)("img",{src:"/uploads/live-chat.png",alt:"live-chat.image"})})]})}},9008:function(e,t,n){e.exports=n(5443)},2165:function(e,t,n){"use strict";n.d(t,{WU:function(){return c}});var r=["second","minute","hour","day","week","month","year"];var a=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var s={},i=function(e,t){s[e]=t},u=[60,60,24,7,365/7/12,12];function o(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var c=function(e,t,n){var r=function(e,t){return(+(t?o(t):new Date)-+o(e))/1e3}(e,n&&n.relativeDate);return function(e,t){for(var n=e<0?1:0,r=e=Math.abs(e),a=0;e>=u[a]&&a<u.length;a++)e/=u[a];return(e=Math.floor(e))>(0===(a*=2)?9:1)&&(a+=1),t(e,a,r)[n].replace("%s",e.toString())}(r,function(e){return s[e]||s.en_US}(t))};i("en_US",(function(e,t){if(0===t)return["just now","right now"];var n=r[Math.floor(t/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]})),i("zh_CN",(function(e,t){if(0===t)return["\u521a\u521a","\u7247\u523b\u540e"];var n=a[~~(t/2)];return[e+" "+n+"\u524d",e+" "+n+"\u540e"]}))}}]);