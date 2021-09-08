<template>
<div class="flex flex-col">
  <div class="text-center flex justify-center items-center align-middle h-12 bg-gray-800 text-gray-200">
    <h1 class="flex items-center">Intro to Web Course</h1>
  </div>
  <div class="flex flex-row justify-between">
    <div class="flex flex-col w-48">
      <router-link to="/" class="h-8 flex items-center">Home</router-link>
      <router-link to="/about">Lesson 1</router-link>
      <router-link to="/about">Lesson 2</router-link>
      <router-link to="/about">Lesson 3</router-link>
      <router-link to="/about">Lesson 4</router-link>
    </div>
    <router-view class="w-full"/>
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
