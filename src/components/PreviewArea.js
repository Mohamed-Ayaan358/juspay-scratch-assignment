import React, { useState } from "react";
import CatSprite from "./CatSprite";
import Select from "react-select";

export default function PreviewArea({ stream }) {
  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 ml-2 my-2">
        {" "}
        {"Preview Area"}{" "}
      </div>
      <div className="p-4">

        <div className="sprites">



          <CatSprite stream={stream} />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}
