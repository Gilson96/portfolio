import React from 'react'

const ProjectCarousel = (props) => {
    return (
        <ul className="projects">
            <div className="projects-card">
                <li className="project-image" key={props.key}>
                    <img src={props.image} alt="project" />
                </li>
                <p className='project-text'>{props.description}</p>
                <div className="projects-btn">
                    <button className="project-btn live"><p className='project-links'><a href={props.live}>Live</a></p></button>
                    <button className="project-btn repo"><p className='project-links'><a href={props.github}>Github</a></p></button>
                </div>
            </div>
        </ul>
   
    )
}

export default ProjectCarousel