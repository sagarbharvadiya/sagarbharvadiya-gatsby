import React from 'react'
import dataJson from '../Data/data.json'
const Project = () => {
  return (
    <>
      <section id='projects'>
        <div className='container'>
          <h2>Projects</h2>
          <div className='row'>
            {dataJson.Projects.map((item, i) => {
              return (
                <React.Fragment key={item.id}>
                  <div className='col-lg-3'>
                    <div className='box'>
                      <div className="image-container">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div className='det'>
                        <h3>{item.title}</h3>
                      </div>
                      <div className='btn'>
                        <button><a href={item.link} target='_blank' rel='noreferrer'> {item.button}</a></button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            })

            }

          </div>
        </div>
      </section>

    </>
  )
}

export default Project
