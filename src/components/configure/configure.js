import {useState} from "react"
import "./configure.css"
const Configure = (props)=>{
  //显示隐藏菜单栏
  const targetFun = (e)=>{
    e.stopPropagation(); //阻止冒泡
    let elem = document.getElementsByClassName("language-container");
    let classList = (elem[0].className).split(' ')
    if(classList.indexOf("isShowTrue") < 0){
      elem[0].classList.remove("isShowFalse");
      elem[0].classList.add("isShowTrue");
    }else{
      elem[0].classList.remove("isShowTrue");
      elem[0].classList.add("isShowFalse");
    }
  }
  //目标语言数据源
  const targetLanguage = [
    {
      label:'中文',
      value:"zh"
    },
    {
      label:'英语',
      value:"en"
    },
    {
      label:'粤语',
      value:"yue"
    },
    {
      label:'文言文',
      value:"yue"
    },
    {
      label:'日语',
      value:"jp"
    },
    {
      label:'韩语',
      value:"kor"
    },
    {
      label:'法语',
      value:"fra"
    },
    {
      label:'西班牙语',
      value:"spa"
    },
    {
      label:'泰语',
      value:"th"
    },
    {
      label:'阿拉伯语',
      value:"ara"
    },
    {
      label:'俄语',
      value:"ru"
    },
    {
      label:'葡头牙语',
      value:"pt"
    },
    {
      label:'德语',
      value:"de"
    },
    {
      label:'意大利语',
      value:"it"
    },
    {
      label:'希腊语',
      value:"el"
    },
    {
      label:'荷兰语',
      value:"nl"
    },
    {
      label:'波兰语',
      value:"pl"
    },
    {
      label:'保加利亚语',
      value:"bul"
    },
    {
      label:'爱沙尼亚语',
      value:"est"
    },
    {
      label:'丹麦语',
      value:"dan"
    },
    {
      label:'芬兰语',
      value:"fin"
    },
    {
      label:'捷克语',
      value:"cs"
    },
    {
      label:'罗马尼亚语',
      value:"rom"
    },
    {
      label:'斯洛文尼亚语',
      value:"slo"
    },
    {
      label:'瑞典语',
      value:"swe"
    },
    {
      label:'匈牙利语',
      value:"hu"
    },
    {
      label:'繁体中文',
      value:"cht"
    },
    {
      label:'越南语',
      value:"vie"
    },
  ];
  let [Language,setLanguage] = useState(()=>{
    return {
      value:'en',
      label:'英文'
    }
  })
  //目标按钮显示
  let targetLanguageFun = (item)=>{
    props.configure(item)
    setLanguage(
      {
        value:item.value,
        label:item.label
      }
    )
  }
  return (
    <div className="configure-container">
      <ul>
        <li className="target-container" onClick={(event)=>{targetFun(event)}}>
          目标语言: {Language.label}
          <div className="language-container isShowTrue">
            <ul className="languageList-container">
              {
                targetLanguage.map((item,index)=>{
                  return(
                    <li key={index}
                        className="languageList-content"
                        onClick={()=>{targetLanguageFun(item)}}>{item.label}</li>
                  )
                })
              }
            </ul>

          </div>
        </li>
      </ul>
    </div>
  )
}
export  default Configure
