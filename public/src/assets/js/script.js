
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
                

            })
            .catch((error) => {
                console.error(error);
            });
    }
}

        
        



  

