import React,{useState} from "react"
import Configure from "../configure/configure"
import axios from "axios"
import md5 from 'js-md5'
import "./translate.css"
import "../../App.css"
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
  let selectFun = (event,index)=>{
    let AppElement = document.getElementsByClassName("App")[0];
    if(index === 1){
      setSelect(false)
      AppElement.classList.add('banner')
      AppElement.classList.remove('banner2')
    }else{
      setSelect(true)
      AppElement.classList.add('banner2')
      AppElement.classList.remove('banner')
    }
  }
  return (
    <div className="translate-wrapper">
      <Configure/>
      <div className="option-container">
        <div className={select?"":"select-content"}
             onClick={(event)=>selectFun(event,1)}>单词</div>
        <div className={select?"select-content":""}
             onClick={(event)=>selectFun(event,0)}>句子</div>
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