import axios from 'axios'

const searchPhotos = (text) => {
    return axios.get('https://www.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID c28007fd656a1f24307f8b30c5b98c11dc0dbf172290a2db0cd26c80a081348b'
            },
            params: {query: text}
        })
}

export {
    searchPhotos 
}