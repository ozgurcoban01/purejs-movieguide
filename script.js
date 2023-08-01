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

const movieAdviceSelecterButtonTwoLeft=document.querySelector(".movie-advice-selecter-2-l")
const movieAdviceSelecterButtonTwoMidd=document.querySelector(".movie-advice-selecter-2-m")
const movieAdviceSelecterButtonTwoRight=document.querySelector(".movie-advice-selecter-2-r")

const movieAdviceSelecterButtonTreLeft=document.querySelector(".movie-advice-selecter-3-l")
const movieAdviceSelecterButtonTreMidd=document.querySelector(".movie-advice-selecter-3-m")
const movieAdviceSelecterButtonTreRight=document.querySelector(".movie-advice-selecter-3-r")


const movieAdviceSelecterIndicatorOne=document.querySelector(".movie-advice-selecter-selection-1")
const movieAdviceSelecterIndicatorTwo=document.querySelector(".movie-advice-selecter-selection-2")
const movieAdviceSelecterIndicatorTre=document.querySelector(".movie-advice-selecter-selection-3")

const movieAdviceMoviesOne=document.querySelector(".movie-advice-movies-1")
const movieAdviceMoviesTwo=document.querySelector(".movie-advice-movies-2")
const movieAdviceMoviesTre=document.querySelector(".movie-advice-movies-3")


firstSearchPageSearchContainerInput.value=""


console.log(firstSearchPageSearchContainerInput.value)


async function getPopularFilms(){
    return await fetch("https://api.themoviedb.org/3/discover/movie/?api_key=0e0b406c41969d57b72a434bf8f8ca7a").then(res=>res.json())
}
async function getSearchedFilms(param){
    return await fetch("https://api.themoviedb.org/3/search/movie?api_key=0e0b406c41969d57b72a434bf8f8ca7a&query="+param).then(res=>res.json())
}
async function getCarouselPopularMovies(){
    return await fetch("https://api.themoviedb.org/3/movie/popular?api_key=0e0b406c41969d57b72a434bf8f8ca7a").then(res=>res.json())
}
async function getCarouselTopRatedMovies(){
    return await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0e0b406c41969d57b72a434bf8f8ca7a").then(res=>res.json())
}
async function getCarouselNowPlayingMovies(){
    return await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0e0b406c41969d57b72a434bf8f8ca7a").then(res=>res.json())
}
async function getCarouselUpcomingMovies(){
    return await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=0e0b406c41969d57b72a434bf8f8ca7a").then(res=>res.json())
}

getCarouselPopularMovies().then(e=>e.results).then(e=>{
    movieAdviceMoviesOne.innerHTML=""
    e.map(e=>{
        movieAdviceMoviesOne.innerHTML+=`
        <div class="movie-advice-movie" id=${e.id}>
         <img src ="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-advice-movie-poster">
         <div class="movie-advice-movie-name">${e.title}</div>
        </div>
        `
    })

    const arr = [...movieAdviceMoviesOne.children];

    arr.map((e)=>{
        e.addEventListener("click",()=>{
            console.log(e)
            window.location.href="detail.html"
            localStorage.setItem("detailId",e.id)
        })
    })

})

getCarouselNowPlayingMovies().then(e=>e.results).then(e=>{
    movieAdviceMoviesTwo.innerHTML=""
    e.map(e=>{
        movieAdviceMoviesTwo.innerHTML+=`
        <div class="movie-advice-movie" id=${e.id}>
         <img src ="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-advice-movie-poster">
         <div class="movie-advice-movie-name">${e.title}</div>
        </div>
        `
    })
    const arr = [...movieAdviceMoviesTwo.children];

    arr.map((e)=>{
        e.addEventListener("click",()=>{
            console.log(e)
            window.location.href="detail.html"
            localStorage.setItem("detailId",e.id)
        
        })
    })

})
getCarouselPopularMovies().then(e=>e.results).then(e=>{
    movieAdviceMoviesTre.innerHTML=""
    e.map(e=>{
        movieAdviceMoviesTre.innerHTML+=`
        <div class="movie-advice-movie" id=${e.id}>
         <img src ="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-advice-movie-poster">
         <div class="movie-advice-movie-name">${e.title}</div>
        </div>
        `
    })
    const arr = [...movieAdviceMoviesTre.children];

    arr.map((e)=>{
        e.addEventListener("click",()=>{
            console.log(e)
            window.location.href="detail.html"
            localStorage.setItem("detailId",e.id)
        })
    })


})


