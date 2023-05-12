import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchRsults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="body-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />
        <div className="google-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input"
              value={searchInput}
              onChange={this.onSearchInput}
            />
          </div>
          <ul className="search-list">
            {searchRsults.map(eachList => (
              <SuggestionItem
                suggestionItem={eachList}
                key={eachList.id}
                updateSuggestion={this.updateSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
