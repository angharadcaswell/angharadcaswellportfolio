
   
function sendMail(contactForm) {
    emailjs.send("service_h98fpuw", "template_j0axula", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            let thankYouMessage = document.getElementById("form")
            thankYouMessage.classList.add("thankyou");
            thankYouMessage.innerHTML = "<h2>Thank you for your message. 🥰 I will be in contact as soon as possible.</h2>";
            
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}