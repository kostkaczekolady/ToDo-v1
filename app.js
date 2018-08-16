const btn = document.querySelector('.btn');
const ul = document.querySelector('.list');
const completed = document.querySelector('.completed');

const init = () => {
    addDoneEvents();
}

// when click complete button, elem move to completed list
const addDoneEvents = () => {
    const done = document.querySelectorAll('.fa-check');
    for (let i = 0; i < done.length; i++) {
        done[i].addEventListener('click', () => {
            const completedElement = event.target.parentElement.parentElement.parentElement;
            if (completedElement.parentElement.classList.value==='list') {  
            completedElement.classList.remove('added');
            completedElement.classList.add('completedItem');
            completedElement.children[1].children[1].classList.add('disabled');
            completedElement.children[1].children[1].classList.remove('list__icons--done');
            completed.appendChild(completedElement);
            }      
        }, false)
    }
}

// when click ADD button elem goes to 'To Do list'
btn.addEventListener('click', (e) => {
    e.preventDefault();
    addItem();
},false);

const addItem = () => {
    const inputText = document.querySelector('.inputText').value;

    const li = document.createElement('li');
    li.classList.add('added');

    const text = document.createElement('div');
    text.classList.add('list__text');
    text.innerText = inputText;

    const icons = document.createElement('div');
    icons.classList.add('list__icons');

    const removeIcon = $('<div class="list__icons--remove"><i class="fas fa-trash-alt"></i></div>');
    $(icons).append(removeIcon);
    
    const doneIcon = $('<div class="list__icons--done"><i class="fas fa-check"></i></div>');
    $(icons).append(doneIcon);

    li.appendChild(text);
    li.appendChild(icons);
    
    ul.prepend(li);

    addDoneEvents();
}

init();