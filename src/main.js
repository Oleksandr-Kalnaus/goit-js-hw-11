import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');

const onSearchForm = async (event) => {
    event.preventDefault();
    const searchValue = searchForm.elements.user_query.value.trim();

    if (!searchValue) {
        return; 
    }

    try {
        const data = await fetchImages(searchValue);

        renderGallery(data.hits);
    } catch (error) {
        console.error('Error fetching images:', error);
        iziToast.error({
            message: "Something went wrong. Please try again later.",
            position: 'topRight'
        });
    }
};

searchForm.addEventListener('submit', onSearchForm);