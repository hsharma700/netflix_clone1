import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.scss";

function Detail() {
  const location = useLocation();
  const { state } = location;
  console.log(state);

const imgtitle = state.imgSrc.original_title;
const imgname = state.imgSrc.original_name;



  return (
    <div className="detail">
      <div className="detailImg">
        <img src={`http://image.tmdb.org/t/p/original${state.imgSrc.poster_path}`} alt="" />
      </div>
      <div className="detailDesc">
        <h1>{`${state.imgSrc.title}`}</h1>
        <h3>
          {state.imgSrc.overview}
        </h3>
      </div>
    </div>
  );
}

export default Detail;
