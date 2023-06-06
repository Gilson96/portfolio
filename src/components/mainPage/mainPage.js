import React, {useState} from 'react'
import MainPage_content from './mainPage_content'
import Projects from '../Projects/projects'

const MainPage = () => {  
    const [clickedProject, setClickedProject] = useState(false)
    
    const clickedProjectsHandler = () => {
      setClickedProject(true)
    }

    const closeProjectHandler = () => {
      setClickedProject(false)
    }

    return (
    <div className='main-page'>
      {clickedProject ? <Projects onClose={closeProjectHandler}/> : <MainPage_content onProjectSwitch={clickedProjectsHandler}/>}
      
    </div>
  )
}

export default MainPage