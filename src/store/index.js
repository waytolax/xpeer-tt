import Vue from 'vue'
import Vuex from 'vuex'
import { getUpdatedArr } from '@/helpers'
import { Card, Task } from './models'

Vue.use(Vuex)

const state = () => ({
  cards: [],
})

const mutations = {
  setCards: (state, data) => (state.cards = data),
}

const actions = {
  createCard({ state, commit }) {
    const updatedCards = [...state.cards, new Card()]

    commit('setCards', updatedCards)
  },
  deleteCard({ state, commit }, card) {
    const updatedCards = state.cards.filter(c => c.id !== card.id)

    commit('setCards', updatedCards)
  },
  updateCard({ state, commit }, card) {
    const updatedCards = getUpdatedArr(state.cards, card)

    commit('setCards', updatedCards)
  },
  createTask({ dispatch }, card) {
    const newTask = new Task({ card_id: card.id })
    const updatedCard = { ...card, tasks: [...card.tasks, newTask] }

    dispatch('updateCard', updatedCard)
  },
  deleteTask({ getters, dispatch }, task) {
    const card = getters.getCardById(task.card_id)
    const updatedTasks = card.tasks.filter(t => t.id !== task.id)
    const updatedCard = { ...card, tasks: updatedTasks }

    dispatch('updateCard', updatedCard)
  },
  updateTask({ getters, dispatch }, task) {
    const card = getters.getCardById(task.card_id)
    const updatedTasks = getUpdatedArr(card.tasks, task)
    const updatedCard = { ...card, tasks: updatedTasks }

    dispatch('updateCard', updatedCard)
  },
}

const getters = {
  getCardById: state => id => state.cards.find(c => c.id === id),
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
