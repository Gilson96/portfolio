import React from 'react';

const Skills = ({ title, icon }) => (

    <div className="homepage-banner-skills"> 
        <div className="icon">
            <i className={ icon } aria-hidden="true"/>
        </div>
        <span>{title}</span>
    </div>      
);

export default Skills;