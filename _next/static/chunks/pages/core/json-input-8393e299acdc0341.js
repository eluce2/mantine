(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5618],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},96347:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/json-input",function(){return r(86641)}])},86641:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return et}});var n=r(85893),a=r(11151),o=r(19905),i=r(9904),l=r(67294),u=r(35179);function s(e,t){if("string"==typeof e&&0===e.trim().length)return!0;try{return t(e),!0}catch(e){return!1}}var c=r(91210),p=r(95879),d=r(75144),f=r(35577),h=Object.defineProperty,y=Object.defineProperties,b=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&x(e,r,t[r]);if(m)for(var r of m(t))v.call(t,r)&&x(e,r,t[r]);return e},O=(e,t)=>y(e,b(t)),j=(e,t)=>{var r={};for(var n in e)g.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))0>t.indexOf(n)&&v.call(e,n)&&(r[n]=e[n]);return r};let I={serialize:JSON.stringify,deserialize:JSON.parse},k=(0,d.d)((e,t)=>{let r=(0,f.w)("JsonInput",I,e),{value:n,defaultValue:a,onChange:o,formatOnBlur:i,validationError:p,serialize:d,deserialize:h,onFocus:y,onBlur:b,readOnly:m,error:g}=r,v=j(r,["value","defaultValue","onChange","formatOnBlur","validationError","serialize","deserialize","onFocus","onBlur","readOnly","error"]),[x,k]=(0,u.C)({value:n,defaultValue:a,finalValue:"",onChange:o}),[V,S]=(0,l.useState)(s(x,h)),z=e=>{null==y||y(e),S(!0)},M=e=>{"function"==typeof b&&b(e);let t=s(e.currentTarget.value,h);i&&!m&&t&&""!==e.currentTarget.value.trim()&&k(d(h(e.currentTarget.value),null,2)),S(t)};return l.createElement(c.g,O(w({value:x,onChange:e=>k(e.currentTarget.value),onFocus:z,onBlur:M,ref:t,readOnly:m},v),{autoComplete:"off",__staticSelector:"JsonInput",error:V?g:p||!0,"data-monospace":!0}))});k.classes=p.M.classes,k.displayName="@mantine/core/JsonInput";let V=`
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
`,S={type:"code",code:V,component:function(){return l.createElement(k,{maw:400,mx:"auto",label:"Your package.json",placeholder:"Textarea will autosize to fit the content",validationError:"Invalid JSON",formatOnBlur:!0,autosize:!0,minRows:4})}};var z=r(51343),M=Object.defineProperty,E=Object.defineProperties,J=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,_=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))R.call(t,r)&&_(e,r,t[r]);if(P)for(var r of P(t))T.call(t,r)&&_(e,r,t[r]);return e},Z=(e,t)=>E(e,J(t));let D=`
import { JsonInput } from '@mantine/core';


