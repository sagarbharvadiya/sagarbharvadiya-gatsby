(self.webpackChunksagarbharvadiya=self.webpackChunksagarbharvadiya||[]).push([[678],{4852:function(e){"use strict";e.exports=Object.assign},1862:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Te}});var n,o,a,i,u=r(7294),c=r(5697),s=r.n(c),l=r(3524),f=r.n(l),p=r(9590),m=r.n(p),d=r(4852),y=r.n(d),h="bodyAttributes",b="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),E="cssText",S="href",w="http-equiv",A="innerHTML",O="itemprop",C="name",j="property",N="rel",k="src",P="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",x="defer",L="encodeSpecialCharacters",R="onChangeClientState",M="titleTemplate",Y=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),B=[g.NOSCRIPT,g.SCRIPT,g.STYLE],D="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},G=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=$(e,g.TITLE),r=$(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,I);return t||n||void 0},z=function(e){return $(e,R)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();-1===t.indexOf(c)||r===N&&"canonical"===e[r].toLowerCase()||c===N&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==A&&u!==E&&u!==O||(r=u)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=y()({},n[u],o[u]);n[u]=c}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),Z=function(e){return clearTimeout(e)},Q="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:r.g.cancelAnimationFrame||Z,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ne=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ie(g.BODY,n),ie(g.HTML,o),ae(f,p);var m={baseTag:ue(g.BASE,r),linkTags:ue(g.LINK,a),metaTags:ue(g.META,i),noscriptTags:ue(g.NOSCRIPT,u),scriptTags:ue(g.SCRIPT,s),styleTags:ue(g.STYLE,l)},d={},y={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(y[e]=m[e].oldTags)})),t&&t(),c(e,d,y)},oe=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ie(g.TITLE,t)},ie=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=a.indexOf(c);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(D):r.getAttribute(D)!==i.join(",")&&r.setAttribute(D,i.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+D+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(D,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},ce=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)},le=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,o=se(r,n),[u.createElement(g.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ce(r),a=oe(t);return o?"<"+e+" "+D+'="true" '+o+">"+G(a,n)+"</"+e+">":"<"+e+" "+D+'="true">'+G(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case b:return{toComponent:function(){return se(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=_[e]||e;if(r===A||r===E){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),u.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===A||e===E)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+G(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+" "+D+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:le(g.BASE,t,n),bodyAttributes:le(h,r,n),htmlAttributes:le(b,o,n),link:le(g.LINK,a,n),meta:le(g.META,i,n),noscript:le(g.NOSCRIPT,u,n),script:le(g.SCRIPT,c,n),style:le(g.STYLE,s,n),title:le(g.TITLE,{title:f,titleAttributes:p},n)}},pe=f()((function(e){return{baseTag:V([S,P],e),bodyAttributes:W(h,e),defer:$(e,x),encode:$(e,L),htmlAttributes:W(b,e),linkTags:J(g.LINK,[N,S],e),metaTags:J(g.META,[C,T,w,j,O],e),noscriptTags:J(g.NOSCRIPT,[A],e),onChangeClientState:z(e),scriptTags:J(g.SCRIPT,[k,A],e),styleTags:J(g.STYLE,[E],e),title:K(e),titleAttributes:W(v,e)}}),(function(e){re&&ee(re),e.defer?re=Q((function(){ne(e,(function(){re=null}))})):(ne(e),re=null)}),fe)((function(){return null})),me=(o=pe,i=a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case g.TITLE:return H({},o,((t={})[n.type]=i,t.titleAttributes=H({},a),t));case g.BODY:return H({},o,{bodyAttributes:H({},a)});case g.HTML:return H({},o,{htmlAttributes:H({},a)})}return H({},o,((r={})[n.type]=H({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return u.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Y[r]||r]=e[r],t}),t)}(q(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=q(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),u.createElement(o,n)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(u.Component),a.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind;var de=()=>u.createElement(u.Fragment,null,u.createElement(me,null,u.createElement("meta",{name:"keywords",content:"Frontend UI Developer, Web Design, HTML, CSS, JavaScript, Responsive Design, User Experience, Web Development, Portfolio, Freelance, Hire Me, Contact Me, About Me, Blog, Projects,,Resume, Skills, Services, Testimonials, Clients, Online Resume, sagar, bharvadiya, sagar bharvadiya, Sagar Bharvadiya, Bharvadiya Sagar, sagar contact number, sagar yadav, mobile number sagar"}))),ye=r(333),he=r(3977),be=r(1019);const ve={apiKey:{}.GATSBY_YOUR_API_KEY,authDomain:{}.GATSBY_YOUR_AUTH_DOMAIN,databaseURL:{}.GATSBY_YOUR_DATABASE_URL,projectId:{}.GATSBY_YOUR_PROJECT_ID,storageBucket:{}.GATSBY_YOUR_STORAGE_BUCKET,messagingSenderId:{}.GATSBY_YOUR_MESSAGING_SENDER_ID,appId:{}.GATSBY_YOUR_APP_ID,measurementId:{}.GATSBY_YOUR_MEASUREMENT_ID};(0,he.ZF)(ve);var ge=()=>{const{0:e,1:t}=(0,u.useState)(!1),{0:r,1:n}=(0,u.useState)(!1),{0:o,1:a}=(0,u.useState)({fName:"",email:"",sub:"",mes:""}),{0:i,1:c}=(0,u.useState)(!1),{0:s,1:l}=(0,u.useState)(!1),f=(0,be.N8)();(0,u.useEffect)((()=>{const e=setTimeout((()=>{n(!0),document.body.style.overflow="hidden"}),2e3);return()=>clearTimeout(e)}),[]);return u.createElement(u.Fragment,null,r&&u.createElement("div",{className:"modal_box"},u.createElement("button",{className:"close_button",onClick:()=>{n(!1),document.body.style.overflow="auto"}},"X"),e?u.createElement("div",null,u.createElement("h2",null,"Thank You!"),u.createElement("p",null,"Your message has been submitted successfully.")):u.createElement("form",{className:"php-email-form"},u.createElement("div",{className:"row"},u.createElement("div",{className:"col-md-6 form-group"},u.createElement("input",{type:"text",name:"user_name",className:"form-control",id:"name",placeholder:"Your Name",value:o.fName,onChange:e=>a({...o,fName:e.target.value}),required:!0})),u.createElement("div",{className:"col-md-6 form-group mt-3 mt-md-0"},u.createElement("input",{type:"email",name:"user_email",className:"form-control",id:"email",placeholder:"Your Email",value:o.email,required:!0,onChange:e=>a({...o,email:e.target.value})}))),u.createElement("div",{className:"form-group mt-3"},u.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject",value:o.sub,required:!0,onChange:e=>a({...o,sub:e.target.value})})),u.createElement("div",{className:"form-group mt-3"},u.createElement("textarea",{className:"form-control",name:"message",rows:"6",placeholder:"Message",value:o.mes,required:!0,onChange:e=>a({...o,mes:e.target.value})})),u.createElement("div",{className:"my-3"}),u.createElement("div",{className:"text-center"},u.createElement("button",{type:"submit",onClick:async e=>{if(e.preventDefault(),!(()=>{const{fName:e,email:t,sub:r,mes:n}=o;return""!==e.trim()&&""!==t.trim()&&""!==r.trim()&&""!==n.trim()})())return;const{fName:r,email:n,sub:i,mes:u}=o;try{const e=(0,be.iH)(f,"sagarform");c(!0),await(0,be.VF)(e,{fName:r,email:n,sub:i,mes:u}),a({fName:"",email:"",sub:"",mes:""}),t(!0),alert("Data posted successfully")}catch(s){console.error("Error posting data:",s)}finally{c(!1)}},disabled:i||s},i?"Submitting...":s?"Submitted":"Submit")))))};var Te=()=>u.createElement(u.Fragment,null,u.createElement("main",null,u.createElement(ge,null),u.createElement("title",null,"sagarbharvadiya"),u.createElement(de,null),u.createElement(ye.default,null)))},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var u,c,s,l;if(Array.isArray(e)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!i.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!a(e[s[c]],i[s[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},3524:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",u),f}}}}]);
//# sourceMappingURL=component---src-pages-index-js-24ae07362600edada363.js.map