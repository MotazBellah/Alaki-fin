<template lang="html">
    <div class="">
        <header id="customer-header" class="clearfix">
            <nav id="customer-nav">
                <router-link to="/customer">
                    <a href="#" class="fa fa-bars fa-lg"></a>
                </router-link>
                <router-link to="/client">
                    <a href="#" class="fa fa-user-o fa-lg"></a>
                </router-link>
                <router-link to="/stores">
                    <a href="#" class="fa fa-heart-o fa-lg"></a>
                </router-link>
                <a href="#">
                    <img src="../assets/images/icon-1.png" alt="">
                </a>
            </nav>

        </header>
        <section class="">
            <div class="container-fluid">
                <div class="row clearfix">
                    <div class="left-user">
                        <div class="user-info">
                            <div class="total-data">

                                <div class="user-logo">
                                    <img :src=userInfo.img alt="">
                                </div>
                                <div class="user-data">
                                    <h4>{{ userInfo.name }}<a href="" class="fa fa-pencil"></a></h4>
                                    <span><a href="" class="fa fa-map-marker"></a> <strong>{{ userInfo.location }}</strong></span><br>
                                    <span><a href="" class="fa fa-phone"></a> <strong>{{ userInfo.phone }}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-user">
                        <h2 >الطلبات السابقه</h2>
                        <div
                            class="last-order"
                            v-for="(order, index) in userInfo.exOrders"
                            :key="index"
                            >
                            {{ order }}

                        </div>
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
                userInfo: {
                    'name': 'محمد',
                    'img': '',
                    'phone': '0123456',
                    'location': 'سيدي بشر',
                    'exOrders': ['test', 'test']
                },
                info: null
            }
        },
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
