var express = require('express');
var router = express.Router();
var User = require('../models/user');
require('./../util/util')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// 登录接口
router.post('/login', function(req, res, next) {
  // 接收的参数
  let param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  User.findOne(param, function(err, doc) {
    console.log(doc)
    if(err) {
      res.json({
        status: 1,
        msg: '用户名或密码错误'
      })
    } else {
      if(doc) {
        res.cookie('userId', doc.userId, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })

        res.cookie('userName', doc.userName, {
          path: '/',
          maxAge: 1000 * 60 * 60
        });
        res.json({
          status: 0,
          msg: '登录成功',
          result: {
            userName: doc.userName
          }
        })
      }else {
        res.json({
          status: '1',
          msg: '',
          result:'用户名或密码错误'
        })
      }
    }
  })
})

// 查询购物车商品数量
router.get('/getCartCount', function(req, res, next) {
  if(req.cookies && req.cookies.userId) {
    var userId = req.cookies.userId
    User.findOne({userId: userId}, function(err, doc) {
      if(err) {
        res.json({
          status: 1,
          msg: err.message,
          result: ''
        })
      } else {
        let cartList = doc.cartList
        let cartCount = 0
        cartList.map((item) => {
          cartCount += +item.productNum
        })
        res.json({
          status: 0,
          msg: '',
          result: cartCount
        })
      }
    })
  } else {
    res.json({
      status: 1,
      msg: '未登录',
      result: ''
    })
  }
})

// 判断当前用户是否登录
router.get('/checkLogin', function(req, res, next) {
  if(req.cookies.userId) {
    res.json({
      status: 0,
      msg: '',
      result: req.cookies.userName || '',
    })
  } else {
    res.json({
      status: 1,
      msg: '未登录',
      result: ''
    })
  }
})

// 用户注销
router.post('/logout', function(req, res, next) {
  res.cookie("userId", "", {
    path: '/',
    MaxAge: -1
  });
  res.json({
    status: 0,
    msg: '',
    result: '退出成功'
  })
})

// 查询购物车列表
router.get('/cartList', function(req, res, next) {
  let userId = req.cookies.userId
  User.findOne({'userId': userId}, function(err, doc) {
    if(err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      if(doc) {
        res.json({
          status: 0,
          msg: '',
          result: doc.cartList
        })
      }
    }
  })
})

// 购物车数量操作
router.post('/cartEdit', function(req, res, next) {
  let userId = req.cookies.userId
  productId = req.body.productId
  productNum = req.body.productNum
  checked = req.body.checked

  User.update({'userId': userId, 'cartList.productId': productId}, {
    'cartList.$.productNum': productNum,
    'cartList.$.checked' : checked
  },function(err, doc) {
    if (err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: 0,
        msg: '',
        result: '商品更新成功'
      })
    }
  })
})

// 删除商品
router.post('/cartDel', function(req, res, next) {
  let userId = req.cookies.userId,
  productId = req.body.productId
  User.update({
    userId: userId
  }, {
    $pull: {
      'cartList': {
        'productId': productId
      }
    }
  }, function(err, doc) {
    if (err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: 0,
        msg: '',
        result: '商品删除成功'
      })
    }
  })
})

// 全选接口
router.post('/editCheckAll', function(req, res, next) {
  let userId = req.cookies.userId,
      checkAll = req.body.checkAll ? '1' : '0'
  
  User.findOne({'userId': userId}, function(err, user) {
    if (err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      user.cartList.forEach((item) => {
        item.checked = checkAll
      })
      user.save(function(err1, doc) {
        if (err1) {
          res.json({
            status: 1,
            msg: err1.message,
            result: ''
          })
        } else {
          res.json({
            status: 0,
            msg: '',
            result: '操作成功'
          })
        }
      })
    }
  })
})

// 获取用户地址
router.get('/addressList', function(req, res, next) {
  let userId = req.cookies.userId
  User.findOne({'userId': userId}, function(err, doc) {
    if (err) {
      res.json({
        status: 0,
        msg: '',
        result: err
      })
    } else {
      res.json({
        status: 0,
        msg: '获取用户地址成功',
        result: doc.addressList
      })
    }
  })
})

// 更改默认地址
router.post('/setDefault', function(req, res, next) {
  let userId = req.cookies.userId,
      addressId = req.body.addressId
  if(!addressId) {
    res.json({
      status: 1003,
      msg: 'addressId is null',
      result: ''
    })
  } else {
    User.findOne({'userId': userId}, function(err, doc) {
      if(err) {
        res.json({
          status: 1,
          msg: err.message,
          result: ''
        })
      } else {
        let addressList = doc.addressList
        addressList.forEach((item) => {
          if(item.addressId === addressId) {
            item.isDefault = true
          } else {
            item.isDefault = false
          }
        })
        doc.save(function(err1, doc1) {
          if(err1) {
            res.json({
              status: 1,
              msg: err1.message,
              result: '' 
            })
          } else {
            res.json({
              status: 0,
              msg: '',
              result: doc1.addressList
            })
          }
        })
      }
    })
  }
})

