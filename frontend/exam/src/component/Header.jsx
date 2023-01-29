import React from 'react'

export default function Header(props) {
    return (
        <>
            
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">edacansu</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                <a className="nav-link" href="/list-question">Admin</a>
                <a className="nav-link" href="/user">User Exam</a>
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Sign out</a>
              </div>
            </div>
          </div>
        </nav>

        {/* navbar ends */}
            
        </>
    )
}
