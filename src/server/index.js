import $ from 'jquery'
// import axios from 'axios'
const HOST = '129.211.166.170'
const API_URL = `/addons/ledplayer/api/getdata.html`
// const API_URL = `http://${HOST}/addons/ledplayer/api/getdata.html`

// const instance = ginAxios.create({
//   baseURL: API_URL,
//   timeout: 10000,
//   headers: {'Access-Control-Allow-Origin': '*'}
// })

export function getData () {
  // return axios(API_URL)
  return new Promise(resolve => {
    $.getJSON(API_URL, data => {
      resolve(data)
    })
  })
}
