(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),l=t(7),r=t.n(l),n=(t(13),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),y=(t(15),function(e){return s.a.createElement("div",{className:"Player Player-"+e.playerNr+" "+e.activePlayerClass},s.a.createElement("h2",null,e.playerNr),s.a.createElement("p",null,"Game Score"),s.a.createElement("p",{className:"P-"+e.playerNr+"-gameScore"},e.playerGameScore),s.a.createElement("p",null,"Match Score"),s.a.createElement("p",{className:"P-"+e.playerNr+"-matchScore"},e.playerMatchScore))}),v=(t(17),function(e){return s.a.createElement("div",{className:"Dice "+e.bouncEffect},s.a.createElement("div",{className:e.diceClasses},s.a.createElement("div",{className:"cube__face cube__face--front"},"1"),s.a.createElement("div",{className:"cube__face cube__face--back"},"2"),s.a.createElement("div",{className:"cube__face cube__face--right"},"3"),s.a.createElement("div",{className:"cube__face cube__face--left"},"4"),s.a.createElement("div",{className:"cube__face cube__face--top"},"5"),s.a.createElement("div",{className:"cube__face cube__face--bottom"},"6")))}),p=(t(19),function(e){return s.a.createElement("div",{className:"Message "+e.displayClass},s.a.createElement("p",{className:"Message__text"},e.theMsg))}),d=(t(21),function(e){function a(){var e,t;Object(n.a)(this,a);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={dice:0,matchScore:0,activePlayer:1,winScore:50,players:[{playerNumber:1,playerMatchScore:0,playerGameScore:0,activeClass:"active-player"},{playerNumber:2,playerMatchScore:0,playerGameScore:0,activeClass:""}],game:!0,diceClasses:"cube",msgDisplayClass:"",diceBounc:"",winner:null,playAgain:"",mouseMoveX:"none",mouseMoveY:"none"},t.activePlayerHandler=function(){var e=t.state.players;1===t.state.activePlayer?(e[t.state.activePlayer-1].activeClass="",e[t.state.activePlayer].activeClass="active-player"):(e[t.state.activePlayer-2].activeClass="active-player",e[t.state.activePlayer-1].activeClass="")},t.rollTheDiceHandler=function(){if(t.state.game){t.setState({diceClasses:"cube"});var e=Math.floor(6*Math.random()+1);2===e?t.setState({diceClasses:"cube show-back"}):3===e?t.setState({diceClasses:"cube show-right"}):4===e?t.setState({diceClasses:"cube show-left"}):5===e?t.setState({diceClasses:"cube show-top"}):6===e&&t.setState({diceClasses:"cube show-bottom"});var a=t.state.players;1===e?(t.singleClickButtonHandler(),t.setState({msgDisplayClass:"DisplayRoll"}),setTimeout(function(){t.setState({msgDisplayClass:""})},1e3),t.changePlayerHandler(),t.activePlayerHandler()):(t.setState({dice:e,matchScore:1===e?0:t.state.matchScore+e}),a[t.state.activePlayer-1].playerMatchScore=t.state.matchScore+e),t.state.dice===e&&(t.setState({diceBounc:"bounc"}),setTimeout(function(){t.setState({diceBounc:""})},700))}},t.saveGameScore=function(){if(t.state.game){var e=document.querySelector(".P-".concat(t.state.activePlayer,"-gameScore")).innerHTML,a=t.state.players;a[t.state.activePlayer-1].playerGameScore=+e+t.state.matchScore,a[t.state.activePlayer-1].playerGameScore>=t.state.winScore&&(t.setState({winner:"Player ".concat(a[t.state.activePlayer-1].playerNumber," has won the game!")}),t.setState({playAgain:"playAgain"}),t.setState({game:!1})),t.changePlayerHandler(),t.activePlayerHandler()}},t.changePlayerHandler=function(){t.setState({dice:0,matchScore:0,activePlayer:1===t.state.activePlayer?2:1}),t.state.players[t.state.activePlayer-1].playerMatchScore=0},t.singleClickButtonHandler=function(){t.refs.btnRoll.setAttribute("disabled","disabled"),setTimeout(function(){t.refs.btnRoll.removeAttribute("disabled")},1e3)},t.btnClickEventsHandler=function(){t.singleClickButtonHandler(),t.rollTheDiceHandler()},t.btnPlayAgainHandler=function(){t.setState({dice:0,matchScore:0,activePlayer:1,players:[{playerNumber:1,playerMatchScore:0,playerGameScore:0,activeClass:"active-player"},{playerNumber:2,playerMatchScore:0,playerGameScore:0,activeClass:""}],diceClasses:"cube",game:!0,winner:null,playAgain:""})},t.mouseMoveHandler=function(e){var a=e.clientX/100,c=e.clientY/100;a<6?a=-(6-a)-.8:a-=5,c=c<6?-(6-c)-.8:c-5+1.8,t.setState({mouseMoveX:a.toFixed(1),mouseMoveY:c.toFixed(1)})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(){document.querySelector(".P-".concat(this.state.activePlayer,"-matchScore")).innerHTML=this.state.players[this.state.activePlayer-1].playerMatchScore}},{key:"render",value:function(){var e=this,a=this.state.players;return s.a.createElement("div",{onMouseMove:this.mouseMoveHandler,style:{transform:"rotateY(".concat(this.state.mouseMoveX,"deg) rotateX(").concat(this.state.mouseMoveY,"deg)")},className:"Game"},s.a.createElement(p,{displayClass:this.state.msgDisplayClass,theMsg:"Rolled ONE!"}),s.a.createElement("div",{className:"score-container"},s.a.createElement("p",{className:"score"},this.state.dice),s.a.createElement("button",{className:"btn btn-roll",ref:"btnRoll",onClick:this.btnClickEventsHandler},"Roll"),s.a.createElement("button",{className:"btn btn-save",onClick:this.saveGameScore},"Save")),s.a.createElement("div",{className:"Players"},s.a.createElement("div",{className:"winScore-container"},s.a.createElement("p",null,"Win Score"),s.a.createElement("p",null,this.state.winScore)),a.map(function(a){return s.a.createElement(y,{activePlayerClass:a.activeClass,activePlayerNumber:e.state.activePlayer,key:a.playerNumber,playerNr:a.playerNumber,playerMatchScore:a.playerMatchScore,playerGameScore:a.playerGameScore})})),s.a.createElement(v,{diceClasses:this.state.diceClasses,bouncEffect:this.state.diceBounc}),s.a.createElement("h1",{className:"msg-play-again"},this.state.winner),s.a.createElement("button",{onClick:this.btnPlayAgainHandler,className:"btn btnPlayAgain "+this.state.playAgain},"Play again"))}}]),a}(c.Component)),h=(t(23),function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d,null))}}]),a}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.f9e965ca.chunk.js.map