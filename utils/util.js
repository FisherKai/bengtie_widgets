const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const formatUrlStr = url =>{
    const list = url.split("?");
    const paramsList = list[1] ? list[1].split("&") : [];
    const result = {}
    for (let index = 0; index < paramsList.length; index++) {
        const [key,value] = paramsList[index].split("=");
        result[key]=value;
    }
    return result;
}

const getUrlValue = (url,key)=>{
    const valueObj = formatUrlStr(url);
    return valueObj[key];
}

const setUrlValue = (url,key,value)=>{
    const valueObj = formatUrlStr(url);
    valueObj[key]=value;
    let str = ""
    debugger;
    for (const key in valueObj) {
        if (Object.hasOwnProperty.call(valueObj, key)) {
            const element = valueObj[key];
            str+=`${key}=${element}&`
        }
    }
    return url.split("?")[0]+str.slice(0,str.length-1);
}

module.exports = {
  formatTime,
  setUrlValue,
  getUrlValue
}
