<template>
  <button @click="onAddItem"></button>
  <div v-for="item in items">
    <TodoListItem v-bind:text="item"></TodoListItem>
  </div>

</template>

<script lang="ts">
// import {Component, Vue} from 'vue-property-decorator';

import { Options, Vue } from 'vue-class-component';
import TodoListItem from './TodoListItem.vue';

@Options({
  components: {
    TodoListItem,
  },
  props: {
    msg: String,
  },
})
export default class TodoList extends Vue {
  addedItem = 'Test';

  items: Array<string> = [];

  onAddItem(): void {
    this.items.push(new Date().toString());
  }

  // items = []

  // onAddItem() {
  //   // this.items.push(this.addedItem)
  //   // this.addedItem = null
  // }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
