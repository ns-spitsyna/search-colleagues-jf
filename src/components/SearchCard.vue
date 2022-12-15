<template>
  <div class="search-card">
      <div class="search-card-wrapper" v-for="item in listUsers" :key="item.id" @click="showDataUser(item.id)">
      <div class="search-card-image"><img src="../assets/images/imgUserDefault_preview.jpg" alt=""/></div>
      <div class="search-card-info">
        <div><strong>{{item.username}}</strong></div>
        <div>{{item.email}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions} from 'vuex';
export default {
  name: 'SearchCard',
  props: {
    listUsers:  {
      type: Array,
      default: () => []
    },
  },

  methods: {
    ...mapActions(['showCard','displayUserInfo']),
    showDataUser(id) {
      this.showCard();
      this.displayUserInfo(id);
    }
  },
}
</script>

<style lang="scss" scoped>
.search-card {
  &-wrapper {
    display: flex;
    width: 240px;
    min-width: 240px;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 18px;
    &:hover{
      background-color: #E0E0E0;
      cursor: pointer;
    }
  }
  &-image {
    width: 70px;
    height: 70px;
  }
  &-info {
    padding: 15px;
    overflow: hidden;
  }
}
</style>
