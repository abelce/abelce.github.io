(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{88327:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/[page]",function(){return n(57023)}])},57023:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return M},default:function(){return H}});var a=n(14924),s=n(85893),i=n(67294),r=n(41664),l=n.n(r),o=n(27484),c=n.n(o),d=n(72478),p=n.n(d),h=n(27049);class g extends i.Component{render(){let{data:e}=this.props;return(0,s.jsx)("div",{className:p().card,style:this.props.style||{},children:(0,s.jsxs)(l(),{href:"/blog/".concat(e.id),passHref:!0,target:"_blank",title:e.name,rel:"bookmark",children:[(0,s.jsx)("div",{className:p()["repo-header"],children:(0,s.jsx)("h1",{className:p()["repo-title"],children:e.name})}),(0,s.jsx)("p",{className:p()["repo-desc"],children:e.description||e.content.substr(0,400)}),(0,s.jsxs)("div",{className:p()["repo-meta"],children:[(0,s.jsx)("div",{className:p()["info-block"],children:this.renderMetaInfo()}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:p()["info-block"]})})]})]})})}constructor(...e){super(...e),(0,a.Z)(this,"handleConfirm",()=>{let{onDelete:e,data:t}=this.props;e&&e(t.id)}),(0,a.Z)(this,"renderMetaInfo",()=>{let{data:e}=this.props,t=[];return t.push("发布于: ".concat(c()(e.createTime).format("YYYY-MM-DD"))),Array.isArray(e.tags)&&e.tags.length&&t.push("标签: ".concat(e.tags.join("，"))),t.map((e,n)=>n===t.length-1?e:(0,s.jsxs)(s.Fragment,{children:[e,(0,s.jsx)(h.Z,{type:"vertical"})]}))})}}let u=e=>{var t;return e?{...e,tags:null!==(t=null==e?void 0:e.tags)&&void 0!==t?t:[],description:e.description?e.description:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(e=e||"").replace(/```/g,"").replace(/`/g,"").replace(/#/g,"").replace(/\/\//g,"").replace("> ","").replace(/\*\*/g,"")}(e.content?e.content.substr(0,200):"")}:{}},_=e=>{let t=u(e);return t.content="",t};var m=n(59857);let f="id ValueType.nin ('".concat("dcf7735f-1932-45d0-bce2-f28d4f4f31d1,3f166e04-5e23-47c4-a8bb-c9e6c812ba34","')"),y={getArticleList:async function(){let{pageNo:e=1,pageSize:t=10}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return await (0,m.ZP)({method:"post",url:"graphql/checkless/list",data:{query:"{\n                Article(pageNo: ".concat(e,", pageSize: ").concat(t,', sorts: "-updateTime,-createTime", queryStr: "').concat(f,'") {\n                  data {\n                    id\n                    name\n                    description\n                    content\n                    isDeleted\n                    createTime\n                    updateTime\n                    likeCount\n                    viewCount\n                    operatorID\n                    tags\n                    creativeType\n                    operator {\n                      id\n                      name\n                    }\n                  }\n                  count\n                  pageSize,\n                  pageNo\n                }\n              }\n              ')}})},getLatestArticleList:async function(){let{pageNo:e=1,pageSize:t=10}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return await (0,m.ZP)({method:"post",url:"graphql/checkless/list",data:{query:"{\n                Article(pageNo: ".concat(e,", pageSize: ").concat(t,', sorts: "-createTime", queryStr: "').concat(f,'") {\n                  data {\n                    id\n                    name\n                  }\n                }\n              }\n              ')}})},getChecklessArticle:async e=>await (0,m.ZP)({method:"post",url:"/graphql/checkless",data:{query:'{\n          Article(id: "'.concat(e,'") {\n            id\n            name\n            content\n            category {\n              id\n              name\n            }\n            description\n            isDeleted\n            createTime\n            updateTime\n            likeCount\n            viewCount\n            operatorID\n            tags\n            headerImg\n            creativeType\n            operator {\n              id\n              name\n              avatar\n              description\n              github\n            }\n          }\n        }\n        ')}}),getLatestArticleListByOperator:async function(){let{pageNo:e=1,pageSize:t=5,operatorID:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return await (0,m.ZP)({method:"post",url:"graphql/checkless/list",data:{query:"{\n                Article(pageNo: ".concat(e,", pageSize: ").concat(t,', sorts: "-createTime", queryStr: "operator.id ValueType.eq \'').concat(n,"' and ").concat(f,'") {\n                  data {\n                    id\n                    name\n                  }\n                }\n              }\n              ')}})}};var b=n(16536),j=n(45578),x=n.n(j),N=n(23279),v=n.n(N),k=n(23131),S=n.n(k),w=n(39489),A=n.n(w);let C=(0,i.memo)(e=>{let{list:t=[]}=e;return(0,s.jsxs)("div",{className:A()["latest-article"],children:[(0,s.jsx)("h3",{className:A()["latest-article-header"],children:"最新文章"}),(0,s.jsx)("div",{className:A()["latest-article-list"],children:t.map(e=>(0,s.jsx)(l(),{href:"/blog/".concat(e.id),passHref:!0,target:"_blank",className:A().article,title:e.name,children:e.name},e.id))})]})});var T=n(98845),I=n.n(T);let R=(0,i.memo)(()=>(0,s.jsxs)("div",{className:I().siteInfo,children:[(0,s.jsx)("div",{className:I()["siteInfo-item"],children:"邮箱：1061225829@qq.com"}),(0,s.jsx)("div",{className:I()["siteInfo-item"],children:"蜀ICP备19030923号-1"}),(0,s.jsx)("div",{className:I()["siteInfo-item"],children:"Copyright \xa9 2022 All Rights Reserved."})]}));var q=n(36964),Z=n(80129),z=n.n(Z),P=n(11163),D=n(4298),O=n.n(D);class E extends i.Component{componentDidMount(){}componentWillUnmount(){}render(){let{blogs:e=[],latestBlogs:t=[],total:n,current:a}=this.props;return(0,s.jsxs)("div",{className:S().blog,children:[(0,s.jsxs)("div",{className:S()["blog-content"],ref:this.contentRef,children:[e.map(e=>(0,s.jsx)(g,{data:e},e.id)),(0,s.jsx)(O(),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6887995008287565",crossOrigin:"anonymous",strategy:"lazyOnload"}),(0,s.jsx)("ins",{className:"adsbygoogle",style:{display:"block",height:"100px"},"data-ad-format":"fluid","data-ad-layout-key":"-fb+5w+4e-db+86","data-ad-client":"ca-pub-6887995008287565","data-ad-slot":"7687416506"}),(0,s.jsx)("div",{className:S().pagination,children:(0,s.jsx)(q.Z,{showQuickJumper:!0,showSizeChanger:!1,current:+a,total:n,itemRender:this.itemRender,onChange:this.onChange})})]}),(0,s.jsxs)("div",{className:S()["blog-sidebar"],children:[(0,s.jsx)(C,{list:t}),(0,s.jsx)(R,{})]})]})}constructor(e){super(e),(0,a.Z)(this,"contentRef",(0,i.createRef)()),(0,a.Z)(this,"listRef",(0,i.createRef)()),(0,a.Z)(this,"handleScroll",v()(e=>{let{loading:t,count:n,blogs:a=[]}=this.state,s=document.getElementById("layout");!t&&a.length!==n&&Math.ceil(s.clientHeight+s.scrollTop)>=s.scrollHeight&&this.handlePageChange()},100)),(0,a.Z)(this,"handlePageChange",async()=>{this.setState({loading:!0});try{let{pageSize:e}=this.state,t=this.state.current+1,n=await y.getArticleList({pageNo:t,pageSize:e}),a=n.data.Article.data.map(e=>_(e));this.setState({blogs:x()([...this.state.blogs,...a],"id"),current:t,pageNo:n.data.Article.pageNo,count:n.data.Article.count,pageSize:n.data.Article.pageSize})}catch(s){console.log(s),b.ZP.error(s.toString())}finally{this.setState({loading:!1})}}),(0,a.Z)(this,"itemRender",(e,t,n)=>"page"===t?(0,s.jsx)(l(),{href:"/blogs/".concat(e),passHref:!0,rel:"/blogs/".concat(e),children:e}):n),(0,a.Z)(this,"onChange",e=>{window.open("/blogs/".concat(e),"_self")});let{router:t,router:{asPath:n}}=e,r=z().parse(n.split("?")[1]);this.state={pageSize:this.props.pageSize||10,pageNo:this.props.pageNo||0,loading:!1,current:r.current?Number(r.current):1}}}var M=!0,H=(0,P.withRouter)(E)},72478:function(e){e.exports={card:"style_card__JoJfp","repo-pic":"style_repo-pic__oNii0","repo-header":"style_repo-header__897pc","repo-type":"style_repo-type__jORkS","repo-title":"style_repo-title__2TdDF","repo-desc":"style_repo-desc__lVuzw","repo-meta":"style_repo-meta__12Inj","info-block":"style_info-block__WSuVj",actions:"style_actions__XU5_j"}},39489:function(e){e.exports={"latest-article":"style_latest-article__uoq1o","latest-article-header":"style_latest-article-header__Fv_RR","latest-article-list":"style_latest-article-list__gPOXM",article:"style_article__ofw7t"}},98845:function(e){e.exports={siteInfo:"style_siteInfo__o9ni_","siteInfo-item":"style_siteInfo-item__jVE_R",beian:"style_beian__p5RBY"}},23131:function(e){e.exports={blog:"style_blog__CsAHO","blog-content":"style_blog-content__9AAS6","blog-sidebar":"style_blog-sidebar__ff7cY",pagination:"style_pagination__0lgol"}}},function(e){e.O(0,[607,379,774,888,179],function(){return e(e.s=88327)}),_N_E=e.O()}]);