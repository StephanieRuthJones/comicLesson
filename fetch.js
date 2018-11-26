document.addEventListener('DOMContentLoaded', function(){
    fetch('https://galvanize-cors.herokuapp.com/https://xkcd.com/601/info.0.json')
    .then(function(response) {
        return response.json()
    })

    .then (function(jsonResponse){
        var title = document.querySelector('h1')
        title.innerText = jsonResponse.title
        var alt = document.querySelector('p')
        alt.innerText = jsonResponse.alt
        var image = document.querySelector('img')
        image.src = jsonResponse.img
// Create a p tag and set the text to the value of 'data.safe_title'
// have appear underneath the h1 you made earlier
        var safeTitle = document.createElement('p')
        safeTitle.innerText = jsonResponse.safe_title
        title.appendChild(safeTitle)

// Create another p tag and set this text to display "comic number " with data.num in the text of the p tag
// make it appear above the image
        var comicNumber = document.createElement('p')
        comicNumber.innerText = jsonResponse.num
        alt.appendChild(comicNumber)
    })

    



})