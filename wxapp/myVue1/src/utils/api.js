import request from './request'
export async function getIndex() {
    let result = await request({ url: 'http://127.0.0.1:7001/customindex', method: "GET" }).then((res) => {
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

export async function gethotDetail(id) {
    let result = await request({ url: `http://127.0.0.1:7001/hotbuildetail?id=${id}`, method: "GET" }).then((res) => {
        return res.data
    })
    return result
}
