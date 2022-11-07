import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const apikey = "73edc177f8a8606b29092dc2df64aa0b";
const url = "https://api.themoviedb.org/3";
const popularmovies = "movie/popular";
const populartv = "tv/popular";
const topratedmovies = "movie/top_rated";
const nowplayingmovies = "movie/now_playing";
const upcomingmovies = "movie/upcoming";

export const UseApiData = () => {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchdata = async () => {
      const { data } = await axios.get(
        `${url}/${popularmovies}?api_key=${apikey}`
      )
      const data2 = await axios.get(
        `${url}/${populartv}?api_key=${apikey}`
      );
      const data3 = await axios.get(
        `${url}/${topratedmovies}?api_key=${apikey}`
      );
      const data4 = await axios.get(
        `${url}/${nowplayingmovies}?api_key=${apikey}`
      );
      const data5 = await axios.get(
        `${url}/${popularmovies}?api_key=${apikey}`
      );

      setData(data);
      setData2(data2.data)
      setData3(data3.data)
      setData4(data4.data) 
      setData5(data5.data)
setTimeout(() => {
      setIsLoading(false);
}, 500);
      
    };

    fetchdata();
  },[]);
  return { data, isLoading, data2, data3, data4, data5 };
};
