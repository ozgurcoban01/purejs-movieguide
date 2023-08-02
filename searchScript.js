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

sessionStorage.setItem("currentPage",1)
sessionStorage.setItem("currentFilter","now_playing")

let currentFilter="Now Playing"

async function getMovies(){
    return await fetch("https://api.themoviedb.org/3/movie/"+sessionStorage.getItem("currentFilter")+"?api_key=0e0b406c41969d57b72a434bf8f8ca7a&page="+sessionStorage.getItem("currentPage")).then(res=>res.json())
}
setTimeout(() => {
    getMovies().then(e=>e.results).then((e)=>{
 
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
                sessionStorage.setItem("detailId",e.id)
                window.location.href="detail.html"
    
            })
        })
        
    
    })
}, 2300)




selecterButton.forEach((e)=>{
    e.addEventListener("click",()=>{
        sessionStorage.setItem("currentPage",1)
        pageSelecterFirst.innerText=1
        pageSelecterSecond.innerText=2
        pageSelecterThird.innerText=3
        pageSelecterFirst.classList.add("selected-selecter")
        pageSelecterSecond.classList.remove("selected-selecter")

        if(e.innerText=="Now Playing"){
            selectedFilter.innerText="NOW PLAYING"
            sessionStorage.setItem("currentFilter","now_playing")
            sessionStorage.setItem("currentPage",1)

            getMovies().then(e=>e.results).then((e)=>{
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
                        sessionStorage.setItem("detailId",e.id)
                        window.location.href="detail.html"
            
                    })
                })
                
            
            })
            

            selecterButtonNowPlaying.classList.add("selected-filter-button")
            selecterButtonPopular.classList.remove("selected-filter-button")
            selecterButtonTopRated.classList.remove("selected-filter-button")
            selecterButtonUpcoming.classList.remove("selected-filter-button")
            
        }else if(e.innerText=="Popular"){
            sessionStorage.setItem("currentFilter","popular")
            sessionStorage.setItem("currentPage",1)
            selectedFilter.innerText="POPULAR"
            getMovies().then(e=>e.results).then((e)=>{
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
                        sessionStorage.setItem("detailId",e.id)
                        window.location.href="detail.html"
            
                    })
                })
                
            
            })

            selecterButtonNowPlaying.classList.remove("selected-filter-button")
            selecterButtonPopular.classList.add("selected-filter-button")
            selecterButtonTopRated.classList.remove("selected-filter-button")
            selecterButtonUpcoming.classList.remove("selected-filter-button")
           
        }else if(e.innerText=="Top Rated"){
            sessionStorage.setItem("currentFilter","top_rated")
            sessionStorage.setItem("currentPage",1)
            selectedFilter.innerText="TOP RATED"
            getMovies().then(e=>e.results).then((e)=>{
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
                        sessionStorage.setItem("detailId",e.id)
                        window.location.href="detail.html"
            
                    })
                })
                
            
            })

            selecterButtonNowPlaying.classList.remove("selected-filter-button")
            selecterButtonPopular.classList.remove("selected-filter-button")
            selecterButtonTopRated.classList.add("selected-filter-button")
            selecterButtonUpcoming.classList.remove("selected-filter-button")
            
        }else if(e.innerText=="Upcoming"){
            sessionStorage.setItem("currentFilter","upcoming")
            sessionStorage.setItem("currentPage",1)
            selectedFilter.innerText="UPCOMING"
            getMovies().then(e=>e.results).then((e)=>{
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
                        sessionStorage.setItem("detailId",e.id)
                        window.location.href="detail.html"
            
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
            sessionStorage.setItem("currentPage",parseInt(e.innerText))
            pageSelecterFirst.innerText=parseInt(sessionStorage.getItem("currentPage"))-1
            pageSelecterSecond.innerText=parseInt(sessionStorage.getItem("currentPage"))
            pageSelecterThird.innerText=parseInt(sessionStorage.getItem("currentPage"))+1
          
            pageSelecterFirst.classList.remove("selected-selecter")
            pageSelecterSecond.classList.add("selected-selecter")
   
            getMovies().then(e=>e.results).then((e)=>{
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
                        sessionStorage.setItem("detailId",e.id)
                        window.location.href="detail.html"
            
                    })
                })
                
            
            })
        }else{

            sessionStorage.setItem("currentPage",parseInt(e.innerText))
            pageSelecterFirst.innerText=parseInt(sessionStorage.getItem("currentPage"))
            pageSelecterSecond.innerText=parseInt(sessionStorage.getItem("currentPage"))+1
            pageSelecterThird.innerText=parseInt(sessionStorage.getItem("currentPage"))+2
          
            pageSelecterFirst.classList.add("selected-selecter")
            pageSelecterSecond.classList.remove("selected-selecter")

            getMovies().then(e=>e.results).then((e)=>{
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
                        sessionStorage.setItem("detailId",e.id)
                        window.location.href="detail.html"
            
                    })
                })
                
            
            })
            
        }
        }

    })
});

pageSelecterLeft.addEventListener("click",()=>{
    if(pageSelecterFirst.classList.contains("selected-selecter")){
        return
    }else{
        if(pageSelecterFirst.innerText==1){
            sessionStorage.setItem("currentPage",pageSelecterFirst.innerText)
            pageSelecterFirst.innerText=parseInt(sessionStorage.getItem("currentPage"))
            pageSelecterSecond.innerText=parseInt(sessionStorage.getItem("currentPage"))+1
            pageSelecterThird.innerText=parseInt(sessionStorage.getItem("currentPage"))+2
          
            pageSelecterFirst.classList.add("selected-selecter")
            pageSelecterSecond.classList.remove("selected-selecter")
            getMovies().then(e=>e.results).then((e)=>{
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
                        sessionStorage.setItem("detailId",e.id)
                        window.location.href="detail.html"
            
                    })
                })
                
            
            })
        }else{
            sessionStorage.setItem("currentPage",pageSelecterFirst.innerText)
            pageSelecterFirst.innerText=parseInt(sessionStorage.getItem("currentPage"))-1
            pageSelecterSecond.innerText=parseInt(sessionStorage.getItem("currentPage"))
            pageSelecterThird.innerText=parseInt(sessionStorage.getItem("currentPage"))+1
          
            getMovies().then(e=>e.results).then((e)=>{
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
                        sessionStorage.setItem("detailId",e.id)
                        window.location.href="detail.html"
            
                    })
                })
                
            
            })

        }
    }
})

pageSelecterRight.addEventListener("click",()=>{
    sessionStorage.setItem("currentPage",pageSelecterThird.innerText)
    pageSelecterFirst.innerText=parseInt(sessionStorage.getItem("currentPage"))-1
    pageSelecterSecond.innerText=parseInt(sessionStorage.getItem("currentPage"))
    pageSelecterThird.innerText=parseInt(sessionStorage.getItem("currentPage"))+1

    pageSelecterFirst.classList.remove("selected-selecter")
    pageSelecterSecond.classList.add("selected-selecter")

    getMovies().then(e=>e.results).then((e)=>{
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
                sessionStorage.setItem("detailId",e.id)
                window.location.href="detail.html"
    
            })
        })
        
    
    })
})

const searchButton=document.querySelector(".search")
searchButton.addEventListener("click",()=>{
    window.location.href="search.html"
              
})
const logo=document.querySelector(".logo")
logo.addEventListener("click",()=>{
    window.location.href="index.html"
              
})