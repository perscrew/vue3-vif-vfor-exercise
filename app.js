const app = Vue.createApp({
    data() {
      return {
        tasks: [],
        taskToAdd: "",
        isListVisible: true,
      };
    },
    methods: {
      addTask() {
        this.tasks.push(this.taskToAdd);
        this.taskToAdd = '';
      },
      toggleDisplay() {
        this.isListVisible = !this.isListVisible;
      },
    },
  });

  app.mount("#exercise");
