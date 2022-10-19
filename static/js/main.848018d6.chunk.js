(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,a,t){e.exports=t(129)},119:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(53),l=t.n(o),c=(t(118),t(119),t(61)),i=t(42),s=t(49),u=t(17),m=t.n(u),d=t(35),b=t(12),g=t(137),p=t(138),v=t(148),k=t(97),f=t(139),E=t(140),h=t(155),w=t(19),O=t(20),j=t(82),S=t.n(j),y=new(function(){function e(){Object(w.a)(this,e)}return Object(O.a)(e,[{key:"getProfile",value:function(){return S()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return S()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),x=t(95),I=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},C=t(50),B=t(146);function $(){var e=Object(C.a)(["\n  mutation RemoveBook($bookId: String!) {\n    removeBook(bookId: $bookId) {\n        savedBooks {\n            bookId\n            title\n            description\n            link\n            image\n            authors\n        }\n        _id\n        username\n        email\n    }\n  }\n"]);return $=function(){return e},e}function T(){var e=Object(C.a)(["\n  mutation SaveBook($bookId: String!, $title: String!, $description: String!, $link: String, $image: String!) {\n    saveBook(bookId: $bookId, title: $title, description: $description, link: $link, image: $image) {\n        savedBooks {\n            bookId\n            title\n            description\n            link\n            image\n            authors\n        }\n        _id\n        username\n        email\n    }\n  }\n"]);return T=function(){return e},e}function F(){var e=Object(C.a)(["\n\n  mutation LoginUser($password: String!, $email: String!) {\n\n    loginUser(password: $password, email: $email) {\n\n      token\n      user {\n        username\n        email\n        _id\n        }\n      \n      \n\n    }\n\n  }\n\n"]);return F=function(){return e},e}function L(){var e=Object(C.a)(["\n\n  mutation AddUser($password: String!, $email: String!, $username: String!) {\n\n    addUser(password: $password, email: $email, username: $username) {\n\n      token\n      user {\n        username\n        email\n        _id\n        }\n      \n      \n\n    }\n\n  }\n\n"]);return L=function(){return e},e}var _=Object(B.a)(L()),N=Object(B.a)(F()),q=Object(B.a)(T()),U=Object(B.a)($()),P=t(136),D=function(){var e=Object(P.a)(q),a=Object(b.a)(e,2),t=a[0],o=(a[1].error,Object(n.useState)([])),l=Object(b.a)(o,2),c=l[0],i=l[1],u=Object(n.useState)(""),w=Object(b.a)(u,2),O=w[0],j=w[1],S=Object(n.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),I=Object(b.a)(S,2),C=I[0],B=I[1];Object(n.useEffect)((function(){return function(){var e;(e=C).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var $=function(){var e=Object(d.a)(m.a.mark((function e(a){var t,n,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),O){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,Object(x.searchGoogleBooks)(O);case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:n=e.sent,r=n.items,o=r.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),i(o),j(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(m.a.mark((function e(a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.find((function(e){return e.bookId===a})),console.log(n),y.loggedIn()?y.getToken():null){e.next=5;break}return e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,t({variables:n});case 8:if(r=e.sent,console.log(r),r.data){e.next=12;break}throw new Error("something went wrong!");case 12:console.log(r),B([].concat(Object(s.a)(C),[n.bookId])),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{fluid:!0,className:"text-light bg-dark"},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Search for Books!"),r.a.createElement(v.a,{onSubmit:$},r.a.createElement(v.a.Row,null,r.a.createElement(k.a,{xs:12,md:8},r.a.createElement(v.a.Control,{name:"searchInput",value:O,onChange:function(e){return j(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),r.a.createElement(k.a,{xs:12,md:4},r.a.createElement(f.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),r.a.createElement(p.a,null,r.a.createElement("h2",null,c.length?"Viewing ".concat(c.length," results:"):"Search for a book to begin"),r.a.createElement(E.a,null,c.map((function(e){return r.a.createElement(h.a,{key:e.bookId,border:"dark"},e.image?r.a.createElement(h.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,e.title),r.a.createElement("p",{className:"small"},"Authors: ",e.authors),r.a.createElement(h.a.Text,null,e.description),y.loggedIn()&&r.a.createElement(f.a,{disabled:null===C||void 0===C?void 0:C.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return T(e.bookId)}},(null===C||void 0===C?void 0:C.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},G=t(154);function V(){var e=Object(C.a)(["\n  {\n    me {\n      _id\n      email\n      username\n      savedBooks {\n        authors\n        description\n        bookId\n        image\n        link\n        title\n      }\n    }\n  }\n"]);return V=function(){return e},e}var Y=Object(B.a)(V()),J=function(){var e=Object(n.useState)({}),a=Object(b.a)(e,2),t=a[0],o=a[1],l=Object(G.a)(Y),c=Object(b.a)(l,2),i=c[0],s=(c[1].error,Object.keys(t).length),u=Object(P.a)(U),v=Object(b.a)(u,2),k=v[0];v[1].error;Object(n.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var a,t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y.loggedIn()?y.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,i();case 6:if(a=e.sent,console.log(a),a.data){e.next=10;break}throw new Error("something went wrong!");case 10:return e.next=12,a.data.me;case 12:t=e.sent,n=t.user,o(n),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}})()()}),[s]);var w=function(){var e=Object(d.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.loggedIn()?y.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,k({variables:{bookId:a}});case 6:if(t=e.sent,console.log(t),t.data){e.next=10;break}throw new Error("something went wrong!");case 10:o(t.data.removeBook.user),I(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(a){return e.apply(this,arguments)}}();return s?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{fluid:!0,className:"text-light bg-dark"},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Viewing saved books!"))),r.a.createElement(p.a,null,r.a.createElement("h2",null,t.savedBooks.length?"Viewing ".concat(t.savedBooks.length," saved ").concat(1===t.savedBooks.length?"book":"books",":"):"You have no saved books!"),r.a.createElement(E.a,null,t.savedBooks.map((function(e){return r.a.createElement(h.a,{key:e.bookId,border:"dark"},e.image?r.a.createElement(h.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,e.title),r.a.createElement("p",{className:"small"},"Authors: ",e.authors),r.a.createElement(h.a.Text,null,e.description),r.a.createElement(f.a,{className:"btn-block btn-danger",onClick:function(){return w(e.bookId)}},"Delete this Book!")))}))))):r.a.createElement("h2",null,"LOADING...")},A=t(152),K=t(151),z=t(147),M=t(153),H=t(57),R=t(73),W=t(142),Q=function(){var e=Object(n.useState)({username:"",email:"",password:""}),a=Object(b.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(!1),c=Object(b.a)(l,1)[0],i=Object(n.useState)(!1),s=Object(b.a)(i,2),u=s[0],g=s[1],p=Object(P.a)(_),k=Object(b.a)(p,2),E=k[0],h=(k[1].error,function(e){var a=e.target,n=a.name,r=a.value;o(Object(R.a)({},t,Object(H.a)({},n,r)))}),w=function(){var e=Object(d.a)(m.a.mark((function e(a){var n,r,l,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,E({variables:t});case 6:if(n=e.sent,console.log(n),n.data){e.next=10;break}throw new Error("something went wrong!");case 10:return e.next=12,n.data.addUser;case 12:r=e.sent,l=r.token,c=r.user,console.log(c),y.login(l),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(3),console.error(e.t0),g(!0);case 23:o({username:"",email:"",password:""});case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{noValidate:!0,validated:c,onSubmit:w},r.a.createElement(W.a,{dismissible:!0,onClose:function(){return g(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{htmlFor:"username"},"Username"),r.a.createElement(v.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:h,value:t.username,required:!0}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Username is required!")),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{htmlFor:"email"},"Email"),r.a.createElement(v.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:h,value:t.email,required:!0}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Email is required!")),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{htmlFor:"password"},"Password"),r.a.createElement(v.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:t.password,required:!0}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Password is required!")),r.a.createElement(f.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},X=function(){var e=Object(n.useState)({email:"",password:""}),a=Object(b.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(!1),c=Object(b.a)(l,1)[0],i=Object(n.useState)(!1),s=Object(b.a)(i,2),u=s[0],g=s[1],p=Object(P.a)(N),k=Object(b.a)(p,2),E=k[0],h=(k[1].error,function(e){var a=e.target,n=a.name,r=a.value;o(Object(R.a)({},t,Object(H.a)({},n,r)))}),w=function(){var e=Object(d.a)(m.a.mark((function e(a){var n,r,l,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,E({variables:t});case 6:if(n=e.sent,console.log(n),n.data){e.next=10;break}throw new Error("something went wrong!");case 10:return e.next=12,n.data.addUser;case 12:r=e.sent,l=r.token,c=r.user,console.log(c),y.login(l),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(3),console.error(e.t0),g(!0);case 23:o({username:"",email:"",password:""});case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{noValidate:!0,validated:c,onSubmit:w},r.a.createElement(W.a,{dismissible:!0,onClose:function(){return g(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{htmlFor:"email"},"Email"),r.a.createElement(v.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:h,value:t.email,required:!0}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Email is required!")),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{htmlFor:"password"},"Password"),r.a.createElement(v.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:t.password,required:!0}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Password is required!")),r.a.createElement(f.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},Z=function(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(p.a,{fluid:!0},r.a.createElement(A.a.Brand,{as:c.b,to:"/"},"Google Books Search"),r.a.createElement(A.a.Toggle,{"aria-controls":"navbar"}),r.a.createElement(A.a.Collapse,{id:"navbar"},r.a.createElement(K.a,{className:"ml-auto"},r.a.createElement(K.a.Link,{as:c.b,to:"/"},"Search For Books"),y.loggedIn()?r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a.Link,{as:c.b,to:"/saved"},"See Your Books"),r.a.createElement(K.a.Link,{onClick:y.logout},"Logout")):r.a.createElement(K.a.Link,{onClick:function(){return o(!0)}},"Login/Sign Up"))))),r.a.createElement(z.a,{size:"lg",show:t,onHide:function(){return o(!1)},"aria-labelledby":"signup-modal"},r.a.createElement(M.a.Container,{defaultActiveKey:"login"},r.a.createElement(z.a.Header,{closeButton:!0},r.a.createElement(z.a.Title,{id:"signup-modal"},r.a.createElement(K.a,{variant:"pills"},r.a.createElement(K.a.Item,null,r.a.createElement(K.a.Link,{eventKey:"login"},"Login")),r.a.createElement(K.a.Item,null,r.a.createElement(K.a.Link,{eventKey:"signup"},"Sign Up"))))),r.a.createElement(z.a.Body,null,r.a.createElement(M.a.Content,null,r.a.createElement(M.a.Pane,{eventKey:"login"},r.a.createElement(X,{handleModalClose:function(){return o(!1)}})),r.a.createElement(M.a.Pane,{eventKey:"signup"},r.a.createElement(Q,{handleModalClose:function(){return o(!1)}})))))))},ee=t(107),ae=t(149),te=t(150),ne=t(145),re=Object(ee.a)({uri:"/graphql"}),oe=new ae.a({link:re,cache:new te.a});var le=function(){return r.a.createElement(ne.a,{client:oe},r.a.createElement(c.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:D}),r.a.createElement(i.a,{exact:!0,path:"/saved",component:J}),r.a.createElement(i.a,{render:function(){return r.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root"))},95:function(e,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.848018d6.chunk.js.map