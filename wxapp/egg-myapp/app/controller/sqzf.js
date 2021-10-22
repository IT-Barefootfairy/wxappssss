const Controller = require('egg').Controller;


class SqzfController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = ctx.userAgents;
  }
  // 首页
  async customindex() {
    //https://www.sqfcw.com/wapi/index/customIndex.html
    //"https://www.sqfcw.com/wapi/index/customIndex.html"
    const { ctx } = this;
    let url = "https://www.sqfcw.com/wapi/index/customIndex.html"

    let result = await ctx.curl(url, {
      method: 'GET',
      headers: {
        "content-type": "text/html",
        "User-Agent": ctx.userAgents,
        "referer": "https://www.sqfcw.com/m/",
        "from": "3"
      }
    });

    result.data = JSON.parse(result.data.toString())
    // console.log(result,'----')
    ctx.body = result
  }
  // 首页
  async customershou() {
    //https://www.sqfcw.com/wapi/index/customIndex.html
    //"https://www.sqfcw.com/wapi/index/customIndex.html"
    const { ctx } = this;
    let url = "https://www.sqfcw.com/wapi/index/infoData.html?type=ershoufang&setting=25"

    let result = await ctx.curl(url, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        "User-Agent": ctx.userAgents,
        "referer": "https://www.sqfcw.com/m/",
        "from": "3"
      }
    });

    result.data = JSON.parse(result.data.toString())
    console.log(result, '----123')
    ctx.body = result
  }
  // 找房头部数据
  async customhose() {

    const { ctx } = this;
    let url = "https://www.sqfcw.com/wapi/House/wordImage"

    let result = await ctx.curl(url, {
      method: 'GET',
      headers: {
        "content-type": " application/json",
        "User-Agent": ctx.userAgents,
        "referer": "https://www.sqfcw.com/m/pages/index/find_house",
        "from": "3"
      }
    });

    result.data = JSON.parse(result.data.toString())
    console.log(result, '----22222')
    ctx.body = result
  }







  
  // 找房列表内容
  async customhoseList() {
    //浏览器库
    const userAgents = [
      "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.12) Gecko/20070731 Ubuntu/dapper-security Firefox/1.5.0.12",
      "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Acoo Browser; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)",
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20",
      "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0) ,Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9",
      "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)",
      "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E)",
      "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:2.0b13pre) Gecko/20110307 Firefox/4.0b13pre",
      "Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52",
      "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.12) Gecko/20070731 Ubuntu/dapper-security Firefox/1.5.0.12",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)",
      "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
      "Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)",
      "Opera/9.25 (Windows NT 5.1; U; en), Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9",
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
    ];

    //构造请求头-浏览器
    function randomHead() {
      return userAgents[
        Math.floor(Math.random() * (0 - userAgents.length) + userAgents.length)
      ];
    }

    //构造请求头-ip
    function returnIp() {
      return (
        Math.floor(Math.random() * (10 - 255) + 255) +
        "." +
        Math.floor(Math.random() * (10 - 255) + 255) +
        "." +
        Math.floor(Math.random() * (10 - 255) + 255) +
        "." +
        Math.floor(Math.random() * (10 - 255) + 255)
      );
    }
    const { ctx } = this;
    let url = "https://www.sqfcw.com/wapi/House/subscribeList?page=2&rows=20&lat=&lng="
    //"https://www.sqfcw.com/wapi/index/customIndex.html"
    let refererUrl = "https://www.sqfcw.com/m/pages/index/find_house";
    let ip = returnIp();
    console.log(ip, '----')
    let result = await ctx.curl(url, {
      method: 'GET',
      headers: {
        "content-type": "text/html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        "from": "3",
        "referer": refererUrl,
        "content-type": "application/json",
        "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcGVuaWQiOjY3OTE0LCJ1aWQiOjY3OTE0LCJ0aW1lIjoxNjM1NzcyNjM1fQ.zf2wDuAN7iqn98Kl2Kxp1lGjrWdgz3du7esTvNPlNf8",
        "cookie": "UM_distinctid=17c81b40dbf925-02d3373eb032d5-b7a1438-1fa400-17c81b40dc0b95; CNZZDATA1278924275=1224922299-1634258299-%7C1634258299; PHPSESSID=hi1j9j4jr1sj40uq7v5r9r0aln; Hm_lvt_b62b1005764f95fe323dcaab3ae37284=1634260160,1634522129; Hm_lpvt_b62b1005764f95fe323dcaab3ae37284=1634522129"

      },
      data: {
        tel: "",
        userpwd: ""
      }
    });
    if (result.status === 302) {
      ctx.body = await ctx.curl(url, {
        method: 'GET',
        headers: {
          "content-type": "text/html",
          "User-Agent": randomHead(),
          "X-Forwarded-For": ip,
          "referer": refererUrl,
          "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcGVuaWQiOjY3OTE0LCJ1aWQiOjY3OTE0LCJ0aW1lIjoxNjM1NzcyNjM1fQ.zf2wDuAN7iqn98Kl2Kxp1lGjrWdgz3du7esTvNPlNf8",
          "cookie": "UM_distinctid=17c81b40dbf925-02d3373eb032d5-b7a1438-1fa400-17c81b40dc0b95; CNZZDATA1278924275=1224922299-1634258299-%7C1634258299; PHPSESSID=hi1j9j4jr1sj40uq7v5r9r0aln; Hm_lvt_b62b1005764f95fe323dcaab3ae37284=1634260160,1634522129; Hm_lpvt_b62b1005764f95fe323dcaab3ae37284=1634522129"
        },
      });
    }
    result.data = JSON.parse(result.data.toString())
    console.log(result.status, '+++++')
    ctx.body = result;
  }
  // 登录接口
  async login() {
    const { ctx } = this;
    let url = "https://www.sqfcw.com/wapi/member/login.html"
    //"https://www.sqfcw.com/wapi/index/customIndex.html"
    let refererUrl = "https://www.sqfcw.com/m/user/login/login";
    let result = await ctx.curl(url, {
      method: 'POST',
      headers: {
        "content-type": "text/html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        "from": "3",
        "referer": refererUrl,
        "content-type": "application/json",
        "cookie": "UM_distinctid=17c81b40dbf925-02d3373eb032d5-b7a1438-1fa400-17c81b40dc0b95; CNZZDATA1278924275=1224922299-1634258299-%7C1634258299; PHPSESSID=hi1j9j4jr1sj40uq7v5r9r0aln; Hm_lvt_b62b1005764f95fe323dcaab3ae37284=1634260160,1634522129; Hm_lpvt_b62b1005764f95fe323dcaab3ae37284=1634522129"

      },
      data: {
        tel: "",
        userpwd: ""
      }
    });

    result.data = JSON.parse(result.data.toString())
    console.log(result.res.data.data, '****')
    //result.data.data.data = JSON.parse(result.data.data.data.toString())
    ctx.body = result;
  }
  async suqianHome() {
    //浏览器库
    const userAgents = [
      "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.12) Gecko/20070731 Ubuntu/dapper-security Firefox/1.5.0.12",
      "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Acoo Browser; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)",
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20",
      "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0) ,Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9",
      "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)",
      "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E)",
      "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:2.0b13pre) Gecko/20110307 Firefox/4.0b13pre",
      "Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52",
      "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.12) Gecko/20070731 Ubuntu/dapper-security Firefox/1.5.0.12",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)",
      "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
      "Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)",
      "Opera/9.25 (Windows NT 5.1; U; en), Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9",
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
    ];


    //构造请求头-浏览器
    function randomHead() {
      return userAgents[
        Math.floor(Math.random() * (0 - userAgents.length) + userAgents.length)
      ];
    }

    //构造请求头-ip
    function returnIp() {
      return (
        Math.floor(Math.random() * (10 - 255) + 255) +
        "." +
        Math.floor(Math.random() * (10 - 255) + 255) +
        "." +
        Math.floor(Math.random() * (10 - 255) + 255) +
        "." +
        Math.floor(Math.random() * (10 - 255) + 255)
      );
    }
    const { ctx } = this;
    let url = "https://www.sqfcw.com/wapi/build/index?distance=&page=1&rows=20&keyword=&lat=&lng="
    //"https://www.sqfcw.com/wapi/index/customIndex.html"
    let refererUrl = "https://www.sqfcw.com/m/pages/new_house/new_house";
    let ip = returnIp();
    console.log(ip, '----')
    let result = await ctx.curl(url, {
      method: 'GET',
      headers: {
        "content-type": "text/html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        "from": "3",
        "referer": refererUrl,
        "content-type": "application/json",
        "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcGVuaWQiOjY3OTE0LCJ1aWQiOjY3OTE0LCJ0aW1lIjoxNjM1NzcyNjM1fQ.zf2wDuAN7iqn98Kl2Kxp1lGjrWdgz3du7esTvNPlNf8",
        "cookie": "UM_distinctid=17c81b40dbf925-02d3373eb032d5-b7a1438-1fa400-17c81b40dc0b95; CNZZDATA1278924275=1224922299-1634258299-%7C1634258299; PHPSESSID=hi1j9j4jr1sj40uq7v5r9r0aln; Hm_lvt_b62b1005764f95fe323dcaab3ae37284=1634260160,1634522129; Hm_lpvt_b62b1005764f95fe323dcaab3ae37284=1634522129"

      },
      data: {
        tel: "",
        userpwd: ""
      }
    });
    if (result.status === 302) {
      ctx.body = await ctx.curl(url, {
        method: 'GET',
        headers: {
          "content-type": "text/html",
          "User-Agent": randomHead(),
          "X-Forwarded-For": ip,
          "referer": refererUrl,
          "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcGVuaWQiOjY3OTE0LCJ1aWQiOjY3OTE0LCJ0aW1lIjoxNjM1NzcyNjM1fQ.zf2wDuAN7iqn98Kl2Kxp1lGjrWdgz3du7esTvNPlNf8",
          "cookie": "UM_distinctid=17c81b40dbf925-02d3373eb032d5-b7a1438-1fa400-17c81b40dc0b95; CNZZDATA1278924275=1224922299-1634258299-%7C1634258299; PHPSESSID=hi1j9j4jr1sj40uq7v5r9r0aln; Hm_lvt_b62b1005764f95fe323dcaab3ae37284=1634260160,1634522129; Hm_lpvt_b62b1005764f95fe323dcaab3ae37284=1634522129"
        },
      });
    }
    result.data = JSON.parse(result.data.toString())
    console.log(result.status, '+++++')
    ctx.body = result;
  }
  async mypay() {
    const { ctx } = this;
    //进一步转换js对象为标准的json对象
    function formMessage(result) {
      var message = {};
      if (typeof result === 'object') {
        var keys = Object.keys(result);
        for (var i = 0; i < keys.length; i++) {
          var item = result[keys[i]];
          var key = keys[i];
          if (!(item instanceof Array) || item.length === 0) {
            continue;
          }
          if (item.length === 1) {
            var val = item[0];
            if (typeof val === 'object') {
              message[key] = formMessage(val);
            } else {
              message[key] = (val || '').trim();
            }
          } else {
            message[key] = [];
            for (var j = 0, k = item.length; j < k; j++) {
              message[key].push(formMessage(itemp[j]));
            }
          }
        }
      }
      return message
    }

    //准备一些拉起微信扫码支付接口的素材
    let url = "https://api.mch.weixin.qq.com/pay/unifiedorder",// 下单请求地址
      appid = 'wxd3a6078a4d6edfac',
      mch_id = '1490420962',
      notify_url = 'https://www.yiluxdeng.com',
      out_trade_no = '15' + Math.random().toString().slice(2, 15),// 微信会有自己订单号、我们自己的系统需要设置自己的订单号
      total_fee = '1',// 注意，单位为分
      body = '一篇有意思的文章',
      trade_type = 'NATIVE',// 交易类型，JSAPI--公众号支付、NATIVE--原生扫码支付、APP--app支付
      nonce_str = moment().format('YYYYMMDDHHmmssSSS'),// 随机字符串32位以下
      stringA = `appid=${appid}&body=${body}&mch_id=${mch_id}&nonce_str=${nonce_str}&notify_url=${notify_url}&out_trade_no=${out_trade_no}&spbill_create_ip=${ctx.request.ip}&total_fee=${total_fee}&trade_type=${trade_type}`,
      stringSignTemp = stringA + "&key=P4Bpdxwl0A49tLvFHlP5YvqNYfqz7HoG", //注：key为商户平台设置的密钥key
      sign = MD5(stringSignTemp).toUpperCase(); //注：MD5签名方式
    //想微信服务器发送请求，获取支付链接
    //(1)将参数信息拼接为xml格式的字符串
    let formData = "<xml>";
    formData += "<appid>" + appid + "</appid>"; //appid
    formData += "<body>" + body + "</body>"; //商品或支付单简要描述
    formData += "<mch_id>" + mch_id + "</mch_id>"; //商户号
    formData += "<nonce_str>" + nonce_str + "</nonce_str>"; //随机字符串，不长于32位
    formData += "<notify_url>" + notify_url + "</notify_url>"; //支付成功后微信服务器通过POST请求通知这个地址
    formData += "<out_trade_no>" + out_trade_no + "</out_trade_no>"; //订单号
    formData += "<total_fee>" + total_fee + "</total_fee>"; //金额
    formData += "<spbill_create_ip>" + ctx.request.ip + "</spbill_create_ip>"; //ip
    formData += "<trade_type>NATIVE</trade_type>"; //NATIVE会返回code_url ，JSAPI不会返回
    formData += "<sign>" + sign + "</sign>";
    formData += "</xml>";
    //(2)发请求
    console.log('111111')
    const resultData = await ctx.curl(url, {
      method: 'POST',
      content: formData,
      headers: {
        'content-type': 'text/html',
      },
    });
    console.log('222222', resultData)
    //(3)将微信服务器返回的报文转换为js对象
    // xml转json格式
    await xml2js.parseString(resultData.data, function (err, json) {
      if (err) {
        new Error("解析xml报错")
      } else {
        var result = formMessage(json.xml); // 转换成正常的json 数据
        console.log(result, '******') //打印出返回的结果
        result.out_trade_no = out_trade_no
        ctx.body = result
      }
    })
    //ctx.body = "支付接口拉起失败"
  }
}

module.exports = SqzfController;
