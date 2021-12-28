export var createElement = Document.prototype.createElement.bind(document)
export var select = Document.prototype.querySelector.bind(document)

export var createDiv = function(classItems= undefined) {
    const div = document.createElement('div')
    if(Array.isArray(classItems)) {
        div.classList.add(...classItems)
    }else if(typeof classItems === 'string') {
        div.classList.add(classItems)
    }
    return div
}