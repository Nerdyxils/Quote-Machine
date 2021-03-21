
const url = "https://api.quotable.io/random";

quote = () => {

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById("Quote").innerHTML = data.content;
        document.getElementById("Author").innerHTML = "- " + data.author;
    })
    .catch(function(err) {
        console.log(err);
    });
}

generateQuote = () => {
    quote(Math.random() * quote())
}





