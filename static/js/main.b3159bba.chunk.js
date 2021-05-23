(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{119:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.USD="USD",e.EUR="EUR",e.PLN="PLN",e.GBP="GBP"}(a||(a={}))},120:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.SELL="Sell",e.BUY="Buy"}(a||(a={}))},121:function(e,t){},122:function(e,t){},16:function(e,t,n){"use strict";var a=n(119);n.d(t,"Currency",(function(){return a.a}));var c=n(120);n.d(t,"ExchangeMode",(function(){return c.a}));n(121),n(122)},189:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var a,c,r,o,i,u,b,s,l,d,j,O,h,x,f,g,p,m=n(0),y=n(10),v=n.n(y),C=n(237),A=n(147),B=n(19),E=n(20),w=n(21),S=n(68),k=n(103),M=n(75),L=n(227),U=n(238),R=n(241),T=n(230),P=n(228),D=n(229),N=n(225),G=Object(E.a)(N.a)(a||(a=Object(B.a)(["\n  box-shadow: 0px 2px 4px 2px lightblue !important;\n  margin: auto;\n  max-width: 400px;\n  min-width: 300px;\n  padding: 20px;\n"]))),_=n(146),z="#020941",$="#2699fb",I="#84c6ff",Y="white",F=I,W=Object(_.a)({palette:{action:{disabled:"set color of text here"},primary:{main:z}},overrides:{MuiButton:{root:{fontSize:"1rem",fontFamily:'"Exo 2", "Roboto", "Helvetica", "Arial", sans-serif',margin:"5px"},outlinedPrimary:{backgroundColor:z,border:"solid 2px ".concat($),color:Y,"&:hover":{backgroundColor:z,border:"solid 2px ".concat(I)}},containedPrimary:{backgroundColor:$,color:Y,"&:hover":{backgroundColor:I}}},MuiTextField:{root:{display:"flex",marginBottom:"10px"}},MuiDialog:{root:{minWidth:"350px"}},MuiFab:{root:{backgroundColor:"aliceblue",color:"lightcoral",height:"40px",position:"absolute",width:"40px",zIndex:100}},MuiInput:{colorSecondary:{color:Y},underline:{borderBottomColor:F,"&:not($disabled):after":{borderBottomColor:F},"&:hover:not($disabled):after":{borderBottomColor:F},"&:not($disabled):before":{borderBottomColor:F},"&:hover:not($disabled):before":{borderBottomColor:F}}}}}),J=E.a.h2(c||(c=Object(B.a)(["\n  color: ",";\n  font-size: 1.8em;\n  margin: 0;\n  padding-bottom: 10px;\n  text-align: center;\n"])),$),X=n(226),H=Object(E.a)(X.a)(r||(r=Object(B.a)(["\n    height: 100vh;\n    padding-top: 10vh;\n"]))),V=E.a.div(o||(o=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin: 35px 0 5px;\n"]))),q=n(35),K=function(e){return e.wallet},Q=Object(q.a)(K,(function(e){return e.balances})),Z=Object(q.a)(K,(function(e){return e.currencies})),ee=function(e){return e.exchange},te=Object(q.a)(ee,(function(e){return e.mode})),ne=Object(q.a)(ee,(function(e){return e.baseAmount})),ae=Object(q.a)(ee,(function(e){return e.baseCurrency})),ce=Object(q.a)(ee,(function(e){return e.targetAmount})),re=Object(q.a)(ee,(function(e){return e.targetCurrency})),oe=Object(q.a)(ee,(function(e){return e.rates[e.targetCurrency]})),ie=Object(q.a)(ee,(function(e){return e.error})),ue=Object(q.a)(ee,(function(e){return e.errorText})),be=Object(q.a)(ee,(function(e){return e.targets})),se=n(16),le=n(15),de={init:Object(le.createAction)("@exchange/init")(),rates:Object(le.createAction)("@exchange/rates")(),changeMode:Object(le.createAction)("@exchange/changeMode")(),changeBaseCurrency:Object(le.createAction)("@exchange/changeBaseCurrency")(),changeTargetCurrency:Object(le.createAction)("@exchange/changeBaseCurrency")(),return:Object(le.createAction)("@exchange/return")(),makeExchange:Object(le.createAction)("@exchange/makeExchange")(),updateBaseAmount:Object(le.createAction)("@exchange/updateBaseAmount")(),updateTargetAmount:Object(le.createAction)("@exchange/updateTargetAmount")()},je=n(7),Oe=E.a.form(i||(i=Object(B.a)(["\n  position: relative;\n"]))),he=E.a.div(u||(u=Object(B.a)(["\n  color: lightcoral;\n  display: flex;\n  font-weight: 600;\n  justify-content: center;\n"]))),xe=E.a.div(b||(b=Object(B.a)(["\n  display: flex;\n"]))),fe=E.a.div(s||(s=Object(B.a)(["\n  color: lightcoral;\n  display: flex;\n  font-size: 12px;\n  justify-content: flex-end;\n  position: relative;\n  right: 0px;\n  top: -8px;\n  width: 100%;\n"]))),ge=E.a.div(l||(l=Object(B.a)([" \n  color: red;\n  display: ",";\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n  position: absolute;\n  width: 100%;\n"])),(function(e){return e.visible?"flex":"none"})),pe=Object(E.a)(L.a)(d||(d=Object(B.a)(["\n  top: 137px;\n  left: 175px;\n"]))),me=function(){var e=Object(w.d)(),t=Object(w.e)(Q),n=Object(w.e)(ne),a=Object(w.e)(ae),c=Object(w.e)(ue),r=Object(w.e)(ie),o=Object(w.e)(te),i=Object(w.e)(oe),u=Object(w.e)(be),b=Object(w.e)(ce),s=Object(w.e)(re),l=Object(m.useState)(""),d=Object(M.a)(l,2),j=d[0],O=d[1];Object(m.useEffect)((function(){var e=o===se.ExchangeMode.SELL?"for":"with";O("".concat(o," ").concat(a," ").concat(e," ").concat(s))}),[o,a,s]);return Object(je.jsxs)(Oe,{"data-testid":"Exchange",autoComplete:"off",children:[Object(je.jsxs)(J,{"data-testid":"Title",children:[" ",o," ",a]}),Object(je.jsxs)(he,{"data-testid":"Rate",children:[" 1 ",a," = ",i," ",s]}),Object(je.jsxs)(xe,{children:[Object(je.jsx)(U.a,{"data-testid":"baseAmount",id:"baseAmount",label:a,style:{flexGrow:1},value:n,onChange:function(n){n.target.value&&!/^\d+(\.([0-9]([0-9])?)?)?$/.test(n.target.value)||e(de.updateBaseAmount({value:n.target.value,baseBalance:t[a],targetBalance:t[s]}))}}),Object(je.jsx)(U.a,{id:"standard-select-currency",select:!0,style:{width:"25px",justifyContent:"flex-end"},value:"",onChange:function(t){e(de.changeBaseCurrency(t.target.value))},children:u.map((function(e,t){return Object(je.jsx)(R.a,{value:e,children:e},t)}))})]}),Object(je.jsxs)(fe,{children:["Balance: ",t[a]," ",a]}),Object(je.jsx)(pe,{onClick:function(){return e(de.changeMode())},children:o===se.ExchangeMode.SELL?Object(je.jsx)(P.a,{}):Object(je.jsx)(D.a,{})}),Object(je.jsxs)(xe,{children:[Object(je.jsx)(U.a,{"data-testid":"targetAmount",id:"targetAmount",label:s,value:b,style:{flexGrow:1,marginTop:"15px"},onChange:function(n){n.target.value&&!/^\d+(\.([0-9]([0-9])?)?)?$/.test(n.target.value)||e(de.updateTargetAmount({value:n.target.value,baseBalance:t[a],targetBalance:t[s]}))}}),Object(je.jsx)(U.a,{id:"standard-select-currency",select:!0,style:{width:"25px",justifyContent:"flex-end"},value:"",onChange:function(t){e(de.changeTargetCurrency(t.target.value))},children:u.filter((function(e){return e!==s})).map((function(e,t){return Object(je.jsx)(R.a,{value:e,children:e},t)}))})]}),Object(je.jsxs)(fe,{children:["Balance: ",t[s]," ",s]}),Object(je.jsx)(ge,{visible:r,children:c}),Object(je.jsxs)(V,{children:[Object(je.jsx)(T.a,{color:"primary","data-testid":"ReturnButton",onClick:function(){return e(de.return())},variant:"contained",children:"Return"}),Object(je.jsx)(T.a,{color:"primary","data-testid":"SubmitButton",disabled:r,onClick:function(){return e(de.makeExchange())},style:{flexGrow:1},variant:"contained",children:j})]})]})},ye={resetBalances:Object(le.createAction)("@wallet/resetBalances")(),runExchange:Object(le.createAction)("@wallet/runExchange")(),updateBalances:Object(le.createAction)("@wallet/updateBalances")()},ve=n(232),Ce=n(231),Ae=Object(E.a)(Ce.a)(j||(j=Object(B.a)(["\n  color: lightcoral !important;\n  position: relative;\n  top: -3px;\n"]))),Be=E.a.div(O||(O=Object(B.a)([" \n  font-size: 20px;\n  margin: 0 10px;\n"]))),Ee=function(e){var t=e.balance,n=e.currency,a=e.onExchangeClick;return Object(je.jsxs)(Be,{"data-testid":"WalletRow",children:[Object(je.jsx)(Ae,{"data-testid":"ExchangeButton",onClick:a,children:Object(je.jsx)(ve.a,{})}),Object(je.jsxs)("span",{"data-testid":"Balance",children:[Object(je.jsx)("b",{"data-testid":"Currency",children:n})," ",t]})]})},we=E.a.div(h||(h=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: -30px;\n"]))),Se=Object(E.a)(T.a)(x||(x=Object(B.a)(["\n  width: 100%;\n"]))),ke=function(){var e=Object(w.d)(),t=Object(w.e)(Q),n=Object(w.e)(Z);return Object(je.jsxs)("div",{"data-testid":"Wallet",children:[Object(je.jsxs)(J,{"data-testid":"Title",children:[" ","Balances"," "]}),Object(je.jsx)(we,{"data-testid":"Balances",children:n.map((function(n,a){return Object(je.jsx)(Ee,{balance:t[n],currency:n,onExchangeClick:function(){return e(ye.runExchange(n))}},a)}))}),Object(je.jsx)(V,{children:Object(je.jsx)(Se,{"data-testid":"ResetButton",onClick:function(){return e(ye.resetBalances())},color:"primary",variant:"contained",children:"Reset balances to initial state"})})]})},Me=n(49),Le=n(133),Ue=n(240),Re=n(236),Te=n(90),Pe=n(17),De=function(e,t){var n=t.findIndex((function(t){return t===e}));if(n<0)throw new TypeError("Base currency is not in the list");return 0===n?t[1]:t[0]},Ne=function(e){return Math.round(100*+e)/100},Ge=function(e,t,n){var a,c,r,o=e.baseAmount,i=e.targetAmount,u=e.targetCurrency,b=e.mode,s=e.rates,l=t.baseBalance,d=t.targetBalance,j=t.value,O="Insufficient balance";if(j.match(/^\d+\.$/g))a=!0,O="",c=n?j:o,r=n?i:j;else if(""===j)a=!0,O="",c="",r="";else if(n)if(b===se.ExchangeMode.SELL)a=+j>l,c=j,r=Ne(+j*s[u]).toString();else{var h=Ne(+j*s[u]);a=h>d,c=j,r=h.toString()}else if(b===se.ExchangeMode.SELL){var x=Ne(+j/s[u]);a=x>l,c=x.toString(),r=j}else a=+j>d,c=Ne(+j/s[u]).toString(),r=j;return{baseAmount:c,targetAmount:r,error:a,errorText:O}},_e={active:!1,baseAmount:"",baseCurrency:se.Currency.EUR,error:!0,errorText:"",mode:se.ExchangeMode.SELL,rates:{},targetAmount:"",targetCurrency:se.Currency.USD,targets:[]},ze=Object(le.createReducer)(_e).handleAction(de.init,(function(e,t){var n=t.payload;return Object(Pe.a)(Object(Pe.a)({},e),{},{active:!0,baseCurrency:n.base,targetCurrency:De(n.base,n.currencies)||n.base,targets:n.currencies.filter((function(e){return e!==n.base}))})})).handleAction(de.return,(function(){return _e})).handleAction(de.rates,(function(e,t){var n=t.payload;return Object(Pe.a)(Object(Pe.a)({},e),{},{rates:n.rates,baseCurrency:n.base})})).handleAction(de.updateBaseAmount,(function(e,t){var n=t.payload;return Object(Pe.a)(Object(Pe.a)({},e),Ge(e,n,!0))})).handleAction(de.updateTargetAmount,(function(e,t){var n=t.payload;return Object(Pe.a)(Object(Pe.a)({},e),Ge(e,n,!1))})).handleAction(ye.updateBalances,(function(e){return Object(Pe.a)(Object(Pe.a)({},e),{},{baseAmount:"",targetAmount:""})})).handleAction(de.changeMode,(function(e){return Object(Pe.a)(Object(Pe.a)({},e),{},{mode:e.mode===se.ExchangeMode.BUY?se.ExchangeMode.SELL:se.ExchangeMode.BUY,baseAmount:"",targetAmount:"",error:!0})})).handleAction(de.makeExchange,(function(e){return Object(Pe.a)(Object(Pe.a)({},e),{},{error:!0})})),$e=n(47),Ie=(f={},Object($e.a)(f,se.Currency.USD,100),Object($e.a)(f,se.Currency.EUR,200),Object($e.a)(f,se.Currency.GBP,300),Object($e.a)(f,se.Currency.PLN,400),f),Ye={balances:Ie,currencies:[se.Currency.USD,se.Currency.EUR,se.Currency.GBP,se.Currency.PLN]},Fe=Object(le.createReducer)(Ye).handleAction(ye.resetBalances,(function(e){return Object(Pe.a)(Object(Pe.a)({},e),{},{balances:Object(Pe.a)({},Ie)})})).handleAction(ye.updateBalances,(function(e,t){var n=t.payload;return Object(Pe.a)(Object(Pe.a)({},e),{},{balances:n})})),We=n(26),Je=n(108),Xe=n(233),He=n(32),Ve=n(234),qe=n(235),Ke=(n(67),n(142)),Qe=n.n(Ke),Ze=null,et=function(e){var t={params:{symbols:"USD,PLN,GBP,EUR",base:e},headers:{}};return(Ze||(Ze=Qe.a.create({})),Ze).get("http://data.fixer.io/api/latest?access_key=4e8faff8b19cdd9877d40145e04b7148",t).pipe(Object(He.a)((function(e){return e.data})),Object(He.a)((function(e){return{base:e.base,rates:e.rates}})))},tt=Object(Re.a)((function(e,t){return e.pipe(Object(Je.a)(Object(le.isActionOf)(ye.runExchange)),Object(Xe.a)(t.pipe(Object(He.a)((function(e){return Z(e)})))),Object(He.a)((function(e){var t=Object(M.a)(e,2),n=t[0].payload,a=t[1];return de.init({base:n,currencies:a})})))}),(function(e){return e.pipe(Object(Je.a)(Object(le.isActionOf)(de.return)),Object(qe.a)(Object(We.d)("/balances")))}),(function(e){return e.pipe(Object(Je.a)(Object(le.isActionOf)(ye.runExchange)),Object(Ve.a)((function(e){var t=e.payload;return et(t).pipe(Object(He.a)((function(e){return de.rates(e)})))})))})),nt=Object(Re.a)((function(e){return e.pipe(Object(Je.a)(Object(le.isActionOf)(ye.runExchange)),Object(qe.a)(Object(We.d)("/currency")))}),(function(e,t){return e.pipe(Object(Je.a)(Object(le.isActionOf)(de.makeExchange)),Object(Xe.a)(t.pipe(Object(He.a)((function(e){return e.wallet}))),t.pipe(Object(He.a)((function(e){return e.exchange})))),Object(He.a)((function(e){var t,n,a,c=Object(M.a)(e,3),r=c[1].balances,o=c[2];return o.mode===se.ExchangeMode.BUY?(n=Ne(r[o.baseCurrency]+ +o.baseAmount),a=Ne(r[o.targetCurrency]-+o.targetAmount)):(n=Ne(r[o.baseCurrency]-+o.baseAmount),a=Ne(r[o.targetCurrency]+ +o.targetAmount)),ye.updateBalances(Object(Pe.a)(Object(Pe.a)({},r),{},(t={},Object($e.a)(t,o.baseCurrency,n),Object($e.a)(t,o.targetCurrency,a),t)))})))})),at=Object(Ue.a)(),ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Te.c,rt=Object(Me.a)(),ot=Object(Re.a)(tt,nt),it=Object(Te.d)((g=rt,Object(Te.b)({router:Object(S.b)(g),wallet:Fe,exchange:ze})),ct(Object(Te.a)(at,Object(Le.a)(rt))));at.run(ot);var ut=Object(E.a)((function(e){var t=e.className;return Object(je.jsx)("div",{className:t,children:Object(je.jsx)(w.a,{store:it,children:Object(je.jsx)(H,{children:Object(je.jsx)(G,{children:Object(je.jsx)(S.a,{history:rt,children:Object(je.jsx)(k.c,{history:rt,children:Object(je.jsxs)(k.d,{children:[Object(je.jsx)(k.b,{exact:!0,path:"/balances",component:ke}),Object(je.jsx)(k.b,{exact:!0,path:"/currency",component:me}),Object(je.jsx)(k.b,{children:Object(je.jsx)(k.a,{to:"/balances"})})]})})})})})})})}))(p||(p=Object(B.a)(["\n  background-color: aliceblue;\n  height: 100vh;\n"])));n(189);v.a.render(Object(je.jsx)(C.a,{theme:W,children:Object(je.jsx)(A.a,{maxSnack:5,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:Object(je.jsx)(ut,{})})}),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.b3159bba.chunk.js.map