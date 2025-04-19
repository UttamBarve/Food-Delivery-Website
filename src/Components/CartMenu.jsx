import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../Context/UserContext';
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import { ResetItems } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const CartMenu = () => {
    let { showCart, setShowCart } = useContext(dataContext);
    let items = useSelector((state) => state.cart);
    let subtotal = items.reduce((total, item) => total + (item.quantity*item.price), 0);
    let deliveryFee = 20;
    let taxes = Math.round(subtotal * 0.5 / 100);
    let grandTotal = Math.round(subtotal + deliveryFee + taxes);
    let dispatch = useDispatch();
    return (

        <div className={`w-full md:w-[60vw] lg:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-2xl p-8 ${(showCart) ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 overflow-x-auto custom-scrollbar  `} >
            <header className='w-full flex justify-between '>
                <span className='icon-color text-[18px] font-medium '>Order Items</span>
                <RxCross2 onClick={() => setShowCart(false)} className='text-blue-900 w-6 h-6 cursor-pointer hover:text-red-700' />
            </header>


            {(items.length != 0) ?
               <>
               <div className='flex flex-col w-full mt-8 gap-5'>
                    {items.map((item) => (
                        <CartCard id={item.id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} />

                    ))}
                </div> 
                
                
                <div className='w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-4 p-8'>
                <div className="w-full flex justify-between items-center">
                    <span className='text-md text-gray-600 font-semibold'>Subtotal</span>
                    <span className='icon-color font-semibold text-md'>Rs {subtotal}/-</span>
                </div>
                <div className="w-full flex justify-between items-center">
                    <span className='text-md text-gray-600 font-semibold'>Delivery Fee</span>
                    <span className='icon-color font-semibold text-md'>Rs {deliveryFee}/-</span>
                </div>
                <div className="w-full flex justify-between items-center border-b-2 border-gray-400 pb-2">
                    <span className='text-md text-gray-600 font-semibold'>Taxes</span>
                    <span className='icon-color font-semibold text-md'>Rs {taxes}/-</span>
                </div>
                <div className="w-full flex justify-between items-center ">
                    <span className='text-2xl text-gray-600 font-semibold'>Total</span>
                    <span className='icon-color font-semibold text-2xl '>Rs {grandTotal}/-</span>
                </div>
                <button onClick={()=>{toast.success("Order Placed!"); dispatch(ResetItems())}} className='w-full h-[30px] md:h-[40px] lg:h-[50px] text-[10px] md:text-[13px] lg:text-[18px] flex justify-center items-center p-3 hover:bg-blue-800 rounded-lg hover:text-white bg-blue-500 text-black transition-all duration-250 cursor-pointer'>Place Order</button>
            </div>
            </>
                    

                :<span className='font-semibold text-slate-500 text-2xl flex justify-center mt-10'>The Cart is Empty!</span>
            }

            
        </div>

    )
}

export default CartMenu
