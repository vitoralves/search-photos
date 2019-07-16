import React from 'react'

class Images extends React.Component {

  render() {
    console.log(this.props.images)
    return (
      <div>
        {this.props.images.map(i => { return <img key={i.id} alt={i.tags} src={i.webformatURL} /> })}
      </div>
    )
  }
}

export default Images