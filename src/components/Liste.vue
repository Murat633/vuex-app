<template>
    <p>Yapılmayanlar:{{ yapilmayanlar }}</p>
    <p>Yapılanlar:{{ yapilanlar }}</p>
  <ul>
    <li v-for="yapilacak in yapilacaklar" :key="yapilacak.id">
        {{ yapilacak.ad }}
    </li>
  </ul>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
setup(){
    const store=useStore()

    const yapilacaklar = computed(()=>{
        return store.state.yapilacaklar
    })

    const yapilmayanlar = computed(()=>{
        return store.getters.yapilmayanlarinSayisi
    })

    const yapilanlar = computed(()=>{
        return store.getters.yapilanlarinSayisi
    })

    return {yapilacaklar,yapilmayanlar,yapilanlar}
}
}
</script>

<style>

</style>