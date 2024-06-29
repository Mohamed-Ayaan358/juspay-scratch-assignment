
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";


export default function App() {
  const [stream, setStreams] = useState([]);
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
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea stream={stream} />
        </div>
      </div>
    </div>
  );
}
