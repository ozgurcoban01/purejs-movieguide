const listMovies=document.querySelector(".list-movies")
const listMoviesSort=document.querySelector(".list-movies-sort")
const selectedFilter=document.querySelector(".selected-filter")
const selecterButton=document.querySelectorAll(".list-selecter-button")
const selecterButtonNowPlaying=document.querySelector(".list-selecter-now-playing")
const selecterButtonPopular=document.querySelector(".list-selecter-popular")
const selecterButtonTopRated=document.querySelector(".list-selecter-top-rated")
const selecterButtonUpcoming=document.querySelector(".list-selecter-upcoming")
const pageSelecterFirst=document.querySelector(".page-selecter-first")
const pageSelecterSecond=document.querySelector(".page-selecter-second")
const pageSelecterThird=document.querySelector(".page-selecter-third")
const pageSelecterLeft=document.querySelector(".page-selecter-left")
const pageSelecterRight=document.querySelector(".page-selecter-right")
const pageSelecters=document.querySelectorAll(".page-selecter")

pageSelecterLeft.innerText="<"
pageSelecterRight.innerText=">"
pageSelecterFirst.innerText="1"
pageSelecterSecond.innerText="2"
pageSelecterThird.innerText="3"

localStorage.setItem("currentPage",1)
localStorage.setItem("currentFilter","Now Playing")

let currentFilter="Now Playing"


async function getNowPlayingMoviesFirst(){
    return await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0e0b406c41969d57b72a434bf8f8ca7a&page=1").then(res=>res.json())
}
async function getNowPlayingMovies(param){
    return await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0e0b406c41969d57b72a434bf8f8ca7a&page="+param).then(res=>res.json())
}
async function getPopularFilms(param){
    return await fetch("https://api.themoviedb.org/3/movie/popular?api_key=0e0b406c41969d57b72a434bf8f8ca7a&page="+param).then(res=>res.json())
}
async function getTopRatedMovies(param){
    return await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0e0b406c41969d57b72a434bf8f8ca7a&page="+param).then(res=>res.json())
}
async function getUpcomingFilms(param){
    return await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=0e0b406c41969d57b72a434bf8f8ca7a&page="+param).then(res=>res.json())
}

getNowPlayingMoviesFirst().then(e=>e.results).then((e)=>{
    listMoviesSort.innerHTML=""
    e.map(e=>{
        listMoviesSort.innerHTML+=`
        <div class=" list-movie"  id=${e.id}>
          <div " class="list-movie-poster "><img  class="poster-image  rounded " src="https://image.tmdb.org/t/p/original/${e.poster_path}"></div>
         <div class="list-movie-name p-1 rounded">${e.title}</div>
        <div class="list-movie-score p-1 rounded">${e.vote_average}</div>
    </div>
        `
    })

    const arr = [...listMoviesSort.children];
    arr.map((e)=>{
        e.addEventListener("click",()=>{
            console.log(e)
            localStorage.setItem("detailId",e.id)
            window.location.href="detail.html"

        })
    })
    

})



