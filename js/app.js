const btn = document.querySelector('.btn');
const ul = document.querySelector('.list');
const completed = document.querySelector('.completed');
const dataPicker = document.querySelector('.datepicker-here');
const removeBtn = document.querySelector('.list__icons--remove');
const inputText = $('#inputText');
const inputData = $('#inputData');

//Getting ID
const getId = () => {
    return document.querySelectorAll('li').length + 1;
};

//For load localstorage
let tasks;
if (JSON.parse(localStorage.getItem('todo_list')) == null) {
    tasks = [];
} else {
    tasks = JSON.parse(localStorage.getItem('todo_list'));
}

// initialization the app on load
const init = () => {
    $('#my-element').data('datepicker');
    particle();
    var count_particles;
};

// when click complete button, elem move to completed list
const addDoneItems = ( ) => {
    const completedElement = event.target.parentElement.parentElement.parentElement;
    if (completedElement.parentElement.classList.value === 'list') {
        completedElement.classList.remove('added');
        completedElement.classList.add('completedItem');
        completedElement.dataset.done = 'true';
        completedElement.children[1].children[3].classList.add('disabled');
        completedElement.children[1].children[3].classList.remove('list__icons--done');
        console.log(completedElement);
        completed.appendChild(completedElement);


        const itemId = completedElement.dataset.id;
        console.log(itemId)
        var items = JSON.parse(localStorage["todo_list"]);
        for (var i = 0; i < items.length; i++) {
            if(items[i].id == itemId){
                items[i].done = true;
               // items[i].dataset.done = true;
                break;
            }
        }
        items = JSON.stringify(items)
        localStorage.setItem("todo_list", items);
    }
    isEmpty();
};

const createP = () => {
    const para = document.createElement('p');
    para.classList.add('list-init-text');
    para.innerText = 'List is empty';
    return para
};
const createP2 = () => {
    const para = document.createElement('p');
    para.classList.add('completed-init-text');
    para.innerText = 'Nothing complete yet';
    return para
};

// if list is empty
const isEmpty = () => {
    const listPara = document.querySelector('.list-init-text');
    const completePara = document.querySelector('.completed-init-text');

    if (ul.children.length > 1 && ul.children[1].innerHTML === 'List is empty') {
        listPara.parentElement.removeChild(listPara);
    } else if (ul.children.length < 1) {
        ul.appendChild(createP())
    }

    if (completed.children.length > 2 && completed.children[1].innerHTML === 'Nothing complete yet') {
        completePara.parentElement.removeChild(completePara);
    } else if (completed.children.length < 2) {
        completed.appendChild(createP2())
    }
};

// remove item
const removeItems = () => {
    const toRemove = event.target.parentElement.parentElement.parentElement;
    const itemId = toRemove.dataset.id;
    toRemove.classList.add('remove');
    setTimeout(() => {
        toRemove.parentElement.removeChild(toRemove);
        isEmpty();
    }, 500);

    //removing a elements from localStorage
    var items = JSON.parse(localStorage["todo_list"]);
    for (var i = 0; i < items.length; i++) {
        if(items[i].id == itemId){
            items.splice(i, 1);
            break;
        }
    }
    items = JSON.stringify(items)
    console.log(itemId)
    localStorage.setItem("todo_list", items);
};

//edit item
const editItems = () => {
    const added = event.target.parentElement.parentElement.parentElement;
    const icon = event.target;
    const toEdit = added.querySelector('.list__text p');
    icon.classList.toggle('edit');
    toEdit.classList.toggle('editable');
    toEdit.contentEditable === 'false' ? toEdit.contentEditable = true : toEdit.contentEditable = false;


    //Adding edited content to localstorage
    const itemId = added.dataset.id;
    //console.log(itemId)
    var items = JSON.parse(localStorage["todo_list"]);
    for (var i = 0; i < items.length; i++) {
        if(items[i].id == itemId){
            items[i].title = toEdit.innerText
            break;
        }
    }
    items = JSON.stringify(items)
    localStorage.setItem("todo_list", items);
};

