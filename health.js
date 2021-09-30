console.log('hello');
let source='bbc-news';
let apiKey='b384c83305ea4248b5fd0c60f8a6a173';
let newsresult=document.getElementById('newsresult');
let country='in';
let baseUrl = "https://saurav.tech/NewsAPI/"
let category="health";
baseUrl+=`/top-headlines/category/${category}/${country}.json`;
getNews(baseUrl);

function getNews(baseUrl) {
  fetch(baseUrl).then(res =>res.json()).then(data =>{
    showNews(data.articles);
  })
}S

function showNews(data) {
    let articles=data;
    let news="";
    articles.forEach(function(element,index) {
        if(element["content"]!=null){
        news += ` <div class="card mx-4 my-3 shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <img src="${element["urlToImage"]}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${element["title"]}</h5>
          <p class="card-text">${element["content"]}</p>
          <a href="${element["url"]}" target="_blank"class="btn btn-primary" style=" background-color:blue;">Read more </a>
        </div>
      </div>`
        }
            });
    newsresult.innerHTML = news;
}