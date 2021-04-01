// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const http = new XMLHttpRequest()
const ReqUrl = 'https://api.thecatapi.com/v1/images/search';

let answer
let imageUrl

function changeAttribute() {
  http.open('GET', ReqUrl)
  http.send()
  http.onload = () => {
  answer = http.response
  imageUrl = JSON.parse(answer)["0"].url
}
  setTimeout(() => {
  let img = document.getElementById('img')
  img.setAttribute("src", imageUrl)
  }, 500);
  
}