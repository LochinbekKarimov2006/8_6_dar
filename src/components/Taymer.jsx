import React, { useEffect, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../context/useContext';

function App() {
    const { value, setValue } = useContext(MyContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!value); // Foydalanuvchi kirganligini tekshirish
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const timeout = setTimeout(() => {
        setIsLoggedIn(false); // Foydalanuvchini chiqaring
        localStorage.removeItem('token'); // Tokenni o'chirish
        setValue(null); // Contextni yangilang
      }, 1800000);
      return () => clearTimeout(timeout);
    }
  }, [isLoggedIn, setValue]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Agar foydalanuvchi kirgan bo'lmasa loginga o'tkazish
  }

  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default App;
