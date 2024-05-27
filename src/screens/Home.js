import React from 'react';
import Slider from './Home/Slider';

function Home() {
    return (
      <div className='text-center flex flex-col min-h-[80vh] pt-5'>
        <div className='w-full'>
          <Slider />
          
        </div>
      </div>
    );
}

export default Home;