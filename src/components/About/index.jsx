import React, { useState, useEffect } from 'react';
import aboutImg from "../../assets/img/profile/selva_g_profile.jpg";
import signature from "../../assets/img/profile/imgi_3_img-removebg-preview1.png"
function About() {

  const [age, setAge] = useState(null);

  useEffect(() => {
    const birthYear = 2001;
    const birthMonth = 1; // October
    const birthDay = 8;    // your full birthday
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthYear;

    const hasBirthdayPassed =
      today.getMonth() + 1 > birthMonth ||
      (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay);

    if (!hasBirthdayPassed) {
      calculatedAge -= 1;
    }

    setAge(calculatedAge);
  }, []);
  return (
    <section id="about" className="about section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
        <p>
        My goal is to build web experiences that are visually appealing, highly functional, and optimized for performance — with a focus on user satisfaction and usability.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row align-items-center">
          <div className="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
            <div className="about-image">
              <img src={aboutImg} alt="Profile Image" className="img-fluid rounded-4"/>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <span className="subtitle">About Me</span>

              <h2>Front-End Developer with a Focus on Modern Web</h2>

              <p className="lead mb-4">
                I build scalable and efficient front-end applications using frameworks like React, Vue, and Next.js. My goal is to write clean, reusable code that powers engaging user experiences.
              </p>

              <p className="mb-4">
                I’m constantly learning and exploring new tools, from CSS frameworks like Tailwind to performance optimization techniques that make the web faster and more accessible.
              </p>

              <div className="personal-info">
                <div className="row g-4">
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Name</span>
                      <span className="value">Selvaganesh</span>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Phone</span>
                      <span className="value">9488793821</span>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Age</span>
                      <span className="value">{age} Years</span>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Email</span>
                      <span className="value" style={{wordBreak:"break-all"}}>selvaganeshkselva@gmail.com</span>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Occupation</span>
                      <span className="value">Software Developer</span>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Nationality</span>
                      <span className="value">Indian</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="signature mt-4">
                
                <div className="signature-info">
                  <div className="signature-image mb-3">
                  <img src={signature} alt="" className="img-fluid"/>
                </div>
                  <p>Designing with Purpose. Developing with Passion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About