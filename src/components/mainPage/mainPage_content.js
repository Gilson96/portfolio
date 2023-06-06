import React, { useState } from 'react'
import Letters from './Letters';
import Contact from '../contact';
import Skills from '../Skills/skills';
import Logo from '../../assets/Gilson.png';

const MainPage_content = (props) => {
    const [projectHovering, setProjectHovering] = useState(false);
    const [skillsHovering, setSkillsHovering] = useState(false);
    const [ projectTitleHovering, setprojectTitleHovering] = useState(false);
   

    const projectsMouseEnterHandler = () => {
        setprojectTitleHovering(true)
        
    }
    const skillsMouseEnterHandler = () => {
        setSkillsHovering(true)
    }

    const skillsMouseLeaveHandler = () => {
        setSkillsHovering(false);
    }

    const projectsMouseLeaveHandler = () => {
        setprojectTitleHovering(false);
    }

    const projectGlow = projectHovering ? 'glow' : '';
    const skillstGlow = skillsHovering ? 'glow' : '';

    const projectLetterGlow = projectTitleHovering ? '' : 'display'
    const skillsLetterGlow = skillsHovering ? '' : 'display'

    return (
        <div className='mainPage-content'>

            <div className='logo-box'>
                <img className='logo' src={Logo} alt='logo' />
            </div>

            <div className='project-box'>
                <span class={`material-symbols-outlined icon projects-icon ${projectGlow}`}
                      onMouseEnter={projectsMouseEnterHandler}
                      onMouseLeave={projectsMouseLeaveHandler}
                    onClick={props.onProjectSwitch}
                >integration_instructions
                    {projectTitleHovering &&
                        <>
                            <Letters
                                class={`text + ${projectLetterGlow}`}
                                letters={'projetcs'}
                                hovering={projectTitleHovering}
                            />
                        </>
                    }
                </span>
                
            </div>

            <div className='project-box'>
                <span class={`material-symbols-outlined icon skills-icon ${skillstGlow}`}
                    onMouseEnter={skillsMouseEnterHandler}
                    onMouseLeave={skillsMouseLeaveHandler}
                >home_repair_service
                    <Letters
                        class={`text + ${skillsLetterGlow}`}
                        letters={'skills'}
                        hovering={skillsHovering}
                    />
                </span>

                {skillstGlow && <Skills hovering={skillsHovering} />}
                
            </div>

            <Contact />
        </div>
    )
}

export default MainPage_content