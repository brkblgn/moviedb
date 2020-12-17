import React from 'react'
import ModalCard from './ModalCard'

function Card() {

  return (
    <div className="row">

      <div className="col-sm-2 m-5 mb-2" data-toggle="modal" data-target="#centralModalSm"> 
      <div className="card" style={{height:590, width:270}}>      
        <div  className="view overlay">
          <img className="card-img-top"style={{height:350}} src={"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"}
            alt="Card image cap"/>
          <button>
            <div className="mask rgba-white-slight"></div>
          </button>
        </div>

        
        <div className="card-body black white-text">

        
              <h4 className="card-title text-center">The Dark Knight</h4>
              <div className="row">
                <p className="col-4 card-text ml-4">2008</p>
                <p className="col-6 card-text"><i className="fas fa-star"></i> IMDB: 9.0</p>
              </div>
            
              <p className="card-text white-text mb-4 ml-2">When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. </p>
            
        
        </div>

      </div>
      </div>
      <div className="col-sm-2 m-5 mb-2" data-toggle="modal" data-target="#centralModalSm"> 
      <div className="card" style={{height:590, width:270}}>      
        <div  className="view overlay" style={{backgroundColor:"black"}}>
          <img className="card-img-top"style={{height:330}} src={"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
            alt="Card image cap"/>
          <button>
            <div className="mask rgba-white-slight"></div>
          </button>
        </div>

        
        <div className="card-body black white-text">

        
              <h4 className="card-title text-center">The Godfather: Part II</h4>
              <div className="row">
                <p className="col-4 card-text ml-4">1974</p>
                <p className="col-6 card-text"><i className="fas fa-star"></i> IMDB: 9.0</p>
              </div>
            
              <p className="card-text white-text mb-4 ml-2">The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.</p>
            
        
        </div>

      </div>
      </div>

      <div className="col-sm-2 m-5 mb-2" data-toggle="modal" data-target="#centralModalSm"> 
      <div className="card" style={{height:590, width:270}}>      
        <div  className="view overlay">
          <img className="card-img-top"style={{height:350}} src={"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}
            alt="Card image cap"/>
          <button>
            <div className="mask rgba-white-slight"></div>
          </button>
        </div>

        
        <div className="card-body black white-text">

        
              <h4 className="card-title text-center">The Shawshank Redemption</h4>
              <div className="row">
                <p className="col-4 card-text ml-4">1994</p>
                <p className="col-6 card-text"><i className="fas fa-star"></i> IMDB: 9.3</p>
              </div>
            
              <p className="card-text white-text mb-4 ml-2">Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.</p>
            
        
        </div>

      </div>
      </div>

      

      <div className="col-sm-2 m-5 mb-2" data-toggle="modal" data-target="#centralModalSm"> 
      <div className="card" style={{height:590, width:270}}>      
        <div  className="view overlay" style={{backgroundColor:"black"}}>
          <img className="card-img-top" style={{height:350}} src={"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
            alt="Card image cap"/>
          <button>
            <div className="mask rgba-white-slight"></div>
          </button>
        </div>

        
        <div className="card-body black white-text">

        
              <h4 className="card-title text-center">The Godfather</h4>
              <div className="row">
                <p className="col-4 card-text ml-4">1972</p>
                <p className="col-6 card-text"><i className="fas fa-star"></i> IMDB: 9.2</p>
              </div>
            
              <p className="card-text white-text mb-4 ml-2">The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.</p>
            
        
        </div>

      </div>
      </div>


      <ModalCard/>    


      </div>
  )
}

export default Card;