!function(a){function t(t){for(var r,s,i=t[0],f=t[1],c=t[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(a[r]=f[r]);for(l&&l(t);m.length;)m.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var a,t=0;t<n.length;t++){for(var e=n[t],r=!0,i=1;i<e.length;i++){var f=e[i];0!==o[f]&&(r=!1)}r&&(n.splice(t--,1),a=s(s.s=e[0]))}return a}var r={},o={app:0},n=[];function s(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=a,s.c=r,s.d=function(a,t,e){s.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},s.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,t){if(1&t&&(a=s(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)s.d(e,r,function(t){return a[t]}.bind(null,r));return e},s.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return s.d(t,"a",t),t},s.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=f;n.push([0,"chunk-vendors"]),e()}({0:function(a,t,e){a.exports=e("56d7")},3382:function(a,t,e){},"56d7":function(a,t,e){"use strict";e.r(t),e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=(e("4de4"),{name:"",components:{},data:function(){return{formData:{age:"",tra:"",trp:"",choose:1,accum:5,mip:""}}},computed:{cRules:function(){var a=this;return{age:[{required:!0,message:"必填"},{pattern:/^((1[8-9])|(2[0-9])|(3[0-9])|(4[0-9])|(5[0-9])|60)$/,message:"请输入18-60"}],tra:[{required:!0,message:"必选"}],trp:[{required:!0,message:"必选"}],accum:[{required:!0,message:"必填"},{pattern:/^\d{1,}$/,message:"请输入数字"},{validator:function(t,e,r){a.formData.tra-a.formData.age?(+e<5||+e>(a.formData.tra-a.formData.age||5))&&r(new Error("5-".concat(a.formData.tra-a.formData.age||5,"之前的数字"))):+e<5||+e>(a.formData.tra-a.formData.age||5)?r(new Error("请输入5")):r()}}],mip:[{required:!0,message:"必选"}]}},cTra:function(){return+this.formData.age<=30&&+this.formData.age>=18?[40,45,50,55,60,65,70]:+this.formData.age<=35&&+this.formData.age>=31?[45,50,55,60,65,70]:+this.formData.age<=40&&+this.formData.age>=36?[50,55,60,65,70]:+this.formData.age<=45&&+this.formData.age>=41?[55,60,65,70]:+this.formData.age<=50&&+this.formData.age>=46?[60,65,70]:+this.formData.age<=55&&+this.formData.age>=51?[65,70]:+this.formData.age<=60&&+this.formData.age>=56?[70]:[]},cTra1:function(){if(this.formData.trp){var a=[];a=+this.formData.age<=30&&+this.formData.age>=18?[40,45,50,55,60,65,70]:+this.formData.age<=35&&+this.formData.age>=31?[45,50,55,60,65,70]:+this.formData.age<=40&&+this.formData.age>=36?[50,55,60,65,70]:+this.formData.age<=45&&+this.formData.age>=41?[55,60,65,70]:+this.formData.age<=50&&+this.formData.age>=46?[60,65,70]:+this.formData.age<=55&&+this.formData.age>=51?[65,70]:+this.formData.age<=60&&+this.formData.age>=56?[70]:[];var t=85-this.formData.trp;return a.filter((function(a){return a<=t}))}return[]},cTrp:function(){if(this.formData.tra){var a=85-this.formData.tra;return[10,15,20,25,30].filter((function(t){return t<=a}))}return[]},cTrp1:function(){return this.formData.age?+this.formData.age<=45&&+this.formData.age>=18?[10,15,20,25,30]:+this.formData.age<=50&&+this.formData.age>=46?[10,15,20,25]:+this.formData.age<=55&&+this.formData.age>=51?[10,15,20]:+this.formData.age<=60&&+this.formData.age>=56?[10,15]:[]:[]},cMip:function(){var a=this.formData.tra-this.formData.age-this.formData.accum;return[5,8,12,16].filter((function(t){return t<=a}))}},watch:{"formData.age":function(){this.formData.tra="",this.formData.trp="",this.formData.mip="",this.formData.accum=5}},methods:{chooseChange:function(){this.formData.tra="",this.formData.trp="",this.formData.mip="",this.formData.accum=5}}}),n=(e("949e"),e("2877")),s={name:"App",components:{Index:Object(n.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-form",{ref:"form",attrs:{"label-width":"200px",model:a.formData,rules:a.cRules},nativeOn:{submit:function(a){a.preventDefault()}}},[e("h2",[a._v("Nancy Tools modified v2")]),e("el-form-item",{attrs:{label:"Age",prop:"age"}},[e("el-input",{staticClass:"w360",attrs:{placeholder:"input age"},model:{value:a.formData.age,callback:function(t){a.$set(a.formData,"age",t)},expression:"formData.age"}})],1),e("el-form-item",{attrs:{label:"TRA Choose"}},[e("el-radio-group",{on:{change:a.chooseChange},model:{value:a.formData.choose,callback:function(t){a.$set(a.formData,"choose",t)},expression:"formData.choose"}},[e("el-radio",{attrs:{label:1}},[a._v("Yes")]),e("el-radio",{attrs:{label:0}},[a._v("No")])],1)],1),1===a.formData.choose?[e("el-form-item",{attrs:{label:"TRA",prop:"tra"}},[e("el-select",{staticClass:"w360",model:{value:a.formData.tra,callback:function(t){a.$set(a.formData,"tra",t)},expression:"formData.tra"}},a._l(a.cTra,(function(a,t){return e("el-option",{key:t,attrs:{label:a,value:a}})})),1),e("span",{staticClass:"after"},[a._v("TRA可选: "+a._s(a.cTra))])],1),e("el-form-item",{attrs:{label:"TRP",prop:"trp"}},[e("el-select",{staticClass:"w360",model:{value:a.formData.trp,callback:function(t){a.$set(a.formData,"trp",t)},expression:"formData.trp"}},a._l(a.cTrp,(function(a,t){return e("el-option",{key:t,attrs:{label:a,value:a}})})),1),e("span",{staticClass:"after"},[a._v("TRP可选: "+a._s(a.cTrp))])],1)]:[e("el-form-item",{attrs:{label:"TRA",prop:"tra"}},[e("el-select",{staticClass:"w360",model:{value:a.formData.tra,callback:function(t){a.$set(a.formData,"tra",t)},expression:"formData.tra"}},a._l(a.cTra1,(function(a,t){return e("el-option",{key:t,attrs:{label:a,value:a}})})),1),e("span",{staticClass:"after"},[a._v("TRA可选: "+a._s(a.cTra1))])],1),e("el-form-item",{attrs:{label:"TRP",prop:"trp"}},[e("el-select",{staticClass:"w360",model:{value:a.formData.trp,callback:function(t){a.$set(a.formData,"trp",t)},expression:"formData.trp"}},a._l(a.cTrp1,(function(a,t){return e("el-option",{key:t,attrs:{label:a,value:a}})})),1),e("span",{staticClass:"after"},[a._v("TRP可选: "+a._s(a.cTrp1))])],1)],e("el-form-item",{attrs:{label:"Accum",prop:"accum"}},[e("el-input",{staticClass:"w360",model:{value:a.formData.accum,callback:function(t){a.$set(a.formData,"accum",t)},expression:"formData.accum"}})],1),e("el-form-item",{attrs:{label:"MIP",prop:"mip"}},[e("el-select",{staticClass:"w360",model:{value:a.formData.mip,callback:function(t){a.$set(a.formData,"mip",t)},expression:"formData.mip"}},a._l(a.cMip,(function(a,t){return e("el-option",{key:t,attrs:{label:a,value:a}})})),1),e("span",{staticClass:"after"},[a._v("Mip可选: "+a._s(a.cMip))])],1)],2)}),[],!1,null,"1e7f8874",null).exports}},i=(e("5c0b"),Object(n.a)(s,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"app"}},[t("Index")],1)}),[],!1,null,null,null)).exports,f=e("5c96"),c=e.n(f),l=(e("0fae"),e("9483"));Object(l.a)("/nancy-tool/service-worker.js",{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){f.MessageBox.confirm("当前有新的的内容，请刷新浏览器","提示",{type:"warning",closeOnClickModal:!1,showCancelButton:!1,showClose:!1,closeOnPressEscape:!1}).then((function(){window.location.reload()}))},offline:function(){},error:function(){}}),r.default.use(c.a),r.default.config.productionTip=!1,new r.default({render:function(a){return a(i)}}).$mount("#app")},"5c0b":function(a,t,e){"use strict";var r=e("9c0c");e.n(r).a},"949e":function(a,t,e){"use strict";var r=e("3382");e.n(r).a},"9c0c":function(a,t,e){}});