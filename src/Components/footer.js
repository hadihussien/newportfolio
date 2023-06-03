import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function footer() {
    return (
        <section id="footer" className='bg-[#efefef] py-16'>
            <div className='container flex flex-col m-auto justify-center lg:flex-row'>
                <div className='mb-10 lg:basis-1/3'>
                    <h1 className='text-base'>About Me</h1>
                    <p className='text-[#888]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className='lg:basis-3/12 lg:text-center mb-10'>
                    <h3 className='mb-8'>Connect</h3>
                    <div className='flex lg:justify-center'>
                        <a href='#' className='p-2 me-1 transition rounded-full bg-[#777] text-white hover:bg-[#96bb7c]'><FontAwesomeIcon className='block w-4 h-4' icon={faInstagram} /></a>
                        <a href='#' className='p-2 me-1 transition rounded-full bg-[#777] text-white hover:bg-[#96bb7c]'><FontAwesomeIcon className='block w-4 h-4' icon={faLinkedin} /></a>
                        <a href='https://github.com/hadihussien' className='p-2 me-1 transition rounded-full bg-[#777] text-white hover:bg-[#96bb7c]'><FontAwesomeIcon className='block w-4 h-4' icon={faGithub} /></a>
                    </div>
                </div>
                <div className='lg:basis-2/12'>
                    <h3 className='mb-8'>Contact</h3>
                    <address className='text-[#777]'>Syria, Damascus</address>
                    <span className='text-[#777]'>+963935524793</span><br/>
                    <span className='text-[#777]'>hadi.hussien.1993@gmail.com</span>
                </div>
            </div>
        </section>
    )
}
