import React from 'react'

export default function projects({ pro }) {
    return (
            <div className={pro.photographer ? 'project-unit relative w-[300px]  m-4 sm:m-1' : 'project-unit w-[300px] relative  m-4 sm:m-1 block'}>
                    <img src={pro.src} alt={pro.name} />
                    <div className='content absolute text-center'>
                        <h3 className='text-white text-lg'>{pro.name}</h3>
                        <a href={pro.href} type='button' className='bg-[#96bb7c] text-white rounded p-2'>View Project</a>
                    </div>
            </div>
    )
}
