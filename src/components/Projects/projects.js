import React, { useState } from "react";

// images
import tindog from '../../assets/tindog_logo.png'
import toDo from '../../assets/toDo.png'
import reactMeals from '../../assets/reactMeals.png'
import projectTitle from '../../assets/projects.png'
import blog from '../../assets/blog.png';
// Logos
import tindogLogo from '../../assets/tindogLogo.png';
import toDoLogo from '../../assets/ToDoLogo.png';
import reactMealsLogo from '../../assets/ReactMealsLogo.png';
import blogLogo from '../../assets/blogLogo.png';
import frontEndLogo from '../../assets/frontEndLogo.png'
import backEndLogo from '../../assets/backEndLogo.png'

import ProjectCarousel from "./carousel";
import { Carousel } from "react-bootstrap";
import FrontEnd from "./Front-End/frontEnd";
import BackEnd from "./Back-End/backEnd";


const Projects = (props) => {
    const [isFront, setIsFront] = useState(false);
    const [isBack, setIsBack] = useState(false);

    const isFrontHandler = () => {
        return setIsFront((prevOrder) => !isFront);
    }

    const isBackHandler = () => {
        return setIsBack((prevOrder) => !isBack);
    }

    const frontProjects = [
        {
            key: 1,
            title: tindogLogo,
            live: "https://gilson96.github.io/TinDog/",
            github: "https://github.com/Gilson96/TinDog",
            image: tindog,
            description: " A simple yet beautiful website built with react-bootstrap."
        },
        {
            key: 2,
            title: toDoLogo,
            live: "https://gilson96.github.io/to-do/",
            github: "https://github.com/Gilson96/to-do",
            image: toDo,
            description: "A to-do list built with typeScript, an app where user can write and deleting task."
        },
        {
            key: 3,
            title: reactMealsLogo,
            live: "https://gilson96.github.io/ReactMeals/",
            github: "https://github.com/Gilson96/ReactMeals",
            image: reactMeals,
            description: " A food order app where user can make, update and delete an order"
        },
    ]

    const backProjects = [
        {
            key: 1,
            title: blogLogo,
            live: "https://blog-article-41e29bebe3b8.herokuapp.com/",
            github: "https://github.com/Gilson96/blog_article",
            image: blog,
            description: "A article blog, where user can apply CRUD operatins with an article and comment."
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
                <img className="projects-box-title" onClick={isFrontHandler} src={frontEndLogo} />
                <div className="projects">
                    {isFront &&
                        frontProjects.map((project) => (
                            <FrontEnd
                                key={project.key}
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                live={project.live}
                                github={project.github}
                            />
                        ))
                    }
                </div>

                <img className="projects-box-title" onClick={isBackHandler} src={backEndLogo} />
                <div className="projects">
                    {isBack &&
                        backProjects.map((project, index) => (
                            <FrontEnd
                                key={index}
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                live={project.live}
                                github={project.github}
                            />
                        ))
                    }
                </div>
            </div>

            <p className="project-text">Click to see projects</p>

        </>
    )
}

export default Projects;
