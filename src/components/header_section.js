import React from "react";

// photo
import photo from "../assets/me.jpg"
const Header_section = () =>(

   <header id="home">
        <div className="container">
            <div className="name">
                <h1>Gilson de Almeida</h1>
                <h2>Web developer</h2>
            </div>
            <div className="photo"> 
                <img width={529} height={529} src={photo} alt="profile photo"/>
            </div>
            <div className="intro">
                <p>Enthusiastic professional eager to contribute to team success through hard work, attention to detail and organisation. I have always held a keen interest in IT and have recently undertaken a few online courses and a bootcamp. Motivated to learn, grow and excel in IT industry.</p>
            </div>
        </div>
   </header>
)

export default Header_section;