// import logo from './logo.svg';
import "./App.css";
import Header from "./Component/Header";
// import Footer from "./Component/Footer";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note";
import { useState } from "react";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("i'm clicked");

    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header title="Add-Note" />
      <CreateNote passNote={addNote} />
    <div className="card container my-3">
        {addItem.map((val, ind) => {
          return (
            <Note
              key={ind}
              id={ind}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
