(()=>{"use strict";var e,o={437:()=>{const e=window.wp.blocks,o=window.wp.i18n,n=window.wp.blockEditor,t=window.wp.components,r=window.ReactJSXRuntime,a=JSON.parse('{"UU":"narahosting/narahosting-code-block"}');(0,e.registerBlockType)(a.UU,{edit:function({attributes:e,setAttributes:a}){const{code:c}=e,s=(0,n.useBlockProps)();return(0,r.jsxs)("div",{...s,children:[(0,r.jsx)(n.InspectorControls,{children:(0,r.jsx)(t.PanelBody,{title:(0,o.__)("Code Block Settings","narahosting-code-block"),initialOpen:!0,children:(0,r.jsx)(t.TextControl,{label:(0,o.__)("Code","narahosting-code-block"),value:c,onChange:e=>a({code:e})})})}),(0,r.jsx)("div",{className:"narahosting-code-block",children:(0,r.jsx)("div",{className:"narahosting-code-block-content",children:(0,r.jsx)(n.RichText,{tagName:"pre",value:c,onChange:e=>a({code:e}),placeholder:(0,o.__)("Code","narahosting-code-block")})})})]})},save:function({attributes:e}){const{code:o}=e,t=n.useBlockProps.save({className:"narahosting-code-block container"});return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{className:"narahosting-code-block-content",children:(0,r.jsx)(n.RichText.Content,{tagName:"pre",value:o})})})}})}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return o[e](a,a.exports,t),a.exports}t.m=o,e=[],t.O=(o,n,r,a)=>{if(!n){var c=1/0;for(d=0;d<e.length;d++){for(var[n,r,a]=e[d],s=!0,i=0;i<n.length;i++)(!1&a||c>=a)&&Object.keys(t.O).every((e=>t.O[e](n[i])))?n.splice(i--,1):(s=!1,a<c&&(c=a));if(s){e.splice(d--,1);var l=r();void 0!==l&&(o=l)}}return o}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={938:0,414:0};t.O.j=o=>0===e[o];var o=(o,n)=>{var r,a,[c,s,i]=n,l=0;if(c.some((o=>0!==e[o]))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(i)var d=i(t)}for(o&&o(n);l<c.length;l++)a=c[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},n=globalThis.webpackChunknarahostingcodeblock=globalThis.webpackChunknarahostingcodeblock||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var r=t.O(void 0,[414],(()=>t(437)));r=t.O(r)})();