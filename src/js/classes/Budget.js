import { UI } from './UI.js';
import { spanRemaining, form } from '../constants.js';

const ui = new UI();

export class Budget {
  constructor(budget) {
    this.budget = budget;
    this.remaining = budget;
    this.expenses = [];
  }

  addExpense(userInfoObj) {
    const { amount } = userInfoObj;
    this.remaining -= amount;
    spanRemaining.textContent = this.remaining;
    this.expenses = [...this.expenses, userInfoObj];
    ui.showExpenses(this.expenses);

    ui.showNotification('Cantidad restante actualizada', 'success');
    form.reset();
  }
}