selecterButton.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(e.innerText=="Now Playing"){

            localStorage.setItem("currentFilter","Now Playing")

            getPopularFilms(1).then(e=>e.results).then((e)=>{
                listMoviesSort.innerHTML=""
                e.map(e=>{
                    listMoviesSort.innerHTML+=`
                    <div class=" list-movie"  id=${e.id}>
                      <div " class="list-movie-poster "><img  class="poster-image  rounded " src="https://image.tmdb.org/t/p/original/${e.poster_path}"></div>
                     <div class="list-movie-name p-1 rounded">${e.title}</div>
                    <div class="list-movie-score p-1 rounded">${e.vote_average}</div>
                </div>
                    `
                })
                const arr = [...listMoviesSort.children];
            arr.map((e)=>{
                e.addEventListener("click",()=>{
                    console.log(e)
                    window.location.href="detail.html"
                    localStorage.setItem("detailId",e.id)
                })
            })
            })

            selecterButtonNowPlaying.classList.add("selected-filter-button")
            selecterButtonPopular.classList.remove("selected-filter-button")
            selecterButtonTopRated.classList.remove("selected-filter-button")
            selecterButtonUpcoming.classList.remove("selected-filter-button")
            
        }else if(e.innerText=="Popular"){
            localStorage.setItem("currentFilter","Popular")
            getTopRatedMovies(1).then(e=>e.results).then((e)=>{
                listMoviesSort.innerHTML=""
                e.map(e=>{
                    listMoviesSort.innerHTML+=`
                    <div class=" list-movie"  id=${e.id}>
                      <div " class="list-movie-poster "><img  class="poster-image  rounded " src="https://image.tmdb.org/t/p/original/${e.poster_path}"></div>
                     <div class="list-movie-name p-1 rounded">${e.title}</div>
                    <div class="list-movie-score p-1 rounded">${e.vote_average}</div>
                </div>
                    `
                })
                const arr = [...listMoviesSort.children];
                arr.map((e)=>{
                    e.addEventListener("click",()=>{
                        console.log(e)
                        window.location.href="detail.html"
                        localStorage.setItem("detailId",e.id)
                    })
                })
            })

            selecterButtonNowPlaying.classList.remove("selected-filter-button")
            selecterButtonPopular.classList.add("selected-filter-button")
            selecterButtonTopRated.classList.remove("selected-filter-button")
            selecterButtonUpcoming.classList.remove("selected-filter-button")
           
        }else if(e.innerText=="Top Rated"){
            localStorage.setItem("currentFilter","Top Rated")
            getNowPlayingMovies(1).then(e=>e.results).then((e)=>{
                listMoviesSort.innerHTML=""
                e.map(e=>{
                    listMoviesSort.innerHTML+=`
                    <div class=" list-movie"  id=${e.id}>
                      <div " class="list-movie-poster "><img  class="poster-image  rounded " src="https://image.tmdb.org/t/p/original/${e.poster_path}"></div>
                     <div class="list-movie-name p-1 rounded">${e.title}</div>
                    <div class="list-movie-score p-1 rounded">${e.vote_average}</div>
                </div>
                    `
                })
                const arr = [...listMoviesSort.children];
            arr.map((e)=>{
                e.addEventListener("click",()=>{
                    console.log(e)
                    window.location.href="detail.html"
                    localStorage.setItem("detailId",e.id)
                })
            })
            })

            selecterButtonNowPlaying.classList.remove("selected-filter-button")
            selecterButtonPopular.classList.remove("selected-filter-button")
            selecterButtonTopRated.classList.add("selected-filter-button")
            selecterButtonUpcoming.classList.remove("selected-filter-button")
            
        }else if(e.innerText=="Upcoming"){
            localStorage.setItem("currentFilter","Upcoming")
            getUpcomingFilms(1).then(e=>e.results).then((e)=>{
                listMoviesSort.innerHTML=""
                e.map(e=>{
                    listMoviesSort.innerHTML+=`
                    <div class=" list-movie"  id=${e.id}>
                      <div " class="list-movie-poster "><img  class="poster-image  rounded " src="https://image.tmdb.org/t/p/original/${e.poster_path}"></div>
                     <div class="list-movie-name p-1 rounded">${e.title}</div>
                    <div class="list-movie-score p-1 rounded">${e.vote_average}</div>
                </div>
                    `
                })
                const arr = [...listMoviesSort.children];
                arr.map((e)=>{
                    e.addEventListener("click",()=>{
                        console.log(e)
                        window.location.href="detail.html"
                        localStorage.setItem("detailId",e.id)
                    })
                })
            })

            selecterButtonNowPlaying.classList.remove("selected-filter-button")
            selecterButtonPopular.classList.remove("selected-filter-button")
            selecterButtonTopRated.classList.remove("selected-filter-button")
            selecterButtonUpcoming.classList.add("selected-filter-button")
         
        } 
    })
});

pageSelecters.forEach(e => {
    e.addEventListener("click",()=>{
      
        if(e.classList.contains("page-button")){
         if(e.innerText!=1){
            console.log(e)
         }
        }

    })
});




const searchButton=document.querySelector(".search")
searchButton.addEventListener("click",()=>{
    window.location.href="search.html"
              
})
const logo=document.querySelector(".logo")
logo.addEventListener("click",()=>{
    window.location.href="index.html"
              
})