import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layouts/defaultLayout'
import PortfolioDetailsComponent from '../../components/Portfolio-Details'

function PortfolioDetails() {
  const [projectDetails, setProjectDetails] = useState([]);  
  const [skillDetails, setskillDetails] = useState([]);  
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
        setProjectDetails(data.projectDetails);
        setskillDetails(data.skillsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    loadProjects();
  }, []);
  return (
    <>
      <DefaultLayout>
        <PortfolioDetailsComponent projectDetails={projectDetails} skillsData={skillDetails} setActiveSection={"portfolio"} />
      </DefaultLayout>
    </>
  )
}

export default PortfolioDetails