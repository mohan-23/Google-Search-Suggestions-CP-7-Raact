import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateSuggestion} = props
  const {id, suggestion} = suggestionItem

  const updateSearch = () => {
    updateSuggestion(suggestion)
  }

  return (
    <li className="list_items">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="button" onClick={updateSearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
