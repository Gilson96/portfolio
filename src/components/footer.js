import React from "react";



const Footer = ({ title }) => {

    const links = []

    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <div className="container">

                    
                    <div className="down-below">
                    <h1>Contact</h1>
                    <span></span>
                        <ul className="links">
                            <li><a href="https://github.com/Gilson96"><i className="fab fa-github"></i></a></li>

                            <li><a href="https://www.linkedin.com/in/gilson-de-almeida-a51ba1194/"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>

                            <li><a href="mailto:grafael99@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>
                        </ul>


                       
                            <a href="#home" className="to-top"><i class="fa fa-arrow-up"></i></a>
                       
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;