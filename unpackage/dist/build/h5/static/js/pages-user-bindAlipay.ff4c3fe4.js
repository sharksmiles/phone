(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-bindAlipay"],{"082a":function(e,t,n){"use strict";n.r(t);var a=n("aea5"),i=n("4926");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("aae0");var u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"1fe19b30",null,!1,a["a"],void 0);t["default"]=o.exports},"0aca":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"u-code-wrap"})},i=[]},"23a7":function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("00b4");var i=a(n("5530")),r=n("26cb"),u=n("599a"),o={computed:(0,i.default)((0,i.default)({},(0,r.mapState)(["user"])),{},{isRealname:function(){return!!this.user.info.realname},isIdcard:function(){return!!this.user.info.idcard}}),data:function(){var e=this;return{form:{},tips:"",seconds:10,rules:{aliname:[{required:!0,message:"请输入姓名",trigger:["change","blur"]}],aliidentity:[{required:!0,message:"请输入收款账号",trigger:["change","blur"]}],mobile:[{required:!0,message:"请输入手机号",trigger:["change","blur"]},{validator:function(t,n,a){return e.$u.test.mobile(n)},message:"手机号码不正确",trigger:["change","blur"]}],code:[{required:!0,message:"请输入4位数验证码",trigger:["change","blur"]},{min:4,message:"请输入4位数验证码",trigger:["change","blur"]}]}}},methods:{codeChange:function(e){this.tips=e},getCode:function(){var e=this,t=this.form.mobile;this.$u.test.mobile(t)||this.$throw("请输入正确手机号"),this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),(0,u.sendCode)({mobile:t}).then((function(t){1==t.code&&(e.$u.toast("验证码已发送"),e.$refs.uCode.start())}))):this.$u.toast("倒计时结束后再发送")},submit:function(){var e=this;this.$refs.uForm.validate((function(t){t&&(uni.showLoading({title:"正在提交"}),(0,u.bindAlipay)(e.form).then((function(t){e.$u.toast(t.msg),1==t.code&&setTimeout((function(){e.$utils.handleSwitchTab("/pages/tabBar/user")}),1e3)})))}))}},onReady:function(){console.log(this.user.info,"00000"),this.$refs.uForm.setRules(this.rules)}};t.default=o},4791:function(e,t,n){"use strict";var a=n("6c6e"),i=n.n(a);i.a},4926:function(e,t,n){"use strict";n.r(t);var a=n("23a7"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"599a":function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.bindAlipay=function(e){return(0,i.default)({url:"cash/bindAlipay",method:"POST",data:e})},t.depositWithdrawal=function(e){return(0,i.default)({url:"cash/deposit",method:"POST",data:e})},t.faceCheck=function(){return(0,i.default)({url:"face/check",method:"POST"})},t.faceOrder=function(e){return(0,i.default)({url:"face/faceOrder",method:"POST",data:e})},t.faceOrderConfirm=function(e){return(0,i.default)({url:"face/confirm",method:"POST",data:e})},t.init=function(){return(0,i.default)({url:"cash/init",method:"GET"})},t.initFace=function(e){return(0,i.default)({url:"face/initFace",method:"POST",data:e})},t.sendCode=function(e){return(0,i.default)({url:"cash/sendCode",method:"POST",data:e})},t.withdrawal=function(e){return(0,i.default)({url:"cash/withdrawal",method:"POST",data:e})};var i=a(n("d42c"));confirm},"699f":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-code-wrap[data-v-5e7aef95]{width:0;height:0;position:fixed;z-index:-1}',""]),e.exports=t},"6c6e":function(e,t,n){var a=n("699f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("34b71055",a,!0,{sourceMap:!1,shadowMode:!1})},"855f":function(e,t,n){"use strict";n.r(t);var a=n("a4fe"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"954c":function(e,t,n){var a=n("a304");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("432748ee",a,!0,{sourceMap:!1,shadowMode:!1})},a304:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-1fe19b30]{width:90%;margin:0 auto}',""]),e.exports=t},a4fe:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("ac1f"),n("5319");var a={name:"u-verification-code",props:{seconds:{type:[String,Number],default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"X秒重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=a},aae0:function(e,t,n){"use strict";var a=n("954c"),i=n.n(a);i.a},aea5:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uForm:n("ff88").default,uFormItem:n("6cfe").default,uInput:n("5c70").default,uVerificationCode:n("dc18").default,uButton:n("df4a").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("customNavbar",{attrs:{title:"绑定支付宝"}}),n("u-form",{ref:"uForm",attrs:{model:e.form,"label-position":"top","label-style":{fontSize:"30rpx",fontWeight:"bold"}}},[n("u-form-item",{attrs:{label:"支付宝实名",prop:"aliname"}},[n("u-input",{attrs:{placeholder:"请输入支付宝实名"},model:{value:e.form.aliname,callback:function(t){e.$set(e.form,"aliname",t)},expression:"form.aliname"}})],1),n("u-form-item",{attrs:{label:"支付宝账户",prop:"alimobile"}},[n("u-input",{attrs:{placeholder:"请输入支付宝账户"},model:{value:e.form.alimobile,callback:function(t){e.$set(e.form,"alimobile",t)},expression:"form.alimobile"}})],1),n("u-form-item",{attrs:{label:"手机",prop:"mobile"}},[n("u-input",{attrs:{placeholder:"请输入手机"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),n("u-form-item",{attrs:{label:"验证码",prop:"code"}},[n("u-input",{attrs:{placeholder:"请输入验证码",maxlength:"4"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),[n("u-verification-code",{ref:"uCode",attrs:{seconds:e.seconds},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}}),n("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{size:"mini",type:"success"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v(e._s(e.tips))])]],2)],1),n("v-uni-view",{staticClass:"m-t-20 m-b-20",staticStyle:{color:"#909399","text-align":"center"}},[e._v("注：一经绑定暂不支持修改")]),n("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1)},r=[]},dc18:function(e,t,n){"use strict";n.r(t);var a=n("0aca"),i=n("855f");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("4791");var u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"5e7aef95",null,!1,a["a"],void 0);t["default"]=o.exports}}]);