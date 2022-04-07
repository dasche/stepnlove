import{u as e,i as t,E as s,H as n,s as l,m as a,v as i,n as o,t as m,o as r,w as c,I as p,J as u,K as d}from"./vendor.6285a3de.js";import{_ as f}from"./Breadcrumb.c7578fd6.js";import{a as b}from"./tooltip.f4b85039.js";import{u as x}from"./app.b8eb59b8.js";import"./el-popper.7c31a607.js";var _={};const v={class:"flex"},y={class:"left-box"},h={class:"text-13 text-font-info mt-2"},S={class:"form mt-10"},w={class:"mt-10"},j={class:"flex justify-between items-center mb-5"},g={class:"text-font-info font-normal"},k={class:"flex items-center"},z=["placeholder"],F=o("span",null,"SOL",-1),L={class:"flex justify-between items-center mb-5"},O=o("div",null,[o("input",{type:"text",disabled:"",value:200,placeholder:"",class:"my-input-sig input-disabled mr-2"}),o("span",null,"GST")],-1),U={class:"flex justify-between items-center mb-5"},C={class:"text-font-info font-normal"},I=o("div",null,[o("input",{type:"text",disabled:"",value:20,placeholder:"",class:"my-input-sig input-disabled mr-2"}),o("span",null,"GST")],-1),M={class:"flex justify-between items-center mb-5"},P={class:"flex items-center"},V=["placeholder"],G=o("span",null,"SOL",-1),T={class:"flex justify-between items-center mb-5"},q={class:"text-font-info font-normal"},B={class:"flex items-center"},E=["placeholder"],H=o("span",null,"SOL",-1),J={class:"right-box"},K={class:"bg-main bg-opacity-30 px-5 py-10"},A={class:"p-5 mb-10"},D={class:"flex justify-between text-15 font-medium py-5"},N={class:""},Q={class:"text-20"},R={class:"number-family"},W=c(" SOL"),X={class:"flex justify-between text-14 mt-8"},Y={class:"font-medium"},Z={class:"number-family text-15"},$=c(" SOL"),ee={class:"flex justify-between text-14 my-8"},te={class:"font-medium"},se={class:"number-family text-15"},ne=c(" SOL"),le={class:"mt-10 text-font-info"},ae={class:"mt-3 text-font-info"},ie=o("span",{class:"number-family"},"2",-1),oe=o("span",{class:"number-family"},"2",-1),me={class:"mt-3 text-font-info"},re=o("span",{class:"number-family"},"2",-1),ce=o("span",{class:"number-family"},"2",-1),pe=c(") * "),ue=o("span",{class:"number-family"},"0.94",-1),de=o("div",{class:"hidden border-luck text-luck text-main border-main"},null,-1),fe={setup(_){const fe=x(),{t:be}=e(),xe=t({sneaker_quality:"common",amount:"",zero:10,two:9,shoebox:11}),_e=s((()=>1*parseFloat(2*xe.zero+440*fe.price.gst_sol).toFixed(2))),ve=s((()=>1*parseFloat(.94*(2*xe.shoebox+2*xe.two)).toFixed(2)));return(e,t)=>{const s=f,x=b,_=d,fe=n("d-input-point"),ye=n("d-input-max");return l(),a("div",null,[i(s),o("div",v,[o("div",y,[o("h2",null,m(r(be)("mint.Mint_spread_title")),1),o("p",h,m(r(be)("mint.Mint_spread_describe")),1),o("div",S,[o("div",w,[o("div",j,[o("h3",null,[c(m(r(be)("mint.Sneakers_price")),1),o("span",g,"（"+m(r(be)("mint.Sneakers_mint_zero"))+"）",1)]),o("div",k,[i(x,{class:"mr-2",content:r(be)("mint.Sneakers_price_tips")},null,8,["content"]),p(o("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r(xe).zero=e),type:"text",placeholder:r(be)("base.Please_enter"),class:"my-input-sig mr-2"},null,8,z),[[u,r(xe).zero],[fe],[ye,99]]),F])]),o("div",L,[o("h3",null,m(r(be)("mint.Mint_price")),1),O]),o("div",U,[o("h3",null,[c(m(r(be)("mint.Upgrade_price")),1),o("span",C,"（"+m(r(be)("mint.Upgrade_zero_to_five"))+"）",1)]),I]),o("div",M,[o("h3",null,m(r(be)("mint.Shoeboxes_price")),1),o("div",P,[i(x,{class:"mr-2",content:r(be)("mint.Sneakers_price_tips")},null,8,["content"]),p(o("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>r(xe).shoebox=e),placeholder:r(be)("base.Please_enter"),class:"my-input-sig mr-2"},null,8,V),[[u,r(xe).shoebox]]),G])]),o("div",T,[o("h3",null,[c(m(r(be)("mint.Sneakers_price")),1),o("span",q,"（"+m(r(be)("mint.Sneakers_mint_two"))+"）",1)]),o("div",B,[i(x,{class:"mr-2",content:r(be)("mint.Sneakers_price_tips")},null,8,["content"]),p(o("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>r(xe).two=e),placeholder:r(be)("base.Please_enter"),class:"my-input-sig mr-2"},null,8,E),[[u,r(xe).two]]),H])])])])]),o("div",J,[o("h2",K,m(r(be)("base.Calculation_results")),1),o("div",A,[o("div",D,[o("div",N,m(r(be)("mint.Profitable")),1),o("div",Q,[o("span",R,m(1*parseFloat(r(ve)-r(_e)).toFixed(2)),1),W])]),i(_),o("div",X,[o("h3",null,m(r(be)("mint.Cost")),1),o("div",Y,[o("span",Z,m(r(_e)),1),$])]),o("div",ee,[o("h3",null,m(r(be)("mint.Income")),1),o("div",te,[o("span",se,m(r(ve)),1),ne])]),i(_),o("div",le,m(r(be)("mint.Calculation_formula")),1),o("p",ae,[c(m(r(be)("mint.Income"))+" = "+m(r(be)("mint.Sneakers_mint_zero_price"))+"*",1),ie,c(" + "+m(r(be)("mint.Mint_price"))+" + "+m(r(be)("mint.Upgrade_price"))+"*",1),oe]),o("div",me,[c(m(r(be)("mint.Cost"))+" = ("+m(r(be)("mint.Shoeboxes"))+"*",1),re,c(" + "+m(r(be)("mint.Sneakers_mint_two"))+"*",1),ce,pe,ue,i(x,{content:r(be)("mint.Income_tips")},null,8,["content"])])])])]),de])}}};"function"==typeof _&&_(fe);export{fe as default};
