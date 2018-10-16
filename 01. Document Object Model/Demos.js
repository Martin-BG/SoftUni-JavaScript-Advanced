let menu = document.getElementById('menu');
menu.style.display = 'none';
menu.appendChild(document.createElement('hr'));

// Select a single element  returns HTMLElement
let header = document.getElementById('header');
let nav = document.querySelector('#id');
let navA = document.querySelector('.className');
let navB = document.querySelector('div'); // by tag
let root = document.documentElement;

// Select a collection of elements  returns a collection
let inputs = document.getElementsByTagName('li');
let towns = document.getElementsByName('towns[]');
let headerT = document.querySelectorAll('#nav li');
let allLinks = document.links;

// Element contents
let element = document.getElementById('main');
let text = element.textContent; // To access the contents of an element
element.textContent = 'Welcome to the DOM'; // To replace the contents of an element

// To access raw HTML
element.innerHTML = '<p>Welcome to the DOM</p>';

// The values of input elements are string properties on them:
element = document.getElementById('num1');
let num = +element.value;
element.value = 56;

//DOM API: Element Properties
// <div id="first" class="big">First <b>DIV</b></div>
let div = document.getElementById('first');
console.log(div.id); // first
console.log(div.tagName); // DIV
console.log(div.className); // big
console.log(div.textContent); // First DIV
console.log(div.innerHTML); // First <b>DIV</b>
console.log(div.outerHTML); // <div id="first" class="big">First <b>DIV</b></div>

/*
CSS selectors are strings that follow CSS syntax for matching
 Works with querySelector and querySelectorAll
 Base for jQuery operations (helper library)
 They allow very fast and powerful element matching, e.g.:
 "#main"  returns the element with ID "main"
 "#content div"  selects all <div>s inside #content
 ".nn, .alert"  all elements with class "nn" or "alert"
 "input[name='login']"  <input> with name "login"
 */

/*
Browser Object Model (BOM)
console.dir(window);
console.dir(navigator);
console.dir(screen);
console.dir(location);
console.dir(history);
console.dir(document);
 */
alert(window.navigator.userAgent);
console.log(navigator.language); // en-US
console.log(screen.width + ' x ' + screen.height); // 1920 x 1080
document.location = 'https://softuni.bg';
history.back();

let intervalID = setInterval(
  function () {
    console.log('1 sec. passed');
  },
  1000
); // Delay = 1000 ms = 1 second

clearInterval(intervalID); // Stop the timer
