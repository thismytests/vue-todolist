<template>
  <div class="todolist">
    <input v-model="addedItem" type="text" v-on:keyup.enter="onAddItem"
           data-testid="todo-input">
    <button @click="onAddItem" data-testid="todo-add-item-button">Add Item</button>

    <div v-for="item in dataItems">
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
    items: Array<{ text: string }>
  },
  watch: {
    items(val) {
      this.dataItems = val;
    }
  }
})
export default class TodoList extends Vue {
  addedItem = '';

  dataItems: Array<Item> = [];

  onAddItem(): void {
    this.dataItems.push({ text: this.addedItem });
    // console.log(`this.dataItems :`, this.dataItems);
    this.resetAddItem();
  }

  resetAddItem() {
    this.addedItem = '';
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
