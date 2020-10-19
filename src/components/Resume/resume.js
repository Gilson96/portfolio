import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ResumeContact from './Left_Column/resume_contact';

import ResumeSkills from './Left_Column/resume_skills';
import ResumeLanguage from './Left_Column/resume_languages';
import Header from './Right_Column/header';
import Education from './Right_Column/Education/education';


class Resume extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left" col={4}>
                        <div className="resume-left-avatar">
                            <img
                                alt="avatar"
                                className="avatar-image"
                                src="https://pickaface.net/gallery/avatar/20150803_213527_3101_RASTA.png"
                            />
                        </div>
                        <Header />
                        <ResumeContact />
                        <div className="skills_wrap pb">
                            <div className="title">
                                skills
                            </div>
                            <div className="skills">
                                <ResumeSkills
                                    title="HTML"
                                    icon="fab fa-html5"
                                />
                                <ResumeSkills
                                    title="CSS"
                                    icon="fab fa-css3-alt"
                                />
                                <ResumeSkills
                                    title="BootStrap"
                                    icon="fab fa-bootstrap"
                                />
                                <ResumeSkills
                                    title="JavaScript"
                                    icon="fab fa-js"
                                />
                                <ResumeSkills
                                    title="React"
                                    icon="fab fa-react"
                                />
                                <ResumeSkills
                                    title="Php"
                                    icon="fab fa-php"
                                />
                                <ResumeSkills
                                    title="Laravel"
                                    icon="fab fa-laravel"
                                />
                                <ResumeSkills
                                    title="Git"
                                    icon="fab fa-github-square"
                                />
                                <ResumeSkills
                                    title="MySql"
                                    icon="fas fa-database"
                                />
                            </div>
                        </div>
                        <ResumeLanguage />
                    </Cell>
                    <Cell className="resume-right" col={8}>

                        <div className="right_inner">
                            <div className="education">
                                <Education />
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Resume;
