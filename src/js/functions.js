import { Budget } from './classes/Budget.js';
import { UI } from './classes/UI.js';

const ui = new UI();
let budget;

export function askBudget() {
  const userBudget = Number(prompt('¿Cuál es tu presupuesto?'));
  if (userBudget <= 0 || userBudget === null || isNaN(userBudget)) {
    alert('Debes ingresar un presupuesto válido');
    return askBudget();
  }

  budget = new Budget(userBudget);
  ui.addBudget(budget);

}