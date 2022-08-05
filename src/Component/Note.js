import React from "react";

export default function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn">
          <img
            className="deleteIcon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAo0lEQVRIieWTTQqDMBCFP6xb7yg9Qo/SHik3qUgXFlxWqGI3WYQ4Jc5I0NIHswnM+5lH4F9wAXpg9tP7NzVcQGIdFxIWFhcJzBk4D4Yb9vtfYzKpg2aDucWuJHDPLbAlwcJc9gQSTsAbfcEjUMZkUoIJeKi9Q+tFkgJg60Hc+SZg6UHc2S3BIQVUJ7J0oDJVAQPr/8DL76hwBp4ryDug1pL/Dj5MW2BhteGWuAAAAABJRU5ErkJggg=="
            onClick={deleteNote}
           alt="logo"></img>
        </button>
      </div>
    </>
  );
}
