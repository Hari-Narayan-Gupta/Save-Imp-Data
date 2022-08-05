import React, { useState } from "react";

export default function CreateNote(props) {

  const [expand, setExpand] = useState(false);

  const showInput =() => {
    setExpand(true);
  }

  const [note, setNode] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // const {name, value} = e.target;
    setNode((prevData) => {
      return {
        ...prevData, [name] : value,
      };
    });
  };

  const addEvent = () =>{
    props.passNote(note);
    setNode(
      {
        title: "",
        content: "",
      }
    )
  }

  return (
    <>
      <div className="main_note">
        <form action="">

      {/* If Expand is true then show the input part otherwise not */}
         { expand?
          <input
            type="text"
            placeholder="Title"
            onChange={InputEvent}
            value={note.title}
            name="title"
          /> : null}

          <textarea
            className="textarea"
            name="content"
            id=""
            cols=""
            rows=""
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note...."
            onClick={showInput}
          ></textarea>
          {expand?
          <button type="button" className="btn btn-secondary" onClick={addEvent}>
            +
          </button> : null}
        </form>
      </div>
    </>
  );
}
