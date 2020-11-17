<template>
  <div class="home">
      <div class="home-body">
          <div class="full">
              <header id="header">
                  <nav>
                      <img class="logo" src="../assets/images/market.png" alt="">
                      <ul>

                          <li class="nav-links">
                              <router-link to="/service">
                                  <span class="fa fa-university fa-lg"></span>
                                  <span>الخدمات</span>
                              </router-link>
                          </li>
                          <li class="nav-links">
                              <router-link to="/about">
                                  <span class="fa fa-question fa-lg fa-flip-horizontal"></span>
                                  <span>احنا مين</span>
                              </router-link>
                          </li>
                          <li class="nav-links">
                              <a href="tel: +201069090037">
                                  <span class="fa fa-phone fa-lg"></span>
                                  <span>تواصل معنا</span>
                              </a>
                          </li>
                          <router-link to="/login">
                              <li class="header-login"><a href="#">تسجيل الدخول</a></li>
                          </router-link>
                      </ul>
                  </nav>

                  <div class="header-content">
                      <p>عايز حاجه معينه؟</p>
                      <div class="header-links flex-no-wrap">
                          <a class="you" href="#">
                              <span><strong> ألاقي عندك؟ </strong></span>
                              <span class="fa fa-bullhorn fa-lg"></span>
                          </a>
                          <a class="where" href="#">
                              <span><strong> ألاقي فين؟ </strong></span>
                              <span class="fa fa-map-marker fa-lg"></span>
                          </a>
                      </div>
                  </div>
                  <div class="header-info row">
                      <div class="col-3">
                          <img src="../assets/images/shaking.png" alt="">
                      </div>
                      <div class="header-text col-8">
                          <h1 class="h1">ألاقي</h1>
                          <p><strong>هنقربك من اي برودكت حواليك و لو انت زبون هنقربك من كل العملاء اللي في منطقتك</strong></p>
                      </div>
                  </div>
              </header>
              <section class="home-section">
                  <div class="upper row">
                      <div class="upper-info col-8">
                          <h5><strong>لو انت بيزنيس</strong></h5>
                          <p><strong>تقدر توصل لاي حد في منطقتك او محافظنك و توريهم اخر عروضك و توصبهم في اقل وقت مجانا!</strong></p>
                          <button class="btn-style" type="button" name="button">سجل دلوقتي</button>
                      </div>
                      <div class="upper-img col-4">
                          <img src="../assets/images/phone.png" alt="">
                      </div>
                  </div>

                  <div class="upper row">
                      <div class="upper-img col-4">
                          <img src="../assets/images/Buy.png" alt="">
                      </div>
                      <div class="middle-info col-8">
                          <p><strong>بتدور علي حاجه حاوليك ؟</strong></p>
                          <button class="btn-style" type="button" name="button">ألاقي عندك ؟</button>
                      </div>
                  </div>

                  <div class="upper row">
                      <div class="low-img col-4">
                          <img id="facebook" src="../assets/images/Facebook-logo-2.png" alt="">
                          <img id="insta" src="../assets/images/Insta logo 2.png" alt="">
                      </div>
                      <div class="middle-info col-8">
                          <p><strong>تابعنا علي الفيسبوك او الانستجرام عشان يوصلك كل جديد</strong></p>
                          <div class="social-images">
                              <a href="#" class="fa fa-facebook-square fa-lg"></a>
                              <a href="#" class="fa fa-instagram fa-lg"></a>
                          </div>

                          <!-- <a href="#"><img class="social-img" src="images/Facebook-logo-1.png" alt=""></a>
                          <a href="#"><img class="social-img" src="images/Insta-logo-1.png" alt=""></a> -->
                      </div>
                  </div>
                  <footer>
                      <h3>ممول من</h3>
                      <div class="sponsor mt-4">
                          <img src="../assets/images/Apple.png" alt="">
                          <img src="../assets/images/Sponsor-1.png" alt="">
                          <img src="../assets/images/Sponsor-2.png" alt="">
                          <img src="../assets/images/Sponsor-3.png" alt="">
                          <img src="../assets/images/Tie.png" alt="">
                          <img src="../assets/images/Angry-Creative.png" alt="">
                          <img src="../assets/images/Bitcoin.png" alt="">
                          <img src="../assets/images/Ethereum.png" alt="">
                          <img src="../assets/images/Windows.png" alt="">
                          <img src="../assets/images/Facebook.png" alt="">
                      </div>
                  </footer>
              </section>
              <!-- <div class="footer">
                  <div class="circle">

                  </div>

              </div> -->
          </div>
          <div class="home-footer">
          </div>

          <div class="mobile-only">
              <header class="nav-mobile">
                  <router-link to="/login">
                      <a href="#"><strong>تسجيل الدخول</strong></a>
                  </router-link>
              </header>

              <div>
      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="100%"
        img-height="100vh"
        style="text-shadow: 1px 1px 2px #333;"
      >

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="100vh"
              src='../assets/images/Background-2.png'
              alt="image slot"
            >
          </template>
          <div class="home-mobile">
                                <div class="text">
                                    <p>عايز حاجه معينه؟</p>
                                    <div class="mobile-links">
                                        <a class="btn btn-warning" href="#"><h3>ألاقي عندك</h3></a>
                                        <a class="btn btn-light" href="#"><h3>ألاقي فين</h3></a>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h2>ألاقي</h2>
                                        <p>هتقربك من اي برودكت حواليك لو انتا زبون و هتقربك من كل العملاء اللي في منطقتك لو انتا زبون</p>
                                    </div>
                                    <img src="../assets/images/shaking.png" alt="">
                                </div>
          </div>
        </b-carousel-slide>

        <b-carousel-slide background="#DCDCDC">
            <div class="slide2">
                              <img src="../assets/images/phone.png" alt="">
                              <h5><strong>لو انت بيزنيس</strong></h5>
                              <p><strong>تقدر توصل لاي حد في منطقتك او محافظنك و توريهم اخر عروضك و توصبهم في اقل وقت مجانا!</strong></p>
                              <button class="btn-style" type="button" name="button">سجل دلوقتي</button>
            </div>
        </b-carousel-slide>

        <b-carousel-slide background="#FDD31F">
            <div class="slide2 back-color">
                            <img src="../assets/images/Buy.png" alt="">
                            <h5><strong>لو انت زبون</strong></h5>
                            <p><strong>تقدر تدور علي اي منتج حواليك برار واحد و تقدر تتابع محلاتك المفضله و عروضك كمان</strong></p>
                            <button class="btn-style" type="button" name="button">سجل دلوقتي</button>
                        </div>
        </b-carousel-slide>


      </b-carousel>
    </div>
  </div>

  </div>
  </div>
</template>


<style lang="css" scoped>
    .img-fluid {
        max-width: 100%;
        height: 100%;
        object-fit: fill;
    }

    .slide2,
    .home-mobile {
        top: 10%;
        transform: translateY(-10%);
    }
</style>

<script>

export default {
  name: "Home",

};
</script>
