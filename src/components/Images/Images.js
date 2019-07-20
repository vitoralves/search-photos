import React from 'react'
import './Images.css'
import ImageCard from './ImageCard'

class Images extends React.Component {
  render() {
    return (
      <div className="images-list">
        {this.props.images.map(i => { return <ImageCard key={i.id} image={i} /> })}
      </div>
    )
  }
}

export default Images