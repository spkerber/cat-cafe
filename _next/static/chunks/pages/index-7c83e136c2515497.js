(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9828)}])},4080:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let r=i(8754),n=i(1757),o=i(5893),s=n._(i(7294)),l=r._(i(3935)),a=r._(i(3867)),u=i(5283),d=i(6594),c=i(3945);i(3179);let f=i(1928),g=r._(i(3872)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,i,r,n,o,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function p(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,s.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:n,height:l,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:g,loading:h,unoptimized:b,fill:v,onLoadRef:x,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:j,sizesInput:_,onLoad:S,onError:C,...z}=e;return(0,o.jsx)("img",{...z,...p(f),loading:h,width:a,height:l,decoding:u,"data-nimg":v?"fill":"1",className:d,style:c,sizes:n,srcSet:r,src:i,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,g,x,w,y,b,_))},[i,g,x,w,y,C,b,_,t]),onLoad:e=>{m(e.currentTarget,g,x,w,y,b,_)},onError:e=>{j(!0),"empty"!==g&&y(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...p(i.fetchPriority)};return t&&l.default.preload?(l.default.preload(i.src,r),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let x=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(f.RouterContext),r=(0,s.useContext)(c.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=h||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:l,onLoadingComplete:a}=e,m=(0,s.useRef)(l);(0,s.useEffect)(()=>{m.current=l},[l]);let p=(0,s.useRef)(a);(0,s.useEffect)(()=>{p.current=a},[a]);let[x,w]=(0,s.useState)(!1),[y,j]=(0,s.useState)(!1),{props:_,meta:S}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:n,blurComplete:x,showAltText:y});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:p,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(v,{isAppRouter:!i,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5283:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),i(3179);let r=i(6630),n=i(6594);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var i;let l,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:h,className:m,quality:p,width:b,height:v,fill:x=!1,style:w,overrideSrc:y,onLoad:j,onLoadingComplete:_,placeholder:S="empty",blurDataURL:C,fetchPriority:z,decoding:P="async",layout:E,objectFit:N,objectPosition:O,lazyBoundary:R,lazyRoot:I,...M}=e,{imgConf:k,showAltText:A,blurComplete:D,defaultLoader:B}=t,G=k||n.imageConfigDefault;if("allSizes"in G)l=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);l={...G,allSizes:e,deviceSizes:t}}if(void 0===B)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=M.loader||B;delete M.loader,delete M.srcSet;let L="__next_img_default"in F;if(L){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:i,...r}=t;return e(r)}}if(E){"fill"===E&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let W="",T=s(b),V=s(v);if("object"==typeof(i=d)&&(o(i)||void 0!==i.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,W=e.src,!x){if(T||V){if(T&&!V){let t=T/e.width;V=Math.round(e.height*t)}else if(!T&&V){let t=V/e.height;T=Math.round(e.width*t)}}else T=e.width,V=e.height}}let U=!g&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:W)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,U=!1),l.unoptimized&&(f=!0),L&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),g&&(z="high");let q=s(p),J=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:O}:{},A?{}:{color:"transparent"},w),X=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:T,heightInt:V,blurWidth:a,blurHeight:u,blurDataURL:C||"",objectFit:J.objectFit})+'")':'url("'+S+'")',Y=X?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},H=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:s,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),d=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,r)=>l({config:t,src:i,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:l({config:t,src:i,quality:o,width:a[d]})}}({config:l,src:d,unoptimized:f,width:T,quality:q,sizes:c,loader:F});return{props:{...M,loading:U?"lazy":h,fetchPriority:z,width:T,height:V,decoding:P,className:m,style:{...J,...Y},sizes:H.sizes,srcSet:H.srcSet,src:y||H.src},meta:{unoptimized:f,priority:g,placeholder:S,fill:x}}}},6630:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:s}=e,l=r?40*r:t,a=n?40*n:i,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},6210:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return a},getImageProps:function(){return l}});let r=i(8754),n=i(5283),o=i(4080),s=r._(i(3872));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let a=o.Image},3872:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},9828:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var r=i(5893),n=i(5675),o=i.n(n),s=i(1664),l=i.n(s);function a(){return(0,r.jsxs)("div",{className:"container mx-auto max-w-4xl",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold mb-12 text-center",children:"WM Caf\xe9 Build Guide"}),(0,r.jsxs)("div",{className:"mb-16",children:[(0,r.jsx)("div",{className:"relative w-full mb-8",children:(0,r.jsx)(o(),{src:"/WMCafeSketch.jpg",alt:"Original Cat Cafe Sketch",width:800,height:600,className:"rounded-lg shadow-md mx-auto",priority:!0})}),(0,r.jsxs)("div",{className:"text-center max-w-2xl mx-auto",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"A Cozy Space for Cats"}),(0,r.jsx)("p",{className:"text-lg mb-8 text-neutral-600",children:"Inspired by traditional architecture and aesthetics, this build guide will help you create a perfect caf\xe9 hideaway for your feline friends."}),(0,r.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,r.jsx)(l(),{href:"/schematic",className:"inline-block px-6 py-3 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition-colors",children:"View Schematic"}),(0,r.jsx)(l(),{href:"/instructions",className:"inline-block px-6 py-3 rounded-lg border border-neutral-800 text-neutral-800 hover:bg-neutral-50 transition-colors",children:"Read Instructions"})]})]})]})]})}},5675:function(e,t,i){e.exports=i(6210)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);