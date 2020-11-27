import React, { Component } from 'react';
import ProjectCard from '../Projects/ProjectCard';
import Image from '../../Assets/marker01.png';

class Projects extends Component {

    render() {
        return (
           
            <section id="portfolio">

                {/* heading */}
                <h1 class="p-headind">Projects</h1>

                {/* portfolio-container */}
                <div class="p-container">

                    <ProjectCard
                        title="Iscream"
                        description="A fully operational React and Redux App with a laravel API and a Leaftlet.js map."
                        gitLink="https://github.com/tom-meyrick/iScream"
                        liveDemo="https://tom-meyrick.github.io/iScream/#/"
                        image= {Image}
                    />
                    
                </div>

            </section>
        )
    }
}

export default Projects;