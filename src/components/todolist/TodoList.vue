<template>
  <div class="todolist">
    <input v-model="addedItem" type="text" v-on:keyup.enter="onAddItem">
    <button @click="onAddItem">Add Item</button>

    <div v-for="item in items">
      <TodoListItem v-bind:model="item"></TodoListItem>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoListItem from './TodoListItem.vue';

export type Item = {
  text: string
}
@Options({
  components: {
    TodoListItem,
  },
  props: {
    msg: String,
    items: Array<{ text: string }>
  },
})
export default class TodoList extends Vue {
  addedItem = '';

  items: Array<Item> = [];

  onAddItem(): void {
    this.items.push({text: this.addedItem});
    this.resetAddItem();
  }

  resetAddItem() {
    this.addedItem = '';
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
