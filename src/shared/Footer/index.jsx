import React from 'react'

function Footer() {
  
  return (
    <>
    
    <style>
      {`
      .footer-v1 {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .footer-v1 li {
        list-style: none;
      }

      .footer-v1 li a {
        width: 80px;
        height: 80px;
        background-color: #fff;
        text-align: center;
        line-height: 80px;
        font-size: 35px;
        margin: 0 10px;
        display: block;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        border: 3px solid #fff;
        z-index: 1;
        box-shadow: 0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;
      }

      .footer-v1 li a .icon {
        position: relative;
        color: #262626;
        transition: .5s;
        z-index: 3;
      }
        
      .footer-v1 li a:hover .icon {
        color: #fff;
        transform: rotateY(360deg);
      }
      .footer .social-links a:hover {
          color: transparent;
          border-color: transparent;
      }
      .footer-v1 li a:before {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background: #f00;
        transition: .5s;
        z-index: 2;
      }

      .footer-v1 li a:hover:before {
        top: 0;
      }
      .footer-v1 li:nth-child(1) a:before{
         background: linear-gradient(
          to right,
          #1DA1F2,#009ffc
        );
      }
      .footer-v1 li:nth-child(2) a:before{
        background: #3b5998;
      }
      .footer-v1 li:nth-child(3) a:before {
        background: linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7);

      }
      .footer-v1 li:nth-child(4) a:before {
        background: #0077b5;
      }
      .footer-v1 li:nth-child(5) a:before {
        background: black;
      }
      .footer .social-links {
        margin-top: 30px;
        margin-bottom:10px;
      }
      `}
    </style>
    
    <footer id="footer" className="footer">

    <div className="container">
      <div className="copyright text-center mb-2">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Selvaganesh</strong> <span>All Rights Reserved</span></p>
      </div>
      <div className="social-links d-flex justify-content-center">
        {/* <a href=""><i className="bi bi-twitter-x"></i></a>
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-linkedin"></i></a> */}

      <ul className="footer-v1 social-links d-flex justify-content-center px-0">
        <li>
          <a href="https://x.com/Selvag2001?t=PcN4_8o35Z7JvlIEmsSQcw&s=09" target="_blank"><i className="bi bi-twitter-x icon"></i></a></li>
        <li>
          <a href="https://www.facebook.com/share/1JBA9K22wH/" target="_blank"><i className="fab fa-facebook-f icon"></i></a></li>
        <li>
          <a href="https://www.instagram.com/selva_g_?igsh=MWxhaTNiMGFrODgyOA==" target="_blank"><i className="fa-brands fa-instagram icon"></i></a></li>
        <li>
          <a href="https://www.linkedin.com/in/selvaganesh01" target="_blank"><i className="fab fa-linkedin-in icon"></i></a></li>
        <li>
          <a href="https://github.com/Selvaganesh0801" target="_blank"><i className="fa-brands fa-github icon"></i></a></li>
      {/* <button onClick={handleClick}>Show Info Toast</button>; */}
      </ul>
    </div>
      </div>

  </footer>
    </>
  )
}

export default Footer