import React from 'react'

export default function projects({pro}) {
    return (
        <div className={pro.photographer ?'relative sm:row-span-2 row-span-1  m-4 sm:m-1':'relative row-span-1  m-4 sm:m-1 block'}>
            <a href={pro.href}>
                <img src={pro.src} alt={pro.name}/>
                <div className='content absolute text-center'>
                    <h3 className='text-white text-lg'>{pro.name}</h3>
                    <h3 className='text-[#96bb7c]'>{pro.type}</h3>
                </div>
            </a> 
        </div>
    )
}
