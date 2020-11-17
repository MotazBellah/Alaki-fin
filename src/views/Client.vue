<template lang="html">
  <div class="">
      <header id="customer-header" class="clearfix">
            <nav id="customer-nav">
                <a href="#" class="fa fa-bars fa-lg"></a>
                <a href="#" class="fa fa-user-o fa-lg"></a>
                <a href="#" class="fa fa-heart-o fa-lg"></a>
                <a href="#">
                    <img src="../assets/images/icon-1.png" alt="">
                </a>
            </nav>

        </header>
        <section class="">
            <div class="container-fluid">
                <div class="row clearfix">
                    <div class="left-user">
                        <div class="client-info">
                            <div class="total-data">

                                <div class="user-logo">
                                    <img :src=clientInfo.img alt="">
                                </div>
                                <div class="user-data">
                                    <h4>{{ clientInfo.name }}<a href="" class="fa fa-pencil"></a></h4>
                                    <span><a href="" class="fa fa-map-marker"></a> <strong>{{ clientInfo.location }}</strong></span><br>
                                    <span><a href="" class="fa fa-phone"></a> <strong>{{ clientInfo.phone }}</strong></span>
                                    <div class="user-network">
                                        <a href="#" class="fa fa-facebook-square fa-lg"></a>
                                        <a href="#" class="fa fa-instagram fa-lg"></a>
                                        <a href="#" class="fa fa-twitter-square fa-lg"></a>
                                        <a href="#" class="fa fa-globe fa-lg"></a>
                                    </div>
                                    <div class="client-connection">
                                        <div class="client-follow">
                                            <a @click='followClient()' class="fa fa-heart-o fa-lg">
                                                <span>متابعه</span>
                                            </a>

                                        </div>

                                        <div class="client-follow">
                                            <a @click='sendMsg()' class="fa fa-paper-plane-o fa-lg">
                                                <span>ارسال رساله</span>
                                            </a>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-user">
                        <h2 >التقيمات</h2>

                        <div
                            class="customer-rating flex-container"
                            v-for="(rate, index) in rates"
                            :key="index">
                            <div class="client-rate">
                                <a><span title="1" :class="rate.rating >= 1 ? 'fa fa-star checked' : 'fa fa-star'"></span></a>
                                <a><span title="2" :class="rate.rating >= 2 ? 'fa fa-star checked' : 'fa fa-star'"></span></a>
                                <a><span title="3" :class="rate.rating >= 3 ? 'fa fa-star checked' : 'fa fa-star'"></span></a>
                                <a><span title="4" :class="rate.rating >= 4 ? 'fa fa-star checked' : 'fa fa-star'"></span></a>
                                <a><span title="5" :class="rate.rating >= 5 ? 'fa fa-star checked' : 'fa fa-star'"></span></a>
                            </div>
                            <div class="user-rating flex-container">
                                <div class="">
                                    <span><strong>{{ rate.name }}</strong></span><br>
                                    <span><strong>{{ rate.comment }}</strong></span>
                                </div>
                                <div class="user-logo change">
                                    <img :src=rate.img alt="">
                                </div>
                            </div>

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
                clientInfo: {
                    'name': 'محمد',
                    'img': '',
                    'phone': '0123456',
                    'location': 'سيدي بشر'
                },
                rates: [
                    {
                    'name': 'test',
                    'comment': 'test',
                    'img': '',
                    'rating': 3
                    },
                    {
                    'name': 'test2',
                    'comment': 'test2',
                    'img': '',
                    'rating': 5
                    },
               ]
            }
        },
    methods: {
        followClient() {
            // pass
        },
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
