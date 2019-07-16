import React from 'react'

class SearchBar extends React.Component {

  state = { text: '' }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.text)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Pesquisar imagem</label>
            <input type="text"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}></input>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar