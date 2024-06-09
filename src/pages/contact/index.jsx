import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <p className="contact__title">Контакты</p>
          <div className="contact__wrapper__content">
            <p>8 (800) 890-46-56</p>
            <span>
              Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину Телефоны: 
            </span>
          </div>
        </div>
      </div>
      <div className="hero__Container">
        <iframe
          width="100%"
          height="500"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
