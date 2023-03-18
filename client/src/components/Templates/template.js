import React, { useEffect } from "react";
import { useState} from "react";
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
      <Rnd
        default={{
          x: block.layerx,
          y: block.layery,
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
        }} onDragStop={(e) => console.log(e)} onResizeStop={(e)=> console.log(e)}>
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
