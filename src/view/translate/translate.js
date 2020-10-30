import React from "react"
import "./translate.css"
import { Input } from 'antd';
const { Search } = Input;
const  translate = ()=>{
  let onSearch = ()=>{
    console.log("123456")
  };
  return (
    <div className="translate-wrapper">
      <div className="search-container">
        <Search
          placeholder="请输入查询的参数"
          allowClear
          enterButton="查询"
          size="large"
          onSearch={()=>onSearch()}
        />
      </div>
    </div>
  )
}
export  default translate