<template>
<!--首页-->
	<div class="wrapper">
    <table>
      <tr>
        <td class="label"><span class="must">*</span>手机号</td>
        <td class="content">
          <input class="input" placeholder="请输入手机号"/>
        </td>
      </tr>

      <tr>
        <td class="label">E-mail</td>
        <td class="content">
          <input class="input" placeholder="请输入E-mail"/>
        </td>
      </tr>

      <tr>
        <td class="label"><span class="must">*</span>密码</td>
        <td class="content">
          <input type="password" class="input" placeholder="请输入密码"/>
        </td>
      </tr>

      <tr>
        <td class="label"><span class="must">*</span>确认密码</td>
        <td class="content">
          <input type="password" class="input" placeholder="请输入确认密码"/>
        </td>
      </tr>

      <tr>
        <td class="label"><span class="must">*</span>法人</td>
        <td class="content">
          <input class="input" placeholder="请输入法人"/>
        </td>
      </tr>

      <tr>
        <td class="label"><span class="must">*</span>统一社会信用代码</td>
        <td class="content">
          <input class="input" placeholder="请输入统一社会信用代码"/>
        </td>
      </tr>

      <tr>
        <td class="label"><span class="must">*</span>企业名称</td>
        <td class="content">
          <input class="input" placeholder="请输入企业名称"/>
        </td>
      </tr>

      <tr>
        <td class="label"><span class="must">*</span>电话</td>
        <td class="content">
          <input class="input" placeholder="请输入电话"/>
        </td>
      </tr>

      <tr>
        <td class="label">官方网址</td>
        <td class="content">
          <input class="input" placeholder="请输入官方网址" />
        </td>
      </tr>

      <tr>
        <td class="label">企业简介</td>
        <td class="content">
          <textarea  class="input" placeholder="请输入企业简介"></textarea>
        </td>
      </tr>

      <tr>
        <td colspan="2" style="width: 100%;text-align: center">
          <button class="button" >提交</button>
        </td>
      </tr>
    </table>
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
      data() {
          return {
            msg: 'Welcome to YYJ'
          }
      }
  }
</script>
<style>
  table{width: 100%;margin-top: 3rem;}
  .nomargin{margin: 0px;padding: 0px;}
  .label{width: 35%;text-align: right;font-size: 1.3rem;padding-right:15px;padding-top: 5px;padding-bottom: 5px; }
  .label .must{color: red;margin-right: 8px;margin-top: 10px;}
  .content{width: 65%;padding-top: 5px;padding-bottom: 5px;}

  .content .input{width: 100%;border: solid 1px grey;}

  .button{width: 50%;margin: auto;background-color: #4CAF50;border: none;color: white;padding: 1rem;text-align: center;text-decoration: none;display: inline-block;font-size: 1.3rem;}
</style>
