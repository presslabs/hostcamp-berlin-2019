(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[65],{495:function(c,t,e){"use strict";e.r(t);var r=e(0),n=e(72),o=e(506),a=e(4),s=e.n(a);t.default=({className:c})=>{const{cartItems:t,cartIsLoading:e}=Object(n.a)();return Object(r.createElement)("div",{className:s()(c,"wc-block-mini-cart__products-table")},Object(r.createElement)(o.a,{lineItems:t,isLoading:e,className:"wc-block-mini-cart-items"}))}},54:function(c,t,e){"use strict";e.d(t,"a",(function(){return n}));var r=e(0);function n(c,t){const e=Object(r.useRef)();return Object(r.useEffect)((()=>{e.current===c||t&&!t(c,e.current)||(e.current=c)}),[c,t]),e.current}},73:function(c,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e(59),n=e(5),o=e(0);const a=()=>({dispatchStoreEvent:Object(o.useCallback)(((c,t={})=>{try{Object(r.doAction)(`experimental__woocommerce_blocks-${c}`,t)}catch(c){console.error(c)}}),[]),dispatchCheckoutEvent:Object(o.useCallback)(((c,t={})=>{try{Object(r.doAction)(`experimental__woocommerce_blocks-checkout-${c}`,{...t,storeCart:Object(n.select)("wc/store/cart").getCartData()})}catch(c){console.error(c)}}),[])})}}]);