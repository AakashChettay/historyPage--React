import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = props
    this.state = {historyList: initialHistoryList, initialHistoryList} // Save the initial history list
  }

  removeHistory = uniqueId => {
    const {historyList} = this.state
    const filteredList = historyList.filter(item => item.id !== uniqueId)
    this.setState({historyList: filteredList})
  }

  searchingFeature = event => {
    const {initialHistoryList} = this.state
    const searchText = event.target.value.toLowerCase()

    if (searchText === '') {
      // If search text is empty, revert to initial list
      this.setState({historyList: initialHistoryList})
      return
    }

    const searchResults = initialHistoryList.filter(item => {
      const loweredTitle = item.title.toLowerCase()
      return loweredTitle.includes(searchText)
    })

    this.setState({historyList: searchResults})
  }

  render() {
    const {historyList} = this.state

    return (
      <>
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <input
              placeholder="Search history"
              onChange={this.searchingFeature}
              type="search"
              className="searchBar"
            />
          </div>
        </div>
        <div className="bgContainer">
          {historyList.length !== 0 ? (
            <ul className="historyContainer">
              {historyList.map(item => (
                <HistoryItem
                  key={item.id}
                  historyItem={item}
                  removeHistory={this.removeHistory}
                />
              ))}
            </ul>
          ) : (
            <div className="bgContainer2">
              <p className="messageStyle">There is no history to show</p>
            </div>
          )}
        </div>
      </>
    )
  }
}
export default BrowserHistory
