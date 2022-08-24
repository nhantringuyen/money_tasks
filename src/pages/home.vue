<template>
  <h1>Home page is here</h1>
  <!-- <p>{{firstName}}</p> -->
  <!-- <p>{{car}}</p> -->
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer,index) in customersFilled" :key="index">{{customer}}</li>
  </ul>
  <button @click="onChangeSomething">Click me</button>
</template>
<script>
  import {computed, ref, reactive, watch, watchEffect } from "vue";  
   export default{
    props:{
      theme: {
        type: String,
        required: false,
        default: "light",
      }
    },
    // setup(props,context) {
      setup({theme},{emit}) {
      console.log(theme);
      console.log(emit);
      // const firstName = ref("sky");
      const searchText = ref("");
      const customers = reactive(["Some thing","Tran Toan","Sky","Hula"]);
      const customersFilled = computed(() => 
        customers.map(customer => { 
          customer = customer.toLowerCase();
          return customer;
        }).filter((customer) => customer.includes(searchText.value.toLowerCase()))
      )
      watch(searchText, (newValue, oldValue) => {
        console.log(newValue, oldValue);
      });
      watchEffect(() => {
        if(searchText.value){
          console.log("run again");
        }
      })
      // let car = reactive({ 
      //   price: 100000,
      //   name: "Mec" 
      // })
      
      // function onChangeSomething(){
      //   // console.log("running here...");
      //   // console.log(firstName);
      //   // firstName.value = "TRan Toan"
      //   // console.log(firstName);
      //   car = { 
      //   price: 100000,
      //   name: "Mec123" 
      // }
      // console.log(car);
      // }
      return {searchText,customersFilled};
    }
   }
</script>