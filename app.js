particlesJS("particles-js", {"particles":{"number":{"value":95,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;



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
            completedElement.children[1].children[2].classList.add('disabled');
            completedElement.children[1].children[2].classList.remove('list__icons--done');
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

    const editIcon = $('<div class="list__icons--edit"><i class="fas fa-pen"></i></div>');
    $(icons).append(editIcon);

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