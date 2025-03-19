import { askBudget, readUserValues, validateUserInfo } from './functions.js';
import { inputExpense, inputAmount, form } from './constants.js';

window.addEventListener('load', () => form.reset());

document.addEventListener('DOMContentLoaded', () => {
  askBudget();
  inputExpense.addEventListener('input', readUserValues);
  inputAmount.addEventListener('input', readUserValues);
  form.addEventListener('submit', validateUserInfo);
});
