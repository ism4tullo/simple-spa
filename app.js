

const reqUrl = 'https://api.thecatapi.com/v1/images/search';
var img = document.getElementById('img')

function changeAttribute() {
  fetch(reqUrl)
    .then(res => res.json())
    .then(res => res[0].url)
    .then((data) => {
      img.setAttribute('src', data)
    })

}