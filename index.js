
let form = document.getElementById('form')

let apiKey = 'AKfycbyponG4Z4fJ306h34V_eyTs-Kk7PefyfPqh7wOnKHejVqzSKoZw_LKmD1R5Faa9yQ'
let api = `https://script.google.com/macros/s/${apiKey}/exec`

form.onsubmit = () => {
    form.action = api
    form.method = 'POST'
    form.target = '_blank'
}
