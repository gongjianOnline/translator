import Translate from "./view/translate/translate"

import './App.css';
import 'antd/dist/antd.css';
import React from "react";

function App() {
  //判断选项元素显示和隐藏
  const cleanClassFun = (event)=>{
    if(event.target.className !== "target-container"){
      let targetElement = document.getElementsByClassName("language-container")[0]
      let targetElementClassList = (targetElement.className).split(" ");
      if(targetElementClassList.indexOf("isShowFalse")>0){
        targetElement.classList.remove("isShowFalse");
        targetElement.classList.add("isShowTrue");
      }
    }else if(event.target.className !== "source-language-container"){
      let targetElement = document.getElementsByClassName("source-language-container")[0]
      let targetElementClassList = (targetElement.className).split(" ");
      if(targetElementClassList.indexOf("isShowFalse")>0){
        targetElement.classList.remove("isShowFalse");
        targetElement.classList.add("isShowTrue");
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
