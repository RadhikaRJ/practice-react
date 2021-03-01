
import './App.css';
import { useState } from "react";

import ButtonCounter from './Exercise-components/ButtonCounter';
import TwitterCharCount from "./Exercise-components/TwitterCharCount";
import SimplePasswordVerification from "./Exercise-components/SimplePasswordVerification";
import AlphanumericPasswordVerification from "./Exercise-components/AlphanumericPasswordVerification";
import ToastDisplay from './Exercise-components/ToastDisplay';
import LikeInAList from './Exercise-components/LikeInAList';
import OnButtonClickexercise from './Exercise-components/OnButtonClickexercise';

function App() {

  return (
    <div className="App">
      <ButtonCounter/>
      <hr></hr>
      <TwitterCharCount/>
      <hr></hr>
      <SimplePasswordVerification/>
      <hr></hr>
      <AlphanumericPasswordVerification/>
      <hr></hr>
      <br></br>
      <ToastDisplay/>
      <br></br>
      <LikeInAList/>
      <hr></hr>
      <br></br>
      <OnButtonClickexercise/>
    </div>
  );
}

export default App;
