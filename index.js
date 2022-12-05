function validation(){
  var user=document.getElementById('user').value;
  var pass=document.getElementById('pass').value;
  var comfirm=document.getElementById('conpass').value;
  var number=document.getElementById('MobileNumber').value;
  var email=document.getElementById('emails').value;
   
  if(user == ""){
    document.getElementById('username').innerHTML="** please fill the username field";
    return false;
  }
  if((user.length <=2) || (user.length > 20)){
    document.getElementById('username').innerHTML="** user length must be 2 and 20";
    return false;
  }

  if(isNaN(user)){
    document.getElementById('username').innerHTML="** only characters are allowed";
    return false;
  }



  if(pass == ""){
    document.getElementById('Pass').innerHTML="** please fill the password field";
    return false;
  }


  if((pass.length <=5) ||(pass.length > 20)){
    document.getElementById('Pass').innerHTML="** password lenght must be between 5 and 20";
    return false;
  }

  if(pass!=comfirm){
    document.getElementById('Pass').innerHTML="** password are not matching";
    return false;
  }

   if( comfirm == ""){
    document.getElementById('Confirm').innerHTML="** please fill the confirm password field";
    return false;
  }

   if(number == ""){
    document.getElementById('Mobile').innerHTML="** please fill the Mobile number field";
    return false;
  }

  if(isNaN(number)){
    document.getElementById('Mobile').innerHTML="** user must write digits only one character";
    return false;
  }

  if(number.length!=10){
    document.getElementById('Mobile').innerHTML="** user must be 10 digits";
    return false;
  }


   if(email == ""){
    document.getElementById('emailx').innerHTML="** please fill the email field";
    return  false;
}

if(email.indexOf('@')){
  document.getElementById('emailx').innerHTML="** @ Invalid position";
  return  false;
}

if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
  document.getElementById('emailx').innerHTML="** . Invalid position";
  return  false;
}

}