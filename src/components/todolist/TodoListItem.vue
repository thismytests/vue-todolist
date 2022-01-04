<template>
  <div class="hello">
    <h1>{{ model }}</h1>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
// types
import { Item } from '@/components/todolist/TodoList.vue';

@Options({
  props: {
    model: Object as () => Item,
  },
})
export default class TodoListItem extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
