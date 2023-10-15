const result = document.getElementById('result');
const buttons = document.getElementById('buttons');
let expression = '';

buttons.addEventListener('click', (e) => {
  const buttonValue = e.target.textContent;

  if (buttonValue === '=') {
    try {
      expression = eval(expression);
      result.textContent = expression;
    } catch (error) {
      result.textContent = 'Error';
    }
  } else if (buttonValue === 'C') {
    expression = '';
    result.textContent = '0';
  } else if (buttonValue === '←') {
    expression = expression.slice(0, -1);
    result.textContent = expression;
  } else {
    expression += buttonValue;
    result.textContent = expression;
  }
});

document.addEventListener('keydown', (e) => {
  if (/^[0-9*+\-\/()\s.]$/.test(e.key)) {
    expression += e.key;
    result.textContent = expression;
  } else {
    alert('Only numbers and basic operators are allowed.');
  }
});