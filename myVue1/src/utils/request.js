import Taro from '@tarojs/taro'
// 1.错误提示
// 2.接口请求的加载中
// 3.数据请求成功 success===0000
// 4.错误信息的解析  状态码

export default async function request(params) {
    const { url, data, method, header, isLoading = true, isShowError = true, timeout = 60000, ...otherData } = params
    if (isLoading) {
        Taro.showLoading({
            title: '加载中'
        })
    }
    return await new Promise((resolve, reject) => {
        return Taro.request({
            data: data,
            url: url,
            method: method,
            timeout: timeout,
            header: {
                'content-type': 'application/json;charset=UTF-8,text/plain,*/*',
                ...header
            },
            ...otherData,
            success: function(res) {
                if (isLoading) {
                    Taro.hideLoading();
                }
                if (res.data.code === '0000') {
                    resolve({ success: true, data: res.data.data });
                } else {
                    if (isShowError) {
                        // showErrorToast(res.data.msg)
                    }
                    resolve({ data: res.data.data, success: false })
                }
            },
            error(e) {
                reject(e)
                if (isLoading) {
                    Taro.hideLoading();
                }
                if (isShowError) {
                    // showErrorToast(e)
                }
                // eslint-disable-next-line no-undef
                resolve({ data: e, success: false })
            }
        })
    })
}


function showErrorToast(msg) {
    Taro.showToast({
        title: '加载中1',
        icon: 'none'
            // image: '/static/images/icon_error.png'
    })
}
