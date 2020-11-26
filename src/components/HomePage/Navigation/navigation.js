import React from 'react';

const Navigation = () => (


    <nav>
        {/* <!--logo---> */}
        <a href="#" class="logo">Gilson</a>

        {/* <!--menu---------> */}
        <div class="toggle"></div>
        <ul class="menu">
            <li class="active"><a href="#" >Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact-form">Contact</a></li>
        </ul>
        
        {/* <!--language--> */}
        <a href="#" class="lang">En</a>
    </nav>
)

export default Navigation;