import React, {useState} from 'react';
import './App.css';
import Form from "./component/Form";
import Result from "./component/Result";

function App() {
  const [state,setState] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  return (
      <div id="wrapper">
        <Form inputState={state} setInputState={setState}/>
        <Result info={state}/>
      </div>
    
  );
}

export default App;
