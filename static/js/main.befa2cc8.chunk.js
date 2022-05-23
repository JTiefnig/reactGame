(this.webpackJsonpidvers=this.webpackJsonpidvers||[]).push([[0],{332:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(55),c=n.n(s),i=(n(62),n(56)),o=n(57),l=n(4),u=n(5),h=n(7),j=n(6),d=n(28),b=n.n(d),x=n(0),O=function(e){var t=e.onClick;return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("h1",{children:"Tic Tac Toe"}),Object(x.jsx)("button",{className:"btn",onClick:t,children:"New"})]})},v=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={value:null},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=Object(x.jsx)(x.Fragment,{});return"X"===this.props.value?t=Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("line",{className:"draw",x1:"10%",y1:"10%",x2:"90%",y2:"90%"}),Object(x.jsx)("line",{className:"draw",x1:"90%",y1:"10%",x2:"10%",y2:"90%"})]}):"O"===this.props.value&&(t=Object(x.jsx)("circle",{className:"draw",cx:"50%",cy:"50%",r:"40%",fill:"transparent"})),Object(x.jsx)("button",{className:"square",onClick:function(){return e.props.onClick()},children:Object(x.jsx)("svg",{width:"100%",height:"100%",stroke:"white",strokeWidth:"10%",children:t})})}}]),n}(a.a.Component),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={value:null},r}return Object(u.a)(n,[{key:"renderSquare",value:function(e){var t=this;return Object(x.jsx)(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}},e)}},{key:"render",value:function(){for(var e=[],t=0;t<9;t++)e.push(this.renderSquare(t));return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"Board",children:e})})}}]),n}(a.a.Component),m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e,r,a){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={move:r,step:a},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=[];t.push(Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("line",{className:"draw",x1:"33%",y1:"0%",x2:"33%",y2:"100%"}),Object(x.jsx)("line",{className:"draw",x1:"66%",y1:"0%",x2:"66%",y2:"100%"}),Object(x.jsx)("line",{className:"draw",x1:"0%",y1:"33%",x2:"100%",y2:"33%"}),Object(x.jsx)("line",{className:"draw",x1:"0%",y1:"66%",x2:"100%",y2:"66%"})]}));for(var n=0;n<3;n++)for(var r=0;r<3;r++){var a=n+3*r,s=this.props.step.squares[a];if("X"===s&&t.push(Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("line",{className:"draw",x1:33*n+3+"%",y1:33*r+3+"%",x2:33*n+3+25+"%",y2:33*r+3+25+"%"}),Object(x.jsx)("line",{className:"draw",x1:33*n+3+25+"%",y1:33*r+3+"%",x2:33*n+3+"%",y2:33*r+3+25+"%"})]})),"O"===s){var c=33*n+17,i=33*r+17;t.push(Object(x.jsx)("circle",{className:"draw",cx:c+"%",cy:i+"%",r:"12.5%",fill:"transparent"}))}}var o=t.map((function(e,t){return Object(x.jsx)("g",{children:e},t)}));return Object(x.jsxs)("button",{className:"historyButton",onClick:function(){return e.props.onClick()},children:[Object(x.jsx)("svg",{className:"lilBoard",stroke:"black",strokeWidth:"2%",children:o}),Object(x.jsxs)("a",{children:["Jump to move ",this.props.move]})]})}}]),n}(a.a.Component),p=function(e){var t=e.onAccept;return Object(x.jsx)("div",{className:"FullScreenContainer",children:Object(x.jsxs)("div",{className:"WarningBox",children:[Object(x.jsx)("h3",{children:"Your tracker settings"}),Object(x.jsx)("a",{children:"We use cookies and similar methods to recognize visitors and remember their preferences. We also use them to measure ad campaign effectiveness, target ads and analyze site traffic."}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{children:"By clicking accept, you consent to the processing of your data by us and third parties using the above methods. You can always change your tracker preferences by visiting our Cookie Policy."}),Object(x.jsx)("button",{className:"btn",onClick:function(){return t(!0)},children:"ACCEPT"}),Object(x.jsx)("button",{className:"btn",onClick:function(){return t(!1)},children:"REJECT"})]})})},y=(n(65),function(e){return"Draw"===e.winner?Object(x.jsx)("h2",{children:"Draw"}):Object(x.jsx)("h2",{children:"WON"})}),g=function(e){var t=e.winner,n=e.onOk;return Object(x.jsx)("div",{className:"FullScreenContainer",children:Object(x.jsxs)("div",{className:"WinnerBox fadeIn-bottom",children:[Object(x.jsx)("div",{children:function(e){var t=Object(x.jsxs)("svg",{width:100,height:100,children:[Object(x.jsx)("line",{className:"draw",x1:"10%",y1:"10%",x2:"90%",y2:"90%",stroke:"black",strokeWidth:"10%"}),Object(x.jsx)("line",{className:"draw",x1:"90%",y1:"10%",x2:"10%",y2:"90%",stroke:"black",strokeWidth:"10%"})]}),n=Object(x.jsx)("svg",{width:100,height:100,children:Object(x.jsx)("circle",{className:"draw",cx:"50%",cy:"50%",r:"40%",fill:"transparent",stroke:"black",strokeWidth:"10%"})});return console.log(e),"X"===e?t:"O"===e?n:"Draw"===e?Object(x.jsxs)(x.Fragment,{children:[t,n]}):void 0}(t)}),Object(x.jsx)(y,{winner:t}),Object(x.jsx)("button",{className:"btn",onClick:n,children:"NEW GAME"})]})})},k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),r=t.call(this,e),localStorage.getItem("gamestate")?r.state=JSON.parse(localStorage.getItem("gamestate")):r.clearBoard(),r}return Object(u.a)(n,[{key:"savestate",value:function(){this.state.browserDataConfirmation&&localStorage.setItem("gamestate",JSON.stringify({history:this.state.history,xIsNext:this.state.xIsNext,browserDataConfirmation:this.state.browserDataConfirmation}))}},{key:"handleClick",value:function(e){this.state.xIsNext||this.handleinput(e)}},{key:"handleinput",value:function(e){var t=this.state.history,n=t[t.length-1].squares.slice();w(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),xIsNext:!this.state.xIsNext}),this.savestate())}},{key:"handleKeyInput",value:function(e){try{var t=parseInt(e.key)-1;t>=0&&t<9&&this.handleClick(t)}catch(n){}}},{key:"clearBoard",value:function(){var e=Math.round(Math.random()),t=[{squares:Array(9).fill(null)}];this.setState({history:t,xIsNext:e}),this.savestate()}},{key:"confirmBrowserData",value:function(e){this.setState({browserDataConfirmation:e,warningShown:!0}),this.savestate()}},{key:"jumpTo",value:function(e){var t=this.state.history.slice(0,e+1);console.log(e),this.setState({history:t,xIsNext:e%2===0}),this.savestate()}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[n.length-1],a=w(r.squares),s=Object(x.jsx)(x.Fragment,{});a?(e=a,s=Object(x.jsx)(g,{winner:a,onOk:function(){return t.clearBoard()}})):(e="Next player: "+(this.state.xIsNext?"X":"O"),setTimeout((function(){t.state.xIsNext&&function(e){return I.apply(this,arguments)}(r.squares).then((function(e){t.handleinput(e),console.log("move ".concat(e))}))}),500));var c=n.map((function(e,n){return 0==n?Object(x.jsx)(x.Fragment,{}):Object(x.jsx)("li",{children:Object(x.jsx)(m,{onClick:function(){return t.jumpTo(n)},step:e,move:n})},n)}));return Object(x.jsxs)(x.Fragment,{children:[t.state.browserDataConfirmation||t.state.warningShown?Object(x.jsx)(x.Fragment,{}):Object(x.jsx)(p,{onAccept:function(e){return t.confirmBrowserData(e)}}),s,Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"gameContainer",onKeyPress:function(e){return t.handleKeyInput(e)},tabIndex:"0",children:[Object(x.jsx)(O,{onClick:function(){return t.clearBoard()}}),Object(x.jsx)("div",{children:e}),Object(x.jsx)("div",{className:"BoardContainer",children:Object(x.jsx)(f,{squares:r.squares,onClick:function(e){t.handleClick(e)}})})]})}),Object(x.jsx)("div",{className:"historyContainer",children:Object(x.jsx)("ol",{children:c})})]})}}]),n}(a.a.Component),N=k;function w(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(o.a)(t[n],3),a=r[0],s=r[1],c=r[2];if(e[a]&&e[a]===e[s]&&e[a]===e[c])return e[a]}for(var i=0;i<9;i++)if(null==e[i])return null;return"Draw"}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,a=Array.from(e);a[t]=r?"X":"O";var s=w(a);if("Draw"===s)return 0;if("X"===s)return 81-n*n;if("O"===s)return-(81-n*n);for(var c=0,i=0;i<9;i++)a[i]||(c+=C(a,i,n+1,!r));return c}function I(){return(I=Object(i.a)(b.a.mark((function e(t){var n,r,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=-1/0,r=[],a=0;a<9;a++)t[a]||((s=C(t,a,0,!0))==n&&r.push(a),s>n&&((r=[]).push(a),n=s));if(!r.length){e.next=5;break}return e.abrupt("return",r[Math.floor(Math.random()*r.length)]);case 5:return e.abrupt("return",-1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,333)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root")),S()},62:function(e,t,n){}},[[332,1,2]]]);
//# sourceMappingURL=main.befa2cc8.chunk.js.map