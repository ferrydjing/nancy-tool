!function(t){function a(a){for(var r,s,i=a[0],f=a[1],c=a[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(t[r]=f[r]);for(l&&l(a);m.length;)m.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,i=1;i<e.length;i++){var f=e[i];0!==o[f]&&(r=!1)}r&&(n.splice(a--,1),t=s(s.s=e[0]))}return t}var r={},o={app:0},n=[];function s(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)s.d(e,r,function(a){return t[a]}.bind(null,r));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],f=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var l=f;n.push([0,"chunk-vendors"]),e()}({0:function(t,a,e){t.exports=e("56d7")},"32e9":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a),e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=(e("4de4"),{name:"",components:{},data:function(){return{formData:{age:"",tra:"",trp:"",choose:1,accum:5,mip:""}}},computed:{cRules:function(){var t=this;return{age:[{required:!0,message:"必填"},{pattern:/^((1[8-9])|(2[0-9])|(3[0-9])|(4[0-9])|(5[0-9])|60)$/,message:"请输入18-60"}],tra:[{required:!0,message:"必选"}],trp:[{required:!0,message:"必选"}],accum:[{required:!0,message:"必填"},{pattern:/^\d{1,}$/,message:"请输入数字"},{validator:function(a,e,r){t.formData.tra-t.formData.age?(+e<5||+e>(t.formData.tra-t.formData.age||5))&&r(new Error("5-".concat(t.formData.tra-t.formData.age||5,"之前的数字"))):+e<5||+e>(t.formData.tra-t.formData.age||5)?r(new Error("请输入5")):r()}}],mip:[{required:!0,message:"必选"}]}},cTra:function(){return+this.formData.age<=30&&+this.formData.age>=18?[40,45,50,55,60,65,70]:+this.formData.age<=35&&+this.formData.age>=31?[45,50,55,60,65,70]:+this.formData.age<=40&&+this.formData.age>=36?[50,55,60,65,70]:+this.formData.age<=45&&+this.formData.age>=41?[55,60,65,70]:+this.formData.age<=50&&+this.formData.age>=46?[60,65,70]:+this.formData.age<=55&&+this.formData.age>=51?[65,70]:+this.formData.age<=60&&+this.formData.age>=56?[70]:[]},cTra1:function(){if(this.formData.trp){var t=[];t=+this.formData.age<=30&&+this.formData.age>=18?[40,45,50,55,60,65,70]:+this.formData.age<=35&&+this.formData.age>=31?[45,50,55,60,65,70]:+this.formData.age<=40&&+this.formData.age>=36?[50,55,60,65,70]:+this.formData.age<=45&&+this.formData.age>=41?[55,60,65,70]:+this.formData.age<=50&&+this.formData.age>=46?[60,65,70]:+this.formData.age<=55&&+this.formData.age>=51?[65,70]:+this.formData.age<=60&&+this.formData.age>=56?[70]:[];var a=85-this.formData.trp;return t.filter((function(t){return t<=a}))}return[]},cTrp:function(){if(this.formData.tra){var t=85-this.formData.tra;return[10,15,20,25,30].filter((function(a){return a<=t}))}return[]},cTrp1:function(){return this.formData.age?+this.formData.age<=45&&+this.formData.age>=18?[10,15,20,25,30]:+this.formData.age<=50&&+this.formData.age>=46?[10,15,20,25]:+this.formData.age<=55&&+this.formData.age>=51?[10,15,20]:+this.formData.age<=60&&+this.formData.age>=56?[10,15]:[]:[]},cMip:function(){var t=this.formData.tra-this.formData.age-this.formData.accum;return[5,8,12,16].filter((function(a){return a<=t}))}},watch:{"formData.age":function(){this.formData.tra="",this.formData.trp="",this.formData.mip="",this.formData.accum=5}},methods:{chooseChange:function(){this.formData.tra="",this.formData.trp="",this.formData.mip="",this.formData.accum=5}}}),n=(e("e474"),e("2877")),s={name:"App",components:{Index:Object(n.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-form",{ref:"form",attrs:{"label-width":"200px",model:t.formData,rules:t.cRules},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"Age",prop:"age"}},[e("el-input",{staticClass:"w360",attrs:{placeholder:"input age"},model:{value:t.formData.age,callback:function(a){t.$set(t.formData,"age",a)},expression:"formData.age"}})],1),e("el-form-item",{attrs:{label:"TRA Choose"}},[e("el-radio-group",{on:{change:t.chooseChange},model:{value:t.formData.choose,callback:function(a){t.$set(t.formData,"choose",a)},expression:"formData.choose"}},[e("el-radio",{attrs:{label:1}},[t._v("Yes")]),e("el-radio",{attrs:{label:0}},[t._v("No")])],1)],1),1===t.formData.choose?[e("el-form-item",{attrs:{label:"TRA",prop:"tra"}},[e("el-select",{staticClass:"w360",model:{value:t.formData.tra,callback:function(a){t.$set(t.formData,"tra",a)},expression:"formData.tra"}},t._l(t.cTra,(function(t,a){return e("el-option",{key:a,attrs:{label:t,value:t}})})),1),e("span",{staticClass:"after"},[t._v("TRA可选: "+t._s(t.cTra))])],1),e("el-form-item",{attrs:{label:"TRP",prop:"trp"}},[e("el-select",{staticClass:"w360",model:{value:t.formData.trp,callback:function(a){t.$set(t.formData,"trp",a)},expression:"formData.trp"}},t._l(t.cTrp,(function(t,a){return e("el-option",{key:a,attrs:{label:t,value:t}})})),1),e("span",{staticClass:"after"},[t._v("TRP可选: "+t._s(t.cTrp))])],1)]:[e("el-form-item",{attrs:{label:"TRA",prop:"tra"}},[e("el-select",{staticClass:"w360",model:{value:t.formData.tra,callback:function(a){t.$set(t.formData,"tra",a)},expression:"formData.tra"}},t._l(t.cTra1,(function(t,a){return e("el-option",{key:a,attrs:{label:t,value:t}})})),1),e("span",{staticClass:"after"},[t._v("TRA可选: "+t._s(t.cTra1))])],1),e("el-form-item",{attrs:{label:"TRP",prop:"trp"}},[e("el-select",{staticClass:"w360",model:{value:t.formData.trp,callback:function(a){t.$set(t.formData,"trp",a)},expression:"formData.trp"}},t._l(t.cTrp1,(function(t,a){return e("el-option",{key:a,attrs:{label:t,value:t}})})),1),e("span",{staticClass:"after"},[t._v("TRP可选: "+t._s(t.cTrp1))])],1)],e("el-form-item",{attrs:{label:"Accum",prop:"accum"}},[e("el-input",{staticClass:"w360",model:{value:t.formData.accum,callback:function(a){t.$set(t.formData,"accum",a)},expression:"formData.accum"}})],1),e("el-form-item",{attrs:{label:"MIP",prop:"mip"}},[e("el-select",{staticClass:"w360",model:{value:t.formData.mip,callback:function(a){t.$set(t.formData,"mip",a)},expression:"formData.mip"}},t._l(t.cMip,(function(t,a){return e("el-option",{key:a,attrs:{label:t,value:t}})})),1),e("span",{staticClass:"after"},[t._v("Mip可选: "+t._s(t.cMip))])],1)],2)}),[],!1,null,"3016ecfd",null).exports}},i=(e("5c0b"),Object(n.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Index")],1)}),[],!1,null,null,null)).exports,f=e("5c96"),c=e.n(f),l=(e("0fae"),e("9483"));Object(l.a)("/service-worker.js",{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){f.MessageBox.confirm("当前有新的的内容，请刷新浏览器","提示",{type:"warning",closeOnClickModal:!1,showCancelButton:!1,showClose:!1}).then((function(){window.location.reload()}))},offline:function(){},error:function(){}}),r.default.use(c.a),r.default.config.productionTip=!1,new r.default({render:function(t){return t(i)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var r=e("9c0c");e.n(r).a},"9c0c":function(t,a,e){},e474:function(t,a,e){"use strict";var r=e("32e9");e.n(r).a}});