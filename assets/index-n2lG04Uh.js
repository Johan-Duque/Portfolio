import{r as T,C as h,j as o,G as C,R as d,D as u}from"./index-CQyWrLSm.js";const m="_Technologies__Container_6fetg_1",j="_Technologies__Title_6fetg_19",x="_Technologies__Content_6fetg_33",p="_Technologies__Content_Languages_6fetg_61",f="_Technologies__Content_Tools_6fetg_77",c={Technologies__Container:m,Technologies__Title:j,Technologies__Content:x,Technologies__Content_Languages:p,Technologies__Content_Tools:f},v="_Technologi__Container_my19j_1",k="_Technologi__Container_Front_my19j_17",b="_Technologi__Container_Back_my19j_65",r={Technologi__Container:v,Technologi__Container_Front:k,Technologi__Container_Back:b};function g({name:e,background_color:i,width:l,color_i:_,description:a}){const{CreateIcons:s}=T.useContext(h),t=s(e);return o.jsxs("div",{className:r.Technologi__Container,style:{backgroundColor:i,gridColumn:l,color:_},children:[o.jsxs("div",{className:r.Technologi__Container_Front,children:[t,o.jsx("h3",{children:e})]}),o.jsx("div",{className:r.Technologi__Container_Back,children:o.jsx("p",{children:a})})]})}function L(e){return C({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"},child:[]}]})(e)}function y(){const{Data_JSON:e,language:i}=d.useContext(h),[l,_]=[e.Languages[0],e.Languages[1]],[a,s]=[e.Tools[0],e.Tools[1]];return o.jsx(u,{children:o.jsxs("div",{className:c.Technologies__Container,children:[o.jsxs("h2",{className:c.Technologies__Title,children:[i=="Spanish"?"Habilidades":"Skills",o.jsx(L,{})," "]}),o.jsxs("div",{className:c.Technologies__Content,children:[o.jsx("div",{className:c.Technologies__Content_Languages,children:l.map((t,n)=>o.jsx(g,{name:_[n].name,background_color:_[n].background_color,width:_[n].width,color_i:_[n].color,description:t.description},n))}),o.jsx("div",{className:c.Technologies__Content_Tools,children:a.map((t,n)=>o.jsx(g,{name:s[n].name,background_color:s[n].background_color,width:s[n].width,color_i:s[n].color,description:t.description},n))})]})]})})}export{y as default};
