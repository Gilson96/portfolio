import React from "react";

// images
import tindog from '../assets/tindog_logo.png'
import drumkit from '../assets/drumkit_logo.png'
import iscream from '../assets/iscream.png'

const Projects = ({ title }) => {

    const name = [
        { key: 1, value1: "https://github.com/Gilson96/TinDog", value2: tindog },
        { key: 2, value1: "https://github.com/Gilson96/drumKit", value2: drumkit },
        { key: 3, value1: "https://github.com/tom-meyrick/iScream", value2: iscream }
    ]
    
    return (
        <main className="skills" id="projects">
            <header>
                <h1>{title}</h1>
            </header>

            <ul>
                {
                    name.map((link,index) => (

                        <li>
                            <p lassName="project_image">
                                <a href={link.value1} >
                                    <img src={link.value2} alt="project" />
                                </a>
                            </p>
                        </li>

                    ))
                }
            </ul>
        </main>
    )
}

export default Projects;