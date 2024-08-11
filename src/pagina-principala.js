import React from 'react';
import Navbar from './navbar';
import './PaginaPrincipala.css';
import facebook from "./assets/facebook.png"
import github from "./assets/github.png"
import education from "./assets/education.png"
import arrow from "./assets/arrows.png"
import accountPicture from "./assets/accountpicture2.jpg"
import about from "./assets/aboutPicture.jpg"
import drawing from "./assets/drawing.png"
import football from "./assets/football.jpg"
import programming from "./assets/hobbie3.jpg"
import work from "./assets/Work.jpg"
import figma from "./assets/figma.png"
import usv from "./assets/usv.png"
import email from "./assets/email.png"
const PaginaPrincipala = () => {
    return (
        <div>
            <Navbar />
            <section id="profile">
                <div className="section_picture">
                    <img src={accountPicture} alt="Profile" />
                </div>
                <div className="section_text">
                    <h1 className="title">Domnița Andrei Claudiu</h1>
                    <p className="section_text_p2">Student</p>
                    <div className="btn-container">
                    <button className="btn btn-color1" onClick={() => window.open('./assets/CV.pdf', '_blank')}>Vezi CV-ul meu</button>
                        <button className="btn btn-color2" onClick={() => window.location.href = '#contact'}>Contact</button>
                    </div>
                    <div id="social-container">
                        <img src={facebook} alt="Facebook" className="icon" onClick={() => window.location.href = 'https://www.facebook.com/AndreiAndrei7v?locale=ro_RO'} />
                        <img src={github} alt="GitHub" className="icon" onClick={() => window.location.href = 'https://github.com/AndreiClaudiu2001'} />
                    </div>
                </div>
            </section>

            <section id="about">
                <h1 className="title">Despre mine</h1>
                <div className="section-container">
                    <div className="section-pic-container">
                        <img className="about-picture" src={about} alt="About Me" />
                    </div>
                    <div className="about-details-container">
                        <div className="about-container">
                            <img className="icon" src={education} alt="Education" />
                            <h3>Studii</h3>
                            <p>Facultatea de Inginerie Electrică și Știința Calculatoarelor<br />Calculatoare <br /> Anul IV</p>
                        </div>
                        <p className="section_text_p2">Salut, numele meu este Domnița Andrei Claudiu și mă bucur că îmi urmărești site-ul. Sunt student la Facultatea de Inginerie Electrică și Știința Calculatoarelor. <br />Sunt atras de <strong>desen</strong>, <strong>design</strong> și mai nou de <strong>front-end</strong>. <br /><br /> Poate găsești și tu inspirație în următorul citat <br /> <em>"The magic you're looking for is in the work that you're avoiding"</em></p>
                    </div>
                </div>
                <img className="icon arrow" onClick={() => window.location.href = '#hobbies'} src={arrow} alt="Next" />
            </section>

            <section id="hobbies">
                <h1 className="title">Pasiuni</h1>
                <div className="hobbies-container">
                    <div className="hobbie">
                        <img className="hobbie-img" src={drawing} alt="Drawing" />
                        <p className="hobbie-descr">Desen</p>
                    </div>
                    <div className="hobbie">
                        <img className="hobbie-img" src={football} alt="Football" />
                        <p className="hobbie-descr">Fotbal</p>
                    </div>
                    <div className="hobbie">
                        <img className="hobbie-img" src={programming} alt="Programming" />
                        <p className="hobbie-descr">Programare</p>
                    </div>
                </div>
                <img className="icon arrow" onClick={() => window.location.href = '#projects'} src={arrow} alt="Next" />
            </section>

            <section id="projects">
                <p className="section_text_p1">Descoperă cele mai recente</p>
                <h1 className="title">PROIECTE</h1>
                <div className="project-details-container">
                    <div className="project-container">
                        <div className="photo-container">
                            <img src={work} className="project-img" alt="Work in Progress" />
                        </div>
                        <h2 className="subtitle-project">Work in progress</h2>
                        <div className="project-btn-containers">
                            <button className="btn project-btn disabled-button" onClick={() => window.location.href = 'github.com'} disabled>GitHub</button>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="photo-container">
                            <img src={figma} className="project-img" alt="CSU Website Design" />
                        </div>
                        <h2 className="subtitle-project">CSU Website Design</h2>
                        <div className="project-btn-containers">
                            <button className="btn btn-color2 project-btn" onClick={() => window.location.href = 'https://www.figma.com/file/VFxY1QEWAtK5r5UyoY1gmD/Pagini-secundare?type=design&node-id=78%3A60&mode=design&t=FDx1zZei96YVH0Eo-1'}>Figma</button>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="photo-container">
                            <img src={usv} className="project-img" alt="USV Activities Database" />
                        </div>
                        <h2 className="subtitle-project">USV Activities Database</h2>
                        <div className="project-btn-containers">
                            <button className="btn btn-color2 project-btn" onClick={() => window.location.href = 'https://github.com/AndreiClaudiu2001/Database-USV-Project'}>GitHub</button>
                        </div>
                    </div>
                </div>
                <img className="icon arrow" onClick={() => window.location.href = '#contact'} src={arrow} alt="Next" />

            </section>

            <section id="contact">
                <h1 className="title">Contactează-mă</h1>
                <div className="contact-info-upper">
                    <div className="contact-info-container">
                        <img src={email} className="icon email-icon" alt="Email" />
                        <p>andrei.domnita@student.usv.ro</p>
                    </div>
                    <div className="contact-info-container">
                        <img src={email} className="icon email-icon" alt="Email" />
                        <p>claudiu987@gmail.com</p>
                    </div>
                    <div className="contact-info-container">
                        <img src={facebook} className="icon" onClick={() => window.location.href = 'https://www.facebook.com/AndreiAndrei7v?locale=ro_RO'} alt="Facebook" />
                        <p><a href="https://www.facebook.com/AndreiAndrei7v?locale=ro_RO">Claudiu Andrei Domnița</a></p>
                    </div>
                </div>
            </section>

            <footer>
                <p>© 2024 Domnița Andrei Claudiu. Toate drepturile rezervate.</p>
            </footer>
        </div>
    );
};

export default PaginaPrincipala;
