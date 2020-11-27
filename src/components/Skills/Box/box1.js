import React from 'react';
import Icon from '../Icon/icon';

const Box1 = ({ headIcon, head }) => (

    <>
        <div className="set">
            <span class={headIcon}></span>
            <header>{head}</header>

            <Icon
                title="Html"
                icon="fab fa-html5"
            />

            <Icon
                title="Css"
                icon="fab fa-css3-alt"
            />

            <Icon
                title="JavaScript"
                icon="fab fa-js"
            />


            <Icon
                title="Php"
                icon="fab fa-php"
            />

            <Icon
                title="MySQL"
                icon="fab fa-database"
            />
        </div>
    </>
);

export default Box1;

