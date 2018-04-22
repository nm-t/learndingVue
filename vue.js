let app = new Vue({
    el: '#app', // what element is this getting rendered into?
    data: {
      message: 'Hello Vue!'
    }
  })

let app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'This is the current date! AND time! ' + new Date().toLocaleString()
  }
})