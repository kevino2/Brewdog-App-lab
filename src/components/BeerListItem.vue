<template lang="html">
   <div class="beer-list-item">
     <h2>{{beer.name}}</h2>
     <router-link :to="{ name: 'beerInfo', params: {beer} }">More Info</router-link>
   </div>
</template>

<script>
export default {
  props: ['beer']
}
</script>

<style lang="css" scoped>
</style>
