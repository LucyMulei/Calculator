const numbers= document.querySelectorAll('.number')
const input = document.querySelector('input')
const operators = document.querySelectorAll('.operator')
currentInput=''
firstNumber=''
numbers.forEach(function (button) {
  button.addEventListener("click", function () {
    const buttonText = button.textContent;
    currentInput += buttonText;
    input.value = currentInput;
    
});
});

operators.forEach(operatorButton => {
  operatorButton.addEventListener("click", () => {
    if (currentInput !== "") {
      firstNumber = currentInput;
      operator = operatorButton.textContent
      currentInput = "";
      input.value = "";
    }
  });
})
const clear = document.querySelector("#clear");
clear.addEventListener('click',function(){
    input.value = "0"
    currentInput=''
    operator=''
    firstNumber=''

})
 
 const equals = document.querySelector("#equals");
 equals.addEventListener("click", function () {
   if (operator !== "" && currentInput !== "") {
     const secondNumber = currentInput;
     let result;
     switch (operator) {
       case "+":
         result = parseFloat(firstNumber) + parseFloat(secondNumber);
         break;
       case "-":
         result = parseFloat(firstNumber) - parseFloat(secondNumber);
         break;
       case "*":
         result = parseFloat(firstNumber) * parseFloat(secondNumber);
         break;
       case "/":
         result = parseFloat(firstNumber) / parseFloat(secondNumber);
         break;
     }
     input.value = result;
     currentInput = result.toString();
     firstNumber = "";
     operator = "";
   }
 });

