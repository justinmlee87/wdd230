
const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const deleteBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(deleteBtn);
  deleteBtn.textContent = '❌';
  list.appendChild(listItem);

  deleteBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});




