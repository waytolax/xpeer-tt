<template>
  <button class="add-card-btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.add-card-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  border: 1px dashed #ededed;
  border-radius: 5px;
  background: center / 50px no-repeat;
  background-image: url('~@/assets/images/add.svg');
  font-size: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
