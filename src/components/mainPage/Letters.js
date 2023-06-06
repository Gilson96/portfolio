import React from 'react'
import { Animation} from 'react-easy-animations';

const Letters = (props) => {
  return (
    <span className={props.class}>
    
        {props.hovering && <Animation
            className='letters'
            type="flash"
            duration="100ms"
            delay="index * 100ms"
            direction="normal"
            timing="ease"
            iteration="5"
            fillMode="none">
            {props.letters}
        </Animation>}
        </span>
  )
}
export default Letters