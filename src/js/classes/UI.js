import { spanBudget, spanRemaining, form, divExpenseContainer, divUserExpenseContainer, divExpenseRemaining } from '../constants.js';
import { deleteExpense } from '../functions.js';

export class UI {
  constructor() { }

  addBudgetToHTML(budgetObj) {
    const { budget, remaining } = budgetObj;
    spanBudget.textContent = budget;
    spanRemaining.textContent = remaining;
    this.checkRemaining(budgetObj);
  }

  checkRemaining(budgetObj) {
    const { budget, remaining } = budgetObj;

    switch (true) {
      case (budget / 4) > remaining:
        divExpenseRemaining.classList.remove('default-color-remaining', 'mid-color-remaining');
        divExpenseRemaining.classList.add('low-color-remaining');
        break;
      case (budget / 2) > remaining:
        divExpenseRemaining.classList.remove('default-color-remaining', 'low-color-remaining');
        divExpenseRemaining.classList.add('mid-color-remaining');
        break;
      default:
        divExpenseRemaining.classList.remove('default-color-remaining', 'low-color-remaining', 'mid-color-remaining');
        divExpenseRemaining.classList.add('default-color-remaining');
        break;
    }
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

  showExpenses(expenses) {
    while (divUserExpenseContainer.firstChild) {
      divUserExpenseContainer.removeChild(divUserExpenseContainer.firstChild);
    }

    if (expenses.length !== 0) divUserExpenseContainer.innerHTML = '<h2 class="subtitle">Tus gastos</h2>';

    expenses.forEach(expense => {
      const { expenseName, expenseAmount, id } = expense;

      const expenseNameFormatted = expenseName.replace(/^(.)/, char => char.toUpperCase());

      const divUserExpense = document.createElement('div');
      divUserExpense.classList.add('div-user-expense');

      const userExpense = document.createElement('p');
      userExpense.classList.add('user-expense');
      userExpense.textContent = `${expenseNameFormatted}: $${expenseAmount}`;

      const btnDelete = document.createElement('button');
      btnDelete.classList.add('btn-delete');
      btnDelete.textContent = 'Eliminar';
      btnDelete.addEventListener('click', () => deleteExpense(id));

      divUserExpense.appendChild(userExpense);
      divUserExpense.appendChild(btnDelete);
      divUserExpenseContainer.appendChild(divUserExpense);
      divExpenseContainer.appendChild(divUserExpenseContainer);
    });
    form.reset();
  }
}