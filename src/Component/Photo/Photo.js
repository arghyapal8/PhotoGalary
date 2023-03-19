import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import '../Style/Photo.css';

function Photo() {
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const id = parseInt(window.location.pathname.split("/")[2]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
        setPhoto(response.data);
        setLoading(false);
      }
      fetchData();
    }, [id]);
  
    return (
      <div>
        <h2>Photo</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
            <Link className="Link" to="/">Back to thumbnails</Link>
          </div>
        )}
      </div>
    );
  }

export default Photo;