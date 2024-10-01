// useContext.jsx
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [value, setValue] = useState(null); 
    const [users,setUsers]=useState()
    const [users2,setUsers2]=useState()
    return (
        <MyContext.Provider value={{ value, setValue,users,setUsers,users2,setUsers2 }}>
            {children}
        </MyContext.Provider>
    );
};
