'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/mypay',controller.home.mypay);
  router.get('/list',controller.home.list);
  router.get('/suqianhome',controller.home.suqianHome)
  router.get('/login',controller.home.login)
  router.get('/returhtml',controller.home.returhtml)
  router.get('/customindex',controller.sqzf.customindex)
};
