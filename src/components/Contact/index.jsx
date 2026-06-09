import React, { useState } from 'react'
import violetFlower from "../../assets/img/violet-flower-row.png"
import merownFlower from "../../assets/img/merown-flower-row.png"
import thankYou from "../../assets/img/thankYou.png"
import { Modal } from "bootstrap";
import { useTheme } from '../Context/ThemeContext';

function Contact() {
  const {theme}=useTheme();
  const flowerImg=theme=="violet" ? violetFlower:merownFlower;
  const [formData,setFormData]=useState({
    name:"",email:"",subject:"",message:""
  })
  const[submit,setSubmit]=useState(false);
  const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmit(true);

  if (!formData.name || !formData.email||!isValidEmail(formData.email.trim()) || !formData.subject || !formData.message) {
    return;
  }
 
   const modalElement = document.getElementById("thankYouModal");

  if (!modalElement) return;

  const modal = Modal.getOrCreateInstance(modalElement);

  modal.show();
  // try {
  //   const response = await fetch("http://192.168.0.107/sgs_portfolio/contact.php", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: formData.name,
  //       emailId: formData.email,
  //       subject: formData.subject,
  //       message: formData.message
  //     })
  //   });

  //   const data = await response.json();
  //   alert("Message submitted successfully");

  // } catch (error) {
  //   console.error(error);
  // }
};
   const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

  return (
    <section id="contact" className="contact section light-background">
      <div className="container p-0 mb-5 section-title" data-aos="fade-up">
        {/* <h2>Contact</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
        <p></p> */}
        <img className='w-25' src={`${flowerImg}`} alt="" />
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="200">
              <div className="section-category mb-3">Contact</div>
                <h2 className="display-5 mb-4">Get in Touch</h2>              
                <p className="lead mb-4">
                Ready to build something awesome? Send me a message and I’ll get back to you as soon as possible.
                </p>
              <div className="contact-info mt-5">
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-envelope-at me-3"></i>
                  <span>selvaganeshkselva@gmail.com</span>
                </div>

                <div className="info-item d-flex mb-3">
                  <i className="bi bi-telephone me-3"></i>
                  <span>9488793821</span>
                </div>

                <div className="info-item d-flex mb-4">
                  <i className="bi bi-geo-alt me-3"></i>
                  <span>2/14, Thular, Thiruvarur(Dist), 612203</span>
                </div>
                <div data-bs-toggle="modal" className='cursor-pointer'
            data-bs-target="#mapModal">
                <p className="map-link d-inline-flex align-items-center">
                  Open Map
                  <i className="bi bi-arrow-right ms-2"></i>
                </p></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-body p-4 p-lg-5">

                <form className="php-email-form" autoComplete='off'>
                  <div className="row gy-4">

                    <div className="col-12">
                      <input type="text" value={formData.name} onChange={handleChange} 
                      name="name" className={`form-control ${submit && !formData.name ? "inputError" :""}`} placeholder="Your Name" required=""/>
                    </div>
                    {submit && formData.name == 0 ? <div className='text-danger error-message-required mt-1 ms-2'>Name is required</div> : <></>}

                    <div className="col-12">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${
                          submit && (!formData.email || !isValidEmail(formData.email))
                            ? "inputError"
                            : ""
                        }`}
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                        {submit && !formData.email && (
                          <div className="text-danger error-message-required mt-1 ms-2">
                            Email is required
                          </div>
                        )}

                        {submit && formData.email && !isValidEmail(formData.email) && (
                          <div className="text-danger error-message-required mt-1 ms-2">
                            Enter a valid email address
                          </div>
                        )}                    
                      <div className="col-12">
                      <input type="text" value={formData.subject} onChange={handleChange} className={`form-control ${submit && !formData.subject ? "inputError" :""}`} name="subject" placeholder="Subject" required=""/>
                    </div>
                      {submit && formData.subject == 0 ? <div className='text-danger error-message-required mt-1 ms-2'>Subject is required</div> : <></>}
                    <div className="col-12">
                      <textarea className={`form-control ${submit && !formData.message ? "inputError" :""}`}  value={formData.message} onChange={handleChange} name="message" rows="6" placeholder="Message" required=""></textarea>
                    </div>
                      {submit && formData.message == 0 ? <div className='text-danger error-message-required mt-1 ms-2'>Message is required</div> : <></>}
                    <div className="col-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>

                      <button type="submit" className="btn btn-submit w-100 btn-53" onClick={handleSubmit}>
                      <div className="original">Submit Message</div>
                      <div className="letters">
                        <span>S</span>
                        <span>u</span>
                        <span>b</span>
                        <span>m</span>
                        <span>i</span>
                        <span>t</span>
                        <span>&nbsp;</span>
                        <span>M</span>
                        <span>e</span>
                        <span>s</span>
                        <span>s</span>
                        <span>a</span>
                        <span>g</span>
                        <span>e</span>
                      </div>
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>

      </div>
{/* Modal */}
      <div className="modal fade" id="mapModal" tabIndex="-1" aria-labelledby="mapModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content" data-aos="zoom-in">
            <div className="modal-header">
              <h5 className="modal-title" id="mapModalLabel">Our Location</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.778273510767!2d79.58040937573757!3d10.980101755402435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a553b1065f98cc5%3A0xdc015a00d00c6523!2sSelvaG%20House!5e0!3m2!1sen!2sin!4v1776420639829!5m2!1sen!2sin"
             width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
              {/* <iframe
                src="https://www.google.com/maps?q=2/14, Thular, Thiruvarur(Dist), 612203&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>

<div class="modal fade" id="thankYouModal" tabIndex="-1" role="dialog" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content thankyou-modal">

      <div class="modal-body text-center p-0">
        
        <div class="mb-3 position-relative">
          <img class={`thankU-img ${theme}`} src={thankYou}
               alt="success"
              />
              <div className="x-mark" onClick={() =>{
              setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
              }),setSubmit(false)}} data-bs-dismiss="modal">
          <i class="fa-solid fa-xmark"></i>
        </div>
        </div>
        <div className="thankU-body p-4">
        <h3 class="mb-2 fw-bold">Thank you!</h3>

        <p class="text-muted">
          We have received your upgrade request. We will reach out to you soon!
        </p>

        <button type="button"  onClick={() =>{
              setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
              }),setSubmit(false)}
            } style={{background:"var(--accent-color)",border:"none"}} class="fw-bold btn btn-primary w-50 mt-3 p-2" data-bs-dismiss="modal">
          Close
        </button>
      </div>
      </div>
    </div>
  </div>
</div>
    </section>
  )
}

export default Contact