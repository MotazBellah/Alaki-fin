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
                  <button type="button" @click='openPop()' class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ألاقي؟
                  </button>
                </div>
            </div>

            <div v-if="show" class="pop-outer">
            <div class="pop-inner">
                <button class="close" @click='closePop()'>X</button>
                <a  class='you item1' @click="showModal2()">
                    <span><strong>ألاقي عندك؟</strong></span>
                    <span class="fa fa-bullhorn fa-lg"></span>
                </a>
                <a  class="where item2">
                    <span><strong>ألاقي فين؟</strong></span>
                    <span class="fa fa-map-marker fa-lg"></span>
                </a>
            </div>
        </div>

        <!-- Modal -->
            <div>
               <b-modal ref="my-modal2" hide-footer>
                 <div class="d-block text-center">
                     <h4>ألاقي عندك ؟</h4>
                        <div class="container">
                            <form enctype="multipart/form-data" method="post">
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="أسم الحاجه ابه ؟" required><br>
                                        <select id="inputState" class="form-control">
                                        <option selected>المدينه</option>
                                        <option>...</option>
                                        </select><br>
                                    </div>
                                    <div class="col">
                                        <select id="inputState" class="form-control">
                                            <option selected>المنطقه</option>
                                            <option>...</option>
                                            </select><br>
                                        <select id="inputState" class="form-control">
                                            <option selected>الفئات</option>
                                            <option>...</option>
                                        </select><br>
                                    </div>
                                </div>
                                <textarea class="form-control" rows="5" id="comment" placeholder="أي تفاصيل زياده"></textarea><br>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                                        <label class="custom-file-label" for="validatedCustomFile">عندك صوره</label>
                                    </div><br>
                                    <input class="btn-style mt-1" type="submit" value="يلا بينا">
                            </form>
                        </div>
                 </div>
               </b-modal>
         </div>
        </section>
    </div>
</template>

<script>
export default {
    watch: {
      $route: {
          immediate: true,
          handler(to) {
              document.title = to.meta.title || 'ألاقي فين';
          }
      },
  },
    data() {
            return {
                show: false,
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
            },
            openPop() {
                this.show = !this.show
            },
            closePop() {
                this.show = false
            },
            showModal2() {
              this.$refs['my-modal2'].show()
              this.show = false
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
