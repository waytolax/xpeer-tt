import { getUniqId } from '@/helpers'

export class Card {
  constructor({ title = '' } = {}) {
    this.id = getUniqId()
    this.title = title
    this.tasks = []
  }
}

export class Task {
  constructor({ title = '', card_id } = {}) {
    this.id = getUniqId()
    this.title = title
    this.card_id = card_id
    this.progress = 0
  }
}
