import { useSpring, animated } from '@react-spring/web'
import { Fade} from "react-awesome-reveal";

// icons
import TypeScript from './icons/icon_typeScript';
import JavaScript from './icons/icon_javaScript';
import Html from './icons/icon_html';
import Css from './icons/icon_css'
import React from './icons/icon_react';
import Php from './icons/icon_php'
import Laravel from './icons/icon_laravel';

const Skills = (props) => {

  const skills = [<TypeScript/>, <JavaScript/>, <Css/>, <Html/>, <React/>, <Php/>, <Laravel/> ];


  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })


  return (
    <ul className='skills-box'>
      <Fade delay={1e2} cascade damping={1e-1}>
        {skills.map(name => (
          <li className={'skills'}>
            <animated.span style={{ ...springs, }}>
              {name}
            </animated.span>
          </li>
        ))}
      </Fade>

    </ul>

  )
}

export default Skills;