import{u as e,i as t,E as s,H as l,s as a,m as i,v as r,n as c,t as o,o as n,x as u,F as m,q as d,ac as f,w as p,I as v,J as x,ad as b,ae as y,K as h}from"./vendor.9e277265.js";import{_ as k}from"./Breadcrumb.5919387f.js";import"./RadioSfc.f3ec860e.js";import"./icon.833ebd8c.js";import{_ as g,a as _,b as w,c as B}from"./4.d9250fe1.js";import{u as j}from"./app.73ebe84d.js";var F={};const $={class:"mobile-show mb-5"},G={class:"text-14 text-font-info mt-2"},q={class:"sm:flex"},V={class:"left-box"},A={class:"mobile-hidden"},S={class:"text-14 text-font-info mt-2"},E={class:"form mb-5 sm:my-12"},I={class:"sm:flex justify-between items-center mb-2 text-15"},U={class:"mb-3 sm:mt-0"},P={class:"opacity-0 absolute"},C={class:"mt-5 sm:mt-10 mb-5"},H={class:"flex justify-between mb-4 items-center"},J={class:"flex items-center"},K=c("img",{width:"18",height:"18",src:g},null,-1),M={class:"ml-1 text-14"},Q=["placeholder"],R={class:"flex justify-between mb-4 items-center"},z={class:"flex items-center"},D=c("img",{width:"18",height:"18",src:_},null,-1),L={class:"ml-1 text-14"},N=["placeholder"],O={class:"flex justify-between mb-4 items-center"},T={class:"flex items-center"},W=c("img",{width:"18",height:"18",src:w},null,-1),X={class:"ml-1 text-14"},Y=["placeholder"],Z={class:"flex justify-between mb-4 items-center"},ee={class:"flex items-center"},te=c("img",{width:"18",height:"18",src:B},null,-1),se={class:"ml-1 text-14"},le=["placeholder"],ae={class:"flex justify-between items-center mt-0 sm:mt-10"},ie=c("div",null,null,-1),re={class:"text-15 text-font-warning font-medium"},ce={class:"right-box"},oe={class:"bg-main bg-opacity-30 px-5 py-5 sm:py-10 text-16 sm:text-18"},ne={class:"p-5 sm:mb-10"},ue={class:"flex justify-between items-center text-15 font-medium py-5"},me={class:""},de={class:"text-3xl sm:text-20 font-bold"},fe={class:"number-family"},pe={class:"text-center my-3 sm:my-10"},ve={class:"py-5 text-16 font-medium text-font-warning"},xe={class:"relative mt-2 mb-5 sm:mt-10 sm:mb-16 mx-auto",style:{width:"160px",height:"160px"}},be={class:"absolute left-1/2 top-0 -translate-x-1/2",style:{width:"160px",height:"160px"}},ye=c("div",{class:"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",style:{width:"180px",height:"90px"}},[c("img",{width:"180",height:"90",src:"/assets/shoes.b270c8a1.png"})],-1),he={class:"grid sm:grid-cols-2 gap-y-3 mt-5 sm:mt-10 text-left text-font-info text-13 sm:text-base"},ke={class:"number-family"},ge={class:"hidden border-luck text-luck bg-common bg-uncommon bg-rare bg-font-info text-main border-main"},_e={setup(g){const{t:_}=e(),w=j(),B={common:[{value:20,title:"score.Generally",score:2.5,remark:"0-20"},{value:24,title:"score.Good",score:2.5,remark:"21-24"},{value:28,title:"score.Epic",score:2.5,remark:"25-28"},{value:32,title:"score.Fabulous",score:2.5,remark:"29-32"},{value:36,title:"score.Incredible",score:2.5,remark:"33-36"},{value:40,title:"score.Perfect",score:2.5,remark:"37-40"}],uncommon:[{value:36,title:"score.Generally",score:1.38,remark:"0-36"},{value:43,title:"score.Good",score:1.38,remark:"37-43"},{value:50,title:"score.Epic",score:1.38,remark:"44-50"},{value:58,title:"score.Fabulous",score:1.38,remark:"51-58"},{value:65,title:"score.Incredible",score:1.38,remark:"59-65"},{value:72,title:"score.Perfect",score:1.38,remark:"66-72"}],rare:[{value:70,title:"score.Generally",score:.71,remark:"0-70"},{value:84,title:"score.Good",score:.71,remark:"71-84"},{value:98,title:"score.Epic",score:.71,remark:"85-98"},{value:112,title:"score.Fabulous",score:.71,remark:"99-112"},{value:126,title:"score.Incredible",score:.71,remark:"113-126"},{value:140,title:"score.Perfect",score:.71,remark:"127-140"}],epic:[{value:126,title:"score.Generally",score:.39},{value:151,title:"score.Good",score:.39},{value:176,title:"score.Epic",score:.39},{value:202,title:"score.Fabulous",score:.39},{value:227,title:"score.Incredible",score:.39},{value:252,title:"score.Perfect",score:.39}]},F=t({sneaker_quality:"common",efficiencyBase:"",luckBase:"",comfortBase:"",resilienceBase:"",title:"score.Generally"});function _e(){F.efficiencyBase="",F.luckBase="",F.comfortBase="",F.resilienceBase=""}const we=s((()=>w.quality.filter((e=>e.value===F.sneaker_quality))[0])),Be=s((()=>we.value.ranges)),je=s((()=>(1*parseFloat(F.efficiencyBase).toFixed(2)||0)+(1*parseFloat(F.luckBase).toFixed(2)||0)+(1*parseFloat(F.comfortBase).toFixed(2)||0)+(1*parseFloat(F.resilienceBase).toFixed(2)||0))),Fe=s((()=>{const e=B[F.sneaker_quality];let t={value:20,title:"score.Generally",score:2.5};return e.filter((e=>{if(!(e.value<=je.value))return t;t=e})),F.title=t.title,Math.ceil(je.value*t.score)}));function $e(e){return F.sneaker_quality===e.value?["bg-main","text-font-main","border-solid","border-2","hover:bg-main","text-font-main"]:[`border-${e.color}`,`text-${e.color}`,"hover:bg-white"]}return(e,t)=>{const s=k,g=b,j=y,Ge=h,qe=l("d-input-point"),Ve=l("d-input-max");return a(),i("div",null,[r(s),c("div",$,[c("h2",null,o(n(_)("score.Sneakers_score_title")),1),c("p",G,o(n(_)("score.Sneakers_score_describe")),1)]),c("div",q,[c("div",V,[c("div",A,[c("h2",null,o(n(_)("score.Sneakers_score_title")),1),c("p",S,o(n(_)("score.Sneakers_score_describe")),1)]),c("div",E,[c("div",I,[c("h3",U,o(n(_)("income.Quality")),1),r(j,{modelValue:n(F).sneaker_quality,"onUpdate:modelValue":t[0]||(t[0]=e=>n(F).sneaker_quality=e),onChange:_e},{default:u((()=>[(a(!0),i(m,null,d(n(w).quality,(e=>(a(),i("div",{key:e.value,class:f(["my-radio relative mr-5",$e(e)])},[p(o(n(_)(e.title))+" ",1),c("div",P,[r(g,{"checked-value":e.value},{default:u((()=>[p(o(n(_)(e.title)),1)])),_:2},1032,["checked-value"])])],2)))),128))])),_:1},8,["modelValue"])]),c("h3",C,o(n(_)("income.Attributes")),1),c("div",H,[c("div",J,[K,c("span",M,o(n(_)("income.Attributes_efficiency")),1)]),c("div",null,[v(c("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n(F).efficiencyBase=e),type:"text",placeholder:`${n(Be)[0]}-${n(Be)[1]}`,class:"my-input-sig"},null,8,Q),[[x,n(F).efficiencyBase],[qe],[Ve,n(Be)[1]]])])]),c("div",R,[c("div",z,[D,c("span",L,o(n(_)("income.Attributes_luck")),1)]),c("div",null,[v(c("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>n(F).luckBase=e),type:"text",placeholder:`${n(Be)[0]}-${n(Be)[1]}`,class:"my-input-sig"},null,8,N),[[x,n(F).luckBase],[qe],[Ve,n(Be)[1]]])])]),c("div",O,[c("div",T,[W,c("span",X,o(n(_)("income.Attributes_comfort")),1)]),c("div",null,[v(c("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>n(F).comfortBase=e),type:"text",placeholder:`${n(Be)[0]}-${n(Be)[1]}`,class:"my-input-sig"},null,8,Y),[[x,n(F).comfortBase],[qe],[Ve,n(Be)[1]]])])]),c("div",Z,[c("div",ee,[te,c("span",se,o(n(_)("income.Attributes_resilience")),1)]),c("div",null,[v(c("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>n(F).resilienceBase=e),type:"text",placeholder:`${n(Be)[0]}-${n(Be)[1]}`,class:"my-input-sig"},null,8,le),[[x,n(F).resilienceBase],[qe],[Ve,n(Be)[1]]])])]),c("div",ae,[ie,c("div",re,o(n(_)("score.Attributes_total_points"))+" "+o(n(je)),1)])])]),c("div",ce,[c("h2",oe,o(n(_)("score.Calculation_results")),1),c("div",ne,[c("div",ue,[c("div",me,o(n(_)("score.Get_points")),1),c("div",de,[c("span",fe,o(n(Fe)),1)])]),r(Ge),c("div",pe,[c("p",ve,o(n(_)("score.Sneaker_title"))+"："+o(n(_)(n(F).title)),1),c("div",xe,[c("div",be,[c("div",{class:f([`bg-${n(we).value}`,"absolute opacity-20 rounded-full"]),style:{width:"160px",height:"160px"}},null,2),c("div",{class:f([`bg-${n(we).value}`,"absolute opacity-40 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"]),style:{width:"130px",height:"130px"}},null,2),c("div",{class:f([`bg-${n(we).value}`,"absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"]),style:{width:"100px",height:"100px"}},null,2)]),ye]),r(Ge),c("div",he,[(a(!0),i(m,null,d(B[n(F).sneaker_quality],(e=>(a(),i("div",null,[p(o(n(_)(e.title))+"：",1),c("span",ke,o(e.remark),1)])))),256))])])])]),c("div",ge,o(n(we)),1)])])}}};"function"==typeof F&&F(_e);export{_e as default};
