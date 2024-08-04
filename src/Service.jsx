import React from 'react'
import Card from "./Card";
import Data from './Data';

const Service = () =>{
    return(
        <>
            <div className='container mt-3'>
            <h1 className='text-center'>Our Services</h1>
                <div className='row justify-content-between align-items-center gy-5 my-4  all-item'>
                  {
                    Data.map((value , index) =>{
                        return(
                            <Card key={index}  image={value.img} titel={value.titel}/>
                        )
                    })
                   }
                </div>
            </div>
        </>
    )
}

export default Service