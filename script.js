const button = document.querySelector('#addButton');
const list = document.querySelector('#shoppingList');
const input = document.querySelector('#item');

function addItem() {
    const itemText = input.value;
        if (itemText === '') {
            alert('Digite um item');
            return;
        }

    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    span.textContent = itemText;
    deleteButton.textContent = 'Apagar';

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    input.value = '';
    input.focus();

    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });
}

button.addEventListener('click', addItem);