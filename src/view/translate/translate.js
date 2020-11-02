import React from "react"
import axios from "axios"
// import {request} from "../../bin/axiosConfig"
import { Input } from 'antd';
const { Search } = Input;


const Translate = ()=>{

  const get_baiduFun = (value)=>{
    axios({
      methods:"get",
      url:"/translate/api/trans/vip/translate",
      params:{
        q:value,
        from:"en",
        to:"zh",
        appid:"2015063000000001",
        salt:"1435660288",
        sign:"f89f9594663708c1605f3d736d01d2d4"
      }
    }).then((response)=>{
      console.log("调用了百度")
      console.log(response)
    })
  }

  return (
    <div>
      <div>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={(value)=>get_baiduFun(value)}
        />
      </div>
    </div>
  )
}
export  default Translate