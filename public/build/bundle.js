var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,i;function l(t,e){return r||(r=document.createElement("a")),r.href=e,t===r.href}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n,a){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,a?"important":"")}function m(t){i=t}function v(){if(!i)throw new Error("Function called outside component initialization");return i}const b=[],w=[],y=[],k=[],$=Promise.resolve();let x=!1;function _(t){y.push(t)}const E=new Set;let C=0;function K(){const t=i;do{for(;C<b.length;){const t=b[C];C++,m(t),A(t.$$)}for(m(null),b.length=0,C=0;w.length;)w.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];E.has(e)||(E.add(e),e())}y.length=0}while(b.length);for(;k.length;)k.pop()();x=!1,E.clear(),m(t)}function A(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const j=new Set;let D;function S(t,e){t&&t.i&&(j.delete(t),t.i(e))}function O(t,e){const n=e.token={};function s(t,s,o,r){if(e.token!==n)return;e.resolved=r;let i=e.ctx;void 0!==o&&(i=i.slice(),i[o]=r);const l=t&&(e.current=t)(i);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(D={r:0,c:[],p:D},function(t,e,n,a){if(t&&t.o){if(j.has(t))return;j.add(t),D.c.push((()=>{j.delete(t),a&&(n&&t.d(1),a())})),t.o(e)}}(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),D.r||a(D.c),D=D.p)})):e.block.d(1),l.c(),S(l,1),l.m(e.mount(),e.anchor),c=!0),e.block=l,e.blocks&&(e.blocks[s]=l),c&&K()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=v();if(t.then((t=>{m(n),s(e.then,1,e.value,t),m(null)}),(t=>{if(m(n),s(e.catch,2,e.error,t),m(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}var o}function H(t,e){-1===t.$$.dirty[0]&&(b.push(t),x||(x=!0,$.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(o,r,l,c,u,d,f,p=[-1]){const g=i;m(o);const v=o.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(g?g.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:r.target||g.$$.root};f&&f(v.root);let b=!1;if(v.ctx=l?l(o,r.props||{},((t,e,...n)=>{const a=n.length?n[0]:e;return v.ctx&&u(v.ctx[t],v.ctx[t]=a)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](a),b&&H(o,t)),e})):[],v.update(),b=!0,a(v.before_update),v.fragment=!!c&&c(v.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);v.fragment&&v.fragment.l(t),t.forEach(h)}else v.fragment&&v.fragment.c();r.intro&&S(o.$$.fragment),function(t,n,o,r){const{fragment:i,on_mount:l,on_destroy:c,after_update:u}=t.$$;i&&i.m(n,o),r||_((()=>{const n=l.map(e).filter(s);c?c.push(...n):a(n),t.$$.on_mount=[]})),u.forEach(_)}(o,r.target,r.anchor,r.customElement),K()}m(g)}class T{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function L(e){let n;return{c(){n=d("main"),n.innerHTML='<div id="block" class="svelte-1n6th8a"><div class="tit_div svelte-1n6th8a"><h2 class="title svelte-1n6th8a">Oksana (Ksusha) Konovalova</h2></div> \n        <div class="social1 instagram svelte-1n6th8a"><a href="https://instagram.com/ksko.02" target="_blank" class="svelte-1n6th8a"><i class="fa fa-instagram fa-2x"></i></a></div> \n        <div class="social2 vk svelte-1n6th8a"><a href="https://vk.com/ksushakonovalova" target="_blank" class="svelte-1n6th8a"><i class="fa fa-vk fa-2x"></i></a></div> \n        <div class="social3 telegram svelte-1n6th8a"><a href="http://t.me/ksko02" target="_blank" class="svelte-1n6th8a"><i class="fa fa-paper-plane fa-2x"></i></a></div> \n        <div class="social4 github svelte-1n6th8a"><a href="https://github.com/ksko02" target="_blank" class="svelte-1n6th8a"><i class="fa fa-github fa-2x"></i></a></div></div>',p(n,"class","svelte-1n6th8a")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function N(e){let n,a,s,o,r,i,m,v,b,w,y,k,$,x,_,E,C,K,A,j,D,S,O,H,I;return{c(){n=d("main"),a=d("p"),a.textContent="Welcome to this site. This site will tell you about Ksusha's life and hobbies. Now you can read a short story about her life. Have an exciting trip!",s=f(),o=d("img"),i=f(),m=d("p"),m.textContent="On December 24, 2002, in the small city of Saratov, a little girl named Oksana was born, but everyone called her Ksusha. In her early years, she had a lot of help from her parents and a cool older sister. They taught her to walk, talk, and read.",v=f(),b=d("img"),y=f(),k=d("p"),k.textContent="She was a very calm and curious child who wanted to conquer the world. As the years passed, Ksusha went to kindergarten, where she met her first friends. Ksusha was 7 years old when the first school bell rang and the carefree childhood with quiet hours and toys ended. It was time to study and learn a lot of things. Her school life was very interesting and fun. Ksusha studied well and liked to learn a lot of new things! Her favorite subject was math.",$=f(),x=d("p"),_=f(),E=d("p"),E.textContent="In first grade she went to dance for the first time and she wasn't doing well. Ksusha didn't get into the music, and her feet were crooked. But years of hard practice allowed her to achieve a lot and find something she loved. Also in the third grade she went to fencing and practiced for many years, but unfortunately it was very difficult for her. When Ksusha was moving into third grade, she had a little sister who was a little loud, but very sweet.",C=f(),K=d("p"),A=f(),j=d("p"),j.textContent="Before she knew it, Ksusha was in the 11th grade and was taking some serious exams. Ksusha successful passed the selection process for the wonderful Innopolis University! She has been living and studying at this university for almost a year now.",D=f(),S=d("p"),S.textContent="Unfortunately, I can't tell this fascinating story any further, because Ksusha herself doesn't know yet what adventures await her ahead!",O=f(),H=d("img"),p(a,"align","center"),l(o.src,r=P)||p(o,"src",r),p(o,"alt",""),p(o,"align","left"),p(o,"width","180"),p(o,"height","150"),g(o,"border","8px solid #DADEDF"),p(m,"align","center"),l(b.src,w=q)||p(b,"src",w),p(b,"alt",""),p(b,"align","right"),p(b,"width","180"),p(b,"height","150"),g(b,"border","8px solid #DADEDF"),p(k,"align","right"),p(x,"align","center"),p(E,"align","right"),p(E,"class","p1"),p(K,"align","center"),p(j,"align","center"),p(S,"align","center"),l(H.src,I=B)||p(H,"src",I),p(H,"alt",""),p(H,"align","center"),p(H,"width","180"),p(H,"height","150"),p(H,"class","im1 svelte-uah5lp"),p(H,"id","heart"),p(n,"class","svelte-uah5lp")},m(t,e){u(t,n,e),c(n,a),c(n,s),c(n,o),c(n,i),c(n,m),c(n,v),c(n,b),c(n,y),c(n,k),c(n,$),c(n,x),c(n,_),c(n,E),c(n,C),c(n,K),c(n,A),c(n,j),c(n,D),c(n,S),c(n,O),c(n,H)},p:t,i:t,o:t,d(t){t&&h(n)}}}let P="https://i.gifer.com/Gjnl.gif",q="https://i.gifer.com/14Se.gif",B="https://i.gifer.com/1PyX.gif";function F(e){return{c:t,m:t,p:t,d:t}}function M(t){let e,n;return{c(){e=d("img"),p(e,"id","img_dog"),l(e.src,n=t[2].message)||p(e,"src",n),p(e,"alt",""),p(e,"class","svelte-1ew4p6e")},m(t,n){u(t,e,n)},p(t,a){1&a&&!l(e.src,n=t[2].message)&&p(e,"src",n)},d(t){t&&h(e)}}}function U(e){let n;return{c(){n=d("p"),n.textContent="..."},m(t,e){u(t,n,e)},p:t,d(t){t&&h(n)}}}function W(e){let n,a,s,o,r,i,l,g,m,v={ctx:e,current:null,token:null,hasCatch:!1,pending:U,then:M,catch:F,value:2};return O(r=e[0],v),{c(){n=d("p"),a=d("button"),a.textContent="Surprise!",s=f(),o=d("section"),v.block.c(),i=f(),l=d("main"),l.innerHTML='<img id="img_dog" alt="" class="svelte-1ew4p6e"/>',p(a,"id","btn"),p(a,"class","svelte-1ew4p6e")},m(t,r){var h,d,f,p;u(t,n,r),c(n,a),u(t,s,r),u(t,o,r),v.block.m(o,v.anchor=null),v.mount=()=>o,v.anchor=null,u(t,i,r),u(t,l,r),g||(h=a,d="click",f=e[1],h.addEventListener(d,f,p),m=()=>h.removeEventListener(d,f,p),g=!0)},p(t,[n]){e=t,v.ctx=e,1&n&&r!==(r=e[0])&&O(r,v)||function(t,e,n){const a=e.slice(),{resolved:s}=t;t.current===t.then&&(a[t.value]=s),t.current===t.catch&&(a[t.error]=s),t.block.p(a,n)}(v,e,n)},i:t,o:t,d(t){t&&h(n),t&&h(s),t&&h(o),v.block.d(),v.token=null,v=null,t&&h(i),t&&h(l),g=!1,m()}}}async function z(){const t=await fetch("https://dog.ceo/api/breeds/image/random");return await t.json()}function G(t,e,n){let a=z();return[a,()=>n(0,a=z())]}new class extends T{constructor(t){super(),I(this,t,null,L,o,{})}}({target:document.body,props:{name:"world"}});const X=new class extends T{constructor(t){super(),I(this,t,null,N,o,{})}}({target:document.body,props:{name:"world"}});return new class extends T{constructor(t){super(),I(this,t,G,W,o,{})}}({target:document.body,props:{name:"world"}}),X}();
//# sourceMappingURL=bundle.js.map