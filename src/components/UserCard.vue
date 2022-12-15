<template>
  <div class="user-card" >
     <div class="user-card-main" v-if="isShowCard" >
      <div class="user-card-image"><img src="../assets/images/imgUserDefault.png" alt=""/></div>
      <div class="user-card-info">
        <p class="title">{{userData.name}}</p>
        <div><strong>email:</strong> {{userData.email}}</div>
        <div><strong>phone:</strong> {{userData.phone}}</div>
        <p class="title">О себе</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsam ex asperiores mollitia. Esse, excepturi hic doloribus
          iusto voluptas, voluptate voluptatibus facilis quisquam odit eveniet
          similique cupiditate ea temporibus nihil aspernatur!
        </p>
      </div>
     </div>
     <div v-else class="user-card-message">
    Выберите сотрудника, чтобы посмотреть его профиль
  </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'UserCard',

  computed: {
    ...mapGetters(['isShowCard', 'userData']),
  },

  methods: {
	...mapActions(['getDataUsers']),
  },

  async mounted() {
    this.getDataUsers();
  }
}
</script>
<style lang="scss" scoped>
.user-card {
  display: flex;
  &-message {
    display: flex;
    align-items: center;
  }
  &-main {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  &-image {
    width: 424px;
    min-width: 424px;
    height: 286px;
    margin-right: 60px;
  }
  &-info {
    width: 100%;
  }
}
</style>
