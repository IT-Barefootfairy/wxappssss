export default {
    pages: [
        'pages/index/index',
        'pages/findhouse/index',
        'pages/issue/index',
        'pages/message/index',
        'pages/my/index',
        // 以上为底部路由
        'needPage/login/index',
        'pages/findhouse/brow/index',
        'pages/new_house/new_house',
        'pages/new_house/detail',
        'pages/ershou/ershou',
        'pages/renting/renting',
        'pages/groups/groups',
        'pages/map_find/map_find',
        'pages/news/news',
        'pages/community/community',
        'pages/consultant/consultant',
        'pages/agent/agent',
        'pages/yushou/index',
        'online/liveList',
        'pages/my/user/exchange/index',
        'pages/my/user/member/index',
        'needPage/rest_house/rest_house',
        'needPage/buy_house/buy_house',
        'pages/tudi/index',
        "pages/my/user/myvip/index",
        "pages/my/user/userInfo/index",
        'pages/calculator/calculator',
        'pages/details/details',
        'pages/mores/mores',
        'pages/person/person',
        'pages/photos/photos',
        'ask/list',
        'pages/search/search',
        'contrast/house_list',
        "pages/add/index",
        "pages/add/search/index",
        "pages/add/addimage/index",
        "pages/add/core/index",
        "pages/counselor/index",
        "pages/counselor/author/index"
    ],
    window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '宿迁找房',
        navigationBarTextStyle: 'black',
        // enablePullDownRefresh: true,
        onReachBottomDistance: 1, //触底距离a,
        // usingComponents: {
        //     'van-button': '../../components/vant-weapp/dist/button/index'
        //   }
    },
    "tabBar": {
        "color": "#000",
        "selectedColor": "#FB7768",
        "backgroundColor": "#fff",
        "list": [{
            "iconPath": "static/home.png",
            "selectedIconPath": "static/home-on.png",
            "pagePath": 'pages/index/index',
            "text": "首页"
        }, {
            "iconPath": "static/find.png",
            "selectedIconPath": "static/find-on.png",
            "pagePath": 'pages/findhouse/index',
            "text": "找房"
        }, {
            "iconPath": "static/more.png",
            "selectedIconPath": "static/more-on.png",
            "pagePath": 'pages/issue/index',
            "text": "发布"
        }, {
            "iconPath": "static/message.png",
            "selectedIconPath": "static/message-on.png",
            "pagePath": 'pages/message/index',
            "text": "消息"
        }, {
            "iconPath": "static/my.png",
            "selectedIconPath": "static/my-on.png",
            "pagePath": 'pages/my/index',
            "text": "我的"
        }]
    }
}
