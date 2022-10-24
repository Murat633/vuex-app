<template>
  <div class="home">
    <Ekle/>
    <Liste/>
  </div>
</template>

<script>
import { ref,onUpdated } from 'vue';
import Liste from '../components/Liste.vue';
import Ekle from '../components/Ekle.vue';
import { useRoute } from 'vue-router';
export default {
    setup() {
    },
    components: { Liste, Ekle }
}
</script>
