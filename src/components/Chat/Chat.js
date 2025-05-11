import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Здесь будет логика отправки сообщения
    console.log('Отправка сообщения:', input);
    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat__container">
        <h1 className="chat__title">QodeQ AI</h1>
        <p className="chat__subtitle">Ваш интеллектуальный помощник в разработке</p>
        
        <form className="chat__form" onSubmit={handleSubmit}>
          <div className="chat__input-wrapper">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Задайте вопрос..."
              className="chat__input"
            />
            <button type="submit" className="chat__send-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <p className="chat__hint">
            QodeQ AI может ошибаться. Проверяйте важную информацию.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Chat; 