webpackJsonp([1,2],{102:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(15),s=n(40),i=n.n(s),l=n(14);a.a.config.productionTip=!1,new a.a({el:"#app",router:l.a,render:function(t){return t(i.a)}})},14:function(t,e,n){"use strict";var a=n(15),s=n(99),i=n(92),l=n.n(i),r=n(94),o=n.n(r),u=n(87),c=(n.n(u),n(86));n.n(c);a.a.use(s.a),e.a=new s.a({routes:[{path:"/aligner/:id",name:"aligner",component:l.a},{path:"/",name:"welcome",component:o.a}]})},16:function(t,e,n){"use strict";var a=n(8);e.a={data:{user:null,token:null},signin:function(){var t=this;return a.a.signin.post().then(function(e){return t.data.user=e,t.data.token=e.id,t.save(),t.data})},loadSaved:function(){var t=localStorage.getItem("aligner-user-id"),e=localStorage.getItem("aligner-user-token");return null!==t&&null!=e&&(this.data.user={id:t},this.data.token=e,!0)},save:function(){localStorage.setItem("aligner-user-id",this.data.user.id),localStorage.setItem("aligner-user-token",this.data.token)},setCustom:function(t,e){this.data.user=t,this.data.token=e,this.save()}}},17:function(t,e,n){"use strict";e.a={started:!1,userIdFromUrl:null,openRoute:null,langPairs:null,titles:{methods:{yalign:"Y-method",hunalign:"H-method"},formats:{plaintext:"Plain Text",tmx:"TMS",tsv:"TSV"}}}},40:function(t,e,n){n(89);var a=n(13)(n(42),n(96),null,null);t.exports=a.exports},41:function(t,e,n){"use strict";function a(t,e){var n=t.split("{}"),a="";return n.forEach(function(t,n){a+=t,n<e.length&&(a+=encodeURIComponent(e[n]))}),a}function s(t){var e="";return f.a.forOwn(t,function(t,n){e+=encodeURIComponent(n)+"="+encodeURIComponent(t)}),e}var i=n(46),l=n.n(i),r=n(26),o=n.n(r),u=n(48),c=n.n(u),p=n(49),d=n.n(p),h=n(38),f=n.n(h),v=n(16),g=function(){function t(){c()(this,t),this._method=null,this._url=null,this._params={},this._payload=null,this._file=null,this._auth=!1}return d()(t,[{key:"url",value:function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);return this._url=a(t,e),this}},{key:"get",value:function(){return this._method="GET",this}},{key:"post",value:function(){return this._method="POST",this}},{key:"put",value:function(){return this._method="PUT",this}},{key:"params",value:function(t){return f.a.isUndefined(t)?this:(f.a.assign(this._params,t),this)}},{key:"payload",value:function(t){return this._payload=t,this}},{key:"file",value:function(t){return this._file=t,this}},{key:"auth",value:function(){return this._auth=!0,this}},{key:"promise",value:function(){return null===this._file?this.promiseRequest():this.promiseUpload()}},{key:"promiseRequest",value:function(){var t=this;return t._auth&&t.params({token:v.a.data.token}),new o.a(function(e,n){var a=new XMLHttpRequest;a.onload=function(t){if(200===a.status)e(JSON.parse(a.responseText));else try{n(JSON.parse(a.responseText))}catch(t){n({error:"Server error "+a.status.toString()})}},a.onerror=function(){n({error:"request failed"})};var i=s(t._params);""===i?a.open(t._method,t._url):a.open(t._method,t._url+"?"+i),a.setRequestHeader("Content-Type","application/json"),null===t._payload?a.send():a.send(l()(t._payload))})}},{key:"promiseUpload",value:function(){var t=this;return t._auth&&t.params({token:v.a.data.token}),new o.a(function(e,n){var a=new XMLHttpRequest,i=new FormData;i.append(t._file.name,t._file),a.onload=function(t){200===a.status?e():n({error:"Server error "+a.status.toString()})},a.onerror=function(){n({error:"request failed"})};var l=s(t._params);""===l?a.open(t._method,t._url):a.open(t._method,t._url+"?"+l),a.send(i)})}}]),t}();e.a=g},42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(15),s=n(93),i=n.n(s);a.a.component("my-tasks",i.a),e.default={name:"app"}},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(26),s=n.n(a),i=n(14),l=n(17),r=n(8);e.default={name:"aligner",data:function(){return{titles:l.a.titles,status:"new",alignMethods:["yalign","hunalign"],outputFormats:["plaintext","tmx","tsv"],langs:[],alignTask:{method:"yalign",langs:null,output:"plaintext",filePairs:[]},newFile1:null,newFile2:null}},methods:{getLang:function(t){return null!==this.alignTask.langs?this.alignTask.langs[t]:""},isReady:function(){return"new"===this.status&&this.alignTask.filePairs.length>0},selectFile1:function(){this.$refs.newFileInput1.click()},setFile1:function(){this.$refs.newFileInput1.files.length>0&&(this.newFile1=this.$refs.newFileInput1.files[0]),this.updateFilesList()},selectFile2:function(){this.$refs.newFileInput2.click()},setFile2:function(){this.$refs.newFileInput2.files.length>0&&(this.newFile2=this.$refs.newFileInput2.files[0]),this.updateFilesList()},updateFilesList:function(){null!==this.newFile1&&null!==this.newFile2&&(this.alignTask.filePairs.push([this.newFile1,this.newFile2]),this.newFile1=null,this.newFile2=null)},upload:function(){var t=this;if("new"===this.status){this.status="uploading";var e={method:this.alignTask.method,output:this.alignTask.output,lang1:this.alignTask.langs[0],lang2:this.alignTask.langs[1]};r.a.tasks.post(e).then(function(e){var n=[];t.alignTask.filePairs.forEach(function(a,s){n.push(r.a.tasksByIdByPairIdByLangInputPairs.post(e.id,s.toString(),t.alignTask.langs[0],a[0])),n.push(r.a.tasksByIdByPairIdByLangInputPairs.post(e.id,s.toString(),t.alignTask.langs[1],a[1]))}),s.a.all(n).then(function(){return r.a.taskByIdEnqueued.put(e.id)}).then(function(){return t.status="done",null})})}},resetForm:function(){this.alignTask={method:"yalign",langs:l.a.langPairs[0],output:"plaintext",filePairs:[]},this.newFile1=null,this.newFile2=null,this.status="new"}},beforeCreate:function(){l.a.started||(l.a.userIdFromUrl=this.$route.params.id,l.a.openRoute={name:this.$route.name,params:this.$route.params},i.a.push({name:"welcome"}))},created:function(){l.a.started&&(this.langs=l.a.langPairs,this.alignTask.langs=l.a.langPairs[0])}}},44:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),s=n.n(a),i=n(17),l=n(8),r=n(16);e.default={name:"my-tasks",data:function(){return{titles:i.a.titles,timer:null,auth:r.a,tasks:[],pages:[],perPage:4,page:0,selected:[]}},methods:{nextPage:function(){this.page+=1,this.updatePage()},prevPage:function(){this.page-=1,this.updatePage()},updatePage:function(){this.page>=this.pages.length&&(this.page=this.pages.length-1),this.page<0&&(this.page=0),this.selected=this.pages[this.page]},getTasks:function(){var t=this;l.a.meTasks.get().then(function(e){t.tasks=e.data,t.pages=s.a.chunk(t.tasks,t.perPage),t.updatePage()})}},created:function(){i.a.started&&(this.getTasks(),this.timer=setInterval(this.getTasks,5e3))},destroyed:function(){null!==this.timer&&clearInterval(this.timer)}}},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(14),s=n(17),i=n(16),l=n(8);e.default={name:"welcome",data:function(){return{}},methods:{start:function(){s.a.started=!0,null!==s.a.openRoute?a.a.push(s.a.openRoute):a.a.push({name:"aligner",params:{id:i.a.data.user.id}})},updateLangPairs:function(){return l.a.langpairs.get().then(function(t){s.a.langPairs=t.data})}},created:function(){var t=this;null!==s.a.userIdFromUrl?(i.a.setCustom({id:s.a.userIdFromUrl},s.a.userIdFromUrl),this.updateLangPairs().then(this.start)):i.a.loadSaved()?this.updateLangPairs().then(this.start):i.a.signin().then(t.updateLangPairs).then(t.start)}}},8:function(t,e,n){"use strict";var a=n(41);e.a={signin:{post:function(){return(new a.a).url("/api/users/signin").post().promise()}},langpairs:{get:function(){return(new a.a).url("/api/langpairs").get().auth().promise()}},tasks:{post:function(t){return(new a.a).url("/api/tasks").post().auth().payload(t).promise()}},meTasks:{get:function(){return(new a.a).url("/api/me/tasks").get().auth().promise()}},tasksByIdByPairIdByLangInputPairs:{post:function(t,e,n,s){return(new a.a).url("/api/tasks/{}/{}/{}/inputpairs",t,e,n).post().auth().file(s).promise()}},taskByIdEnqueued:{put:function(t){return(new a.a).url("/api/tasks/{}/enqueued",t).put().auth().promise()}}}},86:function(t,e){},87:function(t,e){},88:function(t,e){},89:function(t,e){},90:function(t,e){},91:function(t,e){},92:function(t,e,n){n(88);var a=n(13)(n(43),n(95),"data-v-1da12ab4",null);t.exports=a.exports},93:function(t,e,n){n(90);var a=n(13)(n(44),n(97),"data-v-64ee9514",null);t.exports=a.exports},94:function(t,e,n){n(91);var a=n(13)(n(45),n(98),"data-v-6df31796",null);t.exports=a.exports},95:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("h1",[t._v("Aligner | File Selector")]),t._v(" "),"new"===t.status?n("form",{staticClass:"form-horizontal",on:{submit:function(e){t.upload()}}},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-sm-2 control-label"},[t._v("Aligning method")]),t._v(" "),n("div",{staticClass:"col-sm-10"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.alignTask.method,expression:"alignTask.method"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.alignTask.method=e.target.multiple?n:n[0]}}},t._l(t.alignMethods,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(t.titles.methods[e]))])}))])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-sm-2 control-label"},[t._v("Languages")]),t._v(" "),n("div",{staticClass:"col-sm-10"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.alignTask.langs,expression:"alignTask.langs"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.alignTask.langs=e.target.multiple?n:n[0]}}},t._l(t.langs,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e[0])+"-"+t._s(e[1]))])}))])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-sm-2 control-label"},[t._v("Output format")]),t._v(" "),n("div",{staticClass:"col-sm-10"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.alignTask.output,expression:"alignTask.output"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.alignTask.output=e.target.multiple?n:n[0]}}},t._l(t.outputFormats,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(t.titles.formats[e]))])}))])]),t._v(" "),t._l(t.alignTask.filePairs,function(e,a){return n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-sm-2 control-label"},[t._v("File pair "+t._s(a+1))]),t._v(" "),n("div",{staticClass:"col-sm-5"},[t._v("\n            "+t._s(e[0].name)+"\n          ")]),t._v(" "),n("div",{staticClass:"col-sm-5"},[t._v("\n            "+t._s(e[1].name)+"\n          ")])])}),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-sm-2 control-label"},[t._v("File pair "+t._s(t.alignTask.filePairs.length+1))]),t._v(" "),n("div",{staticClass:"col-sm-5"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.selectFile1()}}},[t._v("File ("+t._s(t.getLang(0))+")")]),t._v(" "),n("input",{ref:"newFileInput1",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(e){t.setFile1()}}}),t._v(" "),null!==t.newFile1?n("span",[t._v(t._s(t.newFile1.name))]):t._e()]),t._v(" "),n("div",{staticClass:"col-sm-5"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.selectFile2()}}},[t._v("File ("+t._s(t.getLang(1))+")")]),t._v(" "),n("input",{ref:"newFileInput2",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(e){t.setFile2()}}}),t._v(" "),null!==t.newFile2?n("span",[t._v(t._s(t.newFile2.name))]):t._e()])]),t._v(" "),n("div",{staticClass:"form-group"},[n("div",{staticClass:"col-sm-offset-2 col-sm-10"},[n("button",{staticClass:"btn btn-success",attrs:{type:"submit",disabled:!t.isReady()}},[t._v("Align")])])])],2):t._e(),t._v(" "),"uploading"===t.status?n("div",[n("b",[t._v("Uploading...")])]):t._e(),t._v(" "),"done"===t.status?n("div",[t._m(0),t._v(" "),n("div",[n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){t.resetForm()}}},[t._v("Align more")])])]):t._e(),t._v(" "),n("my-tasks")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b",[t._v("Aligning started... When finished result will show up in Aligned Files table")])])}]}},96:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},97:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.tasks.length>0,expression:"tasks.length > 0"}]},[n("h1",[t._v("Aligned Files")]),t._v(" "),n("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),n("tbody",t._l(t.selected,function(e){return n("tr",[n("td",[t._v("\n          "+t._s(e.id)+"\n        ")]),t._v(" "),n("td",[t._v("\n          "+t._s(t.titles.methods[e.data.method])+"\n        ")]),t._v(" "),n("td",[t._v("\n          "+t._s(e.status)+"\n        ")]),t._v(" "),n("td",[null===e.result?n("span",[t._v("\n            processing...\n          ")]):n("span",[n("a",{staticClass:"btn btn-success",attrs:{href:e.result+"?token="+t.auth.data.token,target:"_blank"}},[t._v("download")])])])])}))]),t._v(" "),n("nav",[n("ul",{staticClass:"pagination"},[n("li",[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.prevPage()}}},[n("span",{staticClass:"glyphicon glyphicon-chevron-left",attrs:{"aria-hidden":"true"}})])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.nextPage()}}},[n("span",{staticClass:"glyphicon glyphicon-chevron-right",attrs:{"aria-hidden":"true"}})])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("\n          Task ID\n        ")]),t._v(" "),n("th",[t._v("\n          Aligner\n        ")]),t._v(" "),n("th",[t._v("\n          Status\n        ")]),t._v(" "),n("th",[t._v("\n          Download Link\n        ")])])])}]}},98:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("h1",[t._v("Loading...")])])])])}]}}},[102]);
//# sourceMappingURL=app.faea6e638fc0a768db11.js.map