import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const sections = ['hero', 'about', 'resume', 'portfolio','portfolio-details', 'services', 'contact'];

function TopNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
// console.error(activeSection,"act")
  const handleScroll = (id) => {
    const OFFSET = 80; 
    const el = document.getElementById(id);

    if (el) {
      const yOffset = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // ⭐ When route state contains setActiveSection -> scroll to section
  useEffect(() => {
    if (location.state?.setActiveSection) {
      const sectionId = location.state.setActiveSection;
      setActiveSection(sectionId);

      // Scroll to the required section
      setTimeout(() => {
        handleScroll(sectionId);
      }, 200); // Small delay to ensure home page loads
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0,
    });

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <header id="header" className={`header d-flex align-items-center sticky-top ${menuOpen ? "mobile-nav-active" : ""}`}>
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <Link to={"/"} className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 onClick={() => handleScroll('hero')} className="sitename">
              Portfolio
            </h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link to={"/"} state={{ setActiveSection: "hero" }} onClick={() => handleScroll('hero')} className={`cursor-pointer ${activeSection==='hero'?"active":""}`}><i className="fa-solid fa-house mx-1"></i> Home</Link></li>
              <li><Link to={"/"} state={{ setActiveSection: "about" }} onClick={() => handleScroll('about')} className={`cursor-pointer ${activeSection==='about'?"active":""}`}><i className="fa-solid fa-user mx-1"></i> About</Link></li>
              <li><Link to={"/"} state={{ setActiveSection: "resume" }} onClick={() => handleScroll('resume')} className={`cursor-pointer ${activeSection==='resume'?"active":""}`}><i className="fa-solid fa-file-lines mx-1"></i> Resume</Link></li>

              {/* Portfolio Active When Coming from PortfolioDetails */}
              <li>
                <Link 
                  to={"/"} 
                  onClick={() => handleScroll('portfolio')} 
                  className={`cursor-pointer ${
                    activeSection==='portfolio' || activeSection==='portfolio-details' ? "active": ""
                  }`}
                >
                  <i className="fa-solid fa-briefcase mx-1"></i> Portfolio
                </Link>
              </li>

              <li><Link to={"/"} state={{ setActiveSection: "contact" }} onClick={() => handleScroll('contact')} className={`cursor-pointer ${activeSection==='contact'?"active":""}`}><i className="fa-solid fa-address-book mx-1"></i> Contact</Link></li>
            </ul>
            <i className={`mobile-nav-toggle d-xl-none bi ${menuOpen ? "bi-x" : "bi-list"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </nav>

          <div className="header-social-links">
            <a href="https://x.com/Selvag2001?t=PcN4_8o35Z7JvlIEmsSQcw&s=09" target="_blank" className="twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="https://www.facebook.com/share/1JBA9K22wH/" target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/selva_g_?igsh=MWxhaTNiMGFrODgyOA==" target="_blank" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/selvaganesh01" target="_blank" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Selvaganesh0801" target="_blank" className="github"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </header>

      <script src="../../assets/js/main.js"></script>
    </>
  );
}

export default TopNav;
 