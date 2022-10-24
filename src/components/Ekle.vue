<template>
    <form @submit.prevent="yapilacakEkle">
      <input type="text" placeholder="Yapılacak Ekle" v-model="yapilacak">
      <button>Ekle</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  export default {
  setup(){
     const store=useStore()
  
     const yapilacak=ref('')
     const yapilacakEkle=()=>{
      const nesne={
          yAd:yapilacak.value,
          durum:true
      }
  
      // store.commit('ekle',nesne)
  
      store.dispatch('ekleAction',nesne)
     }
  
     return {yapilacak,yapilacakEkle}
  }
  }
  </script>
  
  <style>
  
  </style>