import React, {useState} from "react"


function Search (props){
const {searchMovies = Function.prototype
} = props
const [search, searchState] = useState("")
const [type, typeState] = useState("all")
let [next, nextSet] = useState(1)






const nextBtn = () =>{
    nextSet(++next)
    searchMovies(search, type, next)
}


const prewBtn = () =>{
    
    if (next > 1 ){
        nextSet(--next)
     } 
    if (next <= 1 ){
        nextSet(1)
     } 
    searchMovies(search, type, next)
}
console.log(next)


const handleKey = (event)=>{
    if (event.key === "Enter"){
    searchMovies(search, type, next)
    }
}


const hendelFilter = (event)=>{
    typeState(event.target.dataset.type)
    searchMovies(search, event.target.dataset.type, next)
}


    return <div className="selectbar">
    <button onClick={()=>{nextBtn()}} className="search__btn2">Next</button>
    <button onClick={()=>{prewBtn()}} className="search__btn3">Prew</button>
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