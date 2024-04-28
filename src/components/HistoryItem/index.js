import './index.css'

const HistoryItem = props => {
  const {historyItem, removeHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const deleteHistory = () => {
    removeHistory(id)
  }
  return (
    <li className="history">
      <p className="time">{timeAccessed}</p>
      <div className="logoContainer">
        <img src={logoUrl} alt="domain logo" className="hlogo" />
        <div className="txtContainer">
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <button
          onClick={deleteHistory}
          className="delBtn"
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="deleteLogo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
