<template>
  <div id="app">
    <div class="container">
      <div class="top-panel">
        <h1>Жилфонд</h1>
        <p>Пользователь</p>
      </div>
      <div class="wrapper">
        <sidebar-search />
        <div class="content">
          <user-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarSearch from './components/SidebarSearch.vue';
import UserCard from './components/UserCard.vue';

export default {
  name: 'App',
  components: {
    SidebarSearch,
    UserCard,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  color: #333333;
}
.container {
  margin: 0 auto;
  max-width: 1266px;
  width: 100%;
}
.top-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .wrapper {
    display: flex;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .content {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 30px 20px;
  }
</style>