//priority item
const priorityItems = () => {
    const priority = event.target.parentElement.parentElement.parentElement;
    const icon = event.target;
    const toPriority = priority.querySelector('.list__text p');
    icon.classList.toggle('priority');
    toPriority.classList.toggle('priority');
};

//validation 
const checkName = () => {
    const box = $('.ok i');
    if (inputText.val() === '' || inputData.val() === '') {
        inputText.attr('required', 'true');
        inputData.attr('required', 'true');
        box.addClass('fas fa-times show');
        inputText.attr('placeholder', 'Please fill in this place');
        inputData.attr('placeholder', 'Select data');
        inputText.addClass('val');
        inputData.addClass('date2');
    } else {
        inputText.removeClass('val');
        inputData.removeClass('date2');
        box.removeClass('fas fa-times show');
        addItem();
        inputText.val('');
        inputData.val('');
        inputText.attr('placeholder', 'Something to do');
    }
};

// date validation
dataPicker.addEventListener('keydown', (e) => {
    e.preventDefault();
    event.target.value = '';
}, false);

// when click ADD button elem goes to 'To Do list'
btn.addEventListener('click', (e) => {
    e.preventDefault();
    checkName();
}, false);

// add item
const addItem = () => {
    const inputText = document.querySelector('.inputText').value;
    const inputDate = dataPicker.value;
    const id = getId();

    addTaskNew(inputText, inputDate, false, id);

    addTask(inputText, inputDate, false, id);
    isEmpty();
};




//Function addTask - for adding task to DOM ELEMENTS and for LOCAL STORAGE
const addTaskNew = (getText, getDate, getDone, getId) => {
    const inputText = getText;
    const inputDate = getDate;

    const li = document.createElement('li');
    if (getDone === true) {
        li.classList.add('completedItem');
    } else {
        li.classList.add('added');
    }

    li.dataset.id = getId;

    if (li.dataset.done !== true) {
        li.dataset.done = getDone;
    }

    const text = document.createElement('div');
    text.classList.add('list__text');
    const textP = document.createElement('p');
    textP.innerText = inputText;
    textP.contentEditable=false;
    text.appendChild(textP);

    const dateP = document.createElement('p');
    dateP.innerText = inputDate;
    text.appendChild(dateP);

    const icons = document.createElement('div');
    icons.classList.add('list__icons');

    const priority = $('<div class="list__icons--priority"><i class="fas fa-exclamation"></i></div>');
    $(icons).append(priority);

    const editIcon = $('<div class="list__icons--edit"><i class="fas fa-pen"></i></div>');
    $(icons).append(editIcon);

    const removeIcon = $('<div class="list__icons--remove"><i class="fas fa-trash-alt"></i></div>');
    $(icons).append(removeIcon);

    const doneIcon = $('<div class="list__icons--done"><i class="fas fa-check"></i></div>');
    $(icons).append(doneIcon);


    li.appendChild(text);
    li.appendChild(icons);

    ul.prepend(li);

    //add complete listener to new elem
    const complete = document.querySelector('.fa-check');
    complete.addEventListener('click', addDoneItems);

    //add remove listener to new elem
    const remove = document.querySelector('.fa-trash-alt');
    remove.addEventListener('click', removeItems);

    //add edit listener to new elem
    const edit = document.querySelector('.fa-pen');
    edit.addEventListener('click', editItems);

    //add priority
    const priori = document.querySelector('.fa-exclamation');
    priori.addEventListener('click', priorityItems);

    isEmpty();
};

//adding task to local storage
const addTask = (text, date, done, id) => {
    tasks.push(
        {
            id: id,
            title: text,
            date: date,
            done: done
        }
    );
    localStorage.setItem('todo_list', JSON.stringify(tasks));
};

// const items = {...localStorage}; do testow

//writing task from local storage to HTML
const writeTask = () => {
    const getItems = JSON.parse(localStorage.getItem('todo_list'));
    if (getItems !== null) {
        getItems.forEach((element, index) => {
        addTaskNew(element.title, element.date, element.done, element.id);
        });
    }
};

const particle = () => {
    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 95, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {"enable": true, "mode": "repulse"},
                "onclick": {"enable": true, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                "repulse": {"distance": 200, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
}

// app initialization
init();
window.addEventListener('load', writeTask, false)