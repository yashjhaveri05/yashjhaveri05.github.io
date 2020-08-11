function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("mobile_number").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;

  if(name.length < 3){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    setTimeout(() => error_message.remove(), 5000);
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    setTimeout(() => error_message.remove(), 5000);
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    setTimeout(() => error_message.remove(), 5000);
    return false;
  }
  if(message.length == 0){
    text = "Please Enter A Message";
    error_message.innerHTML = text;
    setTimeout(() => error_message.remove(), 5000);
    return false;
  }
  if(message.length <= 10){
    text = "Please Enter More Than 10 Characters For the Message";
    error_message.innerHTML = text;
    setTimeout(() => error_message.remove(), 5000);
    return false;
  }
  alert(`Form submitted for ${name} with ${email} and ${phone}.The message was \"${message}\"`);
  return true;
}