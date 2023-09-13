const router = require("express").Router();
// const apiKey = "A/c2Nz9IBC/A2lTrSzOA/g==kfpb0a5ihPfRghPt";

// var muscle = "biceps";
// $.ajax({
//   method: "GET",
//   url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
//   headers: { "X-Api-Key": "YOUR_API_KEY" },
//   contentType: "application/json",
//   success: function (result) {
//     console.log(result);
//   },
//   error: function ajaxError(jqXHR) {
//     console.error("Error: ", jqXHR.responseText);
//   },
// });

// We need to make get/post requests to the api for whatever information we need
// We also need to figure out how the user is gonna interact with the api in the dashboard

router.get("/workout", (req, res) => {
  // const request = require('request');
  const muscle = 'biceps';
  const apiKey = 'HbdhHkcGSZn6/VN1pw6s1A==kVA4cQZn2RBTZcrX'; // Replace with your actual API key
  const apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle;

  router.get({
    url: apiUrl,
    headers: {
      'X-Api-Key': apiKey
    },
  }, function(error, response, body) {
    if (error) {
      console.error('Request failed:', error);
      res.status(500).send('Request failed');
    } else if (response.statusCode !== 200) {
      console.error('Error:', response.statusCode, body.toString('utf8'));
      res.status(response.statusCode).send(body.toString('utf8'));
      console.log("this is an error. you suck at everything");
    } else {
      console.log('Response:', body);
      res.send(body);
    }
    console.log('/workout route finished');
  });
}
);

module.exports = router;
