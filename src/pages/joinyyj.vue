<template>
<!--首页-->
	<div class="joinyyj_body">
    <p class="joinyyj_title">凯腾聚知奥聚辰欢迎您</p>
    <div class="joinyyj_table_bg">
      <table class="joinyyj_table">
        <tr>
          <td colspan="2" style="width: 100%;text-align: center;padding-top: 10px;padding-bottom: 10px;font-size: 1.6rem;">
            商户注册
          </td>
        </tr>
        <tr>
          <td colspan="2"  style="padding-left: 3.5%;text-align: left;">
            <span><span class="must">*</span>手机号</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <!-- 请输入手机号(必填) -->
            <input class="joinyyj_input" placeholder="建议填写企业负责人或电商专员手机" v-model="contactMobile"/>
          </td>
        </tr>
        <tr>
          <td colspan="2"  style="padding-left: 3.5%;text-align: left;">
            <span><span class="must">*</span>E-mail</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <!-- 请输入E-mail(必填) -->
            <input class="joinyyj_input" placeholder="建议填写企业或企业负责人邮箱" v-model="contactEmail"/>
          </td>
        </tr>
        <tr>
          <td colspan="2"  style="padding-left: 3.5%;text-align: left;">
            <span><span class="must">*</span>密码</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <!-- 请输入密码(必填) -->
            <input type="password" class="joinyyj_input" placeholder="尽量使用字母数字组和密码，不少于6个字符" v-model="password"/>
          </td>
        </tr>
        <tr>
          <td colspan="2"  style="padding-left: 3.5%;text-align: left;">
            <span><span class="must">*</span>确认密码</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="password" class="joinyyj_input" placeholder="请输入确认密码(必填)" v-model="secondpassword"/>
          </td>
        </tr>
        <tr>
          <td colspan="2"  style="padding-left: 3.5%;text-align: left;">
            <span><span class="must">*</span>法人</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <!-- 请输入法人(必填) -->
            <input class="joinyyj_input" placeholder="营业执照上法人或企业事业部负责人" v-model="businessEntity"/>
          </td>
        </tr>
        <tr>
          <td colspan="2"  style="padding-left: 3.5%;text-align: left;">
            <span>法人联系电话</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <!-- 请输入法人联系电话(选填) -->
            <input class="joinyyj_input" placeholder="企业负责人电话或办公电话" v-model="contactTel"/>
          </td>
        </tr>
        <tr>
          <td colspan="2"  style="padding-left: 3.5%;text-align: left;">
            <span><span class="must">*</span>统一社会信用代码</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <!-- 请输入统一社会信用代码(必填) -->
            <input class="joinyyj_input" placeholder="营业执照上代码" v-model="businessLicenceCode"/>
          </td>
        </tr>
        <tr>
          <td colspan="2"  style="padding-left: 3.5%;text-align: left;">
            <span><span class="must">*</span>企业名称</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <!-- 请输入企业名称(必填) -->
            <input class="joinyyj_input" placeholder="和营业执照一致" v-model="merchantName"/>
          </td>
        </tr>
        <tr>
          <td colspan="2"  style="padding-left: 3.5%;text-align: left;">
            <span>官方网址</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input class="joinyyj_input" placeholder="没有时注明无" v-model="website"/>
          </td>
        </tr>
        <tr>
          <td colspan="2"  style="padding-left: 3.5%;text-align: left;">
            <span>企业简介</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <textarea  class="joinyyj_input" placeholder="可登陆后再完善" v-model="merchantIntro"></textarea>
          </td>
        </tr>

        <tr>
          <!--<td class="label">营业执照</td>-->
          <td class="file" colspan="2">
            营业执照(可登录后再上传)
            <!--<input type="button" @click="chooseImg()">-->
            <input type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange" >
          </td>
        </tr>
        <tr >
          <td colspan="2" style="width: 80%;text-align: center;">
            <img :src="dataUrl" class="joinyyj_img" style="width: 30%;" v-if="dataUrl"/>
          </td>
        </tr>


        <!-- <tr>
           <td class="label"><span class="must">*</span>手机号</td>
           <td class="content">
             <input class="input" placeholder="请输入手机号" v-model="contactMobile"/>
           </td>
         </tr>-->

        <!-- <tr>
           <td class="label"><span class="must">*</span>E-mail</td>
           <td class="content">
             <input class="input" placeholder="请输入E-mail" v-model="contactEmail"/>
           </td>
         </tr>-->

        <!-- <tr>
           <td class="label"><span class="must">*</span>密码</td>
           <td class="content">
             <input type="password" class="input" placeholder="请输入密码" v-model="password"/>
           </td>
         </tr>-->

        <!--<tr>-->
        <!--<td class="label"><span class="must">*</span>确认密码</td>-->
        <!--<td class="content">-->
        <!--<input type="password" class="input" placeholder="请输入确认密码" v-model="secondpassword"/>-->
        <!--</td>-->
        <!--</tr>-->

        <!--<tr>-->
        <!--<td class="label"><span class="must">*</span>法人</td>-->
        <!--<td class="content">-->
        <!--<input class="input" placeholder="请输入法人" v-model="businessEntity"/>-->
        <!--</td>-->
        <!--</tr>-->

        <!--<tr>-->
        <!--<td class="label">联系电话</td>-->
        <!--<td class="content">-->
        <!--<input class="input" placeholder="请输入联系电话" v-model="contactTel"/>-->
        <!--</td>-->
        <!--</tr>-->


        <!--<tr>-->
        <!--<td class="label"><span class="must">*</span>统一社会信用代码</td>-->
        <!--<td class="content">-->
        <!--<input class="input" placeholder="请输入统一社会信用代码" v-model="businessLicenceCode"/>-->
        <!--</td>-->
        <!--</tr>-->

        <!--<tr>-->
        <!--<td class="label"><span class="must">*</span>企业名称</td>-->
        <!--<td class="content">-->
        <!--<input class="input" placeholder="请输入企业名称" v-model="merchantName"/>-->
        <!--</td>-->
        <!--</tr>-->



        <!--<tr>-->
        <!--<td class="label">官方网址</td>-->
        <!--<td class="content">-->
        <!--<input class="input" placeholder="请输入官方网址" v-model="website"/>-->
        <!--</td>-->
        <!--</tr>-->

        <!--<tr>-->
        <!--<td class="label">企业简介</td>-->
        <!--<td class="content">-->
        <!--<textarea  class="input" placeholder="请输入企业简介" v-model="merchantIntro"></textarea>-->
        <!--</td>-->
        <!--</tr>-->

        <!--<tr>-->
        <!--<td colspan="2" style="width: 100%;text-align: center">-->
        <!--<button class="joinbutton" @click="uploaddata()" :disabled ="noSub">{{subState}}</button>-->
        <!--</td>-->
        <!--</tr>-->
      </table>
      <hr class="joinyyj_hr">
      <div style="text-align: center;padding:1.3rem;">
        <button class="joinbutton" @click="uploaddata()" :disabled ="noSub">{{subState}}</button>
      </div>
    </div>
	</div>
