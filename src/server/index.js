import $ from 'jquery'
const HOST = '129.211.166.170'
const API_URL = `http://${HOST}/addons/ledplayer/api/getdata.html`

console.log($.ajax)
// const instance = originAxios.create({
//   baseURL: API_URL,
//   timeout: 10000,
//   headers: {'Access-Control-Allow-Origin': '*'}
// })

export function getData () {
  return new Promise(resolve => {
    $.getJSON(API_URL, data => {
      debugger;
      resolve(data)
    })
  })
}
