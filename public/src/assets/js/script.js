
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
                    <p>Equipment: ${exercise.equipment}</p>
                    <p>Difficulty: ${exercise.difficulty}</p>
                    `; 
                    exerciseContainer.appendChild(exerciseDiv);
                }
                );
                

            })
            .catch((error) => {
                console.error(error);
            });
    }
}

        
        



  

