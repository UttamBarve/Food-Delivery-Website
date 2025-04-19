import React, { useContext, useEffect } from 'react'
import { useRef } from 'react'
import { MdOutlineCategory } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../Context/UserContext';
import { food_items } from '../food';
import { FaCircle } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Nav = () => {
  let { input, setInput, setCat, foodType, setFoodType, setFoodCat, setShowCart } = useContext(dataContext);
  useEffect(() => {
    if (foodType === "All") {
      let filteredlist = food_items.filter((items) => (items.food_name.toLowerCase().includes(input.toLowerCase()) || items.price.toString() == input.toString() - 1 || items.price.toString().includes(input)));
      setCat(filteredlist)
    }
    else {
      let filteredlist = food_items.filter((items) => ((items.food_type.toLowerCase() === foodType.toLowerCase()) && (items.food_name.toLowerCase().includes(input.toLowerCase()) || items.price.toString() == input.toString() - 1 || items.price.toString().includes(input))));
      setCat(filteredlist)
    }
  }, [input])

  const refDropMenu = useRef();
  function toggleHidden() {
    refDropMenu.current.classList.toggle('isHidden');
  }

  let items = useSelector((state)=>state.cart)

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8 '>

      <div onClick={toggleHidden} className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]  lg:w-[60px] lg:h-[60px] bg-white flex justify-center items-center rounded-md shadow-md hover:bg-blue-100 cursor-pointer transition-all duration-500 relative flex-col pt-3'>

        {(foodType === "All") ? <MdOutlineCategory className='w-[15px] h-[15px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] icon-color' /> : <FaCircle className={`w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] ${(foodType.toLowerCase() == "veg" ? 'text-green-600' : 'text-red-600')}`} />}
        <span className='top-10.5 left-3 text-[6px] md:text-[8px] lg:text-[12px] font-semibold '>{foodType}</span>

        <div ref={refDropMenu} className='absolute w-20 h-20 font-medium bg-blue-300 left-0 top-15 rounded-xl flex justify-center  flex-col transition-all duration-200 isHidden'>
          <span onClick={() => setFoodType("All")} className='pl-2 hover:text-gray-500 cursor-pointer'>All</span>
          <hr />
          <span onClick={() => setFoodType("Veg")} className='pl-2 hover:text-lime-700 cursor-pointer'>Veg</span>
          <hr />
          <span onClick={() => setFoodType("Non Veg")} className='pl-2 hover:text-red-700 cursor-pointer'>Non-Veg</span>
        </div>


      </div>

      <form onSubmit={(e) => e.preventDefault()} className='w-[70%] md:w-[80%] h-[40%] md:h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md' >

        <IoIosSearch className='icon-color w-[20px] h-[20px] ' />
        <input type="text" placeholder='Search Items...' onChange={(e) => { setInput(e.target.value); setFoodCat("All"); }} value={input} className='w-[100%] outline-none text-[16px] md:text-[20px]' />

      </form>

      <div onClick={()=>setShowCart(true)} className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]  lg:w-[60px] lg:h-[60px] bg-white flex justify-center items-center rounded-md shadow-md relative hover:bg-blue-100 cursor-pointer transition-all duration-500'>

        <span className='absolute top-0 right-2 icon-color font-bold text-[10px] md:text-[12px] lg:text-[15px] '>{items.length}</span>
        <LuShoppingBag  className='cursor:pointer w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] icon-color ' />

      </div>
    </div>
  )
}

export default Nav