function Demo() {
  return (
    <JsonInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,A={type:"configurator",component:function(e){return l.createElement(k,Z(C({},e),{placeholder:"Input placeholder"}))},code:D,centered:!0,maxWidth:340,controls:z.pc},F=`
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput disabled defaultValue='{ "a": 1, "B": 2 }' label="Disabled" placeholder="Disabled" />
  );
}
`,L={type:"code",code:F,component:function(){return l.createElement(k,{disabled:!0,defaultValue:'{ "a": 1, "B": 2 }',label:"Disabled",placeholder:"Disabled"})},centered:!0,maxWidth:340};var N=r(46393),W=r(93693),B=r(81118),H=Object.defineProperty,X=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t)=>{for(var r in t||(t={}))Y.call(t,r)&&U(e,r,t[r]);if(X)for(var r of X(t))G.call(t,r)&&U(e,r,t[r]);return e};let K=`
import { IconAt } from '@tabler/icons-react';
import { JsonInput, rem } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
`,Q={type:"styles-api",data:B.P,component:function(e){return l.createElement(k,q({label:"Label",placeholder:"JsonInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:l.createElement(W.Z,{style:{width:(0,N.h)(18),height:(0,N.h)(18)}}),autosize:!0},e))},code:K,centered:!0,maxWidth:340},$=(0,o.A)(i.us.JsonInput);function ee(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),e.components),{Demo:r,InputFeatures:o,StylesApiSelectors:i,GetElementRef:l,InputAccessibility:u}=t;return r||er("Demo",!0),l||er("GetElementRef",!0),u||er("InputAccessibility",!0),o||er("InputFeatures",!0),i||er("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"JsonInput"})," is based on ",(0,n.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"})," component,\nit includes json validation logic and option to format input value on blur:"]}),"\n",(0,n.jsx)(r,{data:S}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { JsonInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <JsonInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,n.jsx)(o,{component:"JsonInput",element:"textarea"}),"\n",(0,n.jsx)(r,{data:A}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(r,{data:L}),"\n",(0,n.jsx)(i,{component:"JsonInput"}),"\n",(0,n.jsx)(r,{data:Q}),"\n",(0,n.jsx)(l,{component:"JsonInput",refType:"textarea"}),"\n",(0,n.jsx)(u,{component:"JsonInput"})]})}var et=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)($,Object.assign({},e,{children:(0,n.jsx)(ee,e)}))};function er(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},91210:function(e,t,r){"use strict";r.d(t,{g:function(){return C}});var n=r(67294);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o=n.useLayoutEffect,i=function(e){var t=n.useRef(e);return o(function(){t.current=e}),t},l=function(e,t){if("function"==typeof e){e(t);return}e.current=t},u=function(e,t){var r=(0,n.useRef)();return(0,n.useCallback)(function(n){e.current=n,r.current&&l(r.current,null),r.current=t,t&&l(t,n)},[t])},s={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},c=function(e){Object.keys(s).forEach(function(t){e.style.setProperty(t,s[t],"important")})},p=null,d=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},f=function(){},h=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],y=!!document.documentElement.currentStyle,b=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=h.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;y&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var a=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),o=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:a,borderSize:o}};function m(e,t,r){var a=i(r);n.useLayoutEffect(function(){var r=function(e){return a.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var g=function(e){m(window,"resize",e)},v=function(e){m(document.fonts,"loadingdone",e)},x=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],w=n.forwardRef(function(e,t){var r=e.cacheMeasurements,o=e.maxRows,i=e.minRows,l=e.onChange,s=void 0===l?f:l,h=e.onHeightChange,y=void 0===h?f:h,m=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,x),w=void 0!==m.value,O=n.useRef(null),j=u(O,t),I=n.useRef(0),k=n.useRef(),V=function(){var e,t,n,a,l,u,s,f,h,m,g,v=O.current,x=r&&k.current?k.current:b(v);if(x){k.current=x;var w=(e=v.value||v.placeholder||"x",void 0===(t=i)&&(t=1),void 0===(n=o)&&(n=1/0),p||((p=document.createElement("textarea")).setAttribute("tabindex","-1"),p.setAttribute("aria-hidden","true"),c(p)),null===p.parentNode&&document.body.appendChild(p),a=x.paddingSize,l=x.borderSize,s=(u=x.sizingStyle).boxSizing,Object.keys(u).forEach(function(e){p.style[e]=u[e]}),c(p),p.value=e,f=d(p,x),p.value=e,f=d(p,x),p.value="x",m=(h=p.scrollHeight-a)*t,"border-box"===s&&(m=m+a+l),f=Math.max(m,f),g=h*n,"border-box"===s&&(g=g+a+l),[f=Math.min(g,f),h]),j=w[0],V=w[1];I.current!==j&&(I.current=j,v.style.setProperty("height",j+"px","important"),y(j,{rowHeight:V}))}};return n.useLayoutEffect(V),g(V),v(V),n.createElement("textarea",a({},m,{onChange:function(e){w||V(),s(e)},ref:j}))}),O=r(95879),j=r(75144),I=r(35577),k=Object.defineProperty,V=Object.defineProperties,S=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&J(e,r,t[r]);if(z)for(var r of z(t))E.call(t,r)&&J(e,r,t[r]);return e},R=(e,t)=>V(e,S(t)),T=(e,t)=>{var r={};for(var n in e)M.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&z)for(var n of z(e))0>t.indexOf(n)&&E.call(e,n)&&(r[n]=e[n]);return r};let _={},C=(0,j.d)((e,t)=>{let r=(0,I.w)("Textarea",_,e),{autosize:a,maxRows:o,minRows:i,__staticSelector:l}=r,u=T(r,["autosize","maxRows","minRows","__staticSelector"]);return n.createElement(O.M,P(R(P({component:a?w:"textarea",ref:t},u),{__staticSelector:l||"Textarea",multiline:!0,"data-no-overflow":a&&void 0===o||void 0}),a?{maxRows:o,minRows:i}:{}))});C.classes=O.M.classes,C.displayName="@mantine/core/Textarea"},51343:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return a},pc:function(){return o}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[1300,178,9774,2888,179],function(){return e(e.s=96347)}),_N_E=e.O()}]);