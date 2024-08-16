import{i as m,S as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const u="45454606-0b86bc84167fe88447f90b3f4",f=e=>fetch(`https://pixabay.com/api/?key=${u}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(`Error: ${r.status}`);return r.json()}).catch(r=>{throw console.error("Error fetching images:",r),r}),l=document.querySelector(".gallery"),p=e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                class="gallery-image"
                src="${e.webformatURL}"
                data-source="${e.largeImageURL}"
                alt="${e.tags}"
                />
            </a>
            <div class="info">
                <p class="text-info">Likes: <span class="number-info">${e.likes}</span></p>
                <p class="text-info">Views: <span class="number-info">${e.views}</span></p>
                <p class="text-info">Comments: <span class="number-info">${e.comments}</span></p>
                <p class="text-info">Downloads: <span class="number-info">${e.downloads}</span></p>
            </div>
        </li>`,g=e=>{if(l.innerHTML="",e.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const r=e.map(p).join("");l.innerHTML=r,new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8})},n=document.querySelector(".search-form"),c=document.querySelector(".loader"),h=()=>{c.classList.remove("hidden")},y=()=>{c.classList.add("hidden")},L=e=>{e.preventDefault();const r=n.elements.user_query.value.trim();r&&(h(),f(r).then(o=>{g(o.hits)}).catch(o=>{console.error("Error fetching images:",o),iziToast.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{y(),n.reset()}))};n.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
