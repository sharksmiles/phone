(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login"],{"0457":function(t,e,n){"use strict";var i=n("555a"),a=n.n(i);a.a},"0529":function(t,e,n){"use strict";n.r(e);var i=n("b42a"),a=n("89b1");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c400");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"f9c51590",null,!1,i["a"],void 0);e["default"]=s.exports},"15a9":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("034b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-checkbox",style:[t.checkboxStyle]},[n("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[t.iconClass],style:[t.iconStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle.apply(void 0,arguments)}}},[n("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:t.checkboxIconSize,color:t.iconColor}})],1),n("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:t.$u.addUnit(t.labelSize)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLabel.apply(void 0,arguments)}}},[t._t("default")],2)],1)},o=[]},1652:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("d81d"),n("d3b7"),n("14d9"),n("c975");var i={name:"u-form",props:{model:{type:Object,default:function(){return{}}},errorType:{type:Array,default:function(){return["message","toast"]}},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:90},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:function(){return{}}}},provide:function(){return{uForm:this}},data:function(){return{rules:{}}},created:function(){this.fields=[]},methods:{setRules:function(t){this.rules=t},resetFields:function(){this.fields.map((function(t){t.resetField()}))},validate:function(t){var e=this;return new Promise((function(n){var i=!0,a=0,o=[];e.fields.map((function(r){r.validation("",(function(r){r&&(i=!1,o.push(r)),++a===e.fields.length&&(n(i),-1===e.errorType.indexOf("none")&&e.errorType.indexOf("toast")>=0&&o.length&&e.$u.toast(o[0]),"function"==typeof t&&t(i))}))}))}))}}};e.default=i},"1de6":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("14d9"),n("d81d");var i={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var t={};return this.elActiveColor&&this.value&&!this.isDisabled&&(t.borderColor=this.elActiveColor,t.backgroundColor=this.elActiveColor),t.width=this.$u.addUnit(this.checkboxSize),t.height=this.$u.addUnit(this.checkboxSize),t},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var t=[];return t.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&t.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled--checked"),t.join(" ")},checkboxStyle:function(){var t={};return this.parent&&this.parent.width&&(t.width=this.parent.width,t.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(t.width="100%",t.flex="0 0 100%"),t}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var t=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){t.parent&&t.parent.emitEvent&&t.parent.emitEvent()}),80)},setValue:function(){var t=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(e){e.value&&t++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&t>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};e.default=i},"29a2":function(t,e,n){"use strict";var i=n("c287"),a=n.n(i);a.a},"2d92":function(t,e,n){"use strict";n.r(e);var i=n("1de6"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"2da1":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("d81d"),n("14d9");var a=i(n("6b27")),o={name:"u-checkbox-group",mixins:[a.default],props:{max:{type:[Number,String],default:999},disabled:{type:Boolean,default:!1},name:{type:[Boolean,String],default:""},labelDisabled:{type:Boolean,default:!1},shape:{type:String,default:"square"},activeColor:{type:String,default:"#2979ff"},size:{type:[String,Number],default:34},width:{type:String,default:"auto"},wrap:{type:Boolean,default:!1},iconSize:{type:[String,Number],default:20}},data:function(){return{}},created:function(){this.children=[]},methods:{emitEvent:function(){var t=this,e=[];this.children.map((function(t){t.value&&e.push(t.name)})),this.$emit("change",e),setTimeout((function(){t.dispatch("u-form-item","on-form-change",e)}),60)}}};e.default=o},"2ea8":function(t,e,n){"use strict";var i=n("971b"),a=n.n(i);a.a},3177:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-code-wrap[data-v-5e7aef95]{width:0;height:0;position:fixed;z-index:-1}',""]),t.exports=e},"33e4":function(t,e,n){"use strict";n.r(e);var i=n("da46"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"34be":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=e},"43d1":function(t,e,n){"use strict";n.r(e);var i=n("e04d"),a=n("cb0d");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2ea8");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"9764c8b0",null,!1,i["a"],void 0);e["default"]=s.exports},4845:function(t,e,n){"use strict";n.r(e);var i=n("9970"),a=n("8cfa");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("29a2");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5e7aef95",null,!1,i["a"],void 0);e["default"]=s.exports},"52e3":function(t,e,n){"use strict";var i=n("860e"),a=n.n(i);a.a},"555a":function(t,e,n){var i=n("6976");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("440dd963",i,!0,{sourceMap:!1,shadowMode:!1})},6976:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".loginWrap .imgWrap[data-v-3f79d01c]{text-align:center;padding:%?50?%}.loginWrap .loginForm .uni-form-item[data-v-3f79d01c]{display:flex;align-items:center;justify-content:space-between;border-bottom:%?1?% solid #dcdcdc;padding:%?10?% %?30?%;margin:%?20?%}.loginWrap .loginForm .uni-form-item u-input[data-v-3f79d01c]{flex:1}.loginWrap .loginForm .uni-form-item .forgetText[data-v-3f79d01c]{color:#c8c7cc}.loginWrap .loginForm .wrap[data-v-3f79d01c]{height:auto}.loginWrap .loginForm .loginbtn[data-v-3f79d01c]{margin:%?20?%;margin-top:%?60?%}.loginWrap .action[data-v-3f79d01c]{padding:%?10?% %?30?%}",""]),t.exports=e},"860e":function(t,e,n){var i=n("be79");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("c0494cba",i,!0,{sourceMap:!1,shadowMode:!1})},"89b1":function(t,e,n){"use strict";n.r(e);var i=n("1652"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"8c20":function(t,e,n){"use strict";n.r(e);var i=n("8d2b"),a=n("33e4");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0457");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"3f79d01c",null,!1,i["a"],void 0);e["default"]=s.exports},"8cfa":function(t,e,n){"use strict";n.r(e);var i=n("cd95"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"8d2b":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uForm:n("0529").default,uInput:n("31c4").default,uToast:n("43d1").default,uVerificationCode:n("4845").default,uButton:n("366d").default,uCheckboxGroup:n("bad0").default,uCheckbox:n("a4f4").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"loginWrap "},[i("v-uni-view",{staticClass:"imgWrap"},[i("v-uni-image",{staticClass:"logo",staticStyle:{width:"100upx",height:"100upx"},attrs:{src:n("904e"),mode:""}})],1),i("u-form",{staticClass:"loginForm",attrs:{model:t.form}},[1==t.loginWay?[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("u-input",{attrs:{placeholder:"请输入登录账号",type:"number",clearable:!0},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("u-input",{attrs:{type:"password",placeholder:"请输入密码","password-icon":!0},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)]:t._e(),2==t.loginWay?[i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("u-input",{attrs:{maxlength:"11",placeholder:"请输入手机号码",type:"number"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("u-input",{attrs:{maxlength:"4",placeholder:"请输入验证码",type:"number"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),i("v-uni-view",{staticClass:"wrap"},[i("u-toast",{ref:"uToast"}),i("u-verification-code",{ref:"uCode",attrs:{seconds:t.seconds},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}}),i("u-button",{staticStyle:{"background-color":"#61c9f0"},attrs:{type:"success",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.tips))])],1)],1)]:t._e(),i("p",{staticStyle:{"font-size":"14px",margin:"30px 15px","text-align":"center"}},[i("u-checkbox-group",{attrs:{shape:"circle"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxGroupChange.apply(void 0,arguments)}}},[i("u-checkbox",{attrs:{"active-color":"red"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("我已阅读并同意"),i("span",{staticStyle:{color:"#61c9f0","text-decoration":"underline"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$utils.handleNavigate("/pages/common/xieyi?name=userAgreement")}}},[t._v("《服务协议》")])])],1)],1),i("u-button",{staticClass:"loginbtn",staticStyle:{"background-color":"#61c9f0"},attrs:{disabled:!t.checked,type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[t._v("登录")])],2),i("v-uni-view",{staticClass:"action center"},[i("v-uni-text",{staticStyle:{color:"#71B6F7"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginWay.apply(void 0,arguments)}}},[t._v(t._s(2==t.loginWay?"账号密码登录":"短信验证登录"))])],1)],1)},o=[]},"8f15":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-toast[data-v-9764c8b0]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-9764c8b0]{opacity:1}.u-icon[data-v-9764c8b0]{margin-right:%?10?%;display:flex;flex-direction:row;align-items:center;line-height:normal}.u-position-center[data-v-9764c8b0]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-9764c8b0]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-9764c8b0]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-9764c8b0]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-9764c8b0]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-9764c8b0]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-9764c8b0]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-9764c8b0]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-9764c8b0]{color:#fff;background-color:#585858}',""]),t.exports=e},"904e":function(t,e,n){t.exports=n.p+"static/img/logo.7a9574bc.png"},"945e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-checkbox-group u-clearfix"},[this._t("default")],2)},a=[]},"971b":function(t,e,n){var i=n("8f15");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1cfab741",i,!0,{sourceMap:!1,shadowMode:!1})},9970:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-code-wrap"})},a=[]},a4f4:function(t,e,n){"use strict";n.r(e);var i=n("15a9"),a=n("2d92");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("52e3");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"7e6e0538",null,!1,i["a"],void 0);e["default"]=s.exports},b42a:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-form"},[this._t("default")],2)},a=[]},bad0:function(t,e,n){"use strict";n.r(e);var i=n("945e"),a=n("d829");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("e9b2");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"2c57e935",null,!1,i["a"],void 0);e["default"]=s.exports},be79:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-checkbox[data-v-7e6e0538]{display:inline-flex;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-7e6e0538]{color:#606266;flex:none;display:-webkit-flex;display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-7e6e0538]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-7e6e0538]{border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-7e6e0538]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-7e6e0538]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-7e6e0538]{color:#c8c9cc!important}.u-checkbox__label[data-v-7e6e0538]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-7e6e0538]{color:#c8c9cc}',""]),t.exports=e},c287:function(t,e,n){var i=n("3177");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("ba8f201e",i,!0,{sourceMap:!1,shadowMode:!1})},c400:function(t,e,n){"use strict";var i=n("f70d"),a=n.n(i);a.a},cb0d:function(t,e,n){"use strict";n.r(e);var i=n("ef68"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},cd95:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f"),n("5319");var i={name:"u-verification-code",props:{seconds:{type:[String,Number],default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"X秒重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(t){this.secNum=t}}},methods:{checkKeepRunning:function(){var t=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!t)return this.changeEvent(this.startText);var e=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>e?(this.secNum=t-e,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var t=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--t.secNum?t.changeEvent(t.changeText.replace(/x|X/,t.secNum)):(clearInterval(t.timer),t.timer=null,t.changeEvent(t.endText),t.secNum=t.seconds,t.$emit("end"),t.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(t){this.$emit("change",t)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var t=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:t+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};e.default=i},d829:function(t,e,n){"use strict";n.r(e);var i=n("2da1"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},da46:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4");var i=n("0630"),a={data:function(){return{form:{mobile:"",code:"",password:null},loginWay:2,seconds:60,tips:"",checked:!1}},methods:{formSubmit:function(){var t=this.loginWay,e=this.form;if(this.$u.test.mobile(e.mobile)){if(2==t){if(4!=e.code.length)return void this.$u.toast("请输入正确验证码")}else if(this.$utils.isEmpty(e.password))return void this.$u.toast("请输入密码");e.loginWay=t,this.$store.dispatch("user/login",e)}else this.$u.toast("请输入正确手机号")},changeLoginWay:function(){this.loginWay=1==this.loginWay?2:1},codeChange:function(t){this.tips=t},getCode:function(){var t=this;this.$refs.uCode.canGetCode&&(uni.showLoading({title:"正在获取验证码"}),(0,i.sendCode)({mobile:this.form.mobile,event:"mobilelogin"}).then((function(e){t.$refs.uCode.start()})))},submit:function(){this.$refs.uForm.validate((function(t){console.log(t),t?console.log("验证通过"):console.log("验证失败")}))},checkboxChange:function(t){},checkboxGroupChange:function(t){}}};e.default=a},df19:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-checkbox-group[data-v-2c57e935]{display:inline-flex;flex-wrap:wrap}',""]),t.exports=e},e04d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("034b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?n("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),n("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},o=[]},e9b2:function(t,e,n){"use strict";var i=n("f81e"),a=n.n(i);a.a},ef68:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("c975"),n("b64b"),n("ac1f"),n("00b4");var i={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=i},f70d:function(t,e,n){var i=n("34be");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("ffd4708a",i,!0,{sourceMap:!1,shadowMode:!1})},f81e:function(t,e,n){var i=n("df19");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("43b1b433",i,!0,{sourceMap:!1,shadowMode:!1})}}]);