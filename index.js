let input = document.querySelector('.input');
let button = document.querySelector('.myButton');

let username;

button.onclick = function(e) {
    username = input.value
    console.log(`name: ${username}`);
    e.preventDefault()
}
