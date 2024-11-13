form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const formData = new FormData(form);

    // Use fetch to send the data to Google Apps Script Web App
    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {  // Replace this with your Web App URL
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(result => {
        // Handle success
        document.getElementById('response').innerText = result; // Display success message
        form.reset();  // Reset the form fields

        // Redirect after successful form submission
        window.location.href = 'thankyou.html'; // Redirect to another page
    })
    .catch(error => {
        // Handle error
        document.getElementById('response').innerText = 'Error submitting the form';
        console.error('Error:', error);
    });
});
