import React, { Component } from 'react';
import Icon from '../Skills/Icon/icon';

class Contact extends Component {
    render() {
        return (
         
            <section id="contact">
            
            <h1 class="c-l-heading"><font style={{ borderBottom: 3+"px solid #1ED98B" }}>Contact</font> me</h1>
            
            <div className="contact-links">
               <a href="https://github.com/Gilson96"><i class="fab fa-github"></i>Github</a>
               <a href="https://www.linkedin.com/in/gilson-de-almeida-a51ba1194/"><i class="fab fa-linkedin-in"></i>Linkedin</a>
               <a href="#contact"><i class="far fa-envelope"></i>grafael99@gmail.com</a>
            </div>
                
          
            </section>
        )
    }
}

export default Contact;