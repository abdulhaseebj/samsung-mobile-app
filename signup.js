const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const signUp = document.querySelector('.signUp')

const arr = []

signUp.addEventListener('click', () => {
    const userObj = {
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
       }
       
   arr.push(userObj)
   console.log(arr);

})

