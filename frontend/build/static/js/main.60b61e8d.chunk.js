(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{117:function(e,t,c){},118:function(e,t,c){},120:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(11),s=c.n(r),i=(c(87),c(166)),o=c(16),l=c(14),j=(c(88),c(147)),u=c(149),b=c(151),d=c(152),h=c(2),p=Object(j.a)({component:{background:"#232323",color:"black"},container:{justifyContent:"center","& > *":{padding:20,color:"#eee",textDecoration:"none"}}}),x=function(){var e=p();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u.a,{className:e.component,children:Object(h.jsxs)(b.a,{className:e.container,children:[Object(h.jsx)(o.b,{to:"/",children:Object(h.jsx)(d.a,{children:"HOME"})}),Object(h.jsx)(o.b,{to:"/about",children:Object(h.jsx)(d.a,{children:"ABOUT"})}),Object(h.jsx)(o.b,{to:"/contact",children:Object(h.jsx)(d.a,{children:"CONTACT"})})]})})})},O=c(159),m=Object(j.a)({image:{width:"100%",background:"url(".concat("https://image.freepik.com/free-photo/hacker-working-darkness_53876-94580.jpg",") center/55% repeat-x #000"),height:"50vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& :first-child":{fontSize:70,color:"#FFFFFF",lineHeight:1},"& :last-child":{fontSize:20,background:"#FFFFFF"}}}),f=function(){var e=m();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(i.a,{className:e.image,children:[Object(h.jsx)(d.a,{children:"BLOG"}),Object(h.jsx)(d.a,{children:"Welcome to Anonymous Blog"})]})})},g=c(153),v=c(154),w=c(155),y=c(156),N=c(157),k=c(158),F=["Music","Movies","Sports","Tech","Fashion","Others"],S=Object(j.a)({create:{margin:20,background:"blue",color:"#fff"},table:{border:"1px solid rgba(224,224,224,1)"},link:{textDecoration:"none",color:"interit","&:hover":{cursor:"pointer"}},hov:{"&:hover":{background:"#232323",color:"#eee"}}}),C=function(){var e=S();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.b,{to:"/create",className:e.link,children:Object(h.jsx)(g.a,{variant:"contained",className:e.create,children:"Create a Blog"})}),Object(h.jsxs)(v.a,{className:e.table,children:[Object(h.jsx)(w.a,{children:Object(h.jsx)(y.a,{children:Object(h.jsx)(N.a,{className:e.hov,children:Object(h.jsx)(o.b,{to:"/",className:e.link,children:Object(h.jsx)("b",{children:"All Catagories"})})})})}),Object(h.jsx)(k.a,{children:F.map((function(t){return Object(h.jsx)(y.a,{children:Object(h.jsx)(N.a,{className:e.hov,children:Object(h.jsx)(o.b,{to:"/?category=".concat(t),className:e.link,children:Object(h.jsx)("b",{children:t})})})})}))})]})]})},A=c(7),T=c(13),I=c(15),D=Object(j.a)({container:{border:"1px solid #d3cede",borderRadius:10,margin:10,display:"flex",alignItems:"center",flexDirection:"column",height:350,"& > *":{padding:"0 5px 5px 5px"},"&:hover":{background:"#232323",color:"white"}},image:{width:"100%",objectFit:"cover",borderRadius:"10px 10px 0 0",height:150},textColor:{color:"#878787",fontSize:12},heading:{fontSize:18,fontWeight:600,textAlign:"center",color:"#eee"},detail:{fontSize:14,wordBreak:"break-word",color:"#eee"}}),E=function(e){var t=e.post,c=D(),n=t.picture||"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",a=function(e,t){return e.length>t?e.substring(0,t)+"...":e};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(i.a,{className:c.container,children:[Object(h.jsx)("img",{src:n,alt:"wrapper",className:c.image}),Object(h.jsx)(d.a,{className:c.textColor,children:t.categories}),Object(h.jsx)(d.a,{className:c.heading,children:a(t.title,20)}),Object(h.jsxs)(d.a,{className:c.textColor,children:["Author : ",t.username," "]}),Object(h.jsx)(d.a,{className:c.detail,children:a(t.description,150)})]})})},M=c(35),P=c.n(M),z="",B=function(){var e=Object(T.a)(Object(A.a)().mark((function e(t){return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post("".concat(z,"/create"),t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Error while calling createPost API ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(T.a)(Object(A.a)().mark((function e(t){return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,P.a.post("".concat(z,"/contact/createcontact"),t);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error while calling createPost API ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(T.a)(Object(A.a)().mark((function e(t){var c;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("".concat(z,"/posts").concat(t));case 3:return c=e.sent,e.abrupt("return",c.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error while calling getPosts API ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(T.a)(Object(A.a)().mark((function e(t){var c;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("".concat(z,"/posts/").concat(t));case 3:return c=e.sent,e.abrupt("return",c.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error while calling getPosts API ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(T.a)(Object(A.a)().mark((function e(t,c){return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post("".concat(z,"/update/").concat(t),c);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error while calling the updatePost API ",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,c){return e.apply(this,arguments)}}(),q=function(){var e=Object(T.a)(Object(A.a)().mark((function e(t){return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.delete("".concat(z,"/delete/").concat(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error while calling the deletePost API ",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(T.a)(Object(A.a)().mark((function e(t){return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,P.a.post("".concat(z,"/file/upload"),t);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),console.log("Error while calling uploadFile API ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(n.useState)([]),t=Object(I.a)(e,2),c=t[0],a=t[1],r=Object(l.g)().search;return Object(n.useEffect)((function(){var e=function(){var e=Object(T.a)(Object(A.a)().mark((function e(){var t;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(r);case 2:t=e.sent,a(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),c.map((function(e){return Object(h.jsx)(O.a,{lg:3,xs:12,sm:4,children:Object(h.jsx)(o.b,{to:"/details/".concat(e._id),style:{textDecoration:"none",color:"inherit"},children:Object(h.jsx)(E,{post:e})})})}))},G=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),Object(h.jsxs)(O.a,{container:!0,children:[Object(h.jsx)(O.a,{item:!0,lg:2,xs:12,sm:2,children:Object(h.jsx)(C,{})}),Object(h.jsx)(O.a,{container:!0,item:!0,xs:12,sm:10,lg:10,children:Object(h.jsx)(_,{})})]})]})},J=c(10),Y=c(160),K=c(161),Q=Object(j.a)((function(e){return{container:Object(J.a)({margin:"50px 100px"},e.breakpoints.down("md"),{margin:0}),image:{width:"100%",height:"50vh",objectFit:"cover"},icons:{float:"right"},icon:{margin:5,padding:5,border:"1px solid #878787",borderRadius:5,height:"35px",width:"35px","&:hover":{cursor:"pointer"}},heading:{fontSize:38,fontWeight:600,textAlign:"center",margin:"50px 0 10px 0",color:"#eee"},subheading:Object(J.a)({display:"flex",margin:"20px 10px"},e.breakpoints.down("sm"),{display:"block"}),author:Object(J.a)({color:"#878787",display:"flex",margin:"0px 0"},e.breakpoints.down("sm"),{display:"block"}),link:{textDecoration:"none",color:"inherit"}}})),V=function(e){var t=e.match,c=Q(),a=Object(n.useState)({}),r=Object(I.a)(a,2),s=r[0],j=r[1],u=Object(l.f)();Object(n.useEffect)((function(){var e=function(){var e=Object(T.a)(Object(A.a)().mark((function e(){var c;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t.params.id);case 2:c=e.sent,j(c),console.log(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var b=function(){var e=Object(T.a)(Object(A.a)().mark((function e(){return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(s._id);case 2:u.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(i.a,{className:c.container,children:[Object(h.jsx)("img",{src:s.picture||"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",alt:"first",className:c.image}),Object(h.jsxs)(i.a,{className:c.icons,children:[Object(h.jsx)(o.b,{to:"/update/".concat(s._id),className:c.link,children:Object(h.jsx)(Y.a,{className:c.icon,color:"primary"})}),Object(h.jsx)(K.a,{onClick:function(){return b()},className:c.icon,color:"error"})]}),Object(h.jsx)(d.a,{className:c.heading,children:s.title}),Object(h.jsxs)(i.a,{className:c.subheading,children:[Object(h.jsx)(o.b,{to:"/?username=".concat(s.username),className:c.link,children:Object(h.jsxs)(d.a,{className:c.author,children:["Author :",Object(h.jsxs)("span",{style:{fontWeight:600},children:[" ",s.username]})]})}),Object(h.jsx)(d.a,{style:{marginLeft:"auto",color:"#eee"},children:new Date(s.createDate).toDateString()})]}),Object(h.jsx)(d.a,{style:{color:"#eee"},children:s.description})]})})},X=c(29),Z=c(162),$=c(164),ee=c(167),te=c(165),ce=c(168),ne=c(123),ae=c(163),re=Object(j.a)((function(e){return{container:Object(J.a)({margin:"50px 100px"},e.breakpoints.down("md"),{margin:0}),image:{width:"100%",height:"48vh",objectFit:"cover"},form:{display:"flex",flexDirection:"row",marginTop:10},textField:{flex:1,margin:"0 30px",fontSize:25,background:"#eee",borderRadius:"5px"},textarea:{width:"100%",border:"none",marginTop:50,fontSize:18,borderRadius:"5px","&:focus-visible":{outline:"none"}}}})),se={title:"",description:"",picture:"",username:"Anonymous",categories:"All",createDate:new Date},ie=function(){var e=re(),t=Object(n.useState)(se),c=Object(I.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),o=Object(I.a)(s,2),j=o[0],u=o[1],b=Object(n.useState)(""),d=Object(I.a)(b,2),p=(d[0],d[1]),x=Object(l.f)(),O=a.picture?a.picture:"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";Object(n.useEffect)((function(){var e=function(){var e=Object(T.a)(Object(A.a)().mark((function e(){var t,c;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=9;break}return(t=new FormData).append("name",j.name),t.append("file",j),e.next=6,U(t);case 6:c=e.sent,a.picture=c.data,p(c.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[j]);var m=function(){var e=Object(T.a)(Object(A.a)().mark((function e(){return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(a);case 2:x.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){r(Object(X.a)(Object(X.a)({},a),{},Object(J.a)({},e.target.name,e.target.value)))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(i.a,{className:e.container,children:[Object(h.jsx)("img",{src:O,className:e.image,alt:"banner"}),Object(h.jsxs)(Z.a,{className:e.form,children:[Object(h.jsx)("label",{htmlFor:"fileInput",children:Object(h.jsx)(ae.a,{fontSize:"large",style:{color:"white"}})}),Object(h.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){u(e.target.files[0])}}),Object(h.jsx)($.a,{onChange:function(e){return f(e)},placeholder:"Title",className:e.textField,name:"title"}),Object(h.jsx)(g.a,{onClick:function(){return m()},variant:"contained",color:"primary",children:"PUBLISH"})]}),Object(h.jsx)(i.a,{sx:{minWidth:120,marginTop:"1%",borderBottom:"2px solid white",color:"white"},children:Object(h.jsxs)(Z.a,{fullWidth:!0,children:[Object(h.jsx)(ee.a,{id:"demo-simple-select-label",style:{color:"white"},children:"Categories(Select One)"}),Object(h.jsxs)(te.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Age",onChange:function(e){return f(e)},name:"categories",children:[Object(h.jsx)(ce.a,{value:"Music",children:" Music "}),Object(h.jsx)(ce.a,{value:"Movies",children:" Movies "}),Object(h.jsx)(ce.a,{value:"Sports",children:" Sports "}),Object(h.jsx)(ce.a,{value:"Tech",children:" Tech "}),Object(h.jsx)(ce.a,{value:"Fashion",children:" Fashion "}),Object(h.jsx)(ce.a,{value:"Others",children:" Others "})]})]})}),Object(h.jsx)(ne.a,{onChange:function(e){return f(e)},rowsMin:5,placeholder:"Tell your Story...",className:e.textarea,name:"description"})]})})},oe=Object(j.a)((function(e){return{container:Object(J.a)({margin:"50px 100px"},e.breakpoints.down("md"),{margin:0}),image:{width:"100%",height:"50vh",objectFit:"cover"},form:{display:"flex",flexDirection:"row",marginTop:10},textField:{flex:1,margin:"0 30px",fontSize:25,background:"#eee",borderRadius:"5px"},textarea:{width:"100%",border:"none",marginTop:50,fontSize:18,borderRadius:"5px","&:focus-visible":{outline:"none"}}}})),le={title:"",description:"",picture:"",username:"Anonymous",categories:"",createDate:new Date},je=function(e){var t=e.match,c=oe(),a=Object(n.useState)(le),r=Object(I.a)(a,2),s=r[0],o=r[1],j=Object(n.useState)(""),u=Object(I.a)(j,2),b=u[0],d=u[1],p=Object(n.useState)(""),x=Object(I.a)(p,2),O=(x[0],x[1]),m=Object(l.f)(),f=s.picture?s.picture:"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";Object(n.useEffect)((function(){var e=function(){var e=Object(T.a)(Object(A.a)().mark((function e(){var t,c;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=9;break}return(t=new FormData).append("name",b.name),t.append("file",b),e.next=6,U(t);case 6:c=e.sent,s.picture=c.data,O(c.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[b]),Object(n.useEffect)((function(){var e=function(){var e=Object(T.a)(Object(A.a)().mark((function e(){var c;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t.params.id);case 2:c=e.sent,o(c),console.log(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var v=function(e){o(Object(X.a)(Object(X.a)({},s),{},Object(J.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(T.a)(Object(A.a)().mark((function e(){return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t.params.id,s);case 2:m.push("/details/".concat(t.params.id));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(i.a,{className:c.container,children:[Object(h.jsx)("img",{src:f,className:c.image,alt:"banner"}),Object(h.jsxs)(Z.a,{className:c.form,children:[Object(h.jsx)("label",{htmlFor:"fileInput",children:Object(h.jsx)(ae.a,{fontSize:"large",style:{color:"white"}})}),Object(h.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){d(e.target.files[0])}}),Object(h.jsx)($.a,{placeholder:"Title",name:"title",value:s.title,className:c.textField,onChange:function(e){return v(e)}}),Object(h.jsx)(g.a,{onClick:function(){return w()},variant:"contained",color:"primary",children:"Update"})]}),Object(h.jsx)(i.a,{sx:{minWidth:120,marginTop:"1%",borderBottom:"2px solid white",color:"white"},children:Object(h.jsxs)(Z.a,{fullWidth:!0,children:[Object(h.jsxs)(ee.a,{id:"demo-simple-select-label",style:{color:"white"},children:[" ","".concat(s.categories)||"Categories"]}),Object(h.jsxs)(te.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Age",onChange:function(e){return v(e)},name:"categories",children:[Object(h.jsx)(ce.a,{value:"Music",children:" Music "}),Object(h.jsx)(ce.a,{value:"Movies",children:" Movies "}),Object(h.jsx)(ce.a,{value:"Sports",children:" Sports "}),Object(h.jsx)(ce.a,{value:"Tech",children:" Tech "}),Object(h.jsx)(ce.a,{value:"Fashion",children:" Fashion "}),Object(h.jsx)(ce.a,{value:"Others",children:" Others "})]})]})}),Object(h.jsx)(ne.a,{rowsMin:5,placeholder:"Tell your Story...",className:c.textarea,value:s.description,onChange:function(e){return v(e)},name:"description"})]})})},ue=(c(117),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"background",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{className:"head",children:"This is Anonymous BLOG! "})," ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{className:"head",children:"Here you can post your Blog Anonymously  "})," ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{className:"head",children:"You can select your desired Categories and post your Blog "})," ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{className:"head",children:"Welcome \ud83d\udc7f "})," ",Object(h.jsx)("br",{})]})})}),be=(c(118),c(119),{name:"",email:"",subject:"",message:""}),de=function(){var e=Object(n.useState)(be),t=Object(I.a)(e,2),c=t[0],a=t[1],r=Object(l.f)(),s=function(){var e=Object(T.a)(Object(A.a)().mark((function e(){return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(c);case 2:r.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(e){a(Object(X.a)(Object(X.a)({},c),{},Object(J.a)({},e.target.name,e.target.value)))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container matp",children:Object(h.jsx)("div",{className:"row ",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)("h2",{className:"title",children:"CONTACT US"}),Object(h.jsx)("p",{className:"para",children:"Let us know what you think! In order to provide better service, please do not hesitate to give us your feedback. Thank you."}),Object(h.jsx)("hr",{style:{color:"#eee"}}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("input",{placeholder:"Name",id:"name",type:"text",onChange:function(e){return i(e)},className:"form-control",name:"name",required:!0})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("input",{placeholder:"Email",id:"email",type:"email",className:"form-control","aria-describedby":"emailHelp",name:"email",onChange:function(e){return i(e)},required:!0})})]})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{placeholder:"Subject",id:"subject",type:"text",onChange:function(e){return i(e)},className:"form-control",name:"subject",required:!0})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("textarea",{placeholder:"Message",id:"message",onChange:function(e){return i(e)},className:"form-control",rows:"1",name:"message",required:!0})}),Object(h.jsx)("button",{type:"submit",onClick:function(){return s()},className:"btn btn-outline-success submit",children:Object(h.jsx)("b",{children:"Submit"})})]})})})})})})};var he=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(i.a,{style:{marginTop:64},children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:G}),Object(h.jsx)(l.a,{exact:!0,path:"/about",component:ue}),Object(h.jsx)(l.a,{exact:!0,path:"/contact",component:de}),Object(h.jsx)(l.a,{exact:!0,path:"/details/:id",component:V}),Object(h.jsx)(l.a,{exact:!0,path:"/create",component:ie}),Object(h.jsx)(l.a,{exact:!0,path:"/update/:id",component:je})]})})]})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(he,{})}),document.getElementById("root"))},87:function(e,t,c){},88:function(e,t,c){}},[[120,1,2]]]);
//# sourceMappingURL=main.60b61e8d.chunk.js.map