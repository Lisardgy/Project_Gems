<template>
  <q-layout view="lHh Lpr lFf">
    
    <div class="cities">
      
    </div>
    <div class="bgbottom"></div>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: null,
    };
  },
};
</script>

<style scoped>
  .q-layout{
    background: url('../images/cities.png'),#ffdd02;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% 30% ,contain;
    
    
  }

  .cities{
    
  }

</style>
