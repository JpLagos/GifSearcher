import React from 'react'
import  useFetchGifs  from '../hooks/useFetchGifs';
import  GifGridItem  from './GifGridItem';


const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

  return (
    <div className='flex flex-col justify-center'>
        <h3 className='animate__animated animate_fadeIn'> {category} </h3>
        { loading && <p className='animate__animated animate__flash text-lg font-biz font-bold'>Loading...</p> }

        <div className='card-grid flex justify-center max-w-7xl'>
            {
                images.map( img=>(
                    <GifGridItem
                        key={img.id}
                        {...img}
                        />
                )
                )
            }
        </div>
    </div>
  )
}

export default GifGrid