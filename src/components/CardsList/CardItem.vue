<template>
  <li class="card-item">
    <div class="card-item__header">
      <EditableTitle
        class="card-item__title"
        placeholder="Card title"
        :value="card.title"
        @change="updateTitle"
      />
      <CircleProgress title="Card progress" :progress="cardProgress" />
    </div>
    <TasksList class="card-item__tasks-list" :tasks="tasks" />
    <div class="card-item__footer">
      <AddBtn class="card-item__add-task" @click="createTask(card)">
        Add new task
      </AddBtn>
      <DeleteBtn @click="deleteCard" />
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

import EditableTitle from '@ui/EditableTitle'
import DeleteBtn from '@ui/DeleteBtn'
import AddBtn from '@ui/AddBtn'
import CircleProgress from '@ui/CircleProgress'
import TasksList from '../TasksList'

export default {
  name: 'CardItem',
  components: {
    EditableTitle,
    DeleteBtn,
    AddBtn,
    CircleProgress,
    TasksList,
  },
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    tasks() {
      return this.card.tasks
    },
    cardProgress() {
      const sum = this.tasks.reduce((sum, task) => sum + task.progress, 0)
      return parseInt(sum / this.tasks.length) || 0
    },
  },
  mounted() {
    this.$el.scrollIntoView({ behavior: 'smooth', inline: 'start' })
  },
  methods: {
    ...mapActions({
      updateCard: 'updateCard',
      delete: 'deleteCard',
      createTask: 'createTask',
    }),
    updateTitle(value) {
      this.updateCard({ ...this.card, title: value })
    },
    deleteCard() {
      const isConfirmed = confirm('Are you sure you want to delete this card?')
      if (isConfirmed) this.delete(this.card)
    },
  },
}
</script>

<style lang="less" scoped>
.card-item {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 80px);
  padding: 10px;
  background: #ededed;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);

  &__header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  &__title {
    margin-right: 10px;
  }
  &__tasks-list {
    margin-bottom: 10px;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }
  &__add-task {
    width: 100%;
    margin-right: 10px;
  }
}
</style>
