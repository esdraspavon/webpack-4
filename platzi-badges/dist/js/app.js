!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="http://localhost:3001/",a(a.s=21)}([function(e,t,a){e.exports=a(9)(1)},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},function(e,t,a){var n=a(13),r=a(8);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},function(e,t,a){var n=a(14);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,a){e.exports=a(9)(49)},function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=modules},function(e,t,a){e.exports=a(9)(44)},function(e,t,a){},function(e,t,a){},function(e,t){function a(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(11),a(12),a(6)),i=a(1),s=a.n(i),m=a(2),u=a.n(m),f=a(3),p=a.n(f),d=a(4),h=a.n(d),b=a(5),g=a.n(b),v=(a(15),a.p+"0026b862f1b05c3e27d471ba85c6ebc5.svg"),E=function(e){function t(){return s()(this,t),p()(this,h()(t).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(c.Link,{className:"Navbar__brand",to:"/"},r.a.createElement("img",{className:"Navbar__brand-logo",src:v,alt:"Logo"}),r.a.createElement("span",{className:"font-weight-light"},"Platzi"),r.a.createElement("span",{className:"font-weight-bold"},"Conf"))))}}]),t}(r.a.Component);var y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),e.children)},N=(a(16),a.p+"f246f5f1fb702016606ee8c65e33c029.svg"),w=a.p+"71addf454967249472471f5398055e3d.svg",_=function(e){function t(){return s()(this,t),p()(this,h()(t).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Home__col col-12 col-md-4"},r.a.createElement("img",{src:N,alt:"Platzi Conf Logo",className:"img-fluid mb-2"}),r.a.createElement("h1",null,"Badge Management System"),r.a.createElement(c.Link,{className:"btn btn-primary",to:"/badges"},"Start")),r.a.createElement("div",{className:"Home__col d-none d-md-block col-md-8"},r.a.createElement("img",{src:w,alt:"Astronauts",className:"img-fluid p-4"})))))}}]),t}(n.Component),j=(a(17),a.p+"973f5842f0c37eacb2eb491c62fc0032.svg"),O=(a(18),function(e){function t(){return s()(this,t),p()(this,h()(t).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BadgesListItem"},r.a.createElement("img",{className:"BadgesListItem__avatar",src:this.props.badge.avatarUrl,alt:"".concat(this.props.badge.firstName," ").concat(this.props.badge.lastName)}),r.a.createElement("div",null,r.a.createElement("strong",null,this.props.badge.firstName," ",this.props.badge.lastName),r.a.createElement("br",null),"@",this.props.badge.twitter,r.a.createElement("br",null),this.props.badge.jobTitle))}}]),t}(r.a.Component)),x=function(e){function t(){return s()(this,t),p()(this,h()(t).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BadgesList"},r.a.createElement("ul",{className:"list-unstyled"},this.props.badges.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(O,{badge:e}))}))))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return s()(this,t),a=p()(this,h()(t).call(this,e)),console.log("1. constructor()"),a.state={data:[]},a}return g()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this;console.log("3. componentDidMount()"),this.timeoutId=setTimeout((function(){e.setState({data:[{id:"2de30c42-9deb-40fc-a41f-05e62b5939a7",firstName:"Freda",lastName:"Grady",email:"Leann_Berge@gmail.com",jobTitle:"Legacy Brand Director",twitter:"FredaGrady22221-7573",avatarUrl:"https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"},{id:"d00d3614-101a-44ca-b6c2-0be075aeed3d",firstName:"Major",lastName:"Rodriguez",email:"Ilene66@hotmail.com",jobTitle:"Human Research Architect",twitter:"MajorRodriguez61545",avatarUrl:"https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"},{id:"63c03386-33a2-4512-9ac1-354ad7bec5e9",firstName:"Daphney",lastName:"Torphy",email:"Ron61@hotmail.com",jobTitle:"National Markets Officer",twitter:"DaphneyTorphy96105",avatarUrl:"https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"}]})}),3e3)}},{key:"componentDidUpdate",value:function(e,t){console.log("5. componentDidUpdate()"),console.log({prevProps:e,prevState:t}),console.log({props:this.props,state:this.state})}},{key:"componentWillUnmount",value:function(){console.log("6. componentWillUnmount"),clearTimeout(this.timeoutId)}},{key:"render",value:function(){return console.log("2/4. render()"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:j,alt:"Conf Logo"})))),r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(c.Link,{to:"/badges/new",className:"btn btn-primary"},"New Badge")),r.a.createElement(x,{badges:this.state.data})))}}]),t}(r.a.Component),k=a(8),B=a.n(k),S=a(7),P=a.n(S),T=(a(19),a(20),function(e){function t(){return s()(this,t),p()(this,h()(t).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:j,alt:"Logo de la conferencia"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement("img",{className:"Badge__avatar",src:this.props.avatarUrl,alt:"Avatar"}),r.a.createElement("h1",null,this.props.firstName," ",r.a.createElement("br",null)," ",this.props.lastName)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,this.props.jobTitle),r.a.createElement("div",null,"@",this.props.twitter)),r.a.createElement("div",{className:"Badge__footer"},"#platziconf"))}}]),t}(r.a.Component)),L=function(e){function t(){var e,a;s()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=p()(this,(e=h()(t)).call.apply(e,[this].concat(r))),P()(B()(a),"handleClick",(function(e){console.log("Button was clicked")})),P()(B()(a),"handleSubmit",(function(e){e.preventDefault(),console.log("Form was submitted"),console.log(a.state)})),a}return g()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"New Attendant"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"firstName",value:this.props.formValues.firstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"lastName",value:this.props.formValues.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"email",name:"email",value:this.props.formValues.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Title"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"jobTitle",value:this.props.formValues.jobTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"twitter",value:this.props.formValues.twitter})),r.a.createElement("button",{onClick:this.handleClick,className:"btn btn-primary"},"Save")))}}]),t}(r.a.Component);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){P()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R=function(e){function t(){var e,a;s()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=p()(this,(e=h()(t)).call.apply(e,[this].concat(r))),P()(B()(a),"state",{form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}}),P()(B()(a),"handleChange",(function(e){a.setState({form:M({},a.state.form,P()({},e.target.name,e.target.value))})})),a}return g()(t,e),u()(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{className:"img-fluid",src:j,alt:"Logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(T,{firstName:this.state.form.firstName,lastName:this.state.form.lastName,twitter:this.state.form.twitter,jobTitle:this.state.form.jobTitle,email:this.state.form.email,avatarUrl:"https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"})),r.a.createElement("div",{className:"col-6"},r.a.createElement(L,{onChange:this.handleChange,formValues:this.state.form})))))}}]),t}(r.a.Component);var U=function(){return r.a.createElement("h1",null,"404: Not Found")};var F=function(){return r.a.createElement(c.BrowserRouter,null,r.a.createElement(y,null,r.a.createElement(c.Switch,null,r.a.createElement(c.Route,{exact:!0,path:"/",component:_}),r.a.createElement(c.Route,{exact:!0,path:"/badges",component:C}),r.a.createElement(c.Route,{exact:!0,path:"/badges/new",component:R}),r.a.createElement(c.Route,{component:U}))))},A=document.getElementById("app");l.a.render(r.a.createElement(F,null),A)}]);