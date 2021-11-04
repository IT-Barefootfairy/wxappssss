import request from './request'
export async function getIndex() {
    let result = await request({ url: 'http://127.0.0.1:7001/customindex', method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
// 找房列表
export async function gethomg() {
    let result = await request({ url: 'http://127.0.0.1:7001/customershou', method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
// 找房头部
export async function getHouseTop() {
    let result = await request({ url: 'http://127.0.0.1:7001/customhose', method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
export async function getXinfang() {
    let result = await request({ url: 'http://127.0.0.1:7001/suqianhome', method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
export async function getershou() {
    let result = await request({ url: 'http://127.0.0.1:7001/ershou', method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
//消息
export async function getPerson(keywords) {
    console.log(keywords,'fffff');
    let result = await request({ url: `http://127.0.0.1:7001/chatFriends?keywords=${keywords}`, method: "GET" }).then((res) => {
        return res
    })
    return result
}
//访客
export async function getFangPerson() {
    let result = await request({ url: 'http://127.0.0.1:7001/fangFriends', method: "GET" }).then((res) => {
        return res
    })
    return result
}
//消息详情数据
export async function getMessage(id) {
    let result = await request({ url: `http://127.0.0.1:7001/messageDetail?id=${id}`, method: "GET" }).then((res) => {
        return res
    })
    return result
}
//消息头部数据
export async function getMessagetext(userid) {
    let result = await request({ url: `http://127.0.0.1:7001/messagetext?id=${userid}`, method: "GET" }).then((res) => {
        return res
    })
    return result
}
export async function gethotDetail(id) {
    let result = await request({ url: `http://127.0.0.1:7001/hotbuildetail?id=${id}`, method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
//个人信息
export async function getPersons(id) {
    let result = await request({ url: `http://127.0.0.1:7001/getPersons?id=${id}`, method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
//数量信息
export async function getPersonsnums(adviser) {
    let result = await request({ url: `http://127.0.0.1:7001/getPersonsnums?adviser=${adviser}`, method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
//常用语
export async function getLanguage() {
    let result = await request({ url: `http://127.0.0.1:7001/getLanguage`, method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
//头像信息
export async function getPhotos() {
    let result = await request({ url: `http://127.0.0.1:7001/getPhotos`, method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
//点赞
export async function getLike(ids) {
    console.log(ids,'sssssssss');
    let result = await request({ url: `http://127.0.0.1:7001/getLike?id=${ids}`, method: "GET" }).then((res) => {
        return res.data
    })
    return result
}



