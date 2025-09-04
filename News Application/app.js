// let getDiv = document.getElementById("show");

// function searchNews() {
//     let getInp = document.getElementById("inp");

//     fetch(`https://newsapi.org/v2/everything?q=tesla&from=2025-01-01&sortBy=publishedAt&apiKey=515ea1901a3d4aa6a48e5cd62602a609`)
//         .then((data) => {
//             return data.json();
//         })
//         .then((data) => {
//             data.articles.map((article) => {
//                 getDiv.innerHTML += `
//                     <div class="abc">
//                         <img width="100%" src=${article.urlToImage} />
//                         <p>${article.title}</p>
//                         <p>${article.description}</p>
//                         <p>${article.author}</p>
//                         <p>${article.publishedAt}</p>
//                     </div>
//                 `;
//             });
//         });
// }











let getDiv = document.getElementById("show");

function searchNews() {
    let getInp = document.getElementById("inp");
    let query = getInp.value.trim();

    if (!query) {
        alert("Please enter a keyword to search.");
        return;
    }

    getDiv.innerHTML = "";

    // ✅ NewsData.io API (using your key)
    fetch(`https://newsdata.io/api/1/news?apikey=pub_77c17324d7e34f22b8244737585f02ac&q=${encodeURIComponent(query)}&language=en`)
        .then((res) => res.json())
        .then((data) => {
            if (!data.results || data.results.length === 0) {
                getDiv.innerHTML = "<p>No news found for this topic.</p>";
                return;
            }

            data.results.forEach((article) => {
                getDiv.innerHTML += `
                    <div class="abc">
                        <img width="100%" src="${article.image_url || 'https://via.placeholder.com/150'}" />
                        <p><strong>${article.title}</strong></p>
                        <p>${article.description || "No description available."}</p>
                        <p><em>${article.creator ? article.creator.join(", ") : "Unknown Author"}</em></p>
                        <p>${article.pubDate ? new Date(article.pubDate).toLocaleString() : "No date"}</p>
                        <a href="${article.link}" target="_blank" style="color:blue; text-decoration:underline; margin:10px;">Read More</a>
                    </div>
                `;
            });
        })
        .catch((err) => {
            console.error("Fetch error:", err);
            getDiv.innerHTML = "<p>Error fetching news. Try again later.</p>";
        });
}
