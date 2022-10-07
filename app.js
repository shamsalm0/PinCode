function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;
    }
    else{
       return getPin();
    }
}
function generatePin(){
    const pin =getPin();
    document.getElementById('display-pin').value =pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    
    const number=event.target.innerText;
    const calcInput=document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number=='C'){
            calcInput.value='';
        }
    }
    else{
        const previousNumber=calcInput.value;
        const newNumber=previousNumber+number;
        calcInput.value=newNumber;
        console.log(newNumber);
    }
})

function verifyPin(){
    const pin=document.getElementById('display-pin').value;
    const typedNumbers=document.getElementById('typed-numbers').value;

    if(pin==typedNumbers){
       // document.getElementById('notify-success').style.display='block';
        //document.getElementById('notify-fail').style.display='none';
        window.location.href='welcome.html';
    }

    else{
        document.getElementById('notify-success').style.display='none';
        document.getElementById('notify-fail').style.display='block';
    }
}