document.getElementById("submit-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior if this button is inside a form
    sendMail(); // Call the sendMail() function
    console.log("hello")
  });
  
    const sendMail = () => {
      const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
      };
      const serviceID = "service_tau98h5"
      const templateID = "template_si3e3qb"
  
      emailjs.send(serviceID, templateID, params)
        .then(
          res => {
            document.getElementById('name').value = "",
  
            document.getElementById('email').value = "";
  
            document.getElementById('subject').value = "";

            document.getElementById('message').value = "";


            console.log(res)
            alert("your message sent succesfully")
  
          }
        )
        .catch(err => console.log(err));
    };
  
  
  
  