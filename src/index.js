import './sass/main.scss';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NewsApiService from './js/api-service';
import articlesTpl from './templates/articles.hbs';

const refs = {
    form: document.querySelector(".search-form"),
    formInput: document.querySelector("input[type=text]"),
    formBtn: document.querySelector("button[name=search]"),
    loadMoreBtn: document.querySelector('button[data-action="load-more"]')
}
console.log(refs.loadMoreBtn)
const newsApiService = new NewsApiService();   
refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onloadMore)

function onSearch(e){
    e.preventDefault();
    newsApiService.query = e.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles().then(articles=> console.log(articles));
  
}

function onloadMore(){
    newsApiService.fetchArticles().then(articles=> console.log(articles));
}