const favchap = document.getElementById("favchap");
const submit = document.querySelector('button');
const list = document.getElementById('list');

// const li = document.createElement('li');
// const deleteButton = document.createElement('button');

// li.textContent =  favchap.value;
// deleteButton.textContent = '❌';
// li.append(deleteButton);
// list.append(li)

submit.addEventListener('click', function() {
    if (favchap.value.trim() !== '' ) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent =  favchap.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

		deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    }
    favchap.value = '';
    favchap.focus();
})