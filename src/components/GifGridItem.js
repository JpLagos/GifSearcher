import React from 'react'

const GifGridItem = ({ title, url }) => {

  return (
    <div className='card animate_animated animate_fadein'>
        <img src={ url } alt={ title } />
        <p> {title} </p>
    </div>
  )
}

export default GifGridItem