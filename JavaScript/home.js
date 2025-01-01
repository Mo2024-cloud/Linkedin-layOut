const loading = document.querySelector(".loading");
// 17c31977157e4788851974f66f2b9755
// https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
//https://newsapi.org/v2/top-headlines/sources?country=egapiKey=17c31977157e4788851974f66f2b9755
//https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&apiKey=17c31977157e4788851974f66f2b9755',{headers:new Headers({"X-Requested-With":"mohamed"})})
// function getNews(){
//     loading.classList.remove("d-none");
//     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=17c31977157e4788851974f66f2b9755')
//           .then(a=>a.json())
//           .then(response=>{
            
//             for (let i = 0; i < response.articles.length; i++) {
//                 document.getElementById('articles-container').innerHTML+=`
//                 <div class="col-md-12">
//                     <div class="master-circle card h-100  shadow-sm">
//                         <div class="card-body">
//                           <div class="col-md-4 w-75">
//                             <img src="${response.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
//                           </div>
//                             <h5 class="card-title ">${response.articles[i].title}</h5>
                            
//                             <p class="card-text">${response.articles[i].description}</p>
                
//                         </div>
//                     </div>
//                 </div>
//                 `
//                 loading.classList.add("d-none");
//             }
//           })
// }

let currentPage = 1;
const pageSize = 5; // Number of articles per page
loading.classList.remove("d-none");
function getNews(page = 1) {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=17c31977157e4788851974f66f2b9755`)
        .then(a => a.json())
        .then(response => {
            
            const container = document.getElementById('articles-container');
            container.innerHTML = ''; // Clear previous articles

            response.articles.forEach(article => {
                container.innerHTML += `
                <div class="col-md-12">
                    <div class="master-circle card h-100 shadow-sm">
                        <div class="card-body">
                            <div class="col-md-4 w-75">
                                <img src="${article.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <h5 class="card-title ">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            loading.classList.add("d-none");
            document.getElementById('page-number').textContent = `Page ${page}`;
            document.getElementById('prev-page').disabled = page === 1;
            document.getElementById('next-page').disabled = page >= Math.ceil(response.totalResults / pageSize);
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
}

// Initially load the first page
getNews(currentPage);

function signOut(){
    location.href = '../index.html'
}
