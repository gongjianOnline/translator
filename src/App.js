import Translate from "./view/translate/translate"

import './App.css';
import 'antd/dist/antd.css';
import React from "react";

function App() {
  const cleanClassFun = (event)=>{
    if(event.target.className !== "target-container"){
      //目标语言
      let targetElement = document.getElementsByClassName("language-container")[0];
      let targetElementClassList = (targetElement.className).split(" ");
      if(targetElementClassList.indexOf("isShowFalse")>0){
        targetElement.classList.remove("isShowFalse")
        targetElement.classList.add("isShowTrue")
      }
    }
  }
  return (
    <div className="App banner" onClick={(event)=>{cleanClassFun(event)}}>
      <Translate/>
    </div>
  );
}

export default App;
