var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded", year : "2003", length: 138, rating: "7.2", genre: "sci-fi" },
  { title: "Now you see me 2", year: "2016", length:140, rating:"7.3", genre:"thriller"}
];

function getMovieTitle( index ){
  console.log(movieList[index].title);
}
console.log("The title of the movie:");
console.log(getMovieTitle(3));

function addMovie( movie ){
  movieList.push(movie);
  console.log(movieList);
}

var newMovie = { title: "The Matrix", year: "2001", length: 140, rating: "8.1", genre: "sci-fi" };
console.log(addMovie(newMovie));

function movieByRating(){
  movieList.sort(function(a, b){return b.rating - a.rating});
  console.log(movieList);;
}

console.log(movieByRating());

function findByTitle( title ){
  for(var i=0; i<movieList.length; i++)
  {
    var temp = movieList[i].title.search(/matrix/i);
    if(temp > 0)
    {
      console.log(movieList[i]);
    }
  }
}

console.log(findByTitle("matrix"));
