
const baseURL = "https://justinmlee87.github.io/wdd230/";
const linksURL = "https://justinmlee87.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  }
  
 function displayLinks(weeks) {
    weeks.forEach((week) => {
        let item = document.createElement('li');
        item.textContent = `week ${week.lesson}`;

        week.link.forEach((link) => {
            let newLink = document.createElement('a');
            newLink.setAttribute('href', link.url);
            newLink.setAttribute('target', "_blank");
            newLink.textContent = link.title;
            item.appendChild(newLink);
        })
    
        list.appendChild(item);
    })
 }