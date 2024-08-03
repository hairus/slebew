import{L as w}from"./main-611df75c.js";import{P}from"./page-header-1e01951d.js";import{_ as k,c as f,w as t,r,y as D,o as m,b as a,a as e,d as s,v as g}from"../js/app2.js";import"./logo-light-9f0efe74.js";import"./logo-9faa3827.js";import"./avatar-1-15b743f1.js";import"./avatar-3-36dc574b.js";import"./axios-9cbf0d09.js";const C={components:{Layout:w,PageHeader:P},data(){return{defaultvalue:3,currentpage:3}}},S=e("p",{class:"card-title-desc"}," Add any of the below mentioned modifier classes to change the appearance of a badge. ",-1),V={class:"mt-5"},z=e("h5",{class:"font-size-14"},"Soft Badge",-1),I={class:"mt-1"},N={class:"mt-4 mt-lg-0"},A=e("p",{class:"card-title-desc"},[s(" Use the "),e("code",null,".badge-pill"),s(" modifier class to make badges more rounded (with a larger "),e("code",null,"border-radius"),s(" and additional horizontal "),e("code",null,"padding"),s("). Useful if you miss the badges from v3. ")],-1),U={class:"mt-5"},W=e("h5",{class:"font-size-14"},"Soft Badge",-1),E={class:"mt-1"},L=e("hr",{class:"mt-5"},null,-1),T={class:"mt-4"},H=e("p",{class:"card-title-desc"},"Badges can be used as part of links or buttons to provide a counter.",-1),G={class:"d-flex flex-wrap gap-2"},M={class:"mt-4"},R=e("p",{class:"card-title-desc"},"Example of Badges Position",-1),$={class:"d-flex flex-wrap gap-3"},F=e("span",{class:"visually-hidden"},"unread messages",-1),O=e("span",{class:"visually-hidden"},"unread messages",-1),j=e("span",{class:"avatar-title bg-transparent"},[e("i",{class:"bx bxs-envelope"})],-1),q=e("span",{class:"visually-hidden"},"unread messages",-1),J=e("span",{class:"avatar-title bg-transparent text-reset"},[e("i",{class:"bx bxs-bell"})],-1),K=e("span",{class:"avatar-title bg-transparent text-reset"},[e("i",{class:"bx bx-menu"})],-1),Q=e("span",{class:"visually-hidden"},"unread messages",-1),X=e("p",{class:"card-title-desc"}," Add small overlay content, like those found in iOS, to any element for housing secondary information. ",-1),Y={class:"button-items"},Z=e("h5",{class:"font-size-14"},"Default Example",-1),aa=e("p",{class:"card-title-desc"}," Pagination links indicate a series of related content exists across multiple pages. ",-1),ta={class:"mt-4"},sa=e("p",{class:"card-title-desc"}," Change the alignment of pagination components with flexbox utilities. ",-1),ea={class:"mt-4"},la=e("h5",{class:"font-size-14"},"Sizing",-1),na=e("p",{class:"card-title-desc"},[s(" Fancy larger or smaller pagination? Add "),e("code",null,".pagination-lg"),s(" or "),e("code",null,".pagination-sm"),s(" for additional sizes. ")],-1),oa=e("p",{class:"card-title-desc"}," Use the border spinners for a lightweight loading indicator. ",-1),ia=e("p",{class:"card-title-desc"}," If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow! ",-1);function ra(da,h,ca,ua,y,_a){const b=r("PageHeader"),d=r("BCardTitle"),l=r("BBadge"),o=r("BCol"),c=r("BRow"),i=r("BButton"),u=r("BCardBody"),_=r("BCard"),p=r("BPagination"),n=r("BSpinner"),B=r("Layout"),v=D("b-popover");return m(),f(B,null,{default:t(()=>[a(b,{title:"General",pageTitle:"UI Elements"}),a(c,null,{default:t(()=>[a(o,{lg:"12"},{default:t(()=>[a(_,{"no-body":""},{default:t(()=>[a(u,null,{default:t(()=>[a(c,null,{default:t(()=>[a(o,{lg:"6"},{default:t(()=>[e("div",null,[a(d,null,{default:t(()=>[s("Badges")]),_:1}),S,e("div",null,[a(l,{variant:"primary"},{default:t(()=>[s("Primary")]),_:1}),a(l,{variant:"success",class:"ms-1"},{default:t(()=>[s("Success")]),_:1}),a(l,{variant:"info",class:"ms-1"},{default:t(()=>[s("Info")]),_:1}),a(l,{variant:"warning",class:"ms-1"},{default:t(()=>[s("Warning")]),_:1}),a(l,{variant:"danger",class:"ms-1"},{default:t(()=>[s("Danger")]),_:1}),a(l,{variant:"dark",class:"ms-1"},{default:t(()=>[s("Dark")]),_:1})])]),e("div",V,[z,e("div",I,[a(l,{variant:"primary",class:"me-1"},{default:t(()=>[s("Primary")]),_:1}),a(l,{variant:"success",class:"me-1"},{default:t(()=>[s("Success")]),_:1}),a(l,{variant:"info",class:"me-1"},{default:t(()=>[s("Info")]),_:1}),a(l,{variant:"warning",class:"me-1"},{default:t(()=>[s("Warning")]),_:1}),a(l,{variant:"danger",class:"me-1"},{default:t(()=>[s("Danger")]),_:1}),a(l,{variant:"dark"},{default:t(()=>[s("Dark")]),_:1})])])]),_:1}),a(o,{lg:"6"},{default:t(()=>[e("div",N,[a(d,null,{default:t(()=>[s("Pill Badges")]),_:1}),A,e("div",null,[a(l,{variant:"primary",pill:""},{default:t(()=>[s("Primary")]),_:1}),a(l,{variant:"success",class:"ms-1",pill:""},{default:t(()=>[s("Success")]),_:1}),a(l,{variant:"info",class:"ms-1",pill:""},{default:t(()=>[s("Info")]),_:1}),a(l,{variant:"warning",class:"ms-1",pill:""},{default:t(()=>[s("Warning")]),_:1}),a(l,{variant:"danger",class:"ms-1",pill:""},{default:t(()=>[s("Danger")]),_:1}),a(l,{variant:"dark",class:"ms-1",pill:""},{default:t(()=>[s("Dark")]),_:1})]),e("div",U,[W,e("div",E,[a(l,{variant:"primary",class:"me-1",pill:""},{default:t(()=>[s("Primary")]),_:1}),a(l,{variant:"success",class:"me-1",pill:""},{default:t(()=>[s("Success")]),_:1}),a(l,{variant:"info",class:"me-1",pill:""},{default:t(()=>[s("Info")]),_:1}),a(l,{variant:"warning",class:"me-1",pill:""},{default:t(()=>[s("Warning")]),_:1}),a(l,{variant:"danger",class:"me-1",pill:""},{default:t(()=>[s("Danger")]),_:1}),a(l,{variant:"dark",pill:""},{default:t(()=>[s("Dark")]),_:1})])])])]),_:1})]),_:1}),L,a(c,null,{default:t(()=>[a(o,{xl:"6"},{default:t(()=>[e("div",T,[a(d,null,{default:t(()=>[s("Badges in Buttons")]),_:1}),H,e("div",G,[a(i,{type:"button",variant:"primary"},{default:t(()=>[s(" Notifications "),a(l,{variant:"success",class:"ms-1"},{default:t(()=>[s("4")]),_:1})]),_:1}),a(i,{type:"button",variant:"success"},{default:t(()=>[s(" Messages "),a(l,{variant:"danger",class:"ms-1"},{default:t(()=>[s("2")]),_:1})]),_:1}),a(i,{type:"button",variant:"none",class:"btn-outline-secondary"},{default:t(()=>[s(" Draft "),a(l,{variant:"success",class:"ms-1"},{default:t(()=>[s("2")]),_:1})]),_:1})])])]),_:1}),a(o,{xl:"6"},{default:t(()=>[e("div",M,[a(d,null,{default:t(()=>[s("Badges Position Examples")]),_:1}),R,e("div",$,[a(i,{type:"button",variant:"primary",class:"position-relative"},{default:t(()=>[s(" Mails "),a(l,{class:"position-absolute top-0 start-100 translate-middle rounded-pill",variant:"success"},{default:t(()=>[s("+99 "),F]),_:1})]),_:1}),a(i,{type:"button",variant:"light",class:"position-relative"},{default:t(()=>[s(" Alerts "),a(l,{class:"position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1",variant:"danger"},{default:t(()=>[O]),_:1})]),_:1}),a(i,{type:"button",variant:"primary",class:"position-relative p-0 avatar-xs rounded"},{default:t(()=>[j,a(l,{class:"position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1",variant:"danger"},{default:t(()=>[q]),_:1})]),_:1}),a(i,{type:"button",variant:"light",class:"position-relative p-0 avatar-xs rounded-circle"},{default:t(()=>[J]),_:1}),a(i,{type:"button",variant:"light",class:"position-relative p-0 avatar-xs rounded-circle"},{default:t(()=>[K,a(l,{class:"position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1",variant:"success"},{default:t(()=>[Q]),_:1})]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(c,null,{default:t(()=>[a(o,{lg:"12"},{default:t(()=>[a(_,{"no-body":""},{default:t(()=>[a(u,null,{default:t(()=>[a(d,null,{default:t(()=>[s("Popovers")]),_:1}),X,e("div",Y,[g((m(),f(i,{class:"me-2",variant:"secondary"},{default:t(()=>[s("Popover on top")]),_:1})),[[v,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",void 0,{top:!0}]]),g((m(),f(i,{class:"me-2",variant:"secondary"},{default:t(()=>[s("Popover on bottom")]),_:1})),[[v,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",void 0,{bottom:!0}]]),g((m(),f(i,{class:"me-2",variant:"secondary"},{default:t(()=>[s("Popover on right")]),_:1})),[[v,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",void 0,{right:!0}]]),g((m(),f(i,{variant:"secondary"},{default:t(()=>[s("Popover on left")]),_:1})),[[v,"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",void 0,{left:!0}]])])]),_:1})]),_:1})]),_:1})]),_:1}),a(c,null,{default:t(()=>[a(o,{lg:"12"},{default:t(()=>[a(_,{"no-body":""},{default:t(()=>[a(u,null,{default:t(()=>[a(d,{class:"mb-4"},{default:t(()=>[s("Pagination")]),_:1}),a(c,null,{default:t(()=>[a(o,{lg:"6"},{default:t(()=>[Z,aa,a(p,{modelValue:y.defaultvalue,"onUpdate:modelValue":h[0]||(h[0]=x=>y.defaultvalue=x),"total-rows":50,"per-page":10,"aria-controls":"my-table"},null,8,["modelValue"])]),_:1}),a(o,{lg:"6"},{default:t(()=>[e("div",ta,[a(d,null,{default:t(()=>[s("Alignment")]),_:1}),sa,a(p,{"total-rows":50,"prev-text":"Previous","next-text":"Next",align:"center"}),a(p,{"total-rows":50,"prev-text":"Previous","next-text":"Next",align:"right"})])]),_:1})]),_:1}),a(c,null,{default:t(()=>[a(o,{lg:"6"},{default:t(()=>[e("div",ea,[la,na,a(p,{size:"lg","total-rows":30,"per-page":10,"aria-controls":"my-table"}),a(p,{size:"sm","total-rows":30,"per-page":10,"aria-controls":"my-table"})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(c,null,{default:t(()=>[a(o,{lg:"6"},{default:t(()=>[a(_,{"no-body":""},{default:t(()=>[a(u,null,{default:t(()=>[a(d,null,{default:t(()=>[s("Border spinner")]),_:1}),oa,e("div",null,[a(n,{class:"m-2",variant:"primary",role:"status"}),a(n,{class:"m-2",variant:"secondary",role:"status"}),a(n,{class:"m-2",variant:"success",role:"status"}),a(n,{class:"m-2",variant:"info",role:"status"}),a(n,{class:"m-2",variant:"warning",role:"status"}),a(n,{class:"m-2",variant:"danger",role:"status"}),a(n,{class:"m-2",variant:"dark",role:"status"})])]),_:1})]),_:1})]),_:1}),a(o,{lg:"6"},{default:t(()=>[a(_,{"no-body":""},{default:t(()=>[a(u,null,{default:t(()=>[a(d,null,{default:t(()=>[s("Growing spinner")]),_:1}),ia,e("div",null,[a(n,{type:"grow",class:"m-2",variant:"primary",role:"status"}),a(n,{type:"grow",class:"m-2",variant:"secondary",role:"status"}),a(n,{type:"grow",class:"m-2",variant:"success",role:"status"}),a(n,{type:"grow",class:"m-2",variant:"info",role:"status"}),a(n,{type:"grow",class:"m-2",variant:"warning",role:"status"}),a(n,{type:"grow",class:"m-2",variant:"danger",role:"status"}),a(n,{type:"grow",class:"m-2",variant:"dark",role:"status"})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Ba=k(C,[["render",ra]]);export{Ba as default};
