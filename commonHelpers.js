import{i as m,S as d}from"./assets/vendor-403a0c46.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const f="45454606-0b86bc84167fe88447f90b3f4",u=e=>fetch(`https://pixabay.com/api/?key=${f}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(`Error: ${t.status}`);return t.json()}).catch(t=>{throw console.error("Error fetching images:",t),t}),l=document.querySelector(".gallery"),h=e=>`<li class="gallery-item">
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
        </li>`,g=e=>{if(l.innerHTML="",e.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const t=e.map(h).join("");l.innerHTML=t,new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8}).refresh()},n=document.querySelector(".search-form"),c=document.querySelector(".loader"),p=()=>{c.classList.remove("hidden")},y=()=>{c.classList.add("hidden")},b=e=>{e.preventDefault();const t=n.elements.user_query.value.trim();t&&(p(),u(t).then(o=>{g(o.hits)}).catch(o=>{console.error("Error fetching images:",o),iziToast.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{y(),n.reset()}))};n.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
