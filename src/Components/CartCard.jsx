import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem, IncrementQty, DecrementQty } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const CartCard = ({ id, name, price, image, quantity }) => {
    let dispatch = useDispatch()
    return (
        // Main Container   

        <div className='w-full h-[120px] p-2 flex shadow-lg rounded-lg justify-between '>

            {/*Left Div - Image,Name and Quantity */}
            <div className='w-[60%] h-full flex gap-5'>

                {/* image */}
                <div className='w-[60%] h-full overflow-hidden  bg-amber-200 rounded-lg'>
                    <img src={image} alt="" className='object-contain' />
                </div>

                {/* name & quantity */}
                <div className='w-[40%] h-full flex flex-col gap-5'>

                    {/* name */}
                    <div className='text-lg text-gray-600 font-semibold overflow-auto text-nowrap custom-scrollbar '>
                        {name}
                    </div>

                    {/* quantity */}
                    <div className='w-[110px] h-[50px] flex rounded-lg overflow-hidden shadow-xl font-semibold border-1 border-gray-300 '>
                        <button onClick={() => {
                            if (quantity <= 1) {
                                dispatch(RemoveItem(id));
                                toast.error("Item Removed!");
                            }
                            else {
                                dispatch(DecrementQty(id));
                            }
                        }} className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200 transition-all duration-300 cursor-pointer'>-</button>
                        <span className='w-[40%] h-full bg-gray-100 flex justify-center items-center'>{quantity}</span>
                        <button onClick={() => {
                            dispatch(IncrementQty(id))
                        }} className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200 transition-all duration-300  cursor-pointer'>+</button>
                    </div>
                </div>
            </div>

            {/*Right Div - Description */}
            <div className='flex justify-start flex-col items-end gap-5'>

                {/* price and delete icon */}
                <span className='text-xl icon-color font-semibold'>Rs {price}/-</span>
                <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-700 hover:text-red-500 cursor-pointer ' onClick={() => {dispatch(RemoveItem(id));toast.error("Item Removed!");}} />
            </div>
        </div>
    )
}

export default CartCard
