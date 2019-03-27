// Callback for the function to have a click button
// Create a function to
var imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
function getMovieData (event) {
  event.preventDefault();
  var searchValue = document.getElementById("search").value;

  fetch("https://api.themoviedb.org/3/search/movie?api_key=3bbdbed2c291857dbe65e935c9dea7ed&language=en-US&query=" + searchValue + "&page=1&include_adult=false")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var result = data.results[0] ;
      console.log(result.poster_path);
    document.getElementById("title").textContent = result.title;
    document.getElementById("image").src = imgUrl + result.poster_path;
    document.getElementById("date").textContent = result.release_date;
    document.getElementById("summary").textContent = result.overview;
    document.getElementById("average").textContent = result.vote_average;


      //console.log(data);
    })
    .catch(function(error) {
      //console.log(error);
    })
}

document.getElementById("button").addEventListener("click", getMovieData);
