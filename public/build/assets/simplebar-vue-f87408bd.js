import"./vue-e44c720a.js";import{S as c}from"./simplebar-core-3f5973b9.js";import{d as m,A as f}from"./@vue-2f47e84f.js";var l=function(){return l=Object.assign||function(r){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},l.apply(this,arguments)},p={beforeUnmount:"beforeUnmount",unmount:"unmount"},i;function v(e){var r,t=e.h,n=e.emit,o=e.slots,s=e.props,u=function(d){return n("scroll",d)},a=l(l({},c.defaultOptions.classNames),s.classNames);return t("div",l({ref:"element"},{"data-simplebar":"init"}),[t("div",{class:a.wrapper},[t("div",{class:a.heightAutoObserverWrapperEl},[t("div",{class:a.heightAutoObserverEl})]),t("div",{class:a.mask},[t("div",{class:a.offset},[t("div",l(l({},{onScroll:u,class:a.contentWrapper,tabIndex:s.tabIndex||c.defaultOptions.tabIndex,role:"region","aria-label":s.ariaLabel||c.defaultOptions.ariaLabel}),{ref:"scrollElement"}),[t("div",{class:a.contentEl,ref:"contentElement"},(r=o.default)===null||r===void 0?void 0:r.call(o))])])]),t("div",{class:a.placeholder})]),t("div",{class:"".concat(a.track," simplebar-horizontal")},[t("div",{class:a.scrollbar})]),t("div",{class:"".concat(a.track," simplebar-vertical")},[t("div",{class:a.scrollbar})])])}var y=m((i={name:"simplebar-vue",props:{autoHide:{type:Boolean,default:void 0},classNames:Object,forceVisible:{type:[Boolean,String],validator:function(e){return typeof e=="boolean"||e==="x"||e==="y"},default:void 0},ariaLabel:String,tabIndex:Number,direction:{type:String,validator:function(e){return e==="ltr"||e==="rtl"}},timeout:Number,clickOnTrack:{type:Boolean,default:void 0},scrollbarMinSize:Number,scrollbarMaxSize:Number},emits:["scroll"],data:function(){return{}},mounted:function(){for(var e=c.getOptions(this.$refs.element.attributes),r=0,t=Object.entries(this.$props);r<t.length;r++){var n=t[r],o=n[0],s=n[1];s!=null&&typeof s!="function"&&(e[o]=s)}this.SimpleBar=new c(this.$refs.element,e),this.scrollElement=this.$refs.scrollElement,this.contentElement=this.$refs.contentElement}},i[p.beforeUnmount]=function(){var e;(e=this.SimpleBar)===null||e===void 0||e.unMount(),this.SimpleBar=void 0},i.methods={recalculate:function(){var e;(e=this.SimpleBar)===null||e===void 0||e.recalculate()}},i.render=function(e){var r=this;return v({h:typeof e=="function"?e:f,emit:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return r.$emit.apply(r,t)},slots:this.$slots,props:this.$props})},i));export{y as s};
