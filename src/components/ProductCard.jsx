import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCard = (props) => {
    const carts = useSelector((store) => store.cart.items);
    const { id, name, price, img, slug } = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1,
        }))
    }

    return (
        <div className='bg-white p-5 rounded-xl shadow-sm'>
            <Link to={slug}>
                <img src={img} alt={name} loading='lazy' className='w-full h-80 object-cover object-center drop-shadow-sm' />
            </Link>
            <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
            <div className='flex justify-between items-center'>
                <p>
                    <span className='text-2xl font-medium'>${price}</span>
                </p>
                <button className='bg-pink-100 p-2 cursor-pointer rounded-md text-sm hover:bg-pink-200 transition-all duration-300' onClick={handleAddToCart}>
                    🛒 Add To Cart
                </button>
            </div>
        </div>
  )
}

export default ProductCard;