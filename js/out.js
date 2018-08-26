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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar btn = document.querySelector('.btn');\nvar ul = document.querySelector('.list');\nvar completed = document.querySelector('.completed');\nvar dataPicker = document.querySelector('.datepicker-here');\nvar removeBtn = document.querySelector('.list__icons--remove');\nvar inputText = $('#inputText');\nvar inputData = $('#inputData');\n\n//For load localstorage\nvar tasks = void 0;\nif (JSON.parse(localStorage.getItem('todo_list')) == null) {\n    tasks = [];\n} else {\n    tasks = JSON.parse(localStorage.getItem('todo_list'));\n}\n\n// initialization the app on load\nvar init = function init() {\n    $('#my-element').data('datepicker');\n    particle();\n    var count_particles;\n};\n\n// when click complete button, elem move to completed list\nvar addDoneItems = function addDoneItems() {\n    var completedElement = event.target.parentElement.parentElement.parentElement;\n    if (completedElement.parentElement.classList.value === 'list') {\n        completedElement.classList.remove('added');\n        completedElement.classList.add('completedItem');\n        completedElement.dataset.done = 'true';\n        completedElement.children[1].children[3].classList.add('disabled');\n        completedElement.children[1].children[3].classList.remove('list__icons--done');\n        completed.appendChild(completedElement);\n    }\n    isEmpty();\n};\n\nvar createP = function createP() {\n    var para = document.createElement('p');\n    para.classList.add('list-init-text');\n    para.innerText = 'List is empty';\n    return para;\n};\nvar createP2 = function createP2() {\n    var para = document.createElement('p');\n    para.classList.add('completed-init-text');\n    para.innerText = 'Nothing complete yet';\n    return para;\n};\n\n// if list is empty\nvar isEmpty = function isEmpty() {\n    var listPara = document.querySelector('.list-init-text');\n    var completePara = document.querySelector('.completed-init-text');\n\n    if (ul.children.length > 1 && ul.children[1].innerHTML === 'List is empty') {\n        listPara.parentElement.removeChild(listPara);\n    } else if (ul.children.length < 1) {\n        ul.appendChild(createP());\n    }\n\n    if (completed.children.length > 2 && completed.children[1].innerHTML === 'Nothing complete yet') {\n        completePara.parentElement.removeChild(completePara);\n    } else if (completed.children.length < 2) {\n        completed.appendChild(createP2());\n    }\n};\n\n// remove item\nvar removeItems = function removeItems() {\n    var toRemove = event.target.parentElement.parentElement.parentElement;\n    toRemove.classList.add('remove');\n    setTimeout(function () {\n        toRemove.parentElement.removeChild(toRemove);\n        isEmpty();\n    }, 500);\n    //removing a elements from localStorage\n    localStorage.removeItem('todo_list');\n};\n\n//edit item\nvar editItems = function editItems() {\n    var added = event.target.parentElement.parentElement.parentElement;\n    var icon = event.target;\n    var toEdit = added.querySelector('.list__text p');\n    icon.classList.toggle('edit');\n    toEdit.classList.toggle('editable');\n    toEdit.contentEditable === 'false' ? toEdit.contentEditable = true : toEdit.contentEditable = false;\n};\n\n//priority item\nvar priorityItems = function priorityItems() {\n    var priority = event.target.parentElement.parentElement.parentElement;\n    var icon = event.target;\n    var toPriority = priority.querySelector('.list__text p');\n    icon.classList.toggle('priority');\n    toPriority.classList.toggle('priority');\n};\n\n//validation \nvar checkName = function checkName() {\n    var box = $('.ok i');\n    if (inputText.val() === '' || inputData.val() === '') {\n        inputText.attr('required', 'true');\n        inputData.attr('required', 'true');\n        box.addClass('fas fa-times show');\n        inputText.attr('placeholder', 'Please fill in this place');\n        inputData.attr('placeholder', 'Select data');\n        inputText.addClass('val');\n        inputData.addClass('date2');\n    } else {\n        inputText.removeClass('val');\n        inputData.removeClass('date2');\n        box.removeClass('fas fa-times show');\n        addItem();\n        inputText.val('');\n        inputData.val('');\n        inputText.attr('placeholder', 'Something to do');\n    }\n};\n\n// date validation\ndataPicker.addEventListener('keydown', function (e) {\n    e.preventDefault();\n    event.target.value = '';\n}, false);\n\n// when click ADD button elem goes to 'To Do list'\nbtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    checkName();\n}, false);\n\n// add item\nvar addItem = function addItem() {\n    var inputText = document.querySelector('.inputText').value;\n    var inputDate = dataPicker.value;\n\n    addTaskNew(inputText, inputDate, false);\n\n    addTask(inputText, inputDate, false);\n    isEmpty();\n};\n\n//Function addTask - for adding task to DOM ELEMENTS and for LOCAL STORAGE\nvar addTaskNew = function addTaskNew(getText, getDate, getDone) {\n    var inputText = getText;\n    var inputDate = getDate;\n\n    var li = document.createElement('li');\n    li.classList.add('added');\n\n    if (li.dataset.done !== true) {\n        li.dataset.done = getDone;\n    }\n\n    var text = document.createElement('div');\n    text.classList.add('list__text');\n    var textP = document.createElement('p');\n    textP.innerText = inputText;\n    textP.contentEditable = false;\n    text.appendChild(textP);\n\n    var dateP = document.createElement('p');\n    dateP.innerText = inputDate;\n    text.appendChild(dateP);\n\n    var icons = document.createElement('div');\n    icons.classList.add('list__icons');\n\n    var priority = $('<div class=\"list__icons--priority\"><i class=\"fas fa-exclamation\"></i></div>');\n    $(icons).append(priority);\n\n    var editIcon = $('<div class=\"list__icons--edit\"><i class=\"fas fa-pen\"></i></div>');\n    $(icons).append(editIcon);\n\n    var removeIcon = $('<div class=\"list__icons--remove\"><i class=\"fas fa-trash-alt\"></i></div>');\n    $(icons).append(removeIcon);\n\n    var doneIcon = $('<div class=\"list__icons--done\"><i class=\"fas fa-check\"></i></div>');\n    $(icons).append(doneIcon);\n\n    li.appendChild(text);\n    li.appendChild(icons);\n\n    ul.prepend(li);\n\n    //add complete listener to new elem\n    var complete = document.querySelector('.fa-check');\n    complete.addEventListener('click', addDoneItems);\n\n    //add remove listener to new elem\n    var remove = document.querySelector('.fa-trash-alt');\n    remove.addEventListener('click', removeItems);\n\n    //add edit listener to new elem\n    var edit = document.querySelector('.fa-pen');\n    edit.addEventListener('click', editItems);\n\n    //add priority\n    var priori = document.querySelector('.fa-exclamation');\n    priori.addEventListener('click', priorityItems);\n\n    isEmpty();\n};\n\n//adding task to local storage\nvar addTask = function addTask(text, date, done) {\n    tasks.push({\n        title: text,\n        date: date,\n        done: done\n    });\n    localStorage.setItem('todo_list', JSON.stringify(tasks));\n};\n\n// const items = {...localStorage}; do testow\n\n//writing task from local storage to HTML\nvar writeTask = function writeTask() {\n    var getItems = JSON.parse(localStorage.getItem('todo_list'));\n    if (getItems !== null) {\n        getItems.forEach(function (element, index) {\n            addTaskNew(element.title, element.date);\n        });\n    }\n};\n\nvar particle = function particle() {\n    particlesJS(\"particles-js\", {\n        \"particles\": {\n            \"number\": { \"value\": 95, \"density\": { \"enable\": true, \"value_area\": 800 } },\n            \"color\": { \"value\": \"#ffffff\" },\n            \"shape\": {\n                \"type\": \"circle\",\n                \"stroke\": { \"width\": 0, \"color\": \"#000000\" },\n                \"polygon\": { \"nb_sides\": 5 },\n                \"image\": { \"src\": \"img/github.svg\", \"width\": 100, \"height\": 100 }\n            },\n            \"opacity\": {\n                \"value\": 0.5,\n                \"random\": false,\n                \"anim\": { \"enable\": false, \"speed\": 1, \"opacity_min\": 0.1, \"sync\": false }\n            },\n            \"size\": {\n                \"value\": 3,\n                \"random\": true,\n                \"anim\": { \"enable\": false, \"speed\": 40, \"size_min\": 0.1, \"sync\": false }\n            },\n            \"line_linked\": { \"enable\": true, \"distance\": 150, \"color\": \"#ffffff\", \"opacity\": 0.4, \"width\": 1 },\n            \"move\": {\n                \"enable\": true,\n                \"speed\": 6,\n                \"direction\": \"none\",\n                \"random\": false,\n                \"straight\": false,\n                \"out_mode\": \"out\",\n                \"bounce\": false,\n                \"attract\": { \"enable\": false, \"rotateX\": 600, \"rotateY\": 1200 }\n            }\n        },\n        \"interactivity\": {\n            \"detect_on\": \"window\",\n            \"events\": {\n                \"onhover\": { \"enable\": true, \"mode\": \"repulse\" },\n                \"onclick\": { \"enable\": true, \"mode\": \"push\" },\n                \"resize\": true\n            },\n            \"modes\": {\n                \"grab\": { \"distance\": 400, \"line_linked\": { \"opacity\": 1 } },\n                \"bubble\": { \"distance\": 400, \"size\": 40, \"duration\": 2, \"opacity\": 8, \"speed\": 3 },\n                \"repulse\": { \"distance\": 200, \"duration\": 0.4 },\n                \"push\": { \"particles_nb\": 4 },\n                \"remove\": { \"particles_nb\": 2 }\n            }\n        },\n        \"retina_detect\": true\n    });\n};\n\n// app initialization\ninit();\nwindow.addEventListener('load', writeTask, false);\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });