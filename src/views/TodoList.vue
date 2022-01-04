<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoList msg="Welcome to Your Vue.js + TypeScript App" v-bind:items="items"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoList from '@/components/todolist/TodoList.vue';
import axios from 'axios';

interface Item {
  text: string;
}

@Options({
  components: {
    TodoList,
  },
})
export default class Home extends Vue {
  info: any = '';

  items: Array<any> = [];

  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res) => {
        // todo ... Mykolai Lytvyn ... will be updated
        const arr = [];

        for (let item in res.data.bpi) {
          arr.push({ text: item });
        }

        this.items = arr;
        console.log(`arr :`, arr);
      });
  }
}
</script>
