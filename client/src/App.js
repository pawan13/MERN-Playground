import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [display, setDisplay] = useState("Updated Data displays here.")
  return (
    <div>
      <Form setDisplay={setDisplay}/>
      <Display display={display}/>
    </div>
  );
}

export default App;
