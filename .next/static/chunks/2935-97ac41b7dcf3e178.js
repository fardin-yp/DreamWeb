"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2935],{5577:function(e,t,n){n.r(t);var r=n(4051),a=n.n(r),o=n(5893),i=n(7294),l=n(9669),u=n.n(l),s=n(7089),c=n(5675);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(s){return void n(s)}l.done?t(u):Promise.resolve(u).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){d(o,r,a,i,l,"next",e)}function l(e){d(o,r,a,i,l,"throw",e)}i(void 0)}))}}function x(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(e){var t=e.Seoroute,n=e.info,r=(0,i.useState)("home"),l=r[0],p=r[1],d=(0,i.useState)(""),f=d[0],v=d[1],g=(0,i.useState)(""),j=g[0],y=g[1],m=(0,i.useState)(""),w=m[0],b=m[1],C=(0,i.useState)(""),S=C[0],k=C[1],M=(0,i.useState)(""),N=M[0],A=M[1],I=(0,i.useState)(""),T=I[0],U=I[1],_=(0,i.useState)(!1),E=_[0],R=_[1],z=(0,i.useState)([]),P=z[0],D=z[1],O=(0,i.useState)(""),B=O[0],L=O[1],V=(0,i.useState)(""),Z=V[0],$=V[1],q=(0,i.useState)(""),F=q[0],G=q[1];(0,i.useEffect)((function(){if(n){var e=n&&n.find((function(e){return e.route===l}));e&&(v(e.title),b(e.description),k(e.keywords),A(e.ogType),U(e.ogUrl))}}),[l]);var H=function(){var e=h(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r={title:f,route:j,description:w,keywords:S,ogType:N,ogUrl:T},R(!0),e.prev=3,"new-seo"!==t){e.next=7;break}return e.next=7,u().post("http://dreamweb.runflare.run/adminRoute/Seo",r,{withCredentials:!0}).then((function(e){e.data.errMessage&&(alert(e.data.errMessage),R(!1)),alert(e.data.Message),R(!1)}));case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=h(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={title:f,route:j,description:w,keywords:S,ogType:N,ogUrl:T,id:n},e.prev=1,"edit-seo"!==t){e.next=5;break}return e.next=5,u().put("http://dreamweb.runflare.run/adminRoute/SeoUpdate",r,{withCredentials:!0}).then((function(e){e.data.errMessage&&(alert(e.data.errMessage),R(!1)),alert(e.data.Message),R(!1)}));case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=h(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r={title:f,price:Z,payPrice:F,propertys:P},R(!0),e.prev=3,"seo-service"!==t){e.next=7;break}return e.next=7,u().post("http://dreamweb.runflare.run/adminRoute/seoService",r,{withCredentials:!0}).then((function(e){e.data.errMessage&&(alert(e.data.errMessage),R(!1)),alert(e.data.Message),R(!1)}));case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),Q=n&&n.filter((function(e){return e.route===l}));return(0,o.jsxs)("div",{className:"products",children:["new-seo"===t&&(0,o.jsxs)("form",{style:{padding:"20px"},onSubmit:H,children:[(0,o.jsxs)("div",{className:"article-holder",children:[(0,o.jsx)("input",{placeholder:"\u0639\u0646\u0648\u0627\u0646 ",type:"text",onChange:function(e){return v(e.target.value)}}),(0,o.jsxs)("select",{style:{left:"0px",top:"15px",zIndex:"12"},onChange:function(e){return y(e.target.value)},children:[(0,o.jsx)("option",{value:"",children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u062f\u0627\u0645\u0646\u0647 \u0647\u0627"}),(0,o.jsx)("option",{value:"home",children:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"}),(0,o.jsx)("option",{value:"exclusive",children:"\u0633\u0627\u06cc\u062a \u0627\u062e\u062a\u0635\u0627\u0635\u06cc"}),(0,o.jsx)("option",{value:"seo",children:"\u0633\u0626\u0648"}),(0,o.jsx)("option",{value:"contact",children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"}),(0,o.jsx)("option",{value:"articles",children:"\u0645\u0642\u0627\u0644\u0627\u062a"}),(0,o.jsx)("option",{value:"shop",children:"\u0641\u0631\u0648\u0634\u06af\u0627\u0647\u06cc"}),(0,o.jsx)("option",{value:"company",children:"\u0634\u0631\u06a9\u062a\u06cc"}),(0,o.jsx)("option",{value:"medical",children:"\u067e\u0632\u0634\u06a9\u06cc"}),(0,o.jsx)("option",{value:"realState",children:"\u0627\u0645\u0644\u0627\u06a9"}),(0,o.jsx)("option",{value:"news",children:"\u062e\u0628\u0631\u06cc"}),(0,o.jsx)("option",{value:"resturant",children:"\u0631\u0633\u062a\u0648\u0631\u0627\u0646"}),(0,o.jsx)("option",{value:"personal",children:"\u0634\u062e\u0635\u06cc"})]}),(0,o.jsx)("input",{placeholder:"og:type",type:"text",onChange:function(e){return A(e.target.value)}}),(0,o.jsx)("input",{placeholder:"og:url",type:"text",onChange:function(e){return U(e.target.value)}}),(0,o.jsx)("textarea",{placeholder:"description",type:"text",onChange:function(e){return b(e.target.value)}}),(0,o.jsx)("textarea",{placeholder:"\u062d\u0631\u0648\u0641 \u06a9\u0644\u06cc\u062f\u06cc",type:"text",onChange:function(e){return k(e.target.value)}})]}),(0,o.jsxs)("button",{disabled:E,onClick:H,children:[E&&(0,o.jsx)("div",{style:{height:"30px",width:"30px",top:"25%"},className:"loading-spinner"})," \u0627\u0631\u0633\u0627\u0644"]})]}),"edit-seo"===t&&(0,o.jsxs)("div",{style:{margin:"auto"},children:[(0,o.jsxs)("select",{style:{marginTop:"-20px",zIndex:"12",width:"80%",background:"#ff9800",color:"white"},onChange:function(e){return p(e.target.value)},children:[(0,o.jsx)("option",{value:"",children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u062f\u0627\u0645\u0646\u0647 \u0647\u0627"}),(0,o.jsx)("option",{value:"home",children:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"}),(0,o.jsx)("option",{value:"exclusive",children:"\u0633\u0627\u06cc\u062a \u0627\u062e\u062a\u0635\u0627\u0635\u06cc"}),(0,o.jsx)("option",{value:"seo",children:"\u0633\u0626\u0648"}),(0,o.jsx)("option",{value:"contact",children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"}),(0,o.jsx)("option",{value:"news",children:"\u0645\u0642\u0627\u0644\u0627\u062a"}),(0,o.jsx)("option",{value:"shop",children:"\u0641\u0631\u0648\u0634\u06af\u0627\u0647\u06cc"}),(0,o.jsx)("option",{value:"company",children:"\u0634\u0631\u06a9\u062a\u06cc"}),(0,o.jsx)("option",{value:"medical",children:"\u067e\u0632\u0634\u06a9\u06cc"}),(0,o.jsx)("option",{value:"realState",children:"\u0627\u0645\u0644\u0627\u06a9"}),(0,o.jsx)("option",{value:"news",children:"\u062e\u0628\u0631\u06cc"}),(0,o.jsx)("option",{value:"resturant",children:"\u0631\u0633\u062a\u0648\u0631\u0627\u0646"}),(0,o.jsx)("option",{value:"personal",children:"\u0634\u062e\u0635\u06cc"})]}),Q&&Q.map((function(e){return(0,o.jsxs)("form",{style:{padding:"20px",height:"100%"},onSubmit:H,children:[(0,o.jsxs)("div",{className:"article-holder",children:[(0,o.jsx)("input",{value:f,style:{width:"86%"},placeholder:"\u0639\u0646\u0648\u0627\u0646",type:"text",onChange:function(e){return v(e.target.value)}}),(0,o.jsx)("input",{value:N,placeholder:"og:type",type:"text",onChange:function(e){return A(e.target.value)}}),(0,o.jsx)("input",{value:T,placeholder:"og:url",type:"text",onChange:function(e){return U(e.target.value)}}),(0,o.jsx)("textarea",{value:w,placeholder:"description",type:"text",onChange:function(e){return b(e.target.value)}}),(0,o.jsx)("textarea",{value:S,placeholder:"\u062d\u0631\u0648\u0641 \u06a9\u0644\u06cc\u062f\u06cc",type:"text",onChange:function(e){return k(e.target.value)}})]}),(0,o.jsxs)("button",{disabled:E,onClick:function(){return J(e._id)},children:[E&&(0,o.jsx)("div",{style:{height:"30px",width:"30px",top:"25%"},className:"loading-spinner"})," \u062a\u0627\u06cc\u06cc\u062f \u0648\u06cc\u0631\u0627\u06cc\u0634"]})]})}))]}),"seo-service"===t&&(0,o.jsxs)("form",{style:{paddingBottom:"20px"},children:[(0,o.jsx)("input",{onChange:function(e){return v(e.target.value)},placeholder:"\u0639\u0646\u0648\u0627\u0646"}),(0,o.jsx)("input",{onChange:function(e){return $(e.target.value)},placeholder:"\u0642\u06cc\u0645\u062a"}),(0,o.jsx)("input",{onChange:function(e){return G(e.target.value)},style:{marginLeft:"46%"},placeholder:" \u0642\u06cc\u0645\u062a \u062f\u0631\u06af\u0627\u0647"}),(0,o.jsxs)("div",{style:{width:"86%",display:"flex"},children:[(0,o.jsx)("input",{defaultValue:B,placeholder:"\u0648\u06cc\u0698\u06af\u06cc \u0647\u0627",onChange:function(e){return L(e.target.value)}}),(0,o.jsx)("b",{onClick:function(){D(x(P).concat([B])),L("")},style:{cursor:"pointer",fontSize:"14px",width:"40px",textAlign:"center",margin:"auto 10px",height:"40px",padding:"10px",borderRadius:"10px",backgroundColor:"black",color:"white"},children:"+"})]}),(0,o.jsx)("div",{className:"seoService-vijegi",children:P.length>0&&P.map((function(e){return(0,o.jsxs)("div",{children:[e,(0,o.jsx)(c.default,{width:20,height:20,src:s.Z,onClick:function(){return t=e,void D(P.filter((function(e){return e!==t})));var t},alt:""})]})}))}),(0,o.jsxs)("button",{disabled:E,onClick:K,children:[E&&(0,o.jsx)("div",{style:{height:"30px",width:"30px",top:"25%"},className:"loading-spinner"})," \u0627\u0631\u0633\u0627\u0644"]})]})]})}}}]);