import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
    return (
        <section id='Services' className='services py-12'>
            <h1 className='main-heading text-center my-10'>Services</h1>
            <div className='flex flex-col mx-4 gap-6 sm:flex-row'>
                <div className='service-unit text-center p-8'>
                    <FontAwesomeIcon className='text-[#96bb7c] text-5xl mb-3' icon={faDisplay}/>
                    <h3 className='text-lg mb-3'>Development</h3>
                    <p className='text-[#939393]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste pariatur eaque amet repellendus quidem expedita magnam, temporibus vel possimus ipsam unde fuga debitis.</p>
                </div>
                <div className='service-unit text-center p-8'>
                    <FontAwesomeIcon className='text-[#96bb7c] text-5xl mb-3' icon={faCompassDrafting}/>
                    <h3 className='text-lg mb-3'>Development</h3>
                    <p className='text-[#939393]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste pariatur eaque amet repellendus quidem expedita magnam, temporibus vel possimus ipsam unde fuga debitis.</p>
                </div>
                <div className='service-unit text-center p-8'>
                    <FontAwesomeIcon className='text-[#96bb7c] text-5xl mb-3' icon={faBasketShopping}/>
                    <h3 className='text-lg mb-3'>E Commerce</h3>
                    <p className='text-[#939393]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste pariatur eaque amet repellendus quidem expedita magnam, temporibus vel possimus ipsam unde fuga debitis.</p>
                </div>
            </div>
        </section>
    )
}
