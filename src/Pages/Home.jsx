import React, { useContext, useEffect } from 'react'
import Nav from '../Components/Nav'
import Categories from '../Category'
import Card from '../Components/Card'
import { food_items } from '../food.js'
import { dataContext } from '../Context/UserContext.jsx'
import CartMenu from '../Components/CartMenu.jsx'
const Home = () => {

  let { input, cat, setCat, foodType, foodCat, setFoodCat } = useContext(dataContext);

  useEffect(() => {
    if (foodCat === "All" && foodType === 'All') {
      setCat(food_items);
    }
    else if (foodCat === "All" && foodType !== "All") {
      let filteredList = food_items.filter((item) => ((item.food_type.toLowerCase() === foodType.toLowerCase())));
      setCat(filteredList);
    }
    else if (foodCat !== "All" && foodType === "All") {
      let filteredList = food_items.filter((item) => ((item.food_category.toLowerCase() === foodCat.toLowerCase())));
      setCat(filteredList);
    }
    else {
      let filteredList = food_items.filter((item) => ((item.food_type.toLowerCase() === foodType.toLowerCase()) && (item.food_category.toLowerCase() === foodCat.toLowerCase())));
      setCat(filteredList);
    }
  }, [foodType, foodCat])




  return (
    <div className={`bg-slate-200 w-full min-h-screen `}>

      {/* Nav */}
      <Nav />

      {/* Category Menu */}
      {!input ?
        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]' >
          {Categories.map((item) => (
            <div className={` w-[46.6px] h-[50px] md:w-[70px] md:h-[75px] lg:w-[140px] lg:h-[150px] bg-white flex justify-center items-center flex-col gap-2 rounded-lg shadow-xl hover:bg-blue-100 cursor-pointer transition-all duration-500`} onClick={(e) => setFoodCat(item.name)}>
              <div className=''>{item.image}</div>
              <div className="font-semibold text-[5.3px] md:text-[8px] lg:text-[16px] text-gray-700">
                {item.name}
              </div>
            </div>
          ))}
        </div>
        : null}


      {/* food cards */}
      <div className='w-full flex flex-wrap gap-5 px-5 py-8 justify-center items-center'>
        {cat.length > 0 ?
          <>
            {cat.map((item) => (
              <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
            ))}
          </>
          :
          <span className='text-lg font-semibold text-slate-500'>No Dish Found</span>
        }

      </div>

      <CartMenu />

    </div>
  )
}

export default Home
