import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ProjectCard from './ProjectCard';

class Projects extends Component {

    render() {
        return (
            // <!--portfolio------------------->
            <section id="portfolio">
                {/* <!--heading-----------> */}
                <h1 class="p-headind">Portfolio</h1>
                {/* <!--portfolio-container------------> */}
                <div class="p-container">
                    {/* <!--portfolio-box-1--------> */}
                    <div class="p-box">
                        {/* <!--text---------> */}
                        <div class="overlay-text">
                            <h1>Writting</h1>
                            <p>Client Project</p>
                        </div>
                        {/* <!--bg-img-------------> */}
                        <img src="images/w1.jpg" />

                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;