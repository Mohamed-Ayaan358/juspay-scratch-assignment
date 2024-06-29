import React, { useState } from "react";
import CatSprite from "./CatSprite";
import Select from "react-select";

export default function PreviewArea({ stream }) {
  const [history, setHistory] = useState([])

  return (
    <div className="flex-1 h-full overflow-auto">
      <div className="flex-1 h-3/6 overflow-auto">
        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 ml-2 my-2">
          {" "}
          {"Preview Area"}{" "}
        </div>

        <div className="p-4">
          <div className="sprites">
            <CatSprite stream={stream} modifyHistory={setHistory} />

          </div>
        </div>
      </div>
      <hr></hr>
      <div className="p-4">
        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 ml-2 my-2">
          {" "}
          {"History"}{" "}
        </div>
        <span>{history.map(home => <div>{home.key}{home.value}</div>)}</span>
      </div>
    </div >
  );
}


{/* <span>{history.map(home => <div>{home.key}{home.value}</div>)}</span> */ }
{/* <div className="p-4">
  <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 ml-2 my-2">
    {" "}
    {"History"}{" "}
  </div>
  <span>{history.map(home => <div>{home.key}{home.value}</div>)}</span>
</div> */}