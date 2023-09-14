const router = require("express").Router();
const sequelize = require("../../config/connection");
const workout = require("../../models/workout");
require("dotenv").config();

router.get("/workout", (req, res) => {
  const muscle = "neck";
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
    .then(() => {
      res.json({ message: "EXERCISES added to DATABASE" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error Saving workouts to Database" });
    });
});

module.exports = router;
