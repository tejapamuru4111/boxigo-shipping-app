import { useState } from 'react'

import {MdLocalShipping,MdPerson} from 'react-icons/md'
import {TbBlockquote} from 'react-icons/tb'
import {RiLogoutCircleFill} from 'react-icons/ri'

import "./index.css"
import TabItem from "../TabItem"
import MyMoves from '../MyMoves'
import MyProfile from '../MyProfile'
import MyQuote from '../MyQuote'
import Logout from '../Logout'

const tabsList = [
    {tabId : "MY_MOVES", tabName: "MY MOVES", icon: <MdLocalShipping />},
    {tabId : "MY_PROFILE", tabName: "MY PROFILE", icon: <MdPerson />},
    {tabId : "GET_QUOTE", tabName: "GET QUOTE", icon: <TbBlockquote />},
    {tabId : "LOGOUT", tabName: "LOGOUT", icon: <RiLogoutCircleFill />}
]

function Home () {

    const [activeTab, setActiveTab] = useState(tabsList[0].tabId)

    const onChangeActiveTab = (id) => {
        setActiveTab(id)
    }

    const renderMainCard = () => {
        switch (activeTab) {
            case tabsList[0].tabId:
                return <MyMoves />
            case tabsList[1].tabId:
                return <MyProfile/>
            case tabsList[2].tabId:
                return <MyQuote />
            case tabsList[3].tabId:
                return <Logout />
            default:
                return null;
        }
    }

    return(
        <div className="home-background-card">
            <div className="home-nav-card">
                {tabsList.map(tab => (<TabItem key={tab.tabId} activeTab={activeTab === tab.tabId} tabDetails={tab} onChangeActiveTab={onChangeActiveTab} />))}
            </div>
            <div className="home-main-card">
                {renderMainCard()}
            </div>
        </div>
    )
}

export default Home