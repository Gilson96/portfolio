import { useSpring, animated } from '@react-spring/web'
import { Fade} from "react-awesome-reveal";

// icons
import TypeScript from './icon_typeScript';
import JavaScript from './icon_javaScript';
import Html from './icon_html';
import Css from './icon_css'
import React from './icon_react';


const Skills = (props) => {

  const skills = [<TypeScript/>, <JavaScript/>, <Css/>, <Html/>, <React/>];


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