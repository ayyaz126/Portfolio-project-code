import React, { useEffect, useRef, useState } from 'react'

function Home() {
         const [name , SetName] = useState("");
         const [email , SetEmail ]= useState("");
         const [subject, Setsubject] = useState("");
         const [massage, Setmassage] = useState("");


     


   const handel =()=>{
      
    localStorage.setItem("name", name);
    localStorage.setItem('email', email);
    localStorage.setItem('subjecy' , subject );
    localStorage.setItem('massage', massage);

   }
    
   
  return (
    <div>
         {/* ======= Mobile nav toggle button ======= */}
         <i className="bi bi-list mobile-nav-toggle d-xl-none" />
        {/* ======= Header ======= */}
        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img src="assets/img/ayayzi.jpg" alt="" className="img-fluid rounded-circle" />
              <h1 className="text-light"><a href="index.html">Ayyaz yousaf</a></h1>
              <div className="social-links mt-3 text-center">
                <a href="https://twitter.com/AyyazYousaf3" className="twitter"><i className="bx bxl-twitter" /></a>
                <a href="https://www.facebook.com/shakeayyaz.shakeayyaz/" className="facebook"><i className="bx bxl-facebook" /></a>
                <a href="https://www.instagram.com/sheikh8394/" className="instagram"><i className="bx bxl-instagram" /></a>
                <a href="https://www.linkedin.com/in/ayyaz-yousaf-8131881b2/" className="linkedin"><i className="bx bxl-linkedin" /></a>
               
              </div>
            </div>
            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
                <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>
                <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Services</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
              </ul>
            </nav>{/* .nav-menu */}
          </div>
        </header>{/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
          <div className="hero-container" data-aos="fade-in">
            <h1>Ayyaz yousaf</h1>
            <p>I'm Mern Stack Developer, <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
          </div>
        </section>{/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container">
              <div className="section-title">
                <h2>About</h2>
                <p>Innovative Web Developer With 5 months of Experience in Mern Stack , Redux. I Work Smoothly Under deadkine pressure and constantly upgrade my skill,I am an easy person to integrate with the team, and responsible enough to work with no Supervision. I am a Client-Oriented Full Stuck Web Develper,that's why i am always finding best possible solution for any</p>
              </div>
              <div className="row">
                <div className="col-lg-4" data-aos="fade-right">
                  <img src="assets/img/ayayzi.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                  <h3>UI/UX Designer &amp; Web Developer.</h3>
                  <p className="fst-italic">
                   Work On Time (06/2022 - 07/2022) Projects submitted on Time. 
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>19 DEC 1994</span></li>
                        <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.ayyaz.com</span></li>
                        <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+92 3164108418</span></li>
                        <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Lahore , Pakistan</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>29</span></li>
                        <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Bachelor</span></li>
                        <li><i className="bi bi-chevron-right" /> <strong>PhEmailone:</strong> <span>yousafayyaz882@gmal.com</span></li>
                        <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                      </ul>
                    </div>
                  </div>
                  <p>
                         
                    

                       Smart Work (05/2022 - 06/2022 ) finding the easiest and tje shortest way solution 
                  </p>
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Facts Section ======= */}
          <section id="facts" className="facts">
            <div className="container">
              <div className="section-title">
                <h2>Facts</h2>
                
              </div>
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile" />
                    <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                    <p><strong>Happy Clients</strong> consequuntur quae</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={100}>
                  <div className="count-box">
                    <i className="bi bi-journal-richtext" />
                    <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                    <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={200}>
                  <div className="count-box">
                    <i className="bi bi-headset" />
                    <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
                    <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={300}>
                  <div className="count-box">
                    <i className="bi bi-people" />
                    <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
                    <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Facts Section */}
          {/* ======= Skills Section ======= */}
          <section id="skills" className="skills section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Skills</h2>
                <p> </p>
              </div>
              <div className="row skills-content">
                <div className="col-lg-6" data-aos="fade-up">
                  <div className="progress">
                    <span className="skill">HTML <i className="val">100%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">CSS <i className="val">60%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">JavaScript <i className="val">50%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                  <div className="progress">
                    <span className="skill">React Js <i className="val">60%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">Nodo Js <i className="val">50%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">MongoDB  <i className="val">40%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Skills Section */}
          {/* ======= Resume Section ======= */}
          <section id="resume" className="resume">
            <div className="container">
              <div className="section-title">
                <h2>Resume</h2>
                <p>Innovative Web Developer With 5 months of Experience in Mern Stack , Redux. I Work Smoothly Under deadkine pressure and constantly upgrade my skill,I am an easy person to integrate with the team, and responsible enough to work with no Supervision. I am a Client-Oriented Full Stuck Web Develper,that's why i am always finding best possible solution for any</p>
              </div>
              <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <h4>Ayyaz yousaf</h4>
                    <p><em>Innovative and deadline-driven Web developing  with 1 years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                    <ul>
                      <li>Pakistan, Lahore punjab, Green Twon</li>
                      <li>(+92-3164108418 )</li>
                      <li>yousafayyaz88@gmail.com</li>
                    </ul>
                  </div>
                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>  Matriculation &amp; Intermediate</h4>
                    <h5> Matriculation:  2011- 2012</h5>
                    <br/>
                    <h5> Intermediate:   2013 - 2015</h5>
                     
                    <p><em>Punjab Collage Institute of Technology,</em></p>
                    <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                  </div>
                  <div className="resume-item">
                    <h4>Bachelor of Fine Arts &amp; Web developing</h4>
                    <h5>2016 - 2018</h5>
                    <p><em> Bachelor of fine Arts From Punjab university </em></p>
                    <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                  <h3 className="resume-title">Professional Experience</h3>
                  <div className="resume-item">
                    <h4>Web Development</h4>
                    <h5>2023 - Present</h5>
                    <p><em>Experion, Lahore, Punjab </em></p>
                    <ul>
                      <li>Mern project (06/2022 - 07/2022) its a Mern Project, Fronted in on react and CSS,Backend is on Node js, express database in on MongoDB </li>
                      <li> Work On Time (06/2022-07/2022) Project submitted on Timed  </li>
                      <li>Smart Work (05/2022 - 06/2022) finding the easited and the shortest way to solution  </li>
                      <li>Decument for Code(09/2023- present) Comments are added in the code to be easily understand by developer when shift on the project.   </li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>SHORT COURSES</h4>
                       
                    <p><em></em></p>
                    <ul>
                      <li>  (NexSkill / 3 moth)  Arfa Kareem Tower (Advance React js)  </li>
                      <li>(PYN Training/ 6 Months)Arfa Kareem Tower (Full Stack web Development)</li>
                      <li>(Corvit Training Institute / 5 months) Gullberg ( HTML, CSS , JavaScript) </li>
                      <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Resume Section */}
          {/* ======= Portfolio Section ======= */}
          <section id="portfolio" className="portfolio section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Portfolio</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Portfolio Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services">
            <div className="container">
              <div className="section-title">
                <h2>Services</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                  <div className="icon"><i className="bi bi-briefcase" /></div>
                  <h4 className="title"><a href>Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                  <div className="icon"><i className="bi bi-card-checklist" /></div>
                  <h4 className="title"><a href>Dolor Sitema</a></h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                  <div className="icon"><i className="bi bi-bar-chart" /></div>
                  <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                  <div className="icon"><i className="bi bi-binoculars" /></div>
                  <h4 className="title"><a href>Magni Dolores</a></h4>
                  <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                  <div className="icon"><i className="bi bi-brightness-high" /></div>
                  <h4 className="title"><a href>Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                  <div className="icon"><i className="bi bi-calendar4-week" /></div>
                  <h4 className="title"><a href>Eiusmod Tempor</a></h4>
                  <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>
              </div>
            </div>
          </section>{/* End Services Section */}
          
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <h2>Contact</h2>
               
              </div>
              <div className="row" data-aos="fade-in">
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt" />
                      <h4>Location:</h4>
                      <p>House No 408 ,Lahore Green Town</p>
                    </div>
                    <div className="email">
                      <i className="bi bi-envelope" />
                      <h4>Email:</h4>
                      <p>yousafayyaz882@gmail.com</p>
                    </div>
                    <div className="phone">
                      <i className="bi bi-phone" />
                      <h4>Call:</h4>
                      <p>+92 3164108418</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{border: 0, width: '100%', height: '290px'}} allowFullScreen />
                  </div>
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                  <form onSubmit={(e) => {
           e.preventDefault();
       }} className="php-email-form">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input type="text"   value={name}    onChange={(e)=>SetName(e.target.value)} className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Your Email</label>
                        <input type="email" value={email}   onChange={(e)=>SetEmail(e.target.value)}  className="form-control"  />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Subject</label>
                      <input type="text"   value={subject} onChange={(e)=>Setsubject(e.target.value)}  className="form-control"  />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Message</label>
                      <textarea  value={massage} onChange={(e)=>Setmassage(e.target.value)}                     className="form-control" name="message" rows={10} required defaultValue={""} />
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button  onClick={handel}  >Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>{/* End Contact Section */}
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="container">
            <div className="copyright">
               <strong><span> Ayyaz iPortfolio</span></strong>
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ */}
              <a href="https://bootstrapmade.com/"></a>
            </div>
          </div>
        </footer>
        {/* End  Footer */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    </div>
  )
}

export default Home