const btn = document.querySelector('.btn');
const ul = document.querySelector('.list');
const completed = document.querySelector('.completed');
const dataPicker = document.querySelector('.datepicker-here');
const removeBtn = document.querySelector('.list__icons--remove');

// initialization the app on load
const init = () => {
    $('#my-element').data('datepicker');
    particlesJS("particles-js", {"particles":{"number":{"value":95,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles;
};

// when click complete button, elem move to completed list
const addDoneItems = () => {
    const completedElement = event.target.parentElement.parentElement.parentElement;
        if (completedElement.parentElement.classList.value==='list') { 
            completedElement.classList.remove('added');
            completedElement.classList.add('completedItem');
            completedElement.children[1].children[2].classList.add('disabled');
            completedElement.children[1].children[2].classList.remove('list__icons--done');
            completed.appendChild(completedElement);
        }
        isEmpty();      
}

const createP = () => {
    const para = document.createElement('p');
    para.classList.add('list-init-text');
    para.innerText = 'List is empty';
    return para
}
const createP2 = () => {
    const para = document.createElement('p');
    para.classList.add('completed-init-text');
    para.innerText = 'Nothing complete yet';
    return para
}

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
}

// remove item
const removeItems = () => {
    const toRemove = event.target.parentElement.parentElement.parentElement;
        toRemove.classList.add('remove');
        setTimeout(() => {
            toRemove.parentElement.removeChild(toRemove);
            isEmpty();
        }, 500);
}

// when click ADD button elem goes to 'To Do list'
btn.addEventListener('click', (e) => {
    e.preventDefault();
    addItem();
},false);

// add item
const addItem = () => {
    const inputText = document.querySelector('.inputText').value;
    const inputDate = dataPicker.value;

    const li = document.createElement('li');
    li.classList.add('added');

    const text = document.createElement('div');
    text.classList.add('list__text');
    const textP = document.createElement('p');
    textP.innerText = inputText;
    text.appendChild(textP);

    const dateP = document.createElement('p');
    dateP.innerText = inputDate;
    text.appendChild(dateP);

    const icons = document.createElement('div');
    icons.classList.add('list__icons');

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

    isEmpty();
}

// date validation
dataPicker.addEventListener('keydown', (e)=>{
    e.preventDefault();
    event.target.value = 'nie ma pisania';
},false)

init();