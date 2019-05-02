<template lang="html">
   <BeerList :beers="beers"/>
</template>

<script>
import BeerList from '@/components/BeerList';
export default {
  components: { BeerList },
  data() {
    return {
      beers: [],
    };
  },
  methods: {
    fetchBeers: function (){
      fetch("https://api.punkapi.com/v2/beers?pages=1&per_page=80")
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.beers = data;
      });
    },
  },
  mounted(){
    this.fetchBeers();

  }
}
</script>

<style lang="css" scoped>
</style>
