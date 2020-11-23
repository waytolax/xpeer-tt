<template>
  <button class="add-btn" @click="$emit('click')">
    <slot>
      Add
    </slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.add-btn {
  display: flex;
  flex-shrink: 0;
  padding: 5px 10px 5px 40px;
  border-radius: 5px;
  background: 10px center / 20px no-repeat;
  background-image: url('~@/assets/images/add.svg');

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
