const textToShow = document.querySelector("h2")
function sayHello() {
    const yourName = prompt("please inter your name:").replace(/ /g , "_")
    return(`hello dear ${yourName.toLocaleUpperCase()}!`)
}
textToShow.innerHTML =sayHello()
console.log(textToShow)
