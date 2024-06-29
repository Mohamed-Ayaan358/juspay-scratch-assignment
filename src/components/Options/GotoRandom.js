import React, { useState, useEffect } from 'react'
const GotoR = (value) => {
  const [stepsX, setStepsX] = useState(0);
  const [stepsY, setStepsY] = useState(0);

  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 301);
    const randomNumber1 = Math.floor(Math.random() * 451);
    setStepsX(randomNumber)
    setStepsY(randomNumber1)

  }, []);


  return (
    <div style={parentContainerStyle}>
      <div className="bg-blue-500 rounded-md p-1 flex items-center">
        <p className="text-white text-xs mr-2">Go to Random Position</p>
        <div className="flex-1">
          <div style={{ display: "flex" }}>
            <input
              id='gotoXRandom'
              type="text"
              style={{ marginRight: "5px" }}
              placeholder="Enter X"
              className={`p-1 rounded-md w-full text-xs border-none ${value.value}`}
              value={stepsX}
              disabled
            />
            <input
              id='gotoYRandom'
              type="text"
              placeholder="Enter Y"
              className={`p-1 rounded-md w-full text-xs border-none ${value.value}`}
              value={stepsY}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GotoR
