(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{148:function(e,a,t){},178:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t(4),s=t(50),i=t(51),r=t(53),o=t(52),l=t(0),c=t(14),m=t(12),h=(t(148),t(173)),u=t(127),b=t(175),d=t(147),p=t(2),g=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,i=t.value;e.setState(Object(n.a)({},s,i))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return Object(p.jsxs)("div",{children:[Object(p.jsx)(d.a,{variant:"h5",gutterBottom:!0,className:"RegisterView__title",children:"Register form"}),Object(p.jsx)(h.a,{className:"RegisterView__container",children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",className:"RegisterView__form",children:[Object(p.jsx)(b.a,{id:"name",label:"Name",type:"text",name:"name",value:a,onChange:this.handleChange,className:"RegisterView__item"}),Object(p.jsx)(b.a,{id:"email",label:"E-mail",type:"email",name:"email",value:t,onChange:this.handleChange,className:"RegisterView__item"}),Object(p.jsx)(b.a,{id:"password",label:"Password",type:"password",name:"password",value:n,onChange:this.handleChange,className:"RegisterView__item"}),Object(p.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",className:"RegisterView__item",children:"Register"})]})})]})}}]),t}(l.Component),j={onRegister:m.a.register},w=Object(c.b)(null,j)(g)}}]);
//# sourceMappingURL=7.09fd30db.chunk.js.map