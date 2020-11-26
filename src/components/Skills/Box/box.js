import React from 'react';

const Box = ({ image, type }) => (

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
        </div>
    </>
);

export default Box;