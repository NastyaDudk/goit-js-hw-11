import{S as f,i as m}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector("#search-form");document.querySelector(".gallery-el");const a=document.querySelector(".loader");c();const p=new f(".gallery a",{captionDelay:250});l.addEventListener("submit",h);function h(n){n.preventDefault(),L();const o=l.elements.searchQuery.value;y(o).then(s=>g(s.hits)).catch(s=>b(s)),l.reset()}function y(n){const o="https://pixabay.com/api/",i=`?key=42153847-0f7baac2d7b2e92d7ce6bbe8e&q=${n}`,e="&image_type=photo&orientation=horizontal&safesearch=true&per_page=20",t=o+i+e;return fetch(t).then(r=>r.json()).then(r=>{if(r.total===0)throw new Error("No images found");return r})}function g(n){const o=n.map(({largeImageURL:s,webformatURL:i,tags:e,likes:t,views:r,comments:u,downloads:d})=>`
      <div class="gallery">
        <a href="${s}">
          <img src="${i}" alt="${e}" title="${e}" width="360" height="300" />
          <ul class="info-cards-container">
            <li class="info-cards-elements">likes<span>${t}</span></li>
            <li class="info-cards-elements">views<span>${r}</span></li>
            <li class="info-cards-elements">comments<span>${u}</span></li>
            <li class="info-cards-elements">downloads<span>${d}</span></li>
          </ul>
        </a>
      </div>
    `).join("");galleryEl.innerHTML=o,c(),p.refresh()}function b(n){galleryEl.innerHTML="",m.show({message:`❌ "${n.message}. Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function L(){a.style.display="block"}function c(){a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
