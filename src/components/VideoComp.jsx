import React from 'react'

// https://api.themoviedb.org/3/movie/642885/videos?api_key=73edc177f8a8606b29092dc2df64aa0b&language=en-US

function VideoComp({data}) {
    // const url = "https://api.themoviedb.org/3/movie/";
    // const id = `${data.id}/videos`
    // const apilkey = "?api_key=73edc177f8a8606b29092dc2df64aa0b&language=en-US"
    // const video1 = `${url}${id}${apilkey}`
  return (
    <video controls width="300px"  height="150px" autoPlay='true'>
      <source src="https://www.youtube.com/watch?v=mkomfZHG5q4" type='video/mp4'/>
      <source src="https://www.youtube.com/watch?v=mkomfZHG5q4" type='video/webm'/>
    </video>
  )
}

export default VideoComp;