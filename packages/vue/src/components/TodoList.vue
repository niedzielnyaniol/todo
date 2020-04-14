<template>
  <div>dwdw</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import Task from '../model/Task';

@Component
export default class TodoList extends Vue {
  @Prop() private tasks!: Task[];
}
</script>

<style scoped>

</style>
