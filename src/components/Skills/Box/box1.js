import React from 'react';
import Icon from '../Icon/icon';

const Box1 = ({ image, type }) => (

    <>

        <div class="s-box">
            {/* <!--img-------------> */}
            <div class="s-b-img">

                {/* <!--type-----------> */}
                <div class="s-type">{type}</div>

                {/* <!--name-------> */}
                <i class="fas fa-laptop-code"></i>

            </div>
            {/* icons */}

            <div className="s-icons">
                <Icon

                    icon="fab fa-html5"
                    title="html"
                />

                <Icon

                    icon="fab fa-html5"
                    title="html"
                />

                <Icon

                    icon="fab fa-html5"
                    title="html"
                />

                <Icon

                    icon="fab fa-html5"
                    title="html"
                />
            </div>
        </div>
    </>
);

export default Box1;