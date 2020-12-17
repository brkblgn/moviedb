import React from 'react'

function ModalCard() {

  return (
    <div>
        
      <div class="modal fade " id="centralModalSm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">

        <div class="modal-dialog modal-lg black" role="document">


          <div class="modal-content black">
          
            <div class="modal-body">
              <div class="jumbotron text-center hoverable p-1 black">


        <div class="row black">

        
          <div class="col-md-5 offset-md-1 mx-3 my-3">

        
            <div class="view overlay">
              <img style={{height:370, width:300}} src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
   class="img-fluid" alt="Sample image for first version of blog listing"/>
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

          </div>
          <div class="col-md-6 text-md-left ml-3 mt-3">

        
              <h6 class="h2 pb-1 text-success">The Godfather</h6>

            
            <h4 class="h4 mb-4 white-text">Francis Ford Coppola</h4>

            <p class="font-weight-normal white-text mt-5"><b>Actors:</b> Marlon Brando, Al Pacino, James Caan, Richard S. Castellano</p>
            <p class="font-weight-normal white-text"><b>Country:</b> USA</p>
            <p class="font-weight-normal white-text"><b>Genre:</b> Crime, Drama</p>
            <p class="font-weight-normal white-text"><b>Released:</b> 24 Mar 1972</p>
            <p class="font-weight-normal white-text"><b>Awards:</b> Won 3 Oscars. Another 26 wins & 30 nominations.</p>

      

          </div>

        </div>

      </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success h3 btn-sm white-text" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  </div>
      
  )
}

export default ModalCard