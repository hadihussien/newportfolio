import React, { useEffect, useState } from 'react'
import Project from './projects'
import photographer from '../images/portfolio/photographer.jpg'
import linkshorten from '../images/portfolio/short.PNG'
import molly from '../images/portfolio/molly.PNG'
import memory from '../images/portfolio/memory.PNG'
import patisserie from '../images/portfolio/patisserie.PNG'
import todo from '../images/portfolio/ToDoList.PNG'
import arti from '../images/portfolio/Capture.PNG'

export default function Portfolio() {
    const projects = [{ name: 'Photographer', type: 'all landing', "src": photographer, photographer, href: 'https://photohdhd.000webhostapp.com/' },
    { name: 'Linkshortening', type: 'all Functioning', "src": linkshorten, href: 'https://shortlyhdhd.000webhostapp.com/' },
    { name: 'Pattisserie', type: 'all landing', "src": patisserie, href: 'https://patisserie-omega.vercel.app/' },
    { name: 'Photographer', type: 'all landing', "src": molly, href: 'https://mollyhdhd.000webhostapp.com/' },
    { name: 'Todo', type: 'all Functioning', "src": todo, href: 'https://to-do-list-phi-seven.vercel.app/' },
    { name: 'Arti', type: 'all landing', "src": arti, href: 'http://artiportfolio.atwebpages.com/' },
    {name: 'Memory', type: 'all Functioning', "src": memory, href: 'https://memory-game-tau-two.vercel.app/'}
    ]
    const [filter, setfilter] = useState('')
    const[active,setactive] = useState('all')
    useEffect(() => {
        const li = document.querySelectorAll('.portfolio ul li')
        li.forEach(li => {
            if(li.textContent === active){
                li.classList.add('active')
            }
            else{
                li.classList.remove('active')
            }
        })
    })
    const handlefilter = (str) => {
        setfilter(str)
        setactive(str)
    }
    return (
        <section id='Portfolio' className='portfolio my-12'>
            <div><h1 className='main-heading text-center'>Portfolio</h1></div>
            <ul className='flex justify-center items-center flex-wrap m-9'>
                    <li className='active mb-4 text-[#939393] hover:text-[#96bb7c] text-base mr-4 cursor-pointer' onClick={() => handlefilter('all')}>all</li>
                    <li className='mb-4 text-[#939393] hover:text-[#96bb7c] text-base mr-4 cursor-pointer' onClick={() => handlefilter('Functioning')}>Functioning</li>
                    <li className='mb-4 text-[#939393] hover:text-[#96bb7c] text-base mr-4 cursor-pointer' onClick={() => handlefilter('landing')}>landing</li>
            </ul>
            <div>
                <div className='project flex container gap-7 m-auto flex-wrap justify-center items-center'>
                    {projects.filter((pro) => {
                        return pro.type.includes(null) ? pro : pro.type.includes(filter)
                    }).map((pro, index) => {
                        return (
                            <Project pro={pro} key={index} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
