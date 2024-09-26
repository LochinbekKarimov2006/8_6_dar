import React from 'react';
import { Navigate } from 'react-router-dom';

function Provayder({ user, children }) { // children argumentini qo'shish
  if (user) {
    return children; // Foydalanuvchi mavjud bo'lsa, children qaytariladi
  } else {
    return <Navigate to="/login" />; // Foydalanuvchi mavjud bo'lmasa, login sahifasiga yo'naltiriladi
  }
}

export default Provayder;
