import React from 'react'
import Button from '../components/common/Button'
import Heart from '../components/common/Heart'
import MovieCards from '../components/common/MovieCards'
import FilmDetails from '../components/common/FilmDetails'

const Home = () => {
  return (
    <div>
      <div className='flex items-center'>
        <Button title="Watch now" pad='px-[24px] py-[17px]' />
        <Heart sizeDiv='w-[54px] h-[54px]' sizeIcon={24} />
      </div>
      <div>
        <MovieCards co='w-[255px] h-[301px]'/>
      </div>
      <FilmDetails/>
    </div>
    
    
  )
}

export default Home