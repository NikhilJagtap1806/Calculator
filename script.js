let input = document.getElementById("InputField");
let buttons = document.querySelectorAll("button");

let result = "";
let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener(('click'), (e) => {


        if (e.target.innerHTML == "=") {
            checkInput(result);
            result = eval(result);
            input.value = result;

        }
        else if (e.target.innerHTML == "AC") {
            result = "";
            input.value = result;
        }
        else if (e.target.innerHTML == "DEL") {
            result = result.substring(0, result.length - 1);
            input.value = result;
        }
        else {
            result += e.target.innerHTML;
            input.value = result;
        }


    })
})

function checkInput(inputString) {
    // convert the input to a string



    for (let i = 0; i < inputString.length; i++) {

        if (inputString[i] === '+' || inputString[i] === '*' || inputString[i] === '/') {
            if (i === 0 || inputString[i - 1] === '+' || inputString[i - 1] === '-' || inputString[i - 1] === '*' || inputString[i - 1] === '/') {
                alert("Invalid input..!");
                return false;
            }
        }
    }
    return true;
}

