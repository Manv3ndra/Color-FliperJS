const colors = ['red', 'green', 'violet', 'yellow', 'orange', 'white', 'gold', 'aqua', 'brown', 'cyan', 'beige', 'crimson', 'violet', 'pink', 'grey']

const btn = document.querySelector("button")
const colortext = document.querySelector('.colorname')

// console.log(btn)
// console.log(colortext)

function getRandom(length) {
    return Math.floor(Math.random() * length)
}

// console.log(colors[getRandom(colors.length)])

function changebg() {
    let color = colors[getRandom(colors.length)]
    document.body.style.backgroundColor = color
    colortext.textContent = color.charAt(0).toUpperCase() + color.slice(1)
    // return color
}

// console.log(changebg(colors[getRandom(colors.length)]))
changebg()

btn.addEventListener('click', function() {
    changebg()
})

document.addEventListener('keydown', function(event) {
    if (event.key === " "){
        changebg()
    }
})