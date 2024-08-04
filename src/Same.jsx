import React from "react"
import { NavLink } from 'react-router-dom'

const Same = (props) => {
    return (
        <>
            <section className='section-1'>
                <div className='main_menu container gap-5'>
                    <div className='text'>
                        <h1 className='fs-1 fw-bold'>{props.Name} <em style={{ color: 'coral' }}>Taha Imran</em></h1>
                        <h3 className='fs-5 fw-light'>We are The Team Of Telent Web Developer Making Websites</h3>
                        <NavLink to={props.visited} className='bnt-get-started '>{props.bnt}</NavLink>
                    </div>
                    <div className='Image'>
                        <img src={props.img} alt='images' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Same;