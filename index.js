
let form = document.getElementById('form')

let apiKey = 'AKfycbw2m8ajspENH6CGCGE9E6q3lIxGad7UKEKWkmYcQG5VLtt7PUZGbEKHxidWwJnddkLE'
let api = `https://script.google.com/macros/s/${apiKey}/exec`

form.onsubmit = () => {
    form.action = api
    form.method = 'POST'
    form.target = '_blank'
}
