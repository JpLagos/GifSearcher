import react, { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

import React from 'react'

const GifApp = () => {
  const [categories, setCategories] = useState(['Hello world'])

  return (
    <div className='flex flex-col justify-center align-center text-center mx-auto'>
      <div className='bg-darkblue'>
        <h1 className='p-3 text-3xl font-biz font-semibold text-slate-200'>Gif Searcher <span className='text-red-600'>App</span></h1>
        <h2 className='p-3 text-xl font-biz font-semibold text-slate-200'>Write something and let's find it!</h2>
        <AddCategory setCategories={ setCategories }/>
      </div>
      <hr/>

      <div className='flex justify-center mx-auto'>
        <ol>
          {
            categories.map( category =>(
              <GifGrid
              key={ category }
              category = {category}
              />
              ))
            }
        </ol>
      </div>
      
    </div>
  )
}

export default GifApp