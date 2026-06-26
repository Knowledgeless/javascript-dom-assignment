let generateButton = document.querySelector("#generateButton");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

generateButton.addEventListener("click", async () => {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();

        quote.innerHTML = `"${data.quote}"`;
        author.innerHTML = `<i>- ${data.author}</i>`;
    }
    catch (error) {
        console.log(error);
    }
});