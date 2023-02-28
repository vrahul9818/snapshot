import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/front.css";

const Loadimages = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7b92fcc43d088cd8077e13950e4cd874&per_page=10&format=json&nojsoncallback=1`;
        const { data } = await axios.get(url);
        setState(data.photos.photo);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

  useEffect(() => {
    const searchImages = async () => {
      try {
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7b92fcc43d088cd8077e13950e4cd874&per_page=10&format=json&nojsoncallback=1`;
        if (props.query) {
          url += `&text=${props.query}`;
        }
        const { data } = await axios.get(url);
        setState(data.photos.photo);
      } catch (error) {
        console.log(error);
      }
    };

    if (props.query) {
      searchImages();
    }
  }, [props.query]);

  return (
    <div className="image-grid">
      {state.map((photo) => (
        <img
          className="image-item"
          key={photo.id}
          src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          alt={photo.title}
        />
      ))}
    </div>
  );
};

export default Loadimages;
