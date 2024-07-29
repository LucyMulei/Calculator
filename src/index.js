const buttons= document.querySelectorAll('button')
const input = document.querySelector('input')
currentInput=''
firstNumber=''
arithmetic=''
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const buttonText = button.textContent;
      currentInput += buttonText;
      input.value = currentInput;
    }
  );
});

const clear =document.querySelector('#clear')
clear.addEventListener('click',function(){
    input.value = "0"
    currentInput=''
    operator=''
    firstNumber=''

})
 const addition = document.querySelector("#addition");
 addition.addEventListener("click", function () {
   if (currentInput !== "") {
     firstNumber = currentInput;
     operator = "+";
     currentInput = "";
     input.value = "";
   }
 });
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
 const substract = document.querySelector("#subtract");
 addition.addEventListener("click", function () {
    if (currentInput !== "") {
      firstNumber = currentInput;
      operator = "-";
      currentInput = "";
      input.value = "";
    }
 });
 const multiply = document.querySelector('#multiply')
 addition.addEventListener('click', function(){
    if (currentInput !== "") {
      firstNumber = currentInput;
      operator = "*";
      currentInput = "";
      input.value = "";
    }
 })
 const divide = document.querySelector("#divide");
 addition.addEventListener("click", function () {
    if (currentInput !== "") {
      firstNumber = currentInput;
      operator = "/";
      currentInput = "";
      input.value = "";
    }
 });

