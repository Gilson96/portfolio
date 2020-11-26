import React, { Component } from 'react';
import Box1 from './Box/box1';
import Box2 from './Box/box2';
import Box3 from './Box/box3';
import Icon from './Icon/icon';


class Skills extends Component {
    render() {
        return (
            <section id="services">

            {/* heading */}
            <div class="s-heading">
                <h1>Skills</h1>
            </div>
            
            {/* skill-box-container */}
            <div class="b-container">
            
            {/* Box 1 */}
            <Box1 
                 type="Web Technologies"
            />
        
          { /* Box 1 */}
            <Box2 
                 image="#"
                 type="Web Technologies"
            />
            
            
            {/* Box 1 */}
            <Box3 
                image="#"
                type="Front End"
            
            />
            
            </div>
            </section>
            
        )
    }
}

export default Skills;