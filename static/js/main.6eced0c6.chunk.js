(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),l=c(5),o=c(7),i=c(6),r=c(1),d=c.n(r),b=(c(12),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(e){Object(o.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.addActiveClass="list_item--active",e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:t?"Selected good: - ".concat(t):"No goods selected"}),""!==t?Object(b.jsx)("button",{type:"button",className:"clear-btn list_btn",onClick:function(){e.setState({selectedGood:""})},children:"Clear"}):"",Object(b.jsx)("ul",{className:"list",children:j.map((function(c){return Object(b.jsx)(d.a.Fragment,{children:t===c?Object(b.jsxs)("li",{className:"list_item list_item--active",children:[c,Object(b.jsx)("button",{type:"button",className:"list_btn list_btn--remove",onClick:function(){e.setState({selectedGood:""})},children:"Remove"})]}):Object(b.jsxs)("li",{className:"list_item",children:[c,Object(b.jsx)("button",{type:"button",className:"list_btn",onClick:function(){e.setState({selectedGood:c})},children:"Select"})]})},c)}))})]})})}}]),c}(d.a.Component),m=u;n.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6eced0c6.chunk.js.map