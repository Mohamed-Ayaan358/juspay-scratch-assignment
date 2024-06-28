import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";


export default function App() {
  const [streams, setStreams] = useState([])
  const [blocks, setBlocks] = useState([
    {
      id: "block-1",
      actions: []
    }
  ])

  const DragEvent = (temp) => {
    if (!temp.destination) return;

    const draggableActionId = temp.draggableId.split("-")[0];
    const destBlockId = temp.destination.droppableId;

    const updatedBlocks = blocks.map((block) => {
      if (block.id === destBlockId) {
        return {
          ...block,
          actions: [
            ...block.actions,
            `${draggableActionId}-${block.items.length}`,
          ],
        };
      }
      return block;
    })
    setBlocks(updatedBlocks)
  }

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">

          <DragDropContext onDragEnd={DragEvent}>
            <Sidebar /> <MidArea />
          </DragDropContext>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div >
  );
}
