//添加localStorage
window.localStorage.setItem('name','Rosen');
//查看localStorage
window.localStorage.getItem('name');
//删除localStorage
window.localStorage.removeItem('name')
//JSON.stringify转成json字符串
window.localStorage.setItem('name',JSON.stringify{{name:'Rosen'}})

// sessionStorage的用法和localStorage的用法一样