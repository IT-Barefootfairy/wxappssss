export default {
    pages: [
        'pages/index/index',
        'pages/findhouse/index',
        'pages/issue/index',
        'pages/message/index',
        'pages/my/index',
        // 以上为底部路由
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
        'needPage/rest_house/rest_house',
        'needPage/buy_house/buy_house',
        'pages/tudi/index',
        // 'pages/groups/groups',
        'pages/calculator/calculator',
        'pages/details/details',
        'pages/calculator/calculator'
    ],
    window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '宿迁找房',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: true,
        onReachBottomDistance:0//触底距离a
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
