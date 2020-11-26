import React from 'react';
import Icon from '../Icon/icon';

const Box2 = ({ image, type }) => (

    <>
        
        <div class="s-box">
            {/* <!--img-------------> */}
            <div class="s-b-img">

                {/* <!--type-----------> */}
                <div class="s-type">{type}</div>

                {/* <!--name-------> */}
                <img src={image} />

            </div>
            {/* <!--text-----------------> */}

            <Icon

                icon="fab fa-html5"
                title="html"
            />
        
        </div>
    </>
);

export default Box2;