<template lang="html">
    <div id="login">
        <section>
            <div class="login-form-user">
                <div class="login-logo shadow-lg">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <p class="welcome"><strong>أهلا بيك</strong></p>
                <div class="container">
                    <form class="create-account">
                      <div class="row">
                        <div class="col-sm-6 left">
                            <div class="form-inline">
                                <label for="user" class="mr-sm-2"><span class="fa fa-user fa-lg"></span></label>
                                <input type="text" id="user" class="form-control mb-2 mr-sm-2" placeholder="أسمك" required>
                            </div><br>
                            <div class="form-inline">
                                 <label for="mail" class="mr-sm-2"><span class="fa fa-envelope-o fa-lg"></span></label>
                                <input type="text" id="mail" class="form-control mb-2 mr-sm-2" placeholder="الايميل بتاعك" required>
                            </div><br>
                            <div class="form-inline">
                                 <label for="mobile" class="mr-sm-2"><span class="fa fa-mobile fa-lg"></span></label>
                                <input type="text" id="mobile" class="form-control mb-2 mr-sm-2" placeholder="رقم موبايلك" required>
                            </div><br>

                        </div>
                        <div class="col-sm-6 right">
                            <div class="form-inline">
                                 <label for="city" class="mr-sm-2"><span class="fa fa-globe fa-lg"></span></label>
                                 <select id="city" class="form-control mb-2 mr-sm-2">
                                   <option selected>ألمدينه</option>
                                   <option>...</option>
                                 </select>
                            </div><br>

                            <div class="form-inline">
                                 <label for="location" class="mr-sm-2"><span class="fa fa-map-marker fa-lg"></span></label>
                                 <select id="location" class="form-control mb-2 mr-sm-2">
                                   <option selected>المنطقه</option>
                                   <option>...</option>
                                 </select>
                            </div><br>
                            <div class="form-inline">
                                 <label for="category" class="mr-sm-2"><span class="fa fa-shopping-bag fa-lg"></span></label>
                                 <select id="category" class="form-control mb-2 mr-sm-2">
                                   <option selected>الفئات</option>
                                   <option>...</option>
                                 </select>
                            </div><br>

                        </div>
                      </div>
                      <input class="btn-style mt-1" type="submit" value="يلا بينا">
                    </form>
                </div>
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
