import React, {useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const form = useRef();
    const sendmessage = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_hw3zbjj', 'template_lfndwmo', form.current, 'Bn6kaLO2gnpFloghe').then(
            () => alert('message sent!')
        ).catch(() => alert('the message not sent!!'))
    }
    useEffect(() => {
        window.alert = (message) => {
            let error = document.createElement('p');
            error.classList.add('alerting');
            error.innerHTML = message;
            document.body.appendChild(error);
            setTimeout(() => {
                error.remove()
            },2700)
        }
    })
    return (
        <div>
            <div id = 'Contact' className='contact py-12'>
                <h1 className='main-heading text-center my-16  font-medium'>Contact Me</h1>
                <div className='flex justify-center flex-col container m-auto lg:flex-row'>
                    <form ref={form} onSubmit={sendmessage} className='my-4 px-8 lg:basis-3/5'>
                        <div className='flex mb-4'>
                            <div className='basis-1/2 me-3'>
                                <label className='text-base text-[#939393]'>First Name</label>
                                <input className='block w-[100%] outline-none py-2 border-b border-[#43434d] focus:border-[#96bb7c]' required/>
                            </div>
                            <div className='basis-1/2'>
                                <label className='text-base text-[#939393]'>First Name</label>
                                <input className='block w-[100%] outline-none py-2 border-b border-[#43434d] focus:border-[#96bb7c]' required/>
                            </div>
                        </div>
                        <div>
                            <label className='block text-[#939393]'>Email Address</label>
                            <input className='w-[100%] outline-none border-b py-2 border-[#43434d] focus:border-[#96bb7c]' required/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-[#939393]'>Message</label>
                            <textarea className='block outline-none border-b border-[#43434d] focus:border-[#96bb7c] w-[100%]' cols='30' rows='5' />
                        </div>
                        <input value='SEND MESSAGE' className='text-xs text-white bg-[#96bb7c] px-[30px] py-[14px] outline-none rounded-full cursor-pointer' type='submit' />
                    </form>
                    <div className='lg:basis-2/5'>
                        <h3 className='text-lg mb-6'>Contact Info</h3>
                        <p  className='flex text-[#96bb7c] items-center gap-1 mb-4'>
                            <FontAwesomeIcon icon={faPhone} className='me-1' />
                            <span>+963935524793</span>
                        </p>
                        <p className='flex text-[#96bb7c] items-center gap-1 mb-4'>
                            <FontAwesomeIcon icon={faEnvelope} className='me-1' />
                            <span>hadi.hussien.1993@gmail.com</span>
                        </p>
                        <p className='flex text-[#96bb7c] items-center gap-1 mb-4'>
                            <FontAwesomeIcon icon={faGlobe} className='me-1' />
                            <span>hadi.hussien.1993@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
