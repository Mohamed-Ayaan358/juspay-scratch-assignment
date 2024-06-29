import React, { useState } from 'react'
const ModifyColor = (value) => {
  const [steps, setSteps] = useState(0);

  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Use a regular expression to check if it's a valid integer or a valid negative integer
    if (/^-?\d+$/.test(inputValue)) {
      setSteps(inputValue);
    } else {
      setSteps(0);
    }
  };


  return (
    <div style={parentContainerStyle}>
      <div className="bg-purple-700 rounded-md p-1 flex items-center">
        <p className="text-white text-xs mr-2">Change color effect by{" "}</p>
        <div className="flex-1">
          <input
            id='changeColorEffect'
            type="text"
            placeholder="Enter color change"
            className={`p-1 rounded-md w-full text-xs border-none ${value.value}`}
            value={steps}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
export default ModifyColor
