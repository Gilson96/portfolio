import React from 'react';

const Icon = ({ title, icon }) => (

    <div className="homepage-banner-Icon"> 
        <div className="icon">
            <i className={ icon } aria-hidden="true"/>
        </div>
        <span>{title}</span>
    </div>      
);

export default Icon;