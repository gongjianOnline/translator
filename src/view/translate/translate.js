import React,{useState} from "react"
import axios from "axios"
import md5 from 'js-md5'
import { Input } from 'antd';
const { Search } = Input;

const Translate = ()=>{
  const [query,setQuery] = useState("")
  const get_baiduFun = (value)=>{
    axios({
      methods:"get",
      url:"/translate/api/trans/vip/translate",
      params:{
        q:value,
        from:"en",
        to:"zh",
        appid:"20200929000576935",
        salt:"1435660288",
        sign:md5(`20200929000576935${value}1435660288_byVNY9Ujvm4tS3Vxrws`)
      }
    }).then((response)=>{
      console.log("调用了百度")
      console.log(response)
      setQuery(response.data.trans_result[0].dst)
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
      <div>
        {query}
      </div>
    </div>
  )
}
export  default Translate