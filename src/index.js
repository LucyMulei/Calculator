// const buttons= document.querySelectorAll('button')
// const input = document.querySelector('input')
// currentInput=''
// numbers=[]
// buttons.forEach(function(button){
//     button.addEventListener('click', function(){
//         buttonText= button.textContent
//         input.value += buttonText += ""
//     })
// })

// const clear =document.querySelector('#clear')
// clear.addEventListener('click',function(){
//     input.value = ""
// })
//  const addition = document.querySelector('#addition')
//  addition.addEventListener('click', function(){
//         buttonText = button.textContent;
//         if(buttonText==='+'){
//             if(currentInput!==''){
//                 numbers.push(Number(currentInput))
//                 currentInput=''
//                 input.value =+ '+'

//             }
//             else{
//                 currentInput+=buttonText
//                 input.value+=buttonText
//             }
//         }

//  })
//  const substract = document.querySelector("#subtract");
//  addition.addEventListener("click", function () {});
//  const multiply = document.querySelector('#multiply')
//  addition.addEventListener('click', function(){
//  })
//  const divide = document.querySelector("#divide");
//  addition.addEventListener("click", function () {});
//  const equals = document.querySelector("#equals");
//  addition.addEventListener("click", function () {
//     if(currentInput!==''){
//         numbers.push(Number(currentInput))
//         const sum= numbers.reduce(function(a,b){
//             return a+b
//         },0)
//         input.value=sum
//         currentInput=''
//         numbers=[]
//     }
//  });
const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const clear= document.querySelector('#clear')
let currentInput = "";
let operator = "";
let firstNumber = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const buttonText = button.textContent;
    if ((buttonText >= "0" && buttonText <= "9") || buttonText === ".") {
      currentInput += buttonText;
      input.value = currentInput;
    } else if (buttonText === "C") {
      currentInput = "";
      firstNumber = "";
      operator = "";
      input.value = "0";
    } else if (buttonText === "=") {
      if (firstNumber && currentInput && operator) {
        const result = calculate(
          Number(firstNumber),
          Number(currentInput),
          operator
        );
        input.value = result;
        currentInput = result;
        firstNumber = "";
        operator = "";
      }
    } else {
      if (currentInput) {
        if (firstNumber) {
          firstNumber = calculate(
            Number(firstNumber),
            Number(currentInput),
            operator
          );
        } else {
          firstNumber = currentInput;
        }
        operator = buttonText;
        currentInput = "";
        input.value = "";
      }
    }
  });
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
}
