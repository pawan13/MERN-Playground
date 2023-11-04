import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Form from "./components/Form";
import { useDispatch } from "react-redux";
import { getAllStrAction } from "./components/DisplayAction";

function App() {
  const [display, setDisplay] = useState("Updated Data displays here.");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStrAction());
  }, [dispatch]);
  return (
    <div>
      <Form setDisplay={setDisplay} />
      <Display display={display} />
    </div>
  );
}

export default App;
