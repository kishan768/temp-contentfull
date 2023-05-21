import React from 'react'
import { useFetchproject } from './fetchProjext'
const Project = () => {
 const{loading,projects}= useFetchproject()
//  console.log(loading,projects)
if(loading){
  return <section className='projects'>
    <h4>Loading...</h4>
  </section>
}
  return (
    <section className='projects'>
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
        <div className="projects-center">
          {projects.map((project)=>{
            const {id ,img, title, url}=project
            return <a href={url} key={id} target='_blank' rel='noreffer' className='project'><img src={img} alt={title} className='img'/>
            <h5>{title}</h5>
            </a>
          })}
        </div>
      </div>
  </section>
  )
}

export default Project
