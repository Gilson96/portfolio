import React from 'react';

const Icon = ({ title, icon }) => (
    <>
    
    <div className="list">
            <label>{title}</label>
            <i className={icon}></i>
    </div>
    </>
);

export default Icon;