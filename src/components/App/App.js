import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Images from '../Images/Images'
import { searchPhotos } from './AppApi'

class App extends React.Component {

  state = { images: [] }

  onSearchSubmit = async text => {
    const response = await searchPhotos(text)
    this.setState({ images: response.data.hits })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Images images={this.state.images} />
      </div>
    )
  }
}

export default App