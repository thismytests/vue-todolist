<template>
  <div class="todolist">
    <input v-model="addedItem" type="text" v-on:keyup.enter="onAddItem">
    <button @click="onAddItem">Add Item</button>

    <div v-for="item in items">
      <TodoListItem v-bind:text="item"></TodoListItem>
    </div>
  </div>
</template>

<script lang="ts">
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
  addedItem = '';

  items: Array<string> = [];

  onAddItem(): void {
    this.items.push(this.addedItem);
    this.resetAddItem();
  }

  resetAddItem() {
    this.addedItem = '';
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
