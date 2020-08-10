// signup

const signUpForm = document.querySelector('.formContainer');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

const email = signUpForm['signUpEmail'].value;
const password =  signUpForm['signUpPassword'].value;

console.log(email,password);