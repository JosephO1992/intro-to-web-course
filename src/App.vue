<template>
<div class="flex flex-col">
  <div class="text-center flex justify-center items-center align-middle h-12 bg-gray-800 text-gray-200">
    <h1 class="flex items-center">Intro to Web Course</h1>
  </div>
  <div class="flex flex-row justify-between">
      <ul class="flex flex-col w-48">
        <router-link v-for="(link, index) in links" :key="index" :to="link.route">
          {{link.title}}  
        </router-link>
      </ul>
    <router-view class="w-full"/>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      links: [
        {
          title: 'Home',
          route: '/'
        },
        {
          title: 'Lesson 1',
          route: '/lesson-1'
        },
        {
          title: 'Lesson 2',
          route: '/lesson-2'
        },
        {
          title: 'Lesson 3',
          route: '/lesson-3'
        }
      ]
      
    }
  }
}
</script>
