/* 鼠标点击特效 */
var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("♥", "徐", "大", "铭", "同", "学", "生", "日", "快", "乐", "啊", "♥", "还", "有", "圣", "诞", "也", "要", "快", "乐", "♥", "天", "天", "都", "要", "开", "心","哈", "♥");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            1500,
            function () {
                $i.remove();
            });
    });
});