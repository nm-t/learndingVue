let app = new Vue ({
    el: '#app', // what element is this getting rendered into?
    data: {
      isTrue: true,
      message: 'Hello Vue!'
    },
    methods: {
      toggleIsTrue: function () {
        this.isTrue = !this.isTrue;
      },
      methodName: function () {
        return "Hello from methodName!"
      }
    }
  });

