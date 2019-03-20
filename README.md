# Jump field

Function in JavaScript to jump from one field to other after the max size of digits has been reached.

## Technologies used
- HTML
- CSS
- JavaScript

## HTML code

First Field:

`<input id="first-field" type="text" onkeyup="jumpField(document.getElementById('second-field'), 5, this)">`

Second field

`<input id="second-field" type="text" onkeyup="jumpField(document.getElementById('first-field'), 5, this)">`

## JavaScript code

- The first parameter in the function is the next element that you want to be focused.
- The second parameter is the max size of characters that you want to write until the function move to the next field.
- And the third parameter is the element itself that where you are writing.

`jumpField(next, maxSize, event);`