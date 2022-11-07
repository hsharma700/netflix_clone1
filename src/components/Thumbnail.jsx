import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
export function Title({ title }) {
  return <h2>{title}</h2>;
}

export function Thumbnail({ thumnailData, index }) {
  const navigate = useNavigate();

  const srclocation = (e) => {
    window.open(`/detail?poster_path=${thumnailData.poster_path}&title=${thumnailData?.original_title ?? thumnailData.original_name}&overview=${thumnailData.overview}`);
  };

  return (
    <div className="imgdiv">
      <div>
        <img
          onClick={srclocation}
          key={index}
          target="_blank"
          src={`http://image.tmdb.org/t/p/original${thumnailData.poster_path}`}
          alt=""
        ></img>
      </div>
    </div>
  );
}
