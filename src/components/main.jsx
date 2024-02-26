import BoxCards from "./boxcards"
import React, {useEffect, useState}from "react"
import Preloader from "./preloader"
import Search from "./search"
import MoviesInfo from "./moviesinfo"

function Main () {

let [movies, moviesSet] = useState("")
let [loading, loadingSet] = useState(true)
let [ioShow, ioShowSet] = useState(false)
let [moreInfo, moreInfoSet] = useState("")



const addInfo = (id)=> {

        fetch(`https://www.omdbapi.com/?apikey=12ea9b88&i=${id}`)
        .then(response => response.json())
        .then(data => {
            moreInfoSet(data)
        })
        .catch((err)=>{
            })
        
    ioShowSet(true)
    
    
}


const closeInfo = ()=>{
    ioShowSet(false)
    moreInfoSet("")
}



const searchMovies = (str, type = "all", next) => {
        loadingSet(true)
        fetch(`https://www.omdbapi.com/?apikey=12ea9b88&s=${str}${type !== "all" ? `&type=${type}` : ""}&page=${next}`)
        .then(response => response.json())
        .then(data => {
            moviesSet(data.Search)
            loadingSet(false)
        })
        .catch((err)=>{
            loadingSet(false)})
    }


    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=12ea9b88&s=movies&page=1`)
        .then(response => response.json())
        .then(data => {
            moviesSet(data.Search)
            loadingSet(false)

        })
        .catch((err)=>{
            loadingSet(false)})
        }, [])




    return  <main className ="container content">

    <div><Search searchMovies={searchMovies}/></div>


    {loading ? <div className="preloader"><Preloader/></div> 
    : (<BoxCards movies={movies} addInfo = {addInfo}
    />)}
    
    {ioShow && <MoviesInfo 
    moreInfo = {moreInfo} 
    closeInfo = {closeInfo} 
    />}

    </main>
  

   
   }
   
   
   export default Main

   // Here is your key: 12ea9b88
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&
