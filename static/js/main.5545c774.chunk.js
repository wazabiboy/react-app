(this["webpackJsonptuto-bertrand"]=this["webpackJsonptuto-bertrand"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(8),u=n.n(c),s=(n(14),n(2)),o=n(3),i=n(5),b=n(4),l=n(7),j=n.n(l),h=n(9),p=n(0),d=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).handleChange=function(){var t=Object(h.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),n=null,t.t0=e,t.next="plus"===t.t0?5:"moins"===t.t0?7:"zero"===t.t0?9:11;break;case 5:return n=r.state.count+1,t.abrupt("break",12);case 7:return n=r.state.count-1,t.abrupt("break",12);case 9:return n=0,t.abrupt("break",12);case 11:n=0;case 12:return t.next=14,r.setState({count:n});case 14:r.props.handerPlusApp(r.state.count);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.state={count:0},r}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:this.state.count})," ",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.handleChange("plus")},children:" + "}),"||  ",Object(p.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t.handleChange("moins")},children:" - "}),"||  ",Object(p.jsx)("button",{type:"button",className:"btn btn-orange",onClick:function(){return t.handleChange("zero")},children:" Reset"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})}}]),n}(r.Component),O=d,f=(n(17),function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("header",{children:["Valeur du compter: ",this.props.total]})}}]),n}(r.Component)),v=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).handerPlusAppInner=function(t,e){console.log("Maj compteur n "+e,"valeur"+t);var n=r.state.counters;n[e]=t,console.log(n),r.setState({counters:n});var a=n.reduce((function(t,e){return t+e}),0);r.setState({total:a})},r.state={counters:[0,0,0,0],total:0},r}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{total:this.state.total}),this.state.counters.map((function(e,n){return Object(p.jsx)(O,{handerPlusApp:function(e){return t.handerPlusAppInner(e,n)}},n)}))]})}}]),n}(r.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,u=e.getTTFB;n(t),r(t),a(t),c(t),u(t)}))};u.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.5545c774.chunk.js.map