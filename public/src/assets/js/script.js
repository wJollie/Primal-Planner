const armDropdown = document.querySelector('.dropdownArm');
const legDropdown = document.querySelector('.dropdownLeg');
const absDropdown = document.querySelector('.dropdownAbs');
require('dotenv').config();
const dropdown = document.getElementById("dropdown");
const buttonContainer = document.getElementById("button-container");

// dropdown.addEventListener("change", function () {
//     // Clear the existing buttons
//     buttonContainer.innerHTML = "";
  
//     // Check the selected option and create the corresponding button
//     if (dropdown.value === "option1") {
//       const button1 = document.createElement("button");
//       button1.textContent = `${muscle}`;
//       button1.classList.add("btn-primary");
//       buttonContainer.appendChild(button1);
  
//       button1.addEventListener("click", function () {
//         alert("Button for Option 1 clicked!");
//       });
//     } else if (dropdown.value === "option2") {
//       const button2 = document.createElement("button");
//       button2.textContent = "Button for Option 2";
//       buttonContainer.appendChild(button2);
  
//       button2.addEventListener("click", function () {
//         alert("Button for Option 2 clicked!");
//       });
//     }
//   });

  function fetchExercises() {
    const selectedMuscle = document.getElementById("dropdown").value;
    if (selectedMuscle !== "default") {
        // Construct the API URL with the selected muscle
        const apiKey = process.env.API_KEY;
        const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${selectedMuscle}`;

        // Make the API call
        fetch(apiUrl, {
            headers: {
                "X-Api-Key": apiKey,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const exercises = data.map(({ name, type, equipment, difficulty }) => ({
                    name,
                    type,
                    equipment,
                    difficulty,
                }));
                console.log("API CALL DONE");
                // You can handle the retrieved data as needed (e.g., save it to the database)
            })
            .catch((error) => {
                console.error(error);
            });
    }
}