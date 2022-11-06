(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{43916:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(50165)}])},57023:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return E},default:function(){return H}});var n=a(14924),s=a(85893),r=a(67294),i=a(41664),l=a.n(i),c=a(27484),o=a.n(c),d=a(72478),p=a.n(d),h=a(27049);class g extends r.Component{render(){let{data:e}=this.props;return(0,s.jsx)("div",{className:p().card,style:this.props.style||{},children:(0,s.jsxs)(l(),{href:"/blog/".concat(e.id),passHref:!0,target:"_blank",title:e.name,rel:"bookmark",children:[e.headerImg?(0,s.jsx)("img",{className:p()["repo-pic"],src:"".concat(e.headerImg,"!/fh/114"),alt:e.name,loading:"lazy"}):null,(0,s.jsxs)("div",{className:p()["repo-header-wrap"],children:[(0,s.jsx)("div",{className:p()["repo-header"],children:(0,s.jsx)("h1",{className:p()["repo-title"],children:e.name})}),(0,s.jsx)("p",{className:p()["repo-desc"],children:e.description||e.content.substr(0,400)}),(0,s.jsxs)("div",{className:p()["repo-meta"],children:[(0,s.jsx)("div",{className:p()["info-block"],children:this.renderMetaInfo()}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:p()["info-block"]})})]})]})]})})}constructor(...e){super(...e),(0,n.Z)(this,"handleConfirm",()=>{let{onDelete:e,data:t}=this.props;e&&e(t.id)}),(0,n.Z)(this,"renderMetaInfo",()=>{let{data:e}=this.props,t=[];return t.push("发布于: ".concat(o()(e.createTime).format("YYYY-MM-DD"))),Array.isArray(e.tags)&&e.tags.length&&t.push("标签: ".concat(e.tags.join("，"))),t.map((e,a)=>a===t.length-1?e:(0,s.jsxs)(s.Fragment,{children:[e,(0,s.jsx)(h.Z,{type:"vertical"})]}))})}}let u=e=>{var t;return e?{...e,tags:null!==(t=null==e?void 0:e.tags)&&void 0!==t?t:[],description:e.description?e.description:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(e=e||"").replace(/```/g,"").replace(/`/g,"").replace(/#/g,"").replace(/\/\//g,"").replace("> ","").replace(/\*\*/g,"")}(e.content?e.content.substr(0,200):"")}:{}},_=e=>{let t=u(e);return t.content="",t};var m=a(59857);let f="id ValueType.nin ('".concat("dcf7735f-1932-45d0-bce2-f28d4f4f31d1,3f166e04-5e23-47c4-a8bb-c9e6c812ba34","')"),y={getArticleList:async function(){let{pageNo:e=1,pageSize:t=10}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return await (0,m.ZP)({method:"post",url:"graphql/checkless/list",data:{query:"{\n                Article(pageNo: ".concat(e,", pageSize: ").concat(t,', sorts: "-updateTime,-createTime", queryStr: "').concat(f,'") {\n                  data {\n                    id\n                    name\n                    description\n                    content\n                    isDeleted\n                    createTime\n                    updateTime\n                    likeCount\n                    viewCount\n                    operatorID\n                    tags\n                    creativeType\n                    headerImg\n                    operator {\n                      id\n                      name\n                    }\n                  }\n                  count\n                  pageSize,\n                  pageNo\n                }\n              }\n              ')}})},getLatestArticleList:async function(){let{pageNo:e=1,pageSize:t=10}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return await (0,m.ZP)({method:"post",url:"graphql/checkless/list",data:{query:"{\n                Article(pageNo: ".concat(e,", pageSize: ").concat(t,', sorts: "-createTime", queryStr: "').concat(f,'") {\n                  data {\n                    id\n                    name\n                  }\n                }\n              }\n              ')}})},getChecklessArticle:async e=>await (0,m.ZP)({method:"post",url:"/graphql/checkless",data:{query:'{\n          Article(id: "'.concat(e,'") {\n            id\n            name\n            content\n            category {\n              id\n              name\n            }\n            description\n            isDeleted\n            createTime\n            updateTime\n            likeCount\n            viewCount\n            operatorID\n            tags\n            headerImg\n            creativeType\n            operator {\n              id\n              name\n              avatar\n              description\n              github\n            }\n          }\n        }\n        ')}}),getLatestArticleListByOperator:async function(){let{pageNo:e=1,pageSize:t=5,operatorID:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return await (0,m.ZP)({method:"post",url:"graphql/checkless/list",data:{query:"{\n                Article(pageNo: ".concat(e,", pageSize: ").concat(t,', sorts: "-createTime", queryStr: "operator.id ValueType.eq \'').concat(a,"' and ").concat(f,'") {\n                  data {\n                    id\n                    name\n                  }\n                }\n              }\n              ')}})}};var b=a(16536),N=a(45578),j=a.n(N),x=a(23279),v=a.n(x),S=a(23131),w=a.n(S),k=a(39489),A=a.n(k);let C=(0,r.memo)(e=>{let{list:t=[]}=e;return(0,s.jsxs)("div",{className:A()["latest-article"],children:[(0,s.jsx)("h3",{className:A()["latest-article-header"],children:"最新文章"}),(0,s.jsx)("div",{className:A()["latest-article-list"],children:t.map(e=>(0,s.jsx)(l(),{href:"/blog/".concat(e.id),passHref:!0,target:"_blank",className:A().article,title:e.name,children:e.name},e.id))})]})});var I=a(98845),T=a.n(I);let R=(0,r.memo)(()=>(0,s.jsxs)("div",{className:T().siteInfo,children:[(0,s.jsx)("div",{className:T()["siteInfo-item"],children:"邮箱：1061225829@qq.com"}),(0,s.jsx)("div",{className:T()["siteInfo-item"],children:(0,s.jsx)(l(),{href:"https://beian.miit.gov.cn/",passHref:!0,target:"_blank",className:T().beian,children:"蜀ICP备19030923号-1"})}),(0,s.jsxs)("div",{className:T()["siteInfo-item"],children:["Copyright \xa9 ",new Date().getFullYear()," All Rights Reserved."]})]}));var q=a(36964),Z=a(80129),z=a.n(Z),P=a(11163),D=a(4298),O=a.n(D);class Y extends r.Component{componentDidMount(){}componentWillUnmount(){}render(){let{blogs:e=[],latestBlogs:t=[],total:a,current:n}=this.props;return(0,s.jsxs)("div",{className:w().blog,children:[(0,s.jsxs)("div",{className:w()["blog-content"],ref:this.contentRef,children:[e.map(e=>(0,s.jsx)(g,{data:e},e.id)),(0,s.jsx)(O(),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6887995008287565",crossOrigin:"anonymous",strategy:"lazyOnload"}),(0,s.jsx)("ins",{className:"adsbygoogle",style:{display:"block",height:"100px"},"data-ad-format":"fluid","data-ad-layout-key":"-fb+5w+4e-db+86","data-ad-client":"ca-pub-6887995008287565","data-ad-slot":"7687416506"}),(0,s.jsx)("div",{className:w().pagination,children:(0,s.jsx)(q.Z,{showQuickJumper:!0,showSizeChanger:!1,current:+n,total:a,itemRender:this.itemRender,onChange:this.onChange})})]}),(0,s.jsxs)("div",{className:w()["blog-sidebar"],children:[(0,s.jsx)(C,{list:t}),(0,s.jsx)(R,{})]})]})}constructor(e){super(e),(0,n.Z)(this,"contentRef",(0,r.createRef)()),(0,n.Z)(this,"listRef",(0,r.createRef)()),(0,n.Z)(this,"handleScroll",v()(e=>{let{loading:t,count:a,blogs:n=[]}=this.state,s=document.getElementById("layout");!t&&n.length!==a&&Math.ceil(s.clientHeight+s.scrollTop)>=s.scrollHeight&&this.handlePageChange()},100)),(0,n.Z)(this,"handlePageChange",async()=>{this.setState({loading:!0});try{let{pageSize:e}=this.state,t=this.state.current+1,a=await y.getArticleList({pageNo:t,pageSize:e}),n=a.data.Article.data.map(e=>_(e));this.setState({blogs:j()([...this.state.blogs,...n],"id"),current:t,pageNo:a.data.Article.pageNo,count:a.data.Article.count,pageSize:a.data.Article.pageSize})}catch(s){console.log(s),b.ZP.error(s.toString())}finally{this.setState({loading:!1})}}),(0,n.Z)(this,"itemRender",(e,t,a)=>"page"===t?(0,s.jsx)(l(),{href:"/blogs/".concat(e),passHref:!0,rel:"/blogs/".concat(e),children:e}):a),(0,n.Z)(this,"onChange",e=>{window.open("/blogs/".concat(e),"_self")});let{router:t,router:{asPath:a}}=e,i=z().parse(a.split("?")[1]);this.state={pageSize:this.props.pageSize||10,pageNo:this.props.pageNo||0,loading:!1,current:i.current?Number(i.current):1}}}var E=!0,H=(0,P.withRouter)(Y)},66038:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return s}});var n=a(57023),s=!0;t.default=n.default},50165:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return s}});var n=a(66038),s=!0;t.default=n.default},72478:function(e){e.exports={card:"style_card__JoJfp","repo-pic":"style_repo-pic__oNii0","repo-header-wrap":"style_repo-header-wrap__JfL5Y","repo-header":"style_repo-header__897pc","repo-type":"style_repo-type__jORkS","repo-title":"style_repo-title__2TdDF","repo-desc":"style_repo-desc__lVuzw","repo-meta":"style_repo-meta__12Inj","info-block":"style_info-block__WSuVj",actions:"style_actions__XU5_j"}},39489:function(e){e.exports={"latest-article":"style_latest-article__uoq1o","latest-article-header":"style_latest-article-header__Fv_RR","latest-article-list":"style_latest-article-list__gPOXM",article:"style_article__ofw7t"}},98845:function(e){e.exports={siteInfo:"style_siteInfo__o9ni_","siteInfo-item":"style_siteInfo-item__jVE_R",beian:"style_beian__p5RBY"}},23131:function(e){e.exports={blog:"style_blog__CsAHO","blog-content":"style_blog-content__9AAS6","blog-sidebar":"style_blog-sidebar__ff7cY",pagination:"style_pagination__0lgol"}}},function(e){e.O(0,[607,379,774,888,179],function(){return e(e.s=43916)}),_N_E=e.O()}]);