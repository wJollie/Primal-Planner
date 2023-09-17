const router = require("express").Router();
const sequelize = require("../../config/connection");
const workout = require("../../models/workout");
require("dotenv").config();

router.get("api/workout/:muscle", (req, res) => {
  // Get the muscle variable from the request parameters
  const muscle = req.params.muscle;

  // Make the API call
  const apiKey = process.env.API_KEY;
  const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

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
      return workout.bulkCreate(exercises);
    })
    .then((workout) => {
      console.log(workout); 
      res.json(workout);
      
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error Saving workouts to Database" });
    });
});


module.exports = router;
