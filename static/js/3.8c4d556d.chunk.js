(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[3],{424:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3CwAp",mainPhoto:"ProfileInfo_mainPhoto__McB_i",chooseFileBox:"ProfileInfo_chooseFileBox__3O23F",wrapper:"ProfileInfo_wrapper__2PDsu",button_edit:"ProfileInfo_button_edit__3taB5",button_showContacts:"ProfileInfo_button_showContacts__1BaTg",status:"ProfileInfo_status__3FYVk",job:"ProfileInfo_job__2hX9u",chatBut:"ProfileInfo_chatBut__2X2zp"}},425:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3mPEM",posts:"MyPosts_posts__38XM7",postForm:"MyPosts_postForm__3B0mJ"}},426:function(e,t,a){e.exports={item:"Post_item__sY5QM"}},427:function(e,t,a){"use strict";a.r(t);var n=a(169),o=a(170),l=a(209),s=a(211),r=a(0),c=a.n(r),i=a(166),u=a(424),m=a.n(u),f=a(120),p=function(e){var t=Object(r.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],l=Object(r.useState)(e.status),s=Object(i.a)(l,2),u=s[0],f=s[1];Object(r.useEffect)((function(){f(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",{className:m.a.status},c.a.createElement("b",null,"Status: ")," ",c.a.createElement("span",{onClick:function(){o(!0)}},e.status||"You can write yours status here. Just click onse on this message")),n&&c.a.createElement("div",null,c.a.createElement("input",{className:m.a.status,onChange:function(e){f(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},value:u})))},d=a(78),b=a.n(d),h=a(61),E=a(208),v=a(85),_=a.n(v),g=Object(E.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",{className:m.a.button_edit},"Save")),n&&c.a.createElement("div",{className:_.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",Object(h.c)("Full name","fullName",[],h.a)),c.a.createElement("div",{className:m.a.job},c.a.createElement("b",null,"Looking for a job"),": ",Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),":",Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),":",Object(h.c)("About me","aboutMe",[],h.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,": ",Object(h.c)(e,"contacts."+e,[],h.a)))}))))})),k=a(8),P=a(30),O=a(48),j=function(e){var t=Object(k.c)();return e.userId,c.a.createElement(P.c,{to:"/dialogs"},c.a.createElement("button",{className:m.a.chatBut,onClick:function(){return a=e.userId,console.log(a),void t(Object(O.f)(a));var a}},"Start Chatting"))},w=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode,o=Object(r.useState)(!1),l=Object(i.a)(o,2),s=l[0],u=l[1];return c.a.createElement("div",{className:m.a.wrapper},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",t.aboutMe),c.a.createElement("button",{className:m.a.button_showContacts,onClick:function(){u(!s)}},"Show contacts"),c.a.createElement("br",null),c.a.createElement(j,{userId:t.userId}),s?c.a.createElement("div",null,Object.keys(t.contacts).map((function(e){return c.a.createElement(y,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))):c.a.createElement(c.a.Fragment,null),a&&c.a.createElement("div",null,c.a.createElement("button",{className:m.a.button_edit,onClick:n},"Edit"))))},y=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t),": ",a)},S=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,s=e.saveProfile,u=Object(r.useState)(!1),d=Object(i.a)(u,2),h=d[0],E=d[1];if(!t)return c.a.createElement(f.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large||b.a,className:m.a.mainPhoto}),o&&c.a.createElement("input",{type:"file",id:"input_file",className:m.a.chooseFileBox,onChange:function(e){e.target.files&&e.target.files.length&&l(e.target.files[0])}}),h?c.a.createElement(g,{initialValues:t,profile:t,onSubmit:function(e){s(e).then((function(){E(!1)}))}}):c.a.createElement(w,{goToEditMode:function(){E(!0)},profile:t,isOwner:o}),c.a.createElement(p,{status:a,updateStatus:n})))},I=a(167),N=a(79),B=a(425),C=a.n(B),F=a(426),M=a.n(F),A={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]},name:"like",theme:"outlined"},x=a(68),J=function(e,t){return r.createElement(x.a,Object.assign({},e,{ref:t,icon:A}))};J.displayName="LikeOutlined";var T=r.forwardRef(J),U=function(e){return c.a.createElement("div",{className:M.a.item},c.a.createElement("img",{src:"https://www.blast.hk/attachments/64805/"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,c.a.createElement(T,null))," ",e.likesCount))},z=a(121),D=Object(E.a)({form:"profile-add-post"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit,className:C.a.postForm},c.a.createElement("div",null,Object(h.c)("Your post","newPostText",[z.a],h.a)),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),V=c.a.memo((function(e){var t=Object(N.a)(e.posts).reverse().map((function(e){return c.a.createElement(U,{key:e.id,message:e.message,likesCount:e.likesCount})}));return c.a.createElement("div",{className:C.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(D,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:C.a.posts},t))})),Y=Object(k.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:I.a.addPostActionCreator})(V),H=function(e){return c.a.createElement("div",null,c.a.createElement(S,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),c.a.createElement(Y,null))},L=a(20),X=a(16),R=a(207),Q=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement(H,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(X.d)(Object(k.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:I.d,getStatus:I.c,updateStatus:I.g,savePhoto:I.e,saveProfile:I.f}),L.h,R.a)(Q)}}]);
//# sourceMappingURL=3.8c4d556d.chunk.js.map