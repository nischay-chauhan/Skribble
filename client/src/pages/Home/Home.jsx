import React from 'react';

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center" style={{ backgroundImage: `url(/home.avif)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="relative z-10">
        <h1 className="md:text-8xl sm:8xl  font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #4F46E5, #D74DF6)' }}>
          Welcome to Skribble
        </h1>
      </div>
    </div>
  );
}

export default Home;
