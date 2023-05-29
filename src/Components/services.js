import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
    return (
        <div id='Services' className='services py-12'>
            <h1 className='main-heading text-center my-10'>Services</h1>
            <div className='flex flex-col mx-4 gap-6 sm:flex-row'>
                <div className='service-unit text-center p-8'>
                    <FontAwesomeIcon className='text-[#96bb7c] text-5xl mb-3' icon={faDisplay}/>
                    <h3 className='text-lg mb-3'>Development</h3>
                    <p className='text-[#939393]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className='service-unit text-center p-8'>
                    <FontAwesomeIcon className='text-[#96bb7c] text-5xl mb-3' icon={faCompassDrafting}/>
                    <h3 className='text-lg mb-3'>Development</h3>
                    <p className='text-[#939393]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className='service-unit text-center p-8'>
                    <FontAwesomeIcon className='text-[#96bb7c] text-5xl mb-3' icon={faBasketShopping}/>
                    <h3 className='text-lg mb-3'>E Commerce</h3>
                    <p className='text-[#939393]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
        </div>
    )
}
