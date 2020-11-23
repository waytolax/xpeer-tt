export class Card {
  static id = 0

  constructor({ title = 'Card title' } = {}) {
    this.id = ++Card.id
    this.title = title
    this.tasks = []
  }
}

export class Task {
  static id = 0

  constructor({ title = 'Task title', card_id } = {}) {
    this.id = ++Task.id
    this.title = title
    this.card_id = card_id
    this.progress = 0
  }
}
