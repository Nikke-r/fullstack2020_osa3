(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{16:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),o=t.n(u),c=(t(5),t(15)),l=t(2),i=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:e.search,onChange:e.handleSearch}))},s=function(e){return r.a.createElement("form",{onSubmit:e.addNewPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.showContacts,t=e.remove;return r.a.createElement("div",null,n.map((function(e,n){return r.a.createElement("p",{key:n}," ",e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return t(e.id)}},"delete")," ")})))},f=t(3),d=t.n(f),h="https://fullstack-niklasr.herokuapp.com/api/persons",b=function(){return d.a.get(h).then((function(e){return e.data}))},p=function(e){return d.a.post(h,e).then((function(e){return e.data}))},w=function(e,n){return d.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return d.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.message;return null===n?null:n.error?r.a.createElement("div",{className:"error"},n.error):n.success?r.a.createElement("div",{className:"success"},n.success):void 0},g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),f=Object(l.a)(o,2),d=f[0],h=f[1],g=Object(a.useState)(""),C=Object(l.a)(g,2),N=C[0],j=C[1],O=Object(a.useState)(""),k=Object(l.a)(O,2),S=k[0],y=k[1],L=Object(a.useState)(null),P=Object(l.a)(L,2),T=P[0],x=P[1],D=S?t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())})):t;return Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(i,{search:S,handleSearch:function(e){y(e.target.value)}}),r.a.createElement(v,{message:T}),r.a.createElement("h2",null,"add a new"),r.a.createElement(s,{addNewPerson:function(e){if(e.preventDefault(),t.find((function(e){return e.name.toLowerCase()===d.toLowerCase()}))){if(window.confirm("Person ".concat(d," already exists on the phonebook. Do you want to update the number?"))){var n=t.find((function(e){return e.name.toLowerCase()===d.toLowerCase()})),a=Object(c.a)({},n,{number:N}),r=n.id;w(r,a).then((function(e){u(t.map((function(n){return n.id!==r?n:e}))),x({success:"Person ".concat(e.name," updated!")}),setTimeout((function(){x(null)}),5e3)})).catch((function(e){x({error:e.response.data.error.name.message}),setTimeout((function(){x(null)}),5e3)}))}}else p({name:d,number:N}).then((function(e){u(t.concat(e)),h(""),j(""),x({success:"Person ".concat(e.name," added to phonebook!")}),setTimeout((function(){x(null)}),5e3)})).catch((function(e){x({error:e.response.data.error.name.message}),setTimeout((function(){x(null)}),5e3)}))},newName:d,handleNameChange:function(e){h(e.target.value)},newNumber:N,handleNumberChange:function(e){j(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{showContacts:D,remove:function(e){window.confirm("Are you sure you want to delete this?")&&E(e).then((function(){var n=t.filter((function(n){return n.id!==e}));u(n)})).catch((function(e){x([{error:e.response.data.error.name.message}]),setTimeout((function(){x([])}),5e3)}))}}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))},5:function(e,n,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.3a085b71.chunk.js.map