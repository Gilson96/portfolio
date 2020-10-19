import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './Skills/skills';

class HomePage extends Component {
    render(){
        return(
            <section className="homepage-head">
                <Grid className="homepage-grid">
                    <Cell col={12}>
                        <img 
                            alt="avatar"
                            className="avatar-image"
                            src="https://pickaface.net/gallery/avatar/20150803_213527_3101_RASTA.png"
                        />

                        <section className="homepage-banner">

                            
                            <h1>Gilson de Almeida</h1>
                            <h1>Full Stack Web Developer</h1>   
                            <hr/>
                            <h1>Skills</h1>
                           <Skills
                                title="HTML"
                                icon="fab fa-html5"
                           />
                           <Skills
                                title="CSS"
                                icon="fab fa-css3-alt"
                           />
                           <Skills
                                title="BootStrap"
                                icon="fab fa-bootstrap"
                           />
                           <Skills
                                title="JavaScript"
                                icon="fab fa-js"
                           />
                           <Skills
                                title="React"
                                icon="fab fa-react"
                           />
                           <Skills
                                title="Php"
                                icon="fab fa-php"
                           />
                           <Skills
                                title="Laravel"
                                icon="fab fa-laravel"
                           />
                           <Skills
                                title="Git"
                                icon="fab fa-github-square"
                           />
                           <Skills
                                title="MySql"
                                icon="fas fa-database"
                           />
                        </section>
            



                    </Cell>
                </Grid>
                
            </section>
        )
    }
}

export default HomePage;