import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика авторизации/регистрации
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__header">
          <h1>{isLogin ? 'Вход' : 'Регистрация'}</h1>
          <p className="auth__subtitle">
            {isLogin 
              ? 'Добро пожаловать! Пожалуйста, войдите в свой аккаунт.' 
              : 'Создайте аккаунт для доступа ко всем возможностям.'}
          </p>
        </div>

        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="form__input"
            />
          </div>

          <div className="form__group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Пароль"
              required
              className="form__input"
            />
          </div>

          {!isLogin && (
            <div className="form__group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Подтвердите пароль"
                required
                className="form__input"
              />
            </div>
          )}

          <button type="submit" className="form__button">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="auth__switch">
          <p>
            {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
            <button
              className="switch__button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth; 