</template>

<script>
  import axios from 'axios'
  import Util from '../util/util.js'
  import wx from 'weixin-js-sdk'
  import lrz from '../../node_modules/lrz/dist/lrz.bundle.js'
  import PostbirdAlertBox from '../util/js/postbirdAlertBox.js'


  export default {
      data() {
          return {
            imgUrls: [],
            dataUrl:'',
            id : this.$route.params.id,
            contactMobile:'',
            contactEmail:'',
            contactTel:'',
            password:'',
            secondpassword:'',
            businessEntity:'',
            businessLicenceCode:'',
            merchantName:'',
            website:'',
            businessLicence:'',
            merchantIntro:'',
            subState:'提交',
            noSub : false,
            msg: 'Welcome to YYJ'
          }
      },
      methods:{
          uploaddata(){
              if(!Util.checkMobileNum(this.contactMobile)){
                this.showAlert('请输入有效手机号')
                return
              }
            if(this.contactEmail == ''){
              this.showAlert('请输入邮箱')
              return ;
            }
            if(this.password != this.secondpassword){
              this.showAlert('两次密码输入不一致')
              return ;
            }
              if(this.contactMobile == ''){
                this.showAlert('请输入手机号')
                return ;
              }
            if(this.password == ''){
              this.showAlert('请输入密码')
              return ;
            }

            if(this.businessEntity == ''){
              this.showAlert('请输入法人')
              return ;
            }


//            if(this.contactTel !=null && this.contactTel != '' && !Util.checkMobileNum(this.contactTel)){
//              this.showAlert('请输入有效联系电话')
//              return
//            }
            if(this.businessLicenceCode == ''){
              this.showAlert('请输入统一社会信用代码')
              return ;
            }
            if(this.merchantName == ''){
              this.showAlert('请输入企业名称')
              return ;
            }
//            if(this.website == ''){
//              this.showAlert('请输入企业网址')
//              return ;
//            }
//
//            if(this.merchantIntro == ''){
//              this.showAlert('请输入企业简介')
//              return ;
//            }
//            if(this.businessLicence == ''){
//              this.showAlert('请上传营业执照')
//              return ;
//            }
            let vm = this;
            let param = new URLSearchParams();
            param.append("contactMobile", this.contactMobile);
            param.append("contactEmail", this.contactEmail);
            param.append("password", this.password);
            param.append("businessEntity", this.businessEntity);
            param.append("contactTel", this.contactTel);
            param.append("businessLicenceCode", this.businessLicenceCode);
            param.append("merchantName", this.merchantName);
            param.append("website", this.website);
            param.append("businessLicence",this.businessLicence);
            param.append("merchantIntro", this.merchantIntro);

            var id  = (vm.id == '' || vm.id == null) ?'':vm.id;
            axios.post(Util.getContextPath()+'/api/v1/merchant/join/'+id,param).then(function(response) {
//              that.erweima = response.data.data;
               console.log(response.data)
              if(response.data.code == 0){
                //http://boss.catoncar.com/index.html
                vm.noSub = true
                vm.subState='已提交'
                vm.showAlert('添加用户成功')
                setTimeout(function(){
                  location.href='http://boss.catoncar.com/index.html'
                },1000);
              }else{
                vm.showAlert(response.data.msg)
              }
            })
          },
        chooseImg(){
          wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
              var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            }
          });
        },
        showAlert(msg) {
          PostbirdAlertBox.alert({
            'title': '提示',
            'content': msg,
            'okBtn': '确认',
            'contentColor': 'green',
            'onConfirm': function () {

            }
          });
        },
        imgPreview (file) {
          let self = this;
          // 看支持不支持FileReader
          if (!file || !window.FileReader) return;

          if (/^image/.test(file.type)) {
            // 创建一个reader
            var reader = new FileReader();
            // 将图片将转成 base64 格式
            reader.readAsDataURL(file);
            // 读取成功后的回调
            reader.onloadend = function () {
              self.dataUrl = this.result;
            }
          }
        },
        onFileChange: function(e) {
          /*var file = this.files[0]
          imgPreview(file);*/
          /*let self = this
          var file = this.files[0]   //读取文件
          // 看支持不支持FileReader
          if (!file || !window.FileReader) return;
          if (/^image/.test(file.type)) {
            // 创建一个reader
            var reader = new FileReader();
            // 将图片将转成 base64 格式
            reader.readAsDataURL(file);
            // 读取成功后的回调
            reader.onloadend = function () {
              self.dataUrl = this.result;
            }
          }*/
          /*reader = new FileReader();

          reader.onload = function() {
            var result = this.result   //result为data url的形式
              img = new Image()
              img.src = result;


            if(result.length < maxSize) {
              imgUpload(result);      //图片直接上传
            } else {
              var data = compress(img);    //图片首先进行压缩
              imgUpload(data);                //图片上传
            }
          }

          reader.readAsDataURL(file);*/

          var files = e.target.files || e.dataTransfer.files;
          if(!files.length) return;
          this.createImage(files, e);
        },
        compress(img) {
          canvas.width = img.width;
          canvas.height = img.height;

          //利用canvas进行绘图

          //将原来图片的质量压缩到原先的0.2倍。
          var data = canvas.toDataURL('image/jpeg', 0.2); //data url的形式
          return data;
        }
        ,
        createImage: function(file, e) {
          let vm = this;
          lrz(file[0], { width: 480 }).then(function(rst) {
            vm.imgUrls.push(rst.base64);
            console.log(vm.imgUrls)
            vm.dataUrl = rst.base64;
//            this.upImg();
            console.log('123123123123');
            console.log('4444');
            let fileparam = new URLSearchParams();
            fileparam.append('file', vm.dataUrl);
            if(rst.base64 != ''){
              vm.noSub = true
              vm.subState='正在上传图片'
            }

            axios.post(Util.getContextPath()+'/api/v1/upload/base64',fileparam).then(function(response) {
              console.log(response.data)
              vm.businessLicence = response.data.data
              if(response.data.code != '0'){
                this.showAlert('上传失败，请重新上传')
                vm.businessLicence = '';
              }
              vm.noSub = false
              vm.subState='提交'
            })
            return rst.base64;
          }).always(function() {
            // 清空文件上传控件的值
            e.target.value = null;
          });
        },
        upImg :function(){
          console.log('555555555')
          return ''
          /*let param = new URLSearchParams();
          param.append('file', this.dataUrl);

          axios.post(Util.getContextPath()+'/api/v1/upload/base64',param).then(function(response) {
            console.log(response.data)
          })*/
        }
      }
  }
