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
    component: Home,
    meta: {title: 'ألاقي فين'}
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {title: 'ألاقي فين - تعرف علينا'}
  },
  {
    path: "/service",
    name: "service",
    component: Services,
    meta: {title: 'ألاقي فين - الخدمات'}
  },
{
  path: "/client",
  name: "client",
  component: Client,
  meta: {title: 'ألاقي فين - العميل'}
},
{
  path: "/customer-message",
  name: "customer-message",
  component: Customer0,
  meta: {title: 'ألاقي فين - العميل'}
},
{
  path: "/customer1",
  name: "customer1",
  component: Customer1,
  meta: {title: 'ألاقي فين - العميل'},
  props(route) {
    return {  id: route.query.id }
  }
},
{
  path: "/customer",
  name: "customer",
  component: Customer,
  meta: {title: 'ألاقي فين - العميل'}
},
{
  path: "/login",
  name: "login",
  component: Login,
  meta: {title: 'ألاقي فين - تسجيل الدخول'}
},
{
  path: "/login-form",
  name: "login-form",
  component: LoginForm,
  meta: {title: 'ألاقي فين - تسجيل الدخول'}
},
{
  path: "/user",
  name: "user",
  component: User,
  meta: {title: 'ألاقي فين - المستخدم'}
},
{
  path: "/stores",
  name: "stores",
  component: Stores,
  meta: {title: 'ألاقي فين - المحلات'}
},

];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
