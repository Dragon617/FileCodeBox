import{b as n,d as p,u as c,_ as i,w as m}from"./base-c9c53ef4.js";import{d as l,m as o,p as t,D as r,s,E as d,L as u,y,H as f,x as h,z as v}from"./index-bded577e.js";const w=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),S=l({name:"ElCard"}),_=l({...S,props:w,setup(C){const a=c("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[d(e.$slots,"header",{},()=>[h(v(e.header),1)])],2)):u("v-if",!0),y("div",{class:r(s(a).e("body")),style:f(e.bodyStyle)},[d(e.$slots,"default")],6)],2))}});var b=i(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const N=m(b);export{N as E};