<template>
  <div class="sidebar">
    <div  class="title">Поиск сотрудников</div>
    <input :value="searchValue" @input="updateSearchValue" class="search-person" type="text" placeholder="Введите Id или имя"/>
    <div class="title">Результаты</div>
    <div v-if="!searchValue">Начните поиск</div>
    <loader-status :loaderStatus="loadingStatuses" :isShowLoader="isShowPreloader" />
    <search-card :listUsers="searchResult" />
  </div>
</template>

<script>
import SearchCard from '../components/SearchCard.vue';
import LoaderStatus from '../components/LoaderStatus.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'SidebarSearch',
  components: {
    SearchCard,
    LoaderStatus
  },

  computed: {
    ...mapGetters(['searchValue', 'searchResult', 'loadingStatuses', 'isShowPreloader' ]),
  },

  methods: {
  ...mapActions(['updateSearchValue','getDataUsers']),
  },
  }
</script>
<style lang="scss" scoped>
.sidebar {
  width: 290px;
  min-width: 290px;
  background-color: #FDFDFD;
  border-right: 1px solid #DEDEDD;
  height: 100%;
  min-height: 575px;
  padding: 27px 0px 27px 20px;

}
.search-person {
  width: 240px;
  height: 46px;
  border: 1.5px solid #E9ECEF;
  border-radius: 8px;
  margin: 0 0 22px 0;
  padding-left: 24px;
  outline: none;

  &::placeholder {
    color: inherit;
  }

  &:focus {
    border: 1.5px solid #E9ECEF;
  }
  ::v-deep {
    font-family: inherit;
    color: inherit;
  }
}
</style>
