import React from 'react';
import { Link } from 'react-router-dom';
import '../../Pages/Error/Error.css'; 

const ErrorPage = () => {
  return (
    <div className="error-container">
      <i className="fa fa-exclamation-triangle error-icon"></i> 
      <h1 className="error-message">Oops! Sahifa topilmadi.</h1>
      <p className="error-description">
        Biz topishga harakat qilgan sahifamiz mavjud emas. Iltimos, URLni tekshirib ko‘ring yoki bosh sahifaga qayting.
      </p>
      <Link to="/" className="error-button">Bosh sahifaga qaytish</Link> 
    </div>
  );
};

export default ErrorPage;
