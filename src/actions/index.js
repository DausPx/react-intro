export function increment() {
  return { type: "increment" };
}

export function decrement() {
    return { type: "decrement" }
}

export function incrementByAmount(number) {
    return { type: 'incrementByAmount', payload: number}
    
}


export function searchNews(newsList){
  return {type: 'news/search', payload: newsList}
}

export function fetchMoreNews(newsList){
  return {type: 'news/fetchmore', payload: newsList}
}

export function showArticle(article){
  return {type: "news/setArticle", payload: article}
}