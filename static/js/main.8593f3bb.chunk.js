(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(17),r=c.n(a),i=c(8),o=c(11),j=c(2),l=(c(23),c(24),c(0)),u=function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("section",{className:"welcome",children:Object(l.jsx)("h1",{children:"welcome"})}),Object(l.jsxs)("section",{className:"quotes",children:[Object(l.jsx)("img",{src:"https://www.keepinspiring.me/wp-content/uploads/2021/06/good-food-is-happiness-auguste-escoffier-quote.png",alt:""}),Object(l.jsx)("img",{src:"https://www.keepinspiring.me/wp-content/uploads/2021/06/dont-need-a-silver-fork-paul-prudhomme-quote.png",alt:""}),Object(l.jsx)("img",{src:"https://www.keepinspiring.me/wp-content/uploads/2021/06/food-is-a-symbol-allen-wolfelt-quote.png",alt:""})]}),Object(l.jsx)("section",{className:"about",children:Object(l.jsx)("h2",{children:"Find Your Favourite Recipe"})}),Object(l.jsx)("section",{className:"para",children:Object(l.jsx)("p",{children:"Follow us on"})}),Object(l.jsxs)("section",{className:"follow",children:[Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",alt:""}),Object(l.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/124/124010.png",alt:""}),Object(l.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/124/124021.png",alt:""})]})]})},p=c(7),b=c.n(p),h=c(10),d=(c(27),function(e){var t=e.title,c=e.image;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:c,alt:t}),Object(l.jsx)("h2",{children:t}),Object(l.jsx)("button",{children:"See More..."})]})}),m=(c(28),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a="https://api.spoonacular.com/recipes/complexSearch?query=burger&apiKey=".concat("7f6e55108e844de8a8b1051f4acf808e");Object(n.useEffect)((function(){r()}));var r=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"burger",children:[Object(l.jsx)("section",{className:"welcome",children:Object(l.jsx)("h1",{children:"Welcome to Burger section"})}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"display",children:c.map((function(e){return Object(l.jsx)(d,{title:e.title,image:e.image})}))})})]})}),O=(c(29),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a="https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=".concat("7f6e55108e844de8a8b1051f4acf808e");Object(n.useEffect)((function(){r()}));var r=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"pizza",children:[Object(l.jsx)("section",{className:"welcome",children:Object(l.jsx)("h1",{children:"Welcome to Pizza section"})}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"display",children:c.map((function(e){return Object(l.jsx)(d,{title:e.title,image:e.image})}))})})]})});c(30);var x=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],a=c[1],r="https://api.spoonacular.com/recipes/complexSearch?query=".concat(e.query,"&apiKey=").concat("7f6e55108e844de8a8b1051f4acf808e");Object(n.useEffect)((function(){o()}));var o=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("section",{className:"welcome",children:Object(l.jsx)("h1",{children:"Here U Go"})}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"display",children:s.map((function(e){return Object(l.jsx)(d,{title:e.title,image:e.image})}))})})]})},f=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)(o.b,{to:"/",className:"Link",children:"Home"}),Object(l.jsx)(o.b,{to:"/Burger",className:"Link",children:"Burger"}),Object(l.jsx)(o.b,{to:"Pizza",className:"Link",children:"Pizza"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{onChange:function(e){return s(e.target.value)},value:c,type:"text",placeholder:"search your recipe..."}),Object(l.jsx)(o.b,{to:"/Search",id:"button",children:"Search"})]})]})}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/Burger",children:Object(l.jsx)(m,{})}),Object(l.jsx)(j.a,{path:"/Pizza",children:Object(l.jsx)(O,{})}),Object(l.jsx)(j.a,{path:"/Search",children:Object(l.jsx)(x,{query:c})}),Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(u,{})})]})]})})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8593f3bb.chunk.js.map