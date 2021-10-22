'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/mypay',controller.home.mypay);
  router.get('/list',controller.home.list);
  router.get('/suqianhome', controller.home.suqianHome)
  // 登录接口
  router.get('/login',controller.home.login)
  router.get('/returhtml', controller.home.returhtml)
  // 首页接口
  router.get('/customindex', controller.sqzf.customindex)
  // 找房接口
  router.get('/customhose', controller.sqzf.customhose)
  
  router.get('/customhoseList', controller.sqzf.customhoseList)
  
  router.get('/customershou',controller.sqzf.customershou)
};
