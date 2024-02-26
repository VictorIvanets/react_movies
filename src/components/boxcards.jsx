import Card from "./card"

function BoxCards (props){

    const {movies = [], 
        addInfo = Function.prototype,
        // nextBtn = Function.prototype
    } = props



    return   <div>
    <div className ="boxcard">
        
    {movies.length ? movies.map(movie => (<Card key={movie.imdbID}{...movie} 
    addInfo={addInfo} 
    />

    )) : <div className="nothing">

        {/* <div className="containernoting">
	    <div className="loadernoting">
		<div className="loadernoting__line loadernoting__line-line--1"></div>
		<div className="loadernoting__line loadernoting__line-line--2"></div>
	    </div>
        </div> */}

        <h3>Нічого не знайдено</h3>
        </div>
    }
 
    </div>
   </div>
   
   }
   
   
   export default BoxCards

   // Here is your key: 12ea9b88
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&