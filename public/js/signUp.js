// signup.js

// Function to handle the form submission
async function signupFormHandler(event) {
  event.preventDefault();

  // Select form elements by their IDs
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  // Check if all fields are filled
  if (username &&  password) {
    // Send a POST request to your server to register the user
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Redirect the user to the login page or dashboard
      document.location.replace("/login");
    } else {
      alert("Failed to sign up. Please try again.");
    }
  }
}

// Attach the event listener to the form
document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);