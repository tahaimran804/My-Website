import React from 'react'


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='text-center mt-5'>© Taha Imran {year}. By SoraTemplates | DSTB By MyBloggerThemes</footer>
        </>
    )

}

export default Footer