function sendMail(form) {
    emailjs.send("gmail", "jack", {
            "from_name": form.name.value,
            "from_email": form.emailaddress.value,
            "project_request": form.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            });
        return false;
}
