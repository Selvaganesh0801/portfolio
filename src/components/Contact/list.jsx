import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.css";

function ContactList() {
      const [contactUsDetails, setcontactUsDetails] = useState([]);
    
    useEffect(() => {
        const contactUsList = async () => {
          try {
          const res = await fetch(`/contactUs.json?ts=${Date.now()}`, {cache: "no-store",});        
          const data = await res.json();
            setcontactUsDetails(data.contactDetails);
          } catch (error) {
            console.error("Error fetching projects:", error);
          }
        };
        contactUsList();
      }, []);
  return (
    <div>
     <section id="contact" className="contact section light-background p-5">
     <div className="page-title">
      <div className="breadcrumbs">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={"/"} ><i className="bi bi-house"></i> Home</Link></li>
            <li className="breadcrumb-item active current"><i className="bi bi-person-rolodex"></i> Contact Us Details</li>
          </ol>
        </nav>
      </div>
      </div>
        <div className="contact-form card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-body p-4 p-lg-5">
                <i className="bi bi-person-lines-fill"></i> Contact List
                <table className="table my-4" style={{borderRadius:"10px",overflow:"hidden"}}>
  <thead className="thead-light">
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Subject</th>
      <th scope="col">Message</th>
    </tr>
  </thead>
  <tbody>
  {contactUsDetails.map((item,index)=>(
    <tr key={item.id} className='border'>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td>{item.emailId}</td>
      <td>{item.subject}</td>
      <td>{item.message}</td>
    </tr>
    ))}
  </tbody>
</table>
<div className="pagination d-flex justify-content-end mt-5">
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
              </div>
              </div>
            </div>
            </section>
    </div>
  )
}

export default ContactList