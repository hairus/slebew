import{i as U}from"./@chenfengyuan-faab69e5.js";import{S as Y,a as X,A as Z,N as $,P as ee}from"./swiper-67f12f93.js";import{a as se}from"./avatar-1-15b743f1.js";import{a as te}from"./avatar-2-22bc0be9.js";import{a as le}from"./avatar-3-36dc574b.js";import{a as ae}from"./avatar-5-107f5df2.js";import{a as oe}from"./avatar-8-4b06652c.js";import{i as ie}from"./img-1-68886c16.js";import{a as ne,l as ce}from"./logo-light-9f0efe74.js";import"./vue-e44c720a.js";import{_ as de}from"../js/app2.js";import{b as y,e,f as t,_ as s,k as r,ae as d,bk as I,a as o,M as c,m as l,t as h,F as B,g as T,n as L}from"./@vue-2f47e84f.js";import"./@babel-043c4917.js";import"./@amcharts-e4830be1.js";import"./tslib-72b7de63.js";import"./d3-geo-6bb4a2e5.js";import"./d3-array-e52edd26.js";import"./polylabel-4d4cd514.js";import"./tinyqueue-ccd7a0a5.js";import"./d3-geo-projection-f6bdcdf9.js";import"./core-js-01584e85.js";import"./raf-98f7053a.js";import"./performance-now-4def5153.js";import"./rgbcolor-a22a20ff.js";import"./stackblur-canvas-7b6438f0.js";import"./vue-router-bbc31d4f.js";import"./figlet-ec70a4bf.js";import"./vue3-apexcharts-094e7a9e.js";import"./maska-1eacf752.js";import"./vue-i18n-af6f3290.js";import"./@intlify-28f1e2f7.js";import"./bootstrap-vue-next-9af1e26b.js";import"./gitart-vue-dialog-1c989299.js";import"./@vueform-66335761.js";const re="/build/icons/1.png",me="/build/icons/2.png",ue="/build/icons/3.png",_e="/build/icons/4.png",he="/build/icons/5.png",pe="/build/icons/6.png",fe="/build/icons/img-12.jpg",ge="/build/icons/img-22.jpg",be="/build/icons/img-32.jpg",ve=[{avatarClass:"warning",avatar:"bitcoin",name:"Bitcoin",price:"$ 9134.39",change:"+ 0.0012.23 ( 0.2 % )",changeClass:"mdi mdi-arrow-up ms-1 text-success"},{avatarClass:"primary",avatar:"ethereum",name:"Ethereum",price:"$ 245.44",change:"- 004.12 ( 0.1 % )",changeClass:"mdi mdi-arrow-down ms-1 text-danger"},{avatarClass:"info",avatar:"litecoin",name:"Litecoin",price:"$ 63.61",change:"+ 0.0001.12 ( 0.1 % )",changeClass:"mdi mdi-arrow-up ms-1 text-success"}],we=[{imageSrc:re},{imageSrc:me},{imageSrc:ue},{imageSrc:_e},{imageSrc:he},{imageSrc:pe}],ye=[{date:"December, 2019",title:"ICO Platform Idea",description:"It will be as simple as occidental; in fact, it will be Cambridge"},{date:"January, 2020",title:"Research on project",description:"To an English person, it will seem like simplified English existence."},{date:"February, 2020",title:"ICO & Token Design",description:"For science, music, sport, etc., Europe uses the same vocabulary."},{date:"March, 2020",title:"ICO Launch Platform",description:"New common language will be more simple than existing."},{date:"April, 2020",title:"Token sale round 1",description:"It will be as simple as occidental; in fact, it will be Cambridge"},{date:"May, 2020",title:"Token sale round 2",description:"To an English person, it will seem like simplified English existence."}],ke=[{name:"Mark Hurley",role:"CEO & Lead",image:te,socialLinks:[{title:"Facebook",iconClass:"mdi mdi-facebook"},{title:"Linkedin",iconClass:"mdi mdi-linkedin"},{title:"Google",iconClass:"mdi mdi-google"}]},{name:"Calvin Smith",role:"Blockchain developer",image:le,socialLinks:[{title:"Facebook",iconClass:"mdi mdi-facebook"},{title:"Linkedin",iconClass:"mdi mdi-linkedin"},{title:"Google",iconClass:"mdi mdi-google"}]},{name:"Vickie Sample",role:"Designer",image:oe,socialLinks:[{title:"Facebook",iconClass:"mdi mdi-facebook"},{title:"Linkedin",iconClass:"mdi mdi-linkedin"},{title:"Google",iconClass:"mdi mdi-google"}]},{name:"Alma Farley",role:"App developer",image:ae,socialLinks:[{title:"Facebook",iconClass:"mdi mdi-facebook"},{title:"Linkedin",iconClass:"mdi mdi-linkedin"},{title:"Google",iconClass:"mdi mdi-google"}]},{name:"Amy Hood",role:"Designer",image:se,socialLinks:[{title:"Facebook",iconClass:"mdi mdi-facebook"},{title:"Linkedin",iconClass:"mdi mdi-linkedin"},{title:"Google",iconClass:"mdi mdi-google"}]}],xe=[{image:fe,date:"04 Mar, 2020",title:"Donec pede justo, fringilla vele",content:"If several languages coalesce, the grammar of the resulting language"},{image:ge,date:"12 Feb, 2020",title:"Aenean ut eros et nisl",content:"Everyone realizes why a new common language would be desirable"},{image:be,date:"06 Jan, 2020",title:"In turpis, pellentesque posuere",content:"To an English person, it will seem like simplified English, as a skeptical Cambridge"}],Ce="/build/icons/img-2.png";const Be={components:{VueCountdown:U,Swiper:Y,SwiperSlide:X},data(){return{img1:ie,img2:Ce,logoLight:ne,logoDark:ce,cards:ve,clients:we,timelineData:ye,teamData:ke,blogData:xe,Autoplay:Z,Navigation:$,Pagination:ee,clientsPerPage:[[576,2],[768,3],[992,4]]}},created(){window.addEventListener("scroll",function(){var k=window.scrollY;k>=50?document.querySelector(".sticky")&&document.querySelector(".sticky").classList.add("nav-sticky"):document.querySelector(".sticky")&&document.querySelector(".sticky").classList.remove("nav-sticky")}),document.querySelectorAll(".navbar-nav a").forEach(k=>{k.addEventListener("click",function(x){x.preventDefault(),x.stopImmediatePropagation();var q=x.target;document.querySelectorAll("html, body").scrollTo({top:document.querySelector(q.href).offsetTop,behaviour:"smooth"})})})},computed:{dateDiff(){var k=new Date,x=new Date(2023,12,31,0,0,0);return x.getTime()-k.getTime()}},methods:{toggleMenu(){document.getElementById("topnav-menu-content").classList.toggle("show")}}},Te={class:"navbar navbar-expand-lg navigation fixed-top sticky",id:"navbar"},Ee=["src"],Ie=["src"],Le=e("i",{class:"fa fa-fw fa-bars"},null,-1),Se={class:"collapse navbar-collapse",id:"topnav-menu-content"},De={class:"navbar-nav ms-auto",id:"topnav-menu"},Oe={class:"nav-item"},je={class:"nav-item"},Ae={class:"nav-item"},Fe={class:"nav-item"},qe={class:"nav-item"},We={class:"nav-item"},Pe={class:"nav-item"},ze={class:"ms-lg-2"},He={class:"section hero-section bg-ico-hero",id:"home"},Ne=e("div",{class:"bg-overlay bg-primary"},null,-1),Re={class:"text-white-50"},Me=e("h1",{class:"text-white fw-semibold mb-3 hero-title"},"Skote - Ico Landing for a cryptocurrency business",-1),Ge=e("p",{class:"font-size-14"},"It will be as simple as occidental in fact to an English person, it will seem like simplified as a skeptical Cambridge",-1),Qe={class:"button-items mt-4"},Ve=e("h5",{class:"pt-2"},"ICO Countdown time",-1),Je={class:"text-center"},Ke=e("h5",null,"Time left to Ico :",-1),Ue={class:"mt-4"},Ye={class:"coming-box"},Xe=e("span",null,"Days",-1),Ze={class:"coming-box"},$e=e("span",null,"Hours",-1),es={class:"coming-box"},ss=e("span",null,"Minutes",-1),ts={class:"coming-box"},ls=e("span",null,"Seconds",-1),as=e("div",{class:"mt-4"},[e("button",{type:"button",class:"btn btn-success w-md"}," Get Token ")],-1),os={class:"mt-5"},is=e("h4",{class:"fw-semibold"},"1 ETH = 2235 SKT",-1),ns=e("div",{class:"clearfix mt-4"},[e("h5",{class:"float-end font-size-14"},"5234.43")],-1),cs=e("div",{class:"progress-label"},"15 %",-1),ds=e("div",{class:"progress-label"},"30 %",-1),rs={class:"section bg-white p-0"},ms={class:"currency-price"},us={class:"d-flex"},_s={class:"avatar-xs me-3"},hs={class:"flex-grow-1"},ps={class:"text-muted"},fs={class:"text-muted text-truncate mb-0"},gs={class:"section pt-4 bg-white",id:"about"},bs=e("div",{class:"text-center mb-5"},[e("div",{class:"small-title"},"About us"),e("h4",null,"What is ICO Token?")],-1),vs={class:"text-muted"},ws=e("h4",null,"Best ICO for your cryptocurrency business",-1),ys=e("p",null," If several languages coalesce, the grammar of the resulting that of the individual new common language will be more simple and regular than the existing. ",-1),ks=e("p",{class:"mb-4"}," It would be necessary to have uniform pronunciation. ",-1),xs={class:"button-items"},Cs=e("div",{class:"mt-4"},[e("h4",null,"$ 6.2 M"),e("p",null,"Invest amount")],-1),Bs=e("div",{class:"mt-4"},[e("h4",null,"16245"),e("p",null,"Users")],-1),Ts={class:"mt-4 mt-lg-0"},Es=e("div",{class:"mb-3"},[e("i",{class:"mdi mdi-bitcoin h2 text-success"})],-1),Is=e("h5",null,"Lending",-1),Ls=e("p",{class:"text-muted mb-0"}," At vero eos et accusamus et iusto blanditiis ",-1),Ss={class:"card-footer bg-transparent border-top text-center"},Ds=e("div",{class:"mb-3"},[e("i",{class:"mdi mdi-wallet-outline h2 text-success"})],-1),Os=e("h5",null,"Wallet",-1),js=e("p",{class:"text-muted mb-0"},"Quis autem vel eum iure reprehenderit",-1),As={class:"card-footer bg-transparent border-top text-center"},Fs=e("hr",{class:"my-5"},null,-1),qs={class:"item"},Ws={class:"client-images"},Ps=["src"],zs={class:"section",id:"features"},Hs=e("div",{class:"text-center mb-5"},[e("div",{class:"small-title"},"Features"),e("h4",null,"Key features of the product")],-1),Ns=["src"],Rs=e("div",{class:"mt-4 mt-md-auto"},[e("div",{class:"d-flex align-items-center mb-2"},[e("div",{class:"features-number fw-semibold display-4 me-3"},"01"),e("h4",{class:"mb-0"},"Lending")]),e("p",{class:"text-muted"},"If several languages coalesce, the grammar of the resulting language is more simple and regular than of the individual will be more simple and regular than the existing."),e("div",{class:"text-muted mt-4"},[e("p",{class:"mb-2"},[e("i",{class:"mdi mdi-circle-medium text-success me-1"}),l("Donec pede justo vel aliquet ")]),e("p",null,[e("i",{class:"mdi mdi-circle-medium text-success me-1"}),l("Aenean et nisl sagittis ")])])],-1),Ms=e("div",{class:"mt-4 mt-md-0"},[e("div",{class:"d-flex align-items-center mb-2"},[e("div",{class:"features-number fw-semibold display-4 me-3"},"02"),e("h4",{class:"mb-0"},"Wallet")]),e("p",{class:"text-muted"},"It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend."),e("div",{class:"text-muted mt-4"},[e("p",{class:"mb-2"},[e("i",{class:"mdi mdi-circle-medium text-success me-1"}),l("Donec pede justo vel aliquet ")]),e("p",null,[e("i",{class:"mdi mdi-circle-medium text-success me-1"}),l("Aenean et nisl sagittis ")])])],-1),Gs={class:"mt-4 me-md-0"},Qs=["src"],Vs={class:"section bg-white",id:"roadmap"},Js=e("div",{class:"text-center mb-5"},[e("div",{class:"small-title"},"Timeline"),e("h4",null,"Our Roadmap")],-1),Ks={class:"hori-timeline"},Us={class:"event-date"},Ys={class:"text-primary mb-1"},Xs={class:"mb-4"},Zs=e("div",{class:"event-down-icon"},[e("i",{class:"bx bx-down-arrow-circle h1 text-primary down-arrow-icon"})],-1),$s={class:"mt-3 px-3"},et={class:"text-muted"},st={class:"owl-nav"},tt={class:"section",id:"team"},lt=e("div",{class:"text-center mb-5"},[e("div",{class:"small-title"},"Team"),e("h4",null,"Meet our team")],-1),at=["src"],ot={class:"mt-3"},it={class:"text-muted mb-0"},nt={class:"d-flex mb-0 team-social-links"},ct={class:"section bg-white",id:"news"},dt=e("div",{class:"text-center mb-5"},[e("div",{class:"small-title"},"Blog"),e("h4",null,"Latest News")],-1),rt={class:"blog-box mb-4 mb-xl-0"},mt={class:"position-relative"},ut=["src"],_t={class:"mt-4 text-muted"},ht={class:"mb-2"},pt=e("i",{class:"bx bx-calendar me-1"},null,-1),ft={class:"mb-3"},gt={class:"section",id:"faqs"},bt=e("div",{class:"text-center mb-5"},[e("div",{class:"small-title"},"FAQs"),e("h4",null,"Frequently asked questions")],-1),vt={class:"vertical-nav"},wt=e("i",{class:"bx bx-help-circle nav-icon d-block mb-2"},null,-1),yt=e("p",{class:"fw-bold mb-0"},"General Questions",-1),kt={role:"tablist"},xt=e("div",null,"What is Lorem Ipsum ?",-1),Ct=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),Bt=e("p",{class:"mb-0"},"Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.",-1),Tt=e("div",null,"Why do we use it ?",-1),Et=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),It=e("p",{class:"mb-0"},"If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.",-1),Lt=e("div",null,"Where does it come from ?",-1),St=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),Dt=e("p",{class:"mb-0"},"It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.",-1),Ot=e("div",null,"Where can I get some ?",-1),jt=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),At=e("p",{class:"mb-0"},"To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.",-1),Ft=e("i",{class:"bx bx-receipt nav-icon d-block mb-2"},null,-1),qt=e("p",{class:"fw-bold mb-0"},"Token sale",-1),Wt={role:"tablist"},Pt=e("div",null,"Why do we use it ?",-1),zt=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),Ht=e("p",{class:"mb-0"},"If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.",-1),Nt=e("div",null,"What is Lorem Ipsum ?",-1),Rt=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),Mt=e("p",{class:"mb-0"},"Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.",-1),Gt=e("div",null,"Where can I get some ?",-1),Qt=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),Vt=e("p",{class:"mb-0"},"To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.",-1),Jt=e("div",null,"Where does it come from ?",-1),Kt=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),Ut=e("p",{class:"mb-0"},"It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.",-1),Yt=e("i",{class:"bx bx-timer d-block nav-icon mb-2"},null,-1),Xt=e("p",{class:"fw-bold mb-0"},"Roadmap",-1),Zt=e("div",null,"Where can I get some ?",-1),$t=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),el=e("p",{class:"mb-0"},"To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.",-1),sl=e("div",null,"What is Lorem Ipsum ?",-1),tl=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),ll=e("p",{class:"mb-0"},"Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.",-1),al=e("div",null,"Why do we use it ?",-1),ol=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),il=e("p",{class:"mb-0"},"If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.",-1),nl=e("div",null,"Where does it come from ?",-1),cl=e("i",{class:"mdi mdi-minus accor-plus-icon"},null,-1),dl=e("p",{class:"mb-0"},"It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.",-1),rl={class:"landing-footer"},ml={class:"mb-4 mb-lg-0"},ul=e("h5",{class:"mb-3 footer-list-title"},"Company",-1),_l={class:"list-unstyled footer-list-menu"},hl={class:"mb-4 mb-lg-0"},pl=e("h5",{class:"mb-3 footer-list-title"},"Resources",-1),fl={class:"list-unstyled footer-list-menu"},gl={class:"mb-4 mb-lg-0"},bl=e("h5",{class:"mb-3 footer-list-title"},"Links",-1),vl={class:"list-unstyled footer-list-menu"},wl={class:"mb-4 mb-lg-0"},yl=e("h5",{class:"mb-3 footer-list-title"},"Latest News",-1),kl={class:"blog-post"},xl=e("div",{class:"badge badge-soft-success font-size-11 mb-3"}," Cryptocurrency ",-1),Cl=e("h5",{class:"post-title"}," Donec pede justo aliquet nec ",-1),Bl=e("p",{class:"mb-0"},[e("i",{class:"bx bx-calendar me-1"}),l(" 04 Mar, 2020 ")],-1),Tl=e("div",{class:"badge badge-soft-success font-size-11 mb-3"}," Cryptocurrency ",-1),El=e("h5",{class:"post-title"}," In turpis, Pellentesque ",-1),Il=e("p",{class:"mb-0"},[e("i",{class:"bx bx-calendar me-1"}),l(" 12 Mar, 2020 ")],-1),Ll=e("hr",{class:"footer-border my-5"},null,-1),Sl={class:"mb-4"},Dl=["src"],Ol={class:"mb-2"},jl=e("p",null," It will be as simple as occidental in fact, it will be to an english person, it will seem like simplified English, as a skeptical ",-1);function Al(k,x,q,Fl,p,P){const z=d("router-link"),S=d("BButton"),a=d("BLink"),w=d("BContainer"),i=d("BCol"),H=d("BCrdHeader"),N=d("vue-countdown"),W=d("BProgressBar"),R=d("BProgress"),m=d("BCardBody"),u=d("BCard"),_=d("BRow"),D=d("swiper-slide"),O=d("swiper"),M=d("BCardFooter"),G=d("BBadge"),j=d("BCardTitle"),f=d("BCardHeader"),g=d("BCollapse"),A=d("BTab"),Q=d("b-card-text"),V=d("BTabs"),C=I("scroll-to"),J=I("scroll-spy-active"),b=I("b-toggle"),K=I("scroll-spy");return o(),y("div",null,[e("nav",Te,[t(w,null,{default:s(()=>[t(z,{class:"navbar-logo",to:"/"},{default:s(()=>[e("img",{src:p.logoDark,alt:"",height:"19",class:"logo logo-dark"},null,8,Ee),e("img",{src:p.logoLight,alt:"",height:"19",class:"logo logo-light"},null,8,Ie)]),_:1}),t(S,{variant:"white",class:"btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light",onClick:x[0]||(x[0]=n=>P.toggleMenu()),"data-toggle":"collapse","data-target":"#topnav-menu-content"},{default:s(()=>[Le]),_:1}),e("div",Se,[r((o(),y("ul",De,[e("li",Oe,[r((o(),c(a,{class:"nav-link",href:"#home"},{default:s(()=>[l("Home")]),_:1})),[[C,"#home"]])]),e("li",je,[r((o(),c(a,{class:"nav-link",href:"#about"},{default:s(()=>[l("About")]),_:1})),[[C,"#about"]])]),e("li",Ae,[r((o(),c(a,{class:"nav-link",href:"#features"},{default:s(()=>[l("Features")]),_:1})),[[C,"#features"]])]),e("li",Fe,[r((o(),c(a,{class:"nav-link",href:"#roadmap"},{default:s(()=>[l("Roadmap")]),_:1})),[[C,"#roadmap"]])]),e("li",qe,[r((o(),c(a,{class:"nav-link",href:"#team"},{default:s(()=>[l("Team")]),_:1})),[[C,"#team"]])]),e("li",We,[r((o(),c(a,{class:"nav-link",href:"#news"},{default:s(()=>[l("News")]),_:1})),[[C,"#news"]])]),e("li",Pe,[r((o(),c(a,{class:"nav-link",href:"#faqs"},{default:s(()=>[l("FAQs")]),_:1})),[[C,"#faqs"]])])])),[[J,{selector:"a.nav-link"}]]),e("div",ze,[t(a,{href:"#",class:"btn btn-outline-success w-xs"},{default:s(()=>[l("Sign in")]),_:1})])])]),_:1})]),r((o(),y("div",null,[e("section",He,[Ne,t(w,null,{default:s(()=>[t(_,{class:"align-items-center"},{default:s(()=>[t(i,{lg:"5"},{default:s(()=>[e("div",Re,[Me,Ge,e("div",Qe,[t(a,{href:"javascript: void(0);",class:"btn btn-success"},{default:s(()=>[l("Get Whitepaper")]),_:1}),t(a,{href:"javascript: void(0);",class:"btn btn-light ms-2"},{default:s(()=>[l("How it work")]),_:1})])])]),_:1}),t(i,{lg:"5",md:"8",sm:"10",class:"ms-lg-auto"},{default:s(()=>[t(u,{"no-body":"",class:"overflow-hidden mb-0 mt-5 mt-lg-0"},{default:s(()=>[t(H,{class:"text-center"},{default:s(()=>[Ve]),_:1}),t(m,null,{default:s(()=>[e("div",Je,[Ke,e("div",Ue,[t(N,{time:365*24*60*60*1e3,tag:"div",class:"counter-number ico-countdown d-flex"},{default:s(({days:n,hours:v,minutes:E,seconds:F})=>[e("div",Ye,[l(h(n)+" ",1),Xe]),e("div",Ze,[l(h(v)+" ",1),$e]),e("div",es,[l(h(E)+" ",1),ss]),e("div",ts,[l(h(F)+" ",1),ls])]),_:1})]),as,e("div",os,[is,ns,t(R,{class:"progress p-1 progress-xl softcap-progress"},{default:s(()=>[t(W,{variant:"info",style:{width:"15%"},"aria-valuenow":"15","aria-valuemin":"0","aria-valuemax":"100"},{default:s(()=>[cs]),_:1}),t(W,{striped:"",animated:k.animate,style:{width:"30%"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"},{default:s(()=>[ds]),_:1},8,["animated"])]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),e("section",rs,[t(w,null,{default:s(()=>[e("div",ms,[t(_,null,{default:s(()=>[(o(!0),y(B,null,T(p.cards,(n,v)=>(o(),c(i,{md:"4",key:v},{default:s(()=>[t(u,{"no-body":""},{default:s(()=>[t(m,null,{default:s(()=>[e("div",us,[e("div",_s,[e("span",{class:L(`avatar-title rounded-circle bg-${n.avatarClass}-subtle text-${n.avatarClass} font-size-18 mdi mdi-${n.avatar}`)},null,2)]),e("div",hs,[e("p",ps,h(n.name),1),e("h5",null,h(n.price),1),e("p",fs,[l(h(n.change)+" ",1),e("i",{class:L(n.changeClass)},null,2)])])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1})]),e("section",gs,[t(w,null,{default:s(()=>[t(_,null,{default:s(()=>[t(i,{lg:"12"},{default:s(()=>[bs]),_:1})]),_:1}),t(_,{class:"align-items-center"},{default:s(()=>[t(i,{lg:"5"},{default:s(()=>[e("div",vs,[ws,ys,ks,e("div",xs,[t(a,{href:"#",class:"btn btn-success me-2"},{default:s(()=>[l("Read More")]),_:1}),t(a,{href:"#",class:"btn btn-outline-primary"},{default:s(()=>[l("How It work")]),_:1})]),t(_,{class:"mt-4"},{default:s(()=>[t(i,{lg:"4",cols:"6"},{default:s(()=>[Cs]),_:1}),t(i,{lg:"4",cols:"6"},{default:s(()=>[Bs]),_:1})]),_:1})])]),_:1}),t(i,{lg:"6",class:"ms-auto"},{default:s(()=>[e("div",Ts,[t(_,null,{default:s(()=>[t(i,{sm:"6"},{default:s(()=>[t(u,{"no-body":"",class:"border"},{default:s(()=>[t(m,null,{default:s(()=>[Es,Is,Ls]),_:1}),e("div",Ss,[t(a,{href:"#",class:"text-primary"},{default:s(()=>[l("Learn more")]),_:1})])]),_:1})]),_:1}),t(i,{sm:"6"},{default:s(()=>[t(u,{"no-body":"",class:"border mt-lg-5"},{default:s(()=>[t(m,null,{default:s(()=>[Ds,Os,js]),_:1}),e("div",As,[t(a,{class:"text-primary"},{default:s(()=>[l("Learn more")]),_:1})])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),Fs,t(_,null,{default:s(()=>[t(i,{lg:"12"},{default:s(()=>[t(O,{loop:!0,modules:[p.Autoplay],"slides-per-view":4,breakpoints:k.breakpoints,"space-between":20,autoplay:{delay:2500,disableOnInteraction:!1}},{default:s(()=>[(o(!0),y(B,null,T(p.clients,(n,v)=>(o(),c(D,{key:v},{default:s(()=>[e("div",qs,[e("div",Ws,[e("img",{src:n.imageSrc,alt:"client-img",class:"mx-auto img-fluid d-block"},null,8,Ps)])])]),_:2},1024))),128))]),_:1},8,["modules","breakpoints"])]),_:1})]),_:1})]),_:1})]),e("section",zs,[t(w,null,{default:s(()=>[t(_,null,{default:s(()=>[t(i,{lg:"12"},{default:s(()=>[Hs]),_:1})]),_:1}),t(_,{class:"align-items-center pt-4"},{default:s(()=>[t(i,{md:"6",sm:"8"},{default:s(()=>[e("div",null,[e("img",{src:p.img1,alt:"",class:"img-fluid mx-auto d-block"},null,8,Ns)])]),_:1}),t(i,{md:"5",class:"ml-auto",style:{"margin-left":"95px"}},{default:s(()=>[Rs]),_:1})]),_:1}),t(_,{class:"align-items-center mt-5 pt-md-5"},{default:s(()=>[t(i,{md:"5"},{default:s(()=>[Ms]),_:1}),t(i,{md:"6",sm:"8",class:"ms-md-auto"},{default:s(()=>[e("div",Gs,[e("img",{src:p.img2,alt:"",class:"img-fluid mx-auto d-block"},null,8,Qs)])]),_:1})]),_:1})]),_:1})]),e("section",Vs,[t(w,null,{default:s(()=>[t(_,null,{default:s(()=>[t(i,{lg:"12"},{default:s(()=>[Js]),_:1})]),_:1}),t(_,{class:"mt-4"},{default:s(()=>[t(i,{lg:"12"},{default:s(()=>[e("div",Ks,[t(O,{class:"swiper-wrapper",loop:!0,modules:[p.Autoplay,p.Navigation,p.Pagination],"slides-per-view":3,"space-between":10,breakpoints:k.breakpoints,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{clickable:!0,el:".swiper-pagination"}},{default:s(()=>[(o(!0),y(B,null,T(p.timelineData,(n,v)=>(o(),c(D,{key:v},{default:s(()=>[e("div",{class:L(["item event-list text-center",{active:n.active}])},[e("div",null,[e("div",Us,[e("div",Ys,h(n.date),1),e("h5",Xs,h(n.title),1)]),Zs,e("div",$s,[e("p",et,h(n.description),1)])])],2)]),_:2},1024))),128)),e("div",st,[t(S,{role:"presentation",class:"owl-prev swiper-button-prev"}),t(S,{role:"presentation",class:"owl-next swiper-button-next"})])]),_:1},8,["modules","breakpoints"])])]),_:1})]),_:1})]),_:1})]),e("section",tt,[t(w,{c:""},{default:s(()=>[t(_,null,{default:s(()=>[t(i,{lg:"12"},{default:s(()=>[lt]),_:1})]),_:1}),t(i,{lg:"12"},{default:s(()=>[t(O,{class:"mySwiper",loop:!0,modules:[p.Autoplay],"slides-per-view":4,"space-between":20,autoplay:{delay:2500,disableOnInteraction:!1}},{default:s(()=>[(o(!0),y(B,null,T(p.teamData,(n,v)=>(o(),c(D,{key:v},{default:s(()=>[t(u,{"no-body":"",class:"text-center team-box"},{default:s(()=>[t(m,null,{default:s(()=>[e("div",null,[e("img",{src:n.image,alt:"",class:"rounded teambg"},null,8,at)]),e("div",ot,[e("h5",null,h(n.name),1),e("p",it,h(n.role),1)])]),_:2},1024),t(M,{class:"bg-transparent border-top"},{default:s(()=>[e("div",nt,[(o(!0),y(B,null,T(n.socialLinks,(E,F)=>(o(),y("div",{class:"flex-fill",key:F},[t(a,{href:"javascript:void(0);","data-bs-toggle":"tooltip","data-bs-placement":"top",title:E.title},{default:s(()=>[e("i",{class:L(E.iconClass)},null,2)]),_:2},1032,["title"])]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modules"])]),_:1})]),_:1})]),e("section",ct,[t(w,null,{default:s(()=>[t(_,null,{default:s(()=>[t(i,{lg:"12"},{default:s(()=>[dt]),_:1})]),_:1}),t(_,null,{default:s(()=>[(o(!0),y(B,null,T(p.blogData,(n,v)=>(o(),c(i,{key:v,xl:"4",sm:"6"},{default:s(()=>[e("div",rt,[e("div",mt,[e("img",{src:n.image,alt:"",class:"rounded img-fluid mx-auto d-block"},null,8,ut),t(G,{variant:"success",class:"blog-badge font-size-11"},{default:s(()=>[l("Cryptocurrency")]),_:1})]),e("div",_t,[e("p",ht,[pt,l(" "+h(n.date),1)]),e("h5",ft,h(n.title),1),e("p",null,h(n.content),1),e("div",null,[t(a,{href:"#"},{default:s(()=>[l("Read more")]),_:1})])])])]),_:2},1024))),128))]),_:1})]),_:1})]),e("section",gt,[t(w,null,{default:s(()=>[t(_,null,{default:s(()=>[t(i,{lg:"12"},{default:s(()=>[bt]),_:1})]),_:1}),t(_,null,{default:s(()=>[t(i,{lg:"12"},{default:s(()=>[e("div",vt,[t(V,{pills:"",vertical:"","nav-wrapper-class":"col-lg-2 col-sm-4"},{default:s(()=>[t(A,{active:""},{title:s(()=>[wt,yt]),default:s(()=>[t(u,{"no-body":""},{default:s(()=>[t(m,null,{default:s(()=>[t(j,{class:"mb-4"},{default:s(()=>[l("General Questions")]),_:1}),e("div",kt,[t(u,{"no-body":"",class:"custom-accordion shadow-none mb-3"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list collapsed p-0"},{default:s(()=>[xt,Ct]),_:1})),[[b,void 0,void 0,{"accordion-1":!0}]])]),_:1}),t(g,{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[Bt]),_:1})]),_:1})]),_:1}),t(u,{"no-body":"",class:"custom-accordion shadow-none mb-3"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list p-0"},{default:s(()=>[Tt,Et]),_:1})),[[b,void 0,void 0,{"accordion-2":!0}]])]),_:1}),t(g,{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[It]),_:1})]),_:1})]),_:1}),t(u,{"no-body":"",class:"custom-accordion shadow-none mb-3"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list p-0"},{default:s(()=>[Lt,St]),_:1})),[[b,void 0,void 0,{"accordion-3":!0}]])]),_:1}),t(g,{id:"accordion-3",accordion:"my-accordion",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[Dt]),_:1})]),_:1})]),_:1}),t(u,{"no-body":"",class:"custom-accordion shadow-none mb-0"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list collapsed p-0"},{default:s(()=>[Ot,jt]),_:1})),[[b,void 0,void 0,{"accordion-4":!0}]])]),_:1}),t(g,{id:"accordion-4",accordion:"my-accordion",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[At]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),t(A,null,{title:s(()=>[Ft,qt]),default:s(()=>[t(u,{"no-body":""},{default:s(()=>[t(m,null,{default:s(()=>[t(j,{class:"mb-4"},{default:s(()=>[l("Token Sale")]),_:1}),e("div",Wt,[t(u,{"no-body":"",class:"custom-accordion shadow-none mb-3"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list p-0"},{default:s(()=>[Pt,zt]),_:1})),[[b,void 0,void 0,{"accordion-2":!0}]])]),_:1}),t(g,{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[Ht]),_:1})]),_:1})]),_:1}),t(u,{"no-body":"",class:"custom-accordion shadow-none mb-3"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list collapsed p-0"},{default:s(()=>[Nt,Rt]),_:1})),[[b,void 0,void 0,{"accordion-1":!0}]])]),_:1}),t(g,{id:"accordion-1",accordion:"my-accordion",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[Mt]),_:1})]),_:1})]),_:1}),t(u,{"no-body":"",class:"custom-accordion shadow-none mb-3"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list collapsed p-0"},{default:s(()=>[Gt,Qt]),_:1})),[[b,void 0,void 0,{"accordion-4":!0}]])]),_:1}),t(g,{id:"accordion-4",visible:"",accordion:"my-accordion",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[Vt]),_:1})]),_:1})]),_:1}),t(u,{"no-body":"",class:"custom-accordion shadow-none mb-0"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list p-0"},{default:s(()=>[Jt,Kt]),_:1})),[[b,void 0,void 0,{"accordion-3":!0}]])]),_:1}),t(g,{id:"accordion-3",accordion:"my-accordion",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[Ut]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),t(A,null,{title:s(()=>[Yt,Xt]),default:s(()=>[t(Q,null,{default:s(()=>[t(u,{"no-body":""},{default:s(()=>[t(m,null,{default:s(()=>[t(j,{class:"mb-4"},{default:s(()=>[l("Roadmap")]),_:1}),t(u,{"no-body":"",class:"custom-accordion shadow-none mb-3"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list collapsed p-0"},{default:s(()=>[Zt,$t]),_:1})),[[b,void 0,void 0,{"demoaccordion-1":!0}]])]),_:1}),t(g,{id:"demoaccordion-1",visible:"",accordion:"accordion-1",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[el]),_:1})]),_:1})]),_:1}),t(u,{"no-body":"",class:"custom-accordion shadow-none mb-3"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list collapsed p-0"},{default:s(()=>[sl,tl]),_:1})),[[b,void 0,void 0,{"demoaccordion-2":!0}]])]),_:1}),t(g,{id:"demoaccordion-2",accordion:"accordion-1",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[ll]),_:1})]),_:1})]),_:1}),t(u,{"no-body":"",class:"custom-accordion shadow-none mb-3"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list p-0"},{default:s(()=>[al,ol]),_:1})),[[b,void 0,void 0,{"demoaccordion-3":!0}]])]),_:1}),t(g,{id:"demoaccordion-3",visible:"",accordion:"accordion-1",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[il]),_:1})]),_:1})]),_:1}),t(u,{"no-body":"",class:"custom-accordion shadow-none mb-0"},{default:s(()=>[t(f,{"header-tag":"header",role:"tab"},{default:s(()=>[r((o(),c(a,{href:"javascript: void(0);",class:"accordion-list p-0"},{default:s(()=>[nl,cl]),_:1})),[[b,void 0,void 0,{"demoaccordion-4":!0}]])]),_:1}),t(g,{id:"demoaccordion-4",accordion:"accordion-1",role:"tabpanel"},{default:s(()=>[t(m,null,{default:s(()=>[dl]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),e("footer",rl,[t(w,null,{default:s(()=>[t(_,null,{default:s(()=>[t(i,{lg:"3",sm:"6"},{default:s(()=>[e("div",ml,[ul,e("ul",_l,[e("li",null,[t(a,{href:"#"},{default:s(()=>[l("About Us")]),_:1})]),e("li",null,[t(a,{href:"#"},{default:s(()=>[l("Features")]),_:1})]),e("li",null,[t(a,{href:"#"},{default:s(()=>[l("Team")]),_:1})]),e("li",null,[t(a,{href:"#"},{default:s(()=>[l("News")]),_:1})]),e("li",null,[t(a,{href:"#"},{default:s(()=>[l("FAQs")]),_:1})])])])]),_:1}),t(i,{lg:"3",sm:"6"},{default:s(()=>[e("div",hl,[pl,e("ul",fl,[e("li",null,[t(a,{href:"#"},{default:s(()=>[l("Whitepaper")]),_:1})]),e("li",null,[t(a,{href:"#"},{default:s(()=>[l("Token sales")]),_:1})]),e("li",null,[t(a,{href:"#"},{default:s(()=>[l("Privacy Policy")]),_:1})]),e("li",null,[t(a,{href:"#"},{default:s(()=>[l("Terms & Conditions")]),_:1})])])])]),_:1}),t(i,{lg:"3",sm:"6"},{default:s(()=>[e("div",gl,[bl,e("ul",vl,[e("li",null,[t(a,{href:"#"},{default:s(()=>[l("Tokens")]),_:1})]),e("li",null,[t(a,{href:"#"},{default:s(()=>[l("Roadmap")]),_:1})]),e("li",null,[t(a,{href:"#"},{default:s(()=>[l("FAQs")]),_:1})])])])]),_:1}),t(i,{lg:"3",sm:"6"},{default:s(()=>[e("div",wl,[yl,e("div",kl,[t(a,{href:"#",class:"post"},{default:s(()=>[xl,Cl,Bl]),_:1}),t(a,{href:"#",class:"post"},{default:s(()=>[Tl,El,Il]),_:1})])])]),_:1})]),_:1}),Ll,t(_,null,{default:s(()=>[t(i,{lg:"6"},{default:s(()=>[e("div",Sl,[e("img",{src:p.logoLight,alt:"",height:"20"},null,8,Dl)]),e("p",Ol,h(new Date().getFullYear())+" © Skote. Design & Develop by Themesbrand ",1),jl]),_:1})]),_:1})]),_:1})])])),[[K]])])}const fa=de(Be,[["render",Al]]);export{fa as default};
