(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports={header:"header__header___sBbZe"}},23:function(e,t,n){e.exports={container:"content__container___bKht2",header:"content__header___hy09e",content:"content__content___2vB05",columnLeft:"content__columnLeft___2iFSw",columnRight:"content__columnRight___1Ay_2",clear:"content__clear___2eo-F"}},31:function(e,t,n){e.exports=n(46)},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),c=n.n(o),l=n(28),u=n(5),i=n(8),s=n(9),h=n(11),_=n(10),m=n(12),d=n(22),p=n.n(d),f=function(){return r.a.createElement("header",{className:p.a.header},r.a.createElement("h2",null,"To Do List"))},v=n(23),b=n.n(v),g=n(48),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,value:"",placeholder:"Enter a task...",items:[]},n.onChangeHandler=function(e){n.setState({value:e.target.value})},n.onNewPost=function(){var e=n.state.items.slice();""!==n.state.value&&(e.push(n.state.value),n.setState({value:"",items:e}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.items;return r.a.createElement("div",{className:b.a.container},e.map(function(e,t){return r.a.createElement(g.a,{key:t},r.a.createElement(g.a.Item,null,t+1,". ",e))}),r.a.createElement("input",{type:"text",maxLength:"100",value:this.state.value,placeholder:this.state.placeholder,onChange:this.onChangeHandler}),r.a.createElement("button",{type:"submit",onClick:this.onNewPost},"Add"))}}]),t}(a.Component),y=(new Date).getFullYear(),C=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(E,null),r.a.createElement("footer",{style:{textAlign:"Center",fontSize:"12px",fontColor:"#C1F1F8",padding:"10px",backgroundColor:"#7C8693"}},"Copright \xa9 ","".concat(y),". All right reserved by Dara Soumgit."))}}]),t}(r.a.Component);c.a.render(r.a.createElement(function(){return r.a.createElement(l.a,null,r.a.createElement(u.a,{path:"/",exact:!0,component:C}))},null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e3ce006c.chunk.js.map