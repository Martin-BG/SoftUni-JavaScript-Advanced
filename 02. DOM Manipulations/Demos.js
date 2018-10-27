let list = document.createElement('ul');
let liPeter = document.createElement('li');
liPeter.textContent = 'Peter';
list.appendChild(liPeter);
let liMaria = document.createElement('li');
liMaria.innerHTML = '<b>Maria</b>';
list.appendChild(liMaria);
document.body.appendChild(list);

/*
<ul id="items">
  <li class="red">Red</li>
  <li class="blue">Blue</li>
</ul>
*/
let redElements = document.querySelectorAll('#items li.red');
redElements.forEach(li => {
  li.parentNode.removeChild(li);
});
/*
<ul id="items">
  <li class="blue">Blue</li>
</ul>
*/

// Add / Remove Event Handler
let textbox = document.createElement('input');
textbox.type = 'text';
textbox.value = 'I am a text box';
document.body.appendChild(textbox);
textbox.addEventListener('focus', focusHandler);

function focusHandler(event) {
  textbox.value = 'Event handler removed';
  textbox.removeEventListener('focus', focusHandler);
}
