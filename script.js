const banner=document.querySelector(".images")
const navbar=document.querySelector(".myNavbar")
const firstSearchPage=document.querySelector(".first-search-page")
const searchedFilmPoster=document.querySelector(".searched-film-poster")
const searchedFilms=document.querySelector(".searched-films")
const firstSearchPageSearchContainerInput=document.querySelector(".first-search-page-search-container-input")
const movieAdviceMoviePoster=document.querySelector(".movie-advice-movie-poster");
const movieAdviceSelecterButton=document.querySelectorAll(".movie-advice-selecter")

const movieAdviceSelecterButtonOneLeft=document.querySelector(".movie-advice-selecter-1-l")
const movieAdviceSelecterButtonOneMidd=document.querySelector(".movie-advice-selecter-1-m")
const movieAdviceSelecterButtonOneRight=document.querySelector(".movie-advice-selecter-1-r")

const movieAdviceSelecterIndicatorOne=document.querySelector(".movie-advice-selecter-selection-1")
const movieAdviceSelecterIndicatorTwo=document.querySelector(".movie-advice-selecter-selection-2")
const movieAdviceSelecterIndicatorTre=document.querySelector(".movie-advice-selecter-selection-3")

firstSearchPageSearchContainerInput.value=""
console.log(firstSearchPageSearchContainerInput.value)
async function getPopularFilms(){
    return await fetch("https://api.themoviedb.org/3/discover/movie/?api_key=0e0b406c41969d57b72a434bf8f8ca7a").then(res=>res.json())
}

async function getSearchedFilms(param){
    return await fetch("https://api.themoviedb.org/3/search/movie?api_key=0e0b406c41969d57b72a434bf8f8ca7a&query="+param).then(res=>res.json())
}

getPopularFilms().then(e=>e.results).then(e=>{

    firstSearchPage.style.backgroundImage ="url(https://image.tmdb.org/t/p/original/"+e[0].backdrop_path+")"
    movieAdviceMoviePoster.src="https://image.tmdb.org/t/p/original//cxSKca4dNlk7O7PMiEYT203vlIw.jpg"
})

/*
getPopularFilms().then(e=>e.results).then(e=>{

    firstSearchPage.style.backgroundImage ="url(https://image.tmdb.org/t/p/original/"+e[0].backdrop_path+")"

    e.map(film=>{
        searchedFilms.innerHTML+=`
                    <div class="searched-film p-3 my-3 d-flex">
                        <img src ="https://image.tmdb.org/t/p/original/${film.poster_path}" class="searched-film-poster rounded">
                        <div class="searched-film-details p-3">
                            <div class="searched-film-details-title text-white fs-1">${film.title}</div>
                            <div class="searched-film-details-buttom d-flex">
                                <div class="searched-film-details-year text-warning px-3 ps-0">Year: ${(film.release_date).slice(0,4)}</div>
                                <div class="searched-film-details-score text-warning px-3">IMDB: ${film.vote_average}</div>
                            </div>
                        </div>
                    </div>
        `
        console.log("asd")
    })

})
*/

window.addEventListener("scroll", function() {

  if(window.scrollY<20){
    navbar.style.opacity=0
  }else{
    navbar.style.opacity=window.scrollY/100
  }
  
});

firstSearchPageSearchContainerInput.addEventListener("keyup",()=>{
    searchedFilms.innerHTML=""
    if(firstSearchPageSearchContainerInput.value!=""){
        searchedFilms.classList.remove("hide")

        getSearchedFilms(firstSearchPageSearchContainerInput.value).then(e=>e.results).then(e=>{
            e.map(film=>{
                searchedFilms.innerHTML+=`
                            <div class="searched-film p-3 my-3 d-flex">
                                <img src ="https://image.tmdb.org/t/p/original/${film.poster_path}" class="searched-film-poster rounded">
                                <div class="searched-film-details p-3">
                                    <div class="searched-film-details-title text-white fs-1">${film.title}</div>
                                    <div class="searched-film-details-buttom d-flex">
                                        <div class="searched-film-details-year text-warning px-3 ps-0">Year: ${(film.release_date).slice(0,4)}</div>
                                        <div class="searched-film-details-score text-warning px-3">IMDB: ${film.vote_average}</div>
                                    </div>
                                </div>
                            </div>
                `
            })
        })
    }else{
        searchedFilms.classList.add("hide")
        searchedFilms.innerHTML=""
    }
})

movieAdviceSelecterButtonOneLeft.addEventListener("click",()=>{
    movieAdviceSelecterIndicatorOne.style.left="0%"
    console.log("asdasd")
})
movieAdviceSelecterButtonOneMidd.addEventListener("click",()=>{
    movieAdviceSelecterIndicatorOne.style.left="33%"
})
movieAdviceSelecterButtonOneRight.addEventListener("click",()=>{
    movieAdviceSelecterIndicatorOne.style.left="66%"
})
