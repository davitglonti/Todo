import React from 'react'
import '../Css/ErrorPage.css'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div>
    <h1>404 Error Page </h1>
   
    <section className="error-container">
      <span className="four"><span className="screen-reader-text">4</span></span>
      <span className="zero"><span className="screen-reader-text">0</span></span>
      <span className="four"><span className="screen-reader-text">4</span></span>
    </section>
    <div className="link-container">
     <Link to={'http://localhost:3000/SignIn'} className="more-link"> Back To Previous Page </Link> 
    </div>
  </div>
  )
}

export default ErrorPage