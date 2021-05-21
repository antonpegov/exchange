(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{117:function(t,e,n){},118:function(t,e,n){"use strict";n.r(e);var c,a,i=n(0),r=n.n(i),o=n(9),j=n.n(o),s=n(30),b=n(61),O=n(60),l=n(28),u=n(143),d=n(145),h=n(47),x=n(20),p=n(19),f={init:Object(p.createAction)("@exchange/init")(),rates:Object(p.createAction)("@exchange/rates")()},g=Object(p.createReducer)({rates:[]}).handleAction(f.rates,(function(t,e){var n=e.payload;return Object(x.a)(Object(x.a)({},t),{},{rates:n})})),v=n(37),m={resetBalances:Object(p.createAction)("@wallet/resetBalances")(),runExchange:Object(p.createAction)("@wallet/runExchange")()};!function(t){t.USD="USD",t.EUR="EUR",t.PLN="PLN",t.GBP="GBP"}(c||(c={}));var B,E,w=(a={},Object(v.a)(a,c.USD,100),Object(v.a)(a,c.EUR,200),Object(v.a)(a,c.GBP,300),Object(v.a)(a,c.PLN,400),a),y={balances:w,currencies:[c.USD,c.EUR,c.GBP,c.PLN]},S=Object(p.createReducer)(y).handleAction(m.resetBalances,(function(t){return Object(x.a)(Object(x.a)({},t),{},{balances:w})})),U=n(137),A=n(146),R=n(138),k=n(5),P={success:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.toast(t,Object(x.a)(Object(x.a)({},e),{},{variant:"success"}))},warning:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.toast(t,Object(x.a)(Object(x.a)({},e),{},{variant:"warning"}))},info:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.toast(t,Object(x.a)(Object(x.a)({},e),{},{variant:"info"}))},error:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.toast(t,Object(x.a)(Object(x.a)({},e),{},{variant:"error"}))},toast:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};B.enqueueSnackbar(t,e)}},N=Object(d.a)((function(t){return t.pipe(Object(U.a)(Object(p.isActionOf)([f.init])),Object(A.a)((function(){return P.info("starting rates updating")})),Object(R.a)())}),(function(t){return t.pipe(Object(U.a)(Object(p.isActionOf)([f.init])),Object(A.a)((function(){return P.info("stoping rates updating")})),Object(R.a)())})),L=Object(d.a)((function(t){return t.pipe(Object(U.a)(Object(p.isActionOf)(m.resetBalances)),Object(R.a)())})),_=Object(u.a)(),C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.c,D=Object(l.a)(),G=Object(d.a)(N,L),T=Object(h.d)((E=D,Object(h.b)({router:Object(b.b)(E),wallet:S,exchange:g})),C(Object(h.a)(_)));_.run(G);var z,I,J,M,W,X=n(14),Y=n(15),q=n(59),V=n(139),F=Object(Y.a)(V.a)(z||(z=Object(X.a)(["\n  box-shadow: 0px 2px 4px 2px lightblue !important;\n  margin: auto;\n  max-width: 400px;\n  min-width: 200px;\n  padding: 20px;\n"]))),H=Y.a.h2(I||(I=Object(X.a)(["\n  color: lightcoral;\n  margin: 0;\n  padding-bottom: 10px;\n  text-align: center;\n"]))),K=n(140),Q=Object(Y.a)(K.a)(J||(J=Object(X.a)(["\n    height: 100vh;\n    padding-top: 10vh;\n"]))),Z=Y.a.div(M||(M=Object(X.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n"])));!function(t){t.SELL="Sell",t.BUY="Buy"}(W||(W={}));var $,tt,et,nt,ct,at=function(t){return function(){for(var e=arguments.length,n=new Array(e),c=0;c<e;c++)n[c]=arguments[c];return n.reduce((function(t,e){return"".concat(t,"-").concat(e)}),t)}},it=at("Exchange"),rt=function(){return Object(k.jsx)("div",{"data-testid":it(),children:Object(k.jsxs)(H,{children:[" ",W.BUY," "]})})},ot=n(142),jt=n(72),st=function(t){return t.wallet},bt=Object(jt.a)(st,(function(t){return t.balances})),Ot=Object(jt.a)(st,(function(t){return t.currencies})),lt=n(88),ut=n.n(lt),dt=n(141),ht=Object(Y.a)(dt.a)($||($=Object(X.a)(["\n  color: lightcoral !important;\n  position: relative;\n  top: -3px;\n"]))),xt=Y.a.div(tt||(tt=Object(X.a)([" \n  font-size: 20px;\n  margin: 0 20px;\n"]))),pt=function(t){var e=t.balance,n=t.currency,c=t.onExchangeClick;return Object(k.jsxs)(xt,{"data-testid":"WalletRow",children:[Object(k.jsx)("i",{"data-testid":"Balance",children:e})," ",Object(k.jsx)("b",{"data-testid":"Currency",children:n}),Object(k.jsx)(ht,{"data-testid":"ExchangeButton",onClick:c,children:Object(k.jsx)(ut.a,{})})]})},ft="Wallet",gt=Y.a.div(et||(et=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),vt=Object(Y.a)(ot.a)(nt||(nt=Object(X.a)(["\n  width: 100%;\n"]))),mt=(at(ft),function(){var t=Object(s.d)(),e=Object(s.e)(bt),n=Object(s.e)(Ot);return Object(k.jsxs)("div",{"data-testid":ft,children:[Object(k.jsxs)(H,{"data-testid":"Title",children:[" ","Balances"," "]}),Object(k.jsx)(gt,{"data-testid":"Balances",children:n.map((function(n,c){return Object(k.jsx)(pt,{balance:e[n],currency:n,onExchangeClick:function(){return t(m.runExchange(n))}},c)}))}),Object(k.jsx)(Z,{children:Object(k.jsx)(vt,{"data-testid":"ResetButton",onClick:function(){return t(m.resetBalances())},color:"primary",variant:"contained",children:"Reset balances to initial state"})})]})});var Bt=Object(Y.a)((function(t){var e=t.className;return Object(k.jsx)("div",{className:e,children:Object(k.jsx)(Q,{children:Object(k.jsxs)(F,{children:[Object(k.jsx)(q.a,{exact:!0,path:"/",component:mt}),Object(k.jsx)(q.a,{exact:!0,path:"/exchange",component:rt})]})})})}))(ct||(ct=Object(X.a)(["\n  background-color: aliceblue;\n  height: 100vh;\n"])));n(117);j.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(O.a,{maxSnack:5,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:Object(k.jsx)(s.a,{store:T,children:Object(k.jsx)(b.a,{history:D,children:Object(k.jsx)(Bt,{})})})})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.7621f342.chunk.js.map