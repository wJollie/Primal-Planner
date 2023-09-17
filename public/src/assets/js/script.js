// require('dotenv').config();

// var muscleGroup = document.getElementById("dropdown");

// saveButton.addEventListener("click", function () {
//     var obj = {
//         muscleGroup: muscleGroup.value,
//     };

//     fetch("/api/getpumpedup/workout", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             },
//             body: JSON.stringify(obj),
//         })
//     });



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
        
        
    
                // You can handle the retrieved data as needed (e.g., save it to the database)
                // exercises.forEach((exercise) => {
                //     const exerciseButton = document.createElement("button");
                //     exerciseButton.textContent = exercise.name;
                //     exerciseButton.classList.add("btn-primary");
                //     buttonContainer.appendChild(exerciseButton);
                //     exerciseButton.addEventListener("click", function () {
                //         const clonedButton = exerciseButton.cloneNode(true);
                //         const selectedDay = prompt('Select a day of the week (MON, TUE, WED, THU, FRI, SAT, SUN):');


                        // Check the selected day and append the button accordingly
//                         if (selectedDay === 'MON') {
//                             const exercisecontainer = document.getElementById('exerciseContainerMON');
//                             exerciseButton.remove();
//                             exercisecontainer.appendChild(clonedButton);
//                         } else if (selectedDay === 'TUE') {
//                             const exercisecontainer = document.getElementById('exerciseContainerTUE');
//                             exerciseButton.remove();
//                             exercisecontainer.appendChild(clonedButton);
//                         } else if (selectedDay === 'WED') {
//                             const exercisecontainer = document.getElementById('exerciseContainerWED');
//                             exerciseButton.remove();
//                             exercisecontainer.appendChild(clonedButton);
//                         } else if (selectedDay === 'THU') {
//                             const exercisecontainer = document.getElementById('exerciseContainerTHU');
//                             exerciseButton.remove();
//                             exercisecontainer.appendChild(clonedButton);
//                         } else if (selectedDay === 'FRI') {
//                             const exercisecontainer = document.getElementById('exerciseContainerFRI');
//                             exerciseButton.remove();
//                             exercisecontainer.appendChild(clonedButton);
//                         } else if (selectedDay === 'SAT') {
//                             const exercisecontainer = document.getElementById('exerciseContainerSAT');
//                             exerciseButton.remove();
//                             exercisecontainer.appendChild(clonedButton);
//                         } else if (selectedDay === 'SUN') {
//                             const exercisecontainer = document.getElementById('exerciseContainerSUN');
//                             exerciseButton.remove();
//                             exercisecontainer.appendChild(clonedButton);
//                         } else {
//                             alert('Invalid day selection.');
//                             button.style.display = 'block';
//                         }
//                     });
//                 });
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }
// }
//  try  {
//      var response = await fetch("api/getpumpedup/workout");
//      if (!response.ok) {
//         throw new Error("something went wrong");
//      } 
       
//      const data = await response.json();
//      console.log(data);
//     } catch (error) {
//         console.log(error);
//     }

//     if (selectedDay === 'MON') {
//         const exercisecontainer = document.getElementById('exerciseContainerMON');
//         exerciseButton.remove();
//         exercisecontainer.appendChild(clonedButton);
//     } else if (selectedDay === 'TUE') {
//         const exercisecontainer = document.getElementById('exerciseContainerTUE');
//         exerciseButton.remove();
//         exercisecontainer.appendChild(clonedButton);
//     } else if (selectedDay === 'WED') {
//         const exercisecontainer = document.getElementById('exerciseContainerWED');
//         exerciseButton.remove();
//         exercisecontainer.appendChild(clonedButton);
//     } else if (selectedDay === 'THU') {
//         const exercisecontainer = document.getElementById('exerciseContainerTHU');
//         exerciseButton.remove();
//         exercisecontainer.appendChild(clonedButton);
//     } else if (selectedDay === 'FRI') {
//         const exercisecontainer = document.getElementById('exerciseContainerFRI');
//         exerciseButton.remove();
//         exercisecontainer.appendChild(clonedButton);
//     } else if (selectedDay === 'SAT') {
//         const exercisecontainer = document.getElementById('exerciseContainerSAT');
//         exerciseButton.remove();
//         exercisecontainer.appendChild(clonedButton);
//     } else if (selectedDay === 'SUN') {
//         const exercisecontainer = document.getElementById('exerciseContainerSUN');
//         exerciseButton.remove();
//         exercisecontainer.appendChild(clonedButton);
//     } else {
//         alert('Invalid day selection.');
//         button.style.display = 'block';
//     }
// }




  

