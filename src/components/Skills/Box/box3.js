import React from 'react';
import Icon from '../Icon/icon';

const Box1 = ({ headIcon, head }) => (

    <>
        <div className="set">
            <span class={headIcon}></span>
            <header>{head}</header>

            <Icon
                title="Git"
                icon="fab fa-github"
            />

            <Icon
                title="AWS"
                icon="fab fa-aws"
            />

            <Icon
                title="Vagrant"
                icon="fab fa-vimeo-v"
            />

            <Icon
                title="Npm"
                icon="fab fa-npm"
            />

            <Icon
                title="APIs"
                icon="fab fa-database"
            />
        </div>
    </>
);

export default Box1;

