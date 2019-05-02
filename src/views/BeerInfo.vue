<template lang="html">
   <div id="beer-info" v-if="beer">

     <Header :text="beer.name"/>
     <img :src="beer.image_url" width="150px"/>
     <h2>{{beer.tagline}}</h2>
     <h3>{{beer.description}}</h3>
   </div>
</template>

<script>
import Header from '@/components/Header'

export default {
components: {Header},
props: ['beer'],
mounted(){
  console.log(this.beer);
  if(!this.beer) this.$router.push({name: 'beers'})
}
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Gugi');
#view {
    font-family: 'Gugi', cursive;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42857143;
    font-size: 1.4rem;
    }
h3 {
  background-color: white;
}
</style>
