import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import GLightbox from 'glightbox';
function Portfolio({ projectDetails }) {
  const navigate=useNavigate();
  const [activeSection, setActiveSection] = useState('hero');

  const handleChatNavigate=(projectNames)=> {
      const projectName={
         name: projectNames,
      };
      navigate(`/portfolio-details`,{state:{projectName}})
      // navigate(`/portfolio-details`,{state:{projectName,setActiveSection: "portfolio"}})
   }
    useEffect(() => {
    // Init GLightbox
    const glightbox = GLightbox({
      selector: '.glightbox',
    });

    // Wait for images to load before initializing Isotope
    const grid = document.querySelector('.isotope-container');

    if (!grid) return;

    imagesLoaded(grid, function () {
      const iso = new Isotope(grid, {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        filter: '*',
        sortBy: 'original-order',
      });

      // Filter items on click
      const filters = document.querySelectorAll('.isotope-filters li');
      filters.forEach((filter) => {
        filter.addEventListener('click', function () {
          document.querySelector('.filter-active')?.classList.remove('filter-active');
          this.classList.add('filter-active');

          const filterValue = this.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });
        });
      });
    });
  }, [projectDetails]);

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
        <p>Explore my projects showcasing practical solutions, clean code, and modern full-stack development skills.</p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
            <ul className="portfolio-filters isotope-filters">
              <li data-filter="*" className="filter-active btn-55">
              <div className="original">All Work</div>
                <div className="letters">
                  <span>A</span>
                  <span>l</span>
                  <span>l</span>
                  <span>&nbsp;</span>
                  <span>W</span>
                  <span>o</span>
                  <span>r</span>
                  <span>k</span>
                </div>
              </li>
              <li data-filter=".filter-website" className='btn-55'>
              <div className="original">Web Sites</div>
                <div className="letters">
                  <span>W</span>
                  <span>e</span>
                  <span>b</span>
                  <span>&nbsp;</span>
                  <span>S</span>
                  <span>i</span>
                  <span>t</span>
                  <span>e</span>
                  <span>s</span>
                </div>
              </li>
              <li data-filter=".filter-webapplication"className='btn-55'>
              <div className="original">Web Applications</div>
                <div className="letters">
                  <span>W</span>
                  <span>e</span>
                  <span>b</span>
                  <span>&nbsp;</span>
                  <span>A</span>
                  <span>p</span>
                  <span>p</span>
                  <span>l</span>
                  <span>i</span>
                  <span>c</span>
                  <span>a</span>
                  <span>t</span>
                  <span>i</span>
                  <span>o</span>
                  <span>n</span>
                  <span>s</span>
                </div></li>
              {/* <li data-filter=".filter-motion">Motion</li>
              <li data-filter=".filter-brand">Branding</li> */}
            </ul>
          </div>

          <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
            {projectDetails
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((projectDetails,index)=>(

            
            <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${projectDetails?.filtercategory}`}>
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={`${import.meta.env.BASE_URL}${projectDetails?.path+projectDetails?.image}`} className="img-fluid" alt="" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href={`${import.meta.env.BASE_URL}${projectDetails?.path+projectDetails?.image}`} className="glightbox preview-link" data-gallery="portfolio-gallery-web"><i className="bi bi-eye"></i></a>
                      <button onClick={()=>handleChatNavigate(projectDetails?.link)} className="details-link"><i className="bi bi-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="category text-start">{projectDetails?.category}</span>
                      <span className="category text-end"><i className='fa-regular fa-calendar'></i> {projectDetails?.date}</span>
                    </div>                  
                  <h3>{projectDetails?.name}</h3>
                  <p>{projectDetails?.description}</p>
                </div>
              </div>
            </div>))}
          </div>

        </div>
        {/* End Portfolio Container */}

      </div>

    </section>
  )
}

export default Portfolio