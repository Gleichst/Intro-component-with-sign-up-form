const inputEmail = document.getElementById("email-address")
const submitButton = document.getElementById("submit-btn")
let input = document.getElementsByTagName("input")

let listInput = [...input]

const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

submitButton.addEventListener("click", function () {
    //Reset the Error display
    listInput.forEach(item => {

        item.nextElementSibling.style.display = "none"
        item.nextElementSibling.nextElementSibling.style.display = "none"
        item.style.border = "1px solid var(--clr-neutral-grayish-blue)"

    })



    //Checking Emailaddress for the right format
    if (!inputEmail.value.match(reg)) {
        inputEmail.nextElementSibling.style.display = "block"
        inputEmail.nextElementSibling.nextElementSibling.style.display = "block"
        inputEmail.style.border = "1px solid var(--clr-primary-red)"
    }

    //Checking Inputs for empty strings
    listInput.forEach(item => {
        if (item.value.length === 0) {
            item.nextElementSibling.style.display = "block"
            item.nextElementSibling.nextElementSibling.style.display = "block"
            item.style.border = "1px solid var(--clr-primary-red)"
        }
    })


})
