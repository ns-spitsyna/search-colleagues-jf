import LoadingStatuses from '../../constants/loadingStatuses';
export default {
    state: {
        users: [],
        searchResult: [],
        searchValue: '',
        isShowCard: true,
        userData: [],
        loadingStatuses: null,
        isShowPreloader: true
    },
    getters: {
        allUsers(state) {
            return state.users
        },
        searchValue(state) {
            return state.searchValue
        },
        searchData(_,getters) {
            return  getters.searchValue.trim().toLowerCase().split(',');
        },
        loadingStatuses(state) {
            return state.loadingStatuses;
        },
        searchResult(state,getters) {
            if(state.searchValue) {
                getters.searchData.forEach(item => {
                    getters.allUsers.forEach(user => {
                    user.username = user.username.trim().toLowerCase();
                    if((item.includes(user.username) || item.includes(user.id)) && !state.searchResult.includes(user)) {
                        state.searchResult.push(user);
                    }
                    })
                })
            } else {
                state.searchResult = [];
                state.userData = [];
                state.isShowCard = true;
                state.loadingStatuses = 'READY'
            }
            return state.searchResult;
        },
        isShowCard(state) {
            return !state.isShowCard;
        },
        userData(state) {
            return state.userData;
        },

        isShowPreloader(state, getters) {
            return state.isShowPreloader = getters.loadingStatuses === 'LOADING' ? true : false;
        },
    },

    mutations: {
        updateDataUsers(state,users) {
            state.users = users;
        },
        updateSearchValue(state, searchValue) {
            state.searchValue = searchValue
        },
        showCard(state, isShowCard) {
            state.isShowCard = isShowCard
        },
        displayUserInfo(state, id) {
            const userData = state.searchResult.find(elem => {
                return elem.id === id
              });
              return state.userData = {...userData};
        },
        setLoadingStatus(state, loadingStatuses) {
            state.loadingStatuses = loadingStatuses
        },
        showPreloader(state, isShowPreloader) {
            state.isShowPreloader = isShowPreloader;
        },
    },
    actions: {
        async getDataUsers(ctx) {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if(res.status !== 200) {
                    throw new Error('status network not 200');
                }
                const users = await res.json();
                ctx.commit('setLoadingStatus', LoadingStatuses.LoadingStatuses.Loading);
                if(!users.length) {
                    ctx.commit('setLoadingStatus', LoadingStatuses.LoadingStatuses.Empty);
                } else {
                    ctx.commit('setLoadingStatus', LoadingStatuses.LoadingStatuses.Ready);
                }
                ctx.commit('updateDataUsers', users);
            } catch(error) {
                console.error(error);
                ctx.commit('setLoadingStatus', LoadingStatuses.LoadingStatuses.Error)
            }
        },
        updateSearchValue(ctx, e) {
            ctx.commit('updateSearchValue', e.target.value)
        },
        showCard(ctx, showCard) {
            ctx.commit('showCard', showCard)
        },
        showPreloader(ctx, showPreloader) {
            ctx.commit('showPreloader', showPreloader)
        },
        displayUserInfo(ctx, displayUserInfo) {
            ctx.commit('displayUserInfo', displayUserInfo)
        },
    },
}