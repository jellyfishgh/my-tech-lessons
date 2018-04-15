document.body.onclick = function () {
    const { target } = event
    if (target.tagName === 'DIV') {
        console.log(target.childNodes[0].nodeValue)
        console.log(target.innerText)
        console.log(target.innerHTML)
    }
}