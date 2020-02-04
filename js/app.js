
const bill = document.querySelector("#bill > input");
const tip = document.querySelector("#tip > input");
const people = document.querySelector("#people > input ");
const calcValue =document.querySelector("#calc > input");
const eachEl = document.querySelector("#eachPay > input");
const calculate = document.querySelector("button");




calculate.addEventListener("click",function(){
  calcValue.value = ((tip.value/100 * bill.value) / people.value).toFixed(2);
  // leftover.value = bill.value - (tip.value/100 * bill.value);
  eachEl.value =(parseInt(bill.value) + parseInt(calcValue.value))/people.value;
});




