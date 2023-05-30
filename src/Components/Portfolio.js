import React, {useState}  from 'react'
import Project from './projects'
import photographer from '../images/portfolio/photographer.jpg'
import linkshorten from '../images/portfolio/short.PNG'
import molly from '../images/portfolio/molly.PNG'
import memory from '../images/portfolio/memory.PNG'
import patisserie from '../images/portfolio/patisserie.PNG'
import todo from '../images/portfolio/ToDoList.PNG'
import arti from '../images/portfolio/Capture.PNG'

export default function Portfolio() {
    const projects = [{ name: 'photographer', type: 'all landing', "src": photographer, photographer,href:'https://photohdhd.000webhostapp.com/' },
                    { name: 'photographer', type: 'all landing', "src": molly },
                    { name: 'linkshortening', type: 'all Functioning', "src": linkshorten,href:'https://shortlyhdhd.000webhostapp.com/' },
                    { name: 'pattisserie', type: 'all landing', "src": patisserie,href:'https://patisserie-omega.vercel.app/' },
                    { name: 'todo', type: 'all Functioning', "src": todo ,href:'https://to-do-list-phi-seven.vercel.app/'},
                    { name: 'arti', type: 'all landing', "src": arti ,href:'http://artiportfolio.atwebpages.com/'},
                    { name: 'memory', type: 'all Functioning', "src": memory,href:'https://memory-game-tau-two.vercel.app/'}]
    const [filter, setfilter] = useState('')
    const handlefilter = (str) => {
        setfilter(str)
        console.log(filter)
    }
    return (
        <div id='Portfolio' className='portfolio my-12'>
            <div><h1 className='main-heading text-center'>Portfolio</h1></div>
            <ul className='flex justify-center items-center flex-wrap m-9'>
                <li className='active mb-4 text-[#939393] hover:text-[#96bb7c] text-base mr-4 cursor-pointer' onClick={() => handlefilter('all')}>All</li>
                <li className='mb-4 text-[#939393] hover:text-[#96bb7c] text-base mr-4 cursor-pointer' onClick={() => handlefilter('landing')}>landing</li>
                <li className='mb-4 text-[#939393] hover:text-[#96bb7c] text-base mr-4 cursor-pointer' onClick={() => handlefilter('Functioning')}>Functioning</li>
            </ul>
            <div>
                <div className='project grid container gap-7 m-auto sm:h-[396.75px] md:h-[524.547px] lg:h-[701.484px] xl:h-[834.266px] sm:grid-cols-3 sm:grid-rows-3 sm:gap-[.4em]'>
                    {projects.filter((pro) => {
                        return pro.type.includes(null) ? pro : pro.type.includes(filter)
                    }).map((pro, index) => {
                        return (
                            <Project pro={pro} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
