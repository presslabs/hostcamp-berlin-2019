(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const n=window.wp.element,t=window.wc.components,o=e=>{let{options:o,initialValues:i}=e;const[l,r]=(0,n.useState)(i);return(0,n.createElement)(t.TreeSelectControl,{value:l,onChange:e=>{document.body.dispatchEvent(new CustomEvent("wc_region_picker_update",{detail:e})),r(e)},options:o,placeholder:"Start typing to filter zones",selectAllLabel:"Select all countries",individuallySelectParent:!0,clearOnSelect:!1,maxVisibleTags:5})},i=window.wc.currency,l=window.wc.number,r=()=>{const e=(0,n.useContext)(i.CurrencyContext);return(0,n.useEffect)((()=>{window.wc.ShippingCurrencyContext=window.wc.ShippingCurrencyContext||e,window.wc.ShippingCurrencyNumberFormat=window.wc.ShippingCurrencyNumberFormat||l.numberFormat}),[e]),null};var c,a,d,u;const w=document.getElementById("wc-shipping-zone-region-picker-root"),p=null!==(c=null===(a=window.shippingZoneMethodsLocalizeScript)||void 0===a?void 0:a.region_options)&&void 0!==c?c:[],s=null!==(d=null===(u=window.shippingZoneMethodsLocalizeScript)||void 0===u?void 0:u.locations)&&void 0!==d?d:[],m=()=>(0,n.createElement)("div",null,(0,n.createElement)(r,null),(0,n.createElement)(o,{options:p,initialValues:s}));w&&(n.createRoot?(0,n.createRoot)(w).render((0,n.createElement)(m,null)):(0,n.render)((0,n.createElement)(m,null),w)),(window.wc=window.wc||{}).shippingSettingsRegionPicker=e})();