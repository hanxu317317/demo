var loadtime=1;
var host = 'http://192.168.171.27:7888/';
setTimeout(function(){
    loadtime=2;
},3000)

//预加载
var LoadImage = function(obj) {
    this.newimages = [];
    this.count = 0;
    this.arr = (typeof obj.imgs != "object") ? [obj.imgs] : obj.imgs;
    this.len = this.arr.length;
    this.per = (1 / this.len);
    this.loading = obj.loading;
    this.done = obj.done;
    this.Run();
};
LoadImage.prototype.imageloadpost = function() {
    var self = this,
        num = null;
    self.count++;
    num = self.count * self.per;
    num = parseInt(num * 100);
    self.loading(num);
    if (self.count == self.len) {
        self.loading(100);
        setTimeout(function() {
            self.done()
        }, 500);
    }
};

var onerr=0;

LoadImage.prototype.Run = function() {
    //console.log(this)
    var self = this;
    for (var i = 0; i < self.arr.length; i++) {
        self.newimages[i] = new Image();
        self.newimages[i].src = self.arr[i];
        self.newimages[i].onload = function() {
            //console.log(self.arr[i])
            self.imageloadpost();
        }
        self.newimages[i].onError = function() {
            //console.log(self.newimages[i])
            onerr++
        }
    }
};

var loi=0;
var lonum=0;

var LoadingSwit = function(num) {
        if (num == "100") {
            console.log("100")
            $(".lotext").html(100+"%");
            $(".lotext").addClass("animated flash_ off");
            $(".loEx").show();
            $(".loady").addClass("on");
            setTimeout(function(){
                $(".loEx").addClass("on");
                $(".explore").show();
                $(".ment").show();
                var i = 0;
                // for (i; i < 4; i++ ) {
                //     var tmp = i;
                setTimeout(function(i) {
                    $(".self-intro").eq(0).addClass("off");
                    setTimeout(function() {
                        $(".self-intro").eq(0).hide();
                    }, 500)
                },3200);
                setTimeout(function(i) {
                    $(".self-intro").eq(1).addClass("off");
                    setTimeout(function() {
                        $(".self-intro").eq(1).hide();
                    }, 100)
                },5800);
                // setTimeout(function(i) {
                //     $(".self-intro").eq(2).addClass("off");
                //     setTimeout(function() {
                //         $(".self-intro").eq(2).hide();
                //     }, 100)
                // },5700);

                // }
                
            },100);
        }else {
            $(".lotext").html(num+"%");
            // $(".lotext").html(num+"%")
            // formatSeconds(num)
        }
    },
    initPage = function() {
        bodyH = window.innerHeight;
        setTimeout(function() {
            //var RP = new LoadPages();
//          pgvSendClick({
//              hottag: 'invitation.loading.finish'
//          });
        }, 1500);
    },
    orient = function() {
        if (window.orientation == 0 || window.orientation == 180) {
            //$(".outer").show();
            //$(".orient").hide();
        }
        if (window.orientation == 90 || window.orientation == -90) {
            //$(".outer").hide();
            //$(".orient").show();
        }
        initPage();
        //重置外层高度
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orient, false);
    };

var Loadimg=[];
// 猫头鹰
for (var i = 1; i <= 1; i++) {
    Loadimg.push('../' + "image/x1/" + i + ".png");
}
// 小蝴蝶
for (var i = 1; i <= 1; i++) {
    Loadimg.push('../' + "image/x2/" + i + ".png");
    Loadimg.push('../' + "image/x3/" + i + ".png");
    Loadimg.push('../' + "image/x4/" + i + ".png");
}

// 小虫子
for (var i = 1; i <= 1; i++) {
    Loadimg.push('../' + "image/x5/" + i + ".png");
}

// 小猪
for (var i = 1; i <= 1; i++) {
    Loadimg.push('../' + "image/x6/" + i + ".png");
}
// 都放在 image/common
Loadimg.push(
    '../' + "image/common/Va1.png",
    '../' + "image/common/Va2.png",
    '../' + "image/common/Va3.png",
    '../' + "image/common/Va4.png",
    '../' + "image/common/Va5.png",
    '../' + "image/common/Va6.png",
    '../' + "image/common/Close.png",
    '../' + "image/common/cp1.png",
    '../' + "image/common/cp2.png",
    '../' + "image/common/cp3.png",
    '../' + "image/common/cp4.png",
    '../' + "image/common/cp5.png",
    '../' + "image/common/cp6.png",
    '../' + "image/common/fxgb.png",
    '../' + "image/common/gblz.png",
    '../' + "image/common/lo0.png",
    '../' + "image/common/load_t1.png",
    '../' + "image/common/ltitle.png",
    '../' + "image/common/lzgb.png",
    '../' + "image/common/num.png",
    '../' + "image/common/p2-popup.png",
    '../' + "image/common/p4-left.png",
    '../' + "image/common/p4-right.png",
    '../' + "image/common/sfyy.png",
    '../' + "image/common/shou.png",
    '../' + "image/common/suo.png",
    '../' + "image/common/title.png",
    '../' + "image/common/tyt.png",
    '../' + "image/common/wwtz.png",
    '../' + "image/common/button/add-black-button.png",
    '../' + "image/common/button/add-button.png",
    '../' + "image/common/button/add-button1.png",
    '../' + "image/common/button/add-outline-button.png",
    '../' + "image/common/button/back-button.png",
    '../' + "image/common/button/chart-button.png",
    '../' + "image/common/button/confirm-button.png",
    '../' + "image/common/button/find-button.png",
    '../' + "image/common/button/next-black-button.png",
    '../' + "image/common/button/next-button.png",
    '../' + "image/common/button/play-button.png",
    '../' + "image/common/button/play-outline-button.png",
    '../' + "image/common/button/play-outline-buttons.png",
    '../' + "image/common/button/record-button2.png",
    '../' + "image/common/button/tick-button.png",
    '../' + "image/common/button/zoom-button.png"
    )
var MyLoadImage = new LoadImage({
    imgs: Loadimg,
    loading: LoadingSwit,
    done: orient
});