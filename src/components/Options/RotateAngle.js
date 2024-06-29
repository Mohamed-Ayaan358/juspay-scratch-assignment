import React, { useState } from 'react'
const RotateAngle = (value) => {

  const [steps, setSteps] = useState(0);



  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue)) {

      setSteps(inputValue);
    } else {

      setSteps(0);
    }
  };

  return (
    <div style={{
      maxWidth: '200px',
      margin: '10px',
    }}>
      <div className="bg-blue-500 rounded-md p-1 flex items-center">
        <p className="text-white text-xs mr-2">Rotate degree to direction{" "}</p>
        <div className="flex-1">
          <input
            id='rotatedegree'
            type="text"
            placeholder="Enter Steps"
            className={`p-1 rounded-md w-full text-xs border-none ${value.value}`}
            value={steps}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default RotateAngle
