<template>
<div class="flex flex-col h-screen text-xl">
  <div class="text-center flex items-center align-middle h-20 bg-gray-800 text-gray-200">
    <h1 class="ml-10 text-2xl">Intro to Web Development</h1>
  </div>
  <div class="flex flex-row justify-between h-full">
    <navigation></navigation>
    <router-view class="w-full text-center"/>
  </div>
</div>
</template>
<script>

import Navigation from './components/Navigation.vue'
export default {
  components: { Navigation },
  
}
</script>
