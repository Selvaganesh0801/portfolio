import React from 'react';

// Bootstrap Icons stylesheet must be included in index.html:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

function Footer1() {
  return (
    <div className="footer">
      <style>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: #ccc;
        }

        .footer {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ccc;
        }

        .icon-container {
          display: flex;
          padding: 0;
          margin: 0;
        }

        .icon-container > li {
          list-style: none;
          margin: 0 40px;
        }

        .icon-container > li a {
          position: relative;
          display: block;
          width: 80px;
          height: 80px;
          background-color: #fff;
          text-align: center;
          transform: perspective(100px) rotate(-30deg) skew(25deg) translate(0, 0);
          transition: all 0.7s;
          box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
        }

        .icon-container > li a::before {
          content: "";
          position: absolute;
          top: 10px;
          left: -20px;
          height: 100%;
          width: 20px;
          background: #b1b1b1;
          transition: 0.5s;
          transform: rotate(0deg) skewY(-45deg);
        }

        .icon-container > li a::after {
          content: "";
          position: absolute;
          top: 80px;
          left: -11px;
          height: 20px;
          width: 100%;
          background: #b1b1b1;
          transition: all 1s;
          transform: rotate(0deg) skewX(-45deg);
        }

        .icon-container > li a:hover {
          transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px);
          box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
        }

        .icon-container > li .bi {
          font-size: 36px;
          color: #262626;
          line-height: 80px;
          transition: 0.5s;
        }

        .icon-container > li:hover .bi {
          color: #fff;
        }

        /* Hover colors */
        .icon-container > li:hover:nth-child(1) a {
          background: #ff0000;
        }
        .icon-container > li:hover:nth-child(1) a:before {
          background: #b10f0f;
        }
        .icon-container > li:hover:nth-child(1) a:after {
          background: #a70606;
        }

        .icon-container > li:hover:nth-child(2) a {
          background: #db16e2;
        }
        .icon-container > li:hover:nth-child(2) a:before {
          background: #d009c3;
        }
        .icon-container > li:hover:nth-child(2) a:after {
          background: #d314d0;
        }

        .icon-container > li:hover:nth-child(3) a {
          background: #000000;
        }
        .icon-container > li:hover:nth-child(3) a:before,
        .icon-container > li:hover:nth-child(3) a:after {
          background: #000000;
        }

        .icon-container > li:hover:nth-child(4) a {
          background: #0077b5;
        }
        .icon-container > li:hover:nth-child(4) a:before {
          background: #036aa0;
        }
        .icon-container > li:hover:nth-child(4) a:after {
          background: #0d82bf;
        }

        .icon-container > li:hover:nth-child(5) a {
          background: linear-gradient(#400080, transparent),
            linear-gradient(200deg, #d047d1, #ff0000, #ffff00);
        }
        .icon-container > li:hover:nth-child(5) a:before,
        .icon-container > li:hover:nth-child(5) a:after {
          background: linear-gradient(#400080, transparent),
            linear-gradient(200deg, #d047d1, #ff0000, #ffff00);
        }
      `}</style>

      <ul className="icon-container">
        <li>
          <a href="https://www.youtube.com/c/DARKLORDCDL" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/MDJAmin" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-dribbble"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/MDJAmin" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mdjamin" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mdjamin_" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer1;
