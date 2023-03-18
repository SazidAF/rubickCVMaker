import React, { useEffect } from "react";
import { useState} from "react";
import { Rnd } from "react-rnd";
import { View, Text } from "@react-pdf/renderer";

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
      handleUpdateBlocks(currentID,{text: text, x: position.x, y:position.y});
    }
  };


  const handleDragStop = (event, data) => {
    setIsEditing(true);
    setPosition({x: data.x, y: data.y});
  };
  const handleResizeStop = (event, direction, ref, delta, position) => {
    setIsEditing(true);
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
        minWidth={700}
        minHeight={55}
        bounds="div"
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
        <View
          style={{
            backgroundColor: "cyan",
            width: "100%",
            height: "60%",
          }}>
          {isEditing ? (
            <input type="textbox" value={text} onChange={handleTextChange} style={{width: "400px", height: "40px"}}/>
          ) : (
            <Text onClick={handlePCick}>{text}</Text>
          )}
          {isEditing && <button onClick={handleSaveClick}>Save</button>}
        </View>
      </Rnd>
     
  );
};

export default Template;
