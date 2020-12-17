import React from 'react'

function Button() {

  return (
    <div class="row ml-5 mt-2">
        <div className="col-9"></div>
    
    
      <div class="ml-5 col-2 float-right mt-1">
        <a class="btn btn-dark dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">Sırala</a>
  
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>      
    </div>
  </div>
      
  )
}

export default Button