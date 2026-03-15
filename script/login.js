console.log("File are Connected");
document.getElementById('login-btn').addEventListener('click', function(){
    console.log('button connect sucessfully');
     const inputNum = document.getElementById('input-number');
     const  contactNum = inputNum.value;
     console.log(contactNum);
     const inputPin = document.getElementById('input-pin');
     const pin = inputPin.value;
     console.log(pin);
     if(contactNum=='01637558263' && pin == '1234'){
        alert('login sucessully');
        window.location.assign('./home.html');
     }
     else{
        alert('login Failde');
        return;

     }
})
