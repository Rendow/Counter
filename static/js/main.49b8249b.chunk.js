(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={NavLink:"SecondCounter_NavLink__2bTzT",wrap:"SecondCounter_wrap__1Dugj",content:"SecondCounter_content__2Img7",display:"SecondCounter_display__11X_V",error:"SecondCounter_error__23HSg",countWrap:"SecondCounter_countWrap__qLEG4",buttons:"SecondCounter_buttons__3SN64",nav:"SecondCounter_nav__1lzsh"}},65:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),u=n.n(c),s=(n(65),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),a(e),r(e),c(e),u(e)}))}),o=n(25),i=n(10),l=n(21),j=n(13),d=n.n(j),b=n(104),O=n(4);var v=function(e){var t=e.counter.maxValue===e.counter.count;return Object(O.jsx)("div",{className:d.a.wrap,children:Object(O.jsxs)("div",{className:d.a.content,children:[Object(O.jsxs)("div",{className:t?d.a.display+" "+d.a.error:d.a.display,children:[" ",e.counter.count," "]}),Object(O.jsxs)("div",{className:d.a.buttons,children:[Object(O.jsx)(b.a,{variant:"contained",color:"primary",size:"small",onClick:function(){e.incValue()},disabled:t,children:"inc "}),Object(O.jsx)(b.a,{variant:"contained",color:"primary",size:"small",onClick:function(){e.resValue()},children:"reset "}),Object(O.jsxs)(o.b,{className:d.a.nav,to:"/settings",children:[" ",Object(O.jsx)(b.a,{variant:"contained",color:"primary",size:"small",children:"Setting "})]})]})]})})},x=n(18),p={startValue:0,maxValue:0,count:0,error:!1},m=function(e,t){return{type:"SET_VALUE",maxValue:e,startValue:t}},h=Object(l.b)((function(e){return{counter:e.counter}}),(function(e){return{incValue:function(){e({type:"INC_VALUE"})},resValue:function(){e({type:"RES_VALUE"})}}}))(v),V=n(46),f=n(103);var _=function(e){var t=Object(a.useState)(e.counter.startValue),n=Object(V.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(e.counter.maxValue),s=Object(V.a)(u,2),i=s[0],l=s[1];Object(a.useEffect)((function(){c(e.counter.startValue),l(e.counter.maxValue)}),[e.counter]);var j=e.counter.error;return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:d.a.wrap,children:Object(O.jsxs)("div",{className:d.a.content,children:[Object(O.jsxs)("div",{className:d.a.display,children:[Object(O.jsxs)("div",{className:d.a.countWrap,children:[Object(O.jsx)("div",{className:j?d.a.error:"",style:{paddingTop:"4px"},children:"MAX VALUE:"}),Object(O.jsx)("div",{children:Object(O.jsx)(f.a,{size:"small",variant:"outlined",error:j,type:"number",value:i,onChange:function(t){e.onChangeMax(+t.currentTarget.value)}})})]}),Object(O.jsxs)("div",{className:d.a.countWrap,children:[Object(O.jsx)("div",{className:j?d.a.error:"",style:{paddingTop:"4px"},children:"MIN VALUE:"}),Object(O.jsx)("div",{children:Object(O.jsx)(f.a,{size:"small",variant:"outlined",type:"number",value:r,error:j,onChange:function(t){e.onChangeMin(+t.currentTarget.value)}})})]})]}),Object(O.jsx)("div",{className:d.a.buttons,children:Object(O.jsx)(o.b,{className:d.a.nav,to:"/Counter",children:Object(O.jsx)(b.a,{variant:"contained",color:"primary",size:"large",disabled:j,onClick:function(){e.setValue(i,r),localStorage.setItem("maxValue",JSON.stringify(i)),localStorage.setItem("startValue",JSON.stringify(r))},children:"set"})})})]})})})},g=Object(l.b)((function(e){return{counter:e.counter}}),(function(e){return{setValue:function(t,n){var a=m(t,n);e(a)},onChangeMax:function(t){var n=function(e){return{type:"MAX_VALUE",value:e}}(t);e(n)},onChangeMin:function(t){var n=function(e){return{type:"MIN_VALUE",value:e}}(t);e(n)}}}))(_);var S=Object(l.b)(null,(function(e){return{setValue:function(t,n){var a=m(t,n);e(a)}}}))((function(e){return Object(a.useEffect)((function(){var t=localStorage.getItem("startValue"),n=localStorage.getItem("maxValue");n&&t&&e.setValue(JSON.parse(n),JSON.parse(t))}),[]),Object(O.jsx)("div",{children:Object(O.jsxs)(i.d,{children:[Object(O.jsx)(i.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(i.a,{to:"/Counter"})}}),Object(O.jsx)(i.b,{path:"/Counter",render:function(){return Object(O.jsx)(h,{})}}),Object(O.jsx)(i.b,{path:"/settings",render:function(){return Object(O.jsx)(g,{})}}),Object(O.jsx)(i.b,{render:function(){return Object(O.jsx)(h,{})}})]})})})),N=n(31),C=Object(N.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INC_VALUE":return Object(x.a)(Object(x.a)({},e),{},{count:e.count+1});case"RES_VALUE":return Object(x.a)(Object(x.a)({},e),{},{count:e.startValue});case"SET_VALUE":return Object(x.a)(Object(x.a)({},e),{},{startValue:t.startValue,maxValue:t.maxValue,count:t.startValue});case"MAX_VALUE":var n=t.value<=e.startValue||t.value<0;return Object(x.a)(Object(x.a)({},e),{},{maxValue:t.value,error:n});case"MIN_VALUE":var a=t.value>=e.maxValue||t.value<0;return Object(x.a)(Object(x.a)({},e),{},{startValue:t.value,error:a});default:return e}}}),y=Object(N.c)(C);u.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(o.a,{children:Object(O.jsx)(l.a,{store:y,children:Object(O.jsx)(S,{})})})}),document.getElementById("root")),s()}},[[73,1,2]]]);
//# sourceMappingURL=main.49b8249b.chunk.js.map