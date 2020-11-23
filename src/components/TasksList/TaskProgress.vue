<template>
  <div class="task-progress">
    <span
      :class="[
        'task-progress__result',
        { 'task-progress__result--finished': value === 100 },
      ]"
    >
      {{ `Task progress: ${value}%` }}
    </span>
    <input
      v-model.number="value"
      type="range"
      @change="$emit('change', value)"
    />
  </div>
</template>

<script>
export default {
  name: 'TaskProgress',
  props: {
    initialValue: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      value: this.initialValue,
    }
  },
}
</script>

<style lang="less" scoped>
.task-progress {
  display: flex;
  flex-direction: column;

  &__result {
    margin-bottom: 5px;
    color: #f25115;

    &--finished {
      color: #07d07c;
    }
  }
}
</style>
