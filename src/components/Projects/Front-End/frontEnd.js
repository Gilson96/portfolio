import React from 'react'



const FrontEnd = (props) => {

   


    return (
        
        <div className='card'>
            <img className='card-title' src={props.title}/>
            <img className='card-image' src={props.image}/>
            <p className='card-description'>{props.description}</p>
            <div className='card-buttons'>
                <a href={props.live}><button>Live</button></a>
                <a href={props.github}><button>Github</button></a>
            </div>
        </div>
    )
}
 
export default FrontEnd

// <div class="card" >
//             <img class="card-img-top" alt="Card image cap" />
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>