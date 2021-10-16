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
  e.preventDefault();

  engine(username, 0, 'Username cannot be blank');
  engine(email, 1, 'Email cannot be blank');
  engine(password, 2, 'Password cannot be blank');
});

// this funciton will handle the form validation for us
let engine = (id, serial, message) => {
  if (id.value.trim() === '') {
    //trim is used to remove the extra white space
    errorMsg[serial].innerHTML = message;
    id.style.border = '2px solid red';

    // icons
    failureIcon[serial].style.opacity = '1';
    successIcon[serial].style.opacity = '0';
  } else {
    errorMsg[serial].innerHTML = '';
    id.style.border = '2px solid green';

    // icons
    failureIcon[serial].style.opacity = '0';
    successIcon[serial].style.opacity = '1';
  }
};
