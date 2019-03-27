// Callback for the function to have a click button
document.getElementById("button").addEventListener("click", myFunction);
// Create a function to 
function myFunction () {
  fetch("https://api.themoviedb.org/3/search/movie?api_key=3bbdbed2c291857dbe65e935c9dea7ed")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {

    })
}
