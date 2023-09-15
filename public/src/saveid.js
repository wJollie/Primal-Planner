// Get a reference to the dropdown element by its ID
const dropdown = document.getElementById('dropdown');

// Add an event listener to listen for changes in the dropdown selection
dropdown.addEventListener('change', function () {
  // Get the selected value from the dropdown and store it in a variable
  const selectedValue = dropdown.value;

  // Now you can use the selectedValue variable as needed
  console.log('Selected Value:', selectedValue);

  // Example: If you want to use the selected value in some other operation
  // Replace this with your desired code
  // For example, you can make an API request or perform some action based on the selected value.
});
