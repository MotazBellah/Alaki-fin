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
                <div class="row flex-column-reverse flex-md-row">
                    <div class="col-md-7">

                        <div class="product-details">
                            <h4>{{ mainProductName }}</h4>
                            <p>{{ mainProductDetails }}</p>
                            <div class="icons">
                                <a class="fa fa-eye fa-lg"><span> {{ mainViews }}</span></a>
                                <a class="fa fa-comment fa-lg mr-10"><span> {{ mainComments }}</span></a>
                            </div><br>
                            <div class="customer-photo"></div>

                            <div
                                class="product-conversation flex-container"
                                v-for="(msg, index) in storeMsg"
                                :key="index"
                                >
                                <div class="respond-msg">
                                    <div class="respond">
                                        <a href="" class="fa fa-paper-plane fa-lg" @click='sendMsg()'></a>
                                    </div>
                                </div>

                                <div class="flex-container">
                                    <div class="customer-msg">
                                        <span><strong>{{ msg.storeName }}</strong></span><br>
                                        <span><strong>{{ msg.storeReplay }}</strong></span><br>
                                        <a href="#">رد</a>
                                    </div>
                                    <div class="user-logo store-logo">
                                        <img :src=msg.img alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="customer-respond">
                                <a class="fa fa-commenting fa-lg" @click='sendMsg()'></a>
                                <input type="text" name="" value="" placeholder="لو عندك اي كومنت زياده">
                            </div>

                        </div>

                    </div>
                    <div class="col-md-5">
                        <div class="all-orders">
                            <h4>طلباتي</h4>

                            <div
                                class="client-order"
                                v-for="(product, index) in products"
                                :key="index">
                                <router-link
                                :to="{ path: '/customer1', query: { id: product.id }}">
                                    <span><strong>{{ product.name }}</strong></span><br>
                                    <span><strong>{{ product.details }}</strong></span><br>
                                    <a class="fa fa-eye"><span> {{ product.noOfViews }}</span></a>
                                    <a class="fa fa-comment"><span> {{ product.noOfComments }}</span></a>

                                    <div class="order-photo">
                                        <img :src=product.img alt="">
                                    </div>
                                </router-link>
                            </div>

                        </div>

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

    components: {ModelButton},
    data() {
            return {
                mainProductName: '',
                mainProductDetails: '',
                mainViews: '',
                mainComments: '',
                storeMsg: [],

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
    },
    mounted () {
        this.mainProductName = 'منتج 1'
        this.mainProductDetails = "تفاصيل عن المنتج"
        this.mainViews = 30
        this.mainComments = 6

        this.storeMsg = [
            {
                'storeName': 'ستور1',
                'storeReplay': 'موجود يا فندم',
                'img': ''
            },
            {
                'storeName': 'ستور2',
                'storeReplay': 'موجود يا فندم',
                'img': ''
            },
        ]

        // fetch("backend_url", {
        //       method: 'get'
        //   })
        //   .then((response) => {
        //       return response.json()
        //   })
        //   .then((jsonData) => {
        //     this.userInfo = jsonData.results
        //   })
  }
}
</script>

<style lang="css" scoped>
</style>
