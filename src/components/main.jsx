import BoxCards from "./boxcards"
import React, {useEffect, useState}from "react"
import Preloader from "./preloader"
import Search from "./search"

function Main () {

let [movies, moviesSet] = useState("")
let [loading, loadingSet] = useState(true)


    const searchMovies = (str, type = "all") => {
        loadingSet(true)
        fetch(`https://www.omdbapi.com/?apikey=12ea9b88&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
        .then(response => response.json())
        .then(data => {
            moviesSet(data.Search)
            loadingSet(false)
        })
        .catch((err)=>{
            loadingSet(false)})
    }

    useEffect(()=>{
        fetch("https://www.omdbapi.com/?apikey=12ea9b88&s=movies")
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
    : (<BoxCards movies={movies}/>)}
    

    </main>
  

   
   }
   
   
   export default Main

   // Here is your key: 12ea9b88
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&
