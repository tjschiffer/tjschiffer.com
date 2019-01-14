(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{330:function(t,e,n){"use strict";n.r(e);var o=n(367),i=n(344),r=n(335),c=Object(r.a)({name:"BgColorChanger",computed:{bgc:function(){return{backgroundColor:this.$store.state.color}}}},function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"color-changer__bg",style:t.bgc},[t._t("default")],2)},[],!1,null,null,null);c.options.__file="bg-color-changer.vue";var l=c.exports,s=Object(r.a)({name:"TextColorChanger",computed:{textColor:function(){return{color:this.$store.state.color}}}},function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"color-changer__text",style:t.textColor},[t._t("default")],2)},[],!1,null,null,null);s.options.__file="text-color-changer.vue";var a=s.exports,u=n(337),h={name:"NavContent",data:function(){return{scrollTop:0,direction:"down"}},computed:Object(i.b)(["scrollToSection"]),watch:{scrollToSection:function(t){var e=!0,n=!1,o=void 0;try{for(var i,r=this.$children[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var c=i.value;if(c.sectionTitle===t)return void c.$el.scrollIntoView({behavior:"smooth",block:"center"})}}catch(t){n=!0,o=t}finally{try{e||null==r.return||r.return()}finally{if(n)throw o}}}},created:function(){this.debouncedUpdateNavElements=Object(u.debounce)(this.updateNavElements,10)},methods:{navContentScroll:function(){var t=this.$el.scrollTop;this.direction=t<this.scrollTop?"up":"down",this.scrollTop=t,this.debouncedUpdateNavElements()},updateNavElements:function(){var t=this;this.$children.forEach(function(e){"function"==typeof e.updateNavElement&&e.updateNavElement(t.direction)})}}},d=Object(r.a)(h,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{"&scroll":function(e){return t.navContentScroll(e)}}},[t._t("default")],2)},[],!1,null,null,null);d.options.__file="nav-content.vue";var v=d.exports,f={name:"NavSection",props:{sectionTitle:{type:String,required:!0}},created:function(){this.sectionTitle&&this.$store.commit("registerSection",this.sectionTitle)},methods:{updateNavElement:function(t){var e=Math.floor(window.innerHeight/2),n=this.$el.getBoundingClientRect(),o=n.top,i=n.bottom;e<o||i<e||("down"===t?o<e&&this.$store.commit("updateCurrentSection",this.sectionTitle):e<i&&this.$store.commit("updateCurrentSection",this.sectionTitle))}}},p=Object(r.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{"data-section":this.sectionTitle}},[this._t("default")],2)},[],!1,null,null,null);p.options.__file="nav-section.vue";var m=p.exports,_=Object(r.a)({name:"NavLabels",computed:{navSections:function(){return this.$store.state.sections}},methods:{scrollToSection:function(t){this.$store.commit("scrollToSection",t)},isActive:function(t){return this.$store.state.currentSection===t}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.navSections,function(e){return n("a",{key:e,staticClass:"display-block cursor-pointer padding-vert-0-5em",class:{"opacity-4":!t.isActive(e)},on:{click:function(n){t.scrollToSection(e)}}},[t._v("\n    "+t._s(e)+"\n  ")])}),0)},[],!1,null,null,null);_.options.__file="nav-labels.vue";var b=_.exports,g=Object(r.a)({name:"NavLabelMob",computed:{navSections:function(){return this.$store.state.sections},top:function(){var t=this.$store.state.currentSection,e=this.$store.state.sections.indexOf(t);return-1===e&&(e=0),{top:-100*e+"%"}}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative height-100 overflow-hidden"},[n("div",{staticClass:"height-100 position-relative transition-top-0-25s",style:t.top},t._l(t.navSections,function(e){return n("div",{key:e,staticClass:"height-100 flex flex--align-center flex--justify-center font-size-1-2em"},[n("div",[t._v(t._s(e))])])}),0)])},[],!1,null,null,null);g.options.__file="nav-labels-mob.vue";var C=g.exports,S=n(338),$=null;e.default={initialize:function(){o.a.use(i.a);var t=new i.a.Store({state:{color:"#000040",sections:[],currentSection:"welcome",scrollToSection:null},mutations:{changeColor:function(t,e){t.color=e},updateCurrentSection:function(t,e){t.currentSection=e},scrollToSection:function(t,e){t.scrollToSection=e},registerSection:function(t,e){t.sections.push(e)}},strict:!1});$=new o.a({el:"#app",components:{BgColorChanger:l,TextColorChanger:a,NavContent:v,NavSection:m,NavLabels:b,NavLabelsMob:C},data:{calculatedHexColorInterval:null},created:function(){var t=this;this.$store.commit("changeColor",Object(S.a)()),this.calculatedHexColorInterval=setInterval(function(){t.$store.commit("changeColor",Object(S.a)())},5e3)},destroyed:function(){clearInterval(this.calculatedHexColorInterval)},methods:{updateFramework:function(){window.updateFramework("React")}},store:t})},destroy:function(){$&&"function"==typeof $.$destroy&&$.$destroy()}}},338:function(t,e,n){"use strict";e.a=function(){var t=new Date,e=t.getMinutes()+t.getSeconds()/60;return[function(t){return Math.sin(t*Math.PI/30)},function(t){return Math.sin(t*Math.PI/30+2*Math.PI/3)},function(t){return Math.sin(t*Math.PI/30+4*Math.PI/3)}].reduce(function(t,n){return t+("0"+Math.round(50*Math.max(n(e)/1.5+1/3,0)).toString(16)).slice(-2)},"#")}}}]);
//# sourceMappingURL=4.main.js.map