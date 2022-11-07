import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.scss";
import {useState} from 'react'

function Detail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const poster_path = searchParams.get('poster_path')
  const overview = searchParams.get('overview')
  const title = searchParams.get('title')

  const [isLoading, setLoading] = useState(true)
    setTimeout(()=>{
      setLoading(false)
    },500)

  return (
    <>
    {isLoading ? <div className="loader">
    <div></div>
  </div>
:
    <div className="detail">
      <div className="detailImg">
        <img src={`http://image.tmdb.org/t/p/original${poster_path}`} alt="" />
      </div>
      <div className="detailDesc">
        <h1>{`${title}`}</h1>
        <h3 id="desc">
          {overview}
        </h3>
      </div>
    </div>
}
    </>
  );
}

export default Detail;
