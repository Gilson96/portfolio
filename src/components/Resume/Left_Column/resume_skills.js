import React from 'react';

const Resume_Skills = ({icon, title}) => (

    <section>
            <ul>
                <li>
                    <div className="li_wrap">
                        <div className="icon">
                            <i class={icon} aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            {title}
                        </div>
                    </div>
                </li>
            </ul>
    
    </section>
    
);




export default Resume_Skills;