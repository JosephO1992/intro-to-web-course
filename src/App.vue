<template>
<div class="flex flex-col h-screen text-xl">
  <the-header></the-header>
  <div class="flex flex-row justify-between h-full">
    <navigation></navigation>
    <div class="flex flex-col flex-grow">
      <router-view class="w-full text-left flex-grow h-full"/>
      <!-- <bottom-navigation></bottom-navigation> -->
    </div>
    
  </div>
</div>
</template>
<script>

import Navigation from './components/Navigation.vue'
import TheHeader from './components/TheHeader.vue'
// import BottomNavigation from './components/BottomNavigation.vue'
export default {
  components: { 
    Navigation,
    TheHeader
    // BottomNavigation
  },
  
}
</script>