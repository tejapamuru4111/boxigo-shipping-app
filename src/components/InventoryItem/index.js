import { useState } from 'react'

import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'

import './index.css'

const InventoryItem = (props) => {
    const {inventory} = props

    const [isExpand, setIsExpand] = useState(false)

    console.log(inventory.category[0].items)

    const onExpandSection = () => {
        setIsExpand(!isExpand)
    }

    const expandDetails = () => (
        <div className='inventory-items-card'>
            {inventory.category.map(item => (
                <ul key={item.id} className='inventory-items-card-list'>
                    <h1 className='inventory-items-card-list-title'>{item.displayName}</h1>
                    {item.items.map(itemName => {
                        if (itemName.qty !== 0){
                            return (
                                <li key={itemName.id} className='inventory-items-card-list-item'>
                                    <p className='inventory-items-card-list-item-name'>{itemName.displayName}<br></br></p>
                                    <p className='inventory-items-card-list-item-count'>{itemName.qty}</p>
                                </li>
                            )
                        }
                        return ''
                    })}
                </ul>
            ))}
        </div>
    )

    return (
        <li>
            <div className='house-furniture-ites-list-item'>
                <h1 className='house-furniture-inventory-name'>{inventory.displayName}<span className='total-numbeer-of-items'>{inventory.category[0].items.length}</span></h1>
                <button type='button' className='house-furniture-inventory-btn' onClick={onExpandSection}>{isExpand? <AiOutlineUp /> : <AiOutlineDown />}</button>
            </div>
            {isExpand? expandDetails():''}
        </li>
    )
}

export default InventoryItem