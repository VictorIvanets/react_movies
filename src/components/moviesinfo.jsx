import React, {useEffect} from "react"



function MoviesInfo(props) {

const{
    imdbID: id,
    moreInfo: moreInfo,
    closeInfo = Function.prototype,
}  = props

const{
    Actors: Actors,
    Plot: Plot,
    Year: Year,
    Title: Title,
    Released: Released,
    Genre: Genre,
    Writer: Writer,
    Director: Director,
    Runtime: Runtime,
    Language: Language,
    Country: Country,
    Poster: Poster,
    imdbRating: imdbRating
} = moreInfo


function StringToUppercase(n) {
    const up = n.toUpperCase()
    return up}

    return <div className="info">
    
    <div className="info__poster">
    {Poster === 'N/A' ?
<img className= "info__poster__img" src={`https://via.placeholder.com/200x280?text=${Title}`} alt="poster" /> :
   <img className= "info__poster__img" src={Poster} alt="poster" />}
    </div>

<div className="info__content">
        <h1 className="info__content__h1">{StringToUppercase(`${Title}`)}</h1>
        <h2 className="info__content__h2">Year: {Year}</h2>
        <h2 className="info__content__h2">Country: {Country}</h2>
        <div className="info__content__text">Genre: {Genre}</div>
        <div className="info__content__text">Runtime: {Runtime}</div>
        <div className="info__content__text">Plot: {Plot}</div>
        <div className="info__content__text">Writer: {Writer}</div>
        <div className="info__content__text">Director: {Director}</div>
        <div className="info__content__text">Actors: {Actors}</div>
        <div className="info__content__text">Language: {Language}</div>
        <div className="info__content__text">Released: {Released}</div>
        <h2 className="info__content__h2__rating"
        style={ imdbRating >=8 ? {background: "#9c0000"}:imdbRating >=7 ? {background: "#d66000"}:imdbRating >=6 ? {background: "#d2d600"}:{background: "#301809"}
    
        }> imdb Rating: {imdbRating} </h2>


        <div onClick={()=>closeInfo()} className="info__content__close">X</div>


</div>

    </div>


}

export default MoviesInfo


