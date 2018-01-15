var attrs = ["futurecql", "futureyz", "futureplace", "djn", "gzh", "cqkt", "zhandou", "yuanzheng",
    "shanghai", "zuiyuan", "kaixiao", "huale", "caishui", "daidao", "username"]

function submitBill() {
    var count = 0;
    var baseurl = "https://tjuau.dustark.cn/dist/shanghaishenhua/2017yearlybill/public_pages/index.html?"
    var posturl = "http://dustark.cn/shonline.php?"
    var url = "";
    attrs.forEach(function (e) {
        if ($('#' + e).val() !== "") {
            count++;
            if (count !== 1) url += '&';
            url += e + '=' + $('#' + e).val();
        }
    })
    console.log(url);
    console.log(posturl + url)

    if (count) {
        $.ajax({
            url: posturl + url,
            type: "GET",
            complete: function(res) {
                window.location.href=baseurl + encodeURI(encodeURI(url));
            }
        })
    }
}
// // 配置成功后执行
// wx.ready(function(){
//
//     // 获取地理位置
//     wx.getLocation({
//         type: 'wgs84',
//         success: function (res) {
//             console.log(res);
//             var latitude = res.latitude;
//             var longitude = res.longitude;
//             var speed = res.speed;
//             var accuracy = res.accuracy;
//             alert("latitude:" + latitude + " / latitude:" + longitude);
//         }
//     });
//
// });
