import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        titleRef.current.style.setProperty('--mouse-x', `${x}%`);
        titleRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    const title = titleRef.current;
    if (title) {
      title.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (title) {
        title.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__grid"></div>
      </div>
      
      <div className="hero__content">
        <h1 className="hero__title" ref={titleRef}>
          <span className="hero__title-gradient">QodeQ AI</span>
        </h1>
        <h2 className="hero__subtitle">
          Интеллектуальный помощник для разработчиков
        </h2>
        
        <p className="hero__description">
          Ускорьте разработку с помощью искусственного интеллекта. 
          Генерируйте код, находите ошибки и оптимизируйте производительность в реальном времени.
        </p>
        
        <div className="hero__buttons">
          <button className="hero__button hero__button--primary">
            Начать бесплатно
          </button>
          <button className="hero__button hero__button--secondary">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 