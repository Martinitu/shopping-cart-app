import React from 'react';
import rastas from './imgs/rastas.jpg'
import {  Link } from "react-router-dom";

function Home() {
    return (

        <div className="d-flex flex-column bg-secondary " >
        
            <div className='bg-dark'>
            <img className="img-fluid img-thumbnail m-3" src={rastas} alt='bobo hill rastas'/>
            <div className='bg-dark'>

        
            <Link type="button" to='/shopPage' className="btn btn-outline-secondary m-3">Shop</Link>
            </div>
            </div>
        
        </div>
    )
}

export default Home;