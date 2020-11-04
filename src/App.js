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
      //源语言
      let sourceElement = document.getElementsByClassName("source-language-container")[0]
      let sourceElementClassList = (sourceElement.className).split(" ");
      console.log(sourceElementClassList)
      if(sourceElementClassList.indexOf("isShowFalse")!== -1){
        sourceElement.classList.remove("isShowFalse");
        sourceElement.classList.add("isShowTrue");
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
