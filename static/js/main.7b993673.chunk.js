(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),o=a.n(l),r=(a(14),a(15),a(16),a(1)),s=a(8),u=a(3),m=function(e){var t=e.todos,a=e.setTypeFilter;return Object(n.useEffect)((function(){}),[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"todo-count"},"".concat(t.length," items left")),console.log(t),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:"selected",onClick:function(e){return a(e.target.innerText)}},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active",onClick:function(e){return a(e.target.innerText)}},"Active")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/completed",onClick:function(e){return a(e.target.innerText)}},"Completed"))),c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(e){return a(e.target.innerText)}},"Clear completed"))},i=a(7),d=a.n(i),p=function(e){var t=e.todos,a=e.id,n=e.completed,l=e.changeProcessTodo;return c.a.createElement("li",{className:d()({view:!n,completed:n})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",onChange:function(){return l(a)},checked:n}),c.a.createElement("label",null,t),c.a.createElement("button",{type:"button",className:"destroy"})),c.a.createElement("input",{type:"text",className:"edit"}))},f=function(e){var t=e.todos,a=e.changeProcessTodo;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(p,Object.assign({key:e.id},e,{changeProcessTodo:a}))})))};var b=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),i=Object(u.a)(o,2),d=i[0],p=i[1],b=Object(n.useState)([]),E=Object(u.a)(b,2),g=E[0],h=E[1],j=Object(n.useState)("All"),O=Object(u.a)(j,2),v=O[0],k=O[1];function N(e){p("number"===typeof e?d.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})):d.map((function(e){return d.every((function(e){return e.completed}))?Object(r.a)(Object(r.a)({},e),{},{completed:!1}):Object(r.a)(Object(r.a)({},e),{},{completed:!0})})))}return Object(n.useEffect)((function(){h([d])}),[d]),Object(n.useEffect)((function(){switch(v){case"All":h(d);break;case"Active":h(d.filter((function(e){return!e.completed})));break;case"Completed":h(d.filter((function(e){return e.completed})));break;case"Clear completed":h(g.filter((function(e){return e.completed}))),p(g)}}),[v,d]),c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos App"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:a,onChange:function(e){var t=e.target;return l(t.value)},onKeyDown:function(e){var t;"Enter"===e.key&&(t=a,p([].concat(Object(s.a)(d),[{todo:t,id:Date.now(),todos:a,completed:!1}])),l(""))}}))),c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:function(){return N()}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement(f,{todos:g,changeProcessTodo:N})),d.length>0&&c.a.createElement("footer",{className:"footer"},c.a.createElement(m,{todos:g,setTypeFilter:k})))};o.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7b993673.chunk.js.map