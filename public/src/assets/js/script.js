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

      // Get the selected day from the dropdown menu
      const selectedDayDropdown = document.getElementById("dayDropdown");
      const selectedDay = selectedDayDropdown.value;

      if (selectedDay !== "default") {
        // Get the day container for the selected day
        const dayContainer = document.getElementById(
          `exerciseContainer${selectedDay}`
        );

        if (dayContainer) {
          // Create a new exercise element and append it to the day container
          const exerciseElement = createExerciseElement(exerciseData);
          dayContainer.appendChild(exerciseElement);
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
