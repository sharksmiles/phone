(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-account-statistics"],{"02a8":function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=n(e("5530")),i=e("26cb"),c=e("a4a6"),o={computed:(0,s.default)({},(0,i.mapState)(["user"])),data:function(){return{data:{},changePasswordShow:!1,delShow:!1,password:"",text:""}},onLoad:function(t){var a=this;t.id&&(this.id=t.id,(0,c.statistics)(t.id).then((function(t){1==t.code&&(a.data=t.data)})))},methods:{handleShow:function(t,a,e){this.text=t,this.type=a,this.delShow=e},delShowClick:function(){var t=this,a=null;a=1==this.type?(0,c.upAccount)({id:this.id}):2==this.type?(0,c.downAccount)({id:this.id}):(0,c.delShowInfo)({id:this.id}),a.then((function(a){t.$u.toast(a.msg),1==a.code&&(t.delShow=!1,uni.navigateBack())}))},changePasswordClick:function(){var t=this,a=this,e=this.password;e||this.$throw("请输入密码"),e==this.data.password&&this.$throw("新密码不得与旧密码相同"),(0,c.changePassword)({password:this.password,id:this.id}).then((function(n){t.$u.toast(n.msg),1==n.code&&(a.data.password=e,a.changePasswordShow=!1,a.password="")}))}}};a.default=o},"51fe":function(t,a,e){"use strict";e.r(a);var n=e("b71f"),s=e("a3d8");for(var i in s)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return s[t]}))}(i);e("61e7");var c=e("f0c5"),o=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"2d453039",null,!1,n["a"],void 0);a["default"]=o.exports},"61e7":function(t,a,e){"use strict";var n=e("8490"),s=e.n(n);s.a},"720c":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.changePasswordPopup[data-v-2d453039]{text-align:center;padding:%?20?%}.state[data-v-2d453039]{background-image:url(/static/imgs/state-icon.png);background-repeat:no-repeat;background-size:cover;position:absolute;width:70px;height:70px;text-align:center;line-height:56px;color:#fff}',""]),t.exports=a},8490:function(t,a,e){var n=e("720c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("0bf6ae10",n,!0,{sourceMap:!1,shadowMode:!1})},a3d8:function(t,a,e){"use strict";e.r(a);var n=e("02a8"),s=e.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=s.a},a4a6:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.changePassword=function(t){return(0,s.default)({url:"/account/changePassword",method:"POST",data:t})},a.delShowInfo=function(t){return(0,s.default)({url:"account/delAccount",method:"POST",data:t})},a.downAccount=function(t){return(0,s.default)({url:"account/downAccount ",method:"POST",data:t})},a.handalFee=function(t){return(0,s.default)({url:"account/handalFee",method:"POST",data:t})},a.quickReceive=function(t){return(0,s.default)({url:"/account/quickReceive/id/"+t,method:"POST"})},a.releaseInit=function(t,a){return(0,s.default)({url:"/account/releaseInit/id/"+(t||0),method:"GET",data:a})},a.releaseList=function(t,a){return(0,s.default)({url:"/account/releaseList",method:"GET",data:a})},a.rentSubmit=function(t){return(0,s.default)({url:"/account/rentSubmit",method:"POST",data:t})},a.repeated=function(t,a,e){return(0,s.default)({url:"/account/repeated/gameId/"+t+"/accountId/"+a+"/release_type/"+e,method:"POST"})},a.skillSubmit=function(t){return(0,s.default)({url:"/account/skillSubmit",method:"POST",data:t})},a.statistics=function(t){return(0,s.default)({url:"/account/statistics/id/"+t,method:"GET"})},a.subject=function(t){return(0,s.default)({url:"/account/subject/type/"+t,method:"GET"})},a.trainingSubmit=function(t){return(0,s.default)({url:"/account/trainingSubmit",method:"POST",data:t})},a.upAccount=function(t){return(0,s.default)({url:"account/upAccount ",method:"POST",data:t})};var s=n(e("01d6"))},b71f:function(t,a,e){"use strict";e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={uButton:e("366d").default,uPopup:e("b572").default,uInput:e("31c4").default},s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("customNavbar",{attrs:{title:t.data.name}}),e("v-uni-view",{staticClass:"order-list m-t-10"},[e("v-uni-view",{staticClass:"listTop viewFlex p-10",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.handleNavigate("/pages/account/"+(1==t.data.release_type?"rent":2==t.data.release_type?"accompany":"training")+"/detail?id="+t.data.id)}}},[e("v-uni-view",{staticClass:"avatar-img border-radius-10 pull-left oh text-center"},[e("img",{attrs:{src:t.data.cover_image,width:"88",height:"110"}}),2!=t.data.status?e("v-uni-view",{staticClass:"state"},[t._v(t._s(t.data.status_text))]):t._e()],1),e("v-uni-view",{staticClass:"listText pull-left m-l-10",staticStyle:{width:"98%",flex:"1 1 0%"}},[e("h3",{staticClass:"listTitle"},[e("div",{staticClass:"account-item-game-icon",staticStyle:{"background-image":'url("https://oss-img.mengzuhao.cn/account-game-icon.png")',"background-repeat":"no-repeat","background-size":"cover"}},[t._v(t._s(t.data.gameName))]),t._v(t._s(t.data.name))]),e("v-uni-view",{staticClass:"listCon m-t-5"},[e("span",[t._v(t._s(t.data.zoneName))]),e("v-uni-text",{staticClass:"m-l-5"},[t._v(t._s(t.data.schoolName)+"/"+t._s(t.data.bodyName))])],1),e("v-uni-view",{staticClass:"userId m-t-5"},[t._v(t._s(1==t.data.release_type?"账号":"技能")+"ID："+t._s(t.data.zid))]),e("div",{staticClass:"order-list-cost m-t-5"},[e("span",{staticClass:"h"},[t._v("¥"),e("v-uni-text",{staticClass:"price"},[t._v(t._s(t.data.hourRent))]),t._v("/时")],1),e("span",{staticClass:"d"},[t._v("¥"),e("v-uni-text",{staticClass:"price"},[t._v(t._s(t.data.dayRent))]),t._v("/时")],1),e("span",{staticClass:"m"},[t._v("¥"),e("v-uni-text",{staticClass:"price"},[t._v(t._s(t.data.monthRent))]),t._v("/时")],1)])],1)],1)],1),e("v-uni-view",{staticClass:"order-parameter bg-white-shadow p-10 m-t-20"},[e("v-uni-view",{staticClass:"m-t-10 cumulative"},[e("v-uni-text",[t._v("累计收入：")]),e("v-uni-text",{staticClass:"order-number"},[t._v(t._s(t.data.income)+"元")])],1),e("v-uni-view",{staticClass:"m-t-10"},[e("v-uni-text",[t._v("上架时间：")]),e("v-uni-text",{staticClass:"desc"},[t._v(t._s(t.data.createtime_text))])],1),e("v-uni-view",{staticClass:"m-t-10"},[e("v-uni-text",[t._v(t._s(1==t.data.release_type?"出租":"接单")+"次数：")]),e("v-uni-text",{staticClass:"desc"},[t._v(t._s(t.data.rentNum)+"次")])],1),e("v-uni-view",{staticClass:"m-t-10"},[e("v-uni-text",[t._v(t._s(1==t.data.release_type?"游戏账号":"接单QQ群")+"：")]),e("v-uni-text",{staticClass:"desc"},[t._v(t._s(t.data.account))])],1),e("v-uni-view",{staticClass:"m-t-10"},[e("v-uni-text",[t._v(t._s(1==t.data.release_type?"游戏密码":"接单暗号")+"：")]),e("v-uni-text",{staticClass:"desc"},[t._v(t._s(t.data.password))]),e("v-uni-text",{staticClass:"click-right-em",staticStyle:{"margin-left":"10px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleShow("上架",1,!0)}}},[t._v("上架")]),e("v-uni-text",{staticClass:"click-right-em",staticStyle:{"margin-left":"10px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleShow("下架",2,!0)}}},[t._v("下架")]),e("v-uni-text",{staticClass:"click-right-em",staticStyle:{"margin-left":"10px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleShow("删除",3,!0)}}},[t._v("删除")]),t.data.orderStatus||1!=t.data.release_type?t._e():e("v-uni-text",{staticClass:"click-right-em",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changePasswordShow=!0}}},[t._v("修改密码")])],1)],1),e("v-uni-view",{staticClass:"btn-fixed-bottom"},[t.user.info.score<60?e("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{disabled:t.user.info.score<60,type:"success"}},[t._v("信誉分过低，禁止发布")]):[e("u-button",{attrs:{disabled:t.data.orderStatus},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.handleNavigate("/pages/account/"+(1==t.data.release_type?"rent":2==t.data.release_type?"accompany":"training")+"/release?id="+t.data.id)}}},[t.data.orderStatus?e("v-uni-view",[e("v-uni-view",{staticStyle:{"line-height":"normal"}},[t._v("租用中")]),e("v-uni-view",{staticStyle:{"line-height":"normal","font-weight":"normal","font-size":"12px",display:"block"}},[t._v("请\n\t\t\t\t\t\t"+t._s(t.data.expiretime)+" 后更改")])],1):e("v-uni-text",[t._v("修改"+t._s(1==t.data.release_type?"账号":"技能"))])],1)]],2),e("u-popup",{attrs:{mode:"center",width:"500","border-radius":"14"},model:{value:t.changePasswordShow,callback:function(a){t.changePasswordShow=a},expression:"changePasswordShow"}},[e("v-uni-view",{staticClass:"changePasswordPopup"},[e("h3",{staticClass:"m-b-20",staticStyle:{"font-size":"16px","font-weight":"400",color:"rgb(51, 51, 51)"}},[t._v("修改密码")]),e("u-input",{attrs:{"border-color":"#f4f4f4",border:!0,placeholder:"请输入新密码"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("v-uni-view",{staticClass:"viewFlex m-t-10"},[e("u-button",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changePasswordShow=!1,t.password=""}}},[t._v("取消")]),e("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changePasswordClick.apply(void 0,arguments)}}},[t._v("确定修改")])],1)],1)],1),e("u-popup",{attrs:{mode:"center",width:"500","border-radius":"14"},model:{value:t.delShow,callback:function(a){t.delShow=a},expression:"delShow"}},[e("v-uni-view",{staticClass:"changePasswordPopup"},[e("h3",{staticClass:"m-b-20",staticStyle:{"font-size":"16px","font-weight":"400",color:"rgb(51, 51, 51)"}},[t._v("确认"+t._s(t.text)+"该条记录？")]),e("v-uni-view",{staticClass:"viewFlex m-t-10"},[e("u-button",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.delShow=!1}}},[t._v("取消")]),e("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.delShowClick.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)},i=[]}}]);