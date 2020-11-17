<template lang="html">
    <div id="login">
        <section>
    <div class="login-form">
        <div class="login-logo shadow-lg">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <p class="welcome"><strong>أهلا بيك</strong></p>
        <div class="container">
            <div class="row">
                <div class="col-sm left">
                    <span>عندك أكونت</span><br>
                    <span><small>اتفضل :)</small></span>
                    <form class="form-login" action="#" method="post">
                        <label for="phone">رقم التليفون</label><br>
                        <input type="tel" id="phone" name="phone" required><br>

                        <label for="code">الكود</label><br>
                        <input type="text" id="code" name="code" required><br>
                        <a href="#"><small>أبعت الكود تاني</small></a><br>
                        <input class="btn-style mt-1" type="submit" value="يلا بينا">
                    </form>
                </div>
                <hr class="separator">
                <div class="line"></div>
                <div class="col-sm right">
                    <span>أول مره</span><br>
                    <span><small>هتشرفنا :)</small></span>
                    <button type="button" class="btn-style" @click="showModal">
                      سجل دلوقتي
                    </button>
                </div>
            </div>
        </div>

    </div>

        <!-- Modal -->
            <div>
               <b-modal ref="my-modal" hide-footer>
                 <div class="d-block text-center">
                     <h4>انت مين</h4>
                        <div class="container">
                            <div class="row">
                                <div class="left col">
                                    <router-link to="/login-form">
                                      <a href="">
                                          <img src="../assets/images/client.png" alt="">
                                          <p>زبون</p>
                                      </a>
                                    </router-link>

                                </div>

                                <div class="right col">
                                    <router-link to="/login-form">
                                      <a href="">
                                          <img src="../assets/images/busn.png" alt="">
                                          <p>بيزنيس</p>
                                      </a>
                                    </router-link>

                                </div>
                            </div>
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
    methods: {
     showModal() {
       this.$refs['my-modal'].show()
     },
     hideModal() {
       this.$refs['my-modal'].hide()
     },
     toggleModal() {
       // We pass the ID of the button that we want to return focus to
       // when the modal has hidden
       this.$refs['my-modal'].toggle('#toggle-btn')
     }
   }
}
</script>

<style lang="css" scoped>

#login {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/images/Background.png');
    background-color: #FDD31F;
    color: black;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    /* background-position: right top; */
}

</style>
