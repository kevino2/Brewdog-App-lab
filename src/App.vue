<template lang="html">
 <div id="main">
   <NavBar/>
   <Header text="Brewdog Beers"/>
   <router-view id="view"/>
 </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Header from '@/components/Header';

export default {
  components: { NavBar, Header}
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
    background: url('../public/img/wp3087148.jpg') no-repeat center center fixed;
    }
</style>
