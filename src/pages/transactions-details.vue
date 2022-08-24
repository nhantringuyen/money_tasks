<template>
 <h1>Transactions detail is here</h1>
 <div class="" v-if="transaction">
 <p>{{$route.params.id}}</p>
 <h3>Name: {{transaction.name}}</h3>
 <p class="price">Price: {{transaction.price}}</p>
 </div>
 <div class="" v-else>Loading transaction {{$route.params.id}} ...</div>
</template>
 <script>
    export default{
        data(){
            return{
                transaction : null,
            };
        },
        created (){
            fetch("http://localhost:3000/transactions/"+this.$route.params.id)
            .then((response) => response.json())
            .then((data) => (this.transaction = data))
            .then(()=> console.log(this.transaction));
        }
    }
 </script>