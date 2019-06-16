// 轮播图
/*
1, 写一个 div 里面有 3 个 img 标签
2, 只显示当前活动的 img 标签
3, 加 2 个按钮, 点击的时候切换图片
*/
var bindEventSlide = function (selector, buttonType = "next") {
    bindAll(selector, 'click', function(event) {
        var slide = event.target.parentElement
        var numberOfImgs = parseInt(slide.dataset.imgs)
        var activeIndex = parseInt(slide.dataset.active)
        if (buttonType == "next") {
            var nextIndex = (activeIndex + 1) % numberOfImgs
        } else if (buttonType == "pre") {
            var nextIndex = (activeIndex - 1 + 3) % numberOfImgs
        } else {
            return log('buttonType valueError')
        }
        slide.dataset.active = nextIndex
        var nextSelector = '#id-guaimage-' + String(nextIndex)
        var className = 'gua-active'
        removeClassAll(className)
        var img = e(nextSelector)
        img.classList.add(className)
    })
}

var bindEventSlidePre = function () {
    var selector = '.gua-slide-pre'
    bindEventSlide(selector, 'pre')
}

var bindEventSlideNext = function () {
    var selector = '.gua-slide-next'
    bindEventSlide(selector, 'next')
}

var __main = function() {
    bindEventSlidePre()
    bindEventSlideNext()
}

__main()