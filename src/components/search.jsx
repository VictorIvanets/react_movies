import React from "react"


class Search extends React.Component{
state = {
    search: "",
    type: "",
}


handleKey = (event)=>{
    if (event.key === "Enter"){
    this.props.searchMovies(this.state.search)
    }
}


hendelFilter = (event)=>{
    this.setState(()=>({type: event.target.dataset.type}), ()=>{
        this.props.searchMovies(this.state.search, this.state.type)
    })
 
}


render(){


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
    value={this.state.search}
    onChange={(e)=> this.setState({search: e.target.value})}
    onKeyDown={this.handleKey}
    />
    <button onClick={()=>{this.props.searchMovies(this.state.search)}} className="search__btn">Ok</button>
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
    onChange={this.hendelFilter}
    checked={this.state.type ==="all"}
    />
    <label for="movser">Кіно та серіали</label>

    <input 
    id="mov"
    className="select__input" 
    type="radio" 
    data-type="movie"
    onChange={this.hendelFilter}
    checked={this.state.type ==="movie"}
    />
    <label for="mov">Кіно</label>

    <input 
    id="serial"
    className="select__input" 
    type="radio"
    data-type="series" 
    onChange={this.hendelFilter}  
    checked={this.state.type ==="series"}       
    />
    <label for="serial">Серіали</label>
    
   </div>
   </div>
        
    </div>
    </details>
</div>

    
}
   }
   
   
   export default Search