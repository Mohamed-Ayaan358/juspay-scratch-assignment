// import React, { useState } from 'react'
// const ChangeBackgroundColor = (value) => {

//     const [steps, setSteps] = useState(""); // Default to Red
// const RainbowColors = [
//     { label: 'Red', value: '#FF0000' },
//     { label: 'Orange', value: '#FFA500' },
//     { label: 'Yellow', value: '#FFFF00' },
//     { label: 'Green', value: '#008000' },
//     { label: 'Blue', value: '#0000FF' },
//     { label: 'Indigo', value: '#4B0082' },
//     { label: 'Violet', value: '#EE82EE' },
//     ];
//     const parentContainerStyle = {
//         maxWidth: '200px',
//         margin: '10px',
//     };


//     const handleInputChange = (e) => {
//         setSteps(e.target.value);
//         console.log(steps)
//     };


//     return (
//         <div style={parentContainerStyle}>
//             <div className="bg-purple-700 rounded-md p-1 flex items-center">
//                 <p className="text-white text-xs mr-2">Change background</p>
//                 <div className="flex-1">
// <select
//     id="changebackgroundcolor"
//     className={`p-1 rounded-md w-full text-xs border-none text-white bg-purple-700 ${value.value}`}
//     value={steps}
//     onChange={handleInputChange}
// >
//                         {RainbowColors.map((color) => (
//                             <option key={color.value} value={color.value} style={{ backgroundColor: color.value }}>
//                                 {color.label}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ChangeBackgroundColor

import React, { useState } from 'react'
const ChangeBackgroundColor = (value) => {
    const [steps, setSteps] = useState("");
    const RainbowColors = [
        { label: 'Red', value: '#FF0000' },
        { label: 'Orange', value: '#FFA500' },
        { label: 'Yellow', value: '#FFFF00' },
        { label: 'Green', value: '#008000' },
        { label: 'Blue', value: '#0000FF' },
        { label: 'Indigo', value: '#4B0082' },
        { label: 'Violet', value: '#EE82EE' },
    ]
    const parentContainerStyle = {
        maxWidth: '200px',
        margin: '10px',
    };

    const handleInputChange = (e) => {
        setSteps(e.target.value);
    };

    return (
        <div style={parentContainerStyle}>
            <div className="bg-purple-700 rounded-md p-1 flex items-center">
                <p className="text-white text-xs mr-2">Choose Background {" "}</p>
                <div className="flex-1">
                    <input
                        id="changebackgroundcolor"
                        type="text"
                        placeholder="Choose Background"
                        className={`p-1 rounded-md w-full text-xs border-none ${value.value}`}
                        value={steps}
                        onChange={handleInputChange}
                        list="color-options"
                    />
                    <datalist id="color-options">
                        {RainbowColors.map((color) => (
                            <option key={color.value} value={color.value}>
                                {color.label}
                            </option>
                        ))}
                    </datalist>
                </div>
            </div>
        </div>
    );
};

export default ChangeBackgroundColor
