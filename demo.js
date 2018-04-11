window.onload = function() {
  var app = new Vue({
    el: "#app",
    data: {
      message: "hello Vue!",
      message1: "hello"
    }
  });
  var app2 = new Vue({
    el: "#app-2",
    data: {
      message: "页面加载于 " + new Date().toLocaleString()
    }
  });
  var app3 = new Vue({
    el: "#app-3",
    data: {
      show: true
    }
  });
};
