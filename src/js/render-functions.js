import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const imageGallery = document.querySelector('.gallery');

export const createGalleryCard = (pictureInfo) => {
    return `<li class="gallery-item">
            <a class="gallery-link" href="${pictureInfo.largeImageURL}">
                <img
                class="gallery-image"
                src="${pictureInfo.webformatURL}"
                data-source="${pictureInfo.largeImageURL}"
                alt="${pictureInfo.tags}"
                />
            </a>
            <div class="info">
                <p class="text-info>Likes: ${pictureInfo.likes}</p>
                <p class="text-info>Views: ${pictureInfo.views}</p>
                <p class="text-info>Comments: ${pictureInfo.comments}</p>
                <p class="text-info>Downloads: ${pictureInfo.downloads}</p>
            </div>
        </li>`;
};

export const renderGallery = (images) => {
    imageGallery.innerHTML = ""; // очищаємо галерею

    if (images.length === 0) {
        iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: 'topRight'
        });
        return;
    }

    const galleryCardsTemplate = images.map(createGalleryCard).join('');
    imageGallery.innerHTML = galleryCardsTemplate;

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        overlayOpacity: 0.8,
    });
};