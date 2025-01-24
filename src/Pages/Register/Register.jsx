import React from 'react';
import '../../Pages/Register/Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Ro'yxatdan o'tish</h1>
        <p className="register-description">
          Saytdan ro'yxatdan o'ting va barcha darsliklarni qo'lga kiriting
        </p>
        <button className="register-google-button">Google hisob orqali</button>
        <div className="divider">
          <span>__________</span>
        </div>
        <form className="register-form">
          <button className="register-github-button">Git Hub</button>
          <button className="register-submit-button">
            Ro'yxatdan o'tish
          </button>
          <a href="/Login">Login</a>
        </form>
      </div>
    </div>
  );
};

export default Register;
