<template>
  <ul class="cards-list">
    <CardItem v-for="card of cards" :key="card.id" :card="card" />
    <AddCardBtn @click="createCard">
      Add new card
    </AddCardBtn>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

import CardItem from './CardItem'
import AddCardBtn from '@ui/AddCardBtn'

export default {
  name: 'CardsList',
  components: { CardItem, AddCardBtn },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions({ createCard: 'createCard' }),
  },
}
</script>

<style lang="less" scoped>
.cards-list {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 40px);
  padding-bottom: 20px;
  overflow: auto;
}

@media only screen and (min-width: 450px) {
  .cards-list {
    grid-auto-columns: 350px;
  }
}
</style>
