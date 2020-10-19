import React from 'react';
import SchoolOne from './schoolOne';
import SchoolTwo from './schoolTwo';

const Education = () => (
    <section>
        <div className="title_edu">
            Education
        </div>
        <div className="education_wrap">
            <ul>
                <SchoolOne/>
                <SchoolTwo/>
            </ul>
        </div>
    </section>
);

export default Education;