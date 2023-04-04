import { useState } from 'react'

import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai'

import './index.css'

const InventoryItem = (props) => {
    const {inventory} = props

    const [isExpand, setIsExpand] = useState(false)

    //console.log(inventory.category)

    const qtyArr = inventory.category.map(item => item.items.map(obj => obj.qty))
    let qty = 0
    for (let arr of qtyArr){
        qty += arr.reduce((a,v) => a + v)
    }
    //console.log(qty)


    const onExpandSection = () => {
        setIsExpand(!isExpand)
    }

    const expandDetails = () => (
            <div className='inventory-items-card'>
                {qty === 0? <p className='inventory-items-card-list-title'>No Items</p>
                     : 
                     inventory.category.map(item => {
                        const categoryItemQtyArr = item.items.map(arr => arr.qty)
                        const categoryItemQtyArrQty = categoryItemQtyArr.reduce((a,v) => a+v)
                        if (categoryItemQtyArrQty === 0){
                            return ''
                        }
                        return (
                                <ul key={item.id} className='inventory-items-card-list'>
                                    <h1 className='inventory-items-card-list-title'>{item.displayName}</h1>
                                    {item.items.map(itemName => {
                                        if (itemName.qty !== 0){
                                            return (
                                                <li key={itemName.id} className='inventory-items-card-list-item'>
                                                    <p className='inventory-items-card-list-item-name'>{itemName.displayName} : </p>
                                                    <p className='inventory-items-card-list-item-count'>{itemName.qty}</p>
                                                </li>
                                            )
                                        }
                                        return ''
                                    })}
                                </ul>
                            )}
                        )
                }
            </div>
        )

    return (
        <li>
            <div className='house-furniture-ites-list-item'>
                <h1 className='house-furniture-inventory-name'>{inventory.displayName}<span className='total-numbeer-of-items'>{qty}</span></h1>
                <button type='button' className='house-furniture-inventory-btn' onClick={onExpandSection}>{isExpand? <AiOutlineUp /> : <AiOutlineDown />}</button>
            </div>
            {isExpand? expandDetails():''}
        </li>
    )
}

export default InventoryItem