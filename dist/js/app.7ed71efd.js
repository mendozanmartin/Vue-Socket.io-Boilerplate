(function(e){function t(t){for(var o,s,r=t[0],c=t[1],u=t[2],d=0,m=[];d<r.length;d++)s=r[d],a[s]&&m.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01cc":function(e,t,n){"use strict";var o=n("ca2b"),a=n.n(o);a.a},"034f":function(e,t,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"0962":function(e,t,n){"use strict";var o=n("bb0d"),a=n.n(o);a.a},"0b3a":function(e,t,n){},"0eb4":function(e,t,n){e.exports=n.p+"img/arrow_up.65bed13b.png"},1:function(e,t){},"32d1":function(e,t,n){"use strict";var o=n("919a"),a=n.n(o);a.a},"33c9":function(e,t,n){e.exports=n.p+"img/arrow_right.158cffc9.png"},"4b40":function(e,t,n){e.exports=n.p+"img/wvlogo.2a881a56.png"},"4dc9":function(e,t,n){e.exports=n.p+"img/arrow_left.e502dbed.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeIn","leave-active-class":"animate fadeOut"}},[n("router-view")],1)],1)},i=[],s=(n("034f"),n("2877")),r={},c=Object(s["a"])(r,a,i,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",[e._m(0),e._m(1),n("div",{staticClass:"text-center"},[n("router-link",{staticClass:" desktopOnly animated pulse infinite  btn btn-dark br-5",attrs:{to:"/desktopdirectory","enter-active-class":"animated infinite bounce"},nativeOn:{click:function(t){return e.desktopJoin(t)}}},[e._v("Start")]),n("router-link",{staticClass:"mobileOnly animated pulse infinite  btn btn-primary br-5",attrs:{to:"/mobiledirectory","enter-active-class":"animated infinite bounce"}},[e._v("Start")])],1),e._m(2)])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title mobileOnly"},[n("h1",[e._v("Welcome to the "),n("b",[e._v("WV")]),e._v(" Console!")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title desktopOnly"},[n("h1",[e._v("Welcome to the "),n("b",[e._v("WV")]),e._v(" Console!")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center"},[o("h2",[e._v("Developed by")]),o("img",{attrs:{src:n("4b40")}})])}],p=n("8055"),f=n.n(p),h={name:"Start",data:function(){return{idNumber:Math.floor(999999*Math.random()+1e5),socket:f()("wvconsole.herokuapp.com")}},methods:{desktopJoin:function(){this.socket.emit("desktopJoin",{idNumber:this.idNumber}),window.desktopRoomNumber=this.idNumber,console.log(window.desktopRoomNumber)}},mounted:function(){}},v=h,b=(n("01cc"),Object(s["a"])(v,d,m,!1,null,"5fd85d90",null));b.options.__file="Start.vue";var _=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page text-center"},[e._m(0),n("div",{staticClass:"desktopOnly"},[e._m(1),n("p",[e._v("Please enter the code you see below into your mobile device. You will be able to connect up to 4 players!")]),n("div",{staticClass:"container"},[n("div",{staticClass:"idNumber"},[e._m(2),n("h1",[e._v(e._s(e.roomNumber))])])])])])},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center bg-primary text-white navigation shadow-lg"},[n("h1",{staticClass:"p-3"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"mt-4"},[e._v("Welcome to the "),n("b",[e._v("WV")]),e._v(" CONSOLE directory!")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("b",[e._v("Your ID#:")])])}],w={name:"Directory",data:function(){return{socket:f()("wvconsole.herokuapp.com"),number:"",roomNumber:window.desktopRoomNumber}},mounted:function(){this.socket.on("sendID",function(e){e.idNumber==window.desktopRoomNumber&&oe.push("desktoplounge")})}},k=w,y=(n("32d1"),Object(s["a"])(k,g,C,!1,null,"22c7dbe6",null));y.options.__file="DesktopDirectory.vue";var G=y.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page text-center"},[e._m(0),n("div",{staticClass:"mobileOnly"},[n("p",[e._v("Please enter the code you see on the Desktop/TV screen")]),n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"text",name:"",value:"",placeholder:"__ __ __ __ __ __"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}})]),n("div",{staticClass:"numberPad"},[n("div",{staticClass:"row pt-4"},[n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(1)}}},[e._v("1")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(2)}}},[e._v("2")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(3)}}},[e._v("3")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(4)}}},[e._v("4")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(5)}}},[e._v("5")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(6)}}},[e._v("6")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(7)}}},[e._v("7")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(8)}}},[e._v("8")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(9)}}},[e._v("9")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("h4",{on:{click:e.clearForm}},[e._v("Clear")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(0)}}},[e._v("0")])]),n("div",{staticClass:"col-4"},[n("h4",{on:{click:e.submitId}},[e._v("Enter")])])])])])])},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center bg-primary text-white navigation"},[n("h1",{staticClass:"p-3"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])])}],O={name:"Directory",data:function(){return{socket:f()("wvconsole.herokuapp.com"),number:""}},methods:{addNumber:function(e){this.number+=e},clearForm:function(){this.number=""},submitId:function(){this.socket.emit("sendID",{idNumber:this.number}),console.log(this.number),window.mobileRoomNumber=this.number}},mounted:function(){this.socket.on("sendID",function(e){e.idNumber==window.mobileRoomNumber&&oe.push("mobilelounge")})}},E=O,S=(n("8e17"),Object(s["a"])(E,x,N,!1,null,"0c5c2340",null));S.options.__file="MobileDirectory.vue";var $=S.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page text-center"},[e._m(0),n("div",{staticClass:"desktopOnly"},[n("h1",[e._v("Welcome to the WV Lounge.")]),n("h3",[e._v("Choose between many of our games.")]),n("div",{staticClass:"d-flex justify-content-around groupGames"},[n("div",{staticClass:"gameContainers text-center",class:{selected:e.Game1},attrs:{to:"/desktopgamepage"}},[e._m(1)]),n("div",{staticClass:"gameContainers text-center",class:{selected:e.Game2},attrs:{to:"/desktopgamepage"}},[e._m(2)]),n("div",{staticClass:"gameContainers text-center",class:{selected:e.Game3},attrs:{to:"/desktopgamepage"}},[e._m(3)]),n("div",{staticClass:"gameContainers text-center",class:{selected:e.Game4},attrs:{to:"/desktopgamepage"}},[e._m(4)])]),n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"featuredGame",class:{selected:e.FeaturedGame1},attrs:{to:"/desktopgamepage"}},[e._m(5)]),n("div",{staticClass:"featuredGame",class:{selected:e.FeaturedGame2},attrs:{to:"/desktopgamepage"}},[e._m(6)])])])])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center bg-primary text-white navigation"},[n("h1",{staticClass:"p-3"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("b",[e._v("Game 1")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("b",[e._v("Game 2")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("b",[e._v("Game 3")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("b",[e._v("Game 4")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("b",[e._v("Featured Game 1")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("b",[e._v("Featured Game 2")])])}],M={data:function(){return{socket:f()("wvconsole.herokuapp.com"),roomNumber:window.desktopRoomNumber,Game1:!0,Game2:!1,Game3:!1,Game4:!1,FeaturedGame1:!1,FeaturedGame2:!1}},methods:{},mounted:function(){var e=this;this.socket.on(this.roomNumber,function(t){t.loungeNumber==e.roomNumber&&("select"==t.direction&&(1==e.FeaturedGame1&&oe.push("/desktopphaser"),1==e.FeaturedGame2&&oe.push("/desktopphaser"),1==e.Game1&&oe.push("/desktopphaser"),1==e.Game2&&oe.push("/desktopphaser"),1==e.Game3&&oe.push("/desktopphaser"),1==e.Game4&&oe.push("/desktopphaser")),1==e.Game1?(e.Game1=!1,e.Game4="left"==t.direction,e.Game2="right"==t.direction,e.Game1="up"==t.direction,e.FeaturedGame1="down"==t.direction):1==e.Game2?(e.Game2=!1,e.Game1="left"==t.direction,e.Game3="right"==t.direction,e.Game2="up"==t.direction,e.FeaturedGame1="down"==t.direction):1==e.Game3?(e.Game3=!1,e.Game2="left"==t.direction,e.Game4="right"==t.direction,e.Game3="up"==t.direction,e.FeaturedGame2="down"==t.direction):1==e.Game4?(e.Game4=!1,e.Game3="left"==t.direction,e.Game1="right"==t.direction,e.Game4="up"==t.direction,e.FeaturedGame2="down"==t.direction):1==e.FeaturedGame1?(e.FeaturedGame1=!1,e.Game4="left"==t.direction,e.FeaturedGame2="right"==t.direction,e.Game1="up"==t.direction,e.FeaturedGame1="down"==t.direction):1==e.FeaturedGame2&&(e.FeaturedGame2=!1,e.FeaturedGame1="left"==t.direction,e.Game1="right"==t.direction,e.Game3="up"==t.direction,e.FeaturedGame2="down"==t.direction))})},beforeMount:function(){}},P=M,D=(n("0962"),Object(s["a"])(P,F,j,!1,null,"1440ceac",null));D.options.__file="DesktopLounge.vue";var R=D.exports,V=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page text-center"},[e._m(0),o("div",{staticClass:"mobileOnly"},[o("h4",{staticClass:"mb-5"},[e._v("Press the arrow keys to navigate on the Desktop/TV screen!")]),o("div",{staticClass:"d-flex justify-content-center mt-5"},[o("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("0eb4")},on:{click:function(t){e.remoteControl("up")}}})]),o("div",{staticClass:"d-flex justify-content-center"},[o("img",{staticClass:"mr-2",staticStyle:{cursor:"pointer"},attrs:{src:n("4dc9")},on:{click:function(t){e.remoteControl("left")}}}),o("button",{staticClass:"btn btn-dark p-3",attrs:{type:"button",name:"button"},on:{click:function(t){e.remoteControl("select")}}},[e._v("Select")]),o("img",{staticClass:"ml-2",staticStyle:{cursor:"pointer"},attrs:{src:n("33c9")},on:{click:function(t){e.remoteControl("right")}}})]),o("div",{staticClass:"d-flex justify-content-center "},[o("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("e196")},on:{click:function(t){e.remoteControl("down")}}})])])])},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center bg-primary text-white navigation shadow-lg"},[n("h1",{staticClass:"p-3"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])])}],L={name:"MobileLounge",data:function(){return{loungeNumber:window.mobileRoomNumber,socket:f()("wvconsole.herokuapp.com")}},methods:{remoteControl:function(e){"select"==e&&oe.push("mobilephaser"),this.socket.emit("directionControl",{direction:e,loungeNumber:this.loungeNumber})}}},I=L,B=(n("77ff"),Object(s["a"])(I,V,W,!1,null,"acdf3636",null));B.options.__file="MobileLounge.vue";var T=B.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page p-5"},[n("h1",{staticClass:"text-white"},[n("b",[e._v("Random Platformer!!1!!")])]),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-3"}),n("div",{staticClass:"col-6",attrs:{id:"gameContainer"}}),n("div",{staticClass:"col-3"})])])}],X=n("64b8"),A=n.n(X),U={name:"DesktopPhaser",data:function(){return{socket:f()("wvconsole.herokuapp.com"),roomNumber:window.desktopRoomNumber}},methods:{newPage:function(){window.game.renderer.destroy(),window.game.loop.stop(),window.game.canvas.remove(),window.game=null,oe.push("")}},mounted:function(){var e=this;this.socket.on(this.roomNumber,function(t){t.loungeNumber==e.roomNumber&&(window.direction=t.direction)});var t,n,o,a={type:A.a.AUTO,width:800,height:600,parent:"gameContainer",physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:{preload:s,create:r,update:c}},i=0;function s(){this.load.setBaseURL("https://labs.phaser.io"),this.load.image("sky","assets/skies/space3.png"),this.load.image("ground","assets/tilemaps/tiles/drawtiles.png"),this.load.image("star","assets/sprites/mine.png"),this.load.image("bomb","assets/sprites/mine.png"),this.load.spritesheet("dude","assets/sprites/dude.png",{frameWidth:32,frameHeight:48})}function r(){this.add.image(400,300,"sky"),n=this.physics.add.staticGroup(),t=this.add.text(16,16,"score: 0",{fontSize:"32px",fill:"#000"}),n.create(400,568,"ground").setScale(2).refreshBody(),n.create(600,400,"ground"),n.create(50,250,"ground"),n.create(750,220,"ground"),o=this.physics.add.sprite(100,450,"dude"),o.setBounce(.2),o.setCollideWorldBounds(!0),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"dude",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),frameRate:10,repeat:-1}),this.physics.add.collider(o,n);var e=this.physics.add.group({key:"star",repeat:11,setXY:{x:12,y:0,stepX:70},height:10});e.children.iterate(function(e){e.setBounceY(A.a.Math.FloatBetween(.4,.8))}),this.physics.add.collider(e,n),this.physics.add.overlap(o,e,u,null,this)}function c(){"left"==window.direction?(o.setVelocityX(-160),o.anims.play("left",!0)):"right"==window.direction?(o.setVelocityX(160),o.anims.play("right",!0)):(o.setVelocityX(0),o.anims.play("turn")),"up"==window.direction&&o.body.touching.down&&o.setVelocityY(-330)}function u(e,n){n.disableBody(!0,!0),i+=10,t.setText("Score: "+i)}window.game=new A.a.Game(a)}},z=U,H=(n("c4b6"),Object(s["a"])(z,Y,J,!1,null,"e27fa45e",null));H.options.__file="DesktopPhaser.vue";var q=H.exports,K=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page text-center"},[e._m(0),o("div",{staticClass:"mobileOnly"},[o("h4",{staticClass:"mb-5"},[e._v("You are now in the game!")]),o("div",{staticClass:"d-flex justify-content-center mt-5"},[o("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("0eb4"),onContextMenu:"return false;"},on:{touchstart:function(t){e.start("up")},touchend:function(t){e.stop("up")}}})]),o("div",{staticClass:"d-flex justify-content-center"},[o("img",{staticClass:"mr-2",staticStyle:{cursor:"pointer"},attrs:{src:n("4dc9"),onContextMenu:"return false;"},on:{touchstart:function(t){e.start("left")},touchend:function(t){e.stop("left")}}}),o("button",{staticClass:"btn btn-dark p-3",attrs:{type:"button",name:"button"},on:{click:function(t){e.remoteControl("select")}}},[e._v("Select")]),o("img",{staticClass:"ml-2",staticStyle:{cursor:"pointer"},attrs:{src:n("33c9"),onContextMenu:"return false;"},on:{touchstart:function(t){e.start("right")},touchend:function(t){e.stop("right")}}})]),o("div",{staticClass:"d-flex justify-content-center "},[o("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("e196"),onContextMenu:"return false;"},on:{touchstart:function(t){e.start("down")},touchend:function(t){e.stop("down")}}})])])])},Q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center bg-primary text-white navigation shadow-lg"},[n("h1",{staticClass:"p-3"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])])}],Z={name:"MobileLounge",data:function(){return{loungeNumber:window.mobileRoomNumber,socket:f()("wvconsole.herokuapp.com"),interval:!1}},methods:{remoteControl:function(e){"select"==e&&oe.push("mobilephaser"),this.socket.emit("gameControls",{direction:e,loungeNumber:this.loungeNumber})},start:function(e){this.socket.emit("gameControls",{direction:e,loungeNumber:this.loungeNumber})},stop:function(e){clearInterval(this.interval),this.interval=!1,this.socket.emit("gameControls",{direction:null,loungeNumber:this.loungeNumber})}}},ee=Z,te=(n("e6e5"),Object(s["a"])(ee,K,Q,!1,null,"edd5c140",null));te.options.__file="MobilePhaser.vue";var ne=te.exports;o["a"].use(l["a"]);var oe=new l["a"]({routes:[{path:"/",component:_},{path:"/mobiledirectory",component:$},{path:"/desktopdirectory",component:G},{path:"/mobilelounge",component:T},{path:"/desktoplounge",component:R},{path:"/desktopphaser",component:q},{path:"/mobilephaser",component:ne}]}),ae=n("395c"),ie=n.n(ae);o["a"].use(ie.a),o["a"].config.productionTip=!1,new o["a"](o["a"].util.extend({router:oe},u)).$mount("#app")},"64a9":function(e,t,n){},"77ff":function(e,t,n){"use strict";var o=n("7a63"),a=n.n(o);a.a},"7a63":function(e,t,n){},"8e17":function(e,t,n){"use strict";var o=n("d241"),a=n.n(o);a.a},"919a":function(e,t,n){},bb0d:function(e,t,n){},c4b6:function(e,t,n){"use strict";var o=n("0b3a"),a=n.n(o);a.a},ca2b:function(e,t,n){},d241:function(e,t,n){},e196:function(e,t,n){e.exports=n.p+"img/arrow_down.8dc49511.png"},e6e5:function(e,t,n){"use strict";var o=n("e906"),a=n.n(o);a.a},e906:function(e,t,n){}});
//# sourceMappingURL=app.7ed71efd.js.map