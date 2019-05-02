<template lang="html">
<h1>{{ text }} </h1>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Gugi');
h1 {
    font-family: 'Gugi', cursive;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42857143;
    font-size: 3rem;
    color: red;
    background-color:  #00AFDB;
    }
</style>
