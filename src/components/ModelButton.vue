<template lang="html">
    <div class="">
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
    </div>

</template>

<script>
export default {
    // import $ from 'jquery'
    name: 'ModalButton',
    data() {
            return {
                show: false,
            }
        },

        methods: {
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

}
</script>

<style lang="css" scoped>
</style>
