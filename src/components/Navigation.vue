<template>
    <ul class="flex flex-col w-48 h-full">
        <router-link class="active:bg-gray-800 active:text-gray-200 h-8 flex justify-center items-center"  
        v-for="(link, index) in links" :key="index" :to="link.route">
          {{link.title}}  
        </router-link>
      </ul>
</template>
<script>
export default {
    name: 'Navigation',
    data () {
    return {
      links: [
        {
          title: 'Welcome',
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