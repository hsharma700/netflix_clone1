import React from "react";
import { UseApiData } from "./FetchingData";
import "./Home.scss";
import { Thumbnail, Title } from "./Thumbnail";
import { Banner } from "./Banner";

function Home() {
  const { data, isLoading, data2, data3, data4, data5 } = UseApiData();
  console.log(data, isLoading);

  return (
    <>
      {isLoading ? <div className="loader">
            <div></div>
          </div>
       : (
        <div className="home">
          {data?.results && <Banner data={data} />}
          <div className="new">
            <Title title={"Popular"} />
            <div className="newVideos">
              {data &&
                data?.results?.map((data, index) => (
                  <Thumbnail thumnailData={data} key={index} />
                ))}
            </div>
          </div>
          <div className="new">
            <Title title={"TV Shows"} />
            <div className="newVideos">
              {data2 &&
                data2?.results?.map((data, index) => (
                  <Thumbnail thumnailData={data} key={index} />
                ))}
            </div>
          </div>
          <div className="new">
            <Title title={"Top Rated"} />
            <div className="newVideos">
              {data3 &&
                data3?.results?.map((data, index) => (
                  <Thumbnail thumnailData={data} key={index} />
                ))}
            </div>
          </div>
          <div className="new">
            <Title title={"Now Playing"} />
            <div className="newVideos">
              {data4 &&
                data4?.results?.map((data, index) => (
                  <Thumbnail thumnailData={data} key={index} />
                ))}
            </div>
          </div>
          <div className="new">
            <Title title={"Upcoming"} />
            <div className="newVideos">
              {data5 &&
                data5?.results?.map((data, index) => (
                  <Thumbnail thumnailData={data} key={index} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
