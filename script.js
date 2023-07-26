const API_KEY="?api_key=0e0b406c41969d57b72a434bf8f8ca7a"
const API_URL="https://api.themoviedb.org/3/discover/movie"
let filmTitles=[];

async function  getApiData(){
  let data= await fetch(API_URL+API_KEY).then((res)=>res.json())
  data.results.map(movie=>filmTitles.push({name:movie.title}))
}

getApiData();

filmTitles.forEach(element => {
    console.log(element.name)
});