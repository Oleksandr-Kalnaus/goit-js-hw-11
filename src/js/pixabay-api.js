const API_KEY = '45454606-0b86bc84167fe88447f90b3f4';

export const fetchImages = (query) => {
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            throw error;
        });
};
