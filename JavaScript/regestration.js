
const inputs = document.querySelectorAll("input");
const btnRegister = document.getElementById("btnRegister");
const formData = document.querySelector("form");

let userData = [];

if (JSON.parse(localStorage.getItem('userInfo')) != null) {
    userData = JSON.parse(localStorage.getItem('userInfo'))
}

// EVENT
document.forms[0].addEventListener('submit', (event) => {
    event.preventDefault();

    if (isValid) {
        if (emailExists(inputs[0].value)) {
            alert("The Email already exists")
        } else {
            getUserInfo();
            location.href = './index.html'
        }
    }
});

//sign UP
formData.addEventListener("input", function () {
    if (validationEmail() && validationPassword()) {

        isValid = true;

    } else {
        isValid = false;
    }
});

function getUserInfo() {
    let userInformation = {
        
        
        email: inputs[0].value,
        password: inputs[1].value,
        
    }
    userData.push(userInformation);
    localStorage.setItem('userInfo', JSON.stringify(userData));
    // console.log(userData);
}

function emailExists(email) {
    return userData.some(user => user.email === email);
}

//-----------------------------------> Validation <------------------------------------

// function validationName(input) {
//     let regName = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/;
//     if (regName.test(input.value)) {
//         // el tmam
//         input.classList.add("is-valid");
//         input.classList.remove("is-invalid");

//         return true;
//     } else {
//         //el mesh tmam
//         input.classList.add("is-invalid");
//         input.classList.remove("is-valid");

//         return false;
//     }
// }

function validationEmail() {
    let regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (regEmail.test(inputs[0].value)) {
        // el tmam
        inputs[0].classList.add("is-valid");
        inputs[0].classList.remove("is-invalid");

        return true;
    } else {
        //el mesh tmam
        inputs[0].classList.add("is-invalid");
        inputs[0].classList.remove("is-valid");

        return false;
    }
}

function validationPassword() {
    let regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regPassword.test(inputs[1].value)) {
        // el tmam
        inputs[1].classList.add("is-valid");
        inputs[1].classList.remove("is-invalid");

        return true;
    } else {
        //el mesh tmam
        inputs[1].classList.add("is-invalid");
        inputs[1].classList.remove("is-valid");

        return false;
    }
}

// function validationAge() {
//     let regAge = /^([1-7][0-9]|80)$/;
//     if (regAge.test(inputs[4].value)) {
//         // el tmam
//         inputs[4].classList.add("is-valid");
//         inputs[4].classList.remove("is-invalid");

//         return true;
//     } else {
//         //el mesh tmam
//         inputs[4].classList.add("is-invalid");
//         inputs[4].classList.remove("is-valid");

//         return false;
//     }
// }
