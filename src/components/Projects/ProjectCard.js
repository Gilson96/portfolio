import React from 'react';


const ProjectCard = ({ title, description, gitLink, liveDemo, image }) => (

    <div class="p-box">

        {/* text */}
        <div class="overlay-text">

            <h1>{title}</h1>
            <p>{description}</p>
            <div className="links">
                <a href={gitLink}>GitHub</a>
                <a href={liveDemo}>Live</a>
            </div>
        </div>

        {/* bg-img */}
        <img src={image} />
        
    </div>

);


export default ProjectCard;