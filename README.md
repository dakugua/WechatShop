# WechatShop

通过npm i lrz安装lrz
npm i lrz

之后在webpack.base.conf.js的module.exports中resolve中进行引用：

alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
       "jquery": path.resolve(__dirname, '../static/js/jquery-3.1.1.min.js'),
      "lrz":'lrz/lrz.bundle.js'
    }

