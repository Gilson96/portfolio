import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <section class="homepage-head">
                <Grid className="homepage-grid">
                    <Cell col={12}>
                        <img 
                            alt="avatar"
                            className="avatar-image"
                            src="https://pickaface.net/gallery/avatar/20150803_213527_3101_RASTA.png"
                        />

                        <section className="homepage-banner">
                            <h1>Full Stack Web Developper</h1>

                            <hr/>
                            
                            <div className="homepage-skills">     
                                <a  target="_blank" rel="noopener noreferrer">
                                    {/* HTML */}
                                    <i class="fab fa-html5" aria-hidden="true"/> 
                                    {/* CSS */}
                                    <i class="fab fa-css3-alt" aria-hidden="true"/>
                                    {/* BootStrap */}
                                    <i class="fab fa-bootstrap" aria-hidden="true"/> 
                                    {/* JavaScript */}
                                    <i class="fab fa-js" aria-hidden="true"/> 
                                    {/* React */}
                                    <i class="fab fa-react" aria-hidden="true"/> 
                                    {/* Php */}
                                    <i class="fab fa-php" aria-hidden="true"/> 
                                    {/* Laravel */}
                                    <i class="fab fa-laravel" aria-hidden="true"/> 
                                    {/* Git */}
                                    <i class="fab fa-github-square"></i>
                                    {/* MySql */}
                                    <i class="fab fa-database"></i>
                                </a>
    
                            </div>
                        </section>
            



                    </Cell>
                </Grid>
                
            </section>
        )
    }
}

export default LandingPage;