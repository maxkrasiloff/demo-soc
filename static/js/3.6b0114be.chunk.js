(this.webpackJsonpsoc=this.webpackJsonpsoc||[]).push([[3],{300:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var n=s(99);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,a=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(n=(o=c.next()).done)&&(s.push(o.value),!e||s.length!==e);n=!0);}catch(i){a=!0,r=i}finally{try{n||null==c.return||c.return()}finally{if(a)throw r}}return s}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},306:function(t,e,s){},307:function(t,e,s){t.exports={posts_wrapper:"MyPosts_posts_wrapper__s52me",new_post:"MyPosts_new_post__8VgyB"}},308:function(t,e,s){t.exports={post:"Post_post__g4uv7",user_name:"Post_user_name__zADyC"}},309:function(t,e,s){t.exports={user_info:"ProfileInfo_user_info__3nd7v",user_avatar:"ProfileInfo_user_avatar__qeQcs",status:"ProfileInfo_status__3MOaA"}},312:function(t,e,s){"use strict";s.r(e);var n=s(3),a=s(34),r=s(35),o=s(37),c=s(36),i=s(0),u=s.n(i),l=s(306),j=s.n(l),p=s(20),b=s(100),d=(s(55),s(307)),f=s.n(d),h=s(308),O=s.n(h),m=s(1),x=function(t){return Object(m.jsxs)("div",{className:O.a.post,children:[Object(m.jsx)("div",{className:O.a.user_name,children:"\u041c\u0430\u043a\u0441 \u0416\u0443\u0431\u0435\u043b\u044f\u0432\u044b\u0439"}),Object(m.jsx)("div",{className:"content",children:t.text}),Object(m.jsx)("span",{className:"like",children:t.liked})]})},_=s(90),v=s(131),y=s(48),S=s(87),g=Object(S.b)(30),w=Object(v.a)({form:"newPost"})((function(t){return Object(m.jsxs)("form",{className:f.a.new_post,onSubmit:t.handleSubmit,children:[Object(m.jsx)(_.a,{component:y.b,name:"newPostText",validate:[S.a,g]}),Object(m.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})),N=function(t){return Object(m.jsxs)("div",{className:f.a.posts_wrapper,children:[Object(m.jsx)(w,{onSubmit:function(e){t.addPost(e.newPostText)}}),t.posts.map((function(t){return Object(m.jsx)(x,{text:t.text,liked:t.likes},t.id)}))]})},P=Object(p.b)((function(t){return{posts:t.profile.posts,newPostText:t.profile.newPostText}}),(function(t){return{addPost:function(e){t(Object(b.a)(e))}}}))(N),k=s(64),I=s(300),A=function(t){var e=Object(i.useState)(!1),s=Object(I.a)(e,2),n=s[0],a=s[1],r=Object(i.useState)(t.status),o=Object(I.a)(r,2),c=o[0],u=o[1];Object(i.useEffect)((function(){u(t.status)}),[t.status]);return Object(m.jsxs)(m.Fragment,{children:[!n&&Object(m.jsx)("div",{className:t.className,children:Object(m.jsx)("span",{onDoubleClick:function(){a(!0)},children:c||"change status..."})}),n&&Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},value:c,autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(c)}}),Object(m.jsx)("button",{children:"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})},T=s(309),F=s.n(T),C=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:F.a.user_info,children:[Object(m.jsx)("div",{className:F.a.user_avatar,children:Object(m.jsx)("img",{src:e.photos.small})}),Object(m.jsxs)("div",{className:"user_info",children:[Object(m.jsx)("div",{className:"user-name",children:e.fullName}),Object(m.jsx)(A,{className:F.a.status,status:s,updateStatus:n}),Object(m.jsx)("div",{className:F.a.city_info,children:e.location.city+", "+e.location.country})]})]}),e.lookIngForAJob?Object(m.jsxs)("div",{children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",e.lookIngForAJobDescription]}):""]}):Object(m.jsx)(k.a,{})},D=function(t){return Object(m.jsxs)("div",{className:j.a.content,children:[Object(m.jsx)(C,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(m.jsx)(P,{store:t.store})]})},J=s(9),M=s(11),B=function(t){Object(o.a)(s,t);var e=Object(c.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(m.jsx)(D,Object(n.a)(Object(n.a)({},this.props),{},{status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(M.d)(J.f,Object(p.b)((function(t){return{profile:t.profile.profile,status:t.profile.status,authUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:b.c,getStatus:b.d,updateStatus:b.e}))(B)}}]);
//# sourceMappingURL=3.6b0114be.chunk.js.map