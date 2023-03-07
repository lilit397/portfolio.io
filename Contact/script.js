const form = document.getElementById('form')

form.addEventListener('submit',function(event) {
    event.preventDefault()
})
// Send message
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "asatryanl397@gmail.com",
        Password : "Armenia.1990",
        To : 'lilithrachani@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New contact from Enq",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    ); 
}