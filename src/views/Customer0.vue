<template lang="html">
    <div class="">
        <header id="customer-header" class="clearfix">
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
                <div class="btn-group shadow order-message">
                    <a id="order" type="button" class="btn btn-style-group">الرسايل</a>
                    <a id="message" type="button" class="btn btn-style-group">طلباتي</a>
                </div>
            </div>

        </header>
        <section class="customer-wrapper">
            <div class="container">
                <div class="row flex-column-reverse flex-md-row">
                    <div class="col-md-8">

                        <div class="product-details">
                            <h4>{{ productName }}</h4>
                            <p> {{ productDetail }} </p>
                            <div class="customer-photo">
                                <img :src=productImg alt="">
                            </div>
                            <div class="product-msg">

                                <div
                                    class="conversation"
                                    v-for="(conversation, index) in conversations"
                                    :key="index"
                                >
                                    <div :class="conversation.source=='store' ? 'owner' : 'client'">
                                        <div class="owner-msg">
                                            <p>{{ conversation.name }}</p>
                                            <p><strong>{{ conversation.msg }}</strong></p>
                                        </div>
                                        <div class="logo-msg">
                                            <img :src=conversation.img alt="">
                                        </div>

                                    </div>

                                    </div>

                            </div>

                        </div>
                        <div class="send-msg">
                            <a class="fa fa-paper-plane fa-lg" href="" @click='sendMsg()'></a>
                            <input type="text" name="" value="" placeholder="لو عندك اي كومنت زياده">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="product-details">
                            <div class="owner">
                                <div class="owner-msg">
                                    <span>الدكان</span><br>
                                    <span><strong>موجود يا فندم</strong></span>
                                </div>
                                <div class="logo-msg"></div>
                                <br><br>

                                <div class="owner-msg">
                                    <span>الدكان</span><br>
                                    <span><strong>موجود يا فندم</strong></span>
                                </div>
                                <div class="logo-msg"></div>
                                <br><br>

                                <div class="owner-msg">
                                    <span>الدكان</span><br>
                                    <span><strong>موجود يا فندم</strong></span>
                                </div>
                                <div class="logo-msg"></div>
                                <br><br>

                                <div class="owner-msg">
                                    <span>الدكان</span><br>
                                    <span><strong>موجود يا فندم</strong></span>
                                </div>
                                <div class="logo-msg"></div>
                                <br><br>

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
                productName: 'اسم البرودكت',
                productDetail: 'تفاصيل',
                productImg: '',
                conversations: [
                     {
                        'source': 'store',
                        'msg': 'منتج رقم 1',
                        'name': 'دكان',
                        'img': '',
                    },
                    {
                        'source': 'client',
                        'msg': 'منتج رقم 1',
                        'name': 'زبون',
                        'img': '',
                    }
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
