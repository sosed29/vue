<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="#" class="nav__link">Каталог</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Доставка</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Оплата</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Контакты</a></li>
        <li class="nav__item"><a href="#" class="nav__link">О компании</a></li>
      </ul>
      <div class="search">
        <input 
          type="text" 
          placeholder="Поиск по названию картины" 
          class="search__input" 
          v-model="searchQuery" 
          @input="updateSearch" 
        />
        <button class="search__button">Найти</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    updateSearch() {
      this.$emit('update:searchQuery', this.searchQuery);
    }
  }
};
</script>

  
  <style scoped>
  .header {
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(246, 243, 243, 1);
    border: 1px solid rgba(225, 225, 225, 1)
  }
  
  .nav {
    display: flex;
    align-items: center;
  }
  
  .nav__list {
    display: flex;
    gap: 48px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav__link {
    text-decoration: none;
    font-family: Merriweather;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: rgba(52, 48, 48, 1);
  }
  
  .nav__link:hover {
    color: rgba(119, 103, 99, 1);
  }
  
  .search {
    display: flex;
    align-items: center;
    margin-left: 162px;
  }
  
  .search__input {
    width: 218px;
    padding: 6px 10px;
    border: 1px solid rgba(225, 225, 225, 1);
  }
  
  .search__button {
    background: #3e2723;
    color: white;
    border: none;
    padding: 6px 10px;
    cursor: pointer;
  }
  
  .search__button:hover {
    background: #5d4037;
  }
  @media (max-width: 1024px) {
    .nav {
      flex-direction: column;
    }
  }

  @media (max-width: 524px) {
    .search {
        margin-left: 0px;
    }
    .nav__list {
        gap: 12px;
        flex-direction: column;
    }
    .footer__menu {
        gap: 17px;
    }
    .search__input {
        width: 177px;
    }
      
  }

  </style>
  