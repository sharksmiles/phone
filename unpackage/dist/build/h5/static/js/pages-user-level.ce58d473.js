(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-level"],{"0593":function(e,t,a){var i=a("dc5d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("da33b9fa",i,!0,{sourceMap:!1,shadowMode:!1})},"1b43":function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.list=function(){return(0,n.default)({url:"level/getList",method:"GET"})};var n=i(a("01d6"))},5398:function(e,t,a){"use strict";a.r(t);var i=a("e724"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"5f99":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var i={uNavbar:a("af3d").default,uIcon:a("034b").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"good-frame"},[a("u-navbar",{attrs:{title:"我的等级","custom-back":e.comeback,autoBack:!0}},[a("u-icon",{staticClass:"m-r-10",attrs:{slot:"right",size:"40",color:"rgb(96, 98, 102)",name:"question-circle"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$utils.handleNavigate("/pages/common/xieyi?name=levelDesc")}},slot:"right"})],1)],1),a("v-uni-view",{staticClass:"list-wrap"},[a("v-uni-view",{staticStyle:{display:"flex"}},e._l(e.levelList,(function(t,i){return a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"img-wrap"},[a("v-uni-image",{attrs:{src:t.image,alt:""}}),a("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))])],1),e.levelList.length!=i+1?a("v-uni-view",{staticClass:"dash"}):e._e()],1)})),1)],1),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"big-img"},[a("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:e.userLevel.image,alt:""}})]),a("v-uni-view",{staticClass:"current-level"},[e._v("当前等级："+e._s(e.userLevel.name))])],1),e.nextLevel?a("v-uni-view",{staticClass:"flex next-level-tip",staticStyle:{"flex-direction":"row"}},[e._v("还需消费"+e._s(e.nextLevel.money-e.currConsume)+"元可升级至"),a("span",{staticStyle:{olor:"#61c9f0"}},[e._v(e._s(e.nextLevel.name))])]):e._e()],1)},s=[]},"804d":function(e,t,a){"use strict";a.r(t);var i=a("5f99"),n=a("5398");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("a470");var l=a("f0c5"),r=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"002ae62e",null,!1,i["a"],void 0);t["default"]=r.exports},a470:function(e,t,a){"use strict";var i=a("0593"),n=a.n(i);n.a},dc5d:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".next-level-tip[data-v-002ae62e]{margin-top:30px;height:17px;font-size:12px;font-weight:700;color:#363636;line-height:17px}.flex[data-v-002ae62e]{display:flex;align-items:center;flex-direction:column;justify-content:center}.left[data-v-002ae62e]{color:#61c9f0;font-size:14px}.right[data-v-002ae62e]{color:#d2d2d2;font-size:14px}.exp-num[data-v-002ae62e]{margin-bottom:16px}.current-level[data-v-002ae62e]{height:36px;margin-bottom:16px;font-size:24px;font-weight:500;color:#363636;line-height:36px}.big-img[data-v-002ae62e]{width:155px}.dash[data-v-002ae62e]{width:14px;height:2px;background-color:#ececec;border-radius:4px;margin:0 10px}.name[data-v-002ae62e]{position:absolute;text-align:center;bottom:-20px;font-size:12px;width:48px}.img-wrap[data-v-002ae62e]{display:flex;position:relative;-webkit-box-pack:center;justify-content:center;width:35px;height:35px;background:#e5e5e5;border-radius:50%;align-items:center}.img-wrap uni-image[data-v-002ae62e]{width:22px;height:22px}.item[data-v-002ae62e]{display:flex;-webkit-box-align:center;align-items:center}.list-wrap[data-v-002ae62e]{display:flex;margin-top:50px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:48px}",""]),e.exports=t},e724:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("1b43"),n={data:function(){return{levelList:[],userLevel:{},nextLevel:{},currConsume:0}},onLoad:function(){var e=this;(0,i.list)().then((function(t){var a=t.data,i=a.list,n=a.userLevel,s=a.nextLevel,l=a.currConsume;e.levelList=i,e.userLevel=n,e.nextLevel=s,e.currConsume=l}))},methods:{comeback:function(){this.$utils.comeback()}}};t.default=n}}]);