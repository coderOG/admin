<template>
  <div id="app">
	<!-- <Home /> -->
	<router-view></router-view>
	<vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Home from '@/pages/index/index.vue'
export default {
	components: {
	  Home
	},
	created() {
	    this.$Progress.start()
	    this.$router.beforeEach((to, from, next) => {
	        this.$Progress.start()
	        next()
	    })
	    this.$router.afterEach((to, from) => {
	        this.$Progress.finish()
	    })
	},
	mounted() {
	    this.$Progress.finish()
	}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
