import React from 'react'

const GifGridItem = ({ title, url }) => {

  return (
    <div className='card scale-100'>
        <img className="object-fill max-h-44" src={ url } alt={ title } />
        <p> {title} </p>
    </div>
  )
}

export default GifGridItem