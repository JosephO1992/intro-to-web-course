<template>
    <div class="flex flex-row justify-between">
        <div>
            <button class="p-5" v-if="showPreviousRoute">Previous Page</button>
        </div>
        <div>
            <button class="p-5">Next Page</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "BottomNavigation",
    computed: {
        showPreviousRoute() {
            return this.$route.path != this.$router.getRoutes()[0].path
        }
    }
 
}
</script>