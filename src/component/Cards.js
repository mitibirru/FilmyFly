import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "KGF Chapter1",
      rating: "5",
      year: "2018",
      img: "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "KGF Chapter1",
      rating: "1",
      year: "2018",
      img: "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "KGF Chapter1",
      rating: "3",
      year: "2018",
      img: "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "KGF Chapter1",
      rating: "4",
      year: "2018",
      img: "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "KGF Chapter1",
      rating: "4",
      year: "2018",
      img: "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "KGF Chapter1",
      rating: "5",
      year: "2018",
      img: "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer md:mt-6 transition-all duration-500"
          >
            <img className="h-72" src={e.img} />
            <h1>
              <span className="text-gray-500">Name: </span>
              {e.name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-500 mr-3">Rating: </span>

              <ReactStars size={20} half={true} value={e.rating} edit={false} />
            </h1>
            <h1>
              <span className="text-gray-500">Year: </span>
              {e.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
