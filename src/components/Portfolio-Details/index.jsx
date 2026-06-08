import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import profile from "../../assets/img/profile/selva_g_profile.jpg";
import './index.css';
import Loading from '../../common/Loading';
function PortfolioDetailsComponent({skillsData}) {
  const location=useLocation();
  const projectNavDetails=location.state && location.state.projectName;
 
  let projectDetailz= JSON.parse(localStorage.getItem("projectDetails"))
  return (
    <main className="main">
    {/* <Loading/> */}
    <div className="page-title">
      <div className="breadcrumbs">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={"/"} ><i className="bi bi-house"></i> Home</Link></li>
            <li className="breadcrumb-item"><Link to={"/"} state={{ setActiveSection: "portfolio" }}><i className="bi bi-bag-heart"></i> Portfolio</Link></li>
            <li className="breadcrumb-item active current"><i className="bi bi-card-checklist"></i> Project Details</li>
          </ol>
        </nav>
      </div>
      
    </div>

    {projectDetailz?.filter(project => project?.name === projectNavDetails?.name)?.map((projectData,index)=>(
    <React.Fragment key={index}>
    <div className="title-wrapper page-title container">
        <h1 style={{
            background: "linear-gradient(120deg, var(--heading-color), var(--accent-color))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>{projectData?.name}</h1>
      <p className="text-justify">{projectData?.description}</p>
    </div>
    <section id="portfolio-details" className="portfolio-details section">

      <div className="container" data-aos="fade-up">

        <div className="row gy-4 g-lg-5">
          <div className="col-lg-6 project-imgs">
            {projectData?.images.map((img, index) => (
              <img
                key={index}
                src={`${import.meta.env.BASE_URL}${projectData?.path}${img}`}
                className="img-fluid mb-4"
                alt=""
              />
            ))}
          </div>

          <div className="col-lg-6">

            <div className="position-sticky" style={{top: "40px"}}>
              <div className="portfolio-description">
                <h6 style={{borderLeft: "3px solid var(--accent-color)",paddingLeft:"5px"}}><i className="fa-solid fa-chalkboard-user me-1"></i>{projectData?.titleTech}</h6>
                <div className="text-justify d-flex flex-wrap" style={{ gap: "60px", margin: "45px 0"  }}>
                  {skillsData
                    .filter(skill => projectData?.technology.includes(skill.name))
                    .map((skill, index) => {
                        console.log(skill.svg)
                      return(
                      <div
                        className="d-flex align-items-center"
                        style={{
                          transitionDelay: `${skill.delay}ms`,
                          gap: "10px",
                          flex: "0 0 auto", 
                        }}
                        key={index}>
                        <div
                          className="skill-box icon-wrapper project-icon-wrapper"
                          // data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
                        >
                          {skill?.svg ? (
                            <span
                              className="icon"
                              style={{
                                  display: 'inline-block',
                                  width: '35px',
                                  height: '35px',
                                  background: skill.background,
                                  fill:skill.color,
                                  padding: skill?.name=="TypeScript" ? '2px 2px': '3px 8px',                                  
                                  borderRadius: '5px',
                                  position: 'absolute',
                                  top: '-20px',
                                }}
                              dangerouslySetInnerHTML={{ __html: skill.svg }}
                            />
                          ) : (
                            <i
                              style={{ color: skill?.color, background: skill.background }}
                              className={`${skill.icon}`}
                            ></i>
                          )}
                        </div>
                      </div>
                    )})}
                </div>

                <h6 style={{borderLeft: "3px solid var(--accent-color)",paddingLeft:"5px"}}><i className="fas fa-clipboard-list me-1"></i>{projectData?.subtitle1}</h6>
                <p className="text-justify">
                  {projectData?.subcontent1}
                </p>
                <h6 style={{borderLeft: "3px solid var(--accent-color)",paddingLeft:"5px"}}><i className="fas fa-exclamation-triangle me-1"></i>{projectData?.subtitle2}</h6>
                <p className="text-justify">
                  {projectData?.subcontent2}
                </p>
                <h6 style={{borderLeft: "3px solid var(--accent-color)",paddingLeft:"5px"}}><i className="fas fa-lightbulb me-1"></i>{projectData?.subtitle3}</h6>
                <p className="text-justify">
                  {projectData?.subcontent3}
                </p>

                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>I am a dedicated Full-Stack Web Developer and Software Engineer with strong expertise in Frontend development, Python & PHP backend engineering, and end-to-end web application architecture. I specialize in creating high-performance, user-friendly, and scalable digital solutions that deliver real business value.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img src={profile} className="testimonial-img" alt=""/>
                    <h3>Selvaganesh</h3>
                    <h4>Software Developer</h4>
                  </div>
                </div>

                <p>
                  Software Developer specializing in Frontend Engineering, Python & PHP Backend Development, and complete Web Application Architecture. I build digital experiences that are fast, intuitive, and scalable—turning ideas into smart, reliable software solutions.</p>
                {/* <p>
                  My work blends clean UI design, efficient backend logic, and scalable software architecture, enabling me to deliver complete, end-to-end web solutions. I love solving complex problems and turning ideas into fully functional applications that users enjoy and businesses rely on.</p> */}
              </div>

              <div className="portfolio-info mt-5">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong> {projectData?.category}</li>
                  <li><strong>Client</strong> {projectData?.client}</li>
                  <li><strong>Project date</strong> {projectData?.projectDate}</li>
                  <li><strong>Project URL</strong> <a href={projectData?.projectUrl} target='_blank' style={{color: "var(--accent-color)"}}>{projectData?.projectUrl}</a></li>
                  <li><a href={projectData?.projectUrl} target='_blank' className="btn-visit align-self-start btn-53 fw-bold">
                  
                  <div className="original">Visit Website</div>
                <div className="letters">
                  <span>V</span>
                  <span>i</span>
                  <span>s</span>
                  <span>i</span>
                  <span>t</span>
                  <span>&nbsp;</span>
                  <span>W</span>
                  <span>e</span>
                  <span>b</span>
                  <span>s</span>
                  <span>i</span>
                  <span>t</span>
                  <span>e</span>
                </div>
                  </a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
</React.Fragment>))}
  </main> 
  )
}

export default PortfolioDetailsComponent