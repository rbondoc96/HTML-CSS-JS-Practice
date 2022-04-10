const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

window.addEventListener("DOMContentLoaded", (event) => {
    const sorted = bands.sort((a, b) => stripArticle(b) > stripArticle(a)? -1: 1);
    document.querySelector("#bands").innerHTML = sorted.map(elem => {
        return `<li>${elem}</li>`
    }).join("");
})

function stripArticle(str) {
    return str.replace(/^(a |an |the )/i, "").trim()
}