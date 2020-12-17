import React from 'react'

function Card() {

  return (
      <div>
         <nav style={{width:550, height:70}} className="navbar navbar-expand-lg navbar-dark black">

          <a style={{fontSize:30, color:"white"}} className="navbar-brand"><i className="fas fa-video"></i> FilmSitesi</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="basicExampleNav">

              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
              </ul>

              <form style={{marginLeft:780}} class="form-inline">
                <div class="md-form my-0">
                  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                </div>
              </form>
            </div>

          </nav>
      </div>




  )
}

export default Card


