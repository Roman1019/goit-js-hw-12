import{S as L,i,a as f}from"./assets/vendor-951421c8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g=document.querySelector(".form-search"),$=document.querySelector(".search-box"),u=document.querySelector(".gallery"),p=document.querySelector(".loader"),c=document.querySelector(".load-btn"),m=document.querySelector(".loader-more"),v="https://pixabay.com/api",w="42094427-74698892ced21067e7c382b52";p.style.display="none";c.style.display="none";m.style.display="none";let l=1,d=0;const E=40;let b="";const y=new L(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250});g.addEventListener("submit",async function(o){o.preventDefault();const t=encodeURIComponent($.value.trim());if(t.trim()===""){i.error({title:"Error",message:"Enter search data"});return}b=t,l=1,c.style.display="none",p.style.display="block",y.refresh(),g.reset();try{const s=await f.get(`${v}/?key=${w}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=40`);d=s.data.totalHits,H(s.data.hits)}catch(s){console.error(s),i.warning({title:"Error",message:"Something went wrong"})}finally{p.style.display="none"}});c.addEventListener("click",async()=>{try{m.style.display="block";const o=encodeURIComponent(b.trim());l++;const t=await f.get(`${v}/?key=${w}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=40`);d=t.data.totalHits;const s=t.data.hits,n=Math.ceil(d/E);if(d>0&&l>n){i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),c.style.display="none";return}const e=q(s);u.insertAdjacentHTML("beforeend",e),y.refresh(),y.refresh()}catch(o){console.error(o),i.warning({title:"Error",message:"Something went wrong"})}finally{m.style.display="none";const o=k();window.scrollBy({top:o*2,left:0,behavior:"smooth"})}});const h=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?h.style.display="block":h.style.display="none"});h.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});function k(){return document.querySelector(".gallery-item").getBoundingClientRect().height}function q(o){return o.map(({webformatURL:t,largeImageURL:s,tags:n,likes:e,views:r,comments:a,downloads:S})=>`<li class="gallery-item">
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
              <p class="quantity">${a}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${S}</p>
            </div>
          </div>
        </li>`).join("")}function H(o){if(u.innerHTML="",o.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=q(o);u.innerHTML=t,c.style.display="block",y.refresh()}
//# sourceMappingURL=commonHelpers.js.map
