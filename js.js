function plusOrMinus(id,isIncrease){
    // previous 
    const previous = document.getElementById(id);
    const previousString = previous.value;
    const previousInt = parseInt(previousString);
   
    let New;
    
    // new
    if(isIncrease == true){
        New = previousInt + 1;
    }
    else{
        New = previousInt - 1;
    }
    // update
    const update = document.getElementById(id);
    update.value = New;
    
    return New;
}

function setValue(id,price){
    const getId = document.getElementById(id);
    getId.innerText = price;
}
function subTotal(Price,id){
    const getId = document.getElementById(id);
    const otherPrice =  getId.innerText ;
    const subTotal =  Price + parseInt(otherPrice);
    return subTotal;
}
function taxFunction(subTotal){
    tax = subTotal * 0.01;
    return tax.toFixed(2);
}
// click phone plus
const phonePlus = document.getElementById('plusPhone');
phonePlus.addEventListener('click', function(){
   
    const phone = plusOrMinus('phoneInput',true);
    const phonePrice = phone * 1219;
    setValue('phonePrice',phonePrice);
    
     // subtotal
    const sub =  subTotal(phonePrice,'casePrice');
    setValue('subTotal', sub);

    // tax
    const taxValue =  taxFunction(sub);
    setValue('tax', taxValue);

    // total
    const total = sub + parseFloat(taxValue);
    setValue('total',total);
})
// click phone Subtraction
const phoneMinus = document.getElementById('minusPhone');
phoneMinus.addEventListener('click', function(){
   
    const phone = plusOrMinus('phoneInput',false);
    const phonePrice = phone * 1219;
    setValue('phonePrice',phonePrice);
    
     // subtotal
    const sub =  subTotal(phonePrice,'casePrice');
    setValue('subTotal', sub);

     // tax
     const taxValue =  taxFunction(sub);
     setValue('tax', taxValue);

      // total
    const total = sub + parseFloat(taxValue);
    setValue('total',total);
})
// click case plus
const casePlus = document.getElementById('plusCase');
casePlus.addEventListener('click', function(){
   
    const phoneCase = plusOrMinus('caseInput',true);
    const casePrice = phoneCase * 59;
    setValue('casePrice',casePrice);
    
    // subtotal
    const sub =  subTotal(casePrice,'phonePrice');
    setValue('subTotal', sub);

     // tax
     const taxValue =  taxFunction(sub);
     setValue('tax', taxValue);

      // total
    const total = sub + parseFloat(taxValue);
    setValue('total',total);
})
// click case subtraction
const caseMinus = document.getElementById('minusCase');
caseMinus.addEventListener('click', function(){
   
    const phoneCase = plusOrMinus('caseInput',false);
    const casePrice = phoneCase * 59;
    setValue('casePrice',casePrice);

     // subtotal
    const sub =  subTotal(casePrice,'phonePrice');
    setValue('subTotal', sub);

     // tax
     const taxValue =  taxFunction(sub);
     setValue('tax', taxValue);

      // total
    const total = sub + parseFloat(taxValue);
    setValue('total',total);
})