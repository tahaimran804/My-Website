import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
           <div className='px-4 col-12 col-md-4 mb-4 d-flex flex-wrap all_cards'>
           <div className="card mx-0" style={{ width: '20rem' }}>
                <img src={props.image} width='100%' className="card-img-top" alt="Image" />
                <div className="card-body">
                    <h5 className="card-title">{props.titel}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/about" className="btn btn-primary">Let's Talk</NavLink>
                </div>
            </div>
           </div>
        </>
    )
}


export default Card;
