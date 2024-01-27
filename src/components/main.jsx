import BoxCards from "./boxcards"
import React from "react"
import Preloader from "./preloader"
import Search from "./search"

class Main extends React.Component{
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount(){
    fetch("https://www.omdbapi.com/?apikey=12ea9b88&s=movies")
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search, loading: false}))
    .catch((err)=>{
        console.error(err);
        this.setState({loading: false})})
    }


    searchMovies = (str, type = "all")=>{
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=12ea9b88&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err)=>{
            console.error(err);
            this.setState({loading: false})})
    }



    
    render (){

    const {movies, loading} = this.state

    return  <main className ="container content">

    <div><Search searchMovies={this.searchMovies}/></div>


    {loading ? <div className="preloader"><Preloader/></div> 
    : (<BoxCards movies={movies}/>)}
    

    </main>
  

   }
   }
   
   
   export default Main

   // Here is your key: 12ea9b88
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&
