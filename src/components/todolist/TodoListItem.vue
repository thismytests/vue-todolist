<template>
  <div class="hello">
    <h1>{{ text }}</h1>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    model: String,
  },
})
export default class TodoListItem extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
