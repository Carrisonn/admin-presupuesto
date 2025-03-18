import { spanBudget, spanRemaining } from '../constants.js';

export class UI {
  constructor() { }

  addBudget(budgetObj) {
    const { budget, remaining } = budgetObj;
    spanBudget.textContent = budget;
    spanRemaining.textContent = remaining;
  }
}