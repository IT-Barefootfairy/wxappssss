

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/mypay', controller.home.mypay);
    router.get('/list', controller.home.list);
    router.get('/suqianhome', controller.home.suqianHome)
        // 登录接口
    router.get('/login', controller.home.login)
    router.get('/returhtml', controller.home.returhtml)
        // 首页接口
    router.get('/customindex', controller.sqzf.customindex)
        // 找房接口
    router.get('/customhose', controller.sqzf.customhose)
    router.get('/customhoseList', controller.sqzf.customhoseList)
    router.get('/customershou', controller.sqzf.customershou)
    router.get('/chatFriends', controller.sqzf.chatFriends)
    router.get('/fangFriends', controller.sqzf.fangFriends)
    router.get('/messageDetail', controller.sqzf.messageDetail)
    router.get('/messagetext', controller.sqzf.messagetext)
    router.get('/getPersons', controller.sqzf.getPersons)
    router.get('/getPersonsnums', controller.sqzf.getPersonsnums)
    router.get('/ershou', controller.sqzf.customershou);
    router.get('/hotbuildetail', controller.sqzf.hotBuildDetail);
    router.get('/suqianMap', controller.sqzf.suqianMap);
    router.get('/searchList', controller.sqzf.searchList);
    router.get('/searchResult', controller.sqzf.searchResult);
};