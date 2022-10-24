import { createStore } from 'vuex'

export default createStore({
  state: {
    yapilacaklar:[
      {id:1,ad:'Kitap Oku',durum:true},
      {id:2,ad:'film izle',durum:false},
      {id:3,ad:'Spor Yap',durum:true}
    ]
  },
  mutations: {
    ekle(state,{yAd,durum}){
      let yapilacak = {
        id:Math.floor(Math.random()*100000+3),
        ad: yAd,
        durum:durum
      }
      
      state.yapilacaklar.push(yapilacak)
    }
  },
  actions: {
    ekleAction(context,nesne){
      console.log(context)
      context.commit('ekle',nesne)
    }
  },
  getters: {
    yapilacakToplamSayisi(state){
      return state.yapilacaklar.length
    },
    yapilanlarinSayisi(state){
      return state.yapilacaklar.filter(y=>y.durum==true).length
    },
    yapilmayanlarinSayisi(state){
      return state.yapilacaklar.filter(y=>y.durum==false).length
    }
  },
  modules: {
  }
})
