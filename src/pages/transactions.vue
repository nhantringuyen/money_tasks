<template>
    <h1>Transactions is here</h1>
    <div class="" v-if="transactions.length">
        <div class="item" v-for="transaction in transactions" :key="transaction.id">
            <router-link :to="`transactions/${transaction.id}`">{{transaction.name}}</router-link>
            <router-link :to="{name : 'transaction-route-detail', params : {id : transaction.id}}">{{transaction.name}}</router-link>
            <div class="price">Price: {{transaction.price}}</div>
        </div>    
    </div>
    <div v-else-if="error">{{error.message}}</div>
     <div class="" v-else>Loading transaction ...</div>
</template>
<script>
    import { ref } from 'vue';
    // import useTransactions from "../uses/fetchTransactions";
    export default {
        // data() {
        //     return {
        //         transactions: [
        //             // {
        //             //     id: 1,
        //             //     name: 'di sieu thi ngay 17/5',
        //             //     price: 1000000
        //             // },
        //             // {
        //             //     id: 2,
        //             //     name: 'Thanh toan tien nha',
        //             //     price: 3000000
        //             // },
        //             // {
        //             //     id: 3,
        //             //     name: 'Thanh toan momo tien dien nuoc',
        //             //     price: 4000000
        //             // }
        //         ]
        //     }
        // },
        // created (){
        //     fetch("http://localhost:3000/transactions")
        //     .then((response) => response.json())
        //     .then((data) => (this.transactions = data));
        // },
        
        setup() {
            const transactions = ref([]);
            const error  = ref(null);

            console.log(transactions,error);

            const fetchAll  = async () => {
                try{
                    const response = await fetch("http://localhost:3000/transactions");
                if(!response.ok) throw new Error("Something went wrong.");
                transactions.value = await response.json();
                console.log( await response.json());
                }catch(err){
                     error.value = err;   
                     console.log(error.value);
                }
                
            }

            fetchAll();
            return {error, transactions};
            // const {transactions, error, fetchAll} = useTransactions();

            // fetchAll();

            // return {transactions, error}
        }
    }

</script>