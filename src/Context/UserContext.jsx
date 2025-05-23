import React, { createContext, useState } from 'react'
import { food_items } from '../food';

export const dataContext = createContext();


const UserContext = ({ children }) => {
    let [input, setInput] = useState("");
    let [foodType, setFoodType] = useState("All");
    let [foodCat, setFoodCat] = useState('All');
    let [cat, setCat] = useState(food_items);
    let [showCart, setShowCart] = useState(false)
    let data = {
        input,
        setInput,
        cat,
        setCat,
        foodType,
        setFoodType,
        foodCat,
        setFoodCat,
        showCart,
        setShowCart
    }

    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext
