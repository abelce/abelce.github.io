(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[413],{90362:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tiny-code/[id]",function(){return n(57494)}])},94079:function(e,t,n){"use strict";n.d(t,{Z:function(){return X}});var l=n(85893),a=n(67294),o=n(2620),r=n.n(o);n(28725);let i=e=>{var t;let{title:n,extra:a,children:o}=e;return(0,l.jsxs)("div",{className:r().box,style:null!==(t=e.style)&&void 0!==t?t:{},children:[(0,l.jsxs)("div",{className:r()["box-header"],children:[(0,l.jsx)("div",{className:r()["box-header-left"],children:n}),(0,l.jsx)("div",{className:r()["box-header-right"],children:a})]}),(0,l.jsx)("div",{className:r()["box-body"],children:o})]})};var s=(0,a.memo)(i),c=n(43070),d=n(47421),u=n(58037),m=n(61426),v=n(13804),h=n(37761),p=n.n(h),g=n(78120),_=n(23732),f=n(45383);let y=new g.F6,x=y.of(_.vk),w={javascript:u.eJ,css:m.iv,html:v.dy},b=e=>{let t=(0,a.useRef)(),n=(0,a.useCallback)(t=>{if(t.docChanged&&"function"==typeof e.onChange){let n=t.state.doc,l=n.toString();e.onChange(l)}},[]);return(0,a.useEffect)(()=>{let l=w[e.lang||"html"],a=[c.Xy,l(),x,(0,f.m8)(),(0,d.Uw)(),(0,d.Eu)(),d.$f.of([...f.wQ,...f.f$,{key:"Mod-s",mac:"Mod-s",run(){var t;null===(t=e.onChange)||void 0===t||t.call(e,o.state.doc.toString())}}]),d.tk.updateListener.of(n)];e.readonly&&a.push(g.yy.readOnly.of(!0));let o=new d.tk({doc:e.value,extensions:a,parent:t.current});return()=>{var t;null===(t=e.onChange)||void 0===t||t.call(e,o.state.doc.toString())}},[]),(0,l.jsx)("div",{ref:t,className:p()["code-editor"]})};var j=(0,a.memo)(b);let S=e=>{let t=a.Children.toArray(e.children),n=1/t.length,[o,r]=(0,a.useState)(t.map((e,l)=>l!==t.length-1?1-n*(t.length-1):n)),i=t.map((e,t)=>{let n=o[t];return a.cloneElement(e,{index:t,value:null!=n?n:""})});return(0,l.jsx)(l.Fragment,{children:i})};var C=(0,a.memo)(S),N=n(23337),k=n.n(N);let E=e=>{let t=(0,a.useRef)(),[n,o]=(0,a.useState)(),[r,i]=(0,a.useState)(),s=e=>{o(!0),i({x:e.clientX,y:e.clientY})},c=()=>{i(null),o(!1)},d=()=>{i(null),o(!1)},u=e=>{n&&r&&(e.clientX,r.x,e.clientY,r.y)},m=a.cloneElement(e.children,{...e.children.props,style:{width:"".concat(100*(e.value||0),"%")}});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:k()["editor-resizer-item"],ref:t,onMouseMove:u,onClick:s,onMouseUp:c,onMouseLeave:d}),m]})};var M=Object.assign(C,{Item:(0,a.memo)(E)}),z=n(21779),I=n.n(z);let L=e=>{let t=(0,a.useRef)(),[n,o]=(0,a.useState)(!1),[r,i]=(0,a.useState)({width:0,height:0}),c=e=>{t.current&&i(t.current.getBoundingClientRect())};return(0,a.useEffect)(()=>(document.addEventListener("resize",c),o(!0),()=>{document.removeEventListener("resize",c)}),[]),(0,l.jsx)("div",{className:I()["code-div"],ref:t,children:n?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(M,{children:[(0,l.jsx)(M.Item,{children:(0,l.jsx)(s,{title:"HTML",children:(0,l.jsx)(j,{lang:"html",value:e.value.get("html"),onChange(t){e.onChange("html",t)}})})}),(0,l.jsx)(M.Item,{children:(0,l.jsx)(s,{title:"CSS",children:(0,l.jsx)(j,{lang:"css",value:e.value.get("css"),onChange(t){e.onChange("css",t)}})})}),(0,l.jsx)(M.Item,{children:(0,l.jsx)(s,{title:"JS",children:(0,l.jsx)(j,{lang:"javascript",value:e.value.get("javascript"),onChange(t){e.onChange("javascript",t)}})})})]})}):null})};var F=(0,a.memo)(L),Z=n(35825),T=n(63602),D=n.n(T);let O=function(e){83==e.keyCode&&(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)&&e.preventDefault()},R=e=>{var t,n,o,r,i,s;let c=e.cachaValue,d=[["javascript",c?null==localStorage?void 0:null===(t=localStorage.getItem)||void 0===t?void 0:t.call(localStorage,"".concat(location.pathname,"_javascript")):null===(n=e.data)||void 0===n?void 0:n.javascript],["css",c?null==localStorage?void 0:null===(o=localStorage.getItem)||void 0===o?void 0:o.call(localStorage,"".concat(location.pathname,"_css")):null===(r=e.data)||void 0===r?void 0:r.css],["html",c?null==localStorage?void 0:null===(i=localStorage.getItem)||void 0===i?void 0:i.call(localStorage,"".concat(location.pathname,"_html")):null===(s=e.data)||void 0===s?void 0:s.html]],[u,m]=(0,a.useState)(new Map(d)),v=(e,t)=>{if(u.set(e,t),m(new Map(u)),c){var n;null==localStorage||null===(n=localStorage.setItem)||void 0===n||n.call(localStorage,"".concat(location.pathname,"_").concat(e),t)}};return(0,a.useEffect)(()=>(document.addEventListener("keydown",O),()=>{document.removeEventListener("keydown",O)}),[]),(0,l.jsx)("div",{className:D().editor,children:(0,l.jsxs)("div",{className:D()["iframe-div"],children:[(0,l.jsx)(F,{value:u,onChange:v}),(0,l.jsx)(Z.Z,{className:D()["preview-iframe"],codeMap:u})]})})};var X=(0,a.memo)(R)},57494:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var l=n(94079),a=!0;t.default=l.Z},35825:function(e,t,n){"use strict";var l=n(85893),a=n(67294),o=n(16856),r=n.n(o),i=n(94184),s=n.n(i);let c=e=>{var t;let n=null!==(t=e.codeMap)&&void 0!==t?t:new Map,o=(0,a.useMemo)(()=>{var e,t,l;return'\n      <html lang="en">\n      <head>\n          <meta charset="UTF-8">\n          <meta name="apple-mobile-web-app-title" content="code preview">\n          <title>code preview</title>\n          <style>\n            * {\n              margin: 0;\n              padding: 0;\n            }\n            body {\n              width: 100vw;\n              height: 100vh;\n            }\n          </style>\n          <style>\n          '.concat(null!==(e=n.get("css"))&&void 0!==e?e:"",'\n          </style>\n\n          <script>\n          window.console = window.console || function(t) {};\n          </script>\n\n          <script>\n          if (document.location.search.match(/type=embed/gi)) {\n              window.parent.postMessage("resize", "*");\n          }\n          </script>\n\n      </head>\n\n      <body translate="no">\n          ').concat(null!==(t=n.get("html"))&&void 0!==t?t:"","\n          <script>\n          ").concat(null!==(l=n.get("javascript"))&&void 0!==l?l:"","\n          </script>\n      </body>\n      </html>\n    ")},[n]);return(0,l.jsx)("iframe",{width:"100%",srcDoc:o,title:"code preview",sandbox:"allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation",allow:"accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share",scrolling:"auto",allowTransparency:!0,allowFullScreen:!0,className:s()(r().iframe,e.className),loading:"lazy",frameBorder:"none"})};t.Z=(0,a.memo)(c)},2620:function(e){e.exports={"resizable-handle":"style_resizable-handle__DFQrT",box:"style_box__gIe6U","box-header":"style_box-header__7Dg1_","box-header-right":"style_box-header-right__Zb7s8","box-body":"style_box-body___WiYx"}},21779:function(e){e.exports={"code-div":"style_code-div__3_lvb"}},37761:function(e){e.exports={"code-editor":"style_code-editor__Yc3lP"}},23337:function(e){e.exports={"editor-resizer-item":"style_editor-resizer-item__CtKZZ","editor-resizer-item-h":"style_editor-resizer-item-h__yqov3"}},63602:function(e){e.exports={editor:"style_editor__33L3Y","code-div":"style_code-div__AyOuR","iframe-div":"style_iframe-div__VbyrP","preview-iframe":"style_preview-iframe__ri7D3"}},16856:function(e){e.exports={iframe:"style_iframe__kw_S7"}}},function(e){e.O(0,[611,762,504,774,888,179],function(){return e(e.s=90362)}),_N_E=e.O()}]);