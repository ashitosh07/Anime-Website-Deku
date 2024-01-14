import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiBell, FiShoppingCart, FiInfo } from 'react-icons/fi'

const Searchbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }

  return (
    <>
      <div
        onSubmit={handleSubmit}
        autoComplete='off'
        className='p-2 text-gray-400 focus-within:text-gray-600'
        style={{ backgroundColor: 'black' }}
      >
        <label htmlFor='search-field' className='sr-only'>
          Search all files
        </label>
        <div
          className='flex flex-row justify-between items-center'
          style={{ backgroundColor: 'rgb(0, 0, 0)' }}
        >
          <div
            className='flex flex-row items-center rounded-md'
            style={{ backgroundColor: 'rgb(215, 215, 215)' }}
          >
            <FiSearch
              aria-hidden='true'
              className='w-5 h-3 ml-4'
              style={{ color: 'black' }}
            />
            <input
              name='search-field'
              autoComplete='off'
              style={{ backgroundColor: 'rgb(215, 215, 215)' }}
              id='search-field'
              className='flex-1 border-none placeholder-gray-500 outline-none text-base text-black p-2 rounded-md'
              placeholder='Search Anime,Manga'
              type='search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className='flex space-x-4'>
            <FiBell className='w-5 h-5' style={{ color: '#fff' }} />
            <FiShoppingCart className='w-5 h-5' style={{ color: '#fff' }} />
            <FiInfo className='w-5 h-5' style={{ color: '#fff' }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Searchbar
