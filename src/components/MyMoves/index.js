import { useEffect, useState } from 'react'
import {ThreeDots} from 'react-loader-spinner'
import data from '../../data/data.json'
import './index.css'

import AddressItem from '../AddressItem'

const apiConstatnt = {
    initial : "INITIAL",
    inProgress : "IN_PROGRESS",
    success : "SUCCESS",
    failure : "FAILURE"
}

const MyMoves = () => {
    
    const [apiStatus, setApiStatus] = useState(apiConstatnt.initial)
    const [estimateData, setEstimateData] = useState([])

    useEffect(() => {
        setApiStatus(apiConstatnt.inProgress)
        const fetchData = () => {
            try {
                setEstimateData(data.Customer_Estimate_Flow)
                console.log(data.Customer_Estimate_Flow)
                setApiStatus(apiConstatnt.success)
            }
            catch {
                setApiStatus(apiConstatnt.failure)
            }
        }
        setTimeout(fetchData, 1000);
    },[estimateData])

    const successView = () => (
        <div className='my-moves-success-card'>
            {estimateData.map(address => <AddressItem key={address.estimate_id} moveData={address} />)}
        </div>
    )

    const lodingView = () => (
        <div className='my-moves-loader-card'>
            <ThreeDots color='#febc07' height={30} width={70}/>
        </div>
    )

    const onRetryData = () => {
        setEstimateData([])
    }

    const failureView = () => (
        <div className='my-moves-failure-card'>
            <p className='my-moves-failure-msg'>Somthing went Wrong</p>
            <button type='button' className='my-moves-failure-retry-btn' onClick={onRetryData}>Retry</button>
        </div>
    )

    const renderAllViews = () => {
        switch (apiStatus) {
            case apiConstatnt.success:
                return successView();
            case apiConstatnt.inProgress:
                return lodingView();
            case apiConstatnt.failure:
                return failureView();
            default:
                return null;
        }
    }

    return (
    <div className='my-moves-bg-card'>
        <h1 className='my-moves-title'>My Moves</h1>
        {renderAllViews()}
    </div>
)}

export default MyMoves