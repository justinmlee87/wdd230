
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
var listCount = 0;
 
button.addEventListener('click', () => {
 
 
    if (input.value != '') {
        input.focus();
        if (listCount < 10) {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
 
            li.textContent = input.value;
            deleteButton.textContent = '❌';
 
            li.append(deleteButton);
 
            list.append(li);
 
            listCount += 1;
 
            deleteButton.addEventListener('click', () => {
                list.removeChild(li);
                input.focus();
                listCount -= 1;
            })
 
            input.focus()
 
            input.value = '';
        }
        else {
            window.alert("You have reached the maximum number of Favorite Chapters. Please delete one to continue adding.");
        }
    }
 
});



