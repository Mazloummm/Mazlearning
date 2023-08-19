// javascript
const article = document.querySelector("#content");
const button = document.querySelector("button");

function showMore() {
    if (article.className == "open") {
       // read less
       article.className = "";
       button.innerHTML = "Show more";
     } else {
       //read more
       article.className = "open";
       button.innerHTML = "Show less";
     }
}

