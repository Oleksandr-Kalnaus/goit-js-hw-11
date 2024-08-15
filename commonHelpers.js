import{i as c,S as m}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const f="45454606-0b86bc84167fe88447f90b3f4",u=async e=>{const r=await fetch(`https://pixabay.com/api/?key=${f}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error(r.status);return await r.json()},n=document.querySelector(".gallery"),g=e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                class="gallery-image"
                src="${e.webformatURL}"
                data-source="${e.largeImageURL}"
                alt="${e.tags}"
                />
            </a>
            <div class="info">
                <p class="text-info>Likes: ${e.likes}</p>
                <p class="text-info>Views: ${e.views}</p>
                <p class="text-info>Comments: ${e.comments}</p>
                <p class="text-info>Downloads: ${e.downloads}</p>
            </div>
        </li>`,y=e=>{if(n.innerHTML="",e.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const r=e.map(g).join("");n.innerHTML=r,new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8})},l=document.querySelector(".search-form"),d=async e=>{e.preventDefault();const r=l.elements.user_query.value.trim();if(r)try{const s=await u(r);y(s.hits)}catch(s){console.error("Error fetching images:",s),iziToast.error({message:"Something went wrong. Please try again later.",position:"topRight"})}};l.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
