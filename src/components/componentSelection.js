import React from "react";
import MoveX from "./Options/MoveX";
import MoveY from "./Options/MoveY";
import Goto from "./Options/Goto";
import GotoR from "./Options/GotoRandom";
import RotateDegree from "./Options/rotate";
import ChangeSize from "./Options/ChangeSize";
import Repeat from "./Options/Repeat";
import SetSize from "./Options/SetSize";
import Speak from "./Options/Speak";
import TurnAnti from "./Options/TurnAnti";
import TurnClock from "./Options/TurnClock";
import Wait from "./Options/Wait";
import Flag from "./Options/Flag";
import ChangeColor from "./Options/changecolor";
import ChangeBackgroundColor from "./Options/changeBackground";

export const componentSelection = (key, id) => {
  switch (key.toUpperCase()) {
    case "MOVEX":
      return <MoveX value={id} />;
    case "MOVEY":
      return <MoveY value={id} />;
    case "GOTO":
      return <Goto value={id} />;
    case "GOTORANDOM":
      return < GotoR value={id} />;
    case "ROTATEDEGREE":
      return <RotateDegree value={id} />;
    case "WAIT":
      return <Wait value={id} />;
    case "TURNCLOCK":
      return <TurnClock value={id} />;
    case "TURNANTI":
      return <TurnAnti value={id} />;
    case "SPEAK":
      return <Speak value={id} />;
    case "CHANGESIZE":
      return <ChangeSize value={id} />;
    case "SETSIZE":
      return <SetSize value={id} />;
    case "REPEAT":
      return <Repeat value={id} />;
    case "FLAG":
      return <Flag value={id} />;
    case "CHANGECOLOR":
      return <ChangeColor value={id} />
    case "CHANGEBACKGROUNDCOLOR":
      return <ChangeBackgroundColor value={id} />
  }

};
