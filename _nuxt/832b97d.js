(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(e,t,n){"use strict";var o=n(1),r=n(213),l=n.n(r),c=n(214),d=n.n(c);t.a=function(){o.default.use(l.a,{locale:d.a})}},141:function(e,t,n){"use strict";t.a=function(e){var t=e.$axios;e.store;t.setHeader("X-LC-Id","SqGXqvMqLFSGgxYpcXFbmBgR-gzGzoHsz"),t.setHeader("X-LC-Key","kUXrbjyUdvJV4i1FhsVayqa4"),t.onRequest((function(e){console.log("Making request to "+e.url)}))}},142:function(e,t,n){"use strict";var i,s,o,r,a,l;i=window,s=document,o="script",r="ga",i.GoogleAnalyticsObject=r,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(o),l=s.getElementsByTagName(o)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",l.parentNode.insertBefore(a,l),ga("create","UA-121354150-3","auto"),t.a=function(e){var t=e.app.router;e.store;t.afterEach((function(e,t){ga("set","page",e.fullPath),ga("send","pageview")}))}},170:function(e,t,n){var content=n(276);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("48784da5",content,!0,{sourceMap:!1})},171:function(e,t,n){var content=n(278);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("932a8f60",content,!0,{sourceMap:!1})},216:function(e,t,n){"use strict";var o={data:function(){return{router:!0,menuItems:[{index:"search",path:"/users/bill/search",name:"Search"},{index:"about",path:"/about",name:"About"}],loginItems:[{index:"signup",path:"/signup",name:"注册"},{index:"login",path:"/login",name:"登录"}],optionItems:[{index:"bill",path:"/users/bill",name:"Your bill"},{index:"profile",path:"/users/profile",name:"Your profile"},{index:"hr"},{index:"help",path:"/help",name:"Help"},{index:"setting",path:"/setting",name:"Setting"},{index:"logout",path:"logout",name:"Sign out"}]}},computed:{activeIndex:function(){return this.$route.path}},methods:{handleSelect:function(e){"logout"===e?this.logout():this.$router.push(e)},logout:function(){this.$store.dispatch("logout"),this.$router.push("/")}}},r=(n(275),n(27)),l={middleware:"status",components:{NavMenu:Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-menu",{attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[o("el-menu-item",{attrs:{index:"/"}},[o("img",{attrs:{width:"25px",src:n(274),alt:"Cashier"}})]),e._v(" "),e._l(e.menuItems,(function(t){return o("el-menu-item",{key:t.index,attrs:{index:t.path}},[e._v(e._s(t.name))])})),e._v(" "),e.$store.state.username?[o("el-submenu",{staticClass:"right-menu",attrs:{index:"user"}},[o("template",{slot:"title"},[e._v(e._s(e.$store.state.username))]),e._v(" "),e._l(e.optionItems,(function(t){return["hr"!==t.index?o("el-menu-item",{key:t.index,attrs:{index:t.path}},[e._v(e._s(t.name))]):o("hr",{key:t.index,staticStyle:{margin:"10px auto"}})]}))],2)]:e._l(e.loginItems,(function(t){return o("el-menu-item",{key:t.index,staticClass:"right-menu",attrs:{index:t.path}},[e._v(e._s(t.name))])}))],2)}),[],!1,null,"7fb82a64",null).exports}},c=(n(277),Object(r.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("nav-menu"),this._v(" "),t("nuxt",{staticClass:"container"})],1)}),[],!1,null,null,null));t.a=c.exports},223:function(e,t,n){e.exports=n(224)},247:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.store,n=e.redirect;if(!t.state.username)return n("/login")}},248:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.store,n=e.redirect;if(t.state.username)return n("/")}},249:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.$axios,n=e.store;if(!n.state.sessionToken&&null!==localStorage.getItem("sessionToken")){var o=localStorage.getItem("sessionToken");n.commit("SET_SESSION_TOKEN",o),n.commit("SET_USER",localStorage.getItem("username")),n.commit("SET_OBJECT_ID",localStorage.getItem("objectId"))}n.state.sessionToken&&t.setHeader("X-LC-Session",n.state.sessionToken)}},270:function(e,t,n){var content=n(271);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("a07579c2",content,!0,{sourceMap:!1})},271:function(e,t,n){(t=n(36)(!1)).push([e.i,'.center{text-align:center}.container{margin-top:10px;padding:10px}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}hr{margin:20px auto;opacity:.2}textarea{font-family:Lato,"PingFang SC","Microsoft YaHei","Source Sans Pro","Segoe UI",Arial,sans-serif}.block{width:100%}.icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}',""]),e.exports=t},274:function(e,t,n){e.exports=n.p+"img/money.15cf0a6.png"},275:function(e,t,n){"use strict";n(170)},276:function(e,t,n){(t=n(36)(!1)).push([e.i,".right-menu[data-v-7fb82a64]{float:right}",""]),e.exports=t},277:function(e,t,n){"use strict";n(171)},278:function(e,t,n){(t=n(36)(!1)).push([e.i,'html{font-family:Lato,"PingFang SC","Microsoft YaHei","Source Sans Pro","Segoe UI",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),e.exports=t},279:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"mutations",(function(){return r})),n.d(t,"actions",(function(){return l}));var o=function(){return{objectId:null,username:null,sessionToken:null}},r={SET_OBJECT_ID:function(e,t){e.objectId=t,t?localStorage.setItem("objectId",t):localStorage.removeItem("objectId")},SET_SESSION_TOKEN:function(e,t){e.sessionToken=t,t?localStorage.setItem("sessionToken",t):localStorage.removeItem("sessionToken")},SET_USER:function(e,t){e.username=t,t?localStorage.setItem("username",t):localStorage.removeItem("username")}},l={logout:function(e){var t=e.commit;t("SET_USER",null),t("SET_SESSION_TOKEN",null),t("SET_OBJECT_ID",null)}}}},[[223,17,2,18]]]);