// 删除地址
router.post('/delAddress', (req, res, next) => {
  let userId = req.cookies.userId, addressId = req.body.addressId;
  if (!addressId) {
    res.json({
      status: '10003',
      msg: 'addressId 未获得',
      result: ''
    })
  } else {
    User.update({ userId: userId }, {
      $pull: {
        addressList: {
          'addressId': addressId
        }
      }
    }, (err, doc) => {
      if (err) {
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        })
      } else {
        if (doc) {
          res.json({
            status: '0',
            msg: '',
            result: doc
          })
        }
      }
    })
  }
})

// 添加地址
router.post('/addadd', function(req, res, next) {
  let userId = req.cookies.userId
  if (!userId) {
    result.json({
      status: 1003,
      msg: 'userId is null',
      result: ''
    })
  } else {
    let shijian = '6' + new Date().Format('yyyyMMddhhmmss');
    let addressId = shijian,
      userName = req.body.userName,
      streetName = req.body.streetName,
      postCode = req.body.postCode,
      tel = req.body.userTel,
      isDefault = false

    User.findOne({userId: userId}, function(err, doc) {
      if(err) {
        res.json({
          status: 1,
          mes: err.message,
          result: ''
        })
      } else if(doc) {
        let params = {
          "addressId": addressId,
          "userName": userName,
          "streetName": streetName,
          "postCode": postCode,
          "tel": tel,
          "isDefault": isDefault
        }
        doc.addressList.push(params)
        doc.save((err1, doc2) => {
          if (err1) {
            res.json({
              status: 1,
              mes: err1.message,
              result: ''
            })
          } else {
            res.json({
              status: 0,
              mes: '',
              result: '地址保存成功'
            })
          }
        })
      }
    })
  }
})

//生成订单
router.post('/payMent', function(req, res, next) {
  let userId = req.cookies.userId,
    // addresId = req.body.addressId,
    orderTotal = req.body.orderTotal;
  User.findOne({userId: userId}, function(err, doc) {
    if (err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      let address = '', goodsList = [];
      //获取当前用户的地址信息
      doc.addressList.forEach((item) => {
        if (item.isDefault) {
          address = item
        }
      })
      //获取用户购物车的购买商品
      let wei = []
      doc.cartList.forEach((item, index) => {
        if(item.checked == 1) {
          goodsList.push(item)
          
        } else {
          wei.push(item)
        }
      })
      doc.cartList = [];
      wei.forEach((item) => {
        doc.cartList.push(item)
      })
      
      let platform = 666;
      let r1 = Math.floor(Math.random()*10);
      let r2 = Math.floor(Math.random() * 10);

      let sysDate = new Date().Format('yyyyMMddhhmmss');
      let createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
      let orderId = platform + r1 + sysDate + r2;
      let order = {
        orderId: orderId,
        orderTotal: orderTotal,
        addressInfo: address,
        goodsList: goodsList,
        orderStatus: 1,
        createDate: createDate
      }

      doc.orderList.push(order);

      doc.save(function(err1, doc1) {
        if(err1) {
          res.json({
            status: 1,
            msg: err.message,
            result: ''
          })
        } else {
          res.json({
            status: 0,
            msg: '',
            result: {
              orderId: order.orderId,
              orderTotal: order.orderTotal
            }
          })
        }
      })
    }
  })
})

//根据订单Id查询订单信息
router.get('/orderDetail', function(req, res, next) {
  let userId = req.cookies.userId, orderId = (req.param('orderId') != null) || '110';
  User.findOne({userId: userId}, function(err, userInfo) {
    if(err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      if(orderId == '110') {
        res.json({
          status: 0,
          msg: '',
          result: userInfo.orderList
        })
        return
      }
      let orderList = userInfo.orderList
      if(orderList.length > 0) {
        let orderTotal = 0;
        orderList.forEach((item) => {
          if(item.orderId == orderId) {
            orderTotal = item.orderTotal
          }
        })
        if(orderTotal > 0) {
          res.json({
            status: 0,
            msg: '',
            result: {
              orderId: orderId,
              orderTotal: orderTotal
            }
          })
        } else {
          res.json({
            status: '100002',
            msg: '无此订单',
            result: ''
          })
        }
      } else {
        res.json({
          status: '100001',
          msg: '当前用户未创建订单',
          result: ''
        })
      }
    }
  })
})

router.post('/register', function(req, res, next) {
  let userName = req.body.userName, userPwd = req.body.userPwd
  let a = parseInt(Math.random() * 10), b = parseInt(Math.random() * 1000 + 100)
  let userId = a + '00000' + b
  let user1 = new User({
    userId: userId,
    userName: userName,
    userPwd: userPwd,
  })
  user1.save({'abc':'qwe'}, function(err, doc) {
    if(err) {
      res.json({
        status: 1,
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: 0,
        msg: '',
        result: '注册成功'
      })
    }
  })
})


router.get('*', function(req, res, next) {
  res.send('台湾是中国不可分割的一部分')
})
module.exports = router;
