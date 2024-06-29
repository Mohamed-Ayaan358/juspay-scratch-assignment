import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { componentSelection } from "./componentSelection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function MidArea({
  blocks,
  setBlocks,
  setStreams,
}) {


  const addblock = () => {
    const newblockId = `block-${blocks.length + 1}`;
    setBlocks([...blocks, { id: newblockId, actions: [] }]);
  };

  const deleteblock = (blockId) => {
    setBlocks(l => l.filter(item => item.id !== blockId))
  }
  const handleDelete = (blockId, index) => {
    const block = blocks.find((c) => c.id === blockId);

    if (block && block.actions.length > index) {
      block.actions.splice(index, 1);
      setBlocks([...blocks]);
    }
  };

  const [currentblockId, setCurrentblockId] = useState(null);

  const [newValues, setNewValues] = useState({});

  const runClick = (blockId) => {
    setCurrentblockId(blockId);

    if (!newValues[blockId]) {
      newValues[blockId] = [];
    }

    getStream(blockId);
    setStreams(newValues[blockId]);
  };

  function getStream(blockId) {
    console.log("blockId", `#${blockId}`, blocks);

    newValues[blockId] = [];

    document.querySelectorAll(`#${blockId} .graybox`).forEach((graybox) => {
      const inputs = graybox.querySelectorAll("input");
      inputs.forEach((input) => {
        const n = 0;
        if (input.type === "text") {
          if (input.id === "repeat") {
            n = input.value;
          }

          if (input.type === "text" && input.id === "repeat") {
            for (let i = 0; i < n; i++) {
              newValues[blockId].push({
                key: `${input.id}${i}`,
                value: parseFloat(input.value),
              });
            }
          } else if (!isNaN(input.value)) {
            newValues[blockId].push({
              key: `${input.id}`,
              value: parseFloat(input.value),
            });
          } else {
            newValues[blockId].push({
              key: `${input.id}`,
              value: input.value,
            });
          }
        } else if (input.type === "number") {
          newValues[blockId].push({
            key: `${input.id}`,
            value: parseFloat(input.value),
          });
        }
      });
    });

  }

  return (
    <div className="flex-1 h-full overflow-auto">
      <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 ml-2 my-2">
        {" "}
        {"Midarea"}{" "}
      </div>

      <button style={{
        backgroundColor: "green",
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)",
        marginLeft: "8px",
      }} onClick={addblock}>
        Add block
      </button>

      {blocks.map((block) => (
        <Droppable
          key={block.id}
          droppableId={block.id}
          type="sidearea"
        >

          {(provided) => (
            <ul
              id={block.id}
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                backgroundColor: "#F0F0F0",
                padding: "20px",
                margin: "10px",
                borderRadius: "8px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)",
                width: "300px",
                minHeight: "200px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  color: "red",
                  cursor: "pointer",
                  display: "flex",
                  marginLeft: "auto",
                  alignItems: "center",
                  marginBottom: "10px"
                }}
                onClick={() => deleteblock(block.id)}
              >
                Delete Block
              </span>
              <button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginLeft: "8px",
                }}
                onClick={() => runClick(block.id)}
              >
                Run Block
              </button>
              {block.actions.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <div className="graybox" style={{ display: "flex" }}>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{ flex: 1 }}
                      >
                        {componentSelection(item.split("-")[0])}
                      </div>
                      <span
                        style={{
                          color: "red",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onClick={() => handleDelete(block.id, index)}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </span>
                    </div>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      ))
      }
    </div >
  );
}
