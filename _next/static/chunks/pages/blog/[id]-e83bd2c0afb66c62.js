(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{98129:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});n(67294);var s=n(37870),r=n(85893),a=function(){return(0,r.jsx)(s.Z,{id:"giscus-comments",repo:"abelce/giscus-comments",repoId:"R_kgDOHWXQ-w",category:"Announcements",categoryId:"DIC_kwDOHWXQ-84CPJeQ",mapping:"url",term:"Welcome to @giscus/react component!",reactionsEnabled:"0",emitMetadata:"0",inputPosition:"top",theme:"light",lang:"zh-CN"})}},87554:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var s=n(67294),r=n(47084),a=n.n(r),i=n(61885),o=n.n(i),c=(n(71869),n(94184)),l=n.n(c),d=n(85893),u=new(a().Renderer);function p(e){var t=e.content,n=(0,s.useRef)();return(0,d.jsx)("div",{className:l()(o().marked),children:(0,d.jsx)("div",{ref:n,className:"markdown-body",dangerouslySetInnerHTML:{__html:a().parse(t)}})})}a().setOptions({renderer:u,highlight:function(e,t){var s=n(98128),r=s.getLanguage(t)?t:"plaintext";return s.highlight(r,e).value},pedantic:!1,gfm:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1})},42174:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return q},default:function(){return F}});var s=n(92777),r=n(82262),a=n(45959),i=n(63553),o=n(37247),c=n(67294),l=n(62443),d=n(65400),u=n(74253),p=n(87554),_=n(962),h=n.n(_),m=n(85893);function f(e){var t=e.data;return(0,m.jsxs)("span",{className:h().view,children:[(0,m.jsx)("span",{className:h()["view-title"],children:"\u9605\u8bfb\u91cf "}),(0,m.jsx)("span",{className:h()["view-count"],children:t})]})}var v=n(27484),x=n.n(v),y=n(58780),j=n.n(y),g=n(94184),N=n.n(g),b=n(11163),w=(n(80129),n(83454));var k,Z="\u6587\u94a6\u7684\u4e2a\u4eba\u65e5\u5fd7",R=n(92592),O=function(e){var t=e.content,n=(0,c.useState)(),s=n[0],r=n[1];return(0,c.useEffect)((function(){R.toDataURL(t).then((function(e){r(e)})).catch((function(e){}))}),[t]),(0,m.jsx)("img",{src:s})},C=(0,c.memo)(O);function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,o.Z)(e);if(t){var r=(0,o.Z)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return(0,i.Z)(this,n)}}var I,T=(0,b.withRouter)(k=function(e){(0,a.Z)(n,e);var t=P(n);function n(){var e;(0,s.Z)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).getTime=function(){var t=x()(),n=x()(e.props.data.createTime);t.diff(n,"day");return n.format("YYYY-MM-DD")},e.showOriginalText=function(){var t=e.props.data;return!t.creativeType||"original"===t.creativeType},e.getContent=function(){var t=e.props.data;return t?"html"===t.type?(0,m.jsx)("div",{className:"braft-output-content",dangerouslySetInnerHTML:{__html:t.content}}):(0,m.jsx)(p.Z,{content:t.content||""}):null},e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=(e.currentUser,e.router);return t?(0,m.jsx)("div",{className:j().post_container,children:(0,m.jsx)("div",{className:j().post,children:(0,m.jsxs)("div",{className:j().post_content,children:[(0,m.jsxs)("div",{className:j().post_header,children:[(0,m.jsx)("h1",{className:j().name,title:t.name,children:t.name}),(0,m.jsxs)("div",{className:j()["base-info"],children:[(0,m.jsxs)("span",{className:j().item,children:[(0,m.jsx)("i",{className:N()("iconfont",j()["icon-time"])}),(0,m.jsxs)("span",{children:["\u53d1\u8868\u4e8e\xa0",this.getTime()]}),(0,m.jsx)(u.Z,{type:"vertical"}),(0,m.jsx)(f,{data:t.viewCount})]}),(0,m.jsx)("div",{children:(0,m.jsx)(l.default,{placement:"bottomRight",arrowPointAtCenter:!0,trigger:"click",content:(0,m.jsx)(C,{content:(w.env.isDev?"http://localhost:3000":"https://vwood.xyz")+n.asPath}),children:(0,m.jsx)(d.default,{type:"link",size:"small",children:"\u5206\u4eab"})})})]})]}),t.headerImg?(0,m.jsx)("img",{className:j().post_headerImg,src:t.headerImg,alt:t.name,loading:"lazy"}):null,(0,m.jsx)("div",{className:j().detail_body,children:(0,m.jsxs)("div",{className:j().content,children:[this.getContent(),t.url?(0,m.jsxs)("a",{target:"_blank",href:t.url,children:["\u539f\u6587\u5730\u5740:",t.url]}):null]})}),this.showOriginalText()?(0,m.jsx)("div",{className:j().post_notice,children:"\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e\uff0c\u672c\u6587\u5c31\u4e3a\u539f\u521b\u6587\u7ae0\uff0c\u5982\u6709\u7591\u95ee\uff0c\u6b22\u8fce\u8054\u7cfb\u3002"}):null]})})}):(0,m.jsx)("div",{})}}]),n}(c.Component))||k,E=T,M=(n(587),n(9008)),z=n.n(M),A=n(29323),D=n(98129),L=n(84960),H=n(41664),K=n.n(H),S=n(52046),Y=n.n(S),B=(0,c.memo)((function(e){var t=e.operator,n=void 0===t?{}:t;return(0,m.jsxs)("div",{className:Y().operator,children:[(0,m.jsxs)("div",{className:Y()["operator-header"],children:[(0,m.jsx)("div",{children:(0,m.jsx)(L.ZP,{size:"small",src:null===n||void 0===n?void 0:n.avatar})}),(0,m.jsxs)("div",{className:Y()["operator-header-name-wrapper"],children:[(0,m.jsx)("div",{className:Y()["operator-name"],children:null===n||void 0===n?void 0:n.name}),(0,m.jsx)("div",{className:Y()["operator-description"],title:null===n||void 0===n?void 0:n.description,children:null===n||void 0===n?void 0:n.description})]})]}),(0,m.jsx)(u.Z,{}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:Y().github,children:["Github:\xa0\xa0",(0,m.jsx)(K(),{href:null===n||void 0===n?void 0:n.github,passHref:!0,children:(0,m.jsx)("a",{target:"_blank",children:null===n||void 0===n?void 0:n.github})})]})})]})})),Q=n(83491),V=n.n(Q),X=(0,c.memo)((function(e){var t=e.list,n=void 0===t?[]:t;return(0,m.jsxs)("div",{className:V()["latest-article"],children:[(0,m.jsx)("h3",{className:V()["latest-article-header"],children:"\u6700\u65b0\u6587\u7ae0"}),(0,m.jsx)("div",{className:V()["latest-article-list"],children:n.map((function(e){return(0,m.jsx)(K(),{href:"/blog/".concat(e.id),passHref:!0,children:(0,m.jsx)("a",{target:"_blank",className:V().article,title:e.name,children:e.name})},e.id)}))})]})})),G=n(4298),J=n.n(G);function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,o.Z)(e);if(t){var r=(0,o.Z)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return(0,i.Z)(this,n)}}var W=(0,A.f3)("productStore")(I=(0,A.Pi)(I=function(e){(0,a.Z)(n,e);var t=U(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.url,s=e.latestArticleList,r=void 0===s?[]:s;return t?(0,m.jsxs)("div",{className:j().detail_container,children:[(0,m.jsxs)(z(),{children:[(0,m.jsxs)("title",{children:[t.name," - ",Z]}),(0,m.jsx)("meta",{name:"keywords",content:((null===t||void 0===t?void 0:t.tags)||[]).join(",")}),(0,m.jsx)("meta",{name:"description",content:t.description||t.content.substr(0,100)}),(0,m.jsx)("meta",{property:"og:title",content:"".concat(t.name," - ").concat(Z)}),(0,m.jsx)("meta",{property:"og:url",content:n})]}),(0,m.jsxs)("div",{className:j().main,children:[(0,m.jsxs)("div",{className:j().content,children:[(0,m.jsx)(E,{data:t,currentUser:void 0}),(0,m.jsxs)("div",{className:j().ads,children:[(0,m.jsx)(J(),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6887995008287565",crossOrigin:"anonymous",strategy:"lazyOnload"}),(0,m.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center",height:"100px"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-6887995008287565","data-ad-slot":"2469914690"})]}),(0,m.jsx)("section",{className:j().comments,children:(0,m.jsx)(D.K,{})})]}),(0,m.jsxs)("div",{className:j().sidebar,children:[(0,m.jsx)(B,{operator:t.operator}),(0,m.jsx)(X,{list:r})]})]})]}):null}}]),n}(c.Component))||I)||I,q=!0,F=(0,b.withRouter)(W)},21848:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return n(42174)}])},61885:function(e){e.exports={marked:"style_marked__AZOQ3"}},962:function(e){e.exports={view:"view_view__gVK9p"}},83491:function(e){e.exports={"latest-article":"style_latest-article__hK7d9","latest-article-header":"style_latest-article-header__c8DEW","latest-article-list":"style_latest-article-list__msMMg",article:"style_article__9q3XZ"}},52046:function(e){e.exports={operator:"style_operator__vQh_M","operator-header":"style_operator-header__pJr2j","operator-header-name-wrapper":"style_operator-header-name-wrapper__OcmjB","operator-name":"style_operator-name__uEOGB","operator-description":"style_operator-description__sgYiS",github:"style_github__PVuqC"}},58780:function(e){e.exports={detail_container:"style_detail_container__K7ALK",post_container:"style_post_container__Ayu6o",post:"style_post__dVMJC",post_content:"style_post_content__sRh5M",post_header:"style_post_header__kL41j",name:"style_name__yhPOn","base-info":"style_base-info__fcDVY",item:"style_item__VwCzm",post_headerImg:"style_post_headerImg__8pYfy",operations:"style_operations__NtkzJ",post_notice:"style_post_notice__eruHe",main:"style_main__tK6AF",content:"style_content__Gif1x",sidebar:"style_sidebar__85_45",ads:"style_ads__0jIPf",comments:"style_comments__vfE9U"}},24654:function(){}},function(e){e.O(0,[492,216,982,774,888,179],(function(){return t=21848,e(e.s=t);var t}));var t=e.O();_N_E=t}]);