import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

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
                           
                            <div className="homepage-banner-skills">
                                  
                               <div className="icon">
                                    {/*  HTML5  */}
                                    <i className="fab fa-html5" aria-hidden="true">
                                    </i>
                                </div>
                                <span>HTML5</span>
                            </div>

                            <div className="homepage-banner-skills">  
                               <div className="icon">
                                    {/* CSS */}
                                    <i className="fab fa-css3-alt" aria-hidden="true">
                                    </i>
                                </div> 
                                <span>CSS</span>
                            </div>


                            <div className="homepage-banner-skills">  
                               <div className="icon">
                                    {/* BootStrap  */}
                                    <i className="fab fa-bootstrap" aria-hidden="true">  
                                    </i> 
                                </div> 
                                <span>BootStrap</span>
                            </div>


                            <div className="homepage-banner-skills">  
                               <div className="icon">
                                    {/* JavaScript */}
                                    <i className="fab fa-js" aria-hidden="true">
                                    </i>
                                </div> 
                                <span>JavaScript</span>
                            </div>


                            <div className="homepage-banner-skills">  
                               <div className="icon">
                                    {/* React */}
                                    <i className="fab fa-react" aria-hidden="true">
                                    </i>
                                </div> 
                                <span>React</span>
                            </div>

                            <div className="homepage-banner-skills">  
                               <div className="icon">
                                    {/* Php */}
                                    <i className="fab fa-php" aria-hidden="true">
                                    </i>
                                </div> 
                                <span>Php</span>
                            </div>

                            <div className="homepage-banner-skills">  
                               <div className="icon">
                                    {/*  Laravel */}
                                    <i className="fab fa-laravel" aria-hidden="true"/> 
                                </div> 
                                <span>Laravel</span>
                            </div>

                            <div className="homepage-banner-skills">  
                               <div className="icon">
                                    {/*  Git */}
                                    <i className="fab fa-github-square"></i>
                                </div> 
                                <span>Git</span>
                            </div>

                            <div className="homepage-banner-skills">  
                               <div className="icon">
                                    {/*  Git */}
                                    <i className="fas fa-database"></i> 
                                </div> 
                                <span>MySql</span>
                            </div>   

                                     
                        </section>
            



                    </Cell>
                </Grid>
                
            </section>
        )
    }
}

export default HomePage;