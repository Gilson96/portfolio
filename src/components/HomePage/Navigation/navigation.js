import React from 'react';

const Navigation = (toggle) => (

    <nav>
        {/* <!--logo---> */}
        <a href="#" class="logo">Gilson</a>

        {/* <!--menu---------> */}
        {/* <div  class="toggle"></div>  */}

        
            <ul class="menu">
                <li class="active"><a href="#" >Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
      
        
       
    </nav>
)

export default Navigation;