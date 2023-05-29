import React from 'react'
import p1 from '../images/pexels-djordje-petrovic-2102416.jpg'

export default function Bio() {
    return (
        <div>
            <div id='Bio' className='bio min-[991px]:flex justify-between gap-10 items-center px-[2em] min-[560px]:px-[4em] md:px-[5rem] py-24 overflow-hidden' animated='scrolled animated'>
                <div className='img-container flex-1'>
                    <img src={p1} alt='sdad'></img>
                </div>
                <div id='bio-content' className='bio-content flex-1'>
                    <h1 className='main-heading'>My Bio</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br />
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <div className='skills my-8'>
                        <div className='skill-unit'>
                            <h3 className='text-lg mb-4'>Design</h3>
                            <div className='progress mb-4'>
                                <span></span>
                                <div progress='85%' style={{ width: "80%" }}></div>
                            </div>
                            <h3 className='text-lg mb-4'>HTML5</h3>
                            <div className='progress mb-4'>
                                <span></span>
                                <div progress='98%' style={{ width: "98%" }}></div>
                            </div>
                            <h3 className='text-lg mb-4'>CSS</h3>
                            <div className='progress mb-4'>
                                <span></span>
                                <div progress='97%' style={{ width: "97%" }}></div>
                            </div>
                            <h3 className='text-lg mb-4'>React JS</h3>
                            <div className='progress mb-4'>
                                <span></span>
                                <div progress='88%' style={{ width: "88%" }}></div>
                            </div>
                            <h3 className='text-lg mb-4'>TailWind</h3>
                            <div className='progress mb-4'>
                                <span></span>
                                <div progress='92%' style={{ width: "92%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <a className='bg-[#96bb7c] text-white rounded-full py-3 px-7 mr-4' href='#Contact' >Hire Me</a>
                        <a href={require('../resume.pdf')} download='resume' className='bg-[#5a6268] text-white rounded-full py-3 px-7'>Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
