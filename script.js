function generateOtp(){
    let generateOtp=Math.floor(1000+Math.random()*9000);
    // alert(generateOtp)
    window.localStorage.setItem("otp",generateOtp)
}

function validateOtp(){
    let validOtp=document.querySelector('#validOtp').value
    let otp=window.localStorage.getItem("otp")
    if(validOtp===otp){
        alert("valid")
    }
    else{
        alert("invalid otp")
    }
    
}