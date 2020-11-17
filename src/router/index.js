import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Client from "../views/Client.vue"
import Customer0 from "../views/Customer0.vue"
import Customer1 from "../views/Customer1.vue"
import Customer from "../views/Customer.vue"
import Login from "../views/Login.vue"
import LoginForm from "../views/LoginForm.vue"
import User from "../views/User.vue"
import Stores from "../views/Stores.vue"
import About from "../views/About.vue"
import Services from "../views/Services.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/service",
    name: "service",
    component: Services
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
  component: Customer1,
  props(route) {
    return {  id: route.query.id }
  }
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
