<template>
    <ul class="flex flex-col w-52 h-full">
        <router-link class="h-12 flex justify-center items-center hover:bg-gray-800 hover:text-gray-200"  
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
        // {
        //   title: 'Lesson 2',
        //   route: '/lesson-2'
        // },
        // {
        //   title: 'Lesson 3',
        //   route: '/lesson-3'
        // }
      ]
      
    }
  }
}
</script>
<style scoped>
a.router-link-active {
  @apply bg-gray-800 text-gray-200
}
</style>