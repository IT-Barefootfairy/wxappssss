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

// 找房列表
export async function getHouseList() {
    let result = await request({ url: 'http://127.0.0.1:7001/customhoseList', method: "GET" }).then((res) => {
        return res.data
    })
    return result
}




//消息
export async function getPerson() {
    let result = await request({ url: 'http://127.0.0.1:7001/chatFriends', method: "GET" }).then((res) => {
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
export async function getMessage() {
    let result = await request({ url: 'http://127.0.0.1:7001/messageDetail', method: "GET" }).then((res) => {
        return res
    })
    return result
}
