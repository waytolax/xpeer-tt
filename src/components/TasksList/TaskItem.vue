<template>
  <li class="task-item">
    <div class="task-item__header">
      <EditableTitle
        class="task-item__title"
        placeholder="Task title"
        :value="task.title"
        @change="updateTitle"
      />
      <DeleteBtn @click="deleteTask" />
    </div>
    <TaskProgress :initial-value="task.progress" @change="updateProgress" />
  </li>
</template>

<script>
import { mapActions } from 'vuex'

import EditableTitle from '@ui/EditableTitle'
import DeleteBtn from '@ui/DeleteBtn'
import TaskProgress from './TaskProgress'

export default {
  name: 'TaskItem',
  components: {
    EditableTitle,
    DeleteBtn,
    TaskProgress,
  },
  props: {
    task: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.$el.scrollIntoView({ behavior: 'smooth' })
  },
  methods: {
    ...mapActions({
      updateTask: 'updateTask',
      delete: 'deleteTask',
    }),
    updateTitle(value) {
      this.updateTask({ ...this.task, title: value })
    },
    updateProgress(value) {
      this.updateTask({ ...this.task, progress: value })
    },
    deleteTask() {
      const isConfirmed = confirm('Are you sure you want to delete this task?')
      if (isConfirmed) this.delete(this.task)
    },
  },
}
</script>

<style lang="less" scoped>
.task-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #fafafa;
  border-radius: 5px;

  &__header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  &__title {
    margin-right: 10px;
  }
}
</style>
