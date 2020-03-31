(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(29),s=a.n(l),c=(a(81),a(22)),i=a(18),o=a(30),u=a(31),m=a(38),d=a(39),h=a(53),p=a.n(h),E=function(){return r.a.createElement("div",{className:p.a.modal},r.a.createElement("div",{className:p.a.ring}))},f=a(14),b=a.n(f),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={exercises:[],loading:!0},e.deleteExcercise=function(t){b.a.delete("http://localhost:5000/api/exercises/"+t),e.setState((function(e){return{exercises:e.exercises.filter((function(e){return e._id!==t}))}}))},e.updateHandler=function(t){e.props.history.push({pathname:"/create",search:"?"+t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/api/exercises").then((function(t){e.setState({exercises:t.data,loading:!1}),console.log(t.data)})).catch((function(t){return e.setState({loading:!0})}))}},{key:"render",value:function(){var e=this,t=r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement("p",null,"No Data Yet inserted!")," "));return this.state.loading&&(t=r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(E,null)),r.a.createElement("td",null))),this.state.exercises.length&&(t=this.state.exercises.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null," ",t.username," "),r.a.createElement("td",null," ",t.description," "),r.a.createElement("td",null," ",t.duration," "),r.a.createElement("td",null," ",t.date.substring(0,10)," "),r.a.createElement("td",null," ",r.a.createElement("button",{className:"btn btn-link",onClick:function(){return e.updateHandler(t._id)}},"Edit")," | ",r.a.createElement("button",{className:"btn btn-link",onClick:function(){return e.deleteExcercise(t._id)}},"Delete")," "))}))),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h3",null," Exercise List "),r.a.createElement("table",{className:"table table-striped mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t)))}}]),a}(n.Component),v=a(71),N=a.n(v),y=(a(99),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:null,description:"",duration:0,date:new Date,users:[]},e.usernameHandler=function(t){e.setState({username:t.target.value})},e.descriptionHandler=function(t){e.setState({description:t.target.value})},e.durationHandler=function(t){e.setState({duration:t.target.value})},e.changeDate=function(t){e.setState({date:t})},e.onFormSubmit=function(t){t.preventDefault();var a={username:e.state.username,description:e.state.description,duration:e.state.duration,date:e.state.date},n="http://localhost:5000/api/exercises/",r=e.props.location.search.substring(1);r?b.a.put(n+r,a).then((function(t){return e.props.history.push("/")})):(b.a.post(n,a),e.props.history.push("/"))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("updated");var t=String(this.props.location.search);(t=t.substring(1)).length?b.a.get("http://localhost:5000/api/exercises/"+t).then((function(t){e.setState({users:[t.data.username],username:t.data.username,description:t.data.description,duration:t.data.duration})})):b.a.get("http://localhost:5000/api/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})}))}},{key:"render",value:function(){var e=null;return this.state.users.length>0&&(e=this.state.users.map((function(e,t){return r.a.createElement("option",{key:t+"3",value:e},e)}))),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h3",null," Create New Exercise"),r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"sel1"},"Select list:"),r.a.createElement("select",{required:!0,value:this.state.username?this.state.username:"",onChange:this.usernameHandler,className:"form-control",id:"sel1"},e)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("input",{value:this.state.description,required:!0,onChange:this.descriptionHandler,type:"text",className:"form-control",placeholder:"I was hiking",id:"description"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"duration"},"Duration:"),r.a.createElement("input",{value:this.state.duration,onChange:this.durationHandler,type:"text",className:"form-control",placeholder:"5",id:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date:"),r.a.createElement(N.a,{selected:this.state.date,onChange:this.changeDate,className:"form-control",style:{width:"100%"}})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",className:"btn btn-primary"})))}}]),a}(n.Component)),x=a(75),k=function(e){var t=Object(n.useState)({username:""}),a=Object(x.a)(t,2),l=a[0],s=a[1];return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h3",null," Create User"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),b.a.post("http://localhost:5000/api/users",l),e.history.push("/")},className:"mt-5"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("input",{required:!0,onChange:function(e){s({username:e.target.value})},type:"text",className:"form-control",placeholder:"Enter username",id:"email"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))},S=function(){return r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement(c.b,{className:"navbar-brand",to:"/"},"home"),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/",className:"nav-link","data-toggle":"tab",href:"#home"},"Exercise List")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"create",className:"nav-link","data-toggle":"tab",href:"#menu1"},"Create Exercise")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"user",className:"nav-link","data-toggle":"tab",href:"#menu2"},"Create User")))};a(161);var D=function(){return r.a.createElement(c.a,null,r.a.createElement(S,null),r.a.createElement(i.a,{path:"/",exact:!0,component:g}),r.a.createElement(i.a,{path:"/create",component:y}),r.a.createElement(i.a,{path:"/user",component:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports={modal:"Loader_modal__1Z--7",ring:"Loader_ring__ucO75","lds-dual-ring":"Loader_lds-dual-ring__RXHz3"}},76:function(e,t,a){e.exports=a(162)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.bc036d0c.chunk.js.map