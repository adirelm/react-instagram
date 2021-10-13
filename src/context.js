import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const clientID = `?client_id=${"teuWpd2FmfNoQWa4h3uq8sv-Xg6rSEI0kVvOyhFhYDM"}`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Search...");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;

    const response = await axios(url).catch((err) => console.log(err));
    const data = response.data;

    setPhotos((oldPhotos) => {
      if (page === 1) {
        return data.results;
      } else {
        return [...oldPhotos, ...data.results];
      }
    });
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const handleChange = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(e.target.value);
    fetchImages();
  };

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });

    return () => {
      window.removeEventListener("scroll", event);
    };
  });

  return (
    <AppContext.Provider value={{ query, handleChange, photos, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
