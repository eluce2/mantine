(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},80656:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/textarea",function(){return r(18507)}])},18507:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var n=r(85893),a=r(11151),o=r(19905),i=r(9904),l=r(67294),u=r(91210),c=r(51343),s=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&y(e,r,t[r]);if(f)for(var r of f(t))m.call(t,r)&&y(e,r,t[r]);return e},b=(e,t)=>d(e,p(t));let v=`
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,x={type:"configurator",component:function(e){return l.createElement(u.g,b(g({},e),{placeholder:"Input placeholder"}))},code:v,centered:!0,maxWidth:340,controls:c.pc},w=`
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea label="Boolean error" placeholder="Boolean error" error />
      <Textarea
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`,k={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(u.g,{label:"Boolean error",placeholder:"Boolean error",error:!0}),l.createElement(u.g,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:w};var j=r(51227);let O=`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea disabled/>;
}
`,M={type:"code",code:O,component:function(){return l.createElement(j.x,{maw:320,mx:"auto"},l.createElement(u.g,{label:"Disabled",placeholder:"Your comment",disabled:!0}))}};var V=r(46393),E=r(93693),S=r(46375),T=Object.defineProperty,z=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))I.call(t,r)&&R(e,r,t[r]);if(z)for(var r of z(t))P.call(t,r)&&R(e,r,t[r]);return e};let Z=`
import { IconAt } from '@tabler/icons-react';
import { Textarea, rem } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
`,_={type:"styles-api",data:S.g,component:function(e){return l.createElement(u.g,W({label:"Label",placeholder:"Textarea",description:"Description",error:"Error",withAsterisk:!0,leftSection:l.createElement(E.Z,{style:{width:(0,V.h)(18),height:(0,V.h)(18)}}),autosize:!0},e))},code:Z,centered:!0,maxWidth:340},A=(0,o.A)(i.us.Textarea);function L(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,a.ah)(),e.components),{InputFeatures:r,Demo:o,StylesApiSelectors:i,GetElementRef:l,InputAccessibility:u}=t;return o||F("Demo",!0),l||F("GetElementRef",!0),u||F("InputAccessibility",!0),r||F("InputFeatures",!0),i||F("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{component:"Textarea",element:"textarea"}),"\n",(0,n.jsx)(o,{data:x}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Textarea } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <Textarea value={value} onChange={(event) => setValue(event.currentTarget.value)} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(o,{data:k}),"\n",(0,n.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,n.jsx)(o,{data:M}),"\n",(0,n.jsx)(i,{component:"Textarea"}),"\n",(0,n.jsx)(o,{data:_}),"\n",(0,n.jsx)(l,{component:"Textarea",refType:"textarea"}),"\n",(0,n.jsx)(u,{component:"Textarea"})]})}var C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(A,Object.assign({},e,{children:(0,n.jsx)(L,e)}))};function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},91210:function(e,t,r){"use strict";r.d(t,{g:function(){return _}});var n=r(67294);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o=n.useLayoutEffect,i=function(e){var t=n.useRef(e);return o(function(){t.current=e}),t},l=function(e,t){if("function"==typeof e){e(t);return}e.current=t},u=function(e,t){var r=(0,n.useRef)();return(0,n.useCallback)(function(n){e.current=n,r.current&&l(r.current,null),r.current=t,t&&l(t,n)},[t])},c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},s=function(e){Object.keys(c).forEach(function(t){e.style.setProperty(t,c[t],"important")})},d=null,p=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},f=function(){},h=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],m=!!document.documentElement.currentStyle,y=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=h.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;m&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var a=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),o=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:a,borderSize:o}};function g(e,t,r){var a=i(r);n.useLayoutEffect(function(){var r=function(e){return a.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var b=function(e){g(window,"resize",e)},v=function(e){g(document.fonts,"loadingdone",e)},x=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],w=n.forwardRef(function(e,t){var r=e.cacheMeasurements,o=e.maxRows,i=e.minRows,l=e.onChange,c=void 0===l?f:l,h=e.onHeightChange,m=void 0===h?f:h,g=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,x),w=void 0!==g.value,k=n.useRef(null),j=u(k,t),O=n.useRef(0),M=n.useRef(),V=function(){var e,t,n,a,l,u,c,f,h,g,b,v=k.current,x=r&&M.current?M.current:y(v);if(x){M.current=x;var w=(e=v.value||v.placeholder||"x",void 0===(t=i)&&(t=1),void 0===(n=o)&&(n=1/0),d||((d=document.createElement("textarea")).setAttribute("tabindex","-1"),d.setAttribute("aria-hidden","true"),s(d)),null===d.parentNode&&document.body.appendChild(d),a=x.paddingSize,l=x.borderSize,c=(u=x.sizingStyle).boxSizing,Object.keys(u).forEach(function(e){d.style[e]=u[e]}),s(d),d.value=e,f=p(d,x),d.value=e,f=p(d,x),d.value="x",g=(h=d.scrollHeight-a)*t,"border-box"===c&&(g=g+a+l),f=Math.max(g,f),b=h*n,"border-box"===c&&(b=b+a+l),[f=Math.min(b,f),h]),j=w[0],V=w[1];O.current!==j&&(O.current=j,v.style.setProperty("height",j+"px","important"),m(j,{rowHeight:V}))}};return n.useLayoutEffect(V),b(V),v(V),n.createElement("textarea",a({},g,{onChange:function(e){w||V(),c(e)},ref:j}))}),k=r(95879),j=r(75144),O=r(35577),M=Object.defineProperty,V=Object.defineProperties,E=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&I(e,r,t[r]);if(S)for(var r of S(t))z.call(t,r)&&I(e,r,t[r]);return e},R=(e,t)=>V(e,E(t)),W=(e,t)=>{var r={};for(var n in e)T.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&S)for(var n of S(e))0>t.indexOf(n)&&z.call(e,n)&&(r[n]=e[n]);return r};let Z={},_=(0,j.d)((e,t)=>{let r=(0,O.w)("Textarea",Z,e),{autosize:a,maxRows:o,minRows:i,__staticSelector:l}=r,u=W(r,["autosize","maxRows","minRows","__staticSelector"]);return n.createElement(k.M,P(R(P({component:a?w:"textarea",ref:t},u),{__staticSelector:l||"Textarea",multiline:!0,"data-no-overflow":a&&void 0===o||void 0}),a?{maxRows:o,minRows:i}:{}))});_.classes=k.M.classes,_.displayName="@mantine/core/Textarea"},51343:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return a},pc:function(){return o}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[1300,178,9774,2888,179],function(){return e(e.s=80656)}),_N_E=e.O()}]);