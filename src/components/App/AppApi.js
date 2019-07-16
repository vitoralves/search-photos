import axios from 'axios'

const searchPhotos = (text) => {
  return axios.get('https://pixabay.com/api', {
    params: {
      key: '13048020-4328b80b4b93a7fe3238fe504',
      q: text
    }
  })
}

export {
  searchPhotos
}