(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5281],{33507:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var i=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var i=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var i=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var i=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var i=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var i=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var i=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},54980:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-document-title",function(){return n(90422)}])},90422:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var i=n(85893),o=n(11151),r=n(19905),s=n(9904),c=n(67294),a=n(29104),d=n(41249),u=n(55899);let l=`
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`,h={type:"code",code:l,component:function(){let[t,e]=(0,c.useState)("");return(0,a.j)(t),c.createElement(u.z,{onClick:()=>e((0,d.k)())},"Set document title to random id")},centered:!0},p=(0,r.A)(s.us.useDocumentTitle);function v(t){let e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,o.ah)(),t.components),{Demo:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"use-document-title"})," sets ",(0,i.jsx)(e.code,{children:"document.title"})," property with ",(0,i.jsx)(e.code,{children:"React.useLayoutEffect"})," hook. Hook is not called during server side rendering.\nUse this hook with client only applications, for isomorphic use more advanced options, for example, ",(0,i.jsx)(e.a,{href:"https://github.com/nfl/react-helmet",children:"react-helmet"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Call hook with a string that should be set as document title inside any component.\nThe hook is triggered every time value changes and the value is not an empty string (trailing whitespace is trimmed) or ",(0,i.jsx)(e.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(n,{data:h}),"\n",(0,i.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"function useDocumentTitle(title: string): void;\n"})})]})}var g=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(p,Object.assign({},t,{children:(0,i.jsx)(v,t)}))}},29104:function(t,e,n){"use strict";n.d(e,{j:function(){return o}});var i=n(13192);function o(t){(0,i.Y)(()=>{"string"==typeof t&&t.trim().length>0&&(document.title=t.trim())},[t])}}},function(t){t.O(0,[1300,178,9774,2888,179],function(){return t(t.s=54980)}),_N_E=t.O()}]);