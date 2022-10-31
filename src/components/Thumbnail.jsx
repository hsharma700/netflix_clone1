import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




export function Title({title}){
    return(
        <h2>{title}</h2>
    )
}

 export function Thumbnail({ thumnailData, index}) {
  return (
    <img key={index}
      src={`http://image.tmdb.org/t/p/original${thumnailData.poster_path}`}
      alt=""
    ></img>
    
  );
}


