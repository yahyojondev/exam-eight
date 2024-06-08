import React from "react";

const Payment = () => {
  return (
    <div className="payment">
      <div className="container">
        <div className="payment__wrapper">
          <div className="payment__top">
            <p className="payment__title">Доставка и оплата</p>
            <div className="payment__right">
              <div className="payment__right__text__wrapper">
                <p>Доставка</p>
                <span>
                  Мы осуществляем доставку со склада по Москве и Московской
                  области собственной курьерской службой. Транспортными
                  компаниями нашу продукцию мы доставляем по всей территории РФ,
                  а так же по всем странам СНГ.
                  <a href="">Сроки доставки: 4—6 недель</a>
                </span>
              </div>
              <div className="payment__right__text__wrapper">
                <p>Курьерская доставка</p>
                <span>
                  БЕСПЛАТНО доставим в приделах МКАД любой заказ
                  <a href="">от 5 000 ₽</a>.Заказы свыше{" "}
                  <a href="">30 000 ₽ </a> имеют бесплатную доставку,
                  включительно 15 км от МКАД
                </span>
              </div>
              <div className="payment__right__text__wrapper">
                <p>Самовывоз</p>
                <span>
                  Любой заказ можно забрать самостоятельно по адресу: г.
                  Москва, Дмитровское шоссе д.100с2
                </span>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288348.01655697735!2d37.05181378320311!3d55.62430712588504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2s!4v1717797899094!5m2!1sen!2s"
            width="100%"
            height="500"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Payment;
