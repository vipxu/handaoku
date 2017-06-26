function expose(){
    var data = {
            title: '商品列表',
            isAdmin: true,
            list: [ {
                        "id" : 1,
                        "url" :"https://detail.tmall.com/item.htm?id=522857429940",
                        "imgsrc" :"http://img.alicdn.com/imgextra/i2/TB1TE2UOVXXXXaUXXXXXXXXXXXX_!!0-item_pic.jpg_310x310.jpg",
                        "cost" : 29.90,
                        "sales":7533,
                        "title":"【寿全斋_红糖姜茶+黑糖姜茶】姜母茶",
                        "plan" : "通用45.2%",
                        "commission":"3.40",
                        "juanhou":20,
                        "paodan":"568",
                        "coupon":{
                            "yunum" : 553,
                            "pic" : 10,
                            "yining" : 1000,
                            "url" :"http://shop.m.taobao.com/shop/coupon.htm?&sellerId=2836984312&activityId=216dfc6751b84d5eb2dba019a590aade",
                            "txt":"真是fan"
                                }
                           
                    },
                    {
                        "id" : 2,
                        "url" :"https://detail.tmall.com/item.htm?id=36247161745",
                        "imgsrc" :"http://img03.taobaocdn.com/bao/uploaded/i3/TB1iAFROVXXXXbvapXXXXXXXXXX_!!0-item_pic.jpg_310x310.jpg",
                        "cost" : "118.00",
                        "sales":"723",
                        "title":"【赤豪】澳洲家庭牛排套餐团购",
                        "plan" : "通用38.2%",
                        "commission":"3.40",
                        "juanhou":"21",
                        "paodan":"568",
                        "coupon":{
                            "yunum" : "344",
                            "pic" : "8",
                            "yining" : "1000",
                            "url" :"http://shop.m.taobao.com/shop/coupon.htm?&sellerId=2836984312&activityId=216dfc6751b84d5eb2dba019a590aade",
                            "txt":"真是fan"
                                }
                           
                    },
                    {
                        "id" : 3,
                        "url" :"https://detail.tmall.com/item.htm?id=45619601796&sku_properties=122216507:113060",
                        "imgsrc" :"http://img01.taobaocdn.com/bao/uploaded/i1/TB1loNALpXXXXc8XpXXXXXXXXXX_!!0-item_pic.jpg_310x310.jpg",
                        "cost" : "89.00",
                        "sales":"753",
                        "title":"茶叶320g铁观音茶叶",
                        "plan" : "定向26.2%",
                        "commission":"3.40",
                        "juanhou":"10",
                        "paodan":"568",
                        "coupon":{
                            "yunum" : "552",
                            "pic" : "6",
                            "yining" : "1000",
                            "url" :"http://shop.m.taobao.com/shop/coupon.htm?&sellerId=2836984312&activityId=216dfc6751b84d5eb2dba019a590aade",
                            "txt":"真是fan"
                                }
                           
                    },{
                        "id" : 4,
                        "url" :"https://detail.tmall.com/item.htm?id=522857429940",
                        "imgsrc" :"http://img03.taobaocdn.com/bao/uploaded/i3/TB19iV0OFXXXXaaXFXXXXXXXXXX_!!0-item_pic.jpg_310x310.jpg",
                        "cost" :"98.00",
                        "sales":"7533",
                        "title":"缦舞简约床上用品四件",
                        "plan" : "鹊桥65.6%",
                        "commission":"3.40",
                        "juanhou":"60",
                        "paodan":"568",
                        "coupon":{
                            "yunum" : "552",
                            "pic" : "10",
                            "yining" : "1000",
                            "url" :"http://shop.m.taobao.com/shop/coupon.htm?&sellerId=2836984312&activityId=216dfc6751b84d5eb2dba019a590aade",
                            "txt":"真是fan"
                                }
                           
                    },{
                        "id" : 5,
                        "url" :"https://detail.tmall.com/item.htm?id=541589251106&skuId=3268099277440",
                        "imgsrc" :"http://img04.taobaocdn.com/bao/uploaded/i4/TB1yN3TOXXXXXaaapXXXXXXXXXX_!!0-item_pic.jpg_310x310.jpg",
                        "cost" : "39.90",
                        "sales":"7533",
                        "title":"骄子牧场花样奶酪",
                        "plan" : "通用45.2%",
                        "commission":"3.40",
                        "juanhou":"50",
                        "paodan":"568",
                        "coupon":{
                            "yunum" : "553",
                            "pic" : "8",
                            "yining" : "1000",
                            "url" :"http://shop.m.taobao.com/shop/coupon.htm?&sellerId=2836984312&activityId=216dfc6751b84d5eb2dba019a590aade",
                            "txt":"真是fan"
                                }
                           
                    },{
                        "id" : 6,
                        "url" :"https://item.taobao.com/item.htm?id=536788582807",
                        "imgsrc" :"http://img02.taobaocdn.com/bao/uploaded/i2/2472064634/TB2fCl0abBkpuFjy1zkXXbSpFXa_!!2472064634.jpg_310x310.jpg",
                        "cost" : "28.90",
                        "sales":"733",
                        "title":"3瓶厨房清洁剂油污净",
                        "plan" : "通用26.56%",
                        "commission":"6.40",
                        "juanhou":"30",
                        "paodan":"568",
                        "coupon":{
                            "yunum" : "553",
                            "pic" : "6",
                            "yining" : "1000",
                            "url" :"http://shop.m.taobao.com/shop/coupon.htm?&sellerId=2836984312&activityId=216dfc6751b84d5eb2dba019a590aade",
                            "txt":"真是fan"
                                }
                           
                    }
                
                ]
        };
        var html = template('demo', data);
        document.getElementById('container').innerHTML = html;
}