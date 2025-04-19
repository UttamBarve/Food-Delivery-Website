import { createContext, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState("All"); // Default is "All"

  return (
    <FoodContext.Provider value={{ selectedType, setSelectedType }}>
      {children}
    </FoodContext.Provider>
  );
};
