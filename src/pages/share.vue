<template>
<!--首页-->
	<div class="nostyle full" style="text-align: center;">
    <img id="bg_img" :src="shareimg" class="nostyle full" >
    <img class="erweima" :src="erweima" v-bind:style="{ top: screenWidth*1.18 + 'px',left:screenWidth*0.326 + 'px' }">
	</div>
</template>
<script>
  import axios from 'axios'
  import Util from '../util/util.js'
  export default {
      data() {
          return {
            clientWidth: '600px',
            screenWidth: document.body.clientWidth,
            fullHeight: document.documentElement.clientHeight,
            userid : Util.getUrlParam('id') || '',
            id : this.$route.params.id,
            shareimg: require('../assets/img/2017101901.jpg'),
            erweima: require('../assets/img/1508642585.png')

          }
      },
    created() {
      this.getErweima()
    },
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    watch: {
      screenWidth (val) {
        if (!this.timer) {
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
            // that.screenWidth = that.$store.state.canvasWidth
            console.log(that.screenWidth)
//            that.init()
            that.timer = false
          }, 400)
        }
      }
    },
    methods:{
      getErweima () {
        let that = this
        that.inloading = true
        axios.get(Util.getContextPath()+'/api/v1/activity/merchant/twitter/'+that.id).then(function(response) {
          that.erweima = response.data.data;
          // console.log(response.data)
        })
      }
    }
  }
</script>
<style>
  .nostyle{margin: 0px;padding: 0px;}
  .full{height: 100%;width: 100%;}
  .erweima{width: 35%;position: absolute;left: 15rem;top:50rem;}
</style>
