import React from 'react';
import Icon from '../Icon/icon';

const Box2 = ({ headIcon, head }) => (

    <>
    <div className="set">
        <span class={headIcon}></span>
        <header>{head}</header>

        <Icon
            title="Laravel"
            icon="fab fa-laravel"
        />

        <Icon
            title="React/Redux"
            icon="fab fa-react"
        />

        <Icon
            title="Node.js"
            icon="fab fa-node-js"
        />


        <Icon
            title="Bootstrap"
            icon="fab fa-bootstrap"
        />
        </div>
    </>
);

export default Box2;
