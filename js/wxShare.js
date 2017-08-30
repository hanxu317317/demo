function wxShare(p) {
    wx.config({
        debug: false,
        appId: p.appid,
        timestamp: p.timestamp,
        nonceStr: p.nonceStr,
        signature: p.signature,
        jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
        ]
    });
    
    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: p.shareTitle,
            desc: p.descContent,
            link: p.lineLink,
            imgUrl: p.imgUrl,
            trigger: function(res) { },
            success: function(res) {
                try {
                    if (mp3Id > 0)
                        ZM();
                } catch (e) { }

                try {
                   setReadNum(1,'分享成功',userStr);
                } catch (e) { }

                shareHideFn('pop2');
            },
            cancel: function(res) { },
            fail: function(res) { }
        });

        wx.onMenuShareAppMessage({
            title: p.shareTitle,
            desc: p.descContent,
            link: p.lineLink,
            imgUrl: p.imgUrl,
            trigger: function(res) { },
            success: function(res) {
            try {
                if (mp3Id > 0)
                    ZM();
            } catch (e) { }
             try {
                   setReadNum(1,'分享成功',userStr);
                } catch (e) { }
                shareHideFn('pop2');
            },
            cancel: function(res) { },
            fail: function(res) { }
        });

        wx.onMenuShareQQ({
            title: p.shareTitle,
            desc: p.descContent,
            link: p.lineLink,
            imgUrl: p.imgUrl,
            trigger: function(res) { },
            complete: function(res) { },
            success: function(res) {
            try {
                if (mp3Id > 0)
                    ZM();
            } catch (e) { }
 try {
                   setReadNum(1,'分享成功',userStr);
                } catch (e) { }
         
                shareHideFn('pop2');
            },
            cancel: function(res) { },
            fail: function(res) { }
        });

        wx.onMenuShareWeibo({
            title: p.shareTitle,
            desc: p.descContent,
            link: p.lineLink,
            imgUrl: p.imgUrl,
            trigger: function(res) { },
            complete: function(res) { },
            success: function(res) {
            try {
                if (mp3Id > 0)
                    ZM();
            } catch (e) { }

 try {
                   setReadNum(1,'分享成功',userStr);
                } catch (e) { }
            
           
                shareHideFn('pop2');
            },
            cancel: function(res) { },
            fail: function(res) { }
        });

    });


}

wx.ready(function() {   
  wx.hideMenuItems({
      menuList: ['menuItem:copyUrl'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
  });
});
function ZM() { 
     $.ajax({
            type: "POST",
            url: 'ZM.aspx',
            async: false,
            data: {
                "mediaId": mp3Id
            },
            beforeSend: function(xmlHttpRequest) { },
            success: function(data, textStatus) {

              

            },
            complete: function(xmlHttpRequest, textStatus) { },
            error: function() {

            }
        });
   
}