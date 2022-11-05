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
    const imgSrc = thumnailData;
    navigate("/detail", { state: { imgSrc } });
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
