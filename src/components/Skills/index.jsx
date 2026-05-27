import React, { useEffect, useState, useRef } from 'react';
import './index.css';

// const skillsData = [
//   {
//     icon:"fa-brands fa-html5",
//     color: "#ef7433",
//     background: "#fae8df",
//     name: 'HTML',
//     level: 95,
//     description1: 'HTML (HyperText Markup Language) is the standard language for creating web pages.',
//     description2: 'It uses tags to structure content like headings, paragraphs, links, and images.',
//     description3: 'HTML forms the backbone of every website, defining its content and layout.',
//     delay: 50,
//   },
//   {
//     icon:"fa-brands fa-css3-alt",
//     color: "rgb(51 109 230)",
//     background: "rgb(224 232 248)",
//     name: 'CSS',
//     level: 95,
//     description1: 'CSS (Cascading Style Sheets) is used to style HTML elements on a webpage.',
//     description2:'It controls colors, fonts, spacing, and the overall visual appearance.',
//     description3:'CSS helps make web pages visually appealing and consistent across devices.',
//     delay: 100,
//   },
//   {
//     icon:"fa-brands fa-bootstrap",
//     color: "rgb(122 55 241)",
//     background: "rgb(228 218 246)",
//     name: 'Bootstrap',
//     level: 90,
//     description1: 'Bootstrap is a front-end framework for building responsive websites quickly.',
//     description2:'It provides pre-designed CSS styles, JavaScript components, and layout tools.',
//     description3:'Bootstrap allows developers to create professional-looking websites efficiently.',
//     delay: 150,
//   },
//   {
//     icon:"fa-brands fa-js",
//     color:" rgb(240 209 50)",
//     background: "rgb(252 241 193)",
//     name: 'Javascript',
//     level: 90,
//     description1: 'JavaScript is a programming language used to make web pages interactive and dynamic.',
//     description2:'It can manipulate HTML and CSS, handle events, and communicate with servers.',
//     description3:'JavaScript powers features like animations, forms, games, and real-time updates on websites.',
//     delay: 200,
//   },
//   {
//     "svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 128 128\"><path d=\"M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 001.586 1.812l.033.033.061.068a80.44 80.44 0 001.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 002.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 01-2.352-.765l-.323-.117a72.245 72.245 0 01-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 01-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51a58.591 58.591 0 01-1.751-.982l-.591-.33a81.221 81.221 0 01-2.28-1.397l-.615-.41a59.283 59.283 0 01-1.623-1.079l-.522-.367a89.287 89.287 0 01-1.534-1.109l-.679-.514a64.473 64.473 0 01-1.384-1.082l-.617-.495a82.693 82.693 0 01-1.724-1.453l-.189-.159a83.466 83.466 0 01-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 01-1.598-1.69l-.079-.084a67.39 67.39 0 01-1.621-1.844l-.424-.504a70.602 70.602 0 01-1.167-1.442l-.427-.532a78.406 78.406 0 01-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 003.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 001.79 1.858l.472.465a51.69 51.69 0 001.828 1.698l.074.064.018.018a55.268 55.268 0 002.135 1.767l.485.378a54.08 54.08 0 002.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 01-2.333-.674l-.701-.227a45.423 45.423 0 01-1.631-.562l-.736-.274a56.418 56.418 0 01-1.756-.708l-.473-.2a47.728 47.728 0 01-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 01-1.363-.77l-.326-.185a47.844 47.844 0 01-1.651-1.008l-.498-.332a61.759 61.759 0 01-1.069-.707 57.456 57.456 0 01-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 01-3.201-1.329 33.215 33.215 0 01-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745\"/></svg>",
//     color: "rgb(50 158 234)",
//     background: "rgb(205 229 245)",
//     name:"JQuery",
//     level:80,
//     description1:"jQuery is a JavaScript library that simplifies HTML manipulation, event handling, and animations for web development.",
//     description2:'It simplifies tasks like HTML document traversal, event handling, and animations.',
//     description3:"jQuery makes it easier to write JavaScript code that works across different browsers.",
//     delay:250},
//   {
//     icon:"fa-brands fa-react",
//     color: "rgb(50 196 236)",
//     background: "rgb(214 239 246)",
//     name: 'React',
//     level: 80,
//     description1: 'React is a JavaScript library for creating dynamic and reusable user interfaces, particularly for single-page applications.',
//     description2:'It allows developers to create reusable UI components and manage state efficiently.',
//     description3:'React helps build fast, dynamic, and interactive web applications with a virtual DOM.',
//     delay: 300,
//   },
//   {
//     icon:"fa-brands fa-python",
//     color: "rgb(54 109 155)",
//     background: "rgb(201 221 238)",
//     name: 'Python',
//     level: 60,
//     description1: 'Python is a high-level, interpreted programming language celebrated for its simplicity, readability, and versatility.',
//     description2:'It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.',
//     description3:'Python is widely used in web development, data analysis, AI, automation, and many other fields.',
//     delay: 350,
//   },
//   {
//     "svg":"<svg viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><title>django</title><path d=\"M22.706 1.095h4.882v5.009h-4.882zM27.589 8.609v11.32c0.045 0.437 0.070 0.943 0.070 1.456 0 2.143-0.446 4.181-1.249 6.028l0.038-0.098c-0.871 1.637-2.259 2.903-3.943 3.596l-0.052 0.019-4.534-2.156c1.671-0.593 3.020-1.747 3.85-3.23l0.018-0.036c0.698-1.395 0.919-3.012 0.919-7.26v-9.64h4.882zM14.937 12.445c-0.462-0.162-0.996-0.255-1.55-0.255-0.034 0-0.069 0-0.103 0.001l0.005-0c-0.074-0.005-0.161-0.008-0.248-0.008-2.036 0-3.687 1.651-3.687 3.687 0 0.179 0.013 0.356 0.038 0.528l-0.002-0.020c-0.021 0.146-0.034 0.315-0.034 0.487 0 1.964 1.592 3.556 3.556 3.556 0.122 0 0.242-0.006 0.361-0.018l-0.015 0.001c0.593-0 1.175-0.046 1.743-0.135l-0.063 0.008v-7.832zM14.937 1.069h4.882v22.603c-1.901 0.411-4.089 0.653-6.331 0.666l-0.010 0c-5.961 0-9.068-2.695-9.068-7.864-0.008-0.134-0.013-0.29-0.013-0.447 0-4.302 3.488-7.79 7.79-7.79 0.22 0 0.438 0.009 0.653 0.027l-0.028-0.002c0.045-0.001 0.097-0.001 0.15-0.001 0.702 0 1.382 0.093 2.028 0.267l-0.055-0.012z\"></path></svg>",
//     color: "rgb(8 45 31)",
//     background: "rgb(215 242 232)",
//     name: 'Django',
//     level: 55,
//     description1: 'Django is a high-level Python web framework that enables rapid development of secure and maintainable websites.',
//     description2:'It follows the Model-View-Template (MVT) architecture and includes built-in features like authentication and an admin panel.',
//     description3:'Django helps developers build robust, scalable, and database-driven web applications efficiently.',
//     delay: 400,
//   },
//   {
//     icon:"fa-solid fa-database",
//     color: "rgb(221 51 108)",
//     background: "rgb(244 221 229)",
//     name: 'SQL',
//     level: 60,
//     description1: 'SQL (Structured Query Language) is a standard language for managing and manipulating relational databases.',
//     description2:'It is used to perform tasks like querying, inserting, updating, and deleting data.',
//     description3:'SQL helps organize and retrieve data efficiently, making it essential for database-driven applications.',
//     delay: 450,
//   },
//   {
//     icon:"fa-brands fa-php",
//     color: "rgb(31 32 69)",
//     background: "rgb(215 216 244)",
//     name: 'PHP',
//     level: 70,
//     description1: 'PHP (Hypertext Preprocessor) is a server-side scripting language used to create dynamic web pages.',
//     description2:'It can interact with databases, handle forms, and generate content based on user input.',
//     description3:'PHP is widely used in web development for building websites and web applications efficiently.',
//     delay: 500,
//   },
//   {
//     icon:"fa-brands fa-git-alt",
//     color: "rgb(236 95 51)",
//     background: "rgb(246 222 215)",
//     name: 'Git',
//     level: 70,
//     description1: 'Git is a distributed version control system used to track changes in source code during software development.',
//     description2:'It allows multiple developers to collaborate, manage code versions, and maintain project history efficiently.',
//     description3:'Git helps prevent code conflicts and makes it easier to revert, branch, and merge changes.',
//     delay: 550,
//   },
//   {
//     icon:"fa-brands fa-github",
//     color: "rgb(26 26 26)",
//     background: "rgb(228 228 228)",
//     name: 'Github',
//     level: 80,
//     description1: 'GitHub is a web-based platform for hosting, managing, and collaborating on Git repositories for development projects.',
//     description2:'It allows developers to share code, track changes, and work together on projects using version control.',
//     description3:'GitHub also provides features like issue tracking, project management, and continuous integration.',
//     delay: 600,
//   },
// ];

