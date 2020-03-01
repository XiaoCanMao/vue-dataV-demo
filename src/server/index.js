const HOST = '129.211.166.170'
const API_URL = `http://${HOST}/addons/ledplayer/api/getdata.html`
const API_URL2 = `http://${HOST}/addons/ledplayer/api/getlives`
const API_URL3 = `http://${HOST}/addons/ledplayer/api/getliveaccesstoken`
const API_URL4 = `http://${HOST}/addons/ledplayer/api/getplayer`

export function getData () {
  return fetch(API_URL).then(res => res.json())
}

export function getVideoList () {
  return fetch(API_URL2).then(res => res.json())
}

export function getAccesstoken () {
  return fetch(API_URL3).then(res => res.json())
}

export function getplayer () {
  return fetch(API_URL4).then(res => res.json())
}
