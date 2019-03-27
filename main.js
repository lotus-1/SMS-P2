// Callback for the function to have a click button
// Create a function to
function getMovieData (event) {
  event.preventDefault();
  var searchValue = document.getElementById("search").value;

  fetch("https://api.themoviedb.org/3/search/movie?api_key=3bbdbed2c291857dbe65e935c9dea7ed&language=en-US&query=" + searchValue + "&page=1&include_adult=false")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      //document.getElementById("title").textContent = data.title;
      // var a = document.createElement('a');
      // var linkText = document.createTextNode("title");
      // a.appendChild(linkText);
      // a.title = "my title text";
      // a.href = "http://example.com";
      // document.body.appendChild(a);

      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    })
}

document.getElementById("button").addEventListener("click", getMovieData);
