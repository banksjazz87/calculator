(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{15:function(t,a,e){},9:function(t,a,e){"use strict";e.r(a);var i=e(2),s=e(3),l=e(4),c=e(6),r=e(5),n=e(0),o=e(1),u=e.n(o),h=e(8),d=e.n(h);e(15);function S(t,a){return t+a}function g(t,a){return t-a}function p(t,a){return t*a}function b(t,a){return t/a}var O=function(t){Object(c.a)(e,t);var a=Object(r.a)(e);function e(t){var i;return Object(s.a)(this,e),(i=a.call(this,t)).state={},i}return Object(l.a)(e,[{key:"render",value:function(){return Object(n.jsx)("div",{id:this.props.tag,children:Object(n.jsxs)("h1",{children:[this.props.startValue,this.props.activeValue]})})}}]),e}(u.a.Component),j=function(t){Object(c.a)(e,t);var a=Object(r.a)(e);function e(t){var i;return Object(s.a)(this,e),(i=a.call(this,t)).state={},i}return Object(l.a)(e,[{key:"render",value:function(){var t=this;return Object(n.jsx)("button",{id:this.props.tag,class:this.props.type,onClick:function(a){return t.props.globalOnClick(t.props.issuedValue)},children:this.props.issuedValue})}}]),e}(u.a.Component),k=function(t){Object(c.a)(e,t);var a=Object(r.a)(e);function e(t){var l;return Object(s.a)(this,e),(l=a.call(this,t)).state={initialState:"0",calculatingState:"",calculatedState:[],recordedState:[],runningTotal:"",operator:"",testState:"2",negative:!1},l.handleOnClick=l.handleOnClick.bind(Object(i.a)(l)),l.clearOnClick=l.clearOnClick.bind(Object(i.a)(l)),l.digitLimit=l.digitLimit.bind(Object(i.a)(l)),l}return Object(l.a)(e,[{key:"handleOnClick",value:function(t){switch(t){case"0":if("0"===this.state.calculatingState)this.setState({initialState:"",calculatingState:t,calculatedState:this.state.calculatedState+t,recordedState:[this.state.recordedState+t],operator:this.state.operator});else if("+"===this.state.operator){var a=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:a,runningTotal:S(a,parseFloat(this.state.calculatingState+t)),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else if("-"===this.state.operator){var e=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:e,runningTotal:g(e,parseFloat(this.state.calculatingState+t)),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else if("x"===this.state.operator){var i=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:i,runningTotal:p(i,parseFloat(this.state.calculatingState+t)),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else if("\xf7"===this.state.operator){var s=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:s,runningTotal:b(s,parseFloat(this.state.calculatingState+t)),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:[this.state.calculatedState+t],recordedState:[this.state.recordedState+t],operator:this.state.operator});break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":if("+"===this.state.operator){var l=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:l,runningTotal:S(l,parseFloat(this.state.calculatingState+t)),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else if("-"===this.state.operator){var c=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:c,runningTotal:g(c,parseFloat(this.state.calculatingState+t)),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else if(!0===this.state.negative&&"+"===this.state.operator[this.state.operator.length-2]){var r=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:r,runningTotal:S(r,parseFloat(-Math.abs(this.state.calculatingState+t))),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else if(!0===this.state.negative&&"x"===this.state.operator[this.state.operator.length-2]){var n=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:n,runningTotal:p(n,parseFloat(-Math.abs(this.state.calculatingState+t))),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else if(!0===this.state.negative&&"\xf7"===this.state.operator[this.state.operator.length-2]){var o=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:o,runningTotal:b(o,parseFloat(-Math.abs(this.state.calculatingState+t))),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else if("x"===this.state.operator){var u=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:u,runningTotal:p(u,parseFloat(this.state.calculatingState+t)),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else if("\xf7"===this.state.operator){var h=parseFloat(this.state.calculatedState);this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:h,runningTotal:b(h,parseFloat(this.state.calculatingState+t)),recordedState:[this.state.recordedState+t],operator:this.state.operator})}else this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:[this.state.calculatedState+t],recordedState:[this.state.recordedState+t],operator:this.state.operator});break;case"+":this.state.runningTotal?this.setState({initialState:t,calculatingState:"",calculatedState:this.state.runningTotal,recordedState:[this.state.recordedState+t],operator:t,negative:!1}):this.setState({initialState:t,calculatingState:"",calculatedState:[this.state.calculatedState+t],recordedState:[this.state.recordedState+t],operator:t,negative:!1});break;case"-":var d=this.state.recordedState.toString(),O=d.charAt(d.length-1),j=/[+ | x | \xf7]/;this.state.runningTotal&&j.test(O)?this.setState({initialState:this.state.operator+t,calculatingState:"",calculatedState:this.state.runningTotal,recordedState:[this.state.recordedState+t],operator:this.state.operator+t,negative:!0}):!1===this.state.negative&&j.test(O)?this.setState({initialState:this.state.operator+t,calculatingState:"",calculatedState:[this.state.calculatedState+t],recordedState:[this.state.recordedState+t],operator:this.state.operator+t,negative:!0}):this.state.runningTotal&&/[0-9 | .]/.test(O)?this.setState({initialState:t,calculatingState:"",calculatedState:this.state.runningTotal,recordedState:[this.state.recordedState+t],operator:t,negative:!1}):this.setState({initialState:t,calculatingState:"",calculatedState:[this.state.calculatedState+t],recordedState:[this.state.recordedState+t],operator:t,negative:!1});break;case"x":case"\xf7":this.state.runningTotal?this.setState({initialState:t,calculatingState:"",calculatedState:this.state.runningTotal,recordedState:[this.state.recordedState+t],operator:t,negative:!1}):this.setState({initialState:t,calculatingState:"",calculatedState:[this.state.calculatedState+t],recordedState:[this.state.recordedState+t],operator:t,negative:!1});break;case".":this.state.calculatingState.includes(".")?this.setState({initialState:"",calculatingState:this.state.calculatingState,calculatedState:[this.state.calculatedState],recordedState:[this.state.recordedState],operator:this.state.operator}):this.setState({initialState:"",calculatingState:this.state.calculatingState+t,calculatedState:[this.state.calculatedState+t],recordedState:[this.state.recordedState+t],operator:this.state.operator});break;case"=":this.setState({calculatingState:(k=this.state.runningTotal,Number(Math.round(1e4*k)/1e4))});break;default:this.setState({initialState:"",calculatingState:this.state.calculatingState,calculatedState:[this.state.calculatedState],recordedState:[this.state.recordedState],operator:this.state.operator})}var k;this.digitLimit()}},{key:"clearOnClick",value:function(){this.setState({initialState:"0",calculatingState:"",calculatedState:[],runningTotal:"",recordedState:[],operator:""})}},{key:"digitLimit",value:function(){13===this.state.calculatingState.length&&(alert("You have used the maximum digits for this calculator, press 'AC' and try again"),this.setState({calculatingState:this.state.calculatingState}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{id:"container",children:[Object(n.jsx)(O,{tag:"display",startValue:this.state.initialState,activeValue:this.state.calculatingState}),Object(n.jsx)(j,{tag:"zero",issuedValue:"0",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"one",issuedValue:"1",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"two",issuedValue:"2",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"three",issuedValue:"3",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"four",issuedValue:"4",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"five",issuedValue:"5",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"six",issuedValue:"6",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"seven",issuedValue:"7",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"eight",issuedValue:"8",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"nine",issuedValue:"9",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"add",issuedValue:"+",globalOnClick:this.handleOnClick,type:"operator"}),Object(n.jsx)(j,{tag:"subtract",issuedValue:"-",globalOnClick:this.handleOnClick,type:"operator"}),Object(n.jsx)(j,{tag:"multiply",issuedValue:"x",globalOnClick:this.handleOnClick,type:"operator"}),Object(n.jsx)(j,{tag:"divide",issuedValue:"\xf7",globalOnClick:this.handleOnClick,type:"operator"}),Object(n.jsx)(j,{tag:"equals",issuedValue:"=",globalOnClick:this.handleOnClick,type:"operator"}),Object(n.jsx)(j,{tag:"decimal",issuedValue:".",globalOnClick:this.handleOnClick,type:"number"}),Object(n.jsx)(j,{tag:"clear",issuedValue:"AC",globalOnClick:this.clearOnClick,type:"all-clear"})]})}}]),e}(u.a.Component);d.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.c8d769b1.chunk.js.map