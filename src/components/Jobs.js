import React, { useState } from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import Job from './job/Job'

const Jobs = () => {


    const [Jobs] = useState([

      {
        id: 1,
        empresa: "Photosnap",
        cargo :"Senior Frontend Developer",
        publicacion:"1d ago",
        tiempo:"Full Time",
        ubicacion:"USA only",
        img: "img/photosnap.svg" ,
        filtros: [
   "Frontend    ",
   "Senior    ", 
   "HTML    ", 
   "CSS    ", 
   "JacaScript    "
   ]
        
       },
   {
    id: 2,
   empresa: "Manage",
   cargo:"Fullstack Developer",
   publicacion: "1d ago",
   tiempo:"Part Time",
   ubicacion:"Remote",
   img:"img/manage.svg",
   filtros:[
   "Fullstack    ", 
   "Midweight    ", 
   "Phyton    ", 
   "React    "
   ]
   },
   
   {
    id:3,
   empresa: "Account",
   cargo:"Junio Frontend Developer",
   publicacion: "2d ago",
   tiempo:"Part Time",
   ubicacion:"USA only",
   img:"img/account.svg",
   filtros:[
   "Frontend    ", 
   "Junior    ", 
   "React    ", 
   "Sass    ", 
   "JavaScript    "
   ]
   },
   
   {
    id:4 ,
   empresa: "MyHome",
   NEW: "new",
   FEACTURED:"true",
   cargo:"Junior Frontend Developer",
   publicacion: "5d ago",
   tiempo:"Contract",
   ubicacion:"USA only",
   img:"img/myhome.svg",
   filtros:[
   "Frontend    ", 
   "Junior    ", 
   "CSS    ", 
   "JavaScript    "
   ]
   },
   
   {
    id:5,
   empresa: "Loop Studios",
   cargo:"Software Engineer",
   publicacion: "1w ago",
   tiempo:"Full Time",
   ubicacion:"Worlwide",
   img:"img/loop-studios.svg",
   filtros:[
   "Fullstack    ", 
   "Midweight    ", 
   "JavaScript    ", 
   "Sass    ", 
   "Ruby    "
  ]
   },
   
   {
    id: 6,
   empresa: "Facelt",
   cargo:"Junio Backend Developer",
   publicacion: "2w ago",
   tiempo:"Full Time",
   ubicacion:"UK only",
   img:"img/faceit.svg",
   filtros:[
   "Backend    ",
   "Junior    ", 
   "Ruby    ", 
   "RoR    "
   ]
   },
   
   {
    id: 7,
   empresa: "Shortly",
   cargo:"Junior Developer",
   publicacion: "2w ago",
   tiempo:"Full Time",
   ubicacion:"Worldwide",
   img:"img/shortly.svg",
   filtros:[
   "Frontend    ",
   "Junior    ", 
   "HTML    ", 
   "Sass    ", 
   "JavaScript    "
   ]
   },
   
   {
    id: 8,
   empresa: "Insure",
   cargo:"Junior Frontend Developer",
   publicacion: "2w ago",
   tiempo:"Full Time",
   ubicacion:"USA only",
   img:"img/insure.svg",
   filtros:[
   "Frontend    ", 
   "Junior    ", 
   "Vue    ", 
   "Javascript    ", 
   "Sass    "
   ]
   },
   
   {
    id: 9,
   empresa: "Eyecam Co.",
   cargo:"Full Stack Engineer",
   publicacion: "3w ago",
   tiempo:"Full Time",
   ubicacion:"Worldwide",
   img:"img/eyecam-co.svg",
   filtros: [
   "Fullstack    ", 
   "Midweight    ",
   "JavaScript    ",
   "Django    ",
   "Python    " 
   ]
   },
   
   {
    id:10 ,
   empresa: "The Air Filter Company",
   cargo:"Front-end Dev",
   publicacion: "1mo ago",
   tiempo:"Part Time",
   ubicacion:"Worldwide",
   img:"img/the-air-filter-company.svg",
   filtros:[
   "Frontend    ",
   "Junio    ",
   "React    ",
   "Sass    ",
   "JavaScript    "
   ]
   }
    ])


  return (
   <div className='row' > 
          {Jobs.map((job) => {
            return  <Job key={job.id} img={job.img} empresa={job.empresa} cargo={job.cargo} publicacion={job.publicacion} tiempo={job.tiempo} ubicacion={job.ubicacion} filtros={job.filtros}/>
              

              
           
          })}
   </div>
  )
}

export default Jobs