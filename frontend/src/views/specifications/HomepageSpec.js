import React from 'react'
import { Link } from 'react-router-dom'

function HomepageSpec() {
  return (
    <div>
      <div className="container-fluid" style={{ paddingTop: "100px" }}>
        <div className="row">
          Intutive Specifications Homepage
        </div>
      </div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link class="nav-link" to="/IntutiveSpec/catfishFarming">catfishFarming</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  )
}

export default HomepageSpec
