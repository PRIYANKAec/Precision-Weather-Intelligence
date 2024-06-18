"use client";

import React, { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});

  const [airQuality, setAirQuality] = useState({});
  const [fiveDayForecast, setFiveDayForecast] = useState({});

  const fetchForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`);
        console.log("forecast data", res.data);
      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  const fetchAirQuality= async (lat, lon) => {
    try {
      const res = await axios.get(`api/pollution`);

    console.log("air quality data: ", res.data);
      setAirQuality(res.data);
    } catch (error) {
      console.log("Error fetching air quality data: ", error.message);
    }
  };

  const fetchFiveDayForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`api/fiveday`);

      console.log("five day forecast data: ", res.data);

      setFiveDayForecast(res.data);
    } catch (error) {
      console.log("Error fetching five day forecast data: ", error.message);
    }
  };

  useEffect(() => {
    fetchForecast("11.504776","77.238396");
    fetchAirQuality();
    fetchFiveDayForecast();
     }, []);
    
  return (
    <GlobalContext.Provider
      value={{
        forecast,
        airQuality,
        fiveDayForecast,
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