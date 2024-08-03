import{a as S}from"./axios-dd1c8fc2.js";import{S as T,a as V,A}from"./swiper-67f12f93.js";import{u as I,c as b,r as F,e as U}from"./@vuelidate-e64c3e41.js";import{l as C,a as z}from"./logo-light-9f0efe74.js";import"./vue-e44c720a.js";import{_ as P}from"../js/app2.js";import{b as m,f as t,_ as s,ae as a,a as u,e,m as r,l as D,t as h,n as L,F as M,g as q,h as N,bi as j,bg as H}from"./@vue-2f47e84f.js";import"./@babel-043c4917.js";import"./@amcharts-e4830be1.js";import"./tslib-72b7de63.js";import"./d3-geo-6bb4a2e5.js";import"./d3-array-e52edd26.js";import"./polylabel-4d4cd514.js";import"./tinyqueue-ccd7a0a5.js";import"./d3-geo-projection-f6bdcdf9.js";import"./core-js-01584e85.js";import"./raf-98f7053a.js";import"./performance-now-4def5153.js";import"./rgbcolor-a22a20ff.js";import"./stackblur-canvas-7b6438f0.js";import"./vue-router-bbc31d4f.js";import"./figlet-ec70a4bf.js";import"./vue3-apexcharts-094e7a9e.js";import"./maska-1eacf752.js";import"./vue-i18n-af6f3290.js";import"./@intlify-28f1e2f7.js";import"./bootstrap-vue-next-9af1e26b.js";import"./gitart-vue-dialog-1c989299.js";import"./@vueform-66335761.js";const Y={setup(){return{v$:I()}},components:{Swiper:T,SwiperSlide:V},data(){return{email:"",submitted:!1,error:null,tryingToReset:!1,isResetError:!1,Autoplay:A,logoDark:C,logoLight:z}},methods:{...authMethods,tryToReset(){if(this.submitted=!0,this.v$.$touch(),!this.v$.$invalid){if({}.VUE_APP_DEFAULT_AUTH==="firebase")return this.tryingToReset=!0,this.error=null,this.resetPassword({email:this.email}).then(o=>{this.tryingToReset=!1,this.isResetError=!1}).catch(o=>{this.tryingToReset=!1,this.error=o||"",this.isResetError=!0});({}).VUE_APP_DEFAULT_AUTH==="authapi"&&S.post("http://127.0.0.1:8000/api/password/create",{email:this.email}).then(o=>(this.isResetError=!0,this.error=o.data,o))}}},validations:{email:{required:b.withMessage("Email is required",F),email:b.withMessage("Please enter valid email",U)}},mounted(){document.body.classList.add("auth-body-bg")}},l=o=>(j("data-v-4a7ff980"),o=o(),H(),o),$={class:"auth-full-bg pt-lg-5 p-4"},K={class:"w-100"},O=l(()=>e("div",{class:"bg-overlay"},null,-1)),W={class:"d-flex h-100 flex-column"},G={class:"p-4 mt-auto"},J={class:"text-center"},Q=l(()=>e("h4",{class:"mb-3"},[e("i",{class:"bx bxs-quote-alt-left text-primary h1 align-middle me-3"}),e("span",{class:"text-primary"},"5k"),r("+ Satisfied clients ")],-1)),X={dir:"ltr",class:"owl-theme"},Z=l(()=>e("p",{class:"font-size-16 mb-4"},` " Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. " `,-1)),ee=l(()=>e("div",null,[e("h4",{class:"font-size-16 text-primary"}," Abs1981 "),e("p",{class:"font-size-14 mb-0"},"- Skote User")],-1)),te=l(()=>e("p",{class:"font-size-16 mb-4"},' " If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. " ',-1)),se=l(()=>e("div",null,[e("h4",{class:"font-size-16 text-primary"}," nezerious "),e("p",{class:"font-size-14 mb-0"},"- Skote User")],-1)),oe={class:"auth-full-page-content p-md-5 p-4"},ie={class:"w-100"},ae={class:"d-flex flex-column h-100"},le={class:"mb-4 mb-md-5"},re=["src"],ne=["src"],de={class:"my-auto"},ce=l(()=>e("div",null,[e("h5",{class:"text-primary"},"Reset Password"),e("p",{class:"text-muted"},"Reset Password with Skote.")],-1)),me={class:"mt-4"},ue={class:"mb-3"},_e=l(()=>e("label",{for:"useremail"},"Email",-1)),pe={key:0},he={class:"mt-5 text-center"},fe={class:"mt-4 mt-md-5 text-center"},ve={class:"mb-0"},ge=l(()=>e("i",{class:"mdi mdi-heart text-danger"},null,-1));function be(o,d,we,_,i,w){const f=a("swiper-slide"),y=a("swiper"),c=a("BCol"),p=a("BRow"),v=a("router-link"),g=a("BAlert"),x=a("BFormInput"),k=a("BButton"),B=a("BForm"),E=a("BContainer");return u(),m("div",null,[t(E,{fluid:"",class:"p-0"},{default:s(()=>[t(p,{class:"g-0"},{default:s(()=>[t(c,{xl:"9"},{default:s(()=>[e("div",$,[e("div",K,[O,e("div",W,[e("div",G,[t(p,{class:"justify-content-center"},{default:s(()=>[t(c,{lg:"7"},{default:s(()=>[e("div",J,[Q,e("div",X,[t(y,{class:"mySwiper",loop:!0,modules:[i.Autoplay],"space-between":20,autoplay:{delay:2500,disableOnInteraction:!1}},{default:s(()=>[t(f,null,{default:s(()=>[Z,ee]),_:1}),t(f,null,{default:s(()=>[te,se]),_:1})]),_:1},8,["modules"])])])]),_:1})]),_:1})])])])])]),_:1}),t(c,{xl:"3"},{default:s(()=>[e("div",oe,[e("div",ie,[e("div",ae,[e("div",le,[t(v,{to:"/",class:"d-block auth-logo"},{default:s(()=>[e("img",{src:i.logoDark,alt:"",height:"18",class:"auth-logo-dark"},null,8,re),e("img",{src:i.logoLight,alt:"",height:"18",class:"auth-logo-light"},null,8,ne)]),_:1})]),e("div",de,[ce,e("div",me,[t(g,{"model-value":!0,variant:"success",class:"text-center mb-4"},{default:s(()=>[r(" Enter your Email and instructions will be sent to you! ")]),_:1}),t(B,{onSubmit:D(w.tryToReset,["prevent"])},{default:s(()=>[t(g,{modelValue:i.isResetError,"onUpdate:modelValue":d[0]||(d[0]=n=>i.isResetError=n),class:"mb-4",variant:"danger",dismissible:""},{default:s(()=>[r(h(i.error),1)]),_:1},8,["modelValue"]),e("div",ue,[_e,t(x,{modelValue:i.email,"onUpdate:modelValue":d[1]||(d[1]=n=>i.email=n),id:"useremail",placeholder:"Enter email",class:L({"is-invalid":i.submitted&&_.v$.email.$error,"is-valid":i.submitted&&!_.v$.email.$error})},null,8,["modelValue","class"]),(u(!0),m(M,null,q(_.v$.email.$errors,(n,R)=>(u(),m("div",{key:R,class:"invalid-feedback"},[n.$message?(u(),m("span",pe,h(n.$message),1)):N("",!0)]))),128))]),t(p,{class:"mb-0"},{default:s(()=>[t(c,{cols:"12",class:"text-end"},{default:s(()=>[t(k,{variant:"primary",class:"w-md waves-effect waves-light",type:"submit"},{default:s(()=>[r(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]),e("div",he,[e("p",null,[r(" Remember It ? "),t(v,{to:"/auth/login-2",class:"fw-medium text-primary"},{default:s(()=>[r(" Sign In here")]),_:1})])])])]),e("div",fe,[e("p",ve,[r(" © "+h(new Date().getFullYear())+" Skote. Crafted with ",1),ge,r(" by Themesbrand ")])])])])])]),_:1})]),_:1})]),_:1})])}const Je=P(Y,[["render",be],["__scopeId","data-v-4a7ff980"]]);export{Je as default};
