import { useState } from 'react'
import {format} from 'date-fns'

import {BsFillArrowRightCircleFill,BsCalendarDateFill,BsFillPencilFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {FaLuggageCart} from 'react-icons/fa'
import {GiPathDistance} from 'react-icons/gi'
import {RiAlertFill} from 'react-icons/ri'

import InventoryItem from '../InventoryItem'

import './index.css'

const AddressItem = (props) => {
    const {moveData} = props

    const [viewDetails, setViewDetails] = useState(false)

    const moveDateFormat = () => {
        const date = new Date(moveData.moving_on)
        const shiftOn = format(date, 'd MMM Y hh:mm aaa')
        return shiftOn
    }

    const onViewMoveDetails = () => {
        setViewDetails(!viewDetails)
    }

    const detailsSection = () => (
        <>
            <div className='address-additional-info'>
                <h1 className='address-additional-info-title'>Additional Information </h1>
                <button className='address-additional-info-button'>Edit Additional Info</button>
            </div>
            <p className='address-item-from-data'>Test Data</p>
            <div className='address-additional-info'>
                <h1 className='address-additional-info-title'>House Details</h1>
                <button className='address-additional-info-button'>Edit House Details</button>
            </div>
            <h1 className='address-additional-info-house'>Existing House Details</h1>
            <div className='address-additional-info'>
                <p className='old-new-house-details'><b>Floor No. </b><br />{moveData.old_floor_no}</p>
                <p className='old-new-house-details'><b>Elevator Availble </b><br />{moveData.old_elevator_availability}</p>
                <p className='old-new-house-details'><b>Distance From Elevator / Staircase to truck</b><br />{moveData.old_parking_distance}</p>
            </div>
            <h1 className='address-additional-info-house'>New House Details</h1>
            <div className='address-additional-info'>
                <p className='old-new-house-details'><b>Floor No. </b><br />{moveData.new_floor_no}</p>
                <p className='old-new-house-details'><b>Elevator Availble </b><br />{moveData.new_elevator_availability}</p>
                <p className='old-new-house-details'><b>Distance From Elevator / Staircase to truck</b><br />{moveData.new_parking_distance}</p>
            </div>
            <div className='address-additional-info'>
                <h1 className='address-additional-info-title'>Inventory Details</h1>
                <button className='address-additional-info-button'>Edit Inventory</button>
            </div>
            <ul className='house-furniture-ites-list'>
                {moveData.items.inventory.map(item => <InventoryItem key={item.id} inventory={item} />)}
            </ul>
        </>
    )

    return (
        <>
            <div className='address-item-card'>
                <div className='address-item-chaild'>
                    <h3 className='address-item-from'>From</h3>
                    <p className='address-item-from-data'>{moveData.moving_from}</p>
                </div>
                <div className='address-item-chaild-icon'>
                    <BsFillArrowRightCircleFill color='#f3b455' />
                </div>
                <div className='address-item-chaild'>
                    <h3 className='address-item-from'>To</h3>
                    <p className='address-item-from-data'>{moveData.moving_to}</p>
                </div>
                <div className='address-item-chaild'>
                    <h3 className='address-item-from'>Request#</h3>
                    <p className='address-item-request'>{moveData.estimate_id}</p>
                </div>
            </div>
            <div className='address-item-card'>
                <div className='address-shifting-details'>
                    <AiFillHome color='#f3b455' />
                    <p className='address-shifting-details-des'>{moveData.property_size}</p>
                </div>
                <div className='address-shifting-details'>
                    <FaLuggageCart color='#f3b455' />
                    <p className='address-shifting-details-des'>{moveData.total_items}</p>
                </div>
                <div className='address-shifting-details'>
                    <GiPathDistance color='#f3b455' />
                    <p className='address-shifting-details-des'>{moveData.distance}</p>
                </div>
                <div className='address-shifting-details'>
                    <BsCalendarDateFill color='#f3b455' />
                    <p className='address-shifting-details-des'>{moveDateFormat()}</p>
                    <BsFillPencilFill />
                </div>
                <div className='address-shifting-details'>
                    <input type='checkbox' id='flexible' defaultChecked/>
                    <label htmlFor='flexible' className='address-shifting-details-des'>is flexible</label>
                </div>
                <button className='address-view-move-details-btn' type='button' onClick={onViewMoveDetails}>View Move Details</button>
                <button className='address-quote-await-btn' type='button'>Quotes Awaiting</button>
            </div>
            <div className='address-shifting-details-danger'>
                <RiAlertFill color='#f3b455' />
                <p className='address-shifting-details-des'><b>Disclimer : </b>Please update your move date before two days of shifting</p>
            </div>
            {viewDetails? detailsSection():''}
            <hr/>
        </>
    )
}

export default AddressItem