import React, { Component } from "react";
import { useState, useRef } from "react";
import { Rnd } from "react-rnd";
// import changeText from "../../reducers/text";

// const Box = () => (
//   <div
//     className="box"
//     style={{ margin: 0, height: "100%", paddingBottom: "40px" }}
//   >
//     <article className="media">
//       <div className="media-left">
//         <figure className="image is-64x64">
//           <img
//             src="https://avatars1.githubusercontent.com/u/10220449?v=3&s=460"
//             draggable="false"
//             alt="github avatar"
//           />
//         </figure>
//       </div>
//       <div className="media-content">
//         <div className="content">
//           <p>
//             <strong>bokuweb</strong> <small>@bokuweb17</small>{" "}
//             <small>31m</small>
//             <br />
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
//             efficitur sit amet massa fringilla egestas. Nullam condimentum
//             luctus turpis.
//           </p>
//         </div>
//         <nav className="level is-mobile">
//           <div className="level-left">
//             <a className="level-item">
//               <span className="icon is-small">
//                 <i className="fa fa-reply" />
//               </span>
//             </a>
//             <a className="level-item">
//               <span className="icon is-small">
//                 <i className="fa fa-retweet" />
//               </span>
//             </a>
//             <a className="level-item">
//               <span className="icon is-small">
//                 <i className="fa fa-heart" />
//               </span>
//             </a>
//           </div>
//         </nav>
//       </div>
//     </article>
//   </div>
// );

const Template = () => {
  const [text, setText] = useState("Initial text");
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };
  const handlePCick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  // const handleBoxClick = () => {
  //   setIsEditing(true);
  //   document.addEventListener("click", handleDocumentClick);
  // };

  return (
    <div>
      <Rnd
        default={{
          x: 1000,
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
        }}
      >
        <div
          style={{
            backgroundColor: "cyan",
            width: "100%",
            height: "100%",
            margin: "100px",
          }}
        >
          {isEditing ? (
            <input type="text" value={text} onChange={handleTextChange} />
          ) : (
            <p onClick={handlePCick}>{text}</p>
          )}
          {isEditing && <button onClick={handleSaveClick}>Save</button>}
        </div>
      </Rnd>
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
        }}
      >
        <div
          style={{
            backgroundColor: "cyan",
            width: "100%",
            height: "100%",
            margin: "100px",
          }}
        >
          {isEditing ? (
            <input type="text" value={text} onChange={handleTextChange} />
          ) : (
            <p onClick={handlePCick}>{text}</p>
          )}
          {isEditing && <button onClick={handleSaveClick}>Save</button>}
        </div>
      </Rnd>
      {/* <Rnd
        default={{
          x: 150,
          y: 205,
          width: 200,
          height: 190,
        }}
        minWidth={500}
        minHeight={190}
        bounds="window"
      >
        <Box />
      </Rnd> */}
    </div>
  );
};

export default Template;
