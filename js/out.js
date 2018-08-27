/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const btn = document.querySelector('.btn');\r\nconst ul = document.querySelector('.list');\r\nconst completed = document.querySelector('.completed');\r\nconst dataPicker = document.querySelector('.datepicker-here');\r\nconst removeBtn = document.querySelector('.list__icons--remove');\r\nconst inputText = $('#inputText');\r\nconst inputData = $('#inputData');\r\n\r\n//Getting ID\r\nconst getId = () => {\r\n    return document.querySelectorAll('li').length + 1;\r\n};\r\n\r\n//For load localstorage\r\nlet tasks;\r\nif (JSON.parse(localStorage.getItem('todo_list')) == null) {\r\n    tasks = [];\r\n} else {\r\n    tasks = JSON.parse(localStorage.getItem('todo_list'));\r\n}\r\n\r\n// initialization the app on load\r\nconst init = () => {\r\n    $('#my-element').data('datepicker');\r\n    particle();\r\n    var count_particles;\r\n};\r\n\r\n// when click complete button, elem move to completed list\r\nconst addDoneItems = ( ) => {\r\n    const completedElement = event.target.parentElement.parentElement.parentElement;\r\n    if (completedElement.parentElement.classList.value === 'list') {\r\n        completedElement.classList.remove('added');\r\n        completedElement.classList.add('completedItem');\r\n        completedElement.dataset.done = 'true';\r\n        completedElement.children[1].children[3].classList.add('disabled');\r\n        completedElement.children[1].children[3].classList.remove('list__icons--done');\r\n        console.log(completedElement);\r\n        completed.appendChild(completedElement);\r\n\r\n\r\n\r\n    }\r\n    isEmpty();\r\n};\r\n\r\nconst createP = () => {\r\n    const para = document.createElement('p');\r\n    para.classList.add('list-init-text');\r\n    para.innerText = 'List is empty';\r\n    return para\r\n};\r\nconst createP2 = () => {\r\n    const para = document.createElement('p');\r\n    para.classList.add('completed-init-text');\r\n    para.innerText = 'Nothing complete yet';\r\n    return para\r\n};\r\n\r\n// if list is empty\r\nconst isEmpty = () => {\r\n    const listPara = document.querySelector('.list-init-text');\r\n    const completePara = document.querySelector('.completed-init-text');\r\n\r\n    if (ul.children.length > 1 && ul.children[1].innerHTML === 'List is empty') {\r\n        listPara.parentElement.removeChild(listPara);\r\n    } else if (ul.children.length < 1) {\r\n        ul.appendChild(createP())\r\n    }\r\n\r\n    if (completed.children.length > 2 && completed.children[1].innerHTML === 'Nothing complete yet') {\r\n        completePara.parentElement.removeChild(completePara);\r\n    } else if (completed.children.length < 2) {\r\n        completed.appendChild(createP2())\r\n    }\r\n};\r\n\r\n// remove item\r\nconst removeItems = () => {\r\n    const toRemove = event.target.parentElement.parentElement.parentElement;\r\n    const itemId = toRemove.dataset.id;\r\n    toRemove.classList.add('remove');\r\n    setTimeout(() => {\r\n        toRemove.parentElement.removeChild(toRemove);\r\n        isEmpty();\r\n    }, 500);\r\n\r\n    //removing a elements from localStorage\r\n    var items = JSON.parse(localStorage[\"todo_list\"]);\r\n    for (var i = 0; i < items.length; i++) {\r\n        if(items[i].id == itemId){\r\n            items.splice(i, 1);\r\n            break;\r\n        }\r\n    }\r\n    items = JSON.stringify(items)\r\n    console.log(itemId)\r\n    localStorage.setItem(\"todo_list\", items);\r\n};\r\n\r\n//edit item\r\nconst editItems = () => {\r\n    const added = event.target.parentElement.parentElement.parentElement;\r\n    const icon = event.target;\r\n    const toEdit = added.querySelector('.list__text p');\r\n    icon.classList.toggle('edit');\r\n    toEdit.classList.toggle('editable');\r\n    toEdit.contentEditable === 'false' ? toEdit.contentEditable = true : toEdit.contentEditable = false;\r\n\r\n    const itemId = added.dataset.id;\r\n    console.log(itemId)\r\n    var items = JSON.parse(localStorage[\"todo_list\"]);\r\n    for (var i = 0; i < items.length; i++) {\r\n        if(items[i].id == itemId){\r\n            items[i].title = toEdit.innerText\r\n            break;\r\n        }\r\n    }\r\n    items = JSON.stringify(items)\r\n    localStorage.setItem(\"todo_list\", items);\r\n};\r\n\r\n//priority item\r\nconst priorityItems = () => {\r\n    const priority = event.target.parentElement.parentElement.parentElement;\r\n    const icon = event.target;\r\n    const toPriority = priority.querySelector('.list__text p');\r\n    icon.classList.toggle('priority');\r\n    toPriority.classList.toggle('priority');\r\n};\r\n\r\n//validation \r\nconst checkName = () => {\r\n    const box = $('.ok i');\r\n    if (inputText.val() === '' || inputData.val() === '') {\r\n        inputText.attr('required', 'true');\r\n        inputData.attr('required', 'true');\r\n        box.addClass('fas fa-times show');\r\n        inputText.attr('placeholder', 'Please fill in this place');\r\n        inputData.attr('placeholder', 'Select data');\r\n        inputText.addClass('val');\r\n        inputData.addClass('date2');\r\n    } else {\r\n        inputText.removeClass('val');\r\n        inputData.removeClass('date2');\r\n        box.removeClass('fas fa-times show');\r\n        addItem();\r\n        inputText.val('');\r\n        inputData.val('');\r\n        inputText.attr('placeholder', 'Something to do');\r\n    }\r\n};\r\n\r\n// date validation\r\ndataPicker.addEventListener('keydown', (e) => {\r\n    e.preventDefault();\r\n    event.target.value = '';\r\n}, false);\r\n\r\n// when click ADD button elem goes to 'To Do list'\r\nbtn.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    checkName();\r\n}, false);\r\n\r\n// add item\r\nconst addItem = () => {\r\n    const inputText = document.querySelector('.inputText').value;\r\n    const inputDate = dataPicker.value;\r\n    const id = getId();\r\n\r\n    addTaskNew(inputText, inputDate, false, id);\r\n\r\n    addTask(inputText, inputDate, false, id);\r\n    isEmpty();\r\n};\r\n\r\n\r\n\r\n\r\n//Function addTask - for adding task to DOM ELEMENTS and for LOCAL STORAGE\r\nconst addTaskNew = (getText, getDate, getDone, getId) => {\r\n    const inputText = getText;\r\n    const inputDate = getDate;\r\n\r\n    const li = document.createElement('li');\r\n    li.classList.add('added');\r\n    li.dataset.id = getId;\r\n\r\n    if (li.dataset.done !== true) {\r\n        li.dataset.done = getDone;\r\n    }\r\n\r\n    const text = document.createElement('div');\r\n    text.classList.add('list__text');\r\n    const textP = document.createElement('p');\r\n    textP.innerText = inputText;\r\n    textP.contentEditable=false;\r\n    text.appendChild(textP);\r\n\r\n    const dateP = document.createElement('p');\r\n    dateP.innerText = inputDate;\r\n    text.appendChild(dateP);\r\n\r\n    const icons = document.createElement('div');\r\n    icons.classList.add('list__icons');\r\n\r\n    const priority = $('<div class=\"list__icons--priority\"><i class=\"fas fa-exclamation\"></i></div>');\r\n    $(icons).append(priority);\r\n\r\n    const editIcon = $('<div class=\"list__icons--edit\"><i class=\"fas fa-pen\"></i></div>');\r\n    $(icons).append(editIcon);\r\n\r\n    const removeIcon = $('<div class=\"list__icons--remove\"><i class=\"fas fa-trash-alt\"></i></div>');\r\n    $(icons).append(removeIcon);\r\n\r\n    const doneIcon = $('<div class=\"list__icons--done\"><i class=\"fas fa-check\"></i></div>');\r\n    $(icons).append(doneIcon);\r\n\r\n\r\n    li.appendChild(text);\r\n    li.appendChild(icons);\r\n\r\n    ul.prepend(li);\r\n\r\n    //add complete listener to new elem\r\n    const complete = document.querySelector('.fa-check');\r\n    complete.addEventListener('click', addDoneItems);\r\n\r\n    //add remove listener to new elem\r\n    const remove = document.querySelector('.fa-trash-alt');\r\n    remove.addEventListener('click', removeItems);\r\n\r\n    //add edit listener to new elem\r\n    const edit = document.querySelector('.fa-pen');\r\n    edit.addEventListener('click', editItems);\r\n\r\n    //add priority\r\n    const priori = document.querySelector('.fa-exclamation');\r\n    priori.addEventListener('click', priorityItems);\r\n\r\n    isEmpty();\r\n};\r\n\r\n//adding task to local storage\r\nconst addTask = (text, date, done, id) => {\r\n    tasks.push(\r\n        {\r\n            id: id,\r\n            title: text,\r\n            date: date,\r\n            done: done\r\n        }\r\n    );\r\n    localStorage.setItem('todo_list', JSON.stringify(tasks));\r\n};\r\n\r\n// const items = {...localStorage}; do testow\r\n\r\n//writing task from local storage to HTML\r\nconst writeTask = () => {\r\n    const getItems = JSON.parse(localStorage.getItem('todo_list'));\r\n    if (getItems !== null) {\r\n        getItems.forEach((element, index) => {\r\n        addTaskNew(element.title, element.date, element.done, element.id);\r\n        });\r\n    }\r\n};\r\n\r\nconst particle = () => {\r\n    particlesJS(\"particles-js\", {\r\n        \"particles\": {\r\n            \"number\": {\"value\": 95, \"density\": {\"enable\": true, \"value_area\": 800}},\r\n            \"color\": {\"value\": \"#ffffff\"},\r\n            \"shape\": {\r\n                \"type\": \"circle\",\r\n                \"stroke\": {\"width\": 0, \"color\": \"#000000\"},\r\n                \"polygon\": {\"nb_sides\": 5},\r\n                \"image\": {\"src\": \"img/github.svg\", \"width\": 100, \"height\": 100}\r\n            },\r\n            \"opacity\": {\r\n                \"value\": 0.5,\r\n                \"random\": false,\r\n                \"anim\": {\"enable\": false, \"speed\": 1, \"opacity_min\": 0.1, \"sync\": false}\r\n            },\r\n            \"size\": {\r\n                \"value\": 3,\r\n                \"random\": true,\r\n                \"anim\": {\"enable\": false, \"speed\": 40, \"size_min\": 0.1, \"sync\": false}\r\n            },\r\n            \"line_linked\": {\"enable\": true, \"distance\": 150, \"color\": \"#ffffff\", \"opacity\": 0.4, \"width\": 1},\r\n            \"move\": {\r\n                \"enable\": true,\r\n                \"speed\": 6,\r\n                \"direction\": \"none\",\r\n                \"random\": false,\r\n                \"straight\": false,\r\n                \"out_mode\": \"out\",\r\n                \"bounce\": false,\r\n                \"attract\": {\"enable\": false, \"rotateX\": 600, \"rotateY\": 1200}\r\n            }\r\n        },\r\n        \"interactivity\": {\r\n            \"detect_on\": \"window\",\r\n            \"events\": {\r\n                \"onhover\": {\"enable\": true, \"mode\": \"repulse\"},\r\n                \"onclick\": {\"enable\": true, \"mode\": \"push\"},\r\n                \"resize\": true\r\n            },\r\n            \"modes\": {\r\n                \"grab\": {\"distance\": 400, \"line_linked\": {\"opacity\": 1}},\r\n                \"bubble\": {\"distance\": 400, \"size\": 40, \"duration\": 2, \"opacity\": 8, \"speed\": 3},\r\n                \"repulse\": {\"distance\": 200, \"duration\": 0.4},\r\n                \"push\": {\"particles_nb\": 4},\r\n                \"remove\": {\"particles_nb\": 2}\r\n            }\r\n        },\r\n        \"retina_detect\": true\r\n    });\r\n}\r\n\r\n// app initialization\r\ninit();\r\nwindow.addEventListener('load', writeTask, false)\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });