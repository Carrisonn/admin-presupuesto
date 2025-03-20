import { askBudget, validateUserInfo } from './functions.js';
import { form } from './constants.js';

window.addEventListener('load', () => form.reset());

document.addEventListener('DOMContentLoaded', () => {
  askBudget();
  form.addEventListener('submit', validateUserInfo);
});
