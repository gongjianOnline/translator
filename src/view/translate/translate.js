import React,{useState} from "react"
import Configure from "../../components/configure/configure"
import Source from "../../components/source/source"
// import axios from "axios"
import {request} from "../../bin/axiosConfig"
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
      request({
        methods:"get",
        url:"/translate/api/trans/vip/translate",
        params:{
          q:value,
          from:Sources.value,
          to:Configures.value,
          appid:"20200929000576935",
          salt:"1435660288",
          sign:md5(`20200929000576935${value}1435660288_byVNY9Ujvm4tS3Vxrws`)
        }
      }).then((response)=>{
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
  //源语言组件传值
  const [Sources,setSources] = useState(()=>{
    return{
      value:'auto',
      label:"自动检测"
    }
  })
  let getSource = (data)=>{
    setSources({value:data.value,label:data.label})
  }
  //目标语言组件传值
  const [Configures,setConfigures] = useState(()=>{
    return{
      value:'en',
      label:"英文"
    }
  })
  let getConfigure = (data)=>{
    setConfigures({
      value:data.value,
      label: data.label
    })
  }
  return (
    <div className="translate-wrapper">
      <div className="OPTLanguage-container">
        <Source getSource={(data)=>getSource(data)}/>
        <Configure configure={(data)=>getConfigure(data)}/>
      </div>
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
          enterButton="翻译"
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