</script>
<style lang="css">
  @import "../assets/css/postbirdAlertBox.css";
  /*table{width: 100%;margin-top: 3rem;}*/
  .nomargin{margin: 0px;padding: 0px;}

  .joinyyj_body{width: 100%;height: 100%;overflow: hidden;padding-left: 1rem;padding-right: 1rem;background: #d2d6de;padding-bottom: 2rem;}

  .joinyyj_title{width: 100%;font-size: 2.2rem;padding-top: 1.3rem;text-align: center;}

  .joinyyj_table_bg{background: white;}
  .joinyyj_table{width: 100%;margin-top: 1rem;}
  /*.joinyyj_table tr{padding: 5px;}*/
  .joinyyj_table td{text-align: center;}

  .joinyyj_input{width: 93%;margin: auto;padding-top: 3px;padding-bottom: 3px;}

  .label{width: 35%;text-align: right;font-size: 1.3rem;padding-right:15px;padding-top: 5px;padding-bottom: 5px; }
  .must{color: red;margin-right: 5px;}
  .content{width: 65%;padding-top: 5px;padding-bottom: 5px;}

  .content .input{width: 100%;border: solid 1px grey;}



  .joinyyj_img{width: 30%;border-radius: 0.3rem;}

  .joinyyj_hr{ border: 0;width: 93%;margin: auto;height: 1px;background: #b2b2b2;}

  .joinbutton{width: 30%;background-color: #3c8dbc;border: none;color: white;padding: 0.8rem;text-align: center;text-decoration: none;display: inline-block;font-size: 1.3rem;}
  .file {
    position: relative;
    display: inline-block;
    background: #3c8dbc;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: white;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    left: 3.5%;
    width: 93%;
  }
  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
  .file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
  }
</style>
