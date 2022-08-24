<template>
    <nav class="nav">
        <router-link to="/">Overview</router-link>
        <router-link :to="{name : 'transaction-route'}">Transactions</router-link>
        <!-- <route-link to="/budgets">Budgets</route-link> -->
        <!-- <route-link to="/report">Report</route-link> -->
        <!-- <route-link to="/settings">Settings</route-link>  -->
    </nav>
</template>