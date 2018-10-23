function sendMail(form) {
    emailjs.send("gmail", "rosie", {
        "form_name": form.name.value,
        "form_email": form.emailaddress.value,
        "project_request": form.projectsummary.value
    })
    .then (
        function(response){
           console.log("SUCCESS", response) ;
        },
        function(error){
           console.log("FAILED", error);
        });
}