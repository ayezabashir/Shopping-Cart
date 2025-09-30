import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {products} from '../products';
import { changeQuantity } from '../stores/cart';

const CartItems = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail)
    }, [productId])
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1,
        }))
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1,
        }))
    }
    
    return (
        <div className='flex justify-between items-center bg-pink-200 text-black p-2 border-b-2 border-pink-300 gap-5 rounded-md'>
            <img src={detail.img} alt={detail.name} className='w-12' />
            <h3>{detail.name}</h3>
            <p>${detail.price * quantity}</p>
            <div className='flex justify-between gap-1'>
                <button className='bg-pink-100 rounded-full w-6 h-6 text-pink-800 cursor-pointer' onClick={handleMinusQuantity}>-</button>
                <span>{quantity}</span>
                <button className='bg-pink-100 rounded-full w-6 h-6 text-pink-800 cursor-pointer' onClick={handlePlusQuantity}>+</button>
            </div>

        </div>
    )
}

export default CartItems