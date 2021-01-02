import React, { Component } from 'react';
import ProjectCard from '../Projects/ProjectCard';
import Image_One from '../../Assets/marker01.png';
import Image_Two from '../../Assets/Screenshot.png';

class Projects extends Component {

    render() {
        return (
           
            <section id="projects">

                {/* heading */}
                <h1 class="p-headind">Projects</h1>

                {/* portfolio-container */}
                <div class="p-container">

                    <ProjectCard
                        title="Iscream"
                        description="A fully operational React and Redux App with a laravel API and a Leaftlet.js map."
                        gitLink="https://github.com/tom-meyrick/iScream"
                        liveDemo="https://tom-meyrick.github.io/iScream/#/"
                        image= {Image_One}
                    />
                    
                    <ProjectCard
                        title="CRUD APP"
                        description="A basic crud app that is able to add, edit, delete a task.."
                        gitLink="https://github.com/Gilson96/CRUD-App"
                        liveDemo="https://gilson96.github.io/CRUD-App/"
                        image= {Image_Two}
                    />
                </div>

            </section>
        )
    }
}

export default Projects;