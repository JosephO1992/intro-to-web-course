<template>
<div class="flex flex-col h-screen">
  <div class="text-center flex justify-center items-center align-middle h-12 bg-gray-800 text-gray-200">
    <h1 class="flex items-center">Intro to Web Course</h1>
  </div>
  <div class="flex flex-row justify-between h-full">
      <navigation></navigation>
    <router-view class="w-full"/>
  </div>
</div>
</template>
<script>

import Navigation from './components/Navigation.vue'
export default {
  components: { Navigation },
  
}
</script>
