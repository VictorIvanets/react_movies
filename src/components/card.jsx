import React, {useState}from "react"
import MoviesInfo from "./moviesinfo"


function Card (props){


    const{
        Title: title,
        Year: year,
        Type: type,
        imdbID: id,
        Poster: poster,
        addInfo = Function.prototype,
    } = props

  

    return   <div className ="card">
    
    <div className="card__poster">

{ poster === 'N/A' ?
    <img className= "card__img" src={`https://via.placeholder.com/200x280?text=${title}`} alt="poster" /> :
    <img onClick={()=> addInfo(id)} className= "card__img" src={poster} alt="poster" />

}
   </div>



   <div className="card__type">{type}</div>
   <div className="card__title">{title}</div>
   <div className="card__year">{year}</div>

   

   </div>
   
   }
   
   
   export default Card