/*
1, 写出 html
2, 给按钮绑定事件
3, 在点击按钮的时候切换
*/
var bindEventToggle = function() {
    var b = e('.gua-menu-toggle')

    bindEvent(b, 'click', function(event) {
        // log('click button')
        var c = e('.gua-menu-content')
        toggleClass(c, 'gua-hide')
    })
}

var bindEventToggles = function() {
    var selector = '.gua-menu-toggle'
    bindAll(selector, 'click', function (event) {
        // log('click button')
        var p = event.target.parentElement
        var c = find(p, '.gua-menu-content')
        toggleClass(c, 'gua-hide')
    })
}

bindEventToggles()