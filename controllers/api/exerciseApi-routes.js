const router = require("express").Router();

router.get("/workout", (req, res) => {

  const fetch = require('node-fetch');

const muscle = 'biceps';
const apiKey = 'HbdhHkcGSZn6/VN1pw6s1A==kVA4cQZn2RBTZcrX'; // Replace with your actual API key
const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

fetch(apiUrl, {
  headers: {
    'X-Api-Key': apiKey
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

});


// const fetch = require('node-fetch');

// const muscle = 'biceps';
// const apiKey = 'HbdhHkcGSZn6/VN1pw6s1A==kVA4cQZn2RBTZcrX'; // Replace with your actual API key
// const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

// fetch(apiUrl, {
//   headers: {
//     'X-Api-Key': apiKey
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


module.exports = router;
