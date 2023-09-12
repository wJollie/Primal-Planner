const apiKey = "A/c2Nz9IBC/A2lTrSzOA/g==kfpb0a5ihPfRghPt";

var muscle = "biceps";
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
  headers: { "X-Api-Key": "YOUR_API_KEY" },
  contentType: "application/json",
  success: function (result) {
    console.log(result);
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});

// We need to make get/post requests to the api for whatever information we need
// We also need to figure out how the user is gonna interact with the api in the dashboard
