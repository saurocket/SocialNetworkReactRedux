(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{299:function(t,e,s){"use strict";s.d(e,"a",(function(){return b}));var a=s(5),r=s(0),n=s(38),c=s(39),o=s(41),i=s(40),u=s(11),p=s(1),j=s.n(p),d=s(13),l=function(t){return{isAuth:t.auth.isAuth}},b=function(t){var e=function(e){Object(o.a)(p,e);var s=Object(i.a)(p);function p(){return Object(n.a)(this,p),s.apply(this,arguments)}return Object(c.a)(p,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(t,Object(a.a)({},this.props)):Object(r.jsx)(u.a,{to:"/login"})}}]),p}(j.a.Component);return Object(d.b)(l)(e)}},304:function(t,e,s){t.exports={content:"profile_content__3AKzW"}},305:function(t,e,s){t.exports={posts:"posts_posts__2obS1"}},306:function(t,e,s){t.exports={wrapper:"post-item_wrapper__2IPmL"}},307:function(t,e,s){t.exports={wrapper:"addPost_wrapper__3-U-c",header:"addPost_header__1aJQD",post:"addPost_post__1_bj0",text:"addPost_text__32SWI",btn:"addPost_btn__so29l"}},308:function(t,e,s){t.exports={wrapper:"avatar_wrapper__3qhf0",mainInfo:"avatar_mainInfo__y7cNC",box:"avatar_box__2LnfE",discription:"avatar_discription__V_a33",status:"avatar_status__1NOsm",list:"avatar_list__3k52z",item:"avatar_item__1lpTN",work:"avatar_work__eyAqg",workIcon:"avatar_workIcon__r9NSr"}},309:function(t,e,s){t.exports={wrapper:"ProfileStatus_wrapper__27z22"}},310:function(t,e,s){"use strict";s.r(e);var a=s(5),r=s(0),n=s(38),c=s(39),o=s(41),i=s(40),u=s(1),p=s.n(u),j=s(13),d=s(304),l=s.n(d),b=s(305),h=s.n(b),O=s(306),f=s.n(O),_=function(t){var e=t.messege,s=t.like;return Object(r.jsxs)("div",{className:f.a.wrapper,children:[Object(r.jsx)("div",{className:f.a.item,children:e}),Object(r.jsxs)("span",{children:["like",s]})]})},m=s(307),x=s.n(m),v=s(133),P=s(134),w=s(91),g=s(67),N=Object(w.a)(10),k=function(t){var e=t.addPost,s=Object(P.a)({form:"PostNewPostText"})((function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,className:x.a.post,children:[Object(r.jsx)(v.a,{name:"newPostBody",placeholder:"type_post_here",component:g.b,validate:[w.b,N]}),Object(r.jsx)("button",{className:x.a.btn,children:"AddPost"})]})}));return Object(r.jsxs)("div",{className:x.a.wrapper,children:[Object(r.jsx)("h2",{className:x.a.header,children:"New Posts"}),Object(r.jsx)(s,{onSubmit:function(t){console.log(t.newPostBody),e(t.newPostBody)}})]})},y=p.a.memo((function(t){console.log("renderYO");var e=t.profilePage.posts.map((function(t){return Object(r.jsx)(_,{messege:t.post,like:t.like,id:t.id})}));return Object(r.jsxs)("div",{className:h.a.posts,children:[Object(r.jsx)(k,{addPost:t.addPost}),e]})})),S=s(308),I=s.n(S),A=s(69),C=s.p+"static/media/work.a1c80803.svg",z=s.p+"static/media/relax.2833335c.svg",J=function(t){var e=t.profile;if(!e)return Object(r.jsx)(A.a,{});var s=e.contacts,a=Object.keys(s);return Object(r.jsxs)("div",{className:I.a.wrapper,children:[Object(r.jsxs)("div",{className:I.a.mainInfo,children:[Object(r.jsx)("h3",{children:e.fullName}),Object(r.jsx)("div",{className:I.a.box,children:Object(r.jsx)("img",{src:e.photos.small})}),Object(r.jsx)("p",{className:I.a.status,children:e.aboutMe})]}),Object(r.jsx)("div",{className:I.a.discription,children:Object(r.jsx)("ul",{className:I.a.list,children:a.map((function(t){if(s[t])return Object(r.jsx)("li",{className:I.a.item,children:Object(r.jsx)("a",{href:s[t],children:t})})}))})}),Object(r.jsxs)("div",{className:I.a.work,children:[Object(r.jsx)("p",{children:e.lookingForAJobDescription}),Object(r.jsx)("div",{className:I.a.workIcon,children:Object(r.jsx)("img",{src:e.lookingForAJob?C:z})})]})]})},B=s(135),D=s(309),F=s.n(D),T=function(t){var e=Object(u.useState)(!1),s=Object(B.a)(e,2),a=s[0],n=s[1],c=Object(u.useState)(t.status),o=Object(B.a)(c,2),i=o[0],p=o[1];Object(u.useEffect)((function(){p(t.status)}),[t.status]);return Object(r.jsxs)("div",{className:F.a.wrapper,children:[!a&&Object(r.jsx)("div",{children:Object(r.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"we can't look your status"})}),a&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},onBlur:function(){n(!1),t.updateStatus(i)},autoFocus:!0,value:i})})]})},q=function(t){var e=t.profilePage,s=t.addPost,a=t.status,n=t.updateStatus;return Object(r.jsxs)("div",{className:l.a.content,children:[Object(r.jsx)(T,{updateStatus:n,status:a}),Object(r.jsx)(J,{profile:e.profile}),Object(r.jsx)(y,{profilePage:e,addPost:s})]})},E=s(102),L=s(11),M=s(9),W=(s(299),function(t){Object(o.a)(s,t);var e=Object(i.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.myId)||this.props.history.push("/login"),this.props.getCurrentProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(r.jsx)(q,Object(a.a)({},this.props))}}]),s}(p.a.Component));e.default=Object(M.d)(Object(j.b)((function(t){return{profilePage:t.profilePage,status:t.profilePage.status,myId:t.auth.userId,isAuth:t.auth.isAuth}}),{addPost:E.a,getCurrentProfile:E.c,getStatus:E.d,updateStatus:E.e}),L.f)(W)}}]);
//# sourceMappingURL=3.82f84614.chunk.js.map