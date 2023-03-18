import React, { useEffect } from "react";
import { useState} from "react";
import { Rnd } from "react-rnd";

const Template = ({block, handleUpdateBlocks}) => {
  const [text, setText] = useState(block.text);
  const [currentID, setCurrentID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);  
  const [position, setPosition] = useState({x: 0, y: 0});

  const handleTextChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handlePCick = () => {
    setCurrentID(block.id);
    setIsEditing(true);
    console.log(currentID);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
    if(currentID) {
      handleUpdateBlocks(currentID, text,);
    }
  };


  const handleDragStop = (event, data) => {
    setPosition({x: data.x, y: data.y});
  };
  const handleResizeStop = (event, direction, ref, delta, position) => {
    setPosition({x: position.x, y: position.y});
  };

  useEffect(() => {
    setCurrentID(block.id);
  }, [block]);


  return (
      <Rnd
        default={{
          x: block.x,
          y: block.y,
          width: 130,
          height: 55,
        }}
        minWidth={200}
        minHeight={55}
        bounds="window"
        resizable={{
          top: true,
          right: true,
          bottom: true,
          left: true,
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true,
        }} onDragStop={handleDragStop} onResizeStop={handleResizeStop}>
        <div
          style={{
            backgroundColor: "cyan",
            width: "100%",
            height: "60%",
          }}>
          {isEditing ? (
            <input type="textbox" value={text} onChange={handleTextChange} />
          ) : (
            <p onClick={handlePCick}>{text}</p>
          )}
          {isEditing && <button onClick={handleSaveClick}>Save</button>}
        </div>
      </Rnd>
     
  );
};

export default Template;
