const divid=document.querySelector(".divid")
const logo=document.querySelector(".logo")
const imgAvarage=document.querySelector(".imgAvarage")
const firstSearchPage=document.querySelector(".first-search-page")
const firstSearchPageEffectColor=document.querySelector(".first-search-page-background-effect")
const moviePoster=document.querySelector(".movie-poster")
const movieName=document.querySelector(".movie-name")
const movieScore=document.querySelector(".movie-score")
const moviePosterInner=document.querySelector(".movie-poster-inner")
const movieCategories=document.querySelector(".movie-categories")
const movieCompanies=document.querySelector(".movie-companies")
const movieLanguages=document.querySelector(".movie-languages")
const movieAdviceSelecterButtonOneLeft=document.querySelector(".movie-advice-selecter-1-l")
const movieAdviceSelecterButtonOneRight=document.querySelector(".movie-advice-selecter-1-r")
const movieAdviceSelecterIndicatorOne=document.querySelector(".movie-advice-selecter-selection-1")
const movieAdviceMoviesOne=document.querySelector(".movie-advice-movies-1")

async function getCarouselTopRatedMovies(){
    return await fetch("https://api.themoviedb.org/3/movie/"+localStorage.getItem("detailId")+"/recommendations?api_key=0e0b406c41969d57b72a434bf8f8ca7a").then(res=>res.json())
}
async function getCarouselPopularMovies(){
    return await fetch("https://api.themoviedb.org/3/movie/"+localStorage.getItem("detailId")+"/similar?api_key=0e0b406c41969d57b72a434bf8f8ca7a").then(res=>res.json())
}

logo.addEventListener("click",()=>{
    window.location.href="index.html"
              
})

async function getBackdropPoster(){
    return await fetch("https://api.themoviedb.org/3/movie/"+localStorage.getItem("detailId")+"?api_key=0e0b406c41969d57b72a434bf8f8ca7a").then(res=>res.json())
}

getBackdropPoster().then((e)=>{
    firstSearchPage.style.backgroundImage="url(https://image.tmdb.org/t/p/original/"+e.backdrop_path+")"
    moviePosterInner.src="https://image.tmdb.org/t/p/original/"+e.poster_path
    movieName.innerText=e.title
    movieScore.innerText=e.vote_average
    e.genres.map((e)=>{
        movieCategories.innerHTML+=`
        <div class="movie-category p-2 m-2 rounded">${e.name}</div>
        `
    })
    e.production_companies.map((e)=>{
        movieCompanies.innerHTML+=`
        <div class="movie-company p-2 m-2 rounded">${e.name}</div>
        `
    })
    e.spoken_languages.map((e)=>{
        movieLanguages.innerHTML+=`
        <div class="movie-language p-2 m-2 rounded">${e.name}</div>
        `
    })
})



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
