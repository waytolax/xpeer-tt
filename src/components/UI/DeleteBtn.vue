<template>
  <button class="delete-btn" @click="$emit('click')" />
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.delete-btn {
  display: flex;
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: center / 20px no-repeat;
  background-image: url('~@/assets/images/delete.svg');

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
