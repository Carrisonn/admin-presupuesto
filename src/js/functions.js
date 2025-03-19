import { Budget } from './classes/Budget.js';
import { UI } from './classes/UI.js';
import { userInfoObj, spanRemaining } from './constants.js';

const ui = new UI();
let budget;

export function askBudget() {
  const userBudget = prompt('¿Cuál es tu presupuesto?');
  if (userBudget === '' || userBudget === null || isNaN(userBudget)) {
    alert('Debes ingresar un presupuesto válido');
    return askBudget();
  }

  budget = new Budget(userBudget);
  ui.addBudgetToHTML(budget);
}

export function readUserValues(event) {
  userInfoObj[event.target.name] = event.target.value.trim().toLowerCase();
}

export function validateUserInfo(event) {
  event.preventDefault();

  const { amount } = userInfoObj;
  const obectValues = Object.values(userInfoObj);
  const remaining = spanRemaining.textContent;

  if (obectValues.includes('')) return ui.showNotification('Ambos campos son obligatorios', 'error');
  if (isNaN(amount)) return ui.showNotification('Debes ingresar una cantidad válida', 'error');
  if (Number(amount) > Number(remaining)) return ui.showNotification('No puedes gastar más que el presupuesto restante', 'error');
  budget.addExpense(userInfoObj);
}