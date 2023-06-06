import React from "react";

// images
import tindog from '../../assets/tindog_logo.png'
import toDo from '../../assets/toDo.png'
import reactMeals from '../../assets/reactMeals.png'
import projectTitle from '../../assets/projects.png'
import ProjectCarousel from "./carousel";
import { Carousel } from "react-bootstrap";


const Projects = (props) => {

    const projects = [
        { 
            key: 1, 
            live: "https://gilson96.github.io/TinDog/", 
            github: "https://github.com/Gilson96/TinDog", 
            image: tindog, 
            description: " A simple yet beautiful website built with react-bootstrap."
         },
        { 
            key: 2, 
            live: "https://gilson96.github.io/to-do/",
            github: "https://github.com/Gilson96/to-do", 
            image: toDo,
            description: "A to-do list built with typeScript, an app where user can write and deleting task."
         },
        { key: 3, 
            live: "https://gilson96.github.io/ReactMeals/", 
            github: "https://github.com/Gilson96/ReactMeals", 
            image: reactMeals,
            description:" A food order app where user can make, update and delete an order"
         },
    ]


    return (
        <>
            <img src={projectTitle} alt="title" className="projects-title" />
            <button className="backMenu" onClick={props.onClose}>
                <p className="backMenu-text">
                    B
                    <span>a</span>
                    c
                    <span>k</span>
                </p>
            </button>
            <div className="projects-box">

                <Carousel 
                    fade={true}
                    interval={100000}
                >

                    {projects.map((project, index) => (
                        <Carousel.Item>
                            <ProjectCarousel
                                key={project.id}
                                image={project.image}
                                description={project.description}
                                live={project.live}
                                github={project.github}
                            />
                            
                            <h1>{index + 1 + "/" + projects.length}</h1>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div >
            
        </>
    )
}

export default Projects;


