(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game-screen"],{"0cec":function(t,e,s){"use strict";s("7f0b")},"3d55":function(t,e,s){},"4fef":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"gameScreen"},[e("h2",[t._v(t._s(t._f("t")("keepTabActive",t.$store.state.locale)))]),e("div",{staticClass:"panel-container"},[e("div",{staticClass:"panel"},[e("h2",[t._v(t._s(t._f("t")("status",t.$store.state.locale)))]),e("div",{staticClass:"textline"},[t._v(t._s(t._f("t")(t.isaacState,t.$store.state.locale)))]),e("div",[t._v(t._s(t.gameTime))])]),e("div",{staticClass:"panel"},[e("h2",[t._v(t._s(t._f("t")("viewers",t.$store.state.locale)))]),e("div",{staticClass:"textline"},[t._v(t._s(t.viewersInPoll)+" "+t._s(t._f("t")("onCurrentPoll",t.$store.state.locale)))]),e("h2",[t._v(t._s(t._f("t")("textPosition",t.$store.state.locale)))]),e("position-changer",{on:{change:t.changeTextPos}})],1),e("div",{staticClass:"panel"},[e("h2",[t._v(t._s(t._f("t")("services",t.$store.state.locale)))]),e("div",{staticClass:"textline youtube"},[t._v("YouTube: "+t._s(t._f("t")(t.youtube?"yes":"no",t.$store.state.locale)))]),e("div",{staticClass:"textline twitch"},[t._v("Twitch: "+t._s(t._f("t")(t.twitch?"yes":"no",t.$store.state.locale)))])])]),e("big-button",{on:{onClick:function(e){return t.openChatWindow()}}},[t._v(t._s(t._f("t")("chat",t.$store.state.locale)))]),e("div",{staticClass:"chat-open-description"},[t._v(t._s(t._f("t")("chatDesc",t.$store.state.locale)))])],1)},a=[],o=(s("14d9"),s("6932")),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"position-changer"},[e("div",{staticClass:"arrow arrow-left",on:{click:function(e){return t.change("left")}}}),e("div",{staticClass:"vertical-arrows"},[e("div",{staticClass:"arrow arrow-up",on:{click:function(e){return t.change("up")}}}),e("div",{staticClass:"reset",attrs:{title:t._f("t")("resetTextPosition",t.$store.state.locale)},on:{click:function(e){return t.change("reset")}}},[t._v("R")]),e("div",{staticClass:"arrow arrow-down",on:{click:function(e){return t.change("down")}}})]),e("div",{staticClass:"arrow arrow-right",on:{click:function(e){return t.change("right")}}})])},c=[],r={name:"PositionChanger",methods:{change(t){this.$emit("change",t)}},computed:{}},l=r,u=(s("7d61"),s("2877")),h=Object(u["a"])(l,n,c,!1,null,null,null),d=h.exports,v=s("6e74"),w={name:"gameScreen",components:{BigButton:o["a"],PositionChanger:d},data:()=>({gameTime:"00:00:00",titleState:!1,viewersInPoll:0,startTime:null,gameTimeTimer:null,infoTimer:null,twitch:!1,youtube:!1,isaacState:"gameStateDisconnected"}),mounted(){this.$root.isaac?(this.startTime=Date.now(),this.gameTimeTimer=setInterval(this.updGameTime,900),this.infoTimer=setInterval(this.updInfo,1e3),this.twitch=!!this.$services.twitch,this.youtube=!!this.$services.youtube,this.updInfo()):this.$router.push("/")},methods:{changeTextPos(t){this.$store.commit("setTextPos",this.$root.isaac.changeTextPos(t))},updGameTime(){let t=new Date(Date.now()-this.startTime);this.gameTime=(t.getUTCHours()<=9?"0"+t.getUTCHours():t.getUTCHours()).toString()+":"+(t.getUTCMinutes()<=9?"0"+t.getUTCMinutes():t.getUTCMinutes()).toString()+":"+(t.getUTCSeconds()<=9?"0"+t.getUTCSeconds():t.getUTCSeconds()).toString()},updInfo(){var t,e,s,i,a,o;(this.titleState=!this.titleState,this.$root.isaac.services.itmr.isConnected?this.$root.isaac.isPaused?window.document.title=this.titleState?"🟡 Isaaac On Twitch":"⚪️ Isaaac On Twitch":window.document.title=this.titleState?"🟢 Isaaac On Twitch":"⚪️ Isaaac On Twitch":window.document.title=this.titleState?"🔴 Isaaac On Twitch":"⚪️ Isaaac On Twitch",null!==(t=this.$root)&&void 0!==t&&null!==(e=t.isaac)&&void 0!==e&&null!==(s=e.currentAction)&&void 0!==s&&s.allVotesCount)&&(this.viewersInPoll=null===(i=this.$root)||void 0===i||null===(a=i.isaac)||void 0===a||null===(o=a.currentAction)||void 0===o?void 0:o.allVotesCount);this.$root.isaac.services.itmr.isConnected?this.isaacState=this.$root.isaac.isPaused?"gameStatePaused":"gameStateConnected":this.isaacState="gameStateDisconnected",this.youtube&&(this.youtubeViewers=this.$services.youtube.viewersCount),this.twitch&&(this.twitchViewers=this.$services.twitch.viewersCount)},openChatWindow(){this.$root.isaac.chatWindow=window.open("/#chat","IsaacOnTwitchChat","resizable,scrollbars,width=600,height=800")},fakeSub(){this.$root.isaac.onSubscriber(new v["c"]("mmm fedfef flvkfl","mmm fedfef flvkfl","tw"))}}},f=w,m=(s("0cec"),Object(u["a"])(f,i,a,!1,null,null,null));e["default"]=m.exports},"6e74":function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"a",(function(){return a})),s.d(e,"c",(function(){return o})),s.d(e,"b",(function(){return n}));class i{constructor(t,e,s,i){this.userId=t,this.userName=e,this.text=s.trim(),this.source=i}}class a{constructor(t,e,s,i,a){this.userId=t,this.userName=e,this.amount=s,this.type=i,this.source=a}}class o{constructor(t,e,s){this.userId=t,this.userName=e,this.source=s}}class n{constructor(t,e,s){this.userId=t,this.userName=e,this.source=s}}},"7d61":function(t,e,s){"use strict";s("3d55")},"7f0b":function(t,e,s){}}]);
//# sourceMappingURL=game-screen.f03b8929.js.map