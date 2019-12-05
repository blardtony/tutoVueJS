const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

const app2 = new Vue({
  el: '#app-2',
  data: {
    message : 'Passez votre souris sur moi pendant quelques secondes pour voir mon titre lié dynamiquement !',
    title: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
  }
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Apprendre JavaScript' },
      { text: 'Apprendre Vue' },
      { text: 'Créer quelque chose de génial' }
    ]
  }
});

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: "Hello everyone !"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split(' ').reverse().join(' ')
    }
  }
});

const app6 = new Vue({
  el: "#app-6",
  data: {
    message : "Change moi !",
    todos: [
      { text: 'Tu peux me changer' },
      { text: 'Et moi aussi' }
    ]
  }
});


Vue.component("todo-item", {
  props: ['todo'],
  template: '<Li>{{todo.text}}</li>'
})

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Légumes'},
      { id: 1, text: 'Fromage'},
      { id: 2, text: 'Tout ce que nous sommes supposés manger.'}
    ]
  }
});

const app8 = new Vue({
  el: '#app-8',
  data: {
    isVisible: true
  },
});
