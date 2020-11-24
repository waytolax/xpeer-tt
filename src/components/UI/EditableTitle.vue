<template>
  <textarea
    :class="['editable-title', { 'editable-title--editing': isEditing }]"
    role="heading"
    spellcheck="false"
    rows="1"
    maxlength="80"
    placeholder="Title"
    :value="value"
    v-bind="$attrs"
    @input="resizeArea($event.target)"
    @focus="startEdit($event.target)"
    @blur="stopEdit"
    @keydown.enter="submitChanges"
    @change="$emit('change', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isEditing: false,
    }
  },
  mounted() {
    this.resizeArea(this.$el)

    if (!this.$el.value) this.startEdit(this.$el)
  },
  methods: {
    resizeArea(el) {
      el.style.height = 'auto'
      el.style.height = el.scrollHeight + 'px'
    },
    startEdit(el) {
      this.isEditing = true
      el.select()
    },
    stopEdit() {
      this.isEditing = false
    },
    submitChanges(ev) {
      ev.target.blur()
    },
  },
}
</script>

<style lang="less" scoped>
.editable-title {
  width: 100%;
  max-height: 80px;
  padding: 3px 10px;
  background: none;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: inherit;
  overflow: hidden;
  resize: none;

  &:not(&--editing):hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &--editing {
    background: rgba(0, 0, 0, 0.05);
  }
}
</style>
