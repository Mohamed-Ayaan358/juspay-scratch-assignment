import React from "react";
import Icon from "./Icon";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { componentSelection } from "./componentSelection";

export default function Sidebar() {
  const actionList = [
    "SHIFTX",
    "SHIFTY",
    "JUMPTO",
    "JUMP_TO_X",
    "JUMP_TO_Y",
    "JUMPTO_RANDOM",
    "ROTATE_ANGLE",
    "TURN_CLOCKWISE",
    "TURN_COUNTERCLOCKWISE",
    "TALK",
    "MODIFY_SIZE",
    "MODIFY_COLOR",
    "MODIFY_BG_COLOR",
    "DEFINE_SIZE",
    "PAUSE",
    "LOOP",
    "START_FLAG",

  ];
  const MotionList = [
    "SHIFTX",
    "SHIFTY",
    "JUMPTO",
    "JUMP_TO_X",
    "JUMP_TO_Y",
    "JUMPTO_RANDOM",
    "ROTATE_ANGLE",
    "TURN_CLOCKWISE",
    "TURN_COUNTERCLOCKWISE"
  ];
  const LockList = [
    "TALK",
    "MODIFY_SIZE",
    "MODIFY_COLOR",
    "MODIFY_BG_COLOR",
    "DEFINE_SIZE"
  ];
  const ControlList = [
    "PAUSE",
    "LOOP",
    "START_FLAG"
  ];


  return (
    <div className="md:w-60 w-24 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-bold text-white-700 mr-2 mb-2">

        {"Sidebar"}
      </div>
      <Droppable droppableId="block-1" type="actionValue">
        {(value) => (
          <ul
            {...value.droppableProps}
            ref={value.innerRef}
            className="actionValue my-3"
          >
            <span className="bg-gray-300 rounded-md p-1 flex items-center">
              <h1>MOTION</h1>
            </span>
            {MotionList.map((item, index) => {
              return (
                <Draggable
                  key={`${item}-actionValue`}
                  draggableId={`${item}-actionValue`}
                  index={index}
                  type="block-1"
                >
                  {(value) => (
                    <ul
                      ref={value.innerRef}
                      {...value.draggableProps}
                      {...value.dragHandleProps}
                    >
                      <div className="my-5"></div>
                      {componentSelection(item)}
                    </ul>
                  )}
                </Draggable>
              );
            })}
            <span className=" mt-3 bg-gray-300 rounded-md p-1 flex items-center">
              <h1>LOOKS</h1>
            </span>
            {LockList.map((item, index) => {
              return (
                <Draggable
                  key={`${item}-actionValue`}
                  draggableId={`${item}-actionValue`}
                  index={index}
                  type="block-1"
                >
                  {(value) => (
                    <ul
                      ref={value.innerRef}
                      {...value.draggableProps}
                      {...value.dragHandleProps}
                    >
                      <div className="my-5"></div>
                      {componentSelection(item)}
                    </ul>
                  )}
                </Draggable>
              );
            })}
            <span className=" mt-3 bg-gray-300 rounded-md p-1 flex items-center">
              <h1>CONTROL</h1>
            </span>
            {ControlList.map((item, index) => {
              return (
                <Draggable
                  key={`${item}-actionValue`}
                  draggableId={`${item}-actionValue`}
                  index={index}
                  type="block-1"
                >
                  {(value) => (
                    <ul
                      ref={value.innerRef}
                      {...value.draggableProps}
                      {...value.dragHandleProps}
                    >
                      <div className="my-5"></div>
                      {componentSelection(item)}
                    </ul>
                  )}
                </Draggable>
              );
            })}

            {/* {value.placeholder} */}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
