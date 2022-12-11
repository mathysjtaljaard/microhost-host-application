"use strict";(self.webpackChunkmicrohosts_host_application=self.webpackChunkmicrohosts_host_application||[]).push([[996],{897:(e,t,r)=>{var n=r(51);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},996:(e,t,r)=>{r.r(t);var n=r(416),o=r.n(n),l=r(897),a=r(162),c=r(415),u=r(767);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function p(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,r,n,l,a,c=(l=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(l);if(a){var r=s(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={hasError:!1},t}return t=u,n=[{key:"getDerivedStateFromError",value:function(e){return console.error(e),{hasError:!0}}}],(r=[{key:"componentDidCatch",value:function(e,t){console.error("BOUNDARY",{error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.hasError?o().createElement("h1",null,"Something went wrong."):this.props.children}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component),E=o().lazy((function(){return r.e(285).then(r.t.bind(r,285,23))})),h=function(){var e=(0,u.useRouteError)();return o().createElement(a.Alert,{variant:"danger"},e)},y=function(e){var t=function(e,t){var r=e.map((function(e){var r=e.path,n=e.Element,l=e.ErrorElement;return{path:r,element:o().createElement(n,{nav:t}),errorElement:o().createElement(l,null)}}));return(0,u.createBrowserRouter)(r,{basename:"/microhost-host-application/"})}(e,function(e){return o().createElement(a.Navbar,{bg:"light",expand:"lg"},o().createElement(a.Nav,{variant:"tabs"},e.map((function(e,t){return function(e,t){var r=e.path,n=e.activeWhen,l=e.value;return o().createElement(c.LinkContainer,{to:r,key:t},o().createElement(a.NavLink,{eventKey:n},l))}(e,t)}))))}(e));return t}([{path:"/",activeWhen:"/",value:"Home",Element:function(e){var t=e.nav;return o().createElement(a.Container,{fluid:!0},o().createElement(a.Row,null,t),o().createElement(a.Row,null,o().createElement(a.Col,{sm:4},"SomeData Here"),o().createElement(a.Col,{sm:8},"Other data here")),o().createElement(a.Row,null,o().createElement(a.Col,null,o().createElement("div",null,o().createElement("p",null,o().createElement("b",null,"Host App")),o().createElement("p",null,"The app will not work without a store"),o().createElement("footer",null,o().createElement("p",null,"Host Footer"))))))},ErrorElement:h},{path:"/qr/",activeWhen:"/qr/",value:"QR Generator",Element:function(e){var t=e.nav;return o().createElement(a.Container,{fluid:!0},o().createElement(a.Row,null,t),o().createElement(a.Row,null,o().createElement("div",null,"Remote QR App Here")),o().createElement(a.Row,null,o().createElement(v,null,o().createElement(E,null))))},ErrorElement:h}]);l.createRoot(document.getElementById("root")).render(o().createElement(o().StrictMode,null,o().createElement(n.Suspense,{fallback:o().createElement("h1",null,"Loading Content")},o().createElement(u.RouterProvider,{router:y}))))}}]);