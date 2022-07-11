<script lang="ts" setup>
/* import */
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
/* */

const store = useStore(); //vuex store

/* Vuex Getters */
const catError = computed(() => {
  return store.getters.getError;
});

const catUrl = computed(() => {
  return store.getters.catUrl;
});
/* */

onMounted(() => {
  store.dispatch("getCat");
});
</script>
<template>
  <!-- Vue Logo -->
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <!-- Cat episode -->
  <div class="cat">
    <!-- cat api request  -->
    <button class="btn" @click="store.dispatch('getCat')">Cat</button>
    <!--  -->
    <img class="cat_img" v-if="catUrl" :src="catUrl" alt="" />

    <!-- cat api error -->
    <span v-else>
      <strong>{{ catError }}</strong>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.cat {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn {
    display: block;
    height: 35px;
    padding: 0px 20px;
    background: #008cba;
    border-radius: 4px;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .cat_img {
    width: 200px;
    height: 200px;
  }
}
</style>
