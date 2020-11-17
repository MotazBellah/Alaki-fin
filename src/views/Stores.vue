<template lang="html">
    <div class="">
        <header id="customer-header">
            <nav id="store-nav">
                <a href="#" class="fa fa-bars fa-lg"></a>
                <a href="#" class="fa fa-heart-o fa-lg"></a>
                <a href="#" class="fa fa-user-o fa-lg"></a>

                <a href="#">
                    <img src="../assets/images/icon-1.png" alt="">
                </a>
            </nav>

        </header>

        <section class="stores-wrapper">
            <div class="store-container">
                <div class="">
                    <div class="store-list">
                        <div
                            class="client stores row"
                            v-for="(store, index) in stores"
                            :key="index"
                        >
                            <div class="col">
                                <div class="logo-msg mr-3">
                                    <img :src='store.img' >
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="owner-msg">
                                    <div class="rate">
                                        <a><span title="1" :class="store.rating >= 1 ? 'fa fa-star checked' : 'fa fa-star'"></span></a>
                                        <a><span title="2" :class="store.rating >= 2 ? 'fa fa-star checked' : 'fa fa-star'"></span></a>
                                        <a><span title="3" :class="store.rating >= 3 ? 'fa fa-star checked' : 'fa fa-star'"></span></a>
                                        <a><span title="4" :class="store.rating >= 4 ? 'fa fa-star checked' : 'fa fa-star'"></span></a>
                                        <a><span title="5" :class="store.rating >= 5 ? 'fa fa-star checked' : 'fa fa-star'"></span></a>
                                    </div>
                                    <p><strong>{{ store.name }}</strong></p>
                                </div>
                            </div>
                            <div class="col">
                                <a class="fa fa-heart fa-lg like"></a>
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

                stores: [
                     {
                        'rating': 3,
                        'name': 'دكان',
                        'img': '',
                    },
                    {
                       'rating': 4,
                       'name': 'استور',
                       'img': '',
                   },
                   {
                      'rating': 2,
                      'name': 'محل رقم 1',
                      'img': '',
                  },
                  {
                     'rating': 5,
                     'name': 'محل رقم 2',
                     'img': '',
                 },
               ]
            }
        },
}
</script>

<style lang="css" scoped>
</style>
