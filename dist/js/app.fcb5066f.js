(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],f=0,p=[];f<i.length;f++)a=i[f],s[a]&&p.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==s[u]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),s=r.n(n);s.a},1:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3"},[r("router-view")],1)])])])},o=[],a=(r("034f"),r("2877")),i={},u=Object(a["a"])(i,s,o,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,l=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card mt-3"},[e._m(0),r("div",{staticClass:"card-footer"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.sendMessage(t)}}},[r("div",{staticClass:"gorm-group"},[r("label",{attrs:{for:"user"}},[e._v("User:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}})]),r("div",{staticClass:"gorm-group pb-3"},[r("label",{attrs:{for:"message"}},[e._v("Message:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),r("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Send")])])])])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-body"},[r("div",{staticClass:"card-title"},[r("h3",[e._v("Chat Group")]),r("hr")]),r("div",{staticClass:"card-body"},[r("div",{staticClass:"messages"})])])}],d=r("75fc"),v=r("8055"),m=r.n(v),g={data:function(){return{user:"",message:"",messages:[],socket:m()("wvconsole.herokuapp.com")}},methods:{sendMessage:function(e){e.preventDefault(),this.socket.emit("SEND_MESSAGE",{user:this.user,message:this.message}),this.message=""}},mounted:function(){var e=this;this.socket.on("MESSAGE",function(t){e.messages=[].concat(Object(d["a"])(e.messages),[t]),console.log(t.user),console.log(t.message)})}},h=g,b=Object(a["a"])(h,f,p,!1,null,null,null);b.options.__file="LandingPage.vue";var _=b.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("h1",[e._v("Welcome to the "),r("b",[e._v("VUE")]),e._v(" CONSOLE directory!")]),r("p",[e._v("Choose between many of our featured games that our World Vision branded")])])}],C={},O=Object(a["a"])(C,y,w,!1,null,"2005a506",null);O.options.__file="Directory.vue";var x=O.exports;n["a"].use(l["a"]);var j=new l["a"]({routes:[{path:"/",name:"landingpage",component:_},{path:"/directory",name:"directory",component:x}]});n["a"].config.productionTip=!1,new n["a"]({router:j,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.fcb5066f.js.map