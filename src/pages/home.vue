<template>
  <h1>Home page is here</h1>
</template>
<script>
  export default{
    data() {
      return {
        // count: 0,
        transactions: [],

      }
    },
    created (){
      console.log(this.$store.state.count);
      this.count = this.$store.state.count;
    }
  }
</script>