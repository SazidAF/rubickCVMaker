import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Rnd } from "react-rnd";

const Template = ({block, handleUpdateBlocks}) => {
  const [text, setText] = useState(block.text);
  const [currentID, setCurrentID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
      handleUpdateBlocks(currentID, text);
    }
  };

  useEffect(() => {
    setCurrentID(block.id);
  }, [block]);


  return (
    <div>
      <Rnd
        default={{
          x: 234,
          y: 0,
          width: 120,
          height: 100,
        }}
        minWidth={500}
        minHeight={190}
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
        }}>
        <div
          style={{
            backgroundColor: "cyan",
            width: "100%",
            height: "100%",
            margin: "100px",
          }}>
          {isEditing ? (
            <input type="text" value={text} onChange={handleTextChange} />
          ) : (
            <p onClick={handlePCick}>{text}</p>
          )}
          {isEditing && <button onClick={handleSaveClick}>Save</button>}
        </div>
      </Rnd>
     
    </div>
  );
};

export default Template;
