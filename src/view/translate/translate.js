import React,{useEffect} from "react"
import {request} from "../../bin/axiosConfig"
import "./translate.css"
import { Input } from 'antd';
const { Search } = Input;

const  Translate = ()=>{
  useEffect(()=>{
    console.log("打印了一次")
    request({
      methods:"get",
      url:""
    }).then((response)=>{
      console.log(response)
    })
  },[])
  let onSearch = ()=>{
    console.log("123456")
  }
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
export  default Translate