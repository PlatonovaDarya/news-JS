import App from './components/app/app';
import './global.css';

const app = new App();
app.start();


const news = document.getElementById('news');

type TNews = {
  title: string;
  author: string;
  description: string;
  urlToImage: string;
  sourse: TSourse;
}

type TSourse = {
  id: string;
  name: string;
}

const apiUrl = "https://newsapi.org/v2/";
const apiKey = "3d8653ddae634fe2ae599c99d564a66e";

async function fetchNews() {
  const response = await fetch(`${apiUrl}everything?domains=wsj.com&apiKey=${apiKey}`);
  const obj = await response.json();
  console.log(obj.articles);
  renderNews(obj.articles);
}
fetchNews();

function renderNews(newsArr: TNews[]) {
  newsArr.forEach(newItem => {
    const listItem = document.createElement('div');
    listItem.className = "news__item";
    news?.appendChild(listItem);

    const imgItem = document.createElement('img');
    imgItem.src = newItem.urlToImage;
    listItem.appendChild(imgItem);

    const titleItem = document.createElement('h2');
    titleItem.innerHTML = newItem.title;
    listItem.appendChild(titleItem);

    const descriptionItem = document.createElement('p');
    descriptionItem.innerHTML = newItem.description;
    listItem.appendChild(descriptionItem);

    const authorItem = document.createElement('h3');
    authorItem.innerHTML = newItem.author;
    listItem.appendChild(authorItem);
  });
};

