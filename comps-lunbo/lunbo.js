// 轮播图
/*
1, 写一个 div 里面有 3 个 img 标签
2, 只显示当前活动的 img 标签
3, 加 2 个按钮, 点击的时候切换图片
4, 定时自动切换图片
*/
var activeByIndex = function (nextIndex) {
    var slide = e('.gua-slide')
    slide.dataset.active = nextIndex
    var nextImage = '#id-guaimage-' + String(nextIndex)
    var nextIndi = '#id-guaindi-' + String(nextIndex)

    var imgClassName = 'gua-active'
    var indiClassName = 'gua-white'
    removeClassAll(imgClassName)
    removeClassAll(indiClassName)

    var img = e(nextImage)
    var indi = e(nextIndi)
    img.classList.add(imgClassName)
    indi.classList.add(indiClassName)
    stop()
    play()
}

var slide = function(step=1) {
    var slide = e('.gua-slide')
    var numberOfImgs = parseInt(slide.dataset.imgs)
    var activeIndex = parseInt(slide.dataset.active)

    var nextIndex = (activeIndex + step + numberOfImgs) % numberOfImgs
    activeByIndex(nextIndex)
}

var play = function() {
    window.timer = setInterval(function() {
        slide()
    }, 2000)
}

var stop = function () {
    clearInterval(window.timer)
}

var bindEventSlide = function(step=1) {
    bindAll(".gua-slide", 'click', function(event) {
        id = event.target.id
        if (id === "gua-slide-pre") {
            step = -1
        } else if (id === "gua-slide-next") {
            step = 1
        }
        slide(step)
    })
}

// var bindEventSlidePre = function() {
//     bindEventSlide('.gua-slide-pre', -1)
// }

// var bindEventSlideNext = function() {
//     bindEventSlide('.gua-slide-next', 1)
// }

var bindEventIndi = function() {
    bindAll('.gua-slide-indi', 'click', function(event) {
        var id = event.target.id
        var nextIndex = parseInt(id[id.length-1])
        activeByIndex(nextIndex)
    })
}

var __main = function() {
    // bindEventSlidePre()
    // bindEventSlideNext()
    bindEventSlide()
    bindEventIndi()
    play()
}

__main()