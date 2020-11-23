<template>
  <ul class="tasks-list">
    <TaskItem v-for="task of tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TaskItem from './TaskItem'

export default {
  name: 'TasksList',
  components: { TaskItem },
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 10px;
  overflow: auto;
}
</style>