function Skills({skillsData}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
}, []);


  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className="row g-4 skills-animation">
          {skillsData?.map((skill, index) => (
            <div
              className="col-md-6 col-lg-3"
              style={{ transitionDelay: `${skill?.delay}ms`,marginBottom:"25px" }}
              key={index}
            >
              <div className="skill-box icon-wrapper" data-aos={index % 2 === 0 ? 'flip-left' : 'flip-right'}>
              {skill?.svg ? (
                  <span
                    className="icon"
                    style={{
                      display: 'inline-block',
                      width: '45px',
                      height: '45px',
                      background: skill?.background,
                      fill:skill?.color,
                      padding: '8px',
                      borderRadius: '5px',
                      position: 'absolute',
                      top: '-20px',
                    }}
                    dangerouslySetInnerHTML={{ __html: skill?.svg }}
                  />
                ) : (
                <i style={{color:skill?.color,background:skill?.background}} className={`${skill?.icon}`}></i>)}
                <h3 className="text-end">{skill?.name}</h3>
              
                <p>{skill?.description1}</p>
                {/* <p>{skill?.description2}</p>
                <p>{skill?.description3}</p> */}
                
                <span className="text-end d-block">{skill?.level}%</span>
                <div className="progress" style={{backgroundColor: `color-mix(in srgb,${skill?.color}, transparent 85%)`}}>
                  <div
                    className={`progress-bar`}
                    style={{
                      width: isVisible ? `${skill?.level}%` : '0%',
                      transition: 'width 2s ease-in-out',
                      backgroundColor:skill?.color,
                    }}
                    role="progressbar"
                    aria-valuenow={skill?.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
