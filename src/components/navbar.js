import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/navbar.css"

function navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/project">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/skill">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  )
}

export default navbar