const app = Vue.createApp({
  data() {
    return {
      newTask: '',
      taskList: ['Task 1'],
      isListVisible: true,
    }
  },

  methods: {
    addTask() {
      this.taskList.push(this.newTask);
      this.newTask = '';
    },

    toggleList() {
      this.isListVisible = !this.isListVisible;
    }
  }
})

app.mount('#assignment')
