// useContext.jsx
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [value, setValue] = useState(null); // Misol uchun
    const [value2, setValue2] = useState(null); // Misol uchun

    return (
        <MyContext.Provider value={{ value, setValue,value2, setValue2 }}>
            {children}
        </MyContext.Provider>
    );
};
