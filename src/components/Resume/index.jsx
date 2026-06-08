import React, { useEffect } from 'react'
import { Tooltip } from "bootstrap";

function Resume() {
  useEffect(() => {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  [...tooltipTriggerList].forEach(
    (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
  );
}, []);
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        {/* <h2>Resume</h2> */}
        <h2
  data-bs-toggle="tooltip"
  data-bs-placement="top"
  title="Download Resume"
  style={{ cursor: "pointer",display:'inline' }}
  onClick={() => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}resume/Selvaganesh_Frontend_Developer_ReactJS_2Yrs.pdf`;
    link.download = "Selvaganesh_Frontend_Developer_ReactJS_2Yrs.pdf";
    link.click();
  }}
>
  Resume
  <i className="resume-btndw bi bi-download"></i>
  </h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
        <p>Python Full-Stack and Front-End Developer focused on building responsive interfaces and scalable back-end systems with clean, efficient code.</p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row">
          <div className="col-12">
            <div className="resume-wrapper">
              <div className="resume-block" data-aos="fade-up">
                <h2>Work Experience</h2>
                <p className="lead">Developed and maintained efficient software solutions, collaborated on feature design, and optimized application performance while ensuring code quality and best development practices.</p>

                <div className="timeline">
                  <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="timeline-left">
                      <h4 className="company">Hermon Solutions</h4>
                      <span className="period">February 2025 – Present</span>
                    </div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-right">
                      <h3 className="position">Team Lead</h3>
                      <p className="description">Lead a passionate development team, turning ideas into fully functional solutions. </p>
                      <ul>
                        <li>Help plan projects and ensure work is completed on time.</li>
                        <li>Support team members and provide technical direction when needed.</li>
                        <li>Solve issues quickly to keep projects running smoothly.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                    <div className="timeline-left">
                      <h4 className="company">Hermon Solutions</h4>
                      <span className="period">July 2024 - February 2025</span>
                    </div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-right">
                      <h3 className="position">Software Developer</h3>
                      <p className="description">
                        Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.
                      </p>
                      <ul>
                        <li>Led the design, development, and deployment of full-stack web applications using Python, Django/Flask, JavaScript, and modern front-end frameworks.</li>
                        <li>Architected backend services, RESTful APIs, and database structures to ensure scalable, secure, and high-performance application functionality.</li>
                        <li>Collaborated with and delegated tasks to a 7-member development team, providing technical guidance across backend, frontend, and integration tasks.</li>
                        <li>Reviewed and validated code, ensuring adherence to best practices, clean architecture, and high-quality software delivery.</li>
                      </ul>
                      <p></p>
                    </div>
                  </div>

                  <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                    <div className="timeline-left">
                      <h4 className="company">Stepping Hermon Solutions</h4>
                      <span className="period">March 2024 - July 2024 </span>
                    </div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-right">
                      <h3 className="position">Python Full-Stack Developer</h3>
                      <p className="description">Started with a one-month internship, stepping into hands-on development work across both front-end and back-end systems. Continued as a trainee for three months, strengthening core skills in building scalable, efficient, and user-focused applications. Focused on writing clean code, ensuring robust functionality, and contributing to smooth, high-quality product experiences.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume-block" data-aos="fade-up" data-aos-delay="100">
                <h2>My Education</h2>
                <p className="lead">A background in computer science and design that fuels my passion for front-end development.</p>

                <div className="timeline">
                  <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="timeline-left">
                      <h4 className="company">Greens Technologies</h4>
                      <span className="period">2023</span>
                    </div>
                    <div className="timeline-dot"></div>
<div className="timeline-right">
  <h3 className="position">Python Full Stack Development</h3>
  <p className="description">
    Trained in front-end and back-end technologies including HTML, CSS, JavaScript, Python, Django, and databases. Gained hands-on experience in building dynamic and responsive web applications.
  </p>
</div>

                  </div>

                  <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                    <div className="timeline-left">
                      <h4 className="company">Bharathidasan University</h4>
                      <span className="period">2021 - 2023</span>
                    </div>
                    <div className="timeline-dot"></div>
<div className="timeline-right">
  <h3 className="position">Master of Computer Applications (MCA)</h3>
  <p className="description">
    Gained in-depth knowledge of software development, data structures, algorithms, and modern web technologies — building a strong foundation for real-world application development.
  </p>
</div>

                  </div>

                  <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                    <div className="timeline-left">
                      <h4 className="company">Bharathidasan University</h4>
                      <span className="period">2018 - 2021</span>
                    </div>
                   <div className="timeline-dot"></div>
<div className="timeline-right">
  <h3 className="position">Bachelor of Computer Applications (BCA)</h3>
  <p className="description">
    Built a strong foundation in programming, databases, and computer systems. Developed practical skills through projects in web development and software engineering.
  </p>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Resume