// Function to save exercises to local storage
function saveExercisesToLocalStorage(day, exerciseData) {
  // Retrieve the existing data from local storage (if any)
  let savedExercises = JSON.parse(localStorage.getItem("savedExercises")) || {};

  // Check if the day already has saved exercises
  if (!savedExercises[day]) {
    savedExercises[day] = [];
  }

  // Add the exercise data to the specific day
  savedExercises[day].push(exerciseData);

  // Save the updated data back to local storage
  localStorage.setItem("savedExercises", JSON.stringify(savedExercises));
}

// Function to retrieve exercises from local storage
function getExercisesFromLocalStorage() {
  // Retrieve the saved exercises from local storage
  const savedExercises =
    JSON.parse(localStorage.getItem("savedExercises")) || {};

  return savedExercises;
}

// When the page loads, populate the calendar with saved exercises
window.addEventListener("load", function () {
  const savedExercises = getExercisesFromLocalStorage();

  // Loop through each day in savedExercises
  for (const day in savedExercises) {
    if (savedExercises.hasOwnProperty(day)) {
      const dayContainer = document.getElementById(`exerciseContainer${day}`);
      if (dayContainer) {
        // Loop through saved exercises for the day and add them to the calendar
        savedExercises[day].forEach((exerciseData) => {
          const exerciseElement = createExerciseElement(exerciseData);
          dayContainer.appendChild(exerciseElement);
        });
      }
    }
  }
});

async function fetchExercises() {
  console.log("Function fetchExercises called");
  const selectedMuscle = document.getElementById("dropdown").value;
  if (selectedMuscle !== "default") {
    // Construct the API URL with the selected muscle
    const apiKey = "HbdhHkcGSZn6/VN1pw6s1A==kVA4cQZn2RBTZcrX";
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
        console.log(exercises);
        // Display the exercises on the page
        const exerciseContainer = document.getElementById("dashboard");
        exerciseContainer.innerHTML = "";
        exercises.forEach((exercise) => {
          const exerciseDiv = document.createElement("div");
          exerciseDiv.classList.add("exercise");
          exerciseDiv.innerHTML = `   
                    <h1>${exercise.name}</h1>
                    <p>Type: ${exercise.type}</p>
                    <p>Equipment Needed: ${exercise.equipment}</p>
                    <p>Difficulty: ${exercise.difficulty}</p>
                    <button class="add-exercise" data-exercise='${JSON.stringify(
                      exercise
                    )}'>Add to Day</button>
                    `;
          exerciseContainer.appendChild(exerciseDiv);
        });
        addExerciseListeners();
        addRemoveExerciseListeners();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
function createExerciseElement(exerciseData, day) {
  const exerciseDiv = document.createElement("div");
  exerciseDiv.classList.add("exercise");
  exerciseDiv.innerHTML = `
      <h1>${exerciseData.name}</h1>
      <p>Type: ${exerciseData.type}</p>
      <p>Equipment Needed: ${exerciseData.equipment}</p>
      <p>Difficulty: ${exerciseData.difficulty}</p>
    `;
  return exerciseDiv;
}

function addExerciseListeners() {
  document.querySelectorAll(".add-exercise").forEach((addButton) => {
    addButton.addEventListener("click", function () {
      const exerciseData = JSON.parse(this.getAttribute("data-exercise"));
      const selectedDayDropdown = document.getElementById("dayDropdown");
      const selectedDay = selectedDayDropdown.value;

      if (selectedDay !== "default") {
        const dayContainer = document.getElementById(
          `exerciseContainer${selectedDay}`
        );

        if (dayContainer) {
          const exerciseElement = createExerciseElement(exerciseData);
          dayContainer.appendChild(exerciseElement);

          // Save the exercise to local storage
          saveExercisesToLocalStorage(selectedDay, exerciseData);
        } else {
          alert("Invalid day. Exercise was not added.");
        }
      } else {
        alert("Please select a day from the dropdown menu.");
      }
    });
  });
}

// Define the addRemoveExerciseListeners function
function addRemoveExerciseListeners() {
  document.querySelectorAll(".remove-exercise").forEach((removeButton) => {
    removeButton.addEventListener("click", function () {
      console.log("Remove from Day button clicked"); // Check if the button click is detected
      const exerciseData = JSON.parse(this.getAttribute("data-exercise"));
      const selectedDay = this.getAttribute("data-day");
      console.log("Exercise Data:", exerciseData); // Check if the exercise data is correct
      console.log("Selected Day:", selectedDay); // Check if the selected day is correct

      // Get the day container for the selected day
      const dayContainer = document.getElementById(
        `exerciseContainer${selectedDay}`
      );

      if (dayContainer) {
        // Modify the selector to find exercise elements with the data-exercise attribute
        const exerciseElements = dayContainer.querySelectorAll(
          `.exercise[data-exercise='${JSON.stringify(exerciseData)}']`
        );

        // Remove the found exercise elements
        exerciseElements.forEach((element) => {
          element.remove();
          removeFromLocalStorage(selectedDay, exerciseData);
        });
      }
    });
  });
}
