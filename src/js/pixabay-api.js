const API_KEY = '45454606-0b86bc84167fe88447f90b3f4';

export const fetchImages = async (query) => {
    const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    
    if (!response.ok) {
        throw new Error(response.status);
    }
    
    return await response.json();
};