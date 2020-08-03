function add (a, b) {
	return a+b;
}

function subtract (a, b) {
      return a-b;	
}

console.log("working")

// function sums (array) {
// 	return array.reduce((total, current) => total + current, 0);
// }

// function multiply (array) {
// 	return array.length
// 	? array.reduce((accumulator, nextItem) => accumulator * nextItem)
// 	: 0;
// }
function multiply (a, by) {
	return a*b;
}

// function divide (array) {
// 	return array.length
// 	? array.reduce((total, current) =>total / current)
// 	: 0;
// }

function divide (a, b) {
	return a/b
}

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
    return "Operator error."
}


// function power(a, b) {
// 	return Math.pow(ea,b)
// }

// function factorial(n) {
// 	if (n == 0) return 1;
// 	let product = 1;
// 	for (let i = n; i > 0; i--) {
// 	  product *= i;
// 	}
// 	return product;}

const numbers = document.querySelectorAll("#number");
// const xy = document.getElementById("numberssss");
const display = document.querySelector("#demo");
const operators = document.querySelectorAll("#sign");
const equalTo = document.getElementById('equal_to');

let display_value = "0";
let operator = "";
let first;
let second;
let action = "";

display.innerHTML = display_value;


function working(disp) {
    let val = Number(disp);
    if(val.toString().length < 13) {
        display.textContent = val;
    }
    else {
        display.textContent = val.toPrecision(12);
    }
}

function equals() {
    second = display_value;
    display_value = action === "" ? "0" : operate(first, second, action);
    action = "";
    first = "";
    second = "";
    working(display_value);
 }

 function calculating(op) {
    if(op === "del") {
        if(display_value.length == 0) display_value = "0";
        else {
            display_value = display_value.slice(0,display_value.length-1);
        }
        working(display_value);
    }

    else if(op !== "=" && op !== "clear") {
        if(action !== "") {
            equals();
        }
        first = display_value;
        action = op;
        working(display_value);
        display_value = "";
    }
    else if(op === "=") {
        equals();
    }
    else if(op === "clear") {
        display_value = "0";
        first = "";
        second = "";
        action = "";
        operator = "";
        working(display_value);
    }
 }

 numbers.forEach(item => {
    item.addEventListener("click", (e) => {
    
        if (display_value === '0') {
            display_value = e.target.innerHTML;
            display.innerHTML = display_value;
        } else {
            display_value += e.target.innerHTML;
            display.innerHTML = display_value;
        }
        working(display_value);
        
    })
    item.addEventListener("mouseover", () => item.classList.toggle("highlight"));
    item.addEventListener("mouseout", () => item.classList.toggle("highlight"));
})

// xy.addEventListener('click', () => {
//   console.log("fhjdhjfhjfh");
// }) 



operators.forEach(item => {
    item.addEventListener("mouseup", (e) => {
        if (display_value != '0') {
            display_value += e.target.innerHTML;
            display.innerHTML = display_value;
            calculating(e.target.innerHTML)
        }
        
        
    })
    item.addEventListener("mouseover", () => item.classList.toggle("highlight"));
    item.addEventListener("mouseout", () => item.classList.toggle("highlight"));
});

equalTo.addEventListener('click', (e) => {
    if (display_value != '0') {
        equals()
    }else {
        display_value = '0';
        display.innerHTML = display_value;
    }
})


//  let numSelection="";
// let num1;
// let num2;
// let result;
// let operator="";
// let resultScreen=false;
// const numDisplay=document.querySelectorAll("#number");
// numDisplay.forEach(button=>{
//     button.addEventListener('click',()=>numberDisplay(button))
// });                                                                   
// function numberDisplay(e){
//     display(e.value);
//     numSelection+=e.value;
// }

// const opDisplay=document.querySelectorAll("#sign");
// opDisplay.forEach(button=>{
//     button.addEventListener('click',()=>operatorDisplay(button))
// });
// function operatorDisplay(e){
//     if(operator==""){
//         if(resultScreen==true)
//             {resultScreen=false;
//              display(e.value);
//              num1=result;
//              operator=e.value;}
//         else{
//         display(e.value);
//         num1=parseFloat(numSelection);
//         numSelection="";
//         operator=e.value}}
// }

// function displayResult(value){
//     const display=document.querySelector("#demo");
//     display.innerHTML=Math.round((value*10000))/10000;
//     resultScreen=true;
// }

// function display(value){
//     const display=document.querySelector("#demo");
//     if(resultScreen==true){
//         display.innerHTML=value;
//         resultScreen=false;
//     } else{
//     display.innerHTML=="0"? display.innerHTML=value:display.innerHTML+=value;
//     }
// }