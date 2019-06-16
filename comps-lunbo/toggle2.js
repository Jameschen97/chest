var bindEventItems = function () {
    var selector = '.gua-item'
    bindAll(selector, 'mouseenter', function (event) {
        log('mouseenter')
        var item = event.target
        removeClassAll('gua-highlight')
        if (item.classList.contains('gua-item')) {
            item.classList.add('gua-highlight')
        }
    })
    // bindAll(selector, 'mouseout', function (event) {
    //     log('out')
    //     var item = event.target
    //     if (item.classList.contains('gua-item')) {
    //         item.classList.remove('gua-highlight')
    //     }
    // })
}

bindEventItems()