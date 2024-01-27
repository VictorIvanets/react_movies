import React from "react"

class Select extends React.Component{
state = {
    type: "",
}


// handleKey = (event)=>{
//     if (event.key === "Enter"){
//     this.props.searchMovies(this.state.type)
//     }
// }

hendelFilter = (event)=>{
    this.setState(()=>({type: event.target.dataset.type}), ()=>{
        this.props.searchMovies(this.state.type)
    })

    
}


render(){
    return   
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
}
   }
   
   
   export default Select