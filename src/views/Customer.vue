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
    <!-- <router-link to="/service">
        <span class="fa fa-university fa-lg"></span>
        <span>الخدمات</span>
    </router-link> -->

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

            <div class="product-detail">
                <h4>{{ product.name }}</h4>
                <p><a class="fa fa-pencil-square-o fa-lg"></a> {{ product.details }}</p>
            </div>

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

    <div class="customer-links">
        <div class="btn-group dropup">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ألاقي؟
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" data-toggle="modal" data-target="#customerModal">ألاقي عندك؟</a>
            <a class="dropdown-item" href="#">ألاقي فين؟</a>
          </div>
        </div>
    </div>
</section>

  </div>
</template>

<script>
export default {
    data() {
            return {
                products: [
                    {
                    'name': 'منتج رقم 1',
                    'details': 'تفاصيل عن المنتج',
                    'noOfViews': 50,
                    'noOfComments': 3,
                    'img': '',
                    },
                    {
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
