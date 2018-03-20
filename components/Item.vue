<template>
  <div>
    {{item.name}}
    <router-link to="/">To Home</router-link>
  </div>
</template>

<script>
    export default {
    asyncData ({ store, route }) {
      // 异步获取数据
      return store.dispatch('fetchItem', route.params.id)
    },
    computed: {
      item () {
        return this.$store.state.items[this.$route.params.id]
      }
    }
  }
</script>

<style scoped>
</style>
