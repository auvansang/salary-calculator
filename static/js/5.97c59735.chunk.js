(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{199:function(e,a,n){"use strict";n.r(a);var t=n(57),l=n(37),r=n(59),c=n(0),o=n.n(c),m=n(160),u=n.n(m),i=n(40),s=n(122),p=n(121),g=n(198),E=n(190),I=n(200),h=n(142),y=n(192),b=n(193),f=n(194),d=n(195),v=n(196),x=n(124),S=n(191),N=n(175),O=n(169),T=n.n(O),C=function(e){var a=e.inputRef,n=e.name,t=e.onChange,l=Object(N.a)(e,["inputRef","name","onChange"]);return o.a.createElement(T.a,Object.assign({},l,{getInputRef:a,onValueChange:function(e){t({target:{value:e.value,name:n}})},thousandSeparator:".",decimalSeparator:",",decimalScale:2}))},P=8,j=1.5,A=1,F=10.5,k=17.5,B=3,D=1,R=[418e4,371e4,325e4,292e4],w=[[.05,5e6],[.1,5e6],[.15,8e6],[.2,14e6],[.25,2e7],[.3,28e6],[.35,Number.MAX_SAFE_INTEGER]],L=[[475e4,0,95e4],[925e4,25e4,9e5],[1605e4,75e4,85e4],[2725e4,165e4,8e5],[4225e4,325e4,75e4],[6185e4,585e4,7e5],[Number.MAX_SAFE_INTEGER,985e4,65e4]],U=[[0,5e6,5],[5e6,1e7,10],[1e7,18e6,15],[18e6,32e6,20],[32e6,52e6,25],[52e6,8e7,30],[8e7,Number.POSITIVE_INFINITY,35]],_=n(171),H=n.n(_),M=n(173),G=function(e,a,n){var t=e(n,{type:"@@LOCAL_STATE/INITIALIZE"}),l=Object(c.useReducer)(e,t),o=Object(r.a)(l,2),m=o[0],u=o[1],i=Object(c.useMemo)(function(){var e={};return Object.keys(a).forEach(function(n){e[n]=Object(M.a)(H.a.mark(function e(){var t,l=arguments;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a[n].apply(a,l);case 2:"function"===typeof(t=e.sent)&&t(u,m),u(t);case 5:case"end":return e.stop()}},e)}))}),e},[a,m]);return[m,i]},V=function(e){for(var a=[],n=0;n<w.length;n++){var t=w[n][0],l=w[n][1],r=e<=l?e:l;if(a.push(r*t),(e-=l)<=0)break}return a},W=function(e,a){var n=a;if(e.baseInsurance||(n=e.baseSalary),n<R[e.region-1])return{socialInsurance:0,healthInsurance:0,unemploymentInsurance:0};var t=n*P/100,l=n*j/100;~~n>278e5&&(t=278e5*P/100,l=278e5*j/100);var r=20*R[e.region-1],c=n*A/100;return~~n>r&&(c=r*A/100),{socialInsurance:t,healthInsurance:l,unemploymentInsurance:c}},Y=function(e,a){var n=a;if(e.baseInsurance||(n=e.baseSalary),n<R[e.region-1])return{socialInsurance:0,healthInsurance:0,unemploymentInsurance:0};var t=n*k/100,l=n*B/100;~~n>278e5&&(t=278e5*k/100,l=278e5*B/100);var r=20*R[e.region-1],c=n*D/100;return~~n>r&&(c=r*D/100),{socialInsurance:t,healthInsurance:l,unemploymentInsurance:c}},J=function(e){var a=36e5*e.numberOfDependant,n=e.income-9e6-a,t=L.filter(function(e){return n<=e[0]})[0],l=(n-t[1])/t[2]*1e6,r=V(l),c=l+9e6+a,o=W(e,c/(1-F/100)),m=c+o.socialInsurance+o.healthInsurance+o.unemploymentInsurance;o=W(e,m);var u=Y(e,m),i=r.length>0?r.reduce(function(e,a){return e+a}):0,s=m+u.socialInsurance+u.healthInsurance+u.unemploymentInsurance;return{flag:!0,grossSalary:m,socialInsurance:o.socialInsurance,healthInsurance:o.healthInsurance,unemploymentInsurance:o.unemploymentInsurance,employerPayTotal:s,employerSocialIncurance:u.socialInsurance,employerHelthIncurance:u.healthInsurance,employerUnemploymentInsurance:u.unemploymentInsurance,incomeBeforeTax:c,reductionForPersonal:9e6,reductionForDependant:a,taxableIncome:l,tax:r,personalIncomeTax:i,netSalary:e.income}},X=function(e){var a=e.income,n=W(e,a),t=Y(e,a),l=36e5*e.numberOfDependant,r=a-n.socialInsurance-n.healthInsurance-n.unemploymentInsurance,c=r-9e6-l,o=V(c),m=o.length>0?o.reduce(function(e,a){return e+a}):0,u=a+t.socialInsurance+t.healthInsurance+t.unemploymentInsurance;return{flag:!1,grossSalary:a,socialInsurance:n.socialInsurance,healthInsurance:n.healthInsurance,unemploymentInsurance:n.unemploymentInsurance,employerSocialIncurance:t.socialInsurance,employerHelthIncurance:t.healthInsurance,employerUnemploymentInsurance:t.unemploymentInsurance,employerPayTotal:u,incomeBeforeTax:r,reductionForPersonal:9e6,reductionForDependant:l,taxableIncome:c,tax:o,personalIncomeTax:m,netSalary:r-m}},Z={change:function(e,a){var n=J;return a||(n=X),{type:"@@SALARY/CHANGE",payload:Object(l.a)({},n(e))}}},q=function(e,a){return function(n,t){return n=n||e,a.hasOwnProperty(t.type)?a[t.type](n,t):n}}({flag:!0,grossSalary:0,socialInsurance:0,healthInsurance:0,unemploymentInsurance:0,employerSocialIncurance:0,employerHelthIncurance:0,employerUnemploymentInsurance:0,employerPayTotal:0,incomeBeforeTax:0,reductionForPersonal:0,reductionForDependant:0,taxableIncome:0,tax:[],personalIncomeTax:0,netSalary:0},Object(t.a)({},"@@SALARY/CHANGE",function(e,a){return Object(l.a)({},e,a.payload)})),z=Object(x.a)(function(e){return{section:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),marginTop:e.spacing(2),marginBottom:e.spacing(2),"& > div":{marginRight:e.spacing(2)},"& > label":{marginRight:e.spacing(12)}},sectionAction:{marginTop:e.spacing(2),marginBottom:e.spacing(2),"& > button":{marginRight:e.spacing(2)},"& table tr > td:first-child, & table tr > th:first-child":{width:360,textAlign:"right"}},textBox:{width:e.spacing(18)}}});a.default=function(){var e=Object(c.useState)(function(){return{income:0,baseInsurance:!0,baseSalary:0,region:1,numberOfDependant:0}}),a=Object(r.a)(e,2),n=a[0],m=a[1],x=G(q,Z),N=Object(r.a)(x,2),O=N[0],T=N[1],F=Object(i.b)("homePage"),R=Object(r.a)(F,1)[0],w=z(),L=function(e){var a=e.target.value.trim();m(Object(l.a)({},n,Object(t.a)({},e.target.name,parseFloat(a))))},_=function(e){m(Object(l.a)({},n,Object(t.a)({},e.target.name,"true"===e.target.value)))},H=function(e){m(Object(l.a)({},n,Object(t.a)({},e.target.name,parseInt(e.target.value))))},M=function(e){var a=Object(l.a)({},n,{income:"NaN"===n.income.toString()?0:n.income});T.change(a,e)},V=function(e){return(e=e||0).toLocaleString("vi-VN",{minimumFractionDigits:2,style:"currency",currency:R("currency")})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:R("pageName"),meta:[{name:"description",content:"".concat(R("pageDescription"))},{property:"og:title",content:"".concat(R("pageName"))},{property:"og:site_name",content:"".concat(R("pageName"))},{property:"og:url",content:"".concat(R("pageUrl"))},{property:"og:description",content:"".concat(R("pageDescription"))},{property:"og:type",content:"website"},{property:"og:image",content:"".concat(R("pageUrl"),"/screenshot-1280x640.png")}],link:[{rel:"canonical",href:"".concat(R("pageUrl"))}]}),o.a.createElement(s.a,{component:"h1",variant:"h4"},R("pageTitle")),o.a.createElement(s.a,{component:"h2",variant:"h5"},R("pageDescription")),o.a.createElement("br",null),o.a.createElement(s.a,{component:"h3",variant:"h6"},"1. ",R("income")),o.a.createElement(p.a,{className:w.section},o.a.createElement(g.a,{className:w.textBox,label:R("income"),margin:"normal",name:"income",value:n.income,onChange:L,InputProps:{inputComponent:C}})),o.a.createElement(s.a,{component:"h3",variant:"h6"},"2. ",R("insurance")),o.a.createElement(p.a,{className:w.section},o.a.createElement(E.a,{control:o.a.createElement(I.a,{checked:n.baseInsurance,value:!0,name:"baseInsurance","aria-label":R("fullWange"),onChange:_}),label:R("fullWange")}),o.a.createElement(E.a,{control:o.a.createElement(I.a,{checked:!n.baseInsurance,value:!1,name:"baseInsurance","aria-label":R("other"),onChange:_}),label:R("other")}),o.a.createElement(E.a,{control:o.a.createElement(g.a,{className:w.textBox,margin:"normal",name:"baseSalary",disabled:n.baseInsurance,value:n.baseSalary,onChange:L,InputProps:{inputComponent:C}}),label:""})),o.a.createElement(p.a,{className:w.section},o.a.createElement(g.a,{className:w.textBox,label:R("minimumWage"),margin:"normal",name:"minSalary",value:139e4,InputProps:{inputComponent:C}}),o.a.createElement(g.a,{className:w.textBox,label:R("social"),margin:"normal",name:"socialInsurance",value:P,InputProps:{inputComponent:C}}),o.a.createElement(g.a,{className:w.textBox,label:R("health"),margin:"normal",name:"healthInsurance",value:j,InputProps:{inputComponent:C}}),o.a.createElement(g.a,{className:w.textBox,label:R("unemployee"),margin:"normal",name:"unemployeeInsurance",value:A,InputProps:{inputComponent:C}})),o.a.createElement(p.a,{className:w.section},o.a.createElement(E.a,{control:o.a.createElement(I.a,{checked:1===n.region,value:1,name:"region","aria-label":R("region",{region:1}),onChange:H}),label:R("region",{region:1})}),o.a.createElement(E.a,{control:o.a.createElement(I.a,{checked:2===n.region,value:2,name:"region","aria-label":R("region",{region:2}),onChange:H}),label:R("region",{region:2})}),o.a.createElement(E.a,{control:o.a.createElement(I.a,{checked:3===n.region,value:3,name:"region","aria-label":R("region",{region:3}),onChange:H}),label:R("region",{region:3})}),o.a.createElement(E.a,{control:o.a.createElement(I.a,{checked:4===n.region,value:4,name:"region","aria-label":R("region",{region:4}),onChange:H}),label:R("region",{region:4})})),o.a.createElement(s.a,{component:"h3",variant:"h6"},"3. ",R("reductionBase")),o.a.createElement(p.a,{className:w.section},o.a.createElement(g.a,{className:w.textBox,label:R("personal"),margin:"normal",name:"reductionForPersonal",value:9e6,InputProps:{inputComponent:C}}),o.a.createElement(g.a,{label:R("dependant"),margin:"normal",name:"reductionForDependant",value:36e5,InputProps:{inputComponent:C}}),o.a.createElement(g.a,{className:w.textBox,label:R("noDependant"),margin:"normal",name:"numberOfDependant",value:n.numberOfDependant,onChange:L,InputProps:{inputComponent:C}})),o.a.createElement("div",{className:w.sectionAction},o.a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){return M(!0)}},R("net")," ",o.a.createElement(S.a,null)," ",R("gross")),o.a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){return M(!1)}},R("gross")," ",o.a.createElement(S.a,null)," ",R("net"))),o.a.createElement(s.a,{component:"h3",variant:"h6"},R("explain")),o.a.createElement(p.a,{className:w.sectionAction},o.a.createElement(y.a,null,o.a.createElement(b.a,null,o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("grossSalary")),o.a.createElement(d.a,null,V(O.grossSalary))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("socialInsurance")," (",P,"%)"),o.a.createElement(d.a,null,V(O.socialInsurance))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("healthInsurance")," (",j,"%)"),o.a.createElement(d.a,null,V(O.healthInsurance))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("unemploymentInsurance")," (",A,"%)"),o.a.createElement(d.a,null,V(O.unemploymentInsurance))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("incomeBeforeTax")),o.a.createElement(d.a,null,V(O.incomeBeforeTax))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("reductionForPersonal")),o.a.createElement(d.a,null,V(O.reductionForPersonal))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("reductionForDependant")),o.a.createElement(d.a,null,V(O.reductionForDependant))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("taxableIncome")),o.a.createElement(d.a,null,V(O.taxableIncome))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("personalIncomeTax")),o.a.createElement(d.a,null,V(O.personalIncomeTax))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("netSalary")),o.a.createElement(d.a,null,V(O.netSalary)))))),o.a.createElement(s.a,{component:"h4",variant:"subtitle1"},R("personalIncomeTaxDetails")),o.a.createElement(p.a,{className:w.sectionAction},o.a.createElement(y.a,null,o.a.createElement(v.a,null,o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("theTaxable")),o.a.createElement(d.a,null,R("theTaxRate")),o.a.createElement(d.a,null,R("thePayment")))),o.a.createElement(b.a,null,U.map(function(e,a){return 0===a?o.a.createElement(f.a,{key:a},o.a.createElement(d.a,null,R("toMillion",{to:V(U[0][1])})),o.a.createElement(d.a,null,"".concat(U[0][2],"%")),o.a.createElement(d.a,null,V(O.tax[0]))):a===U.length-1?o.a.createElement(f.a,{key:a},o.a.createElement(d.a,null,R("upperMillion",{from:V(U[6][0])})),o.a.createElement(d.a,null,"".concat(U[6][2],"%")),o.a.createElement(d.a,null,V(O.tax[6]))):o.a.createElement(f.a,{key:a},o.a.createElement(d.a,null,R("upperToMillion",{from:V(e[0]),to:V(e[1])})),o.a.createElement(d.a,null,"".concat(e[2],"%")),o.a.createElement(d.a,null,V(O.tax[a])))})))),o.a.createElement(s.a,{component:"h3",variant:"h6"},R("employerPay")),o.a.createElement(p.a,{className:w.sectionAction},o.a.createElement(y.a,null,o.a.createElement(b.a,null,o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("grossSalary")),o.a.createElement(d.a,null,V(O.grossSalary))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("socialInsurance")," (",k,"%)"),o.a.createElement(d.a,null,V(O.employerSocialIncurance))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("healthInsurance")," (",B,"%)"),o.a.createElement(d.a,null,V(O.employerHelthIncurance))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("unemploymentInsurance")," (",D,"%)"),o.a.createElement(d.a,null,V(O.employerUnemploymentInsurance))),o.a.createElement(f.a,null,o.a.createElement(d.a,null,R("total")),o.a.createElement(d.a,null,V(O.employerPayTotal)))))))}}}]);