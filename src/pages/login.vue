<template>
  <q-layout view="lHh Lpr lFf">
    
    <div class="cities">
      
    </div>
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
    background: #ffdd02;
    
  }

  .cities{
    background: url('../images/cities.png');
    min-height: 812px;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size:contain;
    
    
  }
  

</style>
