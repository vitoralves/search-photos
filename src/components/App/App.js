import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { searchPhotos } from './AppApi'

class App extends React.Component {

    state = { images: [] }

    onSearchSubmit = async text => {
        console.log(text)
        const response = await searchPhotos(text)
        console.log(response)
        this.setState({ images: response.data.result })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App