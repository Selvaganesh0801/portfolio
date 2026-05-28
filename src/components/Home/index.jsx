import React, { useEffect, useState } from "react";
import profile from "../../assets/img/profile/sg_profile.png";
import profile1 from "../../assets/img/profile/sg_profile3.png";

function Home() {
  const [experience, setExperience] = useState(0);
  const images = [profile, profile1];
  const [index, setIndex] = useState(0);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true); // start blur

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setLoading(false); // remove blur after change
      }, 300); // blur transition time

    }, 5000);

    return () => clearInterval(interval);
  }, []);
  // Calculate years of experience dynamically
  useEffect(() => {
    const startDate = new Date("2024-03-01"); // Join date
    const now = new Date();

    const diffInMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    const yearsExperience = (diffInMonths / 12).toFixed(1); // e.g., 1.7 years
    setExperience(yearsExperience);
  }, []);

  // Counter animation for stats
  useEffect(() => {
    function animateCount(el, target, duration = 2000) {
      let start = 0;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);

        el.textContent = value + "+";

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target + "+";
        }
      }

      requestAnimationFrame(update);
    }

    function startCounterAnimation() {
      const counters = document.querySelectorAll(".stat-number");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target"));
        animateCount(counter, target);
      });
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounterAnimation();
            obs.disconnect(); // Run once
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector(".hero-stats");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h2>Building Performant and Scalable Interfaces</h2>
            <p className="lead">
              I specialize in modern front-end technologies to create fast, accessible, and maintainable web applications. From responsive layouts to dynamic UIs, I bring digital ideas to life with precision and creativity.
            </p>
            <div className="cta-buttons" data-aos="fade-up" data-aos-delay="300">
              <a href="#portfolio" className="btn btn-53 btn-primary">
              <div className="original">View My Work</div>
                <div className="letters">
                  <span>V</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                  <span>&nbsp;</span>
                  <span>M</span>
                  <span>y</span>
                  <span>&nbsp;</span>
                  <span>W</span>
                  <span>o</span>
                  <span>r</span>
                  <span>k</span>
                </div>
              </a>
              <a href="#contact" className="btn btn-54 btn-outline">
              <div className="original">Let's Connect</div>
                <div className="letters">
                  <span>L</span>
                  <span>e</span>
                  <span>t'</span>
                  <span>s</span>
                  <span>&nbsp;</span>
                  <span>C</span>
                  <span>o</span>
                  <span>n</span>
                  <span>n</span>
                  <span>e</span>
                  <span>c</span>
                  <span>t</span>
                </div>
              </a>

            </div>
            <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <span className="stat-number" data-target={experience}>0</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="10">0</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="10">0</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img
                src={images[index]}
                alt="Portfolio Hero Image"
                className="img-fluid"
                data-aos="zoom-out"
                data-aos-delay="300"
              />
              <div className="shape-1"></div>
              <div className="shape-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
