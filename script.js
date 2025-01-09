// var typed = new Typed('.element', {
//     strings: ["And i am a passionate" , " Frontend Web Developer...."],
//     typeSpeed: 80,
//     backSpeed: 50,
//     loop: true
//   });



const MessageSend = () => {
  (function(){
    emailjs.init({
      publicKey: "Ql5XR0NamqOZmaaX3",
    });
 })();

  let userName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userSubject = document.querySelector("#subject").value;
  let userMessage =document.querySelector("#message").value; 

  if(!userEmail , !userMessage ,!userName ,!userSubject){
    alert("PLEASE FILL INPUT");
    return;
  }


  let object = {
    Full_Name:userName,
    Email: userEmail,
    subject: userSubject,
    Message: userMessage,
  }

  emailjs.send("service_e4j4fue" , "template_bjzfhaf" , object)
  .then((response) => {
alert("Sending Complete");
console.log(response);
  })
  .catch( (error) => {
console.log(error);
  })

}

const Refresh = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value ="";
  document.querySelector("#message").value = ""; 
  document.querySelector("#subject").value = "";
}