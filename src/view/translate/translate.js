import React,{useState} from "react"
import axios from "axios"
import md5 from 'js-md5'
import "./translate.css"
import { Input } from 'antd';
const { Search } = Input;

const Translate = ()=>{
  // 翻译功能
  const [query,setQuery] = useState("")
  const get_baiduFun = (value)=>{
    if(value){
      axios({
        methods:"get",
        url:"/translate/api/trans/vip/translate",
        params:{
          q:value,
          from:"auto",
          to:"en",
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
  }
  const emptyInputFun = (event)=>{
    if(event.target.value === ""){
      setQuery("")
    }
  }
  // 选项卡功能
  const [select,setSelect] = useState(false)
  const selectFun = (event)=>{
    setSelect((!select))
  }
  return (
    <div className="translate-wrapper">
      <div className="option-container">
        <div className={select?"":"select-content"}
             onClick={(event)=>selectFun(event)}>单词</div>
        <div className={select?"select-content":""}
             onClick={(event)=>selectFun(event)}>句子</div>
      </div>
      <div className="search-container">
        <Search
          placeholder="请输入要查询的内容"
          allowClear
          enterButton="查询"
          size="large"
          onInput={(event)=>{emptyInputFun(event)}}
          onSearch={(value)=>get_baiduFun(value)}
        />
      </div>
      <div className="translate-container">
        {query}
      </div>
    </div>
  )
}
export  default Translate