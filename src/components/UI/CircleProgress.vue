<template>
  <div class="circle-progress">
    <svg width="35" height="35" viewBox="0 0 200 200">
      <text
        class="circle-progress__text"
        x="52%"
        y="54%"
        :fill="progress === 100 ? '#07d07c' : '#2d2d2d'"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {{ `${progress}%` }}
      </text>
      <circle
        cy="100"
        cx="100"
        r="95"
        opacity="0.2"
        fill="transparent"
        stroke="black"
        stroke-width="8"
      />
      <circle
        class="circle-progress__circle"
        cy="100"
        cx="100"
        r="95"
        fill="transparent"
        stroke="#07d07c"
        transform="rotate(-90 100 100)"
        stroke-width="8"
        :stroke-dasharray="`${progressValue}, 1000`"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CircleProgress',
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    progressValue() {
      return this.progress * 5.9575
    },
  },
}
</script>

<style lang="less" scoped>
.circle-progress {
  position: relative;
  display: flex;
  align-items: center;

  &__circle {
    transition: stroke-dasharray 0.25s;
  }

  &__text {
    font-size: 60px;
    font-weight: bold;
  }
}
</style>
