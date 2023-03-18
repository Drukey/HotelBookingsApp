import React from 'react'
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error  } = useFetch("hotels/countByCity?cities=dar,chuga,mbeya")

  return (
    <div className="featured">
     { loading ? ( 
      "Loading please wait" 
      ) : ( 
        <>
          <div className="featuredItem">
          <img
            src=""
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>{data[0]} properties</h2>
          </div>
        </div>
      
      <div className="featuredItem">
        <img
          src=""
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src=""
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div> </>
      )}
    </div>
  );
};

export default Featured;