import { fizzBuzz } from './fizzBuzz.js';

try {
  const textarea = document.querySelector('textarea');
  textarea.textContent = fizzBuzz(50);
} catch (error) {
  alert(error.message);
}

try {
  const results = fizzBuzz();

  const ul = document.createElement('ul');

  results.forEach((result) => {
    const li = document.createElement('li');
    li.textContent = result;
    ul.append(li);

    if (!Number.isInteger(result)) {
      li.style.color = result.length > 4 ? 'green' : 'red';
      li.style.fontSize = 'larger';
    }
  });

  const contentBox = document.querySelector('div');
  contentBox.append(ul);
} catch (error) {
  alert(error.message);
}
