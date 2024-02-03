import{S as $,i as a,a as g}from"./assets/vendor-951421c8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=document.querySelector(".form-search"),E=document.querySelector(".search-box"),u=document.querySelector(".gallery"),p=document.querySelector(".loader"),i=document.querySelector(".load-btn"),m=document.querySelector(".loader-more"),v="https://pixabay.com/api",b="42094427-74698892ced21067e7c382b52";p.style.display="none";i.style.display="none";m.style.display="none";let d=1,l=0;const w=40;let q="";const y=new $(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250});f.addEventListener("submit",async function(o){o.preventDefault();const t=encodeURIComponent(E.value.trim());if(t.trim()===""){a.error({title:"Error",message:"Enter search data"});return}q=t,d=1,i.style.display="none",p.style.display="block",y.refresh(),f.reset();try{const s=await g.get(`${v}/?key=${b}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${d}&per_page=40`);if(l=s.data.totalHits,I(s.data.hits),l>0&&l<=w){a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),i.style.display="none";return}}catch(s){console.error(s),a.warning({title:"Error",message:"Something went wrong"})}finally{p.style.display="none"}});i.addEventListener("click",async()=>{try{m.style.display="block";const o=encodeURIComponent(q.trim());d++;const t=await g.get(`${v}/?key=${b}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${d}&per_page=40`);l=t.data.totalHits;const s=t.data.hits,n=Math.ceil(l/w);if(l>0&&d>n){a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),i.style.display="none";return}const e=S(s);u.insertAdjacentHTML("beforeend",e),y.refresh(),y.refresh()}catch(o){console.error(o),a.warning({title:"Error",message:"Something went wrong"})}finally{m.style.display="none";const o=k();window.scrollBy({top:o*2,left:0,behavior:"smooth"})}});const h=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?h.style.display="block":h.style.display="none"});h.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});function k(){return document.querySelector(".gallery-item").getBoundingClientRect().height}function S(o){return o.map(({webformatURL:t,largeImageURL:s,tags:n,likes:e,views:r,comments:c,downloads:L})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${n}"
              width="360"
            />
          </a>
          <div class="info-section">
            <div class="section">
              <h2 class="tittle">Likes</h2>
              <p class="quantity">${e}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Views</h2>
              <p class="quantity">${r}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Comments</h2>
              <p class="quantity">${c}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${L}</p>
            </div>
          </div>
        </li>`).join("")}function I(o){if(u.innerHTML="",o.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=S(o);u.innerHTML=t,i.style.display="block",y.refresh()}
//# sourceMappingURL=commonHelpers.js.map
