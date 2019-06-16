var log = function() {
    console.log.apply(console, arguments)
}

var e = function(sel) {
    return document.querySelector(sel)
}

var es = function (sel) {
    return document.querySelectorAll(sel)
}

var appendHtml = function (element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function (element, event, callback) {
    element.addEventListener(event, callback)
}

var bindAll = function (selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (let i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

var removeClassAll = function (className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (let i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.remove(className)
    }
}

var find = function (element, selector) {
    return element.querySelector(selector)
}