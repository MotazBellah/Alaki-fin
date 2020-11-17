<template lang="html">
  <div class="">
      <header id="customer-header" class="clearfix ">
    <nav id="customer-nav">
        <a href="#" class="fa fa-bars fa-lg"></a>
        <div class="user-like">
            <a href="#" class="fa fa-heart-o fa-lg"></a>
            <a href="#" class="fa fa-user-o fa-lg"></a>
        </div>
        <a href="#">
            <img src="../assets/images/icon-1.png" alt="">
        </a>
    </nav>

        <div class="customer-right">
            <div class="btn-group shadow">
                <router-link to="/customer-message" id="message" class="btn btn-style-group">
                    الرسايل
                </router-link>
                <router-link to="/customer" id="order" class="btn btn-style-group">
                    طلباتي
                </router-link>
            </div>
        </div>

</header>
<section class="customer-wrapper">
    <div class="container">

        <div
            class="product"
            v-for="(product, index) in products"
            :key="index"
            >

            <router-link
            :to="{ path: '/customer1', query: { id: product.id }}">
                <div class="product-detail">
                    <h4>{{ product.name }}</h4>
                    <p><a class="fa fa-pencil-square-o fa-lg"></a> {{ product.details }}</p>
                </div>
            </router-link>

            <div class="product-photo">
                <img :src=product.img alt="">
            </div>

            <div class="icons">
                <a class="fa fa-eye fa-lg"><span> {{ product.noOfViews }}</span></a>
                <a class="fa fa-comment fa-lg mr-10"><span> {{ product.noOfComments }}</span></a>
            </div><br>

            <div class="product-message">
                <a class="fa fa-paper-plane fa-lg" @click='sendMsg()' href=''></a>
                <input type="text" name="" value="" placeholder="لو عندك اي كومنت زياده">
            </div>
        </div>

    </div>


    <ModelButton></ModelButton>
</section>

  </div>
</template>

<script>
import ModelButton from '../components/ModelButton'
export default {
    watch: {
      $route: {
          immediate: true,
          handler(to) {
              document.title = to.meta.title || 'ألاقي فين';
          }
      },
  },

    components: {ModelButton},
    data() {
            return {
                products: [
                    {
                    'id': '1',
                    'name': 'منتج رقم 1',
                    'details': 'تفاصيل عن المنتج',
                    'noOfViews': 50,
                    'noOfComments': 3,
                    'img': '',
                    },
                    {
                    'id': '2',
                    'name': 'منتج رقم 2',
                    'details': 'تفاصيل',
                    'noOfViews': 20,
                    'noOfComments': 5,
                    'img': ''
                    },
               ]
            }
        },
    methods: {
        sendMsg() {
            // pass
        }
    }
  //   mounted () {
  //       fetch("backend_url", {
  //             method: 'get'
  //         })
  //         .then((response) => {
  //             return response.json()
  //         })
  //         .then((jsonData) => {
  //           this.userInfo = jsonData.results
  //         })
  // },
}
</script>

<style lang="css" scoped>
</style>
