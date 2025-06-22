import { Budget } from './classes/Budget.js';
import { UI } from './classes/UI.js';

const ui = new UI();
export let budget;

export function askBudget() {
  const userBudget = Number(prompt('¿Cuál es tu presupuesto?'));
  const isInvalidBudget = userBudget <= 0 || userBudget === null || isNaN(userBudget);
  if (isInvalidBudget) {
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
  if (expenseAmount < 0 || isNaN(expenseAmount)) return ui.showNotification('Cantidad no válida', 'error');
  const userInfoObj = { expenseName, expenseAmount, id: Date.now() };
  budget.addExpense(userInfoObj);
}