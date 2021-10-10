<template>
    <ul class="flex flex-col w-52 h-full">
        <router-link class="h-12 flex justify-center items-center hover:bg-gray-800 hover:text-gray-200"  
        v-for="(link, index) in this.$router.getRoutes()" :key="index" :to="link.path">
          {{link.name}}  
        </router-link>
      </ul>
</template>
<script>
export default {
    name: 'Navigation',
}
</script>
<style scoped>
a.router-link-active {
  @apply bg-gray-800 text-gray-200
}
</style>