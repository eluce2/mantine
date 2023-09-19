(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1760],{33507:function(r,e,n){"use strict";n.d(e,{Z:function(){return s}});var s=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(r,e,n){"use strict";n.d(e,{Z:function(){return s}});var s=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(r,e,n){"use strict";n.d(e,{Z:function(){return s}});var s=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(r,e,n){"use strict";n.d(e,{Z:function(){return s}});var s=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(r,e,n){"use strict";n.d(e,{Z:function(){return s}});var s=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(r,e,n){"use strict";n.d(e,{Z:function(){return s}});var s=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(r,e,n){"use strict";n.d(e,{Z:function(){return s}});var s=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},39133:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/errors",function(){return n(16956)}])},16956:function(r,e,n){"use strict";n.r(e);var s=n(85893),o=n(11151),a=n(19905),i=n(9904);let t=(0,a.A)(i.us.formErrors);function l(r){let e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,o.ah)(),r.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"errors-object",children:"Errors object"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"form.errors"})," is an object of React nodes that contains validation errors:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { firstName: '', lastName: '' },\n  validate: {\n    firstName: (value) => (value.length < 2 ? 'First name is too short' : null),\n    lastName: (value) => (value.length < 2 ? 'Last name is too short' : null),\n  },\n});\n\n// Errors object is empty by default\nform.errors; // -> {}\n\n// Errors will be filled when you call form.validate manually\n// or automatically with form.onSubmit handler\nform.validate();\n\nform.errors; // ->\n// {\n//   firstName: 'First name is too short',\n//   lastName: 'Last name is too short'\n// }\n"})}),"\n",(0,s.jsx)(e.h2,{id:"initial-errors",children:"Initial errors"}),"\n",(0,s.jsxs)(e.p,{children:["Same as with ",(0,s.jsx)(e.a,{href:"/form/values/",children:"initial values"})," you can set initial form errors:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { firstName: '', lastName: '' },\n  initialErrors: {\n    firstName: 'First name is too short',\n    lastName: 'Last name is too short',\n  },\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"seterrors-handler",children:"setErrors handler"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm();\nform.setErrors({ firstName: 'Too short', email: 'Invalid email' });\n\nform.errors;\n// -> { firstName: 'Too short', email: 'Invalid email' }\n"})}),"\n",(0,s.jsx)(e.h2,{id:"setfielderror-handler",children:"setFieldError handler"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"form.setFieldError"})," handler sets error of the given field:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({ initialValues: { name: '', email: '' } });\nform.setFieldError('email', 'Invalid email');\n\nform.errors; // -> { email: 'Invalid email' }\n"})}),"\n",(0,s.jsx)(e.h2,{id:"clearerrors-handler",children:"clearErrors handler"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"form.clearErrors"})," handler clear all form errors:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({ initialErrors: { name: 'Too short', email: 'Invalid email' } });\nform.clearErrors();\n\nconsole.log(form.errors);\n// -> {}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"clearfielderror-handler",children:"clearFieldError handler"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"form.clearFieldError"})," handler clears error of the given field:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({ initialErrors: { name: 'Too short', email: 'Invalid email' } });\nform.clearFieldError('name');\n\nconsole.log(form.errors);\n// -> { email: 'Invalid email' }\n"})}),"\n",(0,s.jsx)(e.h2,{id:"errors-as-react-node",children:"Errors as react node"}),"\n",(0,s.jsx)(e.p,{children:"You can use any React node as an error message:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: { name: '', email: '' },\n  initialErrors: {\n    name: <p>Paragraph error</p>, // -> error as a react element\n    email: 42, // -> error as a number\n  },\n});\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Note that errors that are ",(0,s.jsx)(e.code,{children:"false"}),", ",(0,s.jsx)(e.code,{children:"null"})," or ",(0,s.jsx)(e.code,{children:"undefined"})," will be automatically removed:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({ initialErrors: { name: 'name-error', email: null } });\nform.errors; // -> { name: 'name-error' }, email error is not included in errors object\n"})}),"\n",(0,s.jsx)(e.h2,{id:"formerrors-type",children:"FormErrors type"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"form.errors"})," type is ",(0,s.jsx)(e.code,{children:"Record<string, React.ReactNode>"}),", you can import a shorthand ",(0,s.jsx)(e.code,{children:"FormErrors"})," type from ",(0,s.jsx)(e.code,{children:"@mantine/form"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import type { FormErrors } from '@mantine/form';\n"})}),"\n",(0,s.jsxs)(e.p,{children:["You can also get type directly from the ",(0,s.jsx)(e.code,{children:"form"})," instance:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm();\n\nconst handleErrors = (errors: typeof form.errors) => {};\n"})})]})}e.default=function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(t,Object.assign({},r,{children:(0,s.jsx)(l,r)}))}}},function(r){r.O(0,[1300,178,9774,2888,179],function(){return r(r.s=39133)}),_N_E=r.O()}]);