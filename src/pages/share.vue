<template>
<!--首页-->
	<div class="nostyle full">
    <img :src="shareimg" class="nostyle full">
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
      data() {
          return {
            shareimg: require('../assets/img/2017101901.jpg')
          }
      }
  }
</script>
<style>
  .nostyle{margin: 0px;padding: 0px;}
 .full{width: 100%;height: 100%;}
</style>
