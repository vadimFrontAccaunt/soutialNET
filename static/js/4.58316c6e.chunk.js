(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[4],{428:function(e,t,n){"use strict";n.r(t);var a=n(166);var r=n(0),c=n.n(r),l=n(8),u=n(212),o=n(55),i=n(20),s=function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.chat.status}));return Object(r.useEffect)((function(){return e(Object(u.c)()),function(){e(Object(u.d)())}}),[]),c.a.createElement("div",null,"error"===t&&c.a.createElement("div",null,"Some error occured. Please refresh the page"),c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null),c.a.createElement(b,null)))},m=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(l.d)((function(e){return e.chat.messages})),n=Object(r.useRef)(null),u=Object(r.useState)(!0),o=Object(a.a)(u,2),i=o[0],s=o[1];return Object(r.useEffect)((function(){var e;i&&(null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[t]),c.a.createElement("div",{style:{height:"400px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!i&&s(!0):i&&s(!1)}},t.map((function(e,t){return c.a.createElement(f,{key:e.id,message:e})})),c.a.createElement("div",{ref:n}))},f=c.a.memo((function(e){var t=e.message;return c.a.createElement("div",null,c.a.createElement("img",{src:t.photo,style:{width:"30px"}})," ",c.a.createElement("b",null,t.userName),c.a.createElement("br",null),t.message,c.a.createElement("hr",null))})),b=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],m=Object(l.c)(),f=Object(l.d)(o.b),b=Object(l.d)((function(e){return e.chat.status}));return f?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("textarea",{onChange:function(e){return s(e.currentTarget.value)},value:n})),c.a.createElement("div",null,c.a.createElement("button",{disabled:"ready"!==b,onClick:function(){n&&(m(Object(u.b)(n)),s(""))}},"Send"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{to:"/login"}))};t.default=function(){return c.a.createElement("div",null,c.a.createElement(s,null))}}}]);
//# sourceMappingURL=4.58316c6e.chunk.js.map