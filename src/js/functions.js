import { Budget } from './classes/Budget.js';
import { UI } from './classes/UI.js';

const ui = new UI();
let budget;

export function askBudget() {
  const userBudget = prompt('¿Cuál es tu presupuesto?');
  if (Number(userBudget) <= 0 || userBudget === null || isNaN(userBudget)) {
    alert('Debes ingresar un presupuesto válido');
    return askBudget();
  }

  budget = new Budget(userBudget);
  ui.addBudgetToHTML(budget);
}

export function validateUserInfo(event) {
  event.preventDefault();

  const expenseName = document.querySelector('#expense').value.trim().toLowerCase();
  const expenseAmount = Number(document.querySelector('#amount').value.trim());

  if (expenseName === '' || expenseAmount === 0) return ui.showNotification('Ambos campos son obligatorios', 'error');
  if (expenseAmount < 0) return ui.showNotification('Cantidad no válida', 'error');
  const userInfoObj = { expenseName, expenseAmount, id: Date.now() };
  budget.addExpense(userInfoObj);
}

export function deleteExpense(id) {
  budget.deleteExpense(id);
  const { expenses } = budget;
  ui.showExpenses(expenses);
}