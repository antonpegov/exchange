(this.webpackJsonpcool_currency_exchange=this.webpackJsonpcool_currency_exchange||[]).push([[0],{12:function(e,t,n){"use strict";var a=n(120);n.d(t,"Currency",(function(){return a.a}));var c=n(121);n.d(t,"ExchangeMode",(function(){return c.a}));var r=n(122);n.o(r,"Amount")&&n.d(t,"Amount",(function(){return r.Amount}));var o=n(123);n.o(o,"Amount")&&n.d(t,"Amount",(function(){return o.Amount}));var i=n(124);n.o(i,"Amount")&&n.d(t,"Amount",(function(){return i.Amount}));var u=n(125);n.o(u,"Amount")&&n.d(t,"Amount",(function(){return u.Amount}));var b=n(126);n.d(t,"Amount",(function(){return b.a}))},120:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.USD="USD",e.EUR="EUR",e.PLN="PLN",e.GBP="GBP"}(a||(a={}))},121:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.SELL="Sell",e.BUY="Buy"}(a||(a={}))},122:function(e,t){},123:function(e,t){},124:function(e,t){},125:function(e,t){},126:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.BASE="Base",e.TARGET="Target"}(a||(a={}))},194:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var a,c,r,o,i,u,b,s,l,d,j,O,f,h,g,x,p,m,A=n(0),y=n(10),v=n.n(y),C=n(242),E=n(152),B=n(18),S=n(19),w=n(21),T=n(70),L=n(104),M=n(59),k=n(232),I=n(243),R=n(246),U=n(235),P=n(233),_=n(234),G=n(230),N=Object(S.a)(G.a)(a||(a=Object(B.a)(["\n  box-shadow: 0px 2px 4px 2px lightblue !important;\n  margin: auto;\n  max-width: 400px;\n  min-width: 300px;\n  padding: 20px;\n"]))),D=n(151),z="#020941",$="#2699fb",F="#84c6ff",Y="white",J=F,W=Object(D.a)({palette:{action:{disabled:"set color of text here"},primary:{main:z}},overrides:{MuiButton:{root:{fontSize:"1rem",fontFamily:'"Exo 2", "Roboto", "Helvetica", "Arial", sans-serif',margin:"5px"},outlinedPrimary:{backgroundColor:z,border:"solid 2px ".concat($),color:Y,"&:hover":{backgroundColor:z,border:"solid 2px ".concat(F)}},containedPrimary:{backgroundColor:$,color:Y,"&:hover":{backgroundColor:F}}},MuiTextField:{root:{display:"flex",marginBottom:"10px"}},MuiFab:{root:{backgroundColor:"aliceblue",color:"lightcoral",height:"40px",position:"absolute",width:"40px",zIndex:100}},MuiInput:{colorSecondary:{color:Y},underline:{borderBottomColor:J,"&:not($disabled):after":{borderBottomColor:J},"&:hover:not($disabled):after":{borderBottomColor:J},"&:not($disabled):before":{borderBottomColor:J},"&:hover:not($disabled):before":{borderBottomColor:J}}}}}),X=S.a.h2(c||(c=Object(B.a)(["\n  color: ",";\n  font-size: 1.8em;\n  margin: 0;\n  padding-bottom: 10px;\n  text-align: center;\n"])),$),H=n(231),V=Object(S.a)(H.a)(r||(r=Object(B.a)(["\n    height: 100vh;\n    padding-top: 10vh;\n"]))),q=S.a.div(o||(o=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin: 35px 0 5px;\n"]))),K=n(35),Q=function(e){return e.wallet},Z=Object(K.a)(Q,(function(e){return e.balances})),ee=Object(K.a)(Q,(function(e){return e.currencies})),te=function(e){return e.exchange},ne=Object(K.a)(te,(function(e){return e.mode})),ae=Object(K.a)(te,(function(e){return e.baseAmount})),ce=Object(K.a)(te,(function(e){return e.baseCurrency})),re=Object(K.a)(te,(function(e){return e.targetAmount})),oe=Object(K.a)(te,(function(e){return e.targetCurrency})),ie=Object(K.a)(te,(function(e){return e.rates[e.targetCurrency]})),ue=Object(K.a)(te,(function(e){return e.error})),be=Object(K.a)(te,(function(e){return e.errorText})),se=Object(K.a)(te,(function(e){return e.targets})),le=n(12),de=n(17),je={init:Object(de.createAction)("@exchange/init")(),rates:Object(de.createAction)("@exchange/rates")(),changeMode:Object(de.createAction)("@exchange/changeMode")(),changeBaseCurrency:Object(de.createAction)("@exchange/changeBaseCurrency")(),changeTargetCurrency:Object(de.createAction)("@exchange/changeTargetCurrency")(),return:Object(de.createAction)("@exchange/return")(),makeExchange:Object(de.createAction)("@exchange/makeExchange")(),updateBaseAmount:Object(de.createAction)("@exchange/updateBaseAmount")(),updateTargetAmount:Object(de.createAction)("@exchange/updateTargetAmount")(),updateRates:Object(de.createAction)("@exchange/updateRates")()},Oe={resetBalances:Object(de.createAction)("@wallet/resetBalances")(),runExchange:Object(de.createAction)("@wallet/runExchange")(),updateBalances:Object(de.createAction)("@wallet/updateBalances")()},fe=n(7),he=S.a.form(i||(i=Object(B.a)(["\n  position: relative;\n"]))),ge=S.a.div(u||(u=Object(B.a)(["\n  color: lightcoral;\n  display: flex;\n  font-weight: 600;\n  justify-content: center;\n  margin-top: -10px;\n"]))),xe=S.a.div(b||(b=Object(B.a)(["\n  display: flex;\n"]))),pe=S.a.div(s||(s=Object(B.a)(["\n  color: lightcoral;\n  display: flex;\n  font-size: 12px;\n  justify-content: flex-end;\n  position: relative;\n  right: 0px;\n  top: -8px;\n  width: 100%;\n"]))),me=S.a.div(l||(l=Object(B.a)([" \n  color: red;\n  display: ",";\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n  position: absolute;\n  width: 100%;\n"])),(function(e){return e.visible?"flex":"none"})),Ae=Object(S.a)(k.a)(d||(d=Object(B.a)(["\n  top: 127px;\n  left: 175px;\n"]))),ye=Object(S.a)(I.a)(j||(j=Object(B.a)(["\n  justify-content: flex-end;\n  overflow: hidden;\n  width: 25px;\n\n"]))),ve=function(){var e=Object(w.d)(),t=Object(w.e)(Z),n=Object(w.e)(ae),a=Object(w.e)(ce),c=Object(w.e)(ee),r=Object(w.e)(be),o=Object(w.e)(ue),i=Object(w.e)(ne),u=Object(w.e)(ie),b=Object(w.e)(se),s=Object(w.e)(re),l=Object(w.e)(oe),d=Object(A.useState)(""),j=Object(M.a)(d,2),O=j[0],f=j[1];Object(A.useEffect)((function(){var e=i===le.ExchangeMode.SELL?"for":"with";f("".concat(i," ").concat(a," ").concat(e," ").concat(l))}),[i,a,l]);return Object(fe.jsxs)(he,{"data-testid":"Exchange",autoComplete:"off",children:[Object(fe.jsxs)(X,{"data-testid":"Title",children:[" ",i," ",a]}),Object(fe.jsxs)(ge,{"data-testid":"Rate",children:[" 1 ",a," = ",u," ",l]}),Object(fe.jsxs)(xe,{children:[Object(fe.jsx)(I.a,{"data-testid":"baseAmount",id:"baseAmount",label:a,style:{flexGrow:1},value:n,onChange:function(n){n.target.value&&!/^\d+(\.([0-9]([0-9])?)?)?$/.test(n.target.value)||e(je.updateBaseAmount({value:n.target.value,baseBalance:t[a],targetBalance:t[l]}))}}),Object(fe.jsx)(ye,{id:"standard-select-currency",select:!0,value:"",onChange:function(t){e(je.changeBaseCurrency({selected:t.target.value,currencies:c}))},children:b.filter((function(e){return e!==a})).map((function(e,t){return Object(fe.jsx)(R.a,{value:e,children:e},t)}))})]}),Object(fe.jsxs)(pe,{children:["Balance: ",t[a]," ",a]}),Object(fe.jsx)(Ae,{onClick:function(){return e(je.changeMode())},children:i===le.ExchangeMode.SELL?Object(fe.jsx)(P.a,{}):Object(fe.jsx)(_.a,{})}),Object(fe.jsxs)(xe,{children:[Object(fe.jsx)(I.a,{"data-testid":"targetAmount",id:"targetAmount",label:l,value:s,style:{flexGrow:1,marginTop:"15px"},onChange:function(n){n.target.value&&!/^\d+(\.([0-9]([0-9])?)?)?$/.test(n.target.value)||e(je.updateTargetAmount({value:n.target.value,baseBalance:t[a],targetBalance:t[l]}))}}),Object(fe.jsx)(ye,{id:"standard-select-currency",select:!0,value:"",onChange:function(t){e(je.changeTargetCurrency({selected:t.target.value,currencies:c}))},children:b.filter((function(e){return e!==l})).map((function(e,t){return Object(fe.jsx)(R.a,{value:e,children:e},t)}))})]}),Object(fe.jsxs)(pe,{children:["Balance: ",t[l]," ",l]}),Object(fe.jsx)(me,{visible:o,children:r}),Object(fe.jsxs)(q,{children:[Object(fe.jsx)(U.a,{color:"primary","data-testid":"ReturnButton",onClick:function(){return e(je.return())},variant:"contained",children:"Return"}),Object(fe.jsx)(U.a,{color:"primary","data-testid":"SubmitButton",disabled:o,onClick:function(){return e(je.makeExchange())},style:{flexGrow:1},variant:"contained",children:O})]})]})},Ce=n(237),Ee=n(236),Be=Object(S.a)(Ee.a)(O||(O=Object(B.a)(["\n  color: lightcoral !important;\n  position: relative;\n  top: -3px;\n"]))),Se=S.a.div(f||(f=Object(B.a)([" \n  font-size: 20px;\n  margin: 0 10px;\n"]))),we=function(e){var t=e.balance,n=e.currency,a=e.onExchangeClick;return Object(fe.jsxs)(Se,{"data-testid":"WalletRow",children:[Object(fe.jsx)(Be,{"data-testid":"ExchangeButton",onClick:a,children:Object(fe.jsx)(Ce.a,{})}),Object(fe.jsxs)("span",{"data-testid":"Balance",children:[Object(fe.jsx)("b",{"data-testid":"Currency",children:n})," ",t]})]})},Te=S.a.div(h||(h=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: -30px;\n"]))),Le=Object(S.a)(U.a)(g||(g=Object(B.a)(["\n  width: 100%;\n"]))),Me=function(){var e=Object(w.d)(),t=Object(w.e)(Z),n=Object(w.e)(ee);return Object(fe.jsxs)("div",{"data-testid":"Wallet",children:[Object(fe.jsxs)(X,{"data-testid":"Title",children:[" ","Balances"," "]}),Object(fe.jsx)(Te,{"data-testid":"Balances",children:n.map((function(n,a){return Object(fe.jsx)(we,{balance:t[n],currency:n,onExchangeClick:function(){return e(Oe.runExchange(n))}},a)}))}),Object(fe.jsx)(q,{children:Object(fe.jsx)(Le,{"data-testid":"ResetButton",onClick:function(){return e(Oe.resetBalances())},color:"primary",variant:"contained",children:"Reset balances to initial state"})})]})},ke=n(49),Ie=n(138),Re=n(245),Ue=n(241),Pe=n(91),_e=n(14),Ge=function(e,t){var n=t.findIndex((function(t){return t===e}));if(n<0)throw new TypeError("Base currency is not in the list");return 0===n?t[1]:t[0]},Ne=function(e){return Math.round(100*+e)/100},De=function(e,t,n){var a,c,r,o=e.baseAmount,i=e.targetAmount,u=e.baseCurrency,b=e.targetCurrency,s=e.mode,l=e.rates,d=t.baseBalance,j=t.targetBalance,O=t.value,f=null,h="";if(O.match(/^\d+\.$/g))a=!0,c=n===le.Amount.BASE?O:o,r=n===le.Amount.BASE?i:O;else if(""===O)a=!0,c="",r="";else if(f=n,n===le.Amount.BASE)if(s===le.ExchangeMode.SELL)a=+O>d,h="Insufficient ".concat(u," balance"),c=O,r=Ne(+O*l[b]).toString();else{var g=Ne(+O*l[b]);a=g>j,h="Insufficient ".concat(b," balance"),c=O,r=g.toString()}else if(s===le.ExchangeMode.SELL){var x=Ne(+O/l[b]);a=x>d,h="Insufficient ".concat(u," balance"),c=x.toString(),r=O}else a=+O>j,h="Insufficient ".concat(b," balance"),c=Ne(+O/l[b]).toString(),r=O;return{activeInput:f,baseAmount:c,targetAmount:r,error:a,errorText:h}},ze=function(e,t,n,a){return t.forEach((function(t){var c,r;t!==e&&(n[t]=(c=n[t],r=a%2===0?100-+Math.random().toFixed(2):+Math.random().toFixed(2)+100,+(c*r/100).toFixed(5)))})),n},$e={active:!1,activeInput:null,baseAmount:"",baseCurrency:le.Currency.EUR,error:!0,errorText:"",mode:le.ExchangeMode.SELL,rates:{},targetAmount:"",targetCurrency:le.Currency.USD,targets:[]},Fe=Object(de.createReducer)($e).handleAction(je.init,(function(e,t){var n=t.payload;return Object(_e.a)(Object(_e.a)({},e),{},{active:!0,baseCurrency:n.base,targetCurrency:Ge(n.base,n.currencies)||n.currencies[0],targets:n.currencies})})).handleAction(je.return,(function(){return $e})).handleAction(je.rates,(function(e,t){var n=t.payload;return Object(_e.a)(Object(_e.a)({},e),function(e,t){var n,a,c,r=e.baseAmount,o=e.targetAmount,i=e.baseCurrency,u=e.targetCurrency,b=e.mode,s=e.activeInput,l=t.rates,d=t.balances,j="";if(!s)return{rates:l};if(s===le.Amount.BASE)if(b===le.ExchangeMode.SELL)n=+r>d[i],j="Insufficient ".concat(i," balance"),a=r,c=Ne(+r*l[u]).toString();else{var O=Ne(+r*l[u]);n=O>d[u],j="Insufficient ".concat(u," balance"),a=r,c=O.toString()}else if(b===le.ExchangeMode.SELL){var f=Ne(+o/l[u]);n=f>d[i],j="Insufficient ".concat(i," balance"),a=f.toString(),c=o}else n=+o>d[u],j="Insufficient ".concat(u," balance"),a=Ne(+o/l[u]).toString(),c=o;return{baseAmount:a,targetAmount:c,error:n,errorText:j,rates:l}}(e,n))})).handleAction(je.updateBaseAmount,(function(e,t){var n=t.payload;return Object(_e.a)(Object(_e.a)({},e),De(e,n,le.Amount.BASE))})).handleAction(je.updateTargetAmount,(function(e,t){var n=t.payload;return Object(_e.a)(Object(_e.a)({},e),De(e,n,le.Amount.TARGET))})).handleAction(je.changeMode,(function(e){return Object(_e.a)(Object(_e.a)({},e),{},{activeInput:null,baseAmount:"",error:!0,errorText:"",mode:e.mode===le.ExchangeMode.BUY?le.ExchangeMode.SELL:le.ExchangeMode.BUY,targetAmount:""})})).handleAction(je.makeExchange,(function(e){return Object(_e.a)(Object(_e.a)({},e),{},{activeInput:null,error:!0,errorText:""})})).handleAction(je.changeBaseCurrency,(function(e,t){var n=t.payload;return Object(_e.a)(Object(_e.a)({},e),{},{activeInput:null,baseCurrency:n.selected,targetCurrency:n.selected===e.targetCurrency?Ge(n.selected,n.currencies)||n.currencies[0]:e.targetCurrency,targets:n.currencies,baseAmount:"",error:!0,errorText:"",targetAmount:""})})).handleAction(je.changeTargetCurrency,(function(e,t){var n=t.payload;return Object(_e.a)(Object(_e.a)({},e),{},{activeInput:null,baseCurrency:n.selected===e.baseCurrency?Ge(n.selected,n.currencies)||n.currencies[0]:e.baseCurrency,targetCurrency:n.selected,targets:n.currencies,baseAmount:"",error:!0,errorText:"",targetAmount:""})})).handleAction(Oe.updateBalances,(function(e){return Object(_e.a)(Object(_e.a)({},e),{},{baseAmount:"",targetAmount:""})})),Ye=n(47),Je=(x={},Object(Ye.a)(x,le.Currency.USD,100),Object(Ye.a)(x,le.Currency.EUR,200),Object(Ye.a)(x,le.Currency.GBP,300),Object(Ye.a)(x,le.Currency.PLN,400),x),We={balances:Je,currencies:[le.Currency.USD,le.Currency.EUR,le.Currency.GBP,le.Currency.PLN]},Xe=Object(de.createReducer)(We).handleAction(Oe.resetBalances,(function(e){return Object(_e.a)(Object(_e.a)({},e),{},{balances:Object(_e.a)({},Je)})})).handleAction(Oe.updateBalances,(function(e,t){var n=t.payload;return Object(_e.a)(Object(_e.a)({},e),{},{balances:n})})),He=n(26),Ve=n(136),qe=n(109),Ke=n(238),Qe=n(32),Ze=n(239),et=n(240),tt=(n(69),n(147)),nt=n.n(tt),at=null,ct=function(e){var t={params:{symbols:"USD,PLN,GBP,EUR",base:e},headers:{}};return(at||(at=nt.a.create({})),at).get("https://data.fixer.io/api/latest?access_key=4e8faff8b19cdd9877d40145e04b7148",t).pipe(Object(Qe.a)((function(e){return e.data})),Object(Qe.a)((function(e){return{base:e.base,rates:e.rates}})))},rt=Object(Ue.a)((function(e,t){return e.pipe(Object(qe.a)(Object(de.isActionOf)(Oe.runExchange)),Object(Ke.a)(t.pipe(Object(Qe.a)((function(e){return ee(e)})))),Object(Qe.a)((function(e){var t=Object(M.a)(e,2),n=t[0].payload,a=t[1];return je.init({base:n,currencies:a})})))}),(function(e){return e.pipe(Object(qe.a)(Object(de.isActionOf)(je.return)),Object(et.a)(Object(He.d)("/balances")))}),(function(e,t){return e.pipe(Object(qe.a)(Object(de.isActionOf)(je.init)),Object(Ze.a)((function(){return Object(Ve.a)(0,5e3).pipe(Object(Ke.a)(t.pipe(Object(Qe.a)((function(e){return ce(e)}))),t.pipe(Object(Qe.a)((function(e){return ee(e)}))),t.pipe(Object(Qe.a)((function(e){return Z(e)}))),t.pipe(Object(Qe.a)((function(e){return e.exchange.active})))),Object(qe.a)((function(e){return Object(M.a)(e,5)[4]})),Object(Ze.a)((function(e){var t=Object(M.a)(e,4),n=t[0],a=t[1],c=t[2],r=t[3];return ct(a).pipe(Object(Qe.a)((function(e){return je.rates(Object(_e.a)(Object(_e.a)({},e),{},{rates:ze(a,c,e.rates,n),balances:r}))})))})))})))})),ot=Object(Ue.a)((function(e){return e.pipe(Object(qe.a)(Object(de.isActionOf)(Oe.runExchange)),Object(et.a)(Object(He.d)("/currency")))}),(function(e,t){return e.pipe(Object(qe.a)(Object(de.isActionOf)(je.makeExchange)),Object(Ke.a)(t.pipe(Object(Qe.a)((function(e){return e.wallet}))),t.pipe(Object(Qe.a)((function(e){return e.exchange})))),Object(Qe.a)((function(e){var t,n,a,c=Object(M.a)(e,3),r=c[1].balances,o=c[2];return o.mode===le.ExchangeMode.BUY?(n=Ne(r[o.baseCurrency]+ +o.baseAmount),a=Ne(r[o.targetCurrency]-+o.targetAmount)):(n=Ne(r[o.baseCurrency]-+o.baseAmount),a=Ne(r[o.targetCurrency]+ +o.targetAmount)),Oe.updateBalances(Object(_e.a)(Object(_e.a)({},r),{},(t={},Object(Ye.a)(t,o.baseCurrency,n),Object(Ye.a)(t,o.targetCurrency,a),t)))})))})),it=Object(Re.a)(),ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Pe.c,bt=Object(ke.a)(),st=Object(Ue.a)(rt,ot),lt=Object(Pe.d)((p=bt,Object(Pe.b)({router:Object(T.b)(p),wallet:Xe,exchange:Fe})),ut(Object(Pe.a)(it,Object(Ie.a)(bt))));it.run(st);var dt=Object(S.a)((function(e){var t=e.className;return Object(fe.jsx)("div",{className:t,children:Object(fe.jsx)(w.a,{store:lt,children:Object(fe.jsx)(V,{children:Object(fe.jsx)(N,{children:Object(fe.jsx)(T.a,{history:bt,children:Object(fe.jsx)(L.c,{history:bt,children:Object(fe.jsxs)(L.d,{children:[Object(fe.jsx)(L.b,{exact:!0,path:"/balances",component:Me}),Object(fe.jsx)(L.b,{exact:!0,path:"/currency",component:ve}),Object(fe.jsx)(L.b,{children:Object(fe.jsx)(L.a,{to:"/balances"})})]})})})})})})})}))(m||(m=Object(B.a)(["\n  background-color: aliceblue;\n  height: 100vh;\n"])));n(194);v.a.render(Object(fe.jsx)(C.a,{theme:W,children:Object(fe.jsx)(E.a,{maxSnack:5,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:Object(fe.jsx)(dt,{})})}),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.02523a65.chunk.js.map