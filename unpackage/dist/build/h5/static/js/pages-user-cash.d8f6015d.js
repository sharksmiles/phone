(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-cash"],{"05aa":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.bindAlipay=function(t){return(0,a.default)({url:"cash/bindAlipay",method:"POST",data:t})},e.depositWithdrawal=function(t){return(0,a.default)({url:"cash/deposit",method:"POST",data:t})},e.faceCheck=function(){return(0,a.default)({url:"face/check",method:"POST"})},e.faceOrder=function(t){return(0,a.default)({url:"face/faceOrder",method:"POST",data:t})},e.faceOrderConfirm=function(t){return(0,a.default)({url:"face/confirm",method:"POST",data:t})},e.init=function(){return(0,a.default)({url:"cash/init",method:"GET"})},e.initFace=function(t){return(0,a.default)({url:"face/initFace",method:"POST",data:t})},e.sendCode=function(t){return(0,a.default)({url:"cash/sendCode",method:"POST",data:t})},e.withdrawal=function(t){return(0,a.default)({url:"cash/withdrawal",method:"POST",data:t})};var a=i(n("01d6"));confirm},"577d":function(t,e,n){"use strict";var i=n("c32c"),a=n.n(i);a.a},"69b8":function(t,e,n){"use strict";n.r(e);var i=n("b1cf"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},7521:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uTabs:n("3bc4").default,uInput:n("31c4").default,uButton:n("366d").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("customNavbar",{attrs:{title:"提现"}}),i("u-tabs",{attrs:{list:t.list,"is-scroll":!1,current:t.current},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"cashout-money m-t-30"},[i("v-uni-view",{staticClass:"cashout-title"},[t._v("提现金额")]),0==t.current?[i("v-uni-view",{staticClass:"bg-white-shadow p-20"},[i("v-uni-view",{staticClass:"money-item m-b-20 viewFlex"},[i("v-uni-view",{staticClass:"viewFlex"},[i("v-uni-image",{staticClass:"pull-left viewFlex",attrs:{src:n("9a8b"),mode:"widthFix"}})],1),1==t.user.info.is_official_id?i("u-input",{staticClass:"m-l-5",attrs:{type:"number",placeholder:"输入转出金额（不低于"+t.config.minCash+"元，且为10的倍数）"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}}):i("u-input",{staticClass:"m-l-5",attrs:{type:"number",placeholder:"输入转出金额"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1),i("v-uni-view",{staticClass:"money-con",staticStyle:{display:"block"}},[i("v-uni-view",{},[i("span",[t._v("可提现金额："+t._s(t.user.info.money)+"元 ｜ 不可提现金额："),i("a",{attrs:{href:"javascript:;"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$utils.handleNavigate("/pages/finance/delayed")}}},[t._v(t._s(t.user.info.delayedAmount))]),t._v("元")])]),i("v-uni-view",{staticClass:"strong m-t-10",staticStyle:{"text-align":"right"}},[i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.money=t.user.info.money-1.5}}},[t._v("全部提现")])],1)],1)],1),i("v-uni-view",{staticClass:"cashout-explain m-t-30"},[i("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(1)}}},[t._v("人工打款")]),i("u-button",{staticStyle:{"background-color":"#61c9f0","margin-top":"20px"},attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(2)}}},[t._v("自动打款")])],1),i("v-uni-view",{staticClass:"cashout-explain m-t-30"},[i("ul",[[[i("li",{staticClass:"m-t-15"},[t._v("提现金额需为10的倍数，满"+t._s(t.config.minCash)+"元可使用")]),i("li",{staticClass:"m-t-15"},[t._v("按照阿里云规则自动打款必须用手机网页或者带摄像头电脑，点击自动打款那刻起就扣次数，有效期只有半小时")]),i("li",{staticClass:"m-t-15"},[t._v("注：为响应监管部门反洗钱要求规范，提现分为人工审核打款和自动打款两种。人工提现3-7个工作日到账，且0费率不需要扫脸。自动审核打款需扫脸，提现秒到账，每个月第一次提现免手续费，当月后面每次1.5元固定手续费。（手续费为阿里云提供的人脸实名费用）")])]]],2)])]:[i("v-uni-view",{staticClass:"bg-white-shadow p-20"},[i("v-uni-view",{staticClass:"money-item m-b-20 viewFlex"},[i("v-uni-view",{staticClass:"viewFlex"},[i("v-uni-image",{staticClass:"pull-left viewFlex",attrs:{src:n("9a8b"),mode:"widthFix"}})],1),i("u-input",{staticClass:"m-l-5",attrs:{type:"number",placeholder:"输入转出提现金额"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1),i("div",{staticClass:"money-con"},[i("span",[t._v("可提现金额："+t._s(t.user.info.deposit)+"元")]),i("v-uni-view",{staticClass:"strong"},[i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.money=t.user.info.deposit-1.5}}},[t._v("全部提现")])],1)],1)],1),i("v-uni-view",{staticClass:"cashout-explain m-t-30"},[i("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success",disabled:t.config.deposit},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(3)}}},[t._v(t._s(t.config.deposit?"本月已提现保证金":"确认提现"))])],1),i("v-uni-view",{staticClass:"cashout-explain m-t-30"},[i("ul",[i("li",[t._v("每月仅有一次缴纳和提现保证金操作")]),i("li",{staticClass:"m-t-15"},[t._v("保证金交的越多，默认排名越靠前")]),i("li",{staticClass:"m-t-15"},[t._v("退保证金当天不可接单，有正在进行中的订单也不能退保证金")]),i("li",{staticClass:"m-t-15"},[t._v("注：提现秒到账，每个月第一次提现免手续费，当月后面每次1.5元固定手续费。（手续费为阿里云提供的人脸实名费用）")])])])]],2)],1),i("v-uni-view",{staticStyle:{"font-size":"12px",transform:"scale(0.8)","margin-top":"10px"}},[t._v("本平台实名认证由阿里云提供，人脸实名信息只有阿里云可以看到，本平台无法获取用户可以放心使用，由于阿里云的计费规则无论实名成功还是失败均会扣费，费用为每次为1.5元从余额中扣除，请用户在进行人脸实名之前确保人脸信息和之前平台上认证的姓名电话身份证为同一人，且不要在光线过强或过暗的环境下进行人脸认证，以防验证失败。")])],1)},o=[]},"9a8b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAABCCAYAAAAc9iUKAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAANqADAAQAAAABAAAAQgAAAAD/EWirAAAE3UlEQVRoBe1ZO2sUURh1Z7MxpLEJNqYIERvFQvMotLGQYBM79R+IhVr5QIgh2ogWimihdsZKowgmsEbLxSx5KSakihZCQorYKEiQ4K7nrDNhdvbOzPfd3XXDMgPDfZ3vcb5z985kkurt7c0Wi8UTOxSX4zhnZmdnXyhMrKF9fX2nC4XCc42DVCr11kmn01dhVNAYohDDuFMaGxssYzCW0rZATs709PQCGD7VGCPYgf7+/lMaGxssYzCWxpZcyMmhERgOY2JD44CVxF031eibMTQ5kQO50KZEDAxX0L+rcYKgdVXNRi1ycLn8I0ZCYHoHzTr70osVZWWleCmOPulbindx6y6H0rCkGHtg+hNS3nBBogbB66KajVrMnRy8xLeIcQKJPkGz7C1KWlYWd81Uoy/6lMT2YZZhw9y3rjJi8/Pzm5CTx7/4gsOaqmajFnNm7v6ky4hxYWZm5jVknfKD4vqsMO6qVaMP+oqL519nrszZP8d+BbHSpONcCgKjxkimJqrZqIW3IGOuRmKoQB6VeBlFJrjGSrPiwXnpmLb0IcUTxxyZq8nGSIzATCZzDU3ZvjU58OaQVFWqWai16ebopVDWhhLL5/NfUJFHZeiYASvOysfAKpZpQ9uKhYgJ5sYcwyChxGiAYDfhYOvZEObEmwfeSjWtWsyJuXlxTW0kMRyh3+HglskwbA54lWrAq9ViTswtLAfORxIjoLW19T4qxHdJ0YWgKtUs1FphTnHJxBLDPt5AskNxjvzrwItUA85GrSHm5I9n6scSo9Hg4OAzNJ9NDkxzUtW0ajEHNxdT2LI58QnW09MzAMvJMuuIAbbvEj4fHERbNMGoFv7sX2QRTOumOfgamJube29aC86JFKMRfqzv0IiJxalmodaklBTzFRMjuKWl5QqaAvuSC+SMvzWqxTWJDxdTcGOLTVTE8PfOAjyPSr2HqWah1qgbWxpapxi9onLXsddjTyUvg6BqWrUYizE9f9JWpRidonJ8pt2TBgiqZqHWPTemNGQJpyZGK/xhdxuN+PuIp5pWLcZwYzGs6hIf90Gv+IJ8Hok+CM6Hjfn1mGuar7rYhhdwEj4M8xk13xK1GLUGUo+xfhH3viict0bVvL6w5XcMxrC60lZWMFpbWyt0dnauInhJCYGf3cDwFl1Q+CzUWhKBDSDrrej5wpb8AHJHvHEtWmzBKZA6Wo0vq8PDHxBJXPaPa9Gvhc+qieF9cAqJvKoFIfqgL/qs1p9xK46MjDjj4+OLCue7gN2jwEdBV7H4IwrgX2tvbz+Wy+UqHj1Rp+J+v4P/2GeBxEXC4yNjyq3qrWhyuh3mEmLbQQVNDk2rmPFUZGXwZ/txTYX8WPyg+aF1r38uov8VbxnnItYjlzo6OnLZbPZ3EBRKLAjUjPE28hFvI4ckNnhufcJbxmEJVoNp2q2YENNsg+2ATRTbDipocmhaxYzHPd/uJyYmfmkq5MfiqN+JsdG3H+f2izjyK55DBpxxCrG68ZV6LbgY+nYPg7YguE5jfhW2jtXW1mYsYNNuxYRYnbZh3dw2rWLGHx7LiLf7btty4jB4g1v0Dz2ciEu4T9rG6urq+jY2NvYnaB9KLAjUjJO3e021lNim/Y0lxJQ7oeHwRLGGS6BMIFFMWbCGwxPFGi6BMoFEMWXBGg7/C90hM7bmpoy7AAAAAElFTkSuQmCC"},b1cf:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("5319"),n("e9c4"),n("a9e3");var a=i(n("5530")),o=n("26cb"),s=n("05aa"),r={computed:(0,a.default)({},(0,o.mapState)(["user"])),data:function(){return{money:"",multiple:10,config:{minCash:50},list:[{name:"余额"},{name:"保证金"}],current:0,certifyId:"",order_id:"0"}},onLoad:function(){var t=this;(0,s.init)().then((function(e){1==e.code&&(t.config=e.data)})),this.getfaceOrderConfirm()},onShow:function(){this.$store.dispatch("user/getUserInfo")},methods:{getfaceOrderConfirm:function(){var t=this,e=this.$route.query,n=e.money,i=e.type,a=e.order_id;console.log(a,n,"----"),a&&n&&(this.current=i||0,this.order_id=a,this.money=n,a&&(0,s.faceOrderConfirm)({order_id:a}).then((function(e){console.log(e,"res"),1==e.code?0==i?t.submitPay(2):t.depositSubmit():t.$u.toast(e.msg)})))},getFaceCheck:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"withdrawal";return(0,s.faceCheck)().then((function(n){var i=n.data,a=i.idcard,o=i.is_face_num,r=i.is_one,c=(i.is_pay,i.order_id),u=i.realname;i.meta_info;if(!t.money)return t.$throw("请输入提现金额"),!1;if(!r&&"depositWithdrawal"!=e)return!0;if(o>=2)return t.$u.toast("身份验证失败次数超出限制，请联系客服！"),!1;if(a&&u){var l=JSON.stringify(window.getMetaInfo()).replace(/"/g,"'");return console.log(l,"==="),0!=c?(0,s.initFace)({order_id:c,meta_info:l,money:t.money,cert_name:u,cert_no:a,type:t.current}).then((function(e){e.code?location.href=e.data.certifyUrl:t.$u.toast("系统错误，请联系客服！")})):(0,s.faceOrder)({realname:u,idcard:a,money:t.money}).then((function(e){var n=e.data.order_id;(0,s.initFace)({order_id:n,meta_info:l,money:t.money,cert_name:u,cert_no:a,type:t.current}).then((function(t){t.code?location.href=t.data.certifyUrl:that.$u.toast("系统错误，请联系客服！")}))})),!1}t.$utils.handleNavigate("/pages/user/bindReal")}))},submit:function(t){var e=this;2==t?this.getFaceCheck().then((function(n){console.log(n,"flag"),n&&e.submitPay(t)})):1==t?this.submitPay(t):this.getFaceCheck("depositWithdrawal")},submitPay:function(t){var e=this,n=Number(e.money),i=Number(this.config.minCash),a=Number(this.multiple),o=this.user.info.is_official_id;this.user.info.no_fee;n||e.$throw("请输入提现金额"),1==o&&((!n||n<i)&&e.$throw("最低提现金额为"+i),n%a!==0&&e.$throw("请输入"+a+"的倍数")),n>Number(this.user.info.money)&&e.$throw("最大提现金额为"+this.user.info.money+"元"),(0,s.withdrawal)({type:t,money:n,order_id:this.order_id}).then((function(t){e.$u.toast(t.msg),1==t.code&&setTimeout((function(){e.$utils.handleSwitchTab("/pages/tabBar/user")}),1e3)}))},depositSubmit:function(){var t=this,e=Number(t.money);e||t.$throw("请输入提现金额"),e>Number(this.user.info.deposit)&&t.$throw("最大提现金额为"+this.user.info.deposit+"元"),(0,s.depositWithdrawal)({money:e,order_id:this.order_id}).then((function(e){t.$u.toast(e.msg),1==e.code&&t.$utils.handleSwitchTab("/pages/tabBar/user")}))},change:function(t){this.current=t,this.money=""}}};e.default=r},c32c:function(t,e,n){var i=n("e344");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("12d78a57",i,!0,{sourceMap:!1,shadowMode:!1})},e344:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-93dcae52]{width:90%;margin:0 auto}.container .cashout-money .cashout-title[data-v-93dcae52]{font-size:14px;font-weight:600;color:#333;margin-bottom:15px}.container .cashout-money .money-item uni-image[data-v-93dcae52]{width:18px;align-self:center}.container .cashout-money .money-con[data-v-93dcae52]{border-top:1px solid #e9e9e9;display:flex;padding-top:15px}.container .cashout-money .money-con .strong[data-v-93dcae52]{flex:1;text-align:right;font-size:14px;font-weight:600;color:#61c9f0}.container .cashout-money .cashout-explain ul[data-v-93dcae52]{padding:0}.container .cashout-money .cashout-explain ul li[data-v-93dcae52]{list-style:none}',""]),t.exports=e},e7d8:function(t,e,n){"use strict";n.r(e);var i=n("7521"),a=n("69b8");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("577d");var s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"93dcae52",null,!1,i["a"],void 0);e["default"]=r.exports}}]);