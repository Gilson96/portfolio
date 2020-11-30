import React, { Component } from 'react';
import Box1 from './Box/box1';
import Box2 from './Box/box2';
import Box3 from './Box/box3';

class Skills extends Component {
    render() {
        return (
            <section id="skills">
                <h1><font style={{ borderBottom: 3+"px solid #1ED98B" }}>Skills</font></h1>
                
                <div className="skill">
                    

                        <Box1
                            headIcon="fas fa-globe"
                            head="Development"
                        />

                        <Box2
                            headIcon="fas fa-toolbox"
                            head="Framework"
                        />
                        
                        <Box3
                            headIcon="fas fa-tools"
                            head="Tooling"
                        />
                    
                </div>
            </section>
        )
    }
}

export default Skills;

