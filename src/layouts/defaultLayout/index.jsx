import React from 'react'
import TopNav from '../../shared/TopNav'
import Footer from '../../shared/Footer'

function DefaultLayout(props) {
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
        <TopNav/>
        <>{props.children}</>
        <Footer/>
<button 
        id="scroll-top" 
        onClick={scrollToTop}
        className="scroll-top d-flex align-items-center justify-content-center active border-0"
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>    </>
  )
}

export default DefaultLayout