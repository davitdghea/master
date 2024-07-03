import React, { useEffect } from 'react'
import axios from 'axios'


const CallApi = () => {
const ApiFirml = async ()=>{
  try{
  const res = await axios.get('https://api.themoviedb.org/3/movie/popular',{
    params:{
      language: 'en-US',
      page: 1
    },
    headers: {
      Authorization: `Bearer ${process.env.KEY_API}`
    }
  })
    setMovies(res.data.results);
  } catch (error) {
    console.error('Error fetching data: ', error);
}
}
useEffect(()=>{
  ApiFirml()
},[])  
}


export default CallApi
