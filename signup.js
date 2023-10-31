// const form = document.querySelector(".form")
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const signUp = document.querySelector('.signUpForm')

const arr = []


signUp.addEventListener('submit', (e) => {
    e.preventDefault()
    if (password.value === confirmPassword.value) {
        // console.log('if');
        if (email.value, password.value, confirmPassword.value == '') {
       
            alert('please fill the form!')
        } else {
             userObj = {
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value,
            }
    
        }
        
    } else {
        // console.log('else');
        alert("Password are not same.")
        
        
    }

    arr.push(userObj)
    window.location = "./index.html "

})

