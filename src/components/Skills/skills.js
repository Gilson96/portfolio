import React, { Component } from 'react';
import Box from './Box/box';


class Skills extends Component {
    render() {
        return (
            // <!--services-------------------->
            <section id="services">

            {/* <!--heading--------------> */}
            <div class="s-heading">
            <h1>SKills</h1>
            <p>Here Is The Some Servies Which We Provide You.</p>
            </div>
            
            {/* <!--services-box-container---------> */}
            <div class="b-container">
            
            <Box 
                image="#"
                type="Front End"
            
            />
            {/* <!--box-2----------------> */}
            <div class="s-box">
            {/* <!--img-------------> */}
            <div class="s-b-img">
            {/* <!--type-----------> */}
                <div class="s-type">Back-End</div>
                {/* <!--name-------> */}
                <img src="images/s2.png"/>
            </div>
            {/* <!--text-----------------> */}
            <div class="s-b-text">
            <a href="#"></a>	
            </div>
            </div>
                {/* <!--box-3----------------> */}
            <div class="s-box">
            {/* <!--img-------------> */}
            <div class="s-b-img">
                {/* <!--type-----------> */}
                <div class="s-type">SEO</div>
                {/* <!--name-------> */}
                <img src="images/s3.jpg"/>
            </div>
            {/* <!--text-----------------> */}
            <div class="s-b-text">
            <a href="#">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</a>	
            </div>
            </div>
            </div>
            </section>
            
        )
    }
}

export default Skills;