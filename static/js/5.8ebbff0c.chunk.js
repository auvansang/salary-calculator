(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{5633:function(e,n,a){"use strict";a.r(n);var t=a(102),l=a(101),r=a(103),c=a(0),o=a.n(c),m=a(402),u=a.n(m),i=a(59),s=a(19),p=a(57),E=a(5630),g=8,h=1.5,y=1,I=10.5,b=17.5,d=3,f=1,v=[418e4,371e4,325e4,292e4],x=[[.05,5e6],[.1,5e6],[.15,8e6],[.2,14e6],[.25,2e7],[.3,28e6],[.35,Number.MAX_SAFE_INTEGER]],N=[[475e4,0,95e4],[925e4,25e4,9e5],[1605e4,75e4,85e4],[2725e4,165e4,8e5],[4225e4,325e4,75e4],[6185e4,585e4,7e5],[Number.MAX_SAFE_INTEGER,985e4,65e4]],S=[[0,5e6,5],[5e6,1e7,10],[1e7,18e6,15],[18e6,32e6,20],[32e6,52e6,25],[52e6,8e7,30],[8e7,Number.POSITIVE_INFINITY,35]],O=function(e,n,a){var t=e(a,{type:"@@LOCAL_STATE/INITIALIZE"}),l=Object(c.useReducer)(e,t),o=Object(r.a)(l,2),m=o[0],u=o[1],i=Object(c.useMemo)(function(){var e={};return Object.keys(n).forEach(function(a){e[a]=function(){var e=n[a].apply(n,arguments);"function"===typeof e&&e(u,m),u(e)}}),e},[n]);return[m,i]},T=function(e){for(var n=[],a=0;a<x.length;a++){var t=x[a][0],l=x[a][1],r=e<=l?e:l;if(n.push(r*t),(e-=l)<=0)break}return n},j=function(e,n){var a=n;if(e.baseInsurance||(a=e.baseSalary),a<v[e.region-1])return{socialInsurance:0,healthInsurance:0,unemploymentInsurance:0};var t=a*g/100,l=a*h/100;~~a>278e5&&(t=278e5*g/100,l=278e5*h/100);var r=20*v[e.region-1],c=a*y/100;return~~a>r&&(c=r*y/100),{socialInsurance:t,healthInsurance:l,unemploymentInsurance:c}},k=function(e,n){var a=n;if(e.baseInsurance||(a=e.baseSalary),a<v[e.region-1])return{socialInsurance:0,healthInsurance:0,unemploymentInsurance:0};var t=a*b/100,l=a*d/100;~~a>278e5&&(t=278e5*b/100,l=278e5*d/100);var r=20*v[e.region-1],c=a*f/100;return~~a>r&&(c=r*f/100),{socialInsurance:t,healthInsurance:l,unemploymentInsurance:c}},A=function(e){var n=36e5*e.numberOfDependant,a=e.income-9e6-n,t=N.filter(function(e){return a<=e[0]})[0],l=(a-t[1])/t[2]*1e6,r=T(l),c=l+9e6+n,o=j(e,c/(1-I/100)),m=c+o.socialInsurance+o.healthInsurance+o.unemploymentInsurance;o=j(e,m);var u=k(e,m),i=r.length>0?r.reduce(function(e,n){return e+n}):0,s=m+u.socialInsurance+u.healthInsurance+u.unemploymentInsurance;return{flag:!0,grossSalary:m,socialInsurance:o.socialInsurance,healthInsurance:o.healthInsurance,unemploymentInsurance:o.unemploymentInsurance,employerPayTotal:s,employerSocialIncurance:u.socialInsurance,employerHelthIncurance:u.healthInsurance,employerUnemploymentInsurance:u.unemploymentInsurance,incomeBeforeTax:c,reductionForPersonal:9e6,reductionForDependant:n,taxableIncome:l,tax:r,personalIncomeTax:i,netSalary:e.income}},F=function(e){var n=e.income,a=j(e,n),t=k(e,n),l=36e5*e.numberOfDependant,r=n-a.socialInsurance-a.healthInsurance-a.unemploymentInsurance,c=r-9e6-l,o=T(c),m=o.length>0?o.reduce(function(e,n){return e+n}):0,u=n+t.socialInsurance+t.healthInsurance+t.unemploymentInsurance;return{flag:!1,grossSalary:n,socialInsurance:a.socialInsurance,healthInsurance:a.healthInsurance,unemploymentInsurance:a.unemploymentInsurance,employerSocialIncurance:t.socialInsurance,employerHelthIncurance:t.healthInsurance,employerUnemploymentInsurance:t.unemploymentInsurance,employerPayTotal:u,incomeBeforeTax:r,reductionForPersonal:9e6,reductionForDependant:l,taxableIncome:c,tax:o,personalIncomeTax:m,netSalary:r-m}},B={change:function(e,n){var a=A;return n||(a=F),{type:"@@SALARY/CHANGE",payload:Object(l.a)({entity:e},a(Object(l.a)({},e)))}}},D=function(e,n){return function(a,t){return a=a||e,n.hasOwnProperty(t.type)?n[t.type](a,t):a}}({flag:!0,grossSalary:0,socialInsurance:0,healthInsurance:0,unemploymentInsurance:0,employerSocialIncurance:0,employerHelthIncurance:0,employerUnemploymentInsurance:0,employerPayTotal:0,incomeBeforeTax:0,reductionForPersonal:0,reductionForDependant:0,taxableIncome:0,tax:[],personalIncomeTax:0,netSalary:0},Object(t.a)({},"@@SALARY/CHANGE",function(e,n){return Object(l.a)({},e,n.payload)})),P=Object(p.a)(function(e){return{section:{paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit,marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,"& > div":{marginRight:2*e.spacing.unit},"& > label":{marginRight:12*e.spacing.unit}},sectionAction:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,"& > button":{marginRight:2*e.spacing.unit},"& table tr > td:first-child, & table tr > th:first-child":{width:360,textAlign:"right"}},textBox:{width:18*e.spacing.unit}}});n.default=function(){var e=Object(c.useState)(function(){return{income:0,baseInsurance:!0,baseSalary:0,region:1,numberOfDependant:0}}),n=Object(r.a)(e,2),a=n[0],m=n[1],p=O(D,B),I=Object(r.a)(p,2),v=I[0],x=I[1],N=Object(i.b)("homePage"),T=Object(r.a)(N,1)[0],j=P(),k=function(e){var n=e.target.value.trim();""===n&&(n="0"),m(Object(l.a)({},a,Object(t.a)({},e.target.name,parseFloat(n))))},A=function(e){m(Object(l.a)({},a,Object(t.a)({},e.target.name,"true"==e.target.value)))},F=function(e){m(Object(l.a)({},a,Object(t.a)({},e.target.name,parseInt(e.target.value))))},C=function(e){x.change(a,e)},w=function(e){return(e=e||0).toLocaleString("vi-VN",{minimumFractionDigits:2,style:"currency",currency:T("currency")})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:T("pageName"),meta:[{name:"description",content:"".concat(T("pageDescription"))},{property:"og:title",content:"".concat(T("pageName"))},{property:"og:site_name",content:"".concat(T("pageName"))},{property:"og:url",content:"".concat(T("pageUrl"))},{property:"og:description",content:"".concat(T("pageDescription"))},{property:"og:type",content:"website"},{property:"og:image",content:"http://localhost:8000/favicon.ico"}],link:[{rel:"canonical",href:"".concat(T("pageUrl"))}]}),o.a.createElement(s.q,{component:"h1",variant:"h4"},T("pageTitle")),o.a.createElement(s.q,{component:"h2",variant:"h5"},T("pageDescription")),o.a.createElement("br",null),o.a.createElement(s.q,{component:"h3",variant:"h6"},"1. ",T("income")),o.a.createElement(s.h,{className:j.section},o.a.createElement(s.o,{className:j.textBox,label:T("income"),margin:"normal",name:"income",type:"number",value:a.income,onChange:k})),o.a.createElement(s.q,{component:"h3",variant:"h6"},"2. ",T("insurance")),o.a.createElement(s.h,{className:j.section},o.a.createElement(s.d,{control:o.a.createElement(s.i,{checked:a.baseInsurance,value:!0,name:"baseInsurance","aria-label":T("fullWange"),onChange:A}),label:T("fullWange")}),o.a.createElement(s.d,{control:o.a.createElement(s.i,{checked:!a.baseInsurance,value:!1,name:"baseInsurance","aria-label":T("other"),onChange:A}),label:T("other")}),o.a.createElement(s.d,{control:o.a.createElement(s.o,{className:j.textBox,margin:"normal",name:"baseSalary",type:"number",disabled:a.baseInsurance,value:a.baseSalary,onChange:k}),label:""})),o.a.createElement(s.h,{className:j.section},o.a.createElement(s.o,{className:j.textBox,label:T("minimumWage"),margin:"normal",name:"minSalary",type:"number",value:139e4}),o.a.createElement(s.o,{className:j.textBox,label:T("social"),margin:"normal",name:"socialInsurance",type:"number",value:g}),o.a.createElement(s.o,{className:j.textBox,label:T("health"),margin:"normal",name:"healthInsurance",type:"number",value:h}),o.a.createElement(s.o,{className:j.textBox,label:T("unemployee"),margin:"normal",name:"unemployeeInsurance",type:"number",value:y})),o.a.createElement(s.h,{className:j.section},o.a.createElement(s.d,{control:o.a.createElement(s.i,{checked:1===a.region,value:1,name:"region","aria-label":T("region",{region:1}),onChange:F}),label:T("region",{region:1})}),o.a.createElement(s.d,{control:o.a.createElement(s.i,{checked:2===a.region,value:2,name:"region","aria-label":T("region",{region:2}),onChange:F}),label:T("region",{region:2})}),o.a.createElement(s.d,{control:o.a.createElement(s.i,{checked:3===a.region,value:3,name:"region","aria-label":T("region",{region:3}),onChange:F}),label:T("region",{region:3})}),o.a.createElement(s.d,{control:o.a.createElement(s.i,{checked:4===a.region,value:4,name:"region","aria-label":T("region",{region:4}),onChange:F}),label:T("region",{region:4})})),o.a.createElement(s.q,{component:"h3",variant:"h6"},"3. ",T("reductionBase")),o.a.createElement(s.h,{className:j.section},o.a.createElement(s.o,{className:j.textBox,label:T("personal"),margin:"normal",name:"reductionForPersonal",type:"number",value:9e6}),o.a.createElement(s.o,{label:T("dependant"),margin:"normal",name:"reductionForDependant",type:"number",value:36e5}),o.a.createElement(s.o,{className:j.textBox,label:T("noDependant"),margin:"normal",name:"numberOfDependant",type:"number",value:a.numberOfDependant,onChange:k})),o.a.createElement("div",{className:j.sectionAction},o.a.createElement(s.b,{variant:v.flag?"contained":"outlined",color:"primary",onClick:function(){return C(!0)}},T("net")," ",o.a.createElement(E.a,null)," ",T("gross")),o.a.createElement(s.b,{variant:v.flag?"outlined":"contained",color:"primary",onClick:function(){return C(!1)}},T("gross")," ",o.a.createElement(E.a,null)," ",T("net"))),o.a.createElement(s.q,{component:"h3",variant:"h6"},T("explain")),o.a.createElement(s.h,{className:j.sectionAction},o.a.createElement(s.j,null,o.a.createElement(s.k,null,o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("grossSalary")),o.a.createElement(s.l,null,w(v.grossSalary))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("socialInsurance")," (",g,"%)"),o.a.createElement(s.l,null,w(v.socialInsurance))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("healthInsurance")," (",h,"%)"),o.a.createElement(s.l,null,w(v.healthInsurance))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("unemploymentInsurance")," (",y,"%)"),o.a.createElement(s.l,null,w(v.unemploymentInsurance))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("incomeBeforeTax")),o.a.createElement(s.l,null,w(v.incomeBeforeTax))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("reductionForPersonal")),o.a.createElement(s.l,null,w(v.reductionForPersonal))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("reductionForDependant")),o.a.createElement(s.l,null,w(v.reductionForDependant))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("taxableIncome")),o.a.createElement(s.l,null,w(v.taxableIncome))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("personalIncomeTax")),o.a.createElement(s.l,null,w(v.personalIncomeTax))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("netSalary")),o.a.createElement(s.l,null,w(v.netSalary)))))),o.a.createElement(s.q,{component:"h4",variant:"subtitle1"},T("personalIncomeTaxDetails")),o.a.createElement(s.h,{className:j.sectionAction},o.a.createElement(s.j,null,o.a.createElement(s.m,null,o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("theTaxable")),o.a.createElement(s.l,null,T("theTaxRate")),o.a.createElement(s.l,null,T("thePayment")))),o.a.createElement(s.k,null,S.map(function(e,n){return 0===n?o.a.createElement(s.n,{key:n},o.a.createElement(s.l,null,T("toMillion",{to:w(S[0][1])})),o.a.createElement(s.l,null,"".concat(S[0][2],"%")),o.a.createElement(s.l,null,w(v.tax[0]))):n===S.length-1?o.a.createElement(s.n,{key:n},o.a.createElement(s.l,null,T("upperMillion",{from:w(S[6][0])})),o.a.createElement(s.l,null,"".concat(S[6][2],"%")),o.a.createElement(s.l,null,w(v.tax[6]))):o.a.createElement(s.n,{key:n},o.a.createElement(s.l,null,T("upperToMillion",{from:w(e[0]),to:w(e[1])})),o.a.createElement(s.l,null,"".concat(e[2],"%")),o.a.createElement(s.l,null,w(v.tax[n])))})))),o.a.createElement(s.q,{component:"h3",variant:"h6"},T("employerPay")),o.a.createElement(s.h,{className:j.sectionAction},o.a.createElement(s.j,null,o.a.createElement(s.k,null,o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("grossSalary")),o.a.createElement(s.l,null,w(v.grossSalary))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("socialInsurance")," (",b,"%)"),o.a.createElement(s.l,null,w(v.employerSocialIncurance))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("healthInsurance")," (",d,"%)"),o.a.createElement(s.l,null,w(v.employerHelthIncurance))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("unemploymentInsurance")," (",f,"%)"),o.a.createElement(s.l,null,w(v.employerUnemploymentInsurance))),o.a.createElement(s.n,null,o.a.createElement(s.l,null,T("total")),o.a.createElement(s.l,null,w(v.employerPayTotal)))))))}}}]);