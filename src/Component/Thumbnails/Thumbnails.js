import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import '../Style/Thumbnails.css';

function Thumbnails() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
        );
        setPhotos(response.data);
        setLoading(false);
      }
      fetchData();
    }, [page]);
  
    return (
      <div>
        <h2>Thumbnails</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="thumbnails">
            {photos.map((photo) => (
              <div className="thumbnail" key={photo.id}>
                <Link to={`/photo/${photo.id}`}>
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                  <p>{photo.title}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
        <div className="pagination">
          <button onClick={() => setPage((prevPage) => prevPage - 1)} disabled={page === 1}>
            Previous
          </button>
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
        </div>
      </div>
    );
  }

export default Thumbnails;