(this["webpackJsonplifecycle-2-front"]=this["webpackJsonplifecycle-2-front"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(4),s=n.n(a),i=(n(14),n(15),n(5)),r=n(6),l=n(2),u=n(9),d=n(8),j=n(0);var h=function(t){var e=t.note,n=t.onDelete;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("button",{className:"delete",onClick:function(){return n(e.id)},children:"X"}),Object(j.jsx)("div",{className:"text",children:e.content})]})};var b=function(t){var e=t.notes,n=t.onDelete;return Object(j.jsx)("div",{className:"cards",children:e.map((function(t){return Object(j.jsx)(h,{note:t,onDelete:n},t.id)}))})},f=n(7);var v=function(t){var e=t.onAdd,n=Object(c.useState)({value:""}),o=Object(f.a)(n,2),a=o[0],s=o[1];return Object(j.jsxs)("div",{className:"addCard",children:[Object(j.jsx)("h2",{children:"New Note"}),Object(j.jsxs)("div",{className:"textarea-box",children:[Object(j.jsx)("textarea",{className:"textarea",value:a.value,onChange:function(t){s((function(e){return{value:t.target.value}}))}}),Object(j.jsx)("button",{type:"button",className:"add",onClick:function(t){if(""===a.value.trim())return null;e(a.value),s({value:""})}})]})]})},O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={notes:[]},t.url="https://react-http.herokuapp.com",t.loadingNotes=t.loadingNotes.bind(Object(l.a)(t)),t.onAdd=t.onAdd.bind(Object(l.a)(t)),t.onDelete=t.onDelete.bind(Object(l.a)(t)),t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.loadingNotes()}},{key:"loadingNotes",value:function(){var t=this;console.log("load"),fetch("".concat(this.url,"/notes")).then((function(t){return t.json()})).then((function(e){return t.setState({notes:e})})).catch((function(t){return console.log(t)}))}},{key:"onAdd",value:function(t){var e=this,n={id:0,content:t};fetch("".concat(this.url,"/notes"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){return e.loadingNotes()})).catch((function(t){return console.log(t)}))}},{key:"onDelete",value:function(t){var e=this;fetch("".concat(this.url,"/notes/").concat(t),{method:"DELETE"}).then((function(t){return e.loadingNotes()})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("h1",{children:"Notes"}),Object(j.jsx)("button",{className:"btn",type:"button",onClick:this.loadingNotes,children:Object(j.jsx)("span",{className:"loading"})})]}),Object(j.jsx)(b,{notes:this.state.notes,onDelete:this.onDelete}),Object(j.jsx)(v,{onAdd:this.onAdd})]})}}]),n}(o.a.Component);var x=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(O,{})})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),a(t),s(t)}))};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),N()}},[[17,1,2]]]);
//# sourceMappingURL=main.9550a2d9.chunk.js.map