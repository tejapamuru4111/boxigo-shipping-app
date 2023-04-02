import "./index.css"


const TabItem = (props) => {

    const {activeTab, onChangeActiveTab, tabDetails} = props

    const activeClases = activeTab? "active-tab-styles" : ''

    const onClickTab = () => {
        onChangeActiveTab(tabDetails.tabId)
    }

    return (
        <div className={`nav-tab ${activeClases}`} onClick={onClickTab}>
          <p className="nav-tab-icon">{tabDetails.icon}</p>
          <p className="nav-tab-name">{tabDetails.tabName}</p>  
        </div>
    )
}


export default TabItem