import{L as k}from"./main-e24c86ad.js";import{p as z}from"./profile-img-1e13af7a.js";import{a as A}from"./avatar-1-15b743f1.js";import{_ as h,o as r,c as m,a as s,b as x,r as i,d as a,n as b,e as V,w as f,f as B,F as M,g as c}from"../js/app2.js";import{S as O}from"./stat-bb508e00.js";import{T as C}from"./transaction-05d0ff20.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";const P={data(){return{profileImg:z,avatar1:A}}},E={class:"card overflow-hidden"},T={class:"bg-soft bg-primary"},j={class:"row"},D=s("div",{class:"col-7"},[s("div",{class:"text-primary p-3"},[s("h5",{class:"text-primary"},"Welcome Back !"),s("p",null,"Skote Dashboard")])],-1),L={class:"col-5 align-self-end"},F=["src"],N={class:"card-body pt-0"},R={class:"row"},J={class:"col-sm-4"},K={class:"avatar-md profile-user-wid mb-4"},I=["src"],W=s("h5",{class:"font-size-15 text-truncate"},"Henry Price",-1),Y=s("p",{class:"text-muted mb-0 text-truncate"},"UI/UX Designer",-1),U=x('<div class="col-sm-8"><div class="pt-4"><div class="row"><div class="col-6"><h5 class="font-size-15">125</h5><p class="text-muted mb-0">Projects</p></div><div class="col-6"><h5 class="font-size-15">$1245</h5><p class="text-muted mb-0">Revenue</p></div></div><div class="mt-4"><a href class="btn btn-primary btn-sm"> View Profile <i class="mdi mdi-arrow-right ms-1"></i></a></div></div></div>',1);function H(o,e,p,u,t,l){return r(),m("div",E,[s("div",T,[s("div",j,[D,s("div",L,[s("img",{src:t.profileImg,alt:"",class:"img-fluid"},null,8,F)])])]),s("div",N,[s("div",R,[s("div",J,[s("div",K,[s("img",{src:t.avatar1,alt:"",class:"img-thumbnail rounded-circle"},null,8,I)]),W,Y]),U])])])}const X=h(P,[["render",H]]),q={data(){return{chartOptions:{chart:{offsetY:-10},plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"13px",color:void 0,offsetY:60},value:{offsetY:22,fontSize:"16px",color:void 0,formatter:function(o){return o+"%"}}}}},colors:["#556ee6"],fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["Series A"]},series:[67]}}},G={class:"card"},Q={class:"card-body"},Z=s("h4",{class:"card-title mb-4"},"Monthly Earning",-1),ss={class:"row"},ts=x('<div class="col-sm-6"><p class="text-muted">This month</p><h3>$34,252</h3><p class="text-muted"><span class="text-success me-2"> 12% <i class="mdi mdi-arrow-up"></i></span> From previous period </p><div class="mt-4"><a href="javascript: void(0);" class="btn btn-primary btn-sm"> View More <i class="mdi mdi-arrow-right ms-1"></i></a></div></div>',1),es={class:"col-sm-6"},as=s("p",{class:"text-muted mb-0"},"We craft digital, graphic and dimensional thinking.",-1);function is(o,e,p,u,t,l){const d=i("apexchart");return r(),m("div",G,[s("div",Q,[Z,s("div",ss,[ts,s("div",es,[a(d,{class:"apex-charts",type:"radialBar",height:"180",dir:"ltr",series:t.series,options:t.chartOptions},null,8,["series","options"])])]),as])])}const os=h(q,[["render",is]]),cs={data(){return{isActive:"year",series:[{name:"Series A",data:[44,55,41,67,22,43,36,52,24,18,36,48]},{name:"Series B",data:[13,23,20,8,13,27,18,22,10,16,24,22]},{name:"Series C",data:[11,17,15,15,21,14,11,18,17,12,20,18]}],chartOptions:{chart:{stacked:!0,toolbar:{show:!1},zoom:{enabled:!0}},plotOptions:{bar:{horizontal:!1,columnWidth:"15%",endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},colors:["#556ee6","#f1b44c","#34c38f"],legend:{position:"bottom"},fill:{opacity:1}}}},methods:{changeVal(o){switch(o){case"month":this.isActive="month",this.series=[{name:"Series A",data:[13,23,20,8,13,27,18,22,10,16,24,22]},{name:"Series B",data:[11,17,15,15,21,14,11,18,17,12,20,18]},{name:"Series C",data:[44,55,41,67,22,43,36,52,24,18,36,48]}];break;case"week":this.isActive="week",this.series=[{name:"Series A",data:[11,17,15,15,21,14,11,18,17,12,20,18]},{name:"Series B",data:[44,55,41,67,22,43,36,52,24,18,36,48]},{name:"Series C",data:[13,23,20,8,13,27,18,22,10,16,24,22]}];break;case"year":this.isActive="year",this.series=[{name:"Series A",data:[44,55,41,67,22,43,36,52,24,18,36,48]},{name:"Series B",data:[13,23,20,8,13,27,18,22,10,16,24,22]},{name:"Series C",data:[11,17,15,15,21,14,11,18,17,12,20,18]}];break;default:this.series=[{name:"Series A",data:[44,55,41,67,22,43,36,52,24,18,36,48]},{name:"Series B",data:[13,23,20,8,13,27,18,22,10,16,24,22]},{name:"Series C",data:[11,17,15,15,21,14,11,18,17,12,20,18]}];break}}}},ls={class:"card"},ns={class:"card-body"},rs={class:"d-sm-flex flex-wrap"},ds=s("h4",{class:"card-title mb-4"},"Email Sent",-1),ms={class:"ms-auto"},vs={class:"nav nav-pills"},hs={class:"nav-item"},ps={class:"nav-item"},us={class:"nav-item"};function _s(o,e,p,u,t,l){const d=i("apexchart");return r(),m("div",ls,[s("div",ns,[s("div",rs,[ds,s("div",ms,[s("ul",vs,[s("li",hs,[s("a",{class:b(["nav-link",{active:t.isActive=="week"}]),href:"javascript: void(0);",onClick:e[0]||(e[0]=v=>l.changeVal("week"))},"Week",2)]),s("li",ps,[s("a",{class:b(["nav-link",{active:t.isActive=="month"}]),href:"javascript: void(0);",onClick:e[1]||(e[1]=v=>l.changeVal("month"))},"Month",2)]),s("li",us,[s("a",{class:b(["nav-link",{active:t.isActive=="year"}]),href:"javascript: void(0);",onClick:e[2]||(e[2]=v=>l.changeVal("year"))},"Year",2)])])])]),a(d,{class:"apex-charts",type:"bar",dir:"ltr",height:"360",series:t.series,options:t.chartOptions},null,8,["series","options"])])])}const bs=h(cs,[["render",_s]]),fs={components:{Layout:k,Profile:X,Stat:O,Transaction:C,Earning:os,Emailsent:bs},data(){return{title:"Dashboard",showModal:!1,statData:[{icon:"bx bx-copy-alt",title:"Orders",value:"1,235"},{icon:"bx bx-archive-in",title:"Revenue",value:"$35, 723"},{icon:"bx bx-purchase-tag-alt",title:"Average Price",value:"$16.2"}],transactions:[{id:"#SK2540",name:"Neal Matthews",date:"07 Oct, 2019",total:"$400",status:"Paid",payment:["fa-cc-mastercard","Mastercard"],index:1},{id:"#SK2541",name:"Jamal Burnett",date:"07 Oct, 2019",total:"$380",status:"Chargeback",payment:["fa-cc-visa","Visa"],index:2},{id:"#SK2542",name:"Juan Mitchell",date:"06 Oct, 2019",total:"$384",status:"Paid",payment:["fab fa-cc-paypal","Paypal"],index:3},{id:"#SK2543",name:"Barry Dick",date:"05 Oct, 2019",total:"$412",status:"Paid",payment:["fa-cc-mastercard","Mastercard"],index:4},{id:"#SK2544",name:"Ronald Taylor",date:"04 Oct, 2019",total:"$404",status:"Refund",payment:["fa-cc-visa","Visa"],index:5},{id:"#SK2545",name:"Jacob Hunter",date:"04 Oct, 2019",total:"$392",status:"Paid",payment:["fab fa-cc-paypal","Paypal"],index:6}]}},mounted(){setTimeout(()=>{this.showModal=!0},1500)}},xs=s("div",{class:"row"},[s("div",{class:"col-12"},[s("div",{class:"page-title-box d-flex align-items-center justify-content-between"},[s("h4",{class:"mb-0 font-size-18"},"Dashboard"),s("div",{class:"page-title-right"},[s("ol",{class:"breadcrumb mb-0"},[s("li",{class:"breadcrumb-item active"},"Welcome to Skote Dashboard")])])])])],-1),gs={class:"row"},ys={class:"col-xl-4"},ws={class:"col-xl-8"},$s={class:"row"},Ss={class:"row"},ks=s("div",{class:"col-xl-4"},[s("div",{class:"card"},[s("div",{class:"card-body"},[s("h4",{class:"card-title mb-4"},"Social Source"),s("div",{class:"text-center"},[s("div",{class:"avatar-sm mx-auto mb-4"},[s("span",{class:"avatar-title rounded-circle bg-primary font-size-18"},[s("i",{class:"mdi mdi-facebook text-white"})])]),s("p",{class:"font-16 text-muted mb-2"}),s("h5",null,[s("a",{href:"javascript: void(0);",class:"text-dark"},[c(" Facebook - "),s("span",{class:"text-muted font-16"},"125 sales")])]),s("p",{class:"text-muted"},"Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt."),s("a",{href:"javascript: void(0);",class:"text-primary font-16"},[c(" Learn more "),s("i",{class:"mdi mdi-chevron-right"})])]),s("div",{class:"row mt-4"},[s("div",{class:"col-sm-4"},[s("div",{class:"social-source text-center mt-3"},[s("div",{class:"avatar-xs mx-auto mb-3"},[s("span",{class:"avatar-title rounded-circle bg-primary font-size-16"},[s("i",{class:"mdi mdi-facebook text-white"})])]),s("h5",{class:"font-size-15"},"Facebook"),s("p",{class:"text-muted mb-0"},"125 sales")])]),s("div",{class:"col-sm-4"},[s("div",{class:"social-source text-center mt-3"},[s("div",{class:"avatar-xs mx-auto mb-3"},[s("span",{class:"avatar-title rounded-circle bg-info font-size-16"},[s("i",{class:"mdi mdi-twitter text-white"})])]),s("h5",{class:"font-size-15"},"Twitter"),s("p",{class:"text-muted mb-0"},"112 sales")])]),s("div",{class:"col-sm-4"},[s("div",{class:"social-source text-center mt-3"},[s("div",{class:"avatar-xs mx-auto mb-3"},[s("span",{class:"avatar-title rounded-circle bg-pink font-size-16"},[s("i",{class:"mdi mdi-instagram text-white"})])]),s("h5",{class:"font-size-15"},"Instagram"),s("p",{class:"text-muted mb-0"},"104 sales")])])])])])],-1),zs=s("div",{class:"col-xl-4"},[s("div",{class:"card"},[s("div",{class:"card-body"},[s("h4",{class:"card-title mb-5"},"Activity"),s("ul",{class:"verti-timeline list-unstyled"},[s("li",{class:"event-list"},[s("div",{class:"event-timeline-dot"},[s("i",{class:"bx bx-right-arrow-circle font-size-18"})]),s("div",{class:"d-flex"},[s("div",{class:"me-3"},[s("h5",{class:"font-size-14"},[c(" 22 Nov "),s("i",{class:"bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"})])]),s("div",{class:"flex-grow-1"},[s("div",null,"Responded to need “Volunteer Activities")])])]),s("li",{class:"event-list"},[s("div",{class:"event-timeline-dot"},[s("i",{class:"bx bx-right-arrow-circle font-size-18"})]),s("div",{class:"d-flex"},[s("div",{class:"me-3"},[s("h5",{class:"font-size-14"},[c(" 17 Nov "),s("i",{class:"bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"})])]),s("div",{class:"flex-grow-1"},[s("div",null,[c(" Everyone realizes why a new common language would be desirable... "),s("a",{href:"javascript: void(0);"},"Read more")])])])]),s("li",{class:"event-list active"},[s("div",{class:"event-timeline-dot"},[s("i",{class:"bx bxs-right-arrow-circle font-size-18 bx-fade-right"})]),s("div",{class:"d-flex"},[s("div",{class:"me-3"},[s("h5",{class:"font-size-14"},[c(" 15 Nov "),s("i",{class:"bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"})])]),s("div",{class:"flex-grow-1"},[s("div",null,"Joined the group “Boardsmanship Forum”")])])]),s("li",{class:"event-list"},[s("div",{class:"event-timeline-dot"},[s("i",{class:"bx bx-right-arrow-circle font-size-18"})]),s("div",{class:"d-flex"},[s("div",{class:"me-3"},[s("h5",{class:"font-size-14"},[c(" 12 Nov "),s("i",{class:"bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"})])]),s("div",{class:"flex-grow-1"},[s("div",null,"Responded to need “In-Kind Opportunity”")])])])]),s("div",{class:"text-center mt-4"},[s("a",{href:"javascript: void(0);",class:"btn btn-primary btn-sm"},"Load More")])])])],-1),As={class:"col-xl-4"},Vs={class:"card"},Bs={class:"card-body"},Ms=s("h4",{class:"card-title mb-4"},"Top Cities Selling Product",-1),Os=s("div",{class:"text-center"},[s("div",{class:"mb-4"},[s("i",{class:"bx bx-map-pin text-primary display-4"})]),s("h3",null,"1,456"),s("p",null,"San Francisco")],-1),Cs={class:"table-responsive mt-4"},Ps={class:"table table-centered"},Es=s("td",{style:{width:"140px"}},[s("p",{class:"mb-0"},"San Francisco")],-1),Ts=s("td",{style:{width:"120px"}},[s("h5",{class:"mb-0"},"1,456")],-1),js=s("td",null,[s("p",{class:"mb-0"},"Los Angeles")],-1),Ds=s("td",null,[s("h5",{class:"mb-0"},"1,123")],-1),Ls=s("td",null,[s("p",{class:"mb-0"},"San Diego")],-1),Fs=s("td",null,[s("h5",{class:"mb-0"},"1,026")],-1),Ns={class:"row"},Rs={class:"col-lg-12"},Js={class:"card"},Ks={class:"card-body"},Is=s("h4",{class:"card-title mb-4"},"Latest Transaction",-1),Ws=s("div",{class:"text-center mb-4"},[s("div",{class:"avatar-md mx-auto mb-4"},[s("div",{class:"avatar-title bg-light rounded-circle text-primary h1"},[s("i",{class:"mdi mdi-email-open"})])]),s("div",{class:"row justify-content-center"},[s("div",{class:"col-xl-10"},[s("h4",{class:"text-primary"},"Subscribe !"),s("p",{class:"text-muted font-size-14 mb-4"}," Subscribe our newletter and get notification to stay update. "),s("div",{class:"input-group bg-light rounded"},[s("input",{type:"email",class:"form-control bg-transparent border-0",placeholder:"Enter Email address","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),s("button",{class:"btn btn-primary",type:"button",id:"button-addon2"},[s("i",{class:"bx bxs-paper-plane"})])])])])],-1);function Ys(o,e,p,u,t,l){const d=i("Profile"),v=i("Earning"),g=i("Stat"),y=i("Emailsent"),_=i("b-progress"),w=i("Transaction"),$=i("b-modal"),S=i("Layout");return r(),V(S,null,{default:f(()=>[xs,s("div",gs,[s("div",ys,[a(d),a(v)]),s("div",ws,[s("div",$s,[(r(!0),m(M,null,B(t.statData,n=>(r(),m("div",{key:n.icon,class:"col-md-4"},[a(g,{icon:n.icon,title:n.title,value:n.value},null,8,["icon","title","value"])]))),128))]),a(y)])]),s("div",Ss,[ks,zs,s("div",As,[s("div",Vs,[s("div",Bs,[Ms,Os,s("div",Cs,[s("table",Ps,[s("tbody",null,[s("tr",null,[Es,Ts,s("td",null,[a(_,{value:94,variant:"primary",height:"5px"})])]),s("tr",null,[js,Ds,s("td",null,[a(_,{value:82,variant:"success",height:"5px"})])]),s("tr",null,[Ls,Fs,s("td",null,[a(_,{value:70,variant:"warning",height:"5px"})])])])])])])])])]),s("div",Ns,[s("div",Rs,[s("div",Js,[s("div",Ks,[Is,a(w,{transactions:t.transactions},null,8,["transactions"])])])])]),a($,{modelValue:t.showModal,"onUpdate:modelValue":e[0]||(e[0]=n=>t.showModal=n),"hide-footer":"",centered:"","header-class":"border-0"},{default:f(()=>[Ws]),_:1},8,["modelValue"])]),_:1})}const tt=h(fs,[["render",Ys]]);export{tt as default};
