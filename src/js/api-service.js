export default class NewsApiService{
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

fetchArticles(){
        console.log(this);
        const API_KEY = "25845738-03600c11d74895699b8defef6";
        const BASE_URL = "https://pixabay.com/api/";
        return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`)
        .then(res=>res.json())
        .then(data=>{
            this.page +=1;
            return data.articles;
        })
    }
    resetPage(){
        this.page = 1;
    }
    get query(){
        return this.searchQuery;
    } 
    set query(newQuery){
        this.searchQuery = newQuery;
    }
    }
