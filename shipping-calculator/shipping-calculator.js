
function handleCostKeyDown(event){
  if(event.key === 'Enter'){
   calculateTotal();
}
}
function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');

  //reseting all the previous messages
  document.querySelector('.js-total-cost').innerHTML='';
  document.querySelector('.js-error-message').innerHTML='';
  let cost = Number(inputElement.value) * 100;

  if(cost < 0){
    document.querySelector('.js-error-message').innerHTML= 'Error: cost cannot be less than $0';
    return;
  }
  if(cost < 4000){
    cost += 1000;
  }
  document.querySelector('.js-total-cost')
  .innerHTML = `$${cost/100}`;
}