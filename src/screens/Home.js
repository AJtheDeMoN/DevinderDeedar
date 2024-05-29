import React from 'react';
import Slider from './Home/Slider';
import { useEffect} from "react";
import axios from "axios";
const backendUrl = process.env.REACT_APP_BASE_URL;

function Home() {
  useEffect(() => {
    axios
      .get(`${backendUrl}/api/activator/`, { withCredentials: true })
      .then((res) => {
        console.log("Received articles data:", res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
    return (
      <div className='text-center flex flex-col min-h-[80vh] pt-5'>
        <div className='w-full'>
          <Slider />
          
        </div>
      </div>
    );
}

export default Home;