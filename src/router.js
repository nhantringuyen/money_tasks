import { createRouter,createWebHistory } from "vue-router";
import Home from "./pages/home";
import Transactions from "./pages/transactions";
import TransactionsDetail from "./pages/transactions-details"
import NotFound from "./pages/404"
const routes  = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/transactions",
        component: Transactions,
        name: 'transaction-route'
    },
    {
        path: "/transactions/:id",
        component: TransactionsDetail,
        name: 'transaction-route-detail'
    },
    {
        path: "/ts",
        component: Transactions
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
console.log(routes);
console.log(router);

export default router;