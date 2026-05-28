import React, { useEffect, useState } from 'react'
import Home from '../../components/Home'
import About from '../../components/About'
import Resume from '../../components/Resume'
import Portfolio from '../../components/Portfolio'
import Contact from '../../components/Contact'
import Skills from '../../components/Skills'

function MainComponents() {
  const [projectDetails, setProjectDetails] = useState([]);
  const [skillsData, setskillsData] = useState([]);
  
  useEffect(() => {
    const loadProjects = async () => {
      try {
      const res = await fetch(
        `${import.meta.env.BASE_URL}db.json?ts=${Date.now()}`,
        {
          cache: "no-store",
        }
      );    
      const data = await res.json();
        setProjectDetails(data.homeprojectDetails);
        setskillsData(data.skillsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    loadProjects();
  }, []);
  
  return (
        <>
            <Home/>
            <About/>
            <Skills skillsData={skillsData}/>
            <Resume/>
            <Portfolio projectDetails={projectDetails}/>
            <Contact/>
        </>
  )
}

export default MainComponents