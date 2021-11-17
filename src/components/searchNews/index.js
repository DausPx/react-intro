import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { searchNews, fetchMoreNews, showArticle } from "../../actions"
import { newsAPI } from "../../api"

function SearchNews(props) {
    const [search, setSearch] = useState('')
    const searchList = useSelector(state => state.news.newsList)
    const dispatch = useDispatch()
    const [language, setLanguage] = useState('en')
    const [page, setPage]= useState(1)
    const navigate = useNavigate()

    function onSearchChange(e) {
        setSearch(e.target.value) 
    }

    function onFinish(e) {
        if(e.key === 'Enter'){
            //fetch data
            newsAPI.get(`everything?q=${search}&language=${language}&page=${page}&apiKey=9a60aff57a4040f190b175c5c0a9d25f`)
            .then((result)=>{
                dispatch(searchNews(result.data.articles))
            })
            
        }
    }

    useEffect(()=>{
        async function fetch() {
            newsAPI.get(`everything?q=${search}&language=${language}&page=${page}&apiKey=9a60aff57a4040f190b175c5c0a9d25f`)
            .then((result)=>{
                dispatch(fetchMoreNews(result.data.articles))
            })
        }
        fetch()
    },[page])

    function onLanguageSelect(e) {
        setLanguage(e.target.value)
    }
    console.log(searchList)
    return <div>
        <label>Search:</label>
        <input value={search} onChange={onSearchChange} onKeyPress={onFinish}/>
        <br/>
        <label>Select Language:</label>
        <select defaultValue={language} onChange={onLanguageSelect}>
            <option value='en'>English</option>
            <option value='ar'>Arabic</option>
            <option value='de'>German</option>
            <option value='es'>Spanish</option>
            <option value='fr'>French</option>
            <option value='it'>Italy</option>
            <option value='ru'>Russia</option>
            <option value='zh'>Lets see</option>
        </select>
        <br/>
        <div style={{
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
            {searchList.map((article, index)=>{
                return <div style={{
                    width: '400px',
                    height: '200px'

                }}
                key={index}
                >
                    <p>{article.title}</p>
                    <p>{article.author}</p>
                    <br></br>
                    <button onClick={()=>{
                        dispatch(showArticle(article))
                        navigate('../article',{state:{...article} })
                    }}>Show me</button>
                    <Link to={`../article/${index}`} >Article</Link>
                </div>
            })}
        </div>
        <div>
            <button onClick={()=>setPage(page+1)}>Load More</button>
        </div>
    </div>
    
}
export default SearchNews