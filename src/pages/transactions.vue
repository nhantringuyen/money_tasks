<template>
    <h1>Transactions is here</h1>
    <div class="" v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
        <!-- <router-link :to="`transactions/${transaction.id}`">{{transaction.name}}</router-link> -->
        <router-link :to="{name : 'transaction-route-detail', params : {id : transaction.id}}">{{transaction.name}}</router-link>
        <div class="price">Price: {{transaction.price}}</div>
    </div>    
    </div>
     <div class="" v-else>Loading transaction ...</div>
</template>
<script>
    export default {
        data() {
            return {
                transactions: [
                    // {
                    //     id: 1,
                    //     name: 'di sieu thi ngay 17/5',
                    //     price: 1000000
                    // },
                    // {
                    //     id: 2,
                    //     name: 'Thanh toan tien nha',
                    //     price: 3000000
                    // },
                    // {
                    //     id: 3,
                    //     name: 'Thanh toan momo tien dien nuoc',
                    //     price: 4000000
                    // }
                ]
            }
        },
        created (){
            fetch("http://localhost:3000/transactions")
            .then((response) => response.json())
            .then((data) => (this.transactions = data));
        }
    }
</script>