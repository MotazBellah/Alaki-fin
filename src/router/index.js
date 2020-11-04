import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cats from "../views/Cats.vue"
import Dogs from "../views/Dogs.vue"
import Pets from "../views/Pets.vue"
import Client from "../views/Client.vue"
import Customer0 from "../views/Customer0.vue"
import Customer1 from "../views/Customer1.vue"
import Customer from "../views/Customer.vue"
import Login from "../views/Login.vue"
import LoginForm from "../views/LoginForm.vue"
import User from "../views/User.vue"
import Stores from "../views/Stores.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cats",
    name: "cats",
    component: Cats
  },
  {
    path: "/dogs",
    name: "dogs",
    component: Dogs
  },
  {
    path: "/pets",
    name: "pets",
    component: Pets
},
{
  path: "/client",
  name: "client",
  component: Client
},
{
  path: "/customer-message",
  name: "customer-message",
  component: Customer0
},
{
  path: "/customer1",
  name: "customer1",
  component: Customer1
},
{
  path: "/customer",
  name: "customer",
  component: Customer
},
{
  path: "/login",
  name: "login",
  component: Login
},
{
  path: "/login-form",
  name: "login-form",
  component: LoginForm
},
{
  path: "/user",
  name: "user",
  component: User
},
{
  path: "/stores",
  name: "stores",
  component: Stores
},

];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