getPopularFilms().then(e=>e.results).then(e=>{

    firstSearchPage.style.backgroundImage ="url(https://image.tmdb.org/t/p/original/"+e[0].backdrop_path+")"
    movieAdviceMoviePoster.src="https://image.tmdb.org/t/p/original//cxSKca4dNlk7O7PMiEYT203vlIw.jpg"
})



window.addEventListener("scroll", function() {

  if(window.scrollY<20){
    navbar.style.opacity=0
  }else{
    navbar.style.opacity=window.scrollY/10
  }
  
});



firstSearchPageSearchContainerInput.addEventListener("keyup",()=>{
    searchedFilms.innerHTML=""
    if(firstSearchPageSearchContainerInput.value!=""){
        searchedFilms.classList.remove("hide")

        getSearchedFilms(firstSearchPageSearchContainerInput.value).then(e=>e.results).then(e=>{
            e.map(film=>{
                searchedFilms.innerHTML+=`
                            <div class="searched-film p-3 my-3 d-flex "id=${film.id}>
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
            const arr = [...searchedFilms.children];
            arr.map((e)=>{
                e.addEventListener("click",()=>{
                    console.log(e)
                    window.location.href="detail.html"
                    localStorage.setItem("detailId",e.id)
                })
            })
        
        })
    }else{
        searchedFilms.classList.add("hide")
        searchedFilms.innerHTML=""
    }
  

   
})



movieAdviceSelecterButtonOneLeft.addEventListener("click",()=>{
    movieAdviceSelecterIndicatorOne.style.left="0%"
    getCarouselPopularMovies().then(e=>e.results).then(e=>{
        movieAdviceMoviesOne.innerHTML=""
        e.map(e=>{
            movieAdviceMoviesOne.innerHTML+=`
            <div class="movie-advice-movie" id=${e.id}>
             <img src ="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-advice-movie-poster">
             <div class="movie-advice-movie-name">${e.title}</div>
            </div>
            `
        })
        
        const arr = [...movieAdviceMoviesOne.children];

        arr.map((e)=>{
            e.addEventListener("click",()=>{
                console.log(e)
                window.location.href="detail.html"
                localStorage.setItem("detailId",e.id)
            })
        })
    
    })
    movieAdviceSelecterButtonOneLeft.style.color="white"
    movieAdviceSelecterButtonOneRight.style.color="gray"

})
movieAdviceSelecterButtonOneRight.addEventListener("click",()=>{
    movieAdviceSelecterIndicatorOne.style.left="50%"
    getCarouselTopRatedMovies().then(e=>e.results).then(e=>{
        movieAdviceMoviesOne.innerHTML=""
        e.map(e=>{
            movieAdviceMoviesOne.innerHTML+=`
            <div class="movie-advice-movie" id=${e.id}>
             <img src ="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-advice-movie-poster">
             <div class="movie-advice-movie-name">${e.title}</div>
            </div>
            `
        })
        const arr = [...movieAdviceMoviesOne.children];

        arr.map((e)=>{
            e.addEventListener("click",()=>{
                console.log(e)
                window.location.href="detail.html"
                localStorage.setItem("detailId",e.id)
            })
        })
    })
    movieAdviceSelecterButtonOneLeft.style.color="gray"
    movieAdviceSelecterButtonOneRight.style.color="white"
})


movieAdviceSelecterButtonTwoLeft.addEventListener("click",()=>{
    movieAdviceSelecterIndicatorTwo.style.left="0%"
    getCarouselNowPlayingMovies().then(e=>e.results).then(e=>{
        movieAdviceMoviesTwo.innerHTML=""
        e.map(e=>{
            movieAdviceMoviesTwo.innerHTML+=`
            <div class="movie-advice-movie" id=${e.id}>
             <img src ="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-advice-movie-poster">
             <div class="movie-advice-movie-name">${e.title}</div>
            </div>
            `
        })
        const arr = [...movieAdviceMoviesTwo.children];

        arr.map((e)=>{
            e.addEventListener("click",()=>{
                console.log(e)
                window.location.href="detail.html"
                localStorage.setItem("detailId",e.id)
            })
        })
    })
    movieAdviceSelecterButtonTwoLeft.style.color="white"
    movieAdviceSelecterButtonTwoRight.style.color="gray"
})
movieAdviceSelecterButtonTwoRight.addEventListener("click",()=>{
    movieAdviceSelecterIndicatorTwo.style.left="50%"
    getCarouselUpcomingMovies().then(e=>e.results).then(e=>{
        movieAdviceMoviesTwo.innerHTML=""
        e.map(e=>{
            movieAdviceMoviesTwo.innerHTML+=`
            <div class="movie-advice-movie" id=${e.id}>
             <img src ="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-advice-movie-poster">
             <div class="movie-advice-movie-name">${e.title}</div>
            </div>
            `
        })
        const arr = [...movieAdviceMoviesTwo.children];

        arr.map((e)=>{
            e.addEventListener("click",()=>{
                console.log(e)
                window.location.href="detail.html"
                localStorage.setItem("detailId",e.id)
            })
        })
    })
    movieAdviceSelecterButtonTwoLeft.style.color="gray"
    movieAdviceSelecterButtonTwoRight.style.color="white"
})


movieAdviceSelecterButtonTreLeft.addEventListener("click",()=>{
    movieAdviceSelecterIndicatorTre.style.left="0%"
    getCarouselPopularMovies().then(e=>e.results).then(e=>{
        movieAdviceMoviesTre.innerHTML=""
        e.map(e=>{
            movieAdviceMoviesTre.innerHTML+=`
            <div class="movie-advice-movie" id=${e.id}>
             <img src ="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-advice-movie-poster">
             <div class="movie-advice-movie-name">${e.title}</div>
            </div>
            `
        })
        const arr = [...movieAdviceMoviesTre.children];

        arr.map((e)=>{
            e.addEventListener("click",()=>{
                console.log(e)
                window.location.href="detail.html"
                localStorage.setItem("detailId",e.id)
            })
        })
    })
    movieAdviceSelecterButtonTreLeft.style.color="white"
    movieAdviceSelecterButtonTreMidd.style.color="gray"
    movieAdviceSelecterButtonTreRight.style.color="gray"
    
})
movieAdviceSelecterButtonTreMidd.addEventListener("click",()=>{
    movieAdviceSelecterIndicatorTre.style.left="33%"
    getCarouselTopRatedMovies().then(e=>e.results).then(e=>{
        movieAdviceMoviesTre.innerHTML=""
        e.map(e=>{
            movieAdviceMoviesTre.innerHTML+=`
            <div class="movie-advice-movie" id=${e.id}>
             <img src ="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-advice-movie-poster">
             <div class="movie-advice-movie-name">${e.title}</div>
            </div>
            `
        })
        const arr = [...movieAdviceMoviesTre.children];

        arr.map((e)=>{
            e.addEventListener("click",()=>{
                console.log(e)
                window.location.href="detail.html"
                localStorage.setItem("detailId",e.id)
            })
        })
    })
    movieAdviceSelecterButtonTreLeft.style.color="gray"
    movieAdviceSelecterButtonTreMidd.style.color="white"
    movieAdviceSelecterButtonTreRight.style.color="gray"
})
movieAdviceSelecterButtonTreRight.addEventListener("click",()=>{
    movieAdviceSelecterIndicatorTre.style.left="66%"
    getCarouselUpcomingMovies().then(e=>e.results).then(e=>{
        movieAdviceMoviesTre.innerHTML=""
        e.map(e=>{
            movieAdviceMoviesTre.innerHTML+=`
            <div class="movie-advice-movie" id=${e.id}>
             <img src ="https://image.tmdb.org/t/p/original/${e.poster_path}" class="movie-advice-movie-poster">
             <div class="movie-advice-movie-name">${e.title}</div>
            </div>
            `
        })
        const arr = [...movieAdviceMoviesTre.children];

        arr.map((e)=>{
            e.addEventListener("click",()=>{
                console.log(e)
                window.location.href="detail.html"
                localStorage.setItem("detailId",e.id)
            })
        })
    })
    movieAdviceSelecterButtonTreLeft.style.color="gray"
    movieAdviceSelecterButtonTreMidd.style.color="gray"
    movieAdviceSelecterButtonTreRight.style.color="white"
})

const searchButton=document.querySelector(".search")
searchButton.addEventListener("click",()=>{
    window.location.href="detail.html"
              
})