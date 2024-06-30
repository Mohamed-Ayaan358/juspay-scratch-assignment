import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function App() {
  const [stream, setStreams] = useState([]);
  const [history, setHistory] = useState([])
  const [newValues, setNewValues] = useState({});

  const indivClick = (action, value) => {
    if (!newValues["block-100"]) {
      newValues["block-100"] = [];
    }
    getIndivstream(action, value)
    setStreams(newValues["block-100"]);
  }
  function getIndivstream(action, value) {
    newValues["block-100"] = [];
    newValues["block-100"].push({
      key: `${action}`.split("-")[0],
      value: parseFloat(value),
    });
  }
  // 


  const [blocks, setBlocks] = useState([
    {
      id: "block-1",
      actions: [],
    },
  ]);



  const dragEvent = (actionEvent) => {
    if (!actionEvent.destination) return;

    const destinationblockId = actionEvent.destination.droppableId;
    const draggableId = actionEvent.draggableId.split("-")[0];

    const updatedblocks = blocks.map((block) => {
      if (block.id === destinationblockId) {
        return {
          ...block,
          actions: [
            ...block.actions,
            `${draggableId}-${block.actions.length}`,
          ],
        };
      }
      return block;
    });
    setBlocks(updatedblocks);
  };
  // Need to make a change here ?


  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <DragDropContext onDragEnd={dragEvent}>
            <Sidebar />
            <MidArea
              blocks={blocks}
              setBlocks={setBlocks}
              setStreams={setStreams}
            />
          </DragDropContext>
        </div>
        <div className="w-1/4 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tr-xl rounded-tl-xl ">
          <PreviewArea stream={stream} modifyHistory={setHistory} />
        </div>
        <div className="w-1/4 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <div>
            <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 ml-2 my-2">
              {"History"}
            </div>

            <span id="block-100">

              {history.map(home =>
                <div>

                  <div>
                    {history.indexOf(home) + ". "}{home.key + '-' + history.indexOf(home) + " : " + home.value}

                  </div>
                  <span style={{
                    color: "green",
                    cursor: "pointer",
                    marginRight: "10px",
                  }} onClick={() => indivClick(home.key.split("-")[0] + '-' + history.indexOf(home), home.value)}><FontAwesomeIcon icon={faCheck} /></span>
                </div>)
              }</span>
          </div>
        </div>
      </div>
    </div>
  );
}

