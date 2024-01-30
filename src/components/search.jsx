import React, {useState} from "react"


function Search (props){
const {searchMovies = Function.prototype} = props
const [search, searchState] = useState("")
const [type, typeState] = useState("all")


const handleKey = (event)=>{
    if (event.key === "Enter"){
    searchMovies(search, type)
    }
}


const hendelFilter = (event)=>{
    typeState(event.target.dataset.type)
    searchMovies(search, event.target.dataset.type)
}


    return <div className="selectbar">
    <details className="searchcont__boxsearch">
    <summary className="searchcont__boxsearch__select">Пошук</summary>
    <div>
    <div className="search">
    <div className ="search__box">

    <input 
    className="search__input" 
    placeholder="назва фільму англійською" 
    type="search" 
    value={search}
    onChange={(e)=> searchState(e.target.value)}
    onKeyDown={handleKey}
    />
    <button onClick={()=>{searchMovies(search, type)}} className="search__btn">Ok</button>
   </div>
   </div>    
    </div>
    </details>
    <details className="select__boxsearch">
    <summary className="select__boxsearch__select">Вибір</summary>
    <div>
    <div className="select">
    <div className ="select__box">
    <input 
    id="movser"
    className="select__input" 
    type="radio" 
    data-type="all"
    onChange={hendelFilter}
    checked={type ==="all"}
    />
    <label for="movser">Кіно та серіали</label>

    <input 
    id="mov"
    className="select__input" 
    type="radio" 
    data-type="movie"
    onChange={hendelFilter}
    checked={type ==="movie"}
    />
    <label for="mov">Кіно</label>

    <input 
    id="serial"
    className="select__input" 
    type="radio"
    data-type="series" 
    onChange={hendelFilter}  
    checked={type ==="series"}       
    />
    <label for="serial">Серіали</label>
    
   </div>
   </div>
        
    </div>
    </details>
</div>

    

   }
   
   
   export default Search