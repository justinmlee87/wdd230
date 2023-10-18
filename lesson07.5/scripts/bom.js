
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
var listCount = 0;

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

  button.addEventListener('click', () => {
    if (input.value != '') {  
      displayList(input.value); 
      chaptersArray.push(input.value);  
      setChapterList(); 
      input.value = ''; 
      input.focus(); 
    }
  });

  function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; 
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); 
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); 
      input.focus(); 
    });
    console.log('Ready');
  }

  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }
 
button.addEventListener('click', () => {
 
 
    if (input.value != '') {
        input.focus();
        if (listCount < 10) {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
 
            li.textContent = input.value;
            deleteButton.textContent = '✖️';
 
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
            window.alert("The maximum number of elements is 10, Please remove one from the list, to add a new one");
        }
    }
 
});