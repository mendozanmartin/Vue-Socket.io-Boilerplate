(function(e){function t(t){for(var o,r,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)r=i[d],a[r]&&m.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"0893":function(e,t,n){},"0ca6":function(e,t,n){},"0eb4":function(e,t,n){e.exports=n.p+"img/arrow_up.65bed13b.png"},1:function(e,t){},"13ce":function(e,t){e.exports="data:image/png;base64,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"},"1e3c":function(e,t,n){"use strict";var o=n("0893"),a=n.n(o);a.a},"284f":function(e,t,n){"use strict";var o=n("41d2"),a=n.n(o);a.a},"33c9":function(e,t,n){e.exports=n.p+"img/arrow_right.158cffc9.png"},"41d2":function(e,t,n){},"46e6":function(e,t,n){},"4b40":function(e,t,n){e.exports=n.p+"img/wvlogo.2a881a56.png"},"4dc9":function(e,t,n){e.exports=n.p+"img/arrow_left.e502dbed.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeIn","leave-active-class":"animate fadeOut"}},[n("router-view")],1)],1)},s=[],r=n("8055"),i=n.n(r),c=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",[e._m(0),e._m(1),n("div",{staticClass:"text-center"},[n("router-link",{staticClass:" desktopOnly animated pulse infinite  btn btn-dark br-5",attrs:{to:"/desktopdirectory","enter-active-class":"animated infinite bounce"},nativeOn:{click:function(t){return e.desktopJoin(t)}}},[e._v("Start")]),n("router-link",{staticClass:"mobileOnly animated pulse infinite  btn btn-primary br-5",attrs:{to:"/mobiledirectory","enter-active-class":"animated infinite bounce"}},[e._v("Start")])],1),e._m(2)])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title mobileOnly"},[n("h1",[e._v("Welcome to the "),n("b",[e._v("WV")]),e._v(" Console!")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title desktopOnly"},[n("h1",[e._v("Welcome to the "),n("b",[e._v("WV")]),e._v(" Console!")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center"},[o("h2",[e._v("Developed by")]),o("img",{attrs:{src:n("4b40")}})])}],d={name:"Start",data:function(){return{idNumber:Math.floor(999999*Math.random()+1e5),socket:i()("wvconsole.herokuapp.com")}},methods:{desktopJoin:function(){this.socket.emit("desktopJoin",{idNumber:this.idNumber}),window.desktopRoomNumber=this.idNumber,console.log(window.desktopRoomNumber)}},mounted:function(){}},m=d,p=(n("76fd"),n("2877")),f=Object(p["a"])(m,l,u,!1,null,"4d133d79",null);f.options.__file="Start.vue";var h=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page text-center"},[e._m(0),n("div",{staticClass:"desktopOnly"},[e._m(1),n("p",[e._v("Please enter the code you see below into your mobile device. You will be able to connect up to 4 players!")]),n("div",{staticClass:"container"},[n("div",{staticClass:"idNumber"},[e._m(2),n("h1",[e._v(e._s(e.roomNumber))])])]),e._m(3)])])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-content-between bg-primary text-white navigation"},[n("h2",{staticClass:"p-2"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"mt-4"},[e._v("Welcome to the "),n("b",[e._v("WV")]),e._v(" CONSOLE directory!")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("b",[e._v("Your ID#:")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"QRcode mt-5"},[o("img",{attrs:{src:n("13ce"),alt:""}}),o("h3",[e._v("Scan the QR code to join the room")])])}],g=(n("6b54"),{name:"Directory",data:function(){return{socket:i()("wvconsole.herokuapp.com"),number:"",roomNumber:window.desktopRoomNumber,numPlayers:0}},mounted:function(){var e=this;this.socket.on("sendID",function(t){t.idNumber==window.desktopRoomNumber&&(re.push("desktoplounge"),e.numPlayers+=1,window.numberOfPlayers=e.numPlayers,console.log("Player "+window.numberOfPlayers+" has joined the lobby"))});var t=window.desktopRoomNumber.toString()+"numPlayers";this.socket.on(t,function(t){console.log("Number of player currently: "+window.numberOfPlayers),e.socket.emit("assignMobileId",{roomNumber:e.roomNumber,playerNumber:window.numberOfPlayers})})}}),w=g,y=(n("284f"),Object(p["a"])(w,v,b,!1,null,"16588464",null));y.options.__file="DesktopDirectory.vue";var C=y.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page text-center"},[e._m(0),n("div",{staticClass:"mobileOnly"},[n("p",[e._v(e._s(e.instructions))]),n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"text",name:"",value:"",placeholder:"__ __ __ __ __ __"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}})]),n("div",{staticClass:"numberPad"},[n("div",{staticClass:"row pt-4"},[n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(1)}}},[e._v("1")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(2)}}},[e._v("2")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(3)}}},[e._v("3")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(4)}}},[e._v("4")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(5)}}},[e._v("5")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(6)}}},[e._v("6")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(7)}}},[e._v("7")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(8)}}},[e._v("8")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(9)}}},[e._v("9")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("h4",{on:{click:e.clearForm}},[e._v("Clear")])]),n("div",{staticClass:"col-4"},[n("h3",{on:{click:function(t){e.addNumber(0)}}},[e._v("0")])]),n("div",{staticClass:"col-4"},[n("h4",{on:{click:e.submitId}},[e._v("Enter")])])])])])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center bg-primary text-white navigation"},[n("h2",{staticClass:"p-2"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])])}],N={name:"Directory",data:function(){return{socket:i()("wvconsole.herokuapp.com"),number:"",instructions:"Please enter the code you see on the Desktop/TV screen"}},methods:{addNumber:function(e){this.number+=e},clearForm:function(){this.number=""},submitId:function(){this.socket.emit("sendID",{idNumber:this.number}),window.mobileRoomNumber=this.number}},mounted:function(){var e=this;this.socket.on("sendID",function(t){t.idNumber==window.mobileRoomNumber?re.push("mobilelounge"):e.instructions="The room you have entered does not exist. Please try again."}),window.assignedPlayerID=!1,this.socket.on("assignPlayerNumber",function(e){console.log(window.assignedPlayerID),window.mobileRoomNumber==e.roomNumber&&0==window.assignedPlayerID&&(window.assignedPlayerID=!0,console.log(window.assignedPlayerID),window.playerNumber=e.playerNumber)})}},O=N,S=(n("7a8c"),Object(p["a"])(O,_,k,!1,null,"6b7cf345",null));S.options.__file="MobileDirectory.vue";var D=S.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page text-center"},[n("div",{staticClass:"d-flex justify-content-between bg-primary text-white navigation"},[e._m(0),n("h3",{staticClass:"p-2"},[e._v("Room Number: "),n("b",[e._v(e._s(e.roomNumber))])]),n("h3",{staticClass:"p-2"},[e._v("Number of Players : "+e._s(e.numberOfPlayers))])]),n("div",{staticClass:"desktopOnly"},[n("h1",[e._v("Welcome to the WV Lounge.")]),n("h3",[e._v("Choose between many of our games.")]),n("hr"),n("div",{staticClass:"d-flex justify-content-around groupGames"},[n("div",{staticClass:"gameContainers text-center",class:{selected:e.Game1},attrs:{to:"/desktopgamepage"}},[e._m(1)]),n("div",{staticClass:"gameContainers text-center",class:{selected:e.Game2},attrs:{to:"/desktopgamepage"}},[e._m(2)]),n("div",{staticClass:"gameContainers text-center",class:{selected:e.Game3},attrs:{to:"/desktopgamepage"}},[e._m(3)]),n("div",{staticClass:"gameContainers text-center",class:{selected:e.Game4},attrs:{to:"/desktopgamepage"}},[e._m(4)])]),n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"featuredGame",class:{selected:e.FeaturedGame1},attrs:{to:"/desktopgamepage"}},[e._m(5)]),n("div",{staticClass:"featuredGame",class:{selected:e.FeaturedGame2},attrs:{to:"/desktopgamepage"}},[e._m(6)])]),e._m(7)])])},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"p-2"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("b",[e._v("Game 1")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("b",[e._v("Game 2")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("b",[e._v("Game 3")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("b",[e._v("Game 4")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("b",[e._v("Featured Game 1")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("b",[e._v("Featured Game 2")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"QRcode"},[o("img",{staticStyle:{height:"100px"},attrs:{src:n("13ce"),alt:""}}),o("h3",[e._v("Scan or join at https://wvconsole.herokuapp.com")])])}],x={data:function(){return{socket:i()("wvconsole.herokuapp.com"),roomNumber:window.desktopRoomNumber,Game1:!0,Game2:!1,Game3:!1,Game4:!1,FeaturedGame1:!1,FeaturedGame2:!1,numberOfPlayers:window.numberOfPlayers}},methods:{},mounted:function(){var e=this,t=window.desktopRoomNumber.toString()+"numPlayers";this.socket.on(t,function(t){e.numberOfPlayers=window.numberOfPlayers});var n=this.roomNumber.toString()+"direction";this.socket.on(n,function(t){"select"==t.direction&&(1==e.FeaturedGame1&&re.push("/desktopphaser"),1==e.FeaturedGame2&&re.push("/desktopphaser"),1==e.Game1&&re.push("/desktopphaser"),1==e.Game2&&re.push("/desktopphaser"),1==e.Game3&&re.push("/desktopphaser"),1==e.Game4&&re.push("/desktopphaser")),1==e.Game1?(e.Game1=!1,e.Game4="left"==t.direction,e.Game2="right"==t.direction,e.Game1="up"==t.direction,e.FeaturedGame1="down"==t.direction):1==e.Game2?(e.Game2=!1,e.Game1="left"==t.direction,e.Game3="right"==t.direction,e.Game2="up"==t.direction,e.FeaturedGame1="down"==t.direction):1==e.Game3?(e.Game3=!1,e.Game2="left"==t.direction,e.Game4="right"==t.direction,e.Game3="up"==t.direction,e.FeaturedGame2="down"==t.direction):1==e.Game4?(e.Game4=!1,e.Game3="left"==t.direction,e.Game1="right"==t.direction,e.Game4="up"==t.direction,e.FeaturedGame2="down"==t.direction):1==e.FeaturedGame1?(e.FeaturedGame1=!1,e.Game4="left"==t.direction,e.FeaturedGame2="right"==t.direction,e.Game1="up"==t.direction,e.FeaturedGame1="down"==t.direction):1==e.FeaturedGame2&&(e.FeaturedGame2=!1,e.FeaturedGame1="left"==t.direction,e.Game1="right"==t.direction,e.Game3="up"==t.direction,e.FeaturedGame2="down"==t.direction)})},beforeMount:function(){}},J=x,Q=(n("ff0e"),Object(p["a"])(J,G,E,!1,null,"31883a0e",null));Q.options.__file="DesktopLounge.vue";var q=Q.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page text-center"},[e._m(0),o("div",{staticClass:"mobileOnly"},[o("h4",{staticClass:"mb-5"},[e._v("Press the arrow keys to navigate on the Desktop/TV screen!")]),o("h4",[o("b",[e._v("You are player "+e._s(e.playerNumber)+" ")])]),o("div",{staticClass:"d-flex justify-content-center mt-5"},[o("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("0eb4")},on:{click:function(t){e.remoteControl("up")}}})]),o("div",{staticClass:"d-flex justify-content-center"},[o("img",{staticClass:"mr-2",staticStyle:{cursor:"pointer"},attrs:{src:n("4dc9")},on:{click:function(t){e.remoteControl("left")}}}),o("button",{staticClass:"btn btn-dark p-3",attrs:{type:"button",name:"button"},on:{click:function(t){e.remoteControl("select")}}},[e._v("Select")]),o("img",{staticClass:"ml-2",staticStyle:{cursor:"pointer"},attrs:{src:n("33c9")},on:{click:function(t){e.remoteControl("right")}}})]),o("div",{staticClass:"d-flex justify-content-center "},[o("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("e196")},on:{click:function(t){e.remoteControl("down")}}})])])])},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center bg-primary text-white navigation shadow-lg"},[n("h2",{staticClass:"p-2"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])])}],H={name:"MobileLounge",data:function(){return{loungeNumber:window.mobileRoomNumber,socket:i()("wvconsole.herokuapp.com"),playerNumber:window.playerNumber}},methods:{remoteControl:function(e){this.socket.emit("directionControl",{direction:e,loungeNumber:this.loungeNumber})}},mounted:function(){var e=window.mobileRoomNumber.toString()+"direction";this.socket.on(e,function(e){"select"==e.direction&&re.push("/mobilephaser")})}},R=H,U=(n("c9d5"),Object(p["a"])(R,A,P,!1,null,"413e3ff6",null));U.options.__file="MobileLounge.vue";var B=U.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page p-5"},[n("h1",{staticClass:"text-white"},[n("b",[e._v("Demo: Collect all the items! :)")])]),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-2"}),n("div",{staticClass:"col-8",attrs:{id:"gameContainer"}}),n("div",{staticClass:"col-2"})])])}],V=n("64b8"),L=n.n(V),T={name:"DesktopPhaser",data:function(){return{socket:i()("wvconsole.herokuapp.com"),roomNumber:window.desktopRoomNumber}},methods:{newPage:function(){window.game.renderer.destroy(),window.game.loop.stop(),window.game.canvas.remove(),window.game=null,re.push("")}},mounted:function(){var e=this;window.playerID=0;var t=this.roomNumber.toString()+"game";this.socket.on(t,function(t){t.loungeNumber==e.roomNumber&&(window.playerID=t.playerNumber-1,window.direction=t.direction,console.log(t.direction+"from player: "+window.playerID))});var n,o,a={type:L.a.AUTO,width:800,height:600,parent:"gameContainer",physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:{preload:r,create:c,update:l}},s=0;function r(){this.load.setBaseURL("https://labs.phaser.io"),this.load.image("sky","assets/skies/space3.png"),this.load.image("ground","assets/tilemaps/tiles/drawtiles.png"),this.load.image("star","assets/sprites/mine.png"),this.load.image("bomb","assets/sprites/mine.png"),this.load.spritesheet("dude","assets/sprites/dude.png",{frameWidth:32,frameHeight:48})}window.game=new L.a.Game(a);var i=[];function c(){this.add.image(400,300,"sky"),o=this.physics.add.staticGroup(),n=this.add.text(16,16,"score: 0",{fontSize:"32px",fill:"#000"}),o.create(400,568,"ground").setScale(2).refreshBody(),o.create(600,400,"ground"),o.create(50,250,"ground"),o.create(750,220,"ground");for(var e=0;e<window.numberOfPlayers;e++)i[e]=this.physics.add.sprite(100,450,"dude"),i[e].tint=16777215*Math.random(),i[e].setBounce(.2),i[e].setCollideWorldBounds(!0);this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"dude",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),frameRate:10,repeat:-1}),this.physics.add.collider(i,o);var t=this.physics.add.group({key:"star",repeat:11,setXY:{x:12,y:0,stepX:70},height:10});t.children.iterate(function(e){e.setBounceY(L.a.Math.FloatBetween(.4,.8))}),this.physics.add.collider(t,o),this.physics.add.overlap(i,t,d,null,this)}function l(){"left"==window.direction?(i[window.playerID].setVelocityX(-160),i[window.playerID].anims.play("left",!0)):"right"==window.direction?(i[window.playerID].setVelocityX(160),i[window.playerID].anims.play("right",!0)):(i[window.playerID].setVelocityX(0),i[window.playerID].anims.play("turn")),"up"==window.direction&&i[window.playerID].body.touching.down&&i[window.playerID].setVelocityY(-330)}var u=0;function d(e,t){u+=1,12==u&&re.push("/desktoplounge"),t.disableBody(!0,!0),s+=10,n.setText("Score: "+s)}}},M=T,I=(n("801f"),Object(p["a"])(M,j,z,!1,null,"fecf9df2",null));I.options.__file="DesktopPhaser.vue";var F=I.exports,W=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page text-center"},[e._m(0),o("div",{staticClass:"mobileOnly"},[o("h4",{staticClass:"mb-5"},[e._v("You are now in the game!")]),o("div",{staticClass:"d-flex justify-content-center mt-5"},[o("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("0eb4"),onContextMenu:"return false;"},on:{touchstart:function(t){e.start("up")},touchend:function(t){e.stop("up")}}})]),o("div",{staticClass:"d-flex justify-content-center"},[o("img",{staticClass:"mr-2",staticStyle:{cursor:"pointer"},attrs:{src:n("4dc9"),onContextMenu:"return false;"},on:{touchstart:function(t){e.start("left")},touchend:function(t){e.stop("left")}}}),o("button",{staticClass:"btn btn-dark p-3",attrs:{type:"button",name:"button"}},[e._v("Select")]),o("img",{staticClass:"ml-2",staticStyle:{cursor:"pointer"},attrs:{src:n("33c9"),onContextMenu:"return false;"},on:{touchstart:function(t){e.start("right")},touchend:function(t){e.stop("right")}}})]),o("div",{staticClass:"d-flex justify-content-center "},[o("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("e196"),onContextMenu:"return false;"},on:{touchstart:function(t){e.start("down")},touchend:function(t){e.stop("down")}}})])])])},Z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center bg-primary text-white navigation shadow-lg"},[n("h2",{staticClass:"p-2"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])])}],K={name:"MobileLounge",data:function(){return{loungeNumber:window.mobileRoomNumber,socket:i()("wvconsole.herokuapp.com"),interval:!1,playerNumber:window.playerNumber}},methods:{start:function(e){this.socket.emit("gameControls",{direction:e,loungeNumber:this.loungeNumber,playerNumber:window.playerNumber})},stop:function(e){clearInterval(this.interval),this.interval=!1,this.socket.emit("gameControls",{direction:null,loungeNumber:this.loungeNumber,playerNumber:window.playerNumber})}},mounted:function(){var e=this;this.socket.on("mobileThankYou",function(t){t.roomNumber==e.loungeNumber&&re.push("thanks")})}},X=K,Y=(n("1e3c"),Object(p["a"])(X,W,Z,!1,null,"0960b7e2",null));Y.options.__file="MobilePhaser.vue";var $=Y.exports,ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page text-center"},[n("div",{staticClass:"text-center bg-primary text-white navigation shadow-lg"},[n("h2",{staticClass:"p-2"},[n("b",[e._v("WV ")]),e._v("CONSOLE")])]),n("h1",{staticClass:"mt-5"},[n("b",[e._v("Thanks for Playing!!!")])])])}],ne={},oe=ne,ae=Object(p["a"])(oe,ee,te,!1,null,"062f79c4",null);ae.options.__file="Thanks.vue";var se=ae.exports;o["a"].use(c["a"]);var re=new c["a"]({routes:[{path:"/",component:h},{path:"/mobiledirectory",component:D},{path:"/desktopdirectory",component:C},{path:"/mobilelounge",component:B},{path:"/desktoplounge",component:q},{path:"/desktopphaser",component:F},{path:"/mobilephaser",component:$},{path:"/thanks",component:se}]}),ie={data:function(){return{socket:i()("localhost:5000")}},created:function(){window.addEventListener("beforeunload",this.handler)},methods:{handler:function(){this.socket.emit("disconnectionDetected",{roomID:window.mobileRoomNumber}),console.log("hello")}}},ce=ie,le=(n("034f"),Object(p["a"])(ce,a,s,!1,null,null,null));le.options.__file="App.vue";var ue=le.exports,de=n("395c"),me=n.n(de);o["a"].use(me.a),o["a"].config.productionTip=!1,new o["a"](o["a"].util.extend({router:re},ue)).$mount("#app")},"64a9":function(e,t,n){},"76fd":function(e,t,n){"use strict";var o=n("c706"),a=n.n(o);a.a},"794f":function(e,t,n){},"7a8c":function(e,t,n){"use strict";var o=n("0ca6"),a=n.n(o);a.a},"801f":function(e,t,n){"use strict";var o=n("ba5c"),a=n.n(o);a.a},ba5c:function(e,t,n){},c706:function(e,t,n){},c9d5:function(e,t,n){"use strict";var o=n("794f"),a=n.n(o);a.a},e196:function(e,t,n){e.exports=n.p+"img/arrow_down.8dc49511.png"},ff0e:function(e,t,n){"use strict";var o=n("46e6"),a=n.n(o);a.a}});
//# sourceMappingURL=app.fddf2b9a.js.map