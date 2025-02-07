<template>
    <footer class="footer">
      <div class="footer__menu">
        <a href="#">Каталог</a>
        <a href="#">Доставка</a>
        <a href="#">Оплата</a>
        <a href="#">Контакты</a>
        <a href="#">О компании</a>
      </div>
      <div class="footer__info">
        <span class="footer__phone">
          <img src="/img/phone.svg" alt="Телефон" />
          +7 (812) 555-55-55
        </span>
        <span class="footer__address">
          <img src="/img/location.svg" alt="Адрес" />
          г. Санкт-Петербург, ул. Ефимова, 3
        </span>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    display: flex;
    align-items: center;
    padding: 20px;
    background: #f5f5f5;
    font-size: 14px;
    color: #666;
    justify-content: space-evenly;
    background: rgba(236, 234, 234, 1);

  }
  
  .footer__menu {
    display: flex;
    gap: 48px;
  }
  
  .footer__menu a {
    text-decoration: none;
    font-family: Merriweather;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: rgba(85, 85, 85, 1);
  }
  
  .footer__info {
    display: flex;
    gap: 51px;
    margin-left: 161px;
    align-items: center;
  }
  
  .footer__phone,
  .footer__address {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .footer__info img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 1110px) {
    .footer__info {
        margin-left: 0;
        gap: 10px;
    }    
    .footer__menu {
    gap: 8px;
    }   
    .footer {
        margin-top: 0;
    }
  }
  @media (max-width: 800px) {
    .footer,.footer__menu,.footer__info {   
      flex-direction: column
    }
  }
 
  </style>
  