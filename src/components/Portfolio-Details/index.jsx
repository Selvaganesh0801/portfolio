import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import profile from "../../assets/img/profile/selva_g_profile.jpg";
import './index.css';
import Loading from '../../common/Loading';
// function PortfolioDetailsComponent({skillsData,projectDetails}) {
function PortfolioDetailsComponent({skillsData}) {
  const location=useLocation();
  const projectNavDetails=location.state && location.state.projectName;
  const projectDetails= [
        { 
            "name": "Whatsapp Marketing",
            "titleTech":"Technologies",
            "technology":["HTML","CSS","Bootstrap","Javascript","TypeScript","React","PHP","SQL"],
            "description": "WhatsApp Marketing is a platform that helps businesses promote and manage their products and services directly through WhatsApp. It enables automated and personalized messaging, sharing updates, offers, and product catalogs, and provides campaign tracking. With a fully responsive design, it works smoothly on desktops, tablets, and mobile devices—boosting customer engagement and driving sales.",
            "subtitle1": "Project Overview",
            "subcontent1": "The platform provides an intuitive interface for businesses to create, schedule, and send marketing campaigns. It supports contact management, message templates, and analytics to track campaign performance. Built using modern web technologies, it ensures fast performance and reliability. Optimized for multiple devices, it allows business owners to manage campaigns anytime, anywhere. By integrating WhatsApp-based marketing, it strengthens customer connections and drives business growth.",
            "subtitle2": "The Challenges",
            "subcontent2": "Managing large contact lists and ensuring message deliverability was a major challenge. Designing automated yet personalized messaging without spamming users required careful planning. Ensuring system reliability during peak campaign times added complexity. Integrating analytics to measure campaign success accurately was difficult. Maintaining data privacy and compliance with messaging regulations posed additional challenges.",
            "subtitle3": "The Solutions",
            "subcontent3": "Implemented robust backend systems to handle large-scale contact management efficiently. Developed automated messaging workflows with personalization features for better engagement. Optimized system performance for high-volume campaigns and real-time tracking. Integrated analytics dashboards to monitor open rates, clicks, and conversions. Ensured secure data handling and compliance with WhatsApp communication policies.",
            "path": "/assets/img/project/bizconvo/",
            "images": [
                "biz-page-1.jpg",
                "biz-page-2.jpg",
                "biz-page-3.jpg",
                "biz-page-4.jpg",
                "page-2.jpg",
                "page-3.jpg",
                "page-5.jpg"
            ],
            "category": "Web Application",
            "client": "India",
            "projectDate": "Mar 2025",
            "projectUrl": "https://whatsappmarketing.hermonsolutions.com/"

        },
        {
            "name": "Pink Ads",
            "titleTech":"Technologies",
            "technology":["HTML","CSS","Bootstrap","Javascript","React","PHP","SQL"],
            "description": "Pink-Celebrity is a website designed to manage celebrity invitations for various events and functions efficiently. It allows event organizers to browse, select, and book celebrities based on availability and preferences. The platform provides detailed profiles, schedules, and communication tools for seamless coordination. Fully responsive design ensures smooth access across desktops, tablets, and mobile devices. Overall, it aims to simplify event planning and enhance the celebrity booking experience.",
            "subtitle1": "Project Overview",
            "subcontent1": "The website offers an intuitive interface for organizers to explore celebrity options and manage bookings. It supports profile viewing, availability tracking, booking requests, and confirmation notifications. Built using modern web technologies, the platform ensures reliability, fast performance, and scalability. It is optimized for all devices to deliver a consistent user experience. By integrating event management with celebrity services, Pink-Celebrity enhances efficiency and user engagement.",
            "subtitle2": "The Challenges",
            "subcontent2": "Managing celebrity availability and preventing double bookings was a major challenge. Ensuring smooth communication between organizers and celebrities added complexity. Designing an engaging yet simple interface for users was critical. Handling high traffic during popular event seasons required robust backend support. Maintaining updated profiles and schedules for multiple celebrities was another challenge.",
            "subtitle3": "The Solutions",
            "subcontent3": "Developed a responsive and user-friendly UI for easy celebrity selection and booking. Implemented a backend system for real-time availability tracking and conflict management. Integrated notification systems for updates, confirmations, and reminders. Optimized server and database performance for high traffic periods. Established workflows for profile updates and schedule management to ensure accuracy.",
            "path": "/assets/img/project/pink/",
            "images": [
                "pink-psd-72ppi-page-1.jpg",
                "pink-psd-72ppi-page-2.jpg",
                "pink-psd-72ppi-page-3.jpg",
                "page-1.jpg",
                "page-2.jpg",
                "page-3.jpg",
                "page-5.jpg"
            ],
            "category": "Web Site",
            "client": "India",
            "projectDate": "May 2025",
            "projectUrl": "http://pinkcelebrity.in/"

        },
        {
          "name": "Theme Configurations",
          "titleTech":"Technologies",
            "technology":["HTML","CSS","Bootstrap","Javascript","React","Python","SQL"],
          "description": "Theme configuration is a theme-based advertising platform designed to help businesses and individuals easily post ads on premium wall-mounted display spaces. The website allows users to browse available ad spots, submit booking requests, and negotiate directly with the service provider. With a clean and responsive design, the platform simplifies the process of promoting brands or services through strategically placed wall ads.",
          "subtitle1": "Project Overview",
          "subcontent1": "The platform provides a smooth and intuitive interface for users to find, book, and manage wall-display advertising spaces. Users can explore multiple locations, view available wall slots, submit ad designs, and request pricing. The system supports online inquiries, booking negotiation, and ad placement approval. Developed with modern technologies, it ensures fast loading, responsive layouts, and a consistent experience across all devices. The goal is to streamline the advertising process and make wall-based promotions simple, transparent, and accessible.",
          "subtitle2": "The Challenges",
          "subcontent2": "Managing multiple ad spaces and keeping availability updated in real-time was a major challenge. Ensuring clear communication between advertisers and the service provider required an efficient negotiation system. Designing an interface that is visually appealing yet easy for non-technical users was essential. Additionally, displaying high-quality ad previews and handling multiple file formats added complexity. Maintaining accurate location details and pricing transparency while handling numerous booking requests was another challenge.",
          "subtitle3": "The Solutions",
          "subcontent3": "Developed a secure and well-structured backend to manage ad spaces, availability, and booking schedules. Implemented a user-friendly interface allowing advertisers to explore wall spots, upload ad creatives, and submit negotiation requests. Integrated a smooth communication flow between advertisers and admins for price discussions and approvals. Optimized the platform for all devices and ensured fast performance. Added features like real-time updates, easy content uploads, and organized ad preview management to enhance user experience.",
          "path": "/assets/img/project/moving-walls/",
          "images": [
            "mvng-walls-1.png",
            "mvng-walls-2.png",
            "mvng-walls-3.png",
            "page-1.png",
            "page-2.png",
            "page-3.png",
          ],
          
          "category": "Web Application",
          "client": "India",
          "projectDate": "Sep 2024",
          "projectUrl": "https://d9q52grsh1dnx.cloudfront.net/"
        },
        {
            "name": "Student Management System",
            "titleTech":"Technologies",
            "technology":["HTML","CSS","Bootstrap","Javascript","React","PHP","SQL"],
            "description": "The School Management System is a web-based platform designed to manage student details, attendance, and overall school administration efficiently. It allows teachers, students, and administrators to access and update academic information easily. The system includes modules for attendance tracking, report generation, and communication between staff and parents. Fully responsive design ensures smooth usage across desktops, tablets, and mobiles. Overall, it aims to simplify school operations and improve educational management.",
            "subtitle1": "Project Overview",
            "subcontent1": "The platform provides an intuitive and secure interface for managing all school-related data in one place. It supports attendance monitoring, student registration, exam results, and staff management. Built using modern web technologies, it ensures fast performance, scalability, and reliability. The system is optimized for all devices, making it convenient for administrators and teachers. By digitizing school processes, it enhances efficiency and promotes better academic tracking.",
            "subtitle2": "The Challenges",
            "subcontent2": "Handling large volumes of student and staff data securely was a major challenge. Ensuring accurate attendance and report generation required automation and precision. Designing a user-friendly interface suitable for teachers and admins of varying tech skills was difficult. Integrating multiple modules without affecting performance added complexity. Maintaining data privacy and system reliability was another key challenge.",
            "subtitle3": "The Solutions",
            "subcontent3": "Implemented secure authentication and role-based access to protect sensitive information. Designed a simple, responsive UI for easy data entry and management. Automated attendance tracking and report generation for better accuracy. Optimized backend systems for speed, scalability, and performance. Conducted testing to ensure smooth functionality and reliable school data management.",
            "path": "/assets/img/project/sms/",
            "images": [
                "psd-sms-1.jpg",
                "psd-sms-2.jpg",
                "page-2.jpg",
                "page-3.jpg",
                "page-4.jpg",
                "page-5.jpg",
                "page-6.jpg"
            ],
            "category": "Web Application",
            "client": "India",
            "projectDate": "Jul 2024",
            "projectUrl": "http://smsystem.hermonsolutions.com/"

        },
        {
            "name": "Stemz - Medical center",
            "titleTech":"Technologies",
            "technology":["HTML","CSS","Bootstrap","Javascript","React"],
            "description": "Stemz is a healthcare-focused website designed to connect patients with trusted medical professionals and provide easy access to medical services. The platform centralizes healthcare information, allowing users to book appointments, access resources, and consult doctors efficiently. It is fully responsive, ensuring a smooth experience across desktops, tablets, and mobile devices. The design emphasizes simplicity and user-friendliness for patients of all ages. Overall, Stemz aims to improve healthcare accessibility and patient engagement.",
            "subtitle1": "Project Overview",
            "subcontent1": "Stemz offers a secure, reliable, and intuitive interface for patients, doctors, and healthcare providers. It supports appointment scheduling, accessing medical records, and discovering healthcare services in one platform. Built using modern web technologies, the website ensures seamless performance across all devices. The system is designed to be scalable, handling increasing numbers of users and data efficiently. By integrating technology and healthcare, Stemz enhances the overall medical service experience.",
            "subtitle2": "The Challenges",
            "subcontent2": "The main challenges involved handling sensitive medical data while ensuring privacy and compliance with healthcare regulations. Creating an interface that is simple yet comprehensive for users of varying tech-savviness was difficult. Integrating real-time appointment scheduling with doctor availability required careful planning. Maintaining high performance and responsiveness across devices added technical complexity. Additionally, meeting tight deadlines without compromising quality posed a significant challenge.",
            "subtitle3": "The Solutions",
            "subcontent3": "We implemented secure APIs, robust authentication, and encryption to protect sensitive data. The user interface was designed to be intuitive, responsive, and accessible for all users. Appointment scheduling and medical record access were optimized for speed and reliability. The platform adheres to healthcare compliance standards and privacy regulations. Rigorous testing ensured a smooth, error-free experience and reliable functionality.",
            "path": "/assets/img/project/stemz/",
            "images": [
                "stempz-page-1.jpg",
                "stempz-page-2.jpg",
                "stempz-page-3.jpg",
                "page-1.JPG",
                "page-2.JPG",
                "page-5.JPG",
                "page-6.JPG"
            ],
            "category": "Web Application",
            "client": "India",
            "projectDate": "Jun 2024",
            "projectUrl": "https://www.stemzhealthcare.com/"

        },
        {
            "name": "Araciyal",
            "titleTech":"Technologies",
            "technology":["HTML","CSS","Bootstrap","Javascript","React"],
            "description": "Arciyal is a news website designed to provide users with up-to-date news across various categories like politics, sports, entertainment, and world events. The platform allows users to browse articles, watch videos, and stay informed in real-time. It features an intuitive interface, easy navigation, and responsive design for seamless access on desktops, tablets, and mobiles. Overall, it aims to deliver accurate news quickly while engaging a wide audience.",
            "subtitle1": "Project Overview",
            "subcontent1": "The website offers a clean and user-friendly interface for accessing news articles and multimedia content. It supports category-based browsing, search functionality, and live updates for breaking news. Built with modern web technologies, the platform ensures fast loading, reliability, and scalability. It is optimized for all devices to provide consistent user experience. By integrating digital news delivery, Arciyal strengthens information accessibility and audience engagement.",
            "subtitle2": "The Challenges",
            "subcontent2": "Handling frequent content updates and real-time news delivery was a major challenge. Ensuring smooth performance with heavy multimedia content required optimization. Designing an intuitive layout for easy reading and navigation was critical. Managing high traffic during breaking news periods added complexity. Maintaining content accuracy and moderation across multiple categories was another challenge.",
            "subtitle3": "The Solutions",
            "subcontent3": "Implemented a robust CMS for quick content updates and management. Optimized backend and media files for fast loading and performance. Designed a responsive and easy-to-navigate UI for better user experience. Integrated caching and load balancing to handle peak traffic efficiently. Established content moderation workflows to ensure news accuracy and reliability.",
            "path": "/assets/img/project/aracyal/",
            "images": [
                "aracyal-1.jpg",
                "aracyal-2.jpg",
                "page-1.jpg",
                "page-2.jpg",
                "page-3.jpg",
                "page-4.jpg",
                "page-5.jpg"
            ],
            "category": "Web Application",
            "client": "India",
            "projectDate": "Jan 2025",
            "projectUrl": "http://araciyal.com/"

        },
        {
            "name": "Skanda Fincorp",
            "titleTech":"Technologies",
            "technology":["HTML","CSS","Bootstrap","Javascript","React"],
            "description": "Skanda Fincorp is a finance website developed to provide users with easy access to financial services, loans, and investment solutions. It helps clients explore various loan options, EMI calculators, and investment plans through an intuitive interface. The platform ensures secure transactions and transparent financial information. Fully responsive design guarantees smooth user experience across all devices. Overall, it aims to simplify financial management and support users in making smart financial decisions.",
            "subtitle1": "Project Overview",
            "subcontent1": "The website offers detailed insights into financial products such as personal loans, business loans, and investment schemes. It features an easy-to-navigate dashboard, online application forms, and automated eligibility checks. Built with modern web technologies, it ensures speed, reliability, and data protection. Optimized for both mobile and desktop users, it delivers consistent performance everywhere. By integrating digital finance tools, Skanda Fincorp enhances trust, transparency, and customer convenience.",
            "subtitle2": "The Challenges",
            "subcontent2": "Handling sensitive financial data with complete security was a major challenge. Designing an intuitive user interface for users with varying financial knowledge levels required careful planning. Ensuring smooth online application and verification workflows added complexity. Managing large datasets and maintaining accurate calculations was crucial. Meeting regulatory compliance and data protection standards was another challenge.",
            "subtitle3": "The Solutions",
            "subcontent3": "Implemented advanced encryption and secure authentication for all user transactions. Designed a clean, responsive interface for simple navigation and data entry. Automated backend systems for loan eligibility checks and application tracking. Integrated real-time data analytics for performance and report generation. Ensured compliance with all financial data protection and privacy standards for complete user safety.",
            "path": "/assets/img/project/skandha/",
            "images": [
                "psd-skandha-page-1.jpg",
                "psd-skandha-page-2.jpg",
                "psd-skandha-page-3.jpg",
                "page-12.jpg",
                "page-10.jpg",
                "page-9.jpg",
                "page-7.jpg"
            ],
            "category": "Web Site",
            "client": "India",
            "projectDate": "Nov 2025",
            "projectUrl": "http://skandafincorp.com"

        },
        {
          "name": "SMR Gold Loan",
          "titleTech": "Technologies",
          "technology": ["HTML", "CSS", "Bootstrap", "Javascript", "React", "PHP", "SQL"],
          "description": "Smr gold loan is a secure and user-friendly financial platform offering quick access to various loan and investment services. It provides instant eligibility checks, simple navigation, and transparent financial information to help users make confident decisions.",
          "subtitle1": "Project Overview",
          "subcontent1": "The platform delivers seamless access to personal loans, business loans, and investment plans through an intuitive dashboard. It features fast loan application workflows, automated eligibility evaluations, and responsive design for flawless performance across devices. Built with modern technologies, it ensures reliability, accuracy, and a smooth user experience.",
          "subtitle2": "The Challenges",
          "subcontent2": "Ensuring complete security for sensitive financial data was a significant challenge. Creating an interface simple enough for diverse user groups while maintaining advanced functionalities required careful UX planning. Managing high-volume data, accurate calculations, and regulatory compliance added further complexity.",
          "subtitle3": "The Solutions",
          "subcontent3": "Advanced encryption and secure authentication protocols were implemented to protect all user transactions. A clean, responsive interface improved accessibility and usability. Automated backend systems handled eligibility checks, application tracking, and data processing. Real-time analytics strengthened reporting, while strict compliance ensured top-tier data safety.",
          "path": "/assets/img/project/smr-goldloan/",
          "images": [
            "smr-page-1.png",
            "smr-page-2.png",
            "smr-page-3.png",
            "smr-page-4.png",
            "smr-page-8.png",
            "smr-page-6.png",
            "smr-page-7.png"
          ],
          "category": "Web Application",
          "client": "India",
          "projectDate": "Dec 2025",
          "projectUrl": "https://smrgoldloanfinance.com/"
        },
        {
            "name": "Nurturehire",
            "titleTech":"Technologies",
            "technology":["HTML","CSS","Bootstrap"],
            "description": "NurtureHire is a recruitment and placement website designed to connect job seekers with potential employers efficiently. It allows companies to post job requirements and candidates to apply seamlessly through a user-friendly platform. The website provides features for resume uploads, job tracking, and application management. Fully responsive design ensures smooth access across desktops, tablets, and mobile devices. Overall, it aims to streamline the recruitment process and improve placement opportunities.",
            "subtitle1": "Project Overview",
            "subcontent1": "The platform offers a secure and intuitive interface for both recruiters and job seekers. It supports job postings, candidate applications, resume management, and real-time notifications. Built using modern web technologies, the website ensures reliable performance and scalability. It facilitates better matching of candidates to suitable roles efficiently. By integrating key recruitment features, NurtureHire enhances hiring efficiency and user experience.",
            "subtitle2": "The Challenges",
            "subcontent2": "Managing large volumes of job postings and candidate applications was a major challenge. Ensuring data privacy and secure access for all users added complexity. Designing an intuitive interface for both recruiters and job seekers required careful planning. Integrating search and filtering functionality for effective candidate-job matching was difficult. Maintaining consistent performance under heavy usage posed an additional challenge.",
            "subtitle3": "The Solutions",
            "subcontent3": "Implemented secure authentication and encrypted data storage to protect sensitive information. Developed a responsive, user-friendly UI to simplify navigation and application management. Optimized backend systems for fast search, filtering, and application tracking. Integrated real-time notifications and matching algorithms to enhance efficiency. Thorough testing ensured reliability, scalability, and a smooth user experience.",
            "path": "/assets/img/project/natural/",
            "images": [
                "naturals-mocup-1.png",
                "naturals-mocup-2.png",
                "naturals-mocup-3.png",
                "page-1.JPG",
                "page-3.JPG",
                "page-5.JPG",
                "page-7.JPG"
            ],
            "category": "Web Site",
            "client": "India",
            "projectDate": "Sep 2025",
            "projectUrl": "https://www.nurturehire.com/"

        },
        {
            "name": "Selling Partner Service",
            "titleTech":"Technologies",
            "technology":["HTML","CSS","Bootstrap"],
            "description": "SellingPartnerServices is a landing page designed for the company to showcase and sell its own products directly to customers. The page highlights key features, benefits, and offers of the products in an engaging and visually appealing manner. It provides seamless navigation, product details, and call-to-action buttons for quick purchases. Fully responsive design ensures smooth accessibility across desktops, tablets, and mobile devices. Overall, it aims to boost product visibility and drive direct sales effectively.",
            "subtitle1": "Project Overview",
            "subcontent1": "The landing page offers a clean and intuitive interface to attract potential customers and enhance user experience. It includes product showcases, pricing information, testimonials, and secure checkout options. Built using modern web technologies, the page ensures fast loading and smooth performance. It is optimized for both desktop and mobile users to maximize reach. By integrating key e-commerce elements, the landing page increases engagement and encourages conversions.",
            "subtitle2": "The Challenges",
            "subcontent2": "Creating a visually appealing layout while keeping it fast and responsive was a major challenge. Highlighting multiple products without overwhelming users required careful design. Integrating secure payment options and order tracking added complexity. Ensuring the landing page worked seamlessly across all devices and browsers was difficult. Maintaining high performance under heavy traffic loads posed an additional challenge.",
            "subtitle3": "The Solutions",
            "subcontent3": "Designed a clean, responsive, and visually engaging layout for better user experience. Implemented secure payment gateways and order management functionality. Optimized images, scripts, and code for faster loading and performance. Added clear call-to-action buttons and product highlights to drive conversions. Conducted extensive testing across devices and browsers to ensure reliability and smooth functionality.",
            "path": "/assets/img/project/selling-partner/",
            "images": [
                "rg-1.png",
                "rg-2.png",
                "rg-3.png",
                "rg-4.png",
            ],
            "category": "Web Site",
            "client": "India",
            "projectDate": "Sep 2025",
            "projectUrl": "https://ruposhi.sellingpartnerservices.com/"

        },
        {
            "name": "Jewelry",
            "titleTech":"Technologies",
            "technology":["HTML","CSS","Bootstrap"],
            "description": "This Jewelry website is designed to allow users to browse, explore, and purchase jewelry items directly online. It showcases a wide range of products with detailed descriptions, high-quality images, and pricing information. The platform enables easy order placement, secure payments, and tracking of purchases for a seamless shopping experience. Fully responsive design ensures smooth usability across desktops, tablets, and mobile devices. Overall, it aims to enhance customer engagement and boost jewelry sales effectively.",
            "subtitle1": "Project Overview",
            "subcontent1": "The website offers an elegant and intuitive interface to display jewelry collections attractively. It supports product categorization, search filters, shopping cart, and secure checkout options. Built using modern web technologies, the platform ensures fast performance and reliability. It provides a smooth and visually appealing experience for users on all devices. By integrating key e-commerce functionalities, the website streamlines jewelry shopping and increases conversions.",
            "subtitle2": "The Challenges",
            "subcontent2": "Displaying high-quality jewelry images without affecting page speed was a major challenge. Ensuring secure transactions and protecting customer data added complexity. Designing an intuitive interface for easy browsing and ordering required careful planning. Managing inventory and real-time order tracking for multiple products was difficult. Maintaining optimal performance under high traffic and heavy image load posed additional challenges.",
            "subtitle3": "The Solutions",
            "subcontent3": "Implemented optimized image handling and responsive design to enhance visual appeal and performance. Developed secure payment gateways and encrypted customer data for safety. Designed a user-friendly UI for smooth browsing, selection, and ordering of jewelry. Optimized backend and database for real-time inventory and order management. Conducted thorough testing to ensure fast loading, reliability, and seamless multi-device experience.",
            "path": "/assets/img/project/jewelry-website/",
            "images": [
                "Mocup-rcj-1.jpg",
                "Mocup-rcj-2.jpg",
                "Mocup-rcj-3.jpg",
                "Mocup-rcj-4.jpg",
                "Mocup-rcj-5.jpg",
                "Mocup-rcj-6.jpg",
                "Mocup-rcj-7.jpg",
            ],
            "category": "Web Site",
            "client": "India",
            "projectDate": "Sep 2025",
            "projectUrl": "http://betaapp.rcjewelry.com/"

        },
        {
          "name": "Verifyzone",
          "titleTech": "Technologies",
          "technology": ["HTML", "CSS", "Bootstrap", "JQuery", "Javascript"],
          "description": "VerifyZone is a secure and streamlined platform for managing employee information with ease.It enables organizations to update employee details quickly and accurately.The system supports efficient background verification with fast processing.Built with strong security, it protects sensitive employee and company data.Its intuitive interface reduces manual effort and simplifies HR workflows.Real-time tracking keeps organizations informed of verification progress.",
          
          "subtitle1": "Project Overview",
          "subcontent1": "VerifyZone offers a smooth and efficient solution for managing employee records and verification workflows. The platform enables organizations to update employee information, upload required documents, and process verification requests quickly. With a clean interface and optimized performance, it ensures accuracy, reliability, and ease of use across all devices.",
          
          "subtitle2": "The Challenges",
          "subcontent2": "Managing sensitive employee data securely was a major challenge. Ensuring accuracy in verification processes while maintaining fast performance required strong backend optimization. Designing a user-friendly interface that simplifies data entry and document uploads also needed careful planning. Handling high-volume verification requests while remaining compliant with data protection standards added further complexity.",
          
          "subtitle3": "The Solutions",
          "subcontent3": "Implemented robust encryption and secure authentication to protect all employee details. Designed a simple and intuitive interface for smooth data updates and verification submission. Automated backend workflows to ensure fast, accurate verification processing. Integrated real-time status tracking and efficient data management systems to improve accuracy and user convenience.",
          
          "path": "/assets/img/project/verifyzone/",
          "images": [
            "verify-page-3.o.png",
            "page-1.png",
            "page-2.png",
            "page-3.png",
            "page-4.png",
            "page-5.png"
          ],
          "category": "Web Site",
          "client": "India",
          "projectDate": "Nov 2025",
          "projectUrl": "http://verifyzone.hermonsolutions.com/"
        },
        {
          "name": "Green Dart",
          "titleTech": "Technologies",
          "technology": ["HTML", "CSS", "Bootstrap", "Javascript","React"],
          "description": "BuildConnect is a comprehensive platform connecting construction workers, contractors, and employers efficiently. It streamlines recruitment, project management, and workforce tracking. With robust tools for job postings, worker profiles, and skill verification, the system simplifies hiring and ensures the right talent is matched to the right projects. Its intuitive interface reduces administrative work and provides real-time updates on project staffing and progress.",

          "subtitle1": "Project Overview",
          "subcontent1": "BuildConnect offers an efficient solution for managing construction projects and workforce recruitment. The platform allows employers to post jobs, review worker profiles, track skills and certifications, and hire the right talent quickly. Workers can showcase their skills, apply for jobs, and manage their profiles with ease. The platform ensures a seamless connection between contractors and construction workers, improving project efficiency and reliability.",

          "subtitle2": "The Challenges",
          "subcontent2": "Coordinating construction projects with the right workforce was a major challenge. Ensuring timely hiring of skilled workers while maintaining compliance with safety and labor regulations required strong backend systems. Simplifying the process for workers to showcase skills and for contractors to review profiles efficiently also needed careful planning. Managing multiple projects, applications, and updates in real-time added further complexity.",

          "subtitle3": "The Solutions",
          "subcontent3": "Implemented a robust platform for job postings, worker profiles, and skill verification to streamline recruitment. Designed an intuitive interface for both employers and workers to manage projects and applications efficiently. Automated notifications and workflow tracking to ensure fast hiring and updates on workforce deployment. Integrated real-time dashboards to monitor project staffing, track worker availability, and improve overall operational efficiency.",
          "path": "/assets/img/project/green-dart/",
          "images": [
            "green-dart-6.png",
            "green-dart-1.png",
            "green-dart-2.png",
            "green-dart-3.png",
            "green-dart-4.png",
            "green-dart-5.png",
            "green-dart-7.png"
          ],
          "category": "Web Site",
          "client": "India",
          "projectDate": "Dec 2025",
          "projectUrl": "http://greendartbuilders.com/"
        },
        {
          "name": "Qatar Medical Center",
          "titleTech": "Technologies",
          "technology": ["HTML", "CSS", "Bootstrap","Javascript","Angular"],
          "description": "QMC (Qatar Medical Center) is a visa medical center website designed to simplify medical checkup appointments for individuals applying for visas. The platform provides details about medical services, required tests, and appointment booking facilities. It ensures a seamless process for patients to register, upload documents, and track their medical status. Fully responsive design allows smooth accessibility across desktops, tablets, and mobiles. Overall, it aims to streamline visa-related medical procedures with efficiency.",
          
          "subtitle1": "Project Overview",
          "subcontent1": "The website offers an intuitive interface for users to book medical appointments easily and securely. It supports online registration, document submission, status tracking, and report generation. Built using modern technologies, the system ensures speed, accuracy, and reliability in handling patient data. It is optimized for multi-device use, ensuring consistent experience across all platforms. By integrating healthcare and digital solutions, QMC enhances patient convenience and service delivery.",
          
          "subtitle2": "The Challenges",
          "subcontent2": "Handling sensitive patient medical data with security and confidentiality was a major challenge. Integrating appointment booking with doctor availability required strong backend logic. Ensuring compliance with healthcare and visa regulations added complexity. Designing a simple interface for diverse user groups was difficult. Maintaining reliability and accuracy while managing high appointment requests was another challenge.",
          
          "subtitle3": "The Solutions",
          "subcontent3": "Implemented secure authentication, encryption, and compliance measures for patient safety. Designed a user-friendly and multilingual UI for easy access to services. Optimized backend for appointment scheduling, report management, and notifications. Integrated real-time status updates and document tracking for transparency. Conducted extensive testing to ensure performance, accuracy, and reliability across all devices.",
          
          "path": "/assets/img/project/qmc/",
          "images": [
            "final-page-1-bqc.jpg",
            "final-page-2-bqc.jpg",
            "final-page-3-bqc.jpg",
            "page-1.jpg",
            "page-2.jpg",
            "page-3.jpg",
            "page-4.jpg",
            "page-5.jpg"
          ],
          "category": "Web Application",
          "client": "India",
          "projectDate": "May 2024",
          "projectUrl": "https://qatarmedicalcenter.com/"
        },
        {
            "name": "Ticket System",
            "titleTech": "Technologies",
            "technology": ["HTML", "CSS", "Bootstrap", "Javascript","TypeScript", "React", "PHP", "SQL"],
            "description": "Ticket System is a secure and user-friendly web application that allows customers to raise and track service requests for product issues. It enables quick ticket creation, efficient assignment to technicians, and real-time status updates. The platform ensures smooth communication between customers and service teams with a structured workflow. Built for reliability and ease of use, it improves service management efficiency and customer satisfaction.",
            "subtitle1": "Project Overview",
            "subcontent1": "The Ticket System is a web-based application that allows customers to register and raise service tickets for product issues. It provides a dashboard for managing tickets, assigning technicians, and tracking service status in real time. The system ensures smooth communication between customers and service employees with efficient workflow management.",
            "subtitle2": "The Challenges",
            "subcontent2": "Handling multiple user roles, managing large volumes of service requests, and ensuring accurate ticket tracking were key challenges. Maintaining security and providing a simple interface for all users also required careful design.",
            "subtitle3": "The Solutions",
            "subcontent3": "A role-based system with secure login, automated ticket assignment, and real-time status updates was implemented. A responsive dashboard and optimized backend improved usability, performance, and service efficiency.",
            "path": "/assets/img/project/ticket-system/",
            "images": [
                "page1.png",
                "page2.png",
                "page3.png",
                "page4.png",
                "page8.png",
                "page6.png",
                "page7.png"
            ],
            "category": "Web Application",
            "client": "India",
            "projectDate": "Jan 2026",
            "projectUrl": "http://ticketsystem.hermonsolutions.com"
        },
  ]
  
  return (
    <main className="main">
    {/* <Loading/> */}
    <div className="page-title">
      <div className="breadcrumbs">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={"/"} ><i className="bi bi-house"></i> Home</Link></li>
            <li className="breadcrumb-item"><Link to={"/"} state={{ setActiveSection: "portfolio" }}><i className="bi bi-bag-heart"></i> Portfolio</Link></li>
            <li className="breadcrumb-item active current"><i className="bi bi-card-checklist"></i> Project Details</li>
          </ol>
        </nav>
      </div>
      
    </div>

    {projectDetails?.filter(project => project?.name === projectNavDetails?.name)?.map((projectData,index)=>(
    <React.Fragment key={index}>
    <div className="title-wrapper page-title container">
        <h1 style={{
            background: "linear-gradient(120deg, var(--heading-color), var(--accent-color))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>{projectData?.name}</h1>
      <p className="text-justify">{projectData?.description}</p>
    </div>
    <section id="portfolio-details" className="portfolio-details section">

      <div className="container" data-aos="fade-up">

        <div className="row gy-4 g-lg-5">
          <div className="col-lg-6 project-imgs">
            {projectData?.images.map((img, index) => (
              <img
                key={index}
                src={`${import.meta.env.BASE_URL}${projectData?.path}${img}`}
                className="img-fluid mb-4"
                alt=""
              />
            ))}
          </div>

          <div className="col-lg-6">

            <div className="position-sticky" style={{top: "40px"}}>
              <div className="portfolio-description">
                <h6 style={{borderLeft: "3px solid var(--accent-color)",paddingLeft:"5px"}}><i className="fa-solid fa-chalkboard-user me-1"></i>{projectData?.titleTech}</h6>
                <div className="text-justify d-flex flex-wrap" style={{ gap: "60px", margin: "45px 0"  }}>
                  {skillsData
                    .filter(skill => projectData?.technology.includes(skill.name))
                    .map((skill, index) => {
                        console.log(skill.svg)
                      return(
                      <div
                        className="d-flex align-items-center"
                        style={{
                          transitionDelay: `${skill.delay}ms`,
                          gap: "10px",
                          flex: "0 0 auto", 
                        }}
                        key={index}>
                        <div
                          className="skill-box icon-wrapper project-icon-wrapper"
                          // data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
                        >
                          {skill?.svg ? (
                            <span
                              className="icon"
                              style={{
                                  display: 'inline-block',
                                  width: '35px',
                                  height: '35px',
                                  background: skill.background,
                                  fill:skill.color,
                                  padding: skill?.name=="TypeScript" ? '2px 2px': '3px 8px',                                  
                                  borderRadius: '5px',
                                  position: 'absolute',
                                  top: '-20px',
                                }}
                              dangerouslySetInnerHTML={{ __html: skill.svg }}
                            />
                          ) : (
                            <i
                              style={{ color: skill?.color, background: skill.background }}
                              className={`${skill.icon}`}
                            ></i>
                          )}
                        </div>
                      </div>
                    )})}
                </div>

                <h6 style={{borderLeft: "3px solid var(--accent-color)",paddingLeft:"5px"}}><i className="fas fa-clipboard-list me-1"></i>{projectData?.subtitle1}</h6>
                <p className="text-justify">
                  {projectData?.subcontent1}
                </p>
                <h6 style={{borderLeft: "3px solid var(--accent-color)",paddingLeft:"5px"}}><i className="fas fa-exclamation-triangle me-1"></i>{projectData?.subtitle2}</h6>
                <p className="text-justify">
                  {projectData?.subcontent2}
                </p>
                <h6 style={{borderLeft: "3px solid var(--accent-color)",paddingLeft:"5px"}}><i className="fas fa-lightbulb me-1"></i>{projectData?.subtitle3}</h6>
                <p className="text-justify">
                  {projectData?.subcontent3}
                </p>

                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>I am a dedicated Full-Stack Web Developer and Software Engineer with strong expertise in Frontend development, Python & PHP backend engineering, and end-to-end web application architecture. I specialize in creating high-performance, user-friendly, and scalable digital solutions that deliver real business value.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img src={profile} className="testimonial-img" alt=""/>
                    <h3>Selvaganesh</h3>
                    <h4>Software Developer</h4>
                  </div>
                </div>

                <p>
                  Software Developer specializing in Frontend Engineering, Python & PHP Backend Development, and complete Web Application Architecture. I build digital experiences that are fast, intuitive, and scalable—turning ideas into smart, reliable software solutions.</p>
                {/* <p>
                  My work blends clean UI design, efficient backend logic, and scalable software architecture, enabling me to deliver complete, end-to-end web solutions. I love solving complex problems and turning ideas into fully functional applications that users enjoy and businesses rely on.</p> */}
              </div>

              <div className="portfolio-info mt-5">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong> {projectData?.category}</li>
                  <li><strong>Client</strong> {projectData?.client}</li>
                  <li><strong>Project date</strong> {projectData?.projectDate}</li>
                  <li><strong>Project URL</strong> <a href={projectData?.projectUrl} target='_blank' style={{color: "var(--accent-color)"}}>{projectData?.projectUrl}</a></li>
                  <li><a href={projectData?.projectUrl} target='_blank' className="btn-visit align-self-start btn-53 fw-bold">
                  
                  <div className="original">Visit Website</div>
                <div className="letters">
                  <span>V</span>
                  <span>i</span>
                  <span>s</span>
                  <span>i</span>
                  <span>t</span>
                  <span>&nbsp;</span>
                  <span>W</span>
                  <span>e</span>
                  <span>b</span>
                  <span>s</span>
                  <span>i</span>
                  <span>t</span>
                  <span>e</span>
                </div>
                  </a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
</React.Fragment>))}
  </main> 
  )
}

export default PortfolioDetailsComponent