# pure-updater
###**一个可以用的自动更新方案**
####经测试可支持 Android 9.0
----------


#作者
###**PurePeace**
#####*大一在读，编程水平有限，有问题欢迎指正*

----------

# Version: 1.0.0

###模拟请求数据来自 [**Easy Mock**](https://easy-mock.com/)


----------


# 说明

- 支持安装更新后，app再次启动时删除更新安装包
- 监控用户是否有完成更新安装
- 强制更新请自行安排


----------


# 以下页面

##App.vue
- 在 *app* 加载时检测更新
  

----------


##main.js
- 在 *prototype* 里面放了*currentVersion*，全局可获取当前的版本信息


----------


##**for Android >= 8.0**
  
###manifest.json
  
  - 在 *permissions* 中加入了权限*<uses-permissionandroid:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>* 以适配 **Android9.0**
  - 同时修改了 *targetSdkVersion* 为 *26* 以适配 **Android 9.0**
 

----------


# 嗯？

- 更新页面，我下载好了安装包，也点击安装了，但是一回到app就会显示Modal：安装被取消？
- 这是因为真正的更新应该是覆盖安装的，你不可能直接回到app，除非你进行的不是覆盖安装
- 用这个逻辑判断用户是否在安装包下载完成后安装了更新


----------


# 应该，没什么了，吧

####2019年3月23日 - PurePeace