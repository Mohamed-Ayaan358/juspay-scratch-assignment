import React, { useState } from 'react'
const DefineSize = (value) => {
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
      <div className="bg-purple-700 rounded-md p-1 flex items-center"
      >
        <p className="text-white text-xs mr-2">Set the Size to {" "}</p>
        <div className="flex-1">
          <input
            id='setsize'
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

export default DefineSize