"use client";

import React, { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});

  const fetchForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`);
            
      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  useEffect(() => {
    fetchForecast("11.504776","77.238396");
     }, []);
    
  return (
    <GlobalContext.Provider
      value={{
        forecast,
      }}
    >
      <GlobalContextUpdate.Provider>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);