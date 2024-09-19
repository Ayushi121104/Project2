// Get the HTML elements
const loginButton = document.querySelector('.login-button');
const loginModal = document.querySelector('#login-modal');
const searchInput = document.querySelector('#search-bar');

// Add event listener to the login button
loginButton.addEventListener('click', () => {
  // Show the login modal
  loginModal.style.display = 'block';
});

// Add event listener to the login submit button
document.querySelector('#login-submit').addEventListener('click', () => {
  // Get the full name and email input values
  const fullName = document.querySelector('#full-name').value;
  const email = document.querySelector('#email').value;

  // Implement login logic here (e.g., send a request to your server)
  alert(`Login attempt with full name: ${fullName} and email: ${email}`);
});