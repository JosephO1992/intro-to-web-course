<template>
    <div class="flex flex-row justify-between">
        <div>
            <router-link :to="something">Previous Page</router-link>
        </div>
        <div>
            <router-link :to="this.$router.getRoutes()[this.nextRouteIndex].path">Next Page</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "BottomNavigation",
    data() {
        return {
            routes: [],
            prevLink: ''
        }
    },
    computed: {
        showPreviousPage() {
            return this.$route.path != this.$router.getRoutes()[0].path
        },
        showNextPage() {
            return this.$route.path != this.routes[this.routes.length - 1].path 
        },
        nextRouteIndex() {
            return this.routes.indexOf(this.$route.path) + 1
        },
        prevRouteIndex() {
            return this.routes.indexOf(this.$route.path) + -1
        },
        something () {
            this.prevLink = this.$router.getRoutes()[this.prevRouteIndex].path
        }
        // nextRoute() {
        //     this.nextLink = this.routes[this.currentRouteIndex + 1]
        // },
        // prevRoute() {
        //     this.prevLink = this.routes[this.currentRouteIndex + -1]
        // },
        
    },
    methods: {
       placeRouteNamesIntoRoutesArray() {
            let arr = this.$router.getRoutes().map(item => {
                return item.path
            })
            this.routes = arr
        },
    },
    mounted () {
       this.placeRouteNamesIntoRoutesArray()
    }

 
}
</script>