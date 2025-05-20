import { Request } from './app.js';

let request = new Request();
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const boutton = document.querySelectorAll('#form input');
    request.getInputs(boutton);
    request.test1(boutton);  
    request.test2(boutton);  
});

