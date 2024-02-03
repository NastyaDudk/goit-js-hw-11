import{S as m,i as p}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),a=document.querySelector(".gallery-el"),c=document.querySelector(".loader");u();const h=new m(".gallery a",{captionDelay:250});l.addEventListener("submit",y);function y(r){r.preventDefault(),$();const n=l.elements.searchQuery.value;g(n).then(s=>b(s.hits)).catch(s=>L(s)),l.reset()}function g(r){const n="https://pixabay.com/api/",i=`?key=42153847-0f7baac2d7b2e92d7ce6bbe8e&q=${r}`,e="&image_type=photo&orientation=horizontal&safesearch=true&per_page=20",t=n+i+e;return fetch(t).then(o=>o.json()).then(o=>{if(o.total===0)throw new Error("No images found");return o})}function b(r){const n=r.map(({largeImageURL:s,webformatURL:i,tags:e,likes:t,views:o,comments:d,downloads:f})=>`
      <div class="gallery">
        <a href="${s}">
          <img src="${i}" alt="${e}" title="${e}" width="360" height="300" />
          <ul class="info-cards-container">
            <li class="info-cards-elements">likes<span>${t}</span></li>
            <li class="info-cards-elements">views<span>${o}</span></li>
            <li class="info-cards-elements">comments<span>${d}</span></li>
            <li class="info-cards-elements">downloads<span>${f}</span></li>
          </ul>
        </a>
      </div>
    `).join("");a.innerHTML=n,u(),h.refresh()}function L(r){a.innerHTML="",p.show({message:`❌ "${r.message}. Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function $(){c.style.display="block"}function u(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
