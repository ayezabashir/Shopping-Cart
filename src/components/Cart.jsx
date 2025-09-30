import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'

const Cart = () => {
  const carts = useSelector(store => store.cart.items)
  const statusTab = useSelector(store => store.cart.statusTab)
  return (
    <div className={`fixed top-0 right-0 bg-pink-100 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
       transform transition-transform duration-500 ${statusTab===false ? "translate-x-full" : ""} `} >
      <h2 className='p-5 text-black text-2xl'>Shopping Cart</h2>
      <div className="p-5 flex flex-col gap-2">
        {carts.map((item, key) =>
            <CartItems key={key} data={item} />
        )}
      </div>
      <div className="grid grid-cols-2">
        <button className='bg-gray-400 text-black font-semibold cursor-pointer'>CLOSE</button>
        <button className='bg-pink-300 text-black font-semibold'>CHECKOUT</button>
      </div>

    </div>
  )
}

export default Cart