import{L as U,s as Y}from"./main-611df75c.js";import{P as K}from"./page-header-1e01951d.js";import{i as R}from"./img-1-9be92e7d.js";import{i as A,a as V}from"./img-6-dd6c3b71.js";import{a as X}from"./avatar-1-15b743f1.js";import{a as Q}from"./avatar-2-22bc0be9.js";import{_ as Z,c as C,w as e,r as i,o as c,b as s,a as t,i as m,k as x,F as w,d as a,n as v,t as n,I as $}from"../js/app2.js";import"./logo-light-9f0efe74.js";import"./logo-9faa3827.js";import"./avatar-3-36dc574b.js";import"./axios-9cbf0d09.js";const tt=[{id:1,cardClass:"mini-stats-wid",label:"Total Post",value:120,iconClass:"bx bxs-book-bookmark"},{id:2,cardClass:"blog-stats-wid",label:"Pages",value:86,iconClass:"bx bxs-note"},{id:3,cardClass:"blog-stats-wid",label:"Comments",value:"4,235",iconClass:"bx bxs-message-square-dots"}],et=[{id:1,title:"Today",value:1024,percentChange:""},{id:2,title:"This Month",value:12356,percentChange:"0.2 %",arrow:"mdi mdi-arrow-up ms-1"},{id:3,title:"This Year",value:102354,percentChange:"0.1 %",arrow:"mdi mdi-arrow-up ms-1"}],st=[{id:1,location:"California",percentage:"78%"},{id:2,location:"Nevada",percentage:"69%",progressColor:"warning"},{id:3,location:"Texas",percentage:"61%",progressColor:"success"}],at=[{id:1,iconClass:"bxs-right-arrow-circle font-size-18 bx-fade-right text-primary",date:"10 Nov",content:"Posted Beautiful Day with Friends blog...",link:"#",linkText:"View"},{id:2,iconClass:"bx-right-arrow-circle font-size-18",date:"08 Nov",content:"If several languages coalesce, the grammar of the resulting...",link:"#",linkText:"Read"},{id:3,iconClass:"bx-right-arrow-circle font-size-18",date:"02 Nov",content:"Create Drawing a sketch blog",link:"#",linkText:""},{id:4,iconClass:"bx-right-arrow-circle font-size-18",date:"24 Oct",content:"In enim justo, rhoncus ut, imperdiet a venenatis vitae",link:"#",linkText:""},{id:5,iconClass:"bx-right-arrow-circle font-size-18",date:"21 Oct",content:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut",link:"#",linkText:""}],lt=[{id:1,imageSrc:A,title:"Beautiful Day with Friends",date:"10 Nov, 2020",likes:125,comments:68,link:"#"},{id:2,imageSrc:V,title:"Drawing a sketch",date:"02 Nov, 2020",likes:102,comments:48,link:"#"},{id:3,imageSrc:R,title:"Riding bike on road",date:"24 Oct, 2020",likes:98,comments:35,link:"#"},{id:4,imageSrc:A,title:"Project discussion with team",date:"15 Oct, 2020",likes:92,comments:22,link:"#"}];const ot={components:{Layout:U,PageHeader:K,simplebar:Y},data(){return{title:"Blog",avatar1:X,avatar2:Q,items:tt,visitorData:et,topVisitorsData:st,activityData:at,blogPostData:lt,chartData:{series:[{name:"Current",data:[18,21,45,36,65,47,51,32,40,28,31,26]},{name:"Previous",data:[30,11,22,18,32,23,58,45,30,36,15,34]}],chartoptions:{chart:{height:350,type:"area",toolbar:{show:!1}},colors:["#556ee6","#f1b44c"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},markers:{size:3,strokeWidth:3,hover:{size:4,sizeOffset:2}},legend:{position:"top",horizontalAlign:"right"}}},postData:[{image:A,title:"Beautiful Day with Friends",date:"10 Nov, 2020"},{image:V,title:"Drawing a sketch",date:"02 Nov, 2020"},{image:A,title:"Project discussion with team",date:"24 Oct, 2020"},{image:R,title:"Riding bike on road",date:"20 Oct, 2020"}],selection:"all"}},methods:{updateData:function(S){switch(this.selection=S,S){case"one_month":this.chartData.series=[{name:"Current",data:[12,22,38,42,32,40,51,36,51,29,38,36]},{name:"Previous",data:[22,31,36,26,47,56,42,64,61,52,42,31]}];break;case"six_months":this.chartData.series=[{name:"Current",data:[31,40,28,51,42,40,51,36,40,39,31,36]},{name:"Previous",data:[11,32,45,32,34,22,51,60,51,52,40,31]}];break;case"one_year":this.chartData.series=[{name:"Current",data:[28,22,38,42,32,40,51,36,51,29,38,36]},{name:"Previous",data:[22,31,36,26,47,56,42,64,61,52,42,31]}];break;case"all":this.chartData.series=[{name:"Current",data:[18,21,45,36,65,47,51,32,40,28,31,26]},{name:"Previous",data:[30,11,22,18,32,23,58,45,30,36,15,34]}];break}}}},it={class:"d-flex flex-wrap"},nt={class:"me-3"},dt={class:"text-muted mb-2"},ct={class:"mb-0"},rt={class:"avatar-sm ms-auto"},ut={class:"avatar-title bg-light rounded-circle text-primary font-size-20"},_t={class:"d-flex flex-wrap"},mt={class:"ms-auto"},ht={class:"toolbar button-items text-end"},ft={class:"mt-4"},pt={class:"text-muted mb-1"},gt={class:"text-success font-size-13"},vt=t("hr",{class:"mb-4"},null,-1),bt={class:"d-flex"},xt={class:"me-3"},wt=["src"],yt={class:"flex-grow-1"},kt={class:"d-flex"},Bt=t("div",{class:"flex-grow-1"},[t("div",{class:"text-muted"},[t("h5",{class:"mb-1"},"Henry wells"),t("p",{class:"mb-0"},"UI / UX Designer")])],-1),Ct=t("i",{class:"bx bxs-cog align-middle me-1"},null,-1),zt=t("hr",null,null,-1),Dt=t("div",null,[t("p",{class:"text-muted text-truncate mb-2"},"Total Post"),t("h5",{class:"mb-0"},"32")],-1),Tt=t("div",null,[t("p",{class:"text-muted text-truncate mb-2"},"Subscribes"),t("h5",{class:"mb-0"},"10k")],-1),At={class:"d-flex flex-wrap"},St=t("i",{class:"mdi mdi-dots-horizontal"},null,-1),Pt=t("div",{class:"d-flex flex-wrap"},[t("div",null,[t("p",{class:"text-muted mb-1"},"Total Subscribe"),t("h4",{class:"mb-3"},"10,512"),t("p",{class:"text-success mb-0"},[t("span",null,[a("0.6 % "),t("i",{class:"mdi mdi-arrow-top-right ms-1"})])])]),t("div",{class:"ms-auto align-self-end"},[t("i",{class:"bx bx-group display-4 text-light"})])],-1),Lt={class:"text-center"},Nt=t("div",{class:"avatar-md mx-auto mb-4"},[t("div",{class:"avatar-title bg-light rounded-circle text-primary h1"},[t("i",{class:"mdi mdi-email-open"})])],-1),It=t("h4",{class:"text-primary"},"Subscribe !",-1),Rt=t("p",{class:"text-muted font-size-14 mb-4"}," Subscribe our newletter and get notification to stay update. ",-1),Vt={class:"input-group bg-light rounded"},jt=t("input",{type:"email",class:"form-control bg-transparent border-0",placeholder:"Enter Email address","aria-label":"Recipient's username","aria-describedby":"button-addon2"},null,-1),Mt={class:"input-group-append"},Ot=t("i",{class:"bx bxs-paper-plane"},null,-1),qt={class:"flex-wrap blog-card"},Ft={class:"list-group list-group-flush"},Gt={class:"d-flex"},Ht={class:"me-3"},Et=["src"],Jt={class:"align-self-center overflow-hidden me-auto"},Wt={class:"font-size-14 text-truncate"},Ut={class:"text-muted mb-0"},Yt=t("i",{class:"mdi mdi-dots-horizontal"},null,-1),Kt={class:"list-group list-group-flush"},Xt={class:"d-flex"},Qt={class:"me-3"},Zt=["src"],$t={class:"align-self-center overflow-hidden me-auto"},te={class:"font-size-14 text-truncate"},ee={class:"text-muted mb-0"},se=t("i",{class:"mdi mdi-dots-horizontal"},null,-1),ae={class:"d-flex flex-wrap"},le={class:"me-2"},oe=t("i",{class:"mdi mdi-dots-horizontal"},null,-1),ie={class:"d-flex"},ne=t("div",{class:"avatar-xs me-3"},[t("div",{class:"avatar-title rounded-circle bg-light text-primary"},[t("i",{class:"bx bxs-user"})])],-1),de={class:"flex-grow-1"},ce=t("h5",{class:"font-size-14 mb-1"},[a(" Delores Williams "),t("small",{class:"text-muted float-end"},"1 hr Ago")],-1),re=t("p",{class:"text-muted"}," If several languages coalesce, the grammar of the resulting of the individual ",-1),ue=t("i",{class:"mdi mdi-reply me-1"},null,-1),_e={class:"d-flex"},me={class:"avatar-xs me-3"},he=["src"],fe={class:"flex-grow-1"},pe=t("h5",{class:"font-size-14 mb-1"},[a(" Clarence Smith "),t("small",{class:"text-muted float-end"},"2 hrs Ago")],-1),ge=t("p",{class:"text-muted"}," Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet ",-1),ve=t("i",{class:"mdi mdi-reply"},null,-1),be={class:"d-flex"},xe=t("div",{class:"flex-shrink-0 me-3"},[t("div",{class:"avatar-xs"},[t("div",{class:"avatar-title rounded-circle bg-light text-primary"},[t("i",{class:"bx bxs-user"})])])],-1),we={class:"flex-grow-1"},ye=t("h5",{class:"font-size-14 mb-1"},[a(" Delores Williams "),t("small",{class:"text-muted float-end"},"1 hr Ago")],-1),ke=t("p",{class:"text-muted"}," If several languages coalesce, the grammar of the resulting of the individual ",-1),Be=t("i",{class:"mdi mdi-reply me-1"},null,-1),Ce={class:"d-flex"},ze=t("div",{class:"avatar-xs me-3"},[t("div",{class:"avatar-title rounded-circle bg-light text-primary"},[t("i",{class:"bx bxs-user"})])],-1),De={class:"flex-grow-1"},Te=t("h5",{class:"font-size-14 mb-1"},[a(" Keith McCoy "),t("small",{class:"text-muted float-end"},"12 Aug")],-1),Ae=t("p",{class:"text-muted"}," Donec posuere vulputate arcu. phasellus accumsan cursus velit ",-1),Se=t("i",{class:"mdi mdi-reply"},null,-1),Pe={class:"d-flex flex-wrap"},Le={class:"me-2"},Ne=t("i",{class:"mdi mdi-dots-horizontal"},null,-1),Ie=t("div",{class:"mt-3"},[t("p",{class:"text-muted mb-1"},"Today"),t("h5",null,"1024")],-1),Re=t("div",{class:"mt-3"},[t("p",{class:"text-muted mb-1"},"This Month"),t("h5",null,[a(" 12356 "),t("span",{class:"text-success font-size-13"},[a("0.2 % "),t("i",{class:"mdi mdi-arrow-up ms-1"})])])],-1),Ve=t("hr",null,null,-1),je={class:"py-2"},Me={class:"font-size-14"},Oe={class:"float-end"},qe={class:"d-flex"},Fe={class:"me-2"},Ge=t("i",{class:"mdi mdi-dots-horizontal"},null,-1),He={class:"verti-timeline list-unstyled"},Ee={class:"event-timeline-dot"},Je={class:"d-flex"},We={class:"me-3"},Ue={class:"font-size-14"},Ye=t("i",{class:"bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"},null,-1),Ke={class:"flex-grow-1"},Xe={class:"text-center mt-4"},Qe=t("i",{class:"mdi mdi-arrow-right ms-1"},null,-1),Ze={class:"d-flex"},$e={class:"me-2"},ts=t("i",{class:"mdi mdi-dots-horizontal"},null,-1),es={class:"table-responsive mb-0"},ss=["src"],as={class:"font-size-13 text-truncate mb-1"},ls={class:"text-muted mb-0"},os=t("i",{class:"bx bx-like align-middle me-1"},null,-1),is=t("i",{class:"bx bx-comment-dots align-middle me-1"},null,-1),ns=t("i",{class:"mdi mdi-dots-horizontal"},null,-1);function ds(S,p,cs,rs,d,z){const j=i("PageHeader"),u=i("BCardBody"),_=i("BCard"),r=i("BCol"),g=i("BRow"),b=i("BCardTitle"),k=i("BButton"),M=i("apexchart"),o=i("BDropdownItem"),h=i("BDropdown"),y=i("BDropdownDivider"),f=i("BLink"),D=i("simplebar"),L=i("BTab"),O=i("BTabs"),q=i("BCardHeader"),P=i("BListGroupItem"),F=i("liBListGroupItem"),N=i("BListGroup"),G=i("BProgressBar"),H=i("BProgress"),T=i("BTh"),I=i("BTr"),B=i("BTd"),E=i("BTbody"),J=i("BTableSimple"),W=i("Layout");return c(),C(W,null,{default:e(()=>[s(j,{title:"Blog",pageTitle:"Dashboards"}),t("div",null,[s(g,null,{default:e(()=>[s(r,{xl:"8"},{default:e(()=>[s(g,null,{default:e(()=>[(c(!0),m(w,null,x(d.items,l=>(c(),C(r,{lg:"4",key:l.id},{default:e(()=>[s(_,{"no-body":"",class:v(l.cardClass)},{default:e(()=>[s(u,null,{default:e(()=>[t("div",it,[t("div",nt,[t("p",dt,n(l.label),1),t("h5",ct,n(l.value),1)]),t("div",rt,[t("div",ut,[t("i",{class:v(l.iconClass)},null,2)])])])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024))),128))]),_:1}),s(_,{"no-body":""},{default:e(()=>[s(u,null,{default:e(()=>[t("div",_t,[s(b,{class:"me-2"},{default:e(()=>[a("Visitors")]),_:1}),t("div",mt,[t("div",ht,[s(k,{variant:"light",class:v(["ms-2",{active:d.selection==="all"}]),size:"sm",onClick:p[0]||(p[0]=l=>z.updateData("all"))},{default:e(()=>[a(" ALL ")]),_:1},8,["class"]),s(k,{variant:"light",class:v(["ms-2",{active:d.selection==="one_month"}]),size:"sm",onClick:p[1]||(p[1]=l=>z.updateData("one_month"))},{default:e(()=>[a(" 1M ")]),_:1},8,["class"]),s(k,{variant:"light",class:v(["ms-2",{active:d.selection==="six_months"}]),size:"sm",onClick:p[2]||(p[2]=l=>z.updateData("six_months"))},{default:e(()=>[a(" 6M ")]),_:1},8,["class"]),s(k,{variant:"light",class:v(["ms-2",{active:d.selection==="one_year"}]),size:"sm",onClick:p[3]||(p[3]=l=>z.updateData("one_year"))},{default:e(()=>[a(" 1Y ")]),_:1},8,["class"])])])]),s(g,{class:"text-center"},{default:e(()=>[(c(!0),m(w,null,x(d.visitorData,l=>(c(),C(r,{lg:"4",key:l.id},{default:e(()=>[t("div",ft,[t("p",pt,n(l.title),1),t("h5",null,[a(n(l.value)+" ",1),t("span",gt,[a(n(l.percentChange)+" ",1),t("i",{class:v(`${l.arrow}`)},null,2)])])])]),_:2},1024))),128))]),_:1}),vt,s(M,{class:"apex-charts",dir:"ltr",height:"350",width:"1022",series:d.chartData.series,options:d.chartData.chartoptions},null,8,["series","options"])]),_:1})]),_:1})]),_:1}),s(r,{xl:"4"},{default:e(()=>[s(_,{"no-body":""},{default:e(()=>[s(u,null,{default:e(()=>[t("div",bt,[t("div",xt,[t("img",{src:d.avatar1,alt:"",class:"avatar-sm rounded-circle img-thumbnail"},null,8,wt)]),t("div",yt,[t("div",kt,[Bt,s(h,{"toggle-class":"btn-sm",variant:"light",right:"",class:"ms-2 p-0","menu-class":"dropdown-menu-end"},{"button-content":e(()=>[Ct,a(" Setting ")]),default:e(()=>[s(o,{class:"dropdown-item",href:"#"},{default:e(()=>[a("Action")]),_:1}),s(o,{class:"dropdown-item",href:"#"},{default:e(()=>[a("Another action")]),_:1}),s(o,{class:"dropdown-item",href:"#"},{default:e(()=>[a("Something else")]),_:1})]),_:1})]),zt,s(g,null,{default:e(()=>[s(r,{cols:"4"},{default:e(()=>[Dt]),_:1}),s(r,{cols:"4"},{default:e(()=>[Tt]),_:1})]),_:1})])])]),_:1})]),_:1}),s(_,{"no-body":""},{default:e(()=>[s(u,null,{default:e(()=>[t("div",At,[s(b,{class:"mb-3 me-2"},{default:e(()=>[a("Subscribes")]),_:1}),s(h,{"toggle-class":"text-muted font-size-16 p-0",variant:"white",right:"",class:"ms-auto","menu-class":"dropdown-menu-end"},{"button-content":e(()=>[St]),default:e(()=>[s(o,{href:"#"},{default:e(()=>[a("Action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Another action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Something else here")]),_:1}),s(y),s(o,{href:"#"},{default:e(()=>[a("Separated link")]),_:1})]),_:1})]),Pt]),_:1})]),_:1}),s(_,{"no-body":""},{default:e(()=>[s(u,{class:"p-4"},{default:e(()=>[t("div",Lt,[Nt,s(g,{class:"justify-content-center"},{default:e(()=>[s(r,{xl:"10"},{default:e(()=>[It,Rt,t("div",Vt,[jt,t("div",Mt,[s(k,{variant:"primary",class:"rounded",id:"button-addon2"},{default:e(()=>[Ot]),_:1})])])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),s(g,null,{default:e(()=>[s(r,{xl:"4",lg:"6"},{default:e(()=>[s(_,{"no-body":"",style:{position:"relative"}},{default:e(()=>[s(q,{class:"bg-transparent border-bottom"},{default:e(()=>[t("div",qt,[s(b,{class:"mt-2"},{default:e(()=>[a("Posts")]),_:1}),s(O,{"nav-class":"nav-tabs-custom card-header-tabs ms-auto tamp","nav-wrapper-class":"nav-item",align:"right"},{default:e(()=>[s(L,{title:"Recent",active:""},{default:e(()=>[s(u,{class:"pb-1 mb-3 mt-2"},{default:e(()=>[s(D,{"data-simplebar":"",style:{"max-height":"285px"}},{default:e(()=>[t("ul",Ft,[(c(!0),m(w,null,x(d.postData,l=>(c(),m("li",{class:"list-group-item",key:l.title},[t("div",Gt,[t("div",Ht,[t("img",{src:l.image,alt:"",class:"avatar-md h-auto d-block rounded"},null,8,Et)]),t("div",Jt,[t("div",null,[t("h5",Wt,[s(f,{class:"text-dark"},{default:e(()=>[a(n(l.title),1)]),_:2},1024)]),t("p",Ut,n(l.date),1)])]),s(h,{class:"ms-2","toggle-class":"text-muted font-size-16 p-0","toggle-tag":"a",variant:"white","menu-class":"dropdown-menu-end",right:""},{"button-content":e(()=>[Yt]),default:e(()=>[s(o,null,{default:e(()=>[a("Action")]),_:1}),s(o,null,{default:e(()=>[a("Another Action")]),_:1}),s(o,null,{default:e(()=>[a("Third Action")]),_:1}),s(o,null,{default:e(()=>[a("Something else here")]),_:1})]),_:1})])]))),128))])]),_:1})]),_:1})]),_:1}),s(L,{title:"Popular"},{default:e(()=>[s(u,{class:"pb-1"},{default:e(()=>[s(D,{"data-simplebar":"",style:{"max-height":"285px"}},{default:e(()=>[t("ul",Kt,[(c(!0),m(w,null,x(d.postData,l=>(c(),m("li",{class:"list-group-item",key:l.title},[t("div",Xt,[t("div",Qt,[t("img",{src:l.image,alt:"",class:"avatar-md h-auto d-block rounded"},null,8,Zt)]),t("div",$t,[t("div",null,[t("h5",te,[s(f,{class:"text-dark"},{default:e(()=>[a(n(l.title),1)]),_:2},1024)]),t("p",ee,n(l.date),1)])]),s(h,{class:"ms-2","toggle-class":"text-muted font-size-14 p-0",variant:"white","menu-class":"dropdown-menu-end",right:""},{"button-content":e(()=>[se]),default:e(()=>[s(o,null,{default:e(()=>[a("Action")]),_:1}),s(o,null,{default:e(()=>[a("Another Action")]),_:1}),s(o,null,{default:e(()=>[a("Third Action")]),_:1}),s(o,null,{default:e(()=>[a("Something else here")]),_:1})]),_:1})])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),s(r,{xl:"4",lg:"6"},{default:e(()=>[s(_,{"no-body":""},{default:e(()=>[s(u,null,{default:e(()=>[t("div",ae,[t("div",le,[s(b,{class:"mb-3"},{default:e(()=>[a("Comments")]),_:1})]),s(h,{class:"ms-auto",variant:"white","menu-class":"dropdown-menu-end","toggle-class":"font-size-16 p-0",right:""},{"button-content":e(()=>[oe]),default:e(()=>[s(o,{href:"#"},{default:e(()=>[a("Action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Another action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Something else here")]),_:1}),s(y),s(o,{href:"#"},{default:e(()=>[a("Separated link")]),_:1})]),_:1})]),s(D,{style:{"max-height":"310px"}},{default:e(()=>[s(N,null,{default:e(()=>[s(P,{class:"py-3"},{default:e(()=>[t("div",ie,[ne,t("div",de,[ce,re,t("div",null,[s(f,{href:"javascript: void(0);",class:"text-success"},{default:e(()=>[ue,a(" Reply ")]),_:1})])])])]),_:1}),s(P,{class:"py-3"},{default:e(()=>[t("div",_e,[t("div",me,[t("img",{src:d.avatar2,alt:"",class:"img-fluid d-block rounded-circle"},null,8,he)]),t("div",fe,[pe,ge,t("div",null,[s(f,{href:"javascript: void(0);",class:"text-success"},{default:e(()=>[ve,a(" Reply ")]),_:1})]),t("div",be,[xe,t("div",we,[ye,ke,t("div",null,[s(f,{href:"javascript: void(0);",class:"text-success"},{default:e(()=>[Be,a(" Reply ")]),_:1})])])])])])]),_:1}),s(F,{class:"py-3"},{default:e(()=>[t("div",Ce,[ze,t("div",De,[Te,Ae,t("div",null,[s(f,{href:"javascript: void(0);",class:"text-success"},{default:e(()=>[Se,a(" Reply ")]),_:1})])])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(r,{xl:"4"},{default:e(()=>[s(_,{"no-body":""},{default:e(()=>[s(u,null,{default:e(()=>[t("div",Pe,[t("div",Le,[s(b,{class:"mb-3"},{default:e(()=>[a("Top Visitors")]),_:1})]),s(h,{class:"ms-auto","toggle-tag":"a","menu-class":"dropdown-menu-end","toggle-class":"font-size-16 p-0",variant:"white",right:""},{"button-content":e(()=>[Ne]),default:e(()=>[s(o,{href:"#"},{default:e(()=>[a("Action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Another action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Something else here")]),_:1}),s(y),s(o,{href:"#"},{default:e(()=>[a("Separated link")]),_:1})]),_:1})]),s(g,{class:"text-center"},{default:e(()=>[s(r,{cols:"6"},{default:e(()=>[Ie]),_:1}),s(r,{cols:"6"},{default:e(()=>[Re]),_:1})]),_:1}),Ve,t("div",null,[s(N,{class:"list-group-flush"},{default:e(()=>[(c(!0),m(w,null,x(d.topVisitorsData,l=>(c(),C(P,{key:l.id},{default:e(()=>[t("div",je,[t("h5",Me,[a(n(l.location)+" ",1),t("span",Oe,n(l.percentage),1)]),s(H,{class:"animated-progess progress-sm"},{default:e(()=>[s(G,{variant:`${l.progressColor}`,role:"progressbar",style:$({width:l.percentage}),"aria-valuenow":l.percentage,"aria-valuemin":"0","aria-valuemax":"100"},null,8,["variant","style","aria-valuenow"])]),_:2},1024)])]),_:2},1024))),128))]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),s(g,null,{default:e(()=>[s(r,{xl:"4"},{default:e(()=>[s(_,{"no-body":""},{default:e(()=>[s(u,null,{default:e(()=>[t("div",qe,[t("div",Fe,[s(b,{class:"mb-4"},{default:e(()=>[a("Activity")]),_:1})]),s(h,{"toggle-tag":"a","toggle-class":"text-muted font-size-16 p-0",variant:"white","menu-class":"dropdown-menu-end",right:"",class:"ms-auto"},{"button-content":e(()=>[Ge]),default:e(()=>[s(o,{href:"#"},{default:e(()=>[a("Action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Another action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Something else here")]),_:1}),s(y),s(o,{href:"#"},{default:e(()=>[a("Separated link")]),_:1})]),_:1})]),s(D,{"data-simplebar":"",class:"mt-2",style:{"max-height":"280px"}},{default:e(()=>[t("ul",He,[(c(!0),m(w,null,x(d.activityData,l=>(c(),m("li",{class:"event-list",key:l.id},[t("div",Ee,[t("i",{class:v(["bx",l.iconClass])},null,2)]),t("div",Je,[t("div",We,[t("h5",Ue,[a(n(l.date)+" ",1),Ye])]),t("div",Ke,[t("div",null,[a(n(l.content)+" ",1),s(f,{href:l.link},{default:e(()=>[a(n(l.linkText),1)]),_:2},1032,["href"])])])])]))),128))])]),_:1}),t("div",Xe,[s(f,{class:"btn btn-primary waves-effect waves-light btn-sm"},{default:e(()=>[a("View More "),Qe]),_:1})])]),_:1})]),_:1})]),_:1}),s(r,{xl:"8"},{default:e(()=>[s(_,{"no-body":""},{default:e(()=>[s(u,null,{default:e(()=>[t("div",Ze,[t("div",$e,[s(b,{class:"mb-4"},{default:e(()=>[a("Popular post")]),_:1})]),s(h,{"toggle-tag":"a",class:"ms-auto","menu-class":"dropdown-menu-end","toggle-class":"font-size-16 p-0",variant:"white",right:""},{"button-content":e(()=>[ts]),default:e(()=>[s(o,{href:"#"},{default:e(()=>[a("Action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Another action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Something else here")]),_:1}),s(y),s(o,{href:"#"},{default:e(()=>[a("Separated link")]),_:1})]),_:1})]),t("div",es,[s(J,{class:"table-centered table-nowrap mb-0"},{default:e(()=>[s(E,null,{default:e(()=>[s(I,null,{default:e(()=>[s(T,{scope:"col",colspan:"2"},{default:e(()=>[a("Post")]),_:1}),s(T,{scope:"col"},{default:e(()=>[a("Likes")]),_:1}),s(T,{scope:"col"},{default:e(()=>[a("Comments")]),_:1}),s(T,{scope:"col"},{default:e(()=>[a("Action")]),_:1})]),_:1}),(c(!0),m(w,null,x(d.blogPostData,l=>(c(),C(I,{key:l.id},{default:e(()=>[s(B,{style:{width:"100px"}},{default:e(()=>[t("img",{src:l.imageSrc,alt:"",class:"avatar-md h-auto d-block rounded"},null,8,ss)]),_:2},1024),s(B,null,{default:e(()=>[t("h5",as,[s(f,{href:l.link,class:"text-dark"},{default:e(()=>[a(n(l.title),1)]),_:2},1032,["href"])]),t("p",ls,n(l.date),1)]),_:2},1024),s(B,{class:"pt-4"},{default:e(()=>[os,a(" "+n(l.likes),1)]),_:2},1024),s(B,{class:"pt-4"},{default:e(()=>[is,a(" "+n(l.comments),1)]),_:2},1024),s(B,null,{default:e(()=>[s(h,{"toggle-class":"text-muted font-size-16",variant:"white",right:""},{"button-content":e(()=>[ns]),default:e(()=>[s(o,{href:"#"},{default:e(()=>[a("Action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Another action")]),_:1}),s(o,{href:"#"},{default:e(()=>[a("Something else here")]),_:1}),s(y),s(o,{href:"#"},{default:e(()=>[a("Separated link")]),_:1})]),_:1})]),_:1})]),_:2},1024))),128))]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const ys=Z(ot,[["render",ds]]);export{ys as default};
