import { spanBudget, spanRemaining, form } from '../constants.js';

export class UI {
  constructor() { }

  addBudgetToHTML(budgetObj) {
    const { budget, remaining } = budgetObj;
    spanBudget.textContent = budget;
    spanRemaining.textContent = remaining;
  }

  showNotification(message, type) {
    const notification = document.createElement('p');
    notification.classList.add('notification');

    const existNotification = form.querySelector('.notification');
    existNotification?.remove();

    notification.textContent = message;
    type === 'error' ? notification.classList.add('error') : notification.classList.add('success');
    form.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
  }

  //showExpenses(expenses) {
  //  expenses.forEach(expenseObj => {
  //    const { expense, amount } = expenseObj;
  //    console.log(expense, amount);
  //  });
  //
  //
  //  Object.assign(userInfoObj, { expense: '', amount: '' });
  //}
}