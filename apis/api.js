const get = (url, data) => {
  return new Promise(((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: "GET",
      success: function (result) {
        const res = handle(result);
        if (res) {
          resolve(res);
        } else {
          reject({
            err: "请求失败",
            code: -1
          })
        }
      }
    })
  }))
}

const post = (url, data) => {
  return new Promise(((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: "POST",
      success: function (result) {
        const res = handle(result);
        if (res) {
          resolve(res);
        } else {
          reject({
            err: "请求失败",
            code: -1
          })
        }
      }
    })
  }))
}

const handle = (result) => {
  if (result && result.statusCode === 200) {
    return result.data;
  }
  return null;
}


module.exports = {
  get,
  post
}