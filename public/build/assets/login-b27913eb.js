import{p as x}from"./profile-img-1e13af7a.js";import{l as k}from"./logo-9faa3827.js";import{a as E}from"./axios-dd1c8fc2.js";import"./vue-4b54ea58.js";import{_ as V}from"../js/app2.js";import{b as A,f as e,K as o,a7 as t,a as F,e as l,m as a,t as m,x as S}from"./@vue-26c81de9.js";import"./vue-router-04b37a5f.js";import"./figlet-aa9a71dd.js";import"./vue3-apexcharts-fb268ad8.js";import"./maska-1eacf752.js";import"./vue-i18n-74a42a2b.js";import"./@intlify-28f1e2f7.js";import"./bootstrap-vue-next-71fdbf68.js";import"./gitart-vue-dialog-9c3bddb2.js";/* empty css                 */const I={data(){return{auth:{email:"",password:""},profileImg:x,logo:k,processing:!1,authError:null,isAuthError:!1}},beforeCreate(){localStorage.getItem("user")&&this.$router.push("/")},methods:{async login(){this.processing=!0,await E.post("/api/login",this.auth).then(({data:s})=>{if(s.success==!0&&s.message=="success"){const n={login:!0,user_id:s.data.id,name:s.data.name,email:s.data.email,roles:s.data.roles};localStorage.setItem("user",JSON.stringify(n)),this.$router.push("/")}else s.data==400&&(this.authError=s.message,this.isAuthError=!0)}).catch(({response:{data:s}})=>{console.log(s)}).finally(()=>{this.processing=!1})}}},N={class:"account-pages my-5 pt-5"},R={class:"bg-primary-subtle"},K={class:"text-primary p-4"},P=l("h5",{class:"text-primary"},"Welcome Back! ",-1),U=["src"],j={class:"avatar-md profile-user-wid mb-4"},D={class:"avatar-title rounded-circle bg-light"},G=["src"],H={class:"mt-3 d-grid"},M={class:"mt-5 text-center"},O=l("i",{class:"mdi mdi-heart text-danger"},null,-1);function T(s,n,J,L,r,_){const f=t("H5"),c=t("BCol"),u=t("BRow"),h=t("router-link"),g=t("BAlert"),d=t("BFormInput"),p=t("BFormGroup"),B=t("BFormCheckbox"),b=t("BButton"),y=t("BForm"),v=t("BCardBody"),C=t("BCard"),w=t("BContainer");return F(),A("div",N,[e(w,null,{default:o(()=>[e(u,{class:"justify-content-center"},{default:o(()=>[e(c,{md:"8",lg:"6",xl:"5"},{default:o(()=>[e(C,{"no-body":"",class:"overflow-hidden"},{default:o(()=>[l("div",R,[e(u,null,{default:o(()=>[e(c,{cols:"7"},{default:o(()=>[l("div",K,[P,e(f,null,{default:o(()=>[a("SMAN 1 KRAKSAN")]),_:1})])]),_:1}),e(c,{cols:"5",class:"align-self-end"},{default:o(()=>[l("img",{src:r.profileImg,alt:"",class:"img-fluid"},null,8,U)]),_:1})]),_:1})]),e(v,{class:"pt-0"},{default:o(()=>[l("div",null,[e(h,{to:"/"},{default:o(()=>[l("div",j,[l("span",D,[l("img",{src:r.logo,alt:"",height:"34"},null,8,G)])])]),_:1})]),e(g,{modelValue:r.isAuthError,"onUpdate:modelValue":n[0]||(n[0]=i=>r.isAuthError=i),variant:"danger",class:"mt-3",dismissible:""},{default:o(()=>[a(m(r.authError),1)]),_:1},8,["modelValue"]),e(y,{class:"p-2",action:"javascript:void(0)",method:"POST"},{default:o(()=>[S(s.$slots,"default"),e(p,{id:"input-group-1",label:"Email","label-for":"input-1",class:"mb-3"},{default:o(()=>[e(d,{id:"input-1",name:"email",modelValue:r.auth.email,"onUpdate:modelValue":n[1]||(n[1]=i=>r.auth.email=i),type:"text",placeholder:"Enter email"},null,8,["modelValue"])]),_:1}),e(p,{id:"input-group-2",label:"Password","label-for":"input-2",class:"mb-3"},{default:o(()=>[e(d,{id:"input-2",modelValue:r.auth.password,"onUpdate:modelValue":n[2]||(n[2]=i=>r.auth.password=i),name:"password",type:"password",placeholder:"Enter password"},null,8,["modelValue"])]),_:1}),e(B,{id:"customControlInline",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"},{default:o(()=>[a(" Remember me ")]),_:1}),l("div",H,[e(b,{ariant:"primary",type:"submit",disabled:r.processing,onClick:_.login,class:"btn-block"},{default:o(()=>[a(m(r.processing?"Please wait":"Login"),1)]),_:1},8,["disabled","onClick"])])]),_:3})]),_:3})]),_:3}),l("div",M,[l("p",null,[a(" © "+m(new Date().getFullYear())+" System Enginer ",1),O,a(" by Matura ")])])]),_:3})]),_:3})]),_:3})])}const ae=V(I,[["render",T]]);export{ae as default};
