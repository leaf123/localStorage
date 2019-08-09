
var d=new Date().toUTCString()
console.log(d)
<!-- 查看cookie -->
document.cookie
<!-- 添加cookie -->
document.cookie = 'name=Rosen;domain=happymmall.com;path:/index.html;expires=Fri, 09 Aug 2019 08:30:00 GMT'
<!-- 修改cookie -->
document.cookie = 'name=Rosen2;domain=happymmall.com;path:/index.html'
<!-- 删除cookie -->
document.cookie = 'name=Rosen2;domain=happymmall.com;path:/index.html;expires=Fri, 09 Aug 2017 08:30:00 GMT'
<!-- 这里把过期时间设置成过去时间或者设为0 就可以删除 -->
