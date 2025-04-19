import React from 'react'
import { GiChickenOven } from "react-icons/gi";     
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
const Card = ({name, image, id, price, type}) => {

let dispatch = useDispatch()
  return (
    //  outer div
    <div className='w-[150px] h-[200px] md:w-[200px] md:h-[266.6px] lg:w-[300px] lg:h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:bg-gray-100 transition-all duration-100 hover:border-2 border-blue-100 '>
    
    {/* image */}
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt="image1"  className='object-cover'/>
      </div>
    
    {/* img name */}
      <div className='text-[12px] md:text-[15px] lg:text-[24px] font-semibold'>
        {name}
      </div>

    {/* img details */}
      <div className='flex w-full justify-between items-center'>
        <div className='icon-color text-[10px] md:text-[13px] lg:text-[18px] font-bold'>Rs {price}/-</div>
        <div className='flex items-center justify-center gap-2 icon-color text-[10px] md:text-[13px] lg:text-[18px] font-semibold'>{(type==="veg")?<LuLeafyGreen />:<GiChickenOven />}<span>{type}</span></div>
      </div>

      {/* button */}
    <button onClick={()=>{
      dispatch(AddItem({id:id, name:name, price:price, image:image, quantity:1}));
      toast.success("Item Added!")
  }}
   className='w-full h-[30px] md:h-[40px] lg:h-[50px] text-[10px] md:text-[13px] lg:text-[18px] flex justify-center items-center p-3 bg-blue-800 rounded-lg text-white hover:bg-blue-500 hover:text-black transition-all duration-250 cursor-pointer'>Add To Cart</button>

    </div>
  )
}

export default Card
