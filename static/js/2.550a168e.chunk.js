webpackJsonp([2],{181:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),u=t.n(a),c=t(9),p=t(16),s=t(193),l=t(49),d=t(15),f=t(48),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),b=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),m(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=u.a.createElement(f.a,null);return this.props.loading||(e=u.a.createElement("div",null,this.props.orders.map(function(e){return u.a.createElement(s.a,{key:e.id,ingredients:e.ingredient,price:+e.price})}))),e}}]),n}(a.Component),h=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},y=function(e){return{onFetchOrders:function(n,t){return e(d.e(n,t))}}};n.default=Object(c.b)(h,y)(Object(l.a)(b,p.a))},193:function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=t(194),a=(t.n(i),function(e){var n=[];for(var t in e.ingredients)n.push({name:t,amount:e.ingredients[t]});var r=n.map(function(e){return o.a.createElement("span",{key:e.name},e.name," (",e.amount,") ")});return o.a.createElement("div",{className:"order"},o.a.createElement("p",null,"Ingredients: ",r),o.a.createElement("p",null,"Price: ",o.a.createElement("strong",null,e.price.toFixed(2)," \u20ac")))});n.a=a},194:function(e,n,t){var r=t(195);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;t(3)(r,o);r.locals&&(e.exports=r.locals)},195:function(e,n,t){n=e.exports=t(2)(void 0),n.push([e.i,".order {\n  width: 80%;\n  border: 1px solid #CCC;\n  box-shadow: 0 2px 3px #CCC;\n  padding: 10px;\n  margin: 10px auto; }\n  .order span {\n    display: inline-block;\n    text-transform: capitalize;\n    border: 1px solid #CCC;\n    padding: 0 5px;\n    margin: 0 5px; }\n",""])}});
//# sourceMappingURL=2.550a168e.chunk.js.map