(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail"],{"0b8a":function(t,a,e){"use strict";var i=e("4cfa"),n=e.n(i);n.a},2016:function(t,a,e){"use strict";e.r(a);var i=e("6bc9"),n=e("e643");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("0b8a");var d=e("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"05b1f8f9",null,!1,i["a"],void 0);a["default"]=s.exports},"4cfa":function(t,a,e){var i=e("58c9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("154f0e83",i,!0,{sourceMap:!1,shadowMode:!1})},"58c9":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-05b1f8f9]{height:auto}.container[data-v-05b1f8f9]{background:#fafafa}.good-item-li strong[data-v-05b1f8f9]{width:50px}.good-indent[data-v-05b1f8f9]{margin-top:10px;background-color:#fff;width:100%;height:200px}.good-state[data-v-05b1f8f9],\n.good-item[data-v-05b1f8f9]{padding-left:10px;border-radius:10px}.good-frame[data-v-05b1f8f9]{margin:0 5vw}.good-item-content[data-v-05b1f8f9]{font-size:14px;font-weight:700}.good-item-area[data-v-05b1f8f9]{display:flex;font-size:14px;justify-content:space-between;padding-top:10px}.good-state[data-v-05b1f8f9]{width:100%;height:50px;background-color:#fff;display:flex;align-items:center}.good-item[data-v-05b1f8f9]{margin-top:10px;background-color:#fff;padding:%?20?%}.btn-fixed-bottom[data-v-05b1f8f9]{position:fixed;bottom:0;width:100%;left:0;padding:10px;background:#fafafa!important}.btn-fixed-bottom .btn uni-button[data-v-05b1f8f9]{width:45%}.complaint[data-v-05b1f8f9]{padding:%?2?% %?20?%;border:%?1?% solid #000;border-radius:%?20?%;font-size:%?24?%}.status[data-v-05b1f8f9]{padding-left:10px;font-size:18px;font-weight:600}.status1[data-v-05b1f8f9]{color:#4c92d4!important}.status2[data-v-05b1f8f9]{color:#fd8d26!important}.status3[data-v-05b1f8f9]{color:#21b464!important}.status4[data-v-05b1f8f9]{color:red!important}',""]),t.exports=a},"6bc9":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uCellGroup:e("5979").default,uCellItem:e("ff34").default,uButton:e("366d").default,uPopup:e("b572").default,uGrid:e("6aa5").default,uGridItem:e("2c89").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"good-frame"},[e("customNavbar",{attrs:{title:"订单详情"}}),e("v-uni-view",{staticClass:"good-state",staticStyle:{"margin-top":"20px"}},[e("span",{staticClass:"status",class:"status"+t.data.status},[t._v(t._s(t.data.status_text))])]),e("v-uni-view",{staticClass:"good-item"},[e("v-uni-view",{staticClass:"good-item-area",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.handleNavigate("/pages/account/"+(1==t.data.release_type?"rent":"accompany")+"/detail?id="+t.data.account_id)}}},[e("span",[t._v(t._s(t.data.zone_name)+t._s(t.data.server_name))]),e("span",[t._v(t._s(t.data.school_name)+"/"+t._s(t.data.body_name))])]),e("v-uni-view",{staticStyle:{display:"flex"}},[e("v-uni-view",{staticClass:"good-item-imgs",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.handleNavigate("/pages/account/"+(1==t.data.release_type?"rent":"accompany")+"/detail?id="+t.data.account_id)}}},[e("v-uni-image",{staticStyle:{width:"10vh","border-radius":"10px"},attrs:{src:t.data.cover_image,mode:"widthFix"}})],1),e("v-uni-view",[e("v-uni-view",{staticClass:"good-item-content m-l-10"},[t._v(t._s(t.data.name))]),e("v-uni-view",{staticClass:"m-l-10",staticStyle:{"font-size":"14px"}},[t._v(t._s(1==t.data.release_type?"账号":"技能")+"ID："),e("span",[t._v(t._s(t.data.zid))])]),e("v-uni-view",{staticClass:"m-l-10 m-t-5 ",staticStyle:{"font-size":"14px"}},[e("v-uni-text",{staticClass:"complaint",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.handleNavigate("/pages/order/complaint?type=1&orderId="+t.data.id)}}},[t._v("投诉")])],1)],1)],1)],1),2==t.data.status&&1==t.data.release_type?e("v-uni-view",{staticClass:"good-item",staticStyle:{"font-size":"14px"}},[e("u-cell-group",{attrs:{title:"账号信息","title-style":{fontSize:"30rpx",color:"#000000"}}},[e("u-cell-item",{attrs:{title:"账号",value:t.data.account,arrow:!1}},[e("v-uni-text",{staticClass:"m-l-5",attrs:{slot:"right-icon"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.copy(t.data.account)}},slot:"right-icon"},[t._v("复制")])],1),e("u-cell-item",{attrs:{title:"密码",value:t.data.password,arrow:!1}},[e("v-uni-text",{staticClass:"m-l-5",attrs:{slot:"right-icon"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.copy(t.data.password)}},slot:"right-icon"},[t._v("复制")])],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"good-item",staticStyle:{"font-size":"14px"}},[e("u-cell-group",{attrs:{title:"订单详情","title-style":{fontSize:"30rpx",color:"#000000"}}},[e("u-cell-item",{attrs:{title:"订单编号",value:t.data.ordersn,arrow:!1}},[e("v-uni-text",{staticClass:"m-l-5",attrs:{slot:"right-icon"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.copy(t.data.ordersn)}},slot:"right-icon"},[t._v("复制")])],1),e("u-cell-item",{attrs:{title:"创建时间",value:t.data.createtime_text,arrow:!1}}),t.data.status>1?[e("u-cell-item",{attrs:{title:"支付时间",value:t.data.paytime_text,arrow:!1}}),e("u-cell-item",{attrs:{title:"结束时间",value:t.data.expiretime_text,arrow:!1}})]:t._e(),t.data.coupon_id?e("u-cell-item",{attrs:{title:"优惠券",value:"满"+t.data.full+"减"+t.data.discount,arrow:!1}}):t._e(),e("u-cell-item",{attrs:{title:"实际金额",value:t.data.amount+"元",arrow:!1}}),e("u-cell-item",{attrs:{title:"支付金额",value:t.data.price+"元",arrow:!1}}),2==t.data.status?e("u-cell-item",{attrs:{title:"说明",value:"PS:续租订单不可退款哦!",arrow:!1}}):t._e()],2)],1)],1),e("v-uni-view",{staticStyle:{height:"10vh"}}),1==t.data.status||2==t.data.status||3==t.data.status||5==t.data.status||8==t.data.status||9==t.data.status?e("v-uni-view",{staticClass:"btn-fixed-bottom"},[e("v-uni-view",{staticClass:"viewFlex btn"},[1==t.data.status?[e("u-button",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancel.apply(void 0,arguments)}}},[t._v("取消订单")]),e("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.pay.apply(void 0,arguments)}}},[t._v("支付")])]:t._e(),2==t.data.status?[e("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.relet(t.data.account_id,t.data.id)}}},[t._v("续租")])]:t._e(),2==t.data.status||3==t.data.status||8==t.data.status||9==t.data.status?[e("u-button",{attrs:{type:"warning"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.handleNavigate("/pages/order/refund?id="+t.data.id)}}},[t._v("申请售后")])]:t._e(),3==t.data.status&&0==t.data.is_comment?[e("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.handleNavigate("/pages/order/comment?id="+t.data.id)}}},[t._v("评论")])]:t._e(),5==t.data.status?[e("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$utils.handleNavigate("/pages/order/refund?interve=1&id="+t.data.id)}}},[t._v("客服介入")])]:t._e(),8==t.data.status?[e("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("确认")])]:t._e(),9==t.data.status||3==t.data.release_type&&2==t.data.status?[e("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.delivery.apply(void 0,arguments)}}},[t._v("确认收货")])]:t._e()],2)],1):t._e(),e("u-popup",{ref:"gameRef",attrs:{mode:"bottom"},model:{value:t.payTypeShow,callback:function(a){t.payTypeShow=a},expression:"payTypeShow"}},[e("v-uni-view",{staticClass:"game-popup"},[e("v-uni-view",{staticClass:"title"},[t._v("选择支付方式")]),e("u-grid",{attrs:{border:!1}},t._l(t.payType,(function(a,i){return e("u-grid-item",{attrs:{col:2},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleType(a.type)}}},[e("v-uni-view",{staticClass:"item"},[e("v-uni-image",{staticClass:"image",attrs:{src:a.image_url}}),e("v-uni-view",{staticClass:"name"},[t._v(t._s(a.name))])],1)],1)})),1)],1)],1)],1)},o=[]},"9b99":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("99af");var i=e("c8ba7"),n={data:function(){return{id:null,data:{},payType:[{name:"支付宝",image_url:e("a738"),type:"1"},{name:"余额",image_url:e("dc2c"),type:"2"}],payTypeShow:!1}},onLoad:function(t){t.id&&(this.id=t.id),this.init()},methods:{init:function(){var t=this;(0,i.detail)(this.id).then((function(a){1==a.code&&(t.data=a.data)}))},cancel:function(){var t=this;uni.showToast({title:"正在取消...",icon:"loading"}),(0,i.cancel)(this.id).then((function(a){t.$u.toast(a.msg),t.data.status=-1}))},handleType:function(t){this.payMoney(t)},payMoney:function(t){var a=this;uni.showToast({title:"正在支付...",icon:"loading"}),(0,i.pay)(this.id,this.$utils.getMethod(),t).then((function(t){a.$u.toast(t.msg);var e=t.data;1==e.success?uni.reLaunch({url:"/pages/order/detail?id=".concat(a.id)}):(document.querySelector("body").innerHTML=t.data,document.forms[0].submit())}))},pay:function(){this.payTypeShow=!0},relet:function(t,a){uni.redirectTo({url:"/pages/order/create/rent?id=".concat(t,"&orderid=").concat(a,"&&type=relet")})},submit:function(t){var a=this;uni.showToast({title:"请稍等...",icon:"loading"}),(0,i.memberConfirm)(this.id).then((function(t){a.$u.toast(t.msg),1==t.code&&a.init()}))},delivery:function(t){var a=this;uni.showToast({title:"请稍等...",icon:"loading"}),(0,i.memberDelivery)(this.id).then((function(t){a.$u.toast(t.msg),1==t.code&&a.init()}))}}};a.default=n},c8ba7:function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.agree=function(t){return(0,n.default)({url:"order/agree/id/"+t,method:"POST"})},a.block=function(t){return(0,n.default)({url:"order/block",method:"POST",data:t})},a.cancel=function(t){return(0,n.default)({url:"order/cancel/id/"+t,method:"POST"})},a.comment=function(t){return(0,n.default)({url:"order/comment/id",method:"POST",data:t})},a.complaint=function(t){return(0,n.default)({url:"order/complaint",method:"POST",data:t})},a.create=function(t){return(0,n.default)({url:"order/create",method:"POST",data:t})},a.deliver=function(t){return(0,n.default)({url:"order/deliver/id/"+t,method:"POST"})},a.detail=function(t){return(0,n.default)({url:"order/detail/id/"+t,method:"GET"})},a.getList=function(t){return(0,n.default)({url:"order/getList",method:"GET",data:t})},a.memberConfirm=function(t){return(0,n.default)({url:"order/memberConfirm/id/"+t,method:"POST"})},a.memberDelivery=function(t){return(0,n.default)({url:"order/memberDelivery/id/"+t,method:"POST"})},a.pay=function(t,a){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,n.default)({url:"order/pay/id/"+t+"/method/"+a+"/type/"+e,method:"POST"})},a.refund=function(t){return(0,n.default)({url:"order/refund",method:"POST",data:t})},a.refuse=function(t){return(0,n.default)({url:"order/refuse/id/"+t,method:"POST"})},a.relet=function(t){return(0,n.default)({url:"order/relet",method:"POST",data:t})},a.userOrderList=function(t){return(0,n.default)({url:"order/userList",method:"GET",data:t})};var n=i(e("01d6"))},e643:function(t,a,e){"use strict";e.r(a);var i=e("9b99"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a}}]);