(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-order-detail"],{"0603":function(t,e,a){"use strict";a.r(e);var i=a("7ade"),n=a("63bf");for(var d in n)["default"].indexOf(d)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(d);a("b681");var o=a("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"4cd21f9c",null,!1,i["a"],void 0);e["default"]=r.exports},"4d94":function(t,e,a){var i=a("fdc9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7e0c2b05",i,!0,{sourceMap:!1,shadowMode:!1})},"63bf":function(t,e,a){"use strict";a.r(e);var i=a("c5bc"),n=a.n(i);for(var d in i)["default"].indexOf(d)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(d);e["default"]=n.a},"7ade":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return d})),a.d(e,"a",(function(){return i}));var i={uCellGroup:a("5979").default,uCellItem:a("ff34").default,uInput:a("31c4").default,uButton:a("366d").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"good-frame"},[a("customNavbar",{attrs:{title:"订单详情"}}),a("v-uni-view",{staticClass:"good-state",staticStyle:{"margin-top":"20px"}},[a("span",{staticClass:"status",class:"status"+t.data.status},[t._v(t._s(t.data.status_text))])]),a("v-uni-view",{staticClass:"good-item"},[a("v-uni-view",{staticClass:"good-item-area",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$utils.handleNavigate("/pages/account/"+(1==t.data.release_type?"rent":"accompany")+"/detail?id="+t.data.account_id)}}},[a("span",[t._v(t._s(t.data.zone_name)+t._s(t.data.server_name))]),a("span",[t._v(t._s(t.data.school_name)+"/"+t._s(t.data.body_name))])]),a("v-uni-view",{staticStyle:{display:"flex"}},[a("v-uni-view",{staticClass:"good-item-imgs",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$utils.handleNavigate("/pages/account/"+(1==t.data.release_type?"rent":"accompany")+"/detail?id="+t.data.account_id)}}},[a("v-uni-image",{staticStyle:{width:"10vh","border-radius":"10px"},attrs:{src:t.data.cover_image,mode:"widthFix"}})],1),a("v-uni-view",[a("v-uni-view",{staticClass:"good-item-content m-l-10"},[t._v(t._s(t.data.name))]),a("v-uni-view",{staticClass:"m-l-10",staticStyle:{"font-size":"14px"}},[t._v(t._s(1==t.data.release_type?"账号":"技能")+"ID："),a("span",[t._v(t._s(t.data.zid))])]),a("v-uni-view",{staticClass:"m-l-10 m-t-10 ",staticStyle:{"font-size":"14px"}},[a("v-uni-text",{staticClass:"complaint",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$utils.handleNavigate("/pages/order/complaint?type=2&orderId="+t.data.id)}}},[t._v("拉黑")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"good-item",staticStyle:{"font-size":"14px"}},[a("u-cell-group",{attrs:{title:"支付详情","title-style":{fontSize:"30rpx",color:"#000000"}}},[a("u-cell-item",{attrs:{title:"订单编号",value:t.data.ordersn,arrow:!1}},[a("v-uni-text",{staticClass:"m-l-5",attrs:{slot:"right-icon"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$utils.copy(t.data.ordersn)}},slot:"right-icon"},[t._v("复制")])],1),a("u-cell-item",{attrs:{title:"创建时间",value:t.data.createtime_text,arrow:!1}}),t.data.status>1?[a("u-cell-item",{attrs:{title:"支付时间",value:t.data.paytime_text,arrow:!1}}),a("u-cell-item",{attrs:{title:"结束时间",value:t.data.expiretime_text,arrow:!1}})]:t._e(),t.data.coupon_id?a("u-cell-item",{attrs:{title:"优惠券",value:"满"+t.data.full+"减"+t.data.discount,arrow:!1}}):t._e(),a("u-cell-item",{attrs:{title:"实际金额",value:t.data.amount+"元",arrow:!1}}),a("u-cell-item",{attrs:{title:"支付金额",value:t.data.price+"元",arrow:!1}})],2)],1),t.data.refund?a("v-uni-view",{staticClass:"good-item",staticStyle:{"font-size":"14px"}},[a("u-cell-group",{attrs:{title:"退款详情"+(1==t.data.refund.interve?"（客服介入）":""),"title-style":{fontSize:"40rpx",color:"#000000"}}},[a("v-uni-view",{staticClass:"p-t-10"},[t._v(t._s(t.data.refund.option_text))]),a("u-input",{attrs:{type:"textarea",disabled:""},model:{value:t.data.refund.desc,callback:function(e){t.$set(t.data.refund,"desc",e)},expression:"data.refund.desc"}}),a("v-uni-view",{},t._l(t.data.refund.images_url,(function(t,e){return a("v-uni-image",{attrs:{src:t,mode:""}})})),1)],1)],1):t._e()],1),a("v-uni-view",{staticStyle:{height:"10vh"}}),4==t.data.status||7==t.data.status?a("v-uni-view",{staticClass:"btn-fixed-bottom"},[a("v-uni-view",{staticClass:"viewFlex btn"},[4==t.data.status&&0==t.data.interve?[a("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(6)}}},[t._v("同意退款")]),a("u-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(5)}}},[t._v("拒绝退款")])]:t._e(),7==t.data.status?[a("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(7)}}},[t._v("发货")])]:t._e()],2)],1):t._e()],1)},d=[]},b681:function(t,e,a){"use strict";var i=a("4d94"),n=a.n(i);n.a},c5bc:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("c8ba7"),n={data:function(){return{id:null,data:{}}},onLoad:function(t){t.id&&(this.id=t.id),this.init()},methods:{init:function(){var t=this;(0,i.detail)(this.id).then((function(e){if(1==e.code){var a=e.data;t.data=a}}))},submit:function(t){var e,a=this;uni.showToast({title:"正在处理...",icon:"loading"}),5==t?e=(0,i.refuse)(this.id):6==t?e=(0,i.agree)(this.id):7==t&&(e=(0,i.deliver)(this.id)),e.then((function(t){a.$u.toast(t.msg),1==t.code&&a.init()}))}}};e.default=n},c8ba7:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.agree=function(t){return(0,n.default)({url:"order/agree/id/"+t,method:"POST"})},e.block=function(t){return(0,n.default)({url:"order/block",method:"POST",data:t})},e.cancel=function(t){return(0,n.default)({url:"order/cancel/id/"+t,method:"POST"})},e.comment=function(t){return(0,n.default)({url:"order/comment/id",method:"POST",data:t})},e.complaint=function(t){return(0,n.default)({url:"order/complaint",method:"POST",data:t})},e.create=function(t){return(0,n.default)({url:"order/create",method:"POST",data:t})},e.deliver=function(t){return(0,n.default)({url:"order/deliver/id/"+t,method:"POST"})},e.detail=function(t){return(0,n.default)({url:"order/detail/id/"+t,method:"GET"})},e.getList=function(t){return(0,n.default)({url:"order/getList",method:"GET",data:t})},e.memberConfirm=function(t){return(0,n.default)({url:"order/memberConfirm/id/"+t,method:"POST"})},e.memberDelivery=function(t){return(0,n.default)({url:"order/memberDelivery/id/"+t,method:"POST"})},e.pay=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,n.default)({url:"order/pay/id/"+t+"/method/"+e+"/type/"+a,method:"POST"})},e.refund=function(t){return(0,n.default)({url:"order/refund",method:"POST",data:t})},e.refuse=function(t){return(0,n.default)({url:"order/refuse/id/"+t,method:"POST"})},e.relet=function(t){return(0,n.default)({url:"order/relet",method:"POST",data:t})},e.userOrderList=function(t){return(0,n.default)({url:"order/userList",method:"GET",data:t})};var n=i(a("01d6"))},fdc9:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-4cd21f9c]{height:auto}.container[data-v-4cd21f9c]{background:#fafafa}.good-item-li strong[data-v-4cd21f9c]{width:50px}.good-indent[data-v-4cd21f9c]{margin-top:10px;background-color:#fff;width:100%;height:200px}.good-state[data-v-4cd21f9c],\n.good-item[data-v-4cd21f9c]{padding-left:10px;border-radius:10px}.good-frame[data-v-4cd21f9c]{margin:0 5vw}.good-item-content[data-v-4cd21f9c]{font-size:14px;font-weight:700}.good-item-area[data-v-4cd21f9c]{display:flex;font-size:14px;justify-content:space-between;padding-top:10px}.good-state[data-v-4cd21f9c]{width:100%;height:50px;background-color:#fff;display:flex;align-items:center}.good-item[data-v-4cd21f9c]{margin-top:10px;background-color:#fff;padding:%?20?%}.btn-fixed-bottom[data-v-4cd21f9c]{position:fixed;bottom:0;width:100%;left:0;padding:10px;background:#fafafa!important}.btn-fixed-bottom .btn uni-button[data-v-4cd21f9c]{width:45%}.complaint[data-v-4cd21f9c]{padding:%?2?% %?20?%;border:%?1?% solid #000;border-radius:%?20?%;font-size:%?24?%}.status[data-v-4cd21f9c]{padding-left:10px;font-size:18px;font-weight:600}.status1[data-v-4cd21f9c]{color:#4c92d4!important}.status2[data-v-4cd21f9c]{color:#fd8d26!important}.status3[data-v-4cd21f9c]{color:#21b464!important}',""]),t.exports=e}}]);