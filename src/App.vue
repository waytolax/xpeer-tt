<template>
  <div id="app">
    <CardsList :cards="cards" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import CardsList from './components/CardsList'

export default {
  name: 'App',
  components: { CardsList },
  computed: {
    ...mapState({ cards: state => state.cards }),
  },
  created() {
    this.getCards()
    window.addEventListener('beforeunload', this.saveCards)
  },
  destroyed() {
    window.removeEventListener('beforeunload', this.saveCards)
  },
  methods: {
    ...mapActions({
      getCards: 'getCards',
      saveCards: 'saveCards',
    }),
  },
}
</script>

<style>
@import '~@/assets/normalize.css';
@import '~@/assets/default-styles.css';

#app {
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(90deg, #fd8355 0%, #f0576c 37%, #f79cbd 100%);
}
</style>
