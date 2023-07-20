import React from 'react';
import rastas from './imgs/rastas.jpg'

function Home() {
    return (

        <div className="d-flex flex-column bg-dark" >
        
        <div className='bg-dark'>
        <img className="img-fluid img-thumbnail" src={rastas} alt='bobo hill rastas'/>
        <div className='bg-dark'>

       
        <a type="button" href='/shopPage' className="btn btn-outline-secondary m-3">Shop</a>
        </div>
        </div>
        
        </div>
    )
}

export default Home;