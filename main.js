// will target all the id and classes from the html
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id('username');
let email = id('email');
let password = id('password');
let form = id('form');
let errorMsg = classes('error');
let successIcon = classes('success-icon');
let failureIcon = classes('failure-icon');

form.addEventListener('submit', (e) => {
  e.preventDefault;
  alert('hi');
});
