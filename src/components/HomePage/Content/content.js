import React from 'react';

const Content = () => (
    
    <>
     <div class="name">

     {/* hello */}
     <p>Hello</p>

     {/* name */}
     <h1>I'm <font color="#17d1ac">Gilson</font> De Almeida</h1>

     {/* details */}
     <p class="details">
        Enthusiastic professional eager to contribute to
        team success through hard work, attention to
        detail and organisation. I have always held a keen
        interest in IT and have recently undertaken a few
        online courses and a bootcamp. Motivated to
        learn, grow and excel in IT industry.
     </p>
        
         {/* cv button */}
     <a href="https://drive.google.com/file/d/12-HI2229vlK2Vgf-DHoUOZ5XNkvvg_-E/view?usp=sharing" class="cv-btn">Download Resume</a>

     </div>

     
     { /* social */ }
     <div class="social">
         <a href="#"><i class="fab fa-github"></i></a>
         <a href="#"><i class="fab fa-linkedin"></i></a>
     </div>
    </>
)

export default Content;