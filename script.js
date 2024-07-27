

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 


  let name = document.querySelector('input[name="name"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let message = document.getElementById('message').value;

  
  fetch('submit_form.php', {
      method: 'POST',
      body: JSON.stringify({ name: name, email: email, message: message }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
  })
  .then(response => response.json())
  .then(data => {
  
      alert("Form submitted successfully!");
  })
  .catch(error => {
  
      alert("An error occurred while submitting the form.");
  });
});