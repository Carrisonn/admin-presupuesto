import { UI } from './UI.js';

const ui = new UI();

export class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.remaining = Number(budget);
    this.expenses = [];
  }

  addExpense(userInfoObj) {
    this.expenses = [...this.expenses, userInfoObj];
    this.calculateRemaining();
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
    this.calculateRemaining();
  }

  calculateRemaining() {
    if (this.expenses.length === 0) {
      this.remaining = this.budget;
    } else {
      const expensed = this.expenses.reduce((acc, curr) => acc + curr.expenseAmount, 0);
      this.remaining = this.budget - expensed;
    }

    ui.addBudgetToHTML(this);
    ui.showExpenses(this.expenses);
